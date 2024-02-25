/*
 * Copyright (C) 2024  Yomitan Authors
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

import {LanguageTransformer} from './language-transformer.js';

export class MultiLanguageTransformer {
    constructor() {
        /** @type {Map<string, LanguageTransformer>} */
        this._languageTransformers = new Map();
    }

    /**
     * @param {import('language-transformer').LanguageTransformDescriptor[]} languageTransformDescriptors
     */
    prepare(languageTransformDescriptors) {
        for (const descriptor of languageTransformDescriptors) {
            const languageTransformer = new LanguageTransformer();
            languageTransformer.addDescriptor(descriptor);
            this._languageTransformers.set(descriptor.language, languageTransformer);
        }
    }

    /**
     * @param {string} language
     * @param {string[]} partsOfSpeech
     * @returns {number}
     */
    getConditionFlagsFromPartsOfSpeech(language, partsOfSpeech) {
        const languageTransformer = this._languageTransformers.get(language);
        if (typeof languageTransformer === 'undefined') { return 0; }
        return languageTransformer.getConditionFlagsFromPartsOfSpeech(partsOfSpeech);
    }

    /**
     * @param {string} language
     * @param {string[]} conditionTypes
     * @returns {number}
     */
    getConditionFlagsFromConditionTypes(language, conditionTypes) {
        const languageTransformer = this._languageTransformers.get(language);
        if (typeof languageTransformer === 'undefined') { return 0; }
        return languageTransformer.getConditionFlagsFromConditionTypes(conditionTypes);
    }

    /**
     * @param {string} language
     * @param {string} conditionType
     * @returns {number}
     */
    getConditionFlagsFromConditionType(language, conditionType) {
        const languageTransformer = this._languageTransformers.get(language);
        if (typeof languageTransformer === 'undefined') { return 0; }
        return languageTransformer.getConditionFlagsFromConditionType(conditionType);
    }

    /**
     * @param {string} language
     * @param {string} sourceText
     * @returns {import('language-transformer-internal').TransformedText[]}
     */
    transform(language, sourceText) {
        const languageTransformer = this._languageTransformers.get(language);
        if (typeof languageTransformer === 'undefined') { return [LanguageTransformer.createTransformedText(sourceText, 0, [])]; }
        return languageTransformer.transform(sourceText);
    }
}
