/*
 * Copyright (C) 2023  Yomitan Authors
 * Copyright (C) 2016-2022  Yomichan Authors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import * as wanakana from '../../lib/wanakana.js';
import {ClipboardReader} from '../comm/clipboard-reader.js';
import {invokeMessageHandler} from '../core.js';
import {createApiMap, getApiMapHandler} from '../core/api-map.js';
import {ArrayBufferUtil} from '../data/sandbox/array-buffer-util.js';
import {DictionaryDatabase} from '../dictionary/dictionary-database.js';
import {LanguageUtil} from '../language/language-util.js';
import {JapaneseUtil} from '../language/languages/ja/japanese-util.js';
import {Translator} from '../language/translator.js';

/**
 * This class controls the core logic of the extension, including API calls
 * and various forms of communication between browser tabs and external applications.
 */
export class Offscreen {
    /**
     * Creates a new instance.
     */
    constructor() {
        /**
         *
         */
        this._languageUtil = new LanguageUtil();
        /** @type {JapaneseUtil} */
        this._japaneseUtil = new JapaneseUtil(wanakana);
        /** @type {DictionaryDatabase} */
        this._dictionaryDatabase = new DictionaryDatabase();
        /** @type {Translator} */
        this._translator = new Translator({
            languageUtil: this._languageUtil,
            japaneseUtil: this._japaneseUtil,
            database: this._dictionaryDatabase
        });
        /** @type {ClipboardReader} */
        this._clipboardReader = new ClipboardReader({
            // eslint-disable-next-line no-undef
            document: (typeof document === 'object' && document !== null ? document : null),
            pasteTargetSelector: '#clipboard-paste-target',
            richContentPasteTargetSelector: '#clipboard-rich-content-paste-target'
        });


        /* eslint-disable no-multi-spaces */
        /** @type {import('offscreen').OffscreenApiMapInit} */
        const messageHandlersInit = [
            ['clipboardGetTextOffscreen',    this._getTextHandler.bind(this)],
            ['clipboardGetImageOffscreen',   this._getImageHandler.bind(this)],
            ['clipboardSetBrowserOffscreen', this._setClipboardBrowser.bind(this)],
            ['databasePrepareOffscreen',     this._prepareDatabaseHandler.bind(this)],
            ['getDictionaryInfoOffscreen',   this._getDictionaryInfoHandler.bind(this)],
            ['databasePurgeOffscreen',       this._purgeDatabaseHandler.bind(this)],
            ['databaseGetMediaOffscreen',    this._getMediaHandler.bind(this)],
            ['translatorPrepareOffscreen',   this._prepareTranslatorHandler.bind(this)],
            ['findKanjiOffscreen',           this._findKanjiHandler.bind(this)],
            ['findTermsOffscreen',           this._findTermsHandler.bind(this)],
            ['getTermFrequenciesOffscreen',  this._getTermFrequenciesHandler.bind(this)],
            ['clearDatabaseCachesOffscreen', this._clearDatabaseCachesHandler.bind(this)]
        ];

        /** @type {import('offscreen').OffscreenApiMap} */
        this._messageHandlers = createApiMap(messageHandlersInit);

        /** @type {?Promise<void>} */
        this._prepareDatabasePromise = null;
    }

    /** */
    prepare() {
        chrome.runtime.onMessage.addListener(this._onMessage.bind(this));
    }

    /** @type {import('offscreen').OffscreenApiHandler<'clipboardGetTextOffscreen'>} */
    async _getTextHandler({useRichText}) {
        return await this._clipboardReader.getText(useRichText);
    }

    /** @type {import('offscreen').OffscreenApiHandler<'clipboardGetImageOffscreen'>} */
    async _getImageHandler() {
        return await this._clipboardReader.getImage();
    }

    /** @type {import('offscreen').OffscreenApiHandler<'clipboardSetBrowserOffscreen'>} */
    _setClipboardBrowser({value}) {
        this._clipboardReader.browser = value;
    }

    /** @type {import('offscreen').OffscreenApiHandler<'databasePrepareOffscreen'>} */
    _prepareDatabaseHandler() {
        if (this._prepareDatabasePromise !== null) {
            return this._prepareDatabasePromise;
        }
        this._prepareDatabasePromise = this._dictionaryDatabase.prepare();
        return this._prepareDatabasePromise;
    }

    /** @type {import('offscreen').OffscreenApiHandler<'getDictionaryInfoOffscreen'>} */
    async _getDictionaryInfoHandler() {
        return await this._dictionaryDatabase.getDictionaryInfo();
    }

    /** @type {import('offscreen').OffscreenApiHandler<'databasePurgeOffscreen'>} */
    async _purgeDatabaseHandler() {
        return await this._dictionaryDatabase.purge();
    }

    /** @type {import('offscreen').OffscreenApiHandler<'databaseGetMediaOffscreen'>} */
    async _getMediaHandler({targets}) {
        const media = await this._dictionaryDatabase.getMedia(targets);
        const serializedMedia = media.map((m) => ({...m, content: ArrayBufferUtil.arrayBufferToBase64(m.content)}));
        return serializedMedia;
    }

    /** @type {import('offscreen').OffscreenApiHandler<'translatorPrepareOffscreen'>} */
    _prepareTranslatorHandler() {
        this._translator.prepare();
    }

    /** @type {import('offscreen').OffscreenApiHandler<'findKanjiOffscreen'>} */
    async _findKanjiHandler({text, options}) {
        /** @type {import('translation').FindKanjiOptions} */
        const modifiedOptions = {
            ...options,
            enabledDictionaryMap: new Map(options.enabledDictionaryMap)
        };
        return await this._translator.findKanji(text, modifiedOptions);
    }

    /** @type {import('offscreen').OffscreenApiHandler<'findTermsOffscreen'>} */
    async _findTermsHandler({mode, text, options}) {
        const enabledDictionaryMap = new Map(options.enabledDictionaryMap);
        const excludeDictionaryDefinitions = (
            options.excludeDictionaryDefinitions !== null ?
            new Set(options.excludeDictionaryDefinitions) :
            null
        );
        const textReplacements = options.textReplacements.map((group) => {
            if (group === null) { return null; }
            return group.map((opt) => {
                // https://stackoverflow.com/a/33642463
                const match = opt.pattern.match(/\/(.*?)\/([a-z]*)?$/i);
                const [, pattern, flags] = match !== null ? match : ['', '', ''];
                return {...opt, pattern: new RegExp(pattern, flags ?? '')};
            });
        });
        /** @type {import('translation').FindTermsOptions} */
        const modifiedOptions = {
            ...options,
            enabledDictionaryMap,
            excludeDictionaryDefinitions,
            textReplacements
        };
        return this._translator.findTerms(mode, text, modifiedOptions);
    }

    /** @type {import('offscreen').OffscreenApiHandler<'getTermFrequenciesOffscreen'>} */
    _getTermFrequenciesHandler({termReadingList, dictionaries}) {
        return this._translator.getTermFrequencies(termReadingList, dictionaries);
    }

    /** @type {import('offscreen').OffscreenApiHandler<'clearDatabaseCachesOffscreen'>} */
    _clearDatabaseCachesHandler() {
        this._translator.clearDatabaseCaches();
    }

    /** @type {import('extension').ChromeRuntimeOnMessageCallback} */
    _onMessage({action, params}, sender, callback) {
        const messageHandler = getApiMapHandler(this._messageHandlers, action);
        if (typeof messageHandler === 'undefined') { return false; }
        return invokeMessageHandler(messageHandler, params, callback, sender);
    }
}
