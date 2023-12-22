/*
 * Copyright (C) 2023  Yomitan Authors
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

import type {DictionaryController} from '../../ext/js/pages/settings/dictionary-controller';
import type {ScanInputsController} from '../../ext/js/pages/settings/scan-inputs-controller';
import type {ScanInputsSimpleController} from '../../ext/js/pages/settings/scan-inputs-simple-controller';
import type * as Core from './core';
import type * as Settings from './settings';
import type * as SettingsModifications from './settings-modifications';

export type PageExitPrevention = {
    end: () => void;
};

export type EventType = 'optionsChanged' | 'optionsContextChanged' | 'permissionsChanged' | 'dictionarySettingsReordered' | 'scanInputsChanged';

export type OptionsChangedEvent = {
    options: Settings.ProfileOptions;
    optionsContext: Settings.OptionsContext;
};

export type PermissionsChangedEvent = {
    permissions: chrome.permissions.Permissions;
};

export type DictionarySettingsReorderedEvent = {
    source: DictionaryController;
};

export type ScanInputsChangedEvent = {
    source: ScanInputsController | ScanInputsSimpleController;
};

export type SettingsRead<THasScope extends boolean> = THasScope extends true ? SettingsModifications.ScopedRead : SettingsModifications.Read;

export type SettingsModification<THasScope extends boolean> = THasScope extends true ? SettingsModifications.ScopedModification : SettingsModifications.Modification;

export type SettingsExtraFields<THasScope extends boolean> = THasScope extends true ? null : SettingsModifications.OptionsScope;

export type ModifyResult = Core.Response<SettingsModifications.ModificationResult>;
