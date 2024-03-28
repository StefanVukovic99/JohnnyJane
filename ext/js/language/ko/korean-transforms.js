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

import {suffixInflection} from '../language-transforms.js';

/** @type {import('language-transformer').LanguageTransformDescriptor} */
export const koreanTransforms = {
    language: 'ko',
    conditions: {
        v: {
            name: 'Verb or Auxiliary Verb',
            isDictionaryForm: true,
            i18n: [
                {
                    language: 'ko',
                    name: '동사 / 보조 동사'
                }
            ]
        },
        adj: {
            name: 'Adjective or Auxiliary Adjective',
            isDictionaryForm: true,
            i18n: [
                {
                    language: 'ko',
                    name: '형용사 / 보조 형용사'
                }
            ]
        },
        ida: {
            name: 'Postpositional particle ida',
            isDictionaryForm: true,
            i18n: [
                {
                    language: 'ko',
                    name: '조사 이다'
                }
            ]
        },
        p: {
            name: 'Intermediate past tense ending',
            isDictionaryForm: false
        },
        f: {
            name: 'Intermediate future tense ending',
            isDictionaryForm: false
        },
        eusi: {
            name: 'Intermediate formal ending',
            isDictionaryForm: false
        },
        euob: {
            name: 'Intermediate formal ending',
            isDictionaryForm: false
        },
        euo: {
            name: 'Intermediate formal ending',
            isDictionaryForm: false
        },
        sao: {
            name: 'Intermediate formal ending',
            isDictionaryForm: false
        },
        saob: {
            name: 'Intermediate formal ending',
            isDictionaryForm: false
        },
        sab: {
            name: 'Intermediate formal ending',
            isDictionaryForm: false
        },
        jaob: {
            name: 'Intermediate formal ending',
            isDictionaryForm: false
        },
        jao: {
            name: 'Intermediate formal ending',
            isDictionaryForm: false
        },
        jab: {
            name: 'Intermediate formal ending',
            isDictionaryForm: false
        },
        do: {
            name: 'Intermediate ending',
            isDictionaryForm: false
        }
    },
    transforms: [
        {
            name: '어간',
            description: 'Stem',
            rules: [
                suffixInflection('ㅂㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅃㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅈㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅉㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄸㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄱㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄲㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅆㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅎㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅋㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅌㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅊㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅍㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅛㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅕㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅑㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅒㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅔㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅖㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅗㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅠㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅜㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅡㄷㅏ', 'ㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-거나',
            rules: [
                suffixInflection('ㄱㅓㄴㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㄴㅏ', '', [], ['p', 'f', 'euob', 'eusi'])
            ]
        },
        {
            name: '-거늘',
            rules: [
                suffixInflection('ㄱㅓㄴㅡㄹ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㄴㅡㄹ', '', [], ['p', 'f', 'euob', 'eusi'])
            ]
        },
        {
            name: '-거니',
            rules: [
                suffixInflection('ㄱㅓㄴㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㄴㅣ', '', [], ['p', 'f', 'euob', 'eusi'])
            ]
        },
        {
            name: '-거니와',
            rules: [
                suffixInflection('ㄱㅓㄴㅣㅇㅗㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㄴㅣㅇㅗㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-거던',
            rules: [
                suffixInflection('ㄱㅓㄷㅓㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㄷㅓㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-거드면',
            rules: [
                suffixInflection('ㄱㅓㄷㅡㅁㅕㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㄷㅡㅁㅕㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-거든',
            rules: [
                suffixInflection('ㄱㅓㄷㅡㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㄷㅡㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-거들랑',
            rules: [
                suffixInflection('ㄱㅓㄷㅡㄹㄹㅏㅇ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㄷㅡㄹㄹㅏㅇ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-거라',
            rules: [
                suffixInflection('ㄱㅓㄹㅏ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-건',
            rules: [
                suffixInflection('ㄱㅓㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㄴ', '', [], ['p', 'f', 'euob', 'eusi'])
            ]
        },
        {
            name: '-건대',
            rules: [
                suffixInflection('ㄱㅓㄴㄷㅐ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄱㅓㄴㄷㅐ', '', [], ['p', 'eusi', 'jaob'])
            ]
        },
        {
            name: '-건마는',
            rules: [
                suffixInflection('ㄱㅓㄴㅁㅏㄴㅡㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㄴㅁㅏㄴㅡㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-건만',
            rules: [
                suffixInflection('ㄱㅓㄴㅁㅏㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㄴㅁㅏㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-걸랑',
            rules: [
                suffixInflection('ㄱㅓㄹㄹㅏㅇ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㄹㄹㅏㅇ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-것다',
            rules: [
                suffixInflection('ㄱㅓㅅㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㅅㄷㅏ', '', [], ['p', 'eusi'])
            ]
        },
        {
            name: '-것마는',
            rules: [
                suffixInflection('ㄱㅓㄴㅁㅏㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㄴㅁㅏㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-게',
            rules: [
                suffixInflection('ㄱㅔ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅔ', '', [], ['p', 'eusi'])
            ]
        },
        {
            name: '-게끔',
            rules: [
                suffixInflection('ㄱㅔㄲㅡㅁ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄱㅔㄲㅡㅁ', '', [], ['eusi'])
            ]
        },
        {
            name: '-게나',
            rules: [
                suffixInflection('ㄱㅔㄴㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄱㅔㄴㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-게시리',
            rules: [
                suffixInflection('ㄱㅔㅅㅣㄹㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄱㅔㅅㅣㄹㅣ', '', [], ['eusi'])
            ]
        },
        {
            name: '-겠',
            rules: [
                suffixInflection('ㄱㅔㅆ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅔㅆ', '', [], ['p', 'eusi']),
                suffixInflection('ㄱㅔㅆ', 'ㄷㅏ', ['f'], ['v', 'adj']),
                suffixInflection('ㄱㅔㅆ', '', ['f'], ['p', 'eusi'])
            ]
        },
        {
            name: '-겠어',
            rules: [
                suffixInflection('ㄱㅔㅆㅇㅓ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅔㅆㅇㅓ', '', [], ['p', 'eusi'])
            ]
        },
        {
            name: '-겠어요',
            rules: [
                suffixInflection('ㄱㅔㅆㅇㅓㅇㅛ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅔㅆㅇㅓㅇㅛ', '', [], ['p', 'eusi'])
            ]
        },
        {
            name: '-겠다',
            rules: [
                suffixInflection('ㄱㅔㅆㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅔㅆㄷㅏ', '', [], ['p', 'eusi'])
            ]
        },
        {
            name: '-겠습니다',
            rules: [
                suffixInflection('ㄱㅔㅆㅅㅡㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅔㅆㅅㅡㅂㄴㅣㄷㅏ', '', [], ['p', 'eusi'])
            ]
        },
        {
            name: '-고',
            rules: [
                suffixInflection('ㄱㅗ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄱㅗ', '', [], ['p', 'f', 'eusi', 'saob', 'euo', 'sab', 'jaob', 'jab'])
            ]
        },
        {
            name: '-고는 하다',
            rules: [
                suffixInflection('ㄱㅗㄴㅡㄴ ㅎㅏㄷㅏ', 'ㄷㅏ', ['v'], ['v']),
                suffixInflection('ㄱㅗㄴㅡㄴ ㅎㅏㄷㅏ', '', ['v'], ['eusi'])
            ]
        },
        {
            name: '-곤 하다',
            rules: [
                suffixInflection('ㄱㅗㄴ ㅎㅏㄷㅏ', 'ㄷㅏ', ['v'], ['v']),
                suffixInflection('ㄱㅗㄴ ㅎㅏㄷㅏ', '', ['v'], ['eusi'])
            ]
        },
        {
            name: '-고는',
            rules: [
                suffixInflection('ㄱㅗㄴㅡㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄱㅗㄴㅡㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-곤',
            rules: [
                suffixInflection('ㄱㅗㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄱㅗㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-고도',
            rules: [
                suffixInflection('ㄱㅗㄷㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅗㄷㅗ', '', [], ['eusi'])
            ]
        },
        {
            name: '-고말고',
            rules: [
                suffixInflection('ㄱㅓㅁㅏㄹㄱㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅓㅁㅏㄹㄱㅗ', '', [], ['p', 'eusi'])
            ]
        },
        {
            name: '-고서',
            rules: [
                suffixInflection('ㄱㅗㅅㅓ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄱㅗㅅㅓ', '', [], ['eusi']),
                suffixInflection('ㅇㅏㄴㅣㄷㅏㄱㅗㅅㅓ', 'ㅇㅏㄴㅣㄷㅏ', [], ['adj'])
            ]
        },
        {
            name: '-고야',
            rules: [
                suffixInflection('ㄱㅗㅇㅑ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄱㅗㅇㅑ', '', [], ['eusi'])
            ]
        },
        {
            name: '-고자',
            rules: [
                suffixInflection('ㄱㅗㅈㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄱㅗㅈㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅣㅆㄱㅗㅈㅏ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄱㅗㅈㅏ', '없다', [], [])
            ]
        },
        {
            name: '-고저',
            rules: [
                suffixInflection('ㄱㅗㅈㅓ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄱㅗㅈㅓ', '', [], ['eusi']),
                suffixInflection('ㅇㅣㅆㄱㅗㅈㅓ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄱㅗㅈㅓ', '없다', [], [])
            ]
        },
        {
            name: '-관데',
            rules: [
                suffixInflection('ㄱㅗㅏㄴㄷㅔ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅗㅏㄴㄷㅔ', '', [], ['p', 'eusi'])
            ]
        },
        {
            name: '-구나',
            rules: [
                suffixInflection('ㄱㅜㄴㅏ', 'ㄷㅏ', [], ['adj', 'ida']),
                suffixInflection('ㄱㅜㄴㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-구려',
            rules: [
                suffixInflection('ㄱㅜㄹㅕ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅜㄹㅕ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-구료',
            rules: [
                suffixInflection('ㄱㅜㄹㅛ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅜㄹㅛ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-구만',
            rules: [
                suffixInflection('ㄱㅜㅁㅏㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅜㅁㅏㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-구먼',
            rules: [
                suffixInflection('ㄱㅜㅁㅓㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅜㅁㅓㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-구면',
            rules: [
                suffixInflection('ㄱㅜㅁㅕㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅜㅁㅕㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-군',
            rules: [
                suffixInflection('ㄱㅜㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅜㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-기',
            rules: [
                suffixInflection('ㄱㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅣ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-기로',
            rules: [
                suffixInflection('ㄱㅣㄹㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida'])
            ]
        },
        {
            name: '-기로니',
            rules: [
                suffixInflection('ㄱㅣㄹㅗㄴㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida'])
            ]
        },
        {
            name: '-기로서',
            rules: [
                suffixInflection('ㄱㅣㄹㅗㅅㅓ', 'ㄷㅏ', [], ['v', 'adj', 'ida'])
            ]
        },
        {
            name: '-기로서니',
            rules: [
                suffixInflection('ㄱㅣㄹㅗㅅㅓㄴㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida'])
            ]
        },
        {
            name: '-기로선들',
            rules: [
                suffixInflection('ㄱㅣㄹㅗㅅㅓㄴㄷㅡㄹ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅣㄹㅗㅅㅓㄴㄷㅡㄹ', '', [], ['p'])
            ]
        },
        {
            name: '-기에',
            rules: [
                suffixInflection('ㄱㅣㅇㅔ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅣㅇㅔ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-길래',
            rules: [
                suffixInflection('ㄱㅣㄹㄹㅐ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄱㅣㄹㄹㅐ', '', [], ['p', 'eusi'])
            ]
        },
        {
            name: '-ㄹ/을',
            rules: [
                suffixInflection('ㄹ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을거나',
            rules: [
                suffixInflection('ㄹㄱㅓㄴㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄱㅓㄴㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄱㅓㄴㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄱㅓㄴㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄱㅓㄴㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄱㅓㄴㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄱㅓㄴㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄱㅓㄴㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄱㅓㄴㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-ㄹ/을걸',
            rules: [
                suffixInflection('ㄹㄱㅓㄹ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㄱㅓㄹ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄱㅓㄹ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄱㅓㄹ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄱㅓㄹ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄱㅓㄹ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄱㅓㄹ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄱㅓㄹ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄱㅓㄹ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을게',
            rules: [
                suffixInflection('ㄹㄱㅔ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㄱㅔ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㄱㅔ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㄱㅔ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㄱㅔ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㄱㅔ', 'ㄷㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-ㄹ/을 거야',
            rules: [
                suffixInflection('ㄹ ㄱㅓㅇㅑ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹ ㄱㅓㅇㅑ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹ ㄱㅓㅇㅑ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹ ㄱㅓㅇㅑ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹ ㄱㅓㅇㅑ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹ ㄱㅓㅇㅑ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹ ㄱㅓㅇㅑ', 'ㄷㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-ㄹ/을 거예요',
            rules: [
                suffixInflection('ㄹ ㄱㅓㅇㅖㅇㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹ ㄱㅓㅇㅖㅇㅛ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹ ㄱㅓㅇㅖㅇㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹ ㄱㅓㅇㅖㅇㅛ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹ ㄱㅓㅇㅖㅇㅛ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹ ㄱㅓㅇㅖㅇㅛ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹ ㄱㅓㅇㅖㅇㅛ', 'ㄷㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-ㄹ/을 것이다',
            rules: [
                suffixInflection('ㄹ ㄱㅓㅅㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹ ㄱㅓㅅㅇㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹ ㄱㅓㅅㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹ ㄱㅓㅅㅇㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹ ㄱㅓㅅㅇㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹ ㄱㅓㅅㅇㅣㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹ ㄱㅓㅅㅇㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-ㄹ/을 것입니다',
            rules: [
                suffixInflection('ㄹ ㄱㅓㅅㅇㅣㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹ ㄱㅓㅅㅇㅣㅂㄴㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹ ㄱㅓㅅㅇㅣㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹ ㄱㅓㅅㅇㅣㅂㄴㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹ ㄱㅓㅅㅇㅣㅂㄴㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹ ㄱㅓㅅㅇㅣㅂㄴㅣㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹ ㄱㅓㅅㅇㅣㅂㄴㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-ㄹ/을 거다',
            rules: [
                suffixInflection('ㄹ ㄱㅓㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹ ㄱㅓㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹ ㄱㅓㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹ ㄱㅓㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹ ㄱㅓㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹ ㄱㅓㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹ ㄱㅓㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-ㄹ/을 겁니다',
            rules: [
                suffixInflection('ㄹ ㄱㅓㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹ ㄱㅓㅂㄴㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹ ㄱㅓㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹ ㄱㅓㅂㄴㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹ ㄱㅓㅂㄴㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹ ㄱㅓㅂㄴㅣㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹ ㄱㅓㅂㄴㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-ㄹ/을께',
            rules: [
                suffixInflection('ㄹㄲㅔ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄲㅔ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄲㅔ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄲㅔ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄲㅔ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄲㅔ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄲㅔ', 'ㄷㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-(으)나',
            rules: [
                suffixInflection('ㄴㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄴㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㄴㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㅏ', '', [], ['p', 'f']),
                suffixInflection('ㄴㅏ', '', [], ['p', 'f', 'eusi', 'sao'])
            ]
        },
        {
            name: '-나니',
            rules: [
                suffixInflection('ㄴㅏㄴㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅏㄴㅣ', '', [], ['p', 'f', 'eusi', 'sab', 'euob'])
            ]
        },
        {
            name: '-(으)나마',
            rules: [
                suffixInflection('ㄴㅏㅁㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㄴㅏㅁㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄴㅏㅁㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㅏㅁㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅏㅁㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅏㅁㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㄴㅏㅁㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅏㅁㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄴㅏㅁㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-나이까',
            rules: [
                suffixInflection('ㄴㅏㅇㅣㄲㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅏㅇㅣㄲㅏ', '', [], ['p', 'f', 'eusi', 'saob']),
                suffixInflection('ㅇㅣㅆㄴㅏㅇㅣㄲㅏ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅏㅇㅣㄲㅏ', '없다', [], [])
            ]
        },
        {
            name: '-나이다',
            rules: [
                suffixInflection('ㄴㅏㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅏㅇㅣㄷㅏ', '', [], ['p', 'f', 'eusi', 'saob', 'jaob', 'jab']),
                suffixInflection('ㅇㅣㅆㄴㅏㅇㅣㄷㅏ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅏㅇㅣㄷㅏ', '없다', [], [])
            ]
        },
        {
            name: '-남',
            rules: [
                suffixInflection('ㄴㅏㅁ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅏㅁ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(으)냐',
            rules: [
                suffixInflection('ㄴㅑ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㄴㅑ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄴㅑ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㅑ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅑ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅑ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㄴㅑ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅑ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅡㄴㅑ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(으)냐고',
            rules: [
                suffixInflection('ㄴㅑㄱㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㄴㅑㄱㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄴㅑㄱㅗ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㅑㄱㅗ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅑㄱㅗ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅑㄱㅗ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㄴㅑㄱㅗ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅑㄱㅗ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅡㄴㅑㄱㅗ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-너라',
            rules: [
                suffixInflection('ㄴㅓㄹㅏ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-네',
            rules: [
                suffixInflection('ㄴㅔ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄴㅔ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅔ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-노니',
            rules: [
                suffixInflection('ㄴㅗㄴㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅗㄴㅣ', '', [], ['p', 'f', 'eusi', 'sab', 'euob'])
            ]
        },
        {
            name: '-노라',
            rules: [
                suffixInflection('ㄴㅗㄹㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅗㄹㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-노라고',
            rules: [
                suffixInflection('ㄴㅗㄹㅏㄱㅗ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-노라니',
            rules: [
                suffixInflection('ㄴㅗㄹㅏㄴㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅣㅆㄴㅗㄹㅏㄴㅣ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅗㄹㅏㄴㅣ', '없다', [], [])
            ]
        },
        {
            name: '-노라니까',
            rules: [
                suffixInflection('ㄴㅗㄹㅏㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅣㅆㄴㅗㄹㅏㄴㅣㄲㅏ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅗㄹㅏㄴㅣㄲㅏ', '없다', [], [])
            ]
        },
        {
            name: '-노라면',
            rules: [
                suffixInflection('ㄴㅗㄹㅏㅁㅕㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅗㄹㅏㅁㅕㄴ', '', [], ['eusi']),
                suffixInflection('ㅇㅣㅆㄴㅗㄹㅏㅁㅕㄴ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅗㄹㅏㅁㅕㄴ', '없다', [], [])
            ]
        },
        {
            name: '-(으)뇨',
            rules: [
                suffixInflection('ㄴㅛ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㄴㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄴㅛ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㅛ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅛ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅛ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㄴㅛ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅛ', '', [], ['eusi'])
            ]
        },
        {
            name: '-누',
            rules: [
                suffixInflection('ㄴㅜ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅜ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-누나',
            rules: [
                suffixInflection('ㄴㅜㄴㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅜㄴㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-누만',
            rules: [
                suffixInflection('ㄴㅜㅁㅏㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅜㅁㅏㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-누먼',
            rules: [
                suffixInflection('ㄴㅜㅁㅓㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅜㅁㅓㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-느냐',
            rules: [
                suffixInflection('ㄴㅡㄴㅑ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㅑ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅑ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅑ', '없다', [], [])
            ]
        },
        {
            name: '-느냐고',
            rules: [
                suffixInflection('ㄴㅡㄴㅑㄱㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㅑㄱㅗ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅑㄱㅗ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅑㄱㅗ', '없다', [], [])
            ]
        },
        {
            name: '-느뇨',
            rules: [
                suffixInflection('ㄴㅡㄴㅛ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㅛ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅛ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅛ', '없다', [], [])
            ]
        },
        {
            name: '-느니',
            rules: [
                suffixInflection('ㄴㅡㄴㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㅣ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅣ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅣ', '없다', [], [])
            ]
        },
        {
            name: '-느니라',
            rules: [
                suffixInflection('ㄴㅡㄴㅣㄹㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㅣㄹㅏ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅣㄹㅏ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅣㄹㅏ', '없다', [], [])
            ]
        },
        {
            name: '-느니만',
            rules: [
                suffixInflection('ㄴㅡㄴㅣㅁㅏㄴ ㅁㅗㅅㅎㅏㄷㅏ', 'ㄷㅏ', ['v'], ['v']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅣㅁㅏㄴ ㅁㅗㅅㅎㅏㄷㅏ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅣㅁㅏㄴ ㅁㅗㅅㅎㅏㄷㅏ', '없다', [], [])
            ]
        },
        {
            name: '-느니만치',
            rules: [
                suffixInflection('ㄴㅡㄴㅣㅁㅏㄴㅊㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㅣㅁㅏㄴㅊㅣ', '', [], ['eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅣㅁㅏㄴㅊㅣ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅣㅁㅏㄴㅊㅣ', '없다', [], [])
            ]
        },
        {
            name: '-느니만큼',
            rules: [
                suffixInflection('ㄴㅡㄴㅣㅁㅏㄴㅋㅡㅁ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㅣㅁㅏㄴㅋㅡㅁ', '', [], ['eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅣㅁㅏㄴㅋㅡㅁ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅣㅁㅏㄴㅋㅡㅁ', '없다', [], [])
            ]
        },
        {
            name: '-느라',
            rules: [
                suffixInflection('ㄴㅡㄹㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄹㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-느라고',
            rules: [
                suffixInflection('ㄴㅡㄹㅏㄱㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄹㅏㄱㅗ', '', [], ['eusi'])
            ]
        },
        {
            name: '-늬라고',
            rules: [
                suffixInflection('ㄴㅡㅣㄹㅏㄱㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㅣㄹㅏㄱㅗ', '', [], ['eusi'])
            ]
        },
        {
            name: '-는',
            rules: [
                suffixInflection('ㄴㅡㄴ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄴㅡㄴ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴ', '', [], ['eusi', 'f']),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴ', '없다', [], ['adj'])
            ]
        },
        {
            name: '-ㄴ/은',
            rules: [
                suffixInflection('ㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴ', '', [], ['eusi', 'f'])
            ]
        },
        {
            name: '-(으/느)ㄴ가',
            rules: [
                suffixInflection('ㄴㄱㅏ', 'ㄷㅏ', [], ['adj', 'ida']),
                suffixInflection('ㄴㄱㅏ', 'ㄹㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅡㄴㄱㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄴㄱㅏ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅡㄴㄱㅏ', 'ㄹㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㄱㅏ', '', [], ['eusi']),
                suffixInflection('ㄴㅡㄴㄱㅏ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㄱㅏ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㄱㅏ', '없다', [], [])
            ]
        },
        {
            name: '-(으/느)ㄴ감',
            rules: [
                suffixInflection('ㄴㄱㅏㅁ', 'ㄷㅏ', [], ['adj', 'ida']),
                suffixInflection('ㄴㄱㅏㅁ', 'ㄹㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅡㄴㄱㅏㅁ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄴㄱㅏㅁ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅡㄴㄱㅏㅁ', 'ㄹㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㄱㅏㅁ', '', [], ['eusi']),
                suffixInflection('ㄴㅡㄴㄱㅏㅁ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㄱㅏㅁ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㄱㅏㅁ', '없다', [], [])
            ]
        },
        {
            name: '-(으/느)ㄴ걸',
            rules: [
                suffixInflection('ㄴㄱㅓㄹ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄴㄱㅓㄹ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅡㄴㄱㅓㄹ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄴㄱㅓㄹ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㄱㅓㄹ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㄱㅓㄹ', '', [], ['eusi']),
                suffixInflection('ㄴㅡㄴㄱㅓㄹ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㄱㅓㄹ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㄱㅓㄹ', '없다', [], [])
            ]
        },
        {
            name: '-(으/느)ㄴ고',
            rules: [
                suffixInflection('ㄴㄱㅗ', 'ㄷㅏ', [], ['adj', 'ida']),
                suffixInflection('ㄴㄱㅗ', 'ㄹㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅡㄴㄱㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄴㄱㅗ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅡㄴㄱㅗ', 'ㄹㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㄱㅗ', '', [], ['eusi']),
                suffixInflection('ㄴㅡㄴㄱㅗ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㄱㅗ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㄱㅗ', '없다', [], [])
            ]
        },
        {
            name: '-는구나',
            rules: [
                suffixInflection('ㄴㅡㄴㄱㅜㄴㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄱㅜㄴㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-는구려',
            rules: [
                suffixInflection('ㄴㅡㄴㄱㅜㄹㅕ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄱㅜㄹㅕ', '', [], ['eusi'])
            ]
        },
        {
            name: '-는구료',
            rules: [
                suffixInflection('ㄴㅡㄴㄱㅜㄹㅛ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄱㅜㄹㅛ', '', [], ['eusi'])
            ]
        },
        {
            name: '-는구만',
            rules: [
                suffixInflection('ㄴㅡㄴㄱㅜㅁㅏㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄱㅜㅁㅏㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-는구먼',
            rules: [
                suffixInflection('ㄴㅡㄴㄱㅜㅁㅓㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄱㅜㅁㅓㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-는구면',
            rules: [
                suffixInflection('ㄴㅡㄴㄱㅜㅁㅕㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄱㅜㅁㅕㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-는군',
            rules: [
                suffixInflection('ㄴㅡㄴㄱㅜㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄱㅜㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-는궈니',
            rules: [
                suffixInflection('ㄴㅡㄴㄱㅜㅓㄴㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄱㅜㅓㄴㅣ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㄱㅜㅓㄴㅣ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㄱㅜㅓㄴㅣ', '없다', [], [])
            ]
        },
        {
            name: '-는과니',
            rules: [
                suffixInflection('ㄴㅡㄴㄱㅗㅏㄴㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄱㅗㅏㄴㅣ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㄱㅗㅏㄴㅣ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㄱㅗㅏㄴㅣ', '없다', [], [])
            ]
        },
        {
            name: '-ㄴ/는다',
            rules: [
                suffixInflection('ㄴㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다고',
            rules: [
                suffixInflection('ㄴㄷㅏㄱㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄱㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄱㅗ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㄱㅗ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㄱㅗ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㄱㅗ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다나',
            rules: [
                suffixInflection('ㄴㄷㅏㄴㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄴㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄴㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㄴㅏ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㄴㅏ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㄴㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다네',
            rules: [
                suffixInflection('ㄴㄷㅏㄴㅔ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄴㅔ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄴㅔ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㄴㅔ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㄴㅔ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㄴㅔ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다느니',
            rules: [
                suffixInflection('ㄴㄷㅏㄴㅡㄴㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄴㅡㄴㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄴㅡㄴㅣ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㄴㅡㄴㅣ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㄴㅡㄴㅣ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㄴㅡㄴㅣ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다니',
            rules: [
                suffixInflection('ㄴㄷㅏㄴㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄴㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄴㅣ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㄴㅣ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㄴㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅏㄴㅣ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다니까',
            rules: [
                suffixInflection('ㄴㄷㅏㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄴㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㄴㅣㄲㅏ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㄴㅣㄲㅏ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㄴㅣㄲㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다더라',
            rules: [
                suffixInflection('ㄴㄷㅏㄷㅓㄹㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄷㅓㄹㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄷㅓㄹㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㄷㅓㄹㅏ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㄷㅓㄹㅏ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㄷㅓㄹㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다마는',
            rules: [
                suffixInflection('ㄴㄷㅏㅁㅏㄴㅡㄴ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄴㅡㄴㄷㅏㅁㅏㄴㅡㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅁㅏㄴㅡㄴ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㅁㅏㄴㅡㄴ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㅁㅏㄴㅡㄴ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㅁㅏㄴㅡㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다만',
            rules: [
                suffixInflection('ㄴㄷㅏㅁㅏㄴ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄴㅡㄴㄷㅏㅁㅏㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅁㅏㄴ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㅁㅏㄴ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㅁㅏㄴ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㅁㅏㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다며',
            rules: [
                suffixInflection('ㄴㄷㅏㅁㅕ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅁㅕ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅁㅕ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㅁㅕ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㅁㅕ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㅁㅕ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다면',
            rules: [
                suffixInflection('ㄴㄷㅏㅁㅕㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅁㅕㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅁㅕㄴ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㅁㅕㄴ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㅁㅕㄴ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㅁㅕㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다면서',
            rules: [
                suffixInflection('ㄴㄷㅏㅁㅕㄴㅅㅓ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅁㅕㄴㅅㅓ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅁㅕㄴㅅㅓ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㅁㅕㄴㅅㅓ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㅁㅕㄴㅅㅓ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㅁㅕㄴㅅㅓ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다손',
            rules: [
                suffixInflection('ㄴㄷㅏㅅㅗㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅅㅗㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅅㅗㄴ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㅅㅗㄴ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㅁㅕㄴㅅㅗㄴ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㅁㅕㄴㅅㅗㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다오',
            rules: [
                suffixInflection('ㄴㄷㅏㅇㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅇㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅇㅗ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㅇㅗ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㅇㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅏㅇㅗ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)다지',
            rules: [
                suffixInflection('ㄴㄷㅏㅈㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅈㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅈㅣ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㅈㅣ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㅈㅣ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㅈㅣ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)단다',
            rules: [
                suffixInflection('ㄴㄷㅏㄴㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄴㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㄴㄷㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㄴㄷㅏ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㄴㄷㅏ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㄴㄷㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)담',
            rules: [
                suffixInflection('ㄴㄷㅏㅁ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅁ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅁ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㅁ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㅁ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄷㅏㅁ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)답니까',
            rules: [
                suffixInflection('ㄴㄷㅏㅂㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅂㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅂㄴㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㅂㄴㅣㄲㅏ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㅂㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅏㅂㄴㅣㄲㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)답니다',
            rules: [
                suffixInflection('ㄴㄷㅏㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅂㄴㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㅂㄴㅣㄷㅏ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅏㅂㄴㅣㄷㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)답시고',
            rules: [
                suffixInflection('ㄴㄷㅏㅂㅅㅣㄱㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅂㅅㅣㄱㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅂㅅㅣㄱㅗ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅏㅂㅅㅣㄱㅗ', '', [], ['eusi']),
                suffixInflection('ㄷㅏㅂㅅㅣㄱㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅏㅂㅅㅣㄱㅗ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)대',
            rules: [
                suffixInflection('ㄴㄷㅐ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅐ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅐ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅐ', '', [], ['eusi']),
                suffixInflection('ㄷㅐ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅐ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(ㄴ/는)대요',
            rules: [
                suffixInflection('ㄴㄷㅐㅇㅛ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄴㅡㄴㄷㅐㅇㅛ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅐㅇㅛ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅐㅇㅛ', '', [], ['eusi']),
                suffixInflection('ㄷㅐㅇㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅐㅇㅛ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㄷㅐㅇㅛ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㄷㅐㅇㅛ', '없다', [], [])
            ]
        },
        {
            name: '-(ㄴ/는)댄다',
            rules: [
                suffixInflection('ㄴㄷㅐㄴㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅐㄴㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅐㄴㄷㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅐㄴㄷㅏ', '', [], ['eusi']),
                suffixInflection('ㄷㅐㄴㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅐㄴㄷㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(으/느)ㄴ데',
            rules: [
                suffixInflection('ㄴㄷㅔ', 'ㄷㅏ', [], ['adj', 'ida']),
                suffixInflection('ㄴㄷㅔ', 'ㄹㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅡㄴㄷㅔ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄴㄷㅔ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㄷㅔ', '', [], ['eusi', 'sao']),
                suffixInflection('ㄴㅡㄴㄷㅔ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㄷㅔ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㄷㅔ', '없다', [], [])
            ]
        },
        {
            name: '-(으/느)ㄴ뎁쇼',
            rules: [
                suffixInflection('ㄴㄷㅔㅂㅅㅛ', 'ㄷㅏ', [], ['adj', 'ida']),
                suffixInflection('ㄴㄷㅔㅂㅅㅛ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㅡㄴㄷㅔㅂㅅㅛ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄴㄷㅔㅂㅅㅛ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㄷㅔㅂㅅㅛ', '', [], ['eusi']),
                suffixInflection('ㄴㅡㄴㄷㅔㅂㅅㅛ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㄷㅔㅂㅅㅛ', '', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㄷㅔㅂㅅㅛ', '', [], [])
            ]
        },
        {
            name: '-는도다',
            rules: [
                suffixInflection('ㄴㅡㄴㄱㅜㄴ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-(으/느)ㄴ바',
            rules: [
                suffixInflection('ㄴㅂㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄴㅂㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅡㄴㅂㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄴㅂㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅂㅏ', '', [], ['eusi']),
                suffixInflection('ㄴㅡㄴㅂㅏ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅡㄴㅂㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅂㅏ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅂㅏ', '없다', [], [])
            ]
        },
        {
            name: '-(으/느)ㄴ지',
            rules: [
                suffixInflection('ㄴㅈㅣ', 'ㄷㅏ', [], ['adj', 'ida']),
                suffixInflection('ㄴㅈㅣ', 'ㄹㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅡㄴㅈㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄴㅈㅣ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅈㅣ', '', [], ['eusi']),
                suffixInflection('ㄴㅡㄴㅈㅣ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅈㅣ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅈㅣ', '없다', [], [])
            ]
        },
        {
            name: '-(으/느)ㄴ지고',
            rules: [
                suffixInflection('ㄴㅈㅣㄱㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄴㅈㅣㄱㅗ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅡㄴㅈㅣㄱㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄴㅈㅣㄱㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅈㅣㄱㅗ', '', [], ['eusi']),
                suffixInflection('ㄴㅡㄴㅈㅣㄱㅗ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅈㅣㄱㅗ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅈㅣㄱㅗ', '없다', [], [])
            ]
        },
        {
            name: '-(으/느)ㄴ지라',
            rules: [
                suffixInflection('ㄴㅈㅣㄹㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄴㅈㅣㄹㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅡㄴㅈㅣㄹㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄴㅈㅣㄹㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅈㅣㄹㅏ', '', [], ['eusi']),
                suffixInflection('ㄴㅡㄴㅈㅣㄹㅏ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅈㅣㄹㅏ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅈㅣㄹㅏ', '없다', [], [])
            ]
        },
        {
            name: '-(으)니',
            rules: [
                suffixInflection('ㄴㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㄴㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄴㅣ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㅣ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅣ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅣ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㄴㅣ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅣ', '', [], ['p', 'f', 'eusi', 'euo', 'sao', 'jao'])
            ]
        },
        {
            name: '-(으)니까',
            rules: [
                suffixInflection('ㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄴㅣㄲㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㅣㄲㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅣㄲㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㄴㅣㄲㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅣㄲㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄴㅣㄲㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)니까느루',
            rules: [
                suffixInflection('ㄴㅣㄲㅏㄴㅡㄹㅜ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㄴㅣㄲㅏㄴㅡㄹㅜ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄴㅣㄲㅏㄴㅡㄹㅜ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㅣㄲㅏㄴㅡㄹㅜ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅣㄲㅏㄴㅡㄹㅜ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅣㄲㅏㄴㅡㄹㅜ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㄴㅣㄲㅏㄴㅡㄹㅜ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅣㄲㅏㄴㅡㄹㅜ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄴㅣㄲㅏㄴㅡㄹㅜ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)니까는',
            rules: [
                suffixInflection('ㄴㅣㄲㅏㄴㅡㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㄴㅣㄲㅏㄴㅡㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄴㅣㄲㅏㄴㅡㄴ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㅣㄲㅏㄴㅡㄴ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅣㄲㅏㄴㅡㄴ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅣㄲㅏㄴㅡㄴ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㄴㅣㄲㅏㄴㅡㄴ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅣㄲㅏㄴㅡㄴ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄴㅣㄲㅏㄴㅡㄴ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)니깐',
            rules: [
                suffixInflection('ㄴㅣㄲㅏㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㄴㅣㄲㅏㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄴㅣㄲㅏㄴ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㅣㄲㅏㄴ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅣㄲㅏㄴ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅣㄲㅏㄴ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㄴㅣㄲㅏㄴ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅣㄲㅏㄴ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄴㅣㄲㅏㄴ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으/느)니라',
            rules: [
                suffixInflection('ㄴㅣㄹㅏ', 'ㄷㅏ', [], ['adj', 'ida']),
                suffixInflection('ㄴㅣㄹㅏ', 'ㄹㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅡㄴㅣㄹㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄴㅣㄹㅏ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅣㄹㅏ', '', [], ['eusi']),
                suffixInflection('ㄴㅡㄴㅣㄹㅏ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅣㄹㅏ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅣㄹㅏ', '없다', [], [])
            ]
        },
        {
            name: '-(으/느)니만치',
            rules: [
                suffixInflection('ㄴㅣㅁㅏㄴㅊㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄴㅣㅁㅏㄴㅊㅣ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅡㄴㅣㅁㅏㄴㅊㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄴㅣㅁㅏㄴㅊㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅣㅁㅏㄴㅊㅣ', '', [], ['eusi']),
                suffixInflection('ㄴㅡㄴㅣㅁㅏㄴㅊㅣ', '', [], ['p', 'f', 'eusi']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅣㅁㅏㄴㅊㅣ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅣㅁㅏㄴㅊㅣ', '없다', [], [])
            ]
        },
        {
            name: '-(으/느)니만큼',
            rules: [
                suffixInflection('ㄴㅣㅁㅏㄴㅋㅡㅁ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄴㅣㅁㅏㄴㅋㅡㅁ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅡㄴㅣㅁㅏㄴㅋㅡㅁ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄴㅣㅁㅏㄴㅋㅡㅁ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅣㅁㅏㄴㅋㅡㅁ', '', [], ['eusi']),
                suffixInflection('ㄴㅡㄴㅣㅁㅏㄴㅋㅡㅁ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄴㅣㅁㅏㄴㅋㅡㅁ', '', [], ['p', 'f']),
                suffixInflection('ㅇㅣㅆㄴㅡㄴㅣㅁㅏㄴㅋㅡㅁ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄴㅡㄴㅣㅁㅏㄴㅋㅡㅁ', '없다', [], [])
            ]
        },
        {
            name: '-다가',
            rules: [
                suffixInflection('ㄷㅏㄱㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅏㄱㅏ', '', [], ['p', 'eusi'])
            ]
        },
        {
            name: '-다가는',
            rules: [
                suffixInflection('ㄷㅏㄱㅏㄴㅡㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅏㄱㅏㄴㅡㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-다간',
            rules: [
                suffixInflection('ㄷㅏㄱㅏㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅏㄱㅏㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-다마다',
            rules: [
                suffixInflection('ㄷㅏㅁㅏㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅏㅁㅏㄷㅏ', '', [], ['p', 'eusi'])
            ]
        },
        {
            name: '-다시피',
            rules: [
                suffixInflection('ㄷㅏㅅㅣㅍㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅏㅅㅣㅍㅣ', '', [], ['p', 'f']),
                suffixInflection('ㅇㅣㅆㄷㅏㅅㅣㅍㅣ', '있다', [], []),
                suffixInflection('ㅇㅓㅂㅅㄷㅏㅅㅣㅍㅣ', '없다', [], [])
            ]
        },
        {
            name: '-단',
            rules: [
                suffixInflection('ㄷㅏㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅏㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더',
            rules: [
                suffixInflection('ㄷㅓ', 'ㄷㅏ', ['do'], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓ', '', ['do'], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더구나',
            rules: [
                suffixInflection('ㄷㅓㄱㅜㄴㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄱㅜㄴㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더구려',
            rules: [
                suffixInflection('ㄷㅓㄱㅜㄹㅕ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄱㅜㄹㅕ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더구료',
            rules: [
                suffixInflection('ㄷㅓㄱㅜㄹㅛ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄱㅜㄹㅛ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더구만',
            rules: [
                suffixInflection('ㄷㅓㄱㅜㅁㅏㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄱㅜㅁㅏㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더구먼',
            rules: [
                suffixInflection('ㄷㅓㄱㅜㅁㅓㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄱㅜㅁㅓㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더구면',
            rules: [
                suffixInflection('ㄷㅓㄱㅜㅁㅕㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄱㅜㅁㅕㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더군',
            rules: [
                suffixInflection('ㄷㅓㄱㅜㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄱㅜㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더냐',
            rules: [
                suffixInflection('ㄷㅓㄴㅑ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㅑ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더뇨',
            rules: [
                suffixInflection('ㄷㅓㄴㅛ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㅛ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더니',
            rules: [
                suffixInflection('ㄷㅓㄴㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㅣ', '', [], ['p', 'f', 'eusi', 'euo', 'sab'])
            ]
        },
        {
            name: '-더니라',
            rules: [
                suffixInflection('ㄷㅓㄴㅣㄹㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㅣㄹㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더니마는',
            rules: [
                suffixInflection('ㄷㅓㄴㅣㅁㅏㄴㅡㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㅣㅁㅏㄴㅡㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더니만',
            rules: [
                suffixInflection('ㄷㅓㄴㅣㅁㅏㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㅣㅁㅏㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더니이까',
            rules: [
                suffixInflection('ㄷㅓㄴㅣㅇㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㅣㅇㅣㄲㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더니이다',
            rules: [
                suffixInflection('ㄷㅓㄴㅣㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㅣㅇㅣㄷㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더라도',
            rules: [
                suffixInflection('ㄷㅓㄹㅏㄷㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄹㅏㄷㅗ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더이까',
            rules: [
                suffixInflection('ㄷㅓㅇㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㅇㅣㄲㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-더이다',
            rules: [
                suffixInflection('ㄷㅓㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㅇㅣㄷㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-던',
            rules: [
                suffixInflection('ㄷㅓㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-던가',
            rules: [
                suffixInflection('ㄷㅓㄴㄱㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㄱㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-던감',
            rules: [
                suffixInflection('ㄷㅓㄴㄱㅏㅁ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㄱㅏㅁ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-던걸',
            rules: [
                suffixInflection('ㄷㅓㄴㄱㅓㄹ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㄱㅓㄹ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-던고',
            rules: [
                suffixInflection('ㄷㅓㄴㄱㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㄱㅗ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-던데',
            rules: [
                suffixInflection('ㄷㅓㄴㄷㅔ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㄷㅔ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-던들',
            rules: [
                suffixInflection('ㄷㅓㄴㄷㅡㄹ', '', [], ['p'])
            ]
        },
        {
            name: '-던바',
            rules: [
                suffixInflection('ㄷㅓㄴㅂㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㅂㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-던지',
            rules: [
                suffixInflection('ㄷㅓㄴㅈㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅓㄴㅈㅣ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-데',
            rules: [
                suffixInflection('ㄷㅔ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅔ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-데요',
            rules: [
                suffixInflection('ㄷㅔㅇㅛ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅔㅇㅛ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-도다',
            rules: [
                suffixInflection('ㄷㅗㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅗㄷㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-도록',
            rules: [
                suffixInflection('ㄷㅗㄹㅗㄱ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅗㄹㅗㄱ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)되',
            rules: [
                suffixInflection('ㄷㅗㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㄷㅗㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅗㅣ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄷㅗㅣ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-드구나',
            rules: [
                suffixInflection('ㄷㅡㄱㅜㄴㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄱㅜㄴㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-드구료',
            rules: [
                suffixInflection('ㄷㅡㄱㅜㄹㅛ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄱㅜㄹㅛ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-드구면',
            rules: [
                suffixInflection('ㄷㅡㄱㅜㅁㅕㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄱㅜㅁㅕㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-드군',
            rules: [
                suffixInflection('ㄷㅡㄱㅜㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄱㅜㄴ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-드냐',
            rules: [
                suffixInflection('ㄷㅡㄴㅑ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄴㅑ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-드니',
            rules: [
                suffixInflection('ㄷㅡㄴㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄴㅣ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-드니라',
            rules: [
                suffixInflection('ㄷㅡㄴㅣㄹㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄴㅣㄹㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-드라',
            rules: [
                suffixInflection('ㄷㅡㄹㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄹㅏ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-드라도',
            rules: [
                suffixInflection('ㄷㅡㄹㅏㄷㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄹㅏㄷㅗ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-드라면',
            rules: [
                suffixInflection('ㄷㅡㄹㅏㅁㅕㄴ', '', [], ['p'])
            ]
        },
        {
            name: '-드래도',
            rules: [
                suffixInflection('ㄷㅡㄹㅏㄷㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄹㅏㄷㅗ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-든',
            rules: [
                suffixInflection('ㄷㅡㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄴ', '', [], ['p', 'eusi'])
            ]
        },
        {
            name: '-든가',
            rules: [
                suffixInflection('ㄷㅡㄴㄱㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄴㄱㅏ', '', [], ['p', 'eusi'])
            ]
        },
        {
            name: '-든걸',
            rules: [
                suffixInflection('ㄷㅡㄴㄱㅓㄹ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄴㄱㅓㄹ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-든고',
            rules: [
                suffixInflection('ㄷㅡㄴㄱㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄴㄱㅗ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-든데',
            rules: [
                suffixInflection('ㄷㅡㄴㄷㅔ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄴㄷㅔ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-든들',
            rules: [
                suffixInflection('ㄷㅡㄴㄷㅡㄹ', '', [], ['p'])
            ]
        },
        {
            name: '-든지',
            rules: [
                suffixInflection('ㄷㅡㄴㅈㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㄴㅈㅣ', '', [], ['p', 'eusi'])
            ]
        },
        {
            name: '-듯',
            rules: [
                suffixInflection('ㄷㅡㅅ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㅅ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-듯이',
            rules: [
                suffixInflection('ㄷㅡㅅㅇㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅡㅅㅇㅣ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-디',
            rules: [
                suffixInflection('ㄷㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄷㅣ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-(으)라',
            rules: [
                suffixInflection('ㄹㅏ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)라고',
            rules: [
                suffixInflection('ㄹㅏㄱㅗ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㄱㅗ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄱㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㄱㅗ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄱㅗ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㄱㅗ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㄱㅗ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㄱㅗ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)라구',
            rules: [
                suffixInflection('ㄹㅏㄱㅜ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㄱㅜ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄱㅜ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㄱㅜ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄱㅜ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㄱㅜ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㄱㅜ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㄱㅜ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)라나',
            rules: [
                suffixInflection('ㄹㅏㄴㅏ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㄴㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄴㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㄴㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄴㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㄴㅏ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㄴㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㄴㅏ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)라네',
            rules: [
                suffixInflection('ㄹㅏㄴㅔ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㄴㅔ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄴㅔ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㄴㅔ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄴㅔ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㄴㅔ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㄴㅔ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㄴㅔ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)라느니',
            rules: [
                suffixInflection('ㄹㅏㄴㅡㄴㅣ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㄴㅡㄴㅣ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄴㅡㄴㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㄴㅡㄴㅣ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄴㅡㄴㅣ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㄴㅡㄴㅣ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㄴㅡㄴㅣ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㄴㅡㄴㅣ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)라니',
            rules: [
                suffixInflection('ㄹㅏㄴㅣ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㄴㅣ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄴㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㄴㅣ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄴㅣ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㄴㅣ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㄴㅣ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㄴㅣ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)라니까',
            rules: [
                suffixInflection('ㄹㅏㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㄴㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㄴㅣㄲㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄴㅣㄲㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㄴㅣㄲㅏ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㄴㅣㄲㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㄴㅣㄲㅏ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-라도',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅏㄷㅗ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㄷㅗ', 'ㄷㅏ', [], ['ida'])
            ]
        },
        {
            name: '-(으)라며',
            rules: [
                suffixInflection('ㄹㅏㅁㅕ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㅁㅕ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅁㅕ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㅁㅕ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅁㅕ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㅁㅕ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㅁㅕ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㅁㅕ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)라면',
            rules: [
                suffixInflection('ㄹㅏㅁㅕㄴ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㅁㅕㄴ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅁㅕㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㅁㅕㄴ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅁㅕㄴ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㅁㅕㄴ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㅁㅕㄴ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㅁㅕㄴ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)라면서',
            rules: [
                suffixInflection('ㄹㅏㅁㅕㄴㅅㅓ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㅁㅕㄴㅅㅓ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅁㅕㄴㅅㅓ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㅁㅕㄴㅅㅓ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅁㅕㄴㅅㅓ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㅁㅕㄴㅅㅓ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㅁㅕㄴㅅㅓ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㅁㅕㄴㅅㅓ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-라서',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅏㅅㅓ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㅅㅓ', '다', [], ['ida']),
                suffixInflection('ㄹㅏㅅㅓ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)라손',
            rules: [
                suffixInflection('ㄹㅏㅅㅗㄴ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㅅㅗㄴ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅅㅗㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㅅㅗㄴ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅅㅗㄴ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㅅㅗㄴ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㅅㅗㄴ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㅅㅗㄴ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-라야',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅏㅇㅑ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㅇㅑ', '다', [], ['ida']),
                suffixInflection('ㄹㅏㅇㅑ', '', [], ['eusi'])
            ]
        },
        {
            name: '-라야만',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅏㅇㅑㅁㅏㄴ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㅇㅑㅁㅏㄴ', '다', [], ['ida']),
                suffixInflection('ㄹㅏㅇㅑㅁㅏㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)라오',
            rules: [
                suffixInflection('ㄹㅏㅇㅗ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㅇㅗ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅇㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㅇㅗ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅇㅗ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㅇㅗ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㅇㅗ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㅇㅗ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)라지',
            rules: [
                suffixInflection('ㄹㅏㅈㅣ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㅈㅣ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅈㅣ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㅈㅣ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅈㅣ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㅈㅣ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㅈㅣ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㅈㅣ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)락',
            rules: [
                suffixInflection('ㄹㅏㄱ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅏㄱ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅏㄱ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅏㄱ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅏㄱ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅏㄱ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅏㄱ', 'ㄷㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-(으)란',
            rules: [
                suffixInflection('ㄹㅏㄴ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㄴ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㄴ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄴ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㄴ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㄴ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㄴ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)란다',
            rules: [
                suffixInflection('ㄹㅏㄴㄷㅏ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㄴㄷㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄴㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㄴㄷㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㄴㄷㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㄴㄷㅏ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㄴㄷㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㄴㄷㅏ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)람',
            rules: [
                suffixInflection('ㄹㅏㅁ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㅁ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅁ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㅁ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅁ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㅁ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㅁ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)랍니까',
            rules: [
                suffixInflection('ㄹㅏㅂㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㅂㄴㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅂㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㅂㄴㅣㄲㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅂㄴㅣㄲㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㅂㄴㅣㄲㅏ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㅂㄴㅣㄲㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㅂㄴㅣㄲㅏ', '', [], ['eusi', 'do'])
            ]
        },
        {
            name: '-(으)랍니다',
            rules: [
                suffixInflection('ㄹㅏㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅏㅂㄴㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅏㅂㄴㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅏㅂㄴㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅏㅂㄴㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅏㄴㅣㄹㅏㅂㄴㅣㄷㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㅂㄴㅣㄷㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-랍시고',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅏㅂㅅㅣㄱㅗ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅏㅂㅅㅣㄱㅗ', '다', [], ['ida']),
                suffixInflection('ㄹㅏㅂㅅㅣㄱㅗ', '', [], ['eusi'])
            ]
        },
        {
            name: '-래',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅐ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅐ', '다', [], ['ida']),
                suffixInflection('ㄹㅐ', '', [], ['eusi'])
            ]
        },
        {
            name: '-래요',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅐㅇㅛ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅐㅇㅛ', '다', [], ['ida']),
                suffixInflection('ㄹㅐㅇㅛ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)랴',
            rules: [
                suffixInflection('ㄹㅑ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅑ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅑ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅑ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅑ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅑ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅑ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)러',
            rules: [
                suffixInflection('ㄹㅓ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㄹㅓ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅓ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅓ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅓ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅓ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅓ', '', [], ['eusi'])
            ]
        },
        {
            name: '-러니',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅓㄴㅣ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅓㄴㅣ', '다', [], ['ida']),
                suffixInflection('ㄹㅓㄴㅣ', '', [], ['eusi'])
            ]
        },
        {
            name: '-러니라',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅓㄴㅣㄹㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅓㄴㅣㄹㅏ', '다', [], ['ida']),
                suffixInflection('ㄹㅓㄴㅣㄹㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-러니이까',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅓㄴㅣㅇㅣㄲㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅓㄴㅣㅇㅣㄲㅏ', '다', [], ['ida']),
                suffixInflection('ㄹㅓㄴㅣㅇㅣㄲㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-러니이다',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅓㄴㅣㅇㅣㄷㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅓㄴㅣㅇㅣㄷㅏ', '다', [], ['ida']),
                suffixInflection('ㄹㅓㄴㅣㅇㅣㄷㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-러라',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅓㄹㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅓㄹㅏ', '다', [], ['ida']),
                suffixInflection('ㄹㅓㄹㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-러이까',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅓㅇㅣㄲㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅓㅇㅣㄲㅏ', '다', [], ['ida']),
                suffixInflection('ㄹㅓㅇㅣㄲㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-러이다',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅓㅇㅣㄷㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅓㅇㅣㄷㅏ', '다', [], ['ida']),
                suffixInflection('ㄹㅓㅇㅣㄷㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-런가',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅓㄴㄱㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅓㄴㄱㅏ', '다', [], ['ida']),
                suffixInflection('ㄹㅓㄴㄱㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-런들',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅓㄴㄷㅡㄹ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅓㄴㄷㅡㄹ', '다', [], ['ida']),
                suffixInflection('ㄹㅓㄴㄷㅡㄹ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)려',
            rules: [
                suffixInflection('ㄹㅕ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅕ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅕ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)려거든',
            rules: [
                suffixInflection('ㄹㅕㄱㅓㄷㅡㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㄱㅓㄷㅡㄴ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㄱㅓㄷㅡㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅕㄱㅓㄷㅡㄴ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㄱㅓㄷㅡㄴ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅕㄱㅓㄷㅡㄴ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㄱㅓㄷㅡㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)려고',
            rules: [
                suffixInflection('ㄹㅕㄱㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㄱㅗ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㄱㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅕㄱㅗ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㄱㅗ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅕㄱㅗ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㄱㅗ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)려나',
            rules: [
                suffixInflection('ㄹㅕㄴㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅕㄴㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅕㄴㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅕㄴㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅕㄴㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅕㄴㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅕㄴㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅕㄴㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅕㄴㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)려니',
            rules: [
                suffixInflection('ㄹㅕㄴㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅕㄴㅣ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅕㄴㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅕㄴㅣ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅕㄴㅣ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅕㄴㅣ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅕㄴㅣ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅕㄴㅣ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)려니와',
            rules: [
                suffixInflection('ㄹㅕㄴㅣㅇㅗㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅕㄴㅣㅇㅗㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅕㄴㅣㅇㅗㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅕㄴㅣㅇㅗㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅕㄴㅣㅇㅗㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅕㄴㅣㅇㅗㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅕㄴㅣㅇㅗㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅕㄴㅣㅇㅗㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅕㄴㅣㅇㅗㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)려든',
            rules: [
                suffixInflection('ㄹㅕㄷㅡㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㄷㅡㄴ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㄷㅡㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅕㄷㅡㄴ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㄷㅡㄴ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅕㄷㅡㄴ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㄷㅡㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)려마',
            rules: [
                suffixInflection('ㄹㅕㅁㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㅁㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㅁㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅕㅁㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㅁㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅕㅁㅏ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㅁㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)려면',
            rules: [
                suffixInflection('ㄹㅕㅁㅕㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅕㅁㅕㄴ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅕㅁㅕㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅕㅁㅕㄴ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅕㅁㅕㄴ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅕㅁㅕㄴ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅕㅁㅕㄴ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅕㅁㅕㄴ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅕㅁㅕㄴ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)려무나',
            rules: [
                suffixInflection('ㄹㅕㅁㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㅁㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㅁㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅕㅁㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㅁㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅕㅁㅏ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㅁㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)련',
            rules: [
                suffixInflection('ㄹㅕㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㄴ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅕㄴ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㄴ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅕㄴ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)련마는',
            rules: [
                suffixInflection('ㄹㅕㅁㅏㄴㅡㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅕㅁㅏㄴㅡㄴ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅕㅁㅏㄴㅡㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅕㅁㅏㄴㅡㄴ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅕㅁㅏㄴㅡㄴ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅕㅁㅏㄴㅡㄴ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅕㅁㅏㄴㅡㄴ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅕㅁㅏㄴㅡㄴ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅕㅁㅏㄴㅡㄴ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)련만',
            rules: [
                suffixInflection('ㄹㅕㅁㅏㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅕㅁㅏㄴ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅕㅁㅏㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅕㅁㅏㄴ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅕㅁㅏㄴ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅕㅁㅏㄴ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅕㅁㅏㄴ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅕㅁㅏㄴ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅕㅁㅏㄴ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)렴',
            rules: [
                suffixInflection('ㄹㅕㅁ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㅁ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㅁ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅕㅁ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㅁ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅕㅁ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㅁ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)렵니까',
            rules: [
                suffixInflection('ㄹㅕㅂㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㅂㄴㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㅂㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅕㅂㄴㅣㄲㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㅂㄴㅣㄲㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅕㅂㄴㅣㄲㅏ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㅂㄴㅣㄲㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)렵니다',
            rules: [
                suffixInflection('ㄹㅕㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㅂㄴㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅕㅂㄴㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅕㅂㄴㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅕㅂㄴㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅕㅂㄴㅣㄷㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)렷다',
            rules: [
                suffixInflection('ㄹㅕㅅㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅕㅅㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅕㅅㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅕㅅㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅕㅅㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅕㅅㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅕㅅㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅕㅅㄷㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅕㅅㄷㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-로고',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅗㄱㅗ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅗㄱㅗ', '다', [], ['ida']),
                suffixInflection('ㄹㅗㄱㅗ', '', [], ['eusi'])
            ]
        },
        {
            name: '-로고나',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅗㄱㅗㄴㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅗㄱㅗㄴㅏ', '다', [], ['ida']),
                suffixInflection('ㄹㅗㄱㅗㄴㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-로구나',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅗㄱㅜㄴㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅗㄱㅜㄴㅏ', '다', [], ['ida']),
                suffixInflection('ㄹㅗㄱㅜㄴㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-로구려',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅗㄱㅜㄹㅕ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅗㄱㅜㄹㅕ', '다', [], ['ida']),
                suffixInflection('ㄹㅗㄱㅜㄹㅕ', '', [], ['eusi'])
            ]
        },
        {
            name: '-로구료',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅗㄱㅜㄹㅛ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅗㄱㅜㄹㅛ', '다', [], ['ida']),
                suffixInflection('ㄹㅗㄱㅜㄹㅛ', '', [], ['eusi'])
            ]
        },
        {
            name: '-로구만',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅗㄱㅜㅁㅏㄴ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅗㄱㅜㅁㅏㄴ', '다', [], ['ida']),
                suffixInflection('ㄹㅗㄱㅜㅁㅏㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-로구먼',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅗㄱㅜㅁㅓㄴ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅗㄱㅜㅁㅓㄴ', '다', [], ['ida']),
                suffixInflection('ㄹㅗㄱㅜㅁㅓㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-로구면',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅗㄱㅜㅁㅕㄴ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅗㄱㅜㅁㅕㄴ', '다', [], ['ida']),
                suffixInflection('ㄹㅗㄱㅜㅁㅕㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-로군',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅗㄱㅜㄴ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅗㄱㅜㄴ', '다', [], ['ida']),
                suffixInflection('ㄹㅗㄱㅜㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-로다',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅗㄷㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅗㄷㅏ', '다', [], ['ida']),
                suffixInflection('ㄹㅗㄷㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-로되',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅗㄷㅗㅣ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅗㄷㅗㅣ', '다', [], ['ida']),
                suffixInflection('ㄹㅗㄷㅗㅣ', '', [], ['eusi'])
            ]
        },
        {
            name: '-로라',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅗㄹㅏ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅗㄹㅏ', '다', [], ['ida']),
                suffixInflection('', '다', [], ['ida'])
            ]
        },
        {
            name: '-로서니',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅗㅅㅓㄴㅣ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅗㅅㅓㄴㅣ', '다', [], ['ida']),
                suffixInflection('ㄹㅗㅅㅓㄴㅣ', '다', [], ['ida'])
            ]
        },
        {
            name: '-로세',
            rules: [
                suffixInflection('ㅇㅏㄴㅣㄹㅗㅅㅔ', '아니다', [], ['adj']),
                suffixInflection('ㄹㅗㅅㅔ', '다', [], ['ida']),
                suffixInflection('ㄹㅗㅅㅔ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)리',
            rules: [
                suffixInflection('ㄹㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅣ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅣ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅣ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣ', '', [], ['eusi', 'euo']),
                suffixInflection('ㅇㅡㄹㅣ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)리까',
            rules: [
                suffixInflection('ㄹㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅣㄲㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㄲㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㄲㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅣㄲㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㄲㅏ', '', [], ['eusi', 'euo']),
                suffixInflection('ㅇㅡㄹㅣㄲㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)리니',
            rules: [
                suffixInflection('ㄹㅣㄴㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅣㄴㅣ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㄴㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅣㄴㅣ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㄴㅣ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㄴㅣ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅣㄴㅣ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㄴㅣ', '', [], ['eusi', 'euo']),
                suffixInflection('ㅇㅡㄹㅣㄴㅣ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)리니라',
            rules: [
                suffixInflection('ㄹㅣㄴㅣㄹㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅣㄴㅣㄹㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㄴㅣㄹㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅣㄴㅣㄹㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㄴㅣㄹㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㄴㅣㄹㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅣㄴㅣㄹㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㄴㅣㄹㅏ', '', [], ['eusi', 'euo']),
                suffixInflection('ㅇㅡㄹㅣㄴㅣㄹㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)리다',
            rules: [
                suffixInflection('ㄹㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㄷㅏ', '', [], ['eusi', 'euo']),
                suffixInflection('ㅇㅡㄹㅣㄷㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)리라',
            rules: [
                suffixInflection('ㄹㅣㄹㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅣㄹㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㄹㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅣㄹㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㄹㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㄹㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅣㄹㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㄹㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅣㄹㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)리로다',
            rules: [
                suffixInflection('ㄹㅣㄹㅗㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅣㄹㅗㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㄹㅗㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅣㄹㅗㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㄹㅗㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㄹㅗㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅣㄹㅗㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㄹㅗㄷㅏ', '', [], ['eusi', 'euo']),
                suffixInflection('ㅇㅡㄹㅣㄹㅗㄷㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)리만치',
            rules: [
                suffixInflection('ㄹㅣㅁㅏㄴㅊㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅣㅁㅏㄴㅊㅣ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㅁㅏㄴㅊㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅣㅁㅏㄴㅊㅣ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㅁㅏㄴㅊㅣ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㅁㅏㄴㅊㅣ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅣㅁㅏㄴㅊㅣ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㅁㅏㄴㅊㅣ', '', [], ['eusi', 'euo']),
                suffixInflection('ㅇㅡㄹㅣㅁㅏㄴㅊㅣ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)리만큼',
            rules: [
                suffixInflection('ㄹㅣㅁㅏㄴㅋㅡㅁ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅣㅁㅏㄴㅋㅡㅁ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㅁㅏㄴㅋㅡㅁ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅣㅁㅏㄴㅋㅡㅁ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㅁㅏㄴㅋㅡㅁ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㅁㅏㄴㅋㅡㅁ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅣㅁㅏㄴㅋㅡㅁ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㅁㅏㄴㅋㅡㅁ', '', [], ['eusi', 'euo']),
                suffixInflection('ㅇㅡㄹㅣㅁㅏㄴㅋㅡㅁ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)리오',
            rules: [
                suffixInflection('ㄹㅣㅇㅗ ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅣㅇㅗ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㅇㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅣㅇㅗ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅣㅇㅗ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㅇㅗ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅣㅇㅗ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅣㅇㅗ', '', [], ['eusi', 'euo']),
                suffixInflection('ㅇㅡㄹㅣㅇㅗ', '', [], ['p'])
            ]
        },
        {
            name: '-(으)마',
            rules: [
                suffixInflection('ㅁㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅁㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅁㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㅁㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅁㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㅁㅏ', 'ㄷㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-(으)매',
            rules: [
                suffixInflection('ㅁㅐ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅁㅐ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁㅐ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅁㅐ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁㅐ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㅐ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㅁㅐ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㅐ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅁㅐ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)며',
            rules: [
                suffixInflection('ㅁㅕ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅁㅕ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁㅕ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅁㅕ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁㅕ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㅕ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㅕ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅁㅕ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)면',
            rules: [
                suffixInflection('ㅁㅕㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅁㅕㄴ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁㅕㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅁㅕㄴ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁㅕㄴ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㅕㄴ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㅕㄴ', '', [], ['eusi', 'euo', 'jao']),
                suffixInflection('ㅇㅡㅁㅕㄴ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)면서',
            rules: [
                suffixInflection('ㅁㅕㄴㅅㅓ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅁㅕㄴㅅㅓ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁㅕㄴㅅㅓ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅁㅕㄴㅅㅓ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁㅕㄴㅅㅓ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㅕㄴㅅㅓ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㅕㄴㅅㅓ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅁㅕㄴㅅㅓ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)므로',
            rules: [
                suffixInflection('ㅁㅡㄹㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅁㅡㄹㅗ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁㅡㄹㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅁㅡㄹㅗ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁㅡㄹㅗ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㅡㄹㅗ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㅡㄹㅗ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅁㅡㄹㅗ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)사',
            rules: [
                suffixInflection('ㅅㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅅㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅅㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅅㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡ', 'ㄷㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-사오',
            rules: [
                suffixInflection('ㅅㅏㅇㅗ', 'ㄷㅏ', ['sao'], ['v', 'adj']),
                suffixInflection('ㅅㅏㅇㅗ', '', ['sao'], ['p', 'f'])
            ]
        },
        {
            name: '-사오니까',
            rules: [
                suffixInflection('ㅅㅏㅇㅗㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏㅇㅗㄴㅣㄲㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-사오리까',
            rules: [
                suffixInflection('ㅅㅏㅇㅗㄹㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏㅇㅗㄹㅣㄲㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-사오리다',
            rules: [
                suffixInflection('ㅅㅏㅇㅗㄹㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏㅇㅗㄹㅣㄷㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-사오리이까',
            rules: [
                suffixInflection('ㅅㅏㅇㅗㄹㅣㅇㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏㅇㅗㄹㅣㅇㅣㄲㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-사오리이다',
            rules: [
                suffixInflection('ㅅㅏㅇㅗㄹㅣㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏㅇㅗㄹㅣㅇㅣㄷㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-사오이다',
            rules: [
                suffixInflection('ㅅㅏㅇㅗㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏㅇㅗㅇㅣㄷㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-사옵',
            rules: [
                suffixInflection('ㅅㅏㅇㅗㅂ', 'ㄷㅏ', ['saob'], ['v', 'adj']),
                suffixInflection('ㅅㅏㅇㅗㅂ', '', ['saob'], ['p', 'f'])
            ]
        },
        {
            name: '-사옵니까',
            rules: [
                suffixInflection('ㅅㅏㅇㅗㅂㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏㅇㅗㅂㄴㅣㄲㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-사옵니다',
            rules: [
                suffixInflection('ㅅㅏㅇㅗㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏㅇㅗㅂㄴㅣㄷㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-사옵디까',
            rules: [
                suffixInflection('ㅅㅏㅇㅗㅂㄷㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏㅇㅗㅂㄷㅣㄲㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-사옵디다',
            rules: [
                suffixInflection('ㅅㅏㅇㅗㅂㄷㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏㅇㅗㅂㄷㅣㄷㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-사와',
            rules: [
                suffixInflection('ㅅㅏㅇㅗㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏㅇㅗㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-사외다',
            rules: [
                suffixInflection('ㅅㅏㅇㅗㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏㅇㅗㅣㄷㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)사이다',
            rules: [
                suffixInflection('ㅅㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅅㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅅㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅅㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㅅㅏ', 'ㄷㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-삽',
            rules: [
                suffixInflection('ㅅㅏㅂ', 'ㄷㅏ', ['sab'], ['v', 'adj']),
                suffixInflection('ㅅㅏㅂ', '', ['sab'], ['p', 'f'])
            ]
        },
        {
            name: '-(으)세',
            rules: [
                suffixInflection('ㅅㅔ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅅㅔ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㅅㅔ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅅㅔ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㅅㅔ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㅅㅔ', 'ㄷㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-세나',
            rules: [
                suffixInflection('ㅅㅔㄴㅏ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-(으)세요',
            rules: [
                suffixInflection('ㅅㅔㅇㅛ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㅅㅔㅇㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅅㅔㅇㅛ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅅㅔㅇㅛ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅔㅇㅛ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅅㅔㅇㅛ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅅㅔㅇㅛ', 'ㄷㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-(으)셔요',
            rules: [
                suffixInflection('ㅅㅕㅇㅛ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㅅㅕㅇㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅅㅕㅇㅛ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅅㅕㅇㅛ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅕㅇㅛ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅅㅕㅇㅛ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅅㅕㅇㅛ', 'ㄷㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-소',
            rules: [
                suffixInflection('ㅅㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅗ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-소다',
            rules: [
                suffixInflection('ㅅㅗㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅗㄷㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)소서',
            rules: [
                suffixInflection('ㅅㅗㅅㅓ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅅㅗㅅㅓ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅅㅗㅅㅓ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅅㅗㅅㅓ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅗㅅㅓ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅅㅗㅅㅓ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅅㅗㅅㅓ', 'ㄷㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-소이까',
            rules: [
                suffixInflection('ㅅㅗㅇㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-소이다',
            rules: [
                suffixInflection('ㅅㅗㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅗㅇㅣㄷㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-쇠다',
            rules: [
                suffixInflection('ㅅㅗㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅗㅣㄷㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-ㅂ/습네',
            rules: [
                suffixInflection('ㅂㄴㅔ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅂㄴㅔ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄴㅔ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄴㅔ', '', [], ['p', 'f']),
                suffixInflection('ㅂㄴㅔ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㅂ/습늰다',
            rules: [
                suffixInflection('ㅂㄴㅡㅣㄴㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅂㄴㅡㅣㄴㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄴㅡㅣㄴㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄴㅡㅣㄴㄷㅏ', '', [], ['p', 'f']),
                suffixInflection('ㅂㄴㅡㅣㄴㄷㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㅂ/습니까',
            rules: [
                suffixInflection('ㅂㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅂㄴㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄴㅣㄲㅏ', '', [], ['p', 'f']),
                suffixInflection('ㅂㄴㅣㄲㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㅂ/습니까',
            rules: [
                suffixInflection('ㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅂㄴㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄴㅣㄷㅏ', '', [], ['p', 'f']),
                suffixInflection('ㅂㄴㅣㄷㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㅂ/습니다',
            rules: [
                suffixInflection('ㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅂㄴㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄴㅣㄷㅏ', '', [], ['p', 'f']),
                suffixInflection('ㅂㄴㅣㄷㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㅂ/습디까',
            rules: [
                suffixInflection('ㅂㄷㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅂㄷㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄷㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄷㅣㄲㅏ', '', [], ['p', 'f']),
                suffixInflection('ㅂㄷㅣㄲㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㅂ/습디다',
            rules: [
                suffixInflection('ㅂㄷㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅂㄷㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄷㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄷㅣㄷㅏ', '', [], ['p', 'f']),
                suffixInflection('ㅂㄷㅣㄷㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㅂ/습딘다',
            rules: [
                suffixInflection('ㅂㄷㅣㄴㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅂㄷㅣㄴㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄷㅣㄴㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㄷㅣㄴㄷㅏ', '', [], ['p', 'f']),
                suffixInflection('ㅂㄷㅣㄴㄷㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㅂ/습죠',
            rules: [
                suffixInflection('ㅂㅈㅛ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅂㅈㅛ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㅈㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㅈㅛ', '', [], ['p', 'f']),
                suffixInflection('ㅂㅈㅛ', '', [], ['eusi'])
            ]
        },
        {
            name: '-습지요',
            rules: [
                suffixInflection('ㅂㅈㅣㅇㅛ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅂㅈㅣㅇㅛ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㅈㅣㅇㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅡㅂㅈㅣㅇㅛ', '', [], ['p', 'f']),
                suffixInflection('ㅂㅈㅣㅇㅛ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)시',
            rules: [
                suffixInflection('ㅅㅣ', 'ㄷㅏ', ['eusi'], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㅅㅣ', 'ㄷㅏ', ['eusi'], ['v', 'adj']),
                suffixInflection('ㅇㅜㅅㅣ', 'ㅂㄷㅏ', ['eusi'], ['v', 'adj']),
                suffixInflection('ㅇㅡㅅㅣ', 'ㅅㄷㅏ', ['eusi'], ['v', 'adj']),
                suffixInflection('ㅅㅣ', 'ㅎㄷㅏ', ['eusi'], ['adj']),
                suffixInflection('ㅅㅣ', 'ㄹㄷㅏ', ['eusi'], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅅㅣ', 'ㄷㄷㅏ', ['eusi'], ['v', 'adj']),
                suffixInflection('ㅅㅣ', '', ['eusi'], ['saob', 'euob', 'jaob'])
            ]
        },
        {
            name: '-(으)시압',
            rules: [
                suffixInflection('ㅅㅣㅇㅏㅂ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅅㅣㅇㅏㅂ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅅㅣㅇㅏㅂ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㅅㅣㅇㅏㅂ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅅㅣㅇㅏㅂ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㅅㅣㅇㅏㅂ', 'ㄷㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-(으)시어요',
            rules: [
                suffixInflection('ㅅㅣㅇㅓㅇㅛ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㅅㅣㅇㅓㅇㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅅㅣㅇㅓㅇㅛ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅅㅣㅇㅓㅇㅛ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅣㅇㅓㅇㅛ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅅㅣㅇㅓㅇㅛ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅅㅣㅇㅓㅇㅛ', 'ㄷㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-(으)십사',
            rules: [
                suffixInflection('ㅅㅣㅂㅅㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅅㅣㅂㅅㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅅㅣㅂㅅㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㅅㅣㅂㅅㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅅㅣㅂㅅㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㅅㅣㅂㅅㅏ', 'ㄷㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-(으)십시다',
            rules: [
                suffixInflection('ㅅㅣㅂㅅㅣㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅅㅣㅂㅅㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅅㅣㅂㅅㅣㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㅅㅣㅂㅅㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅅㅣㅂㅅㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㅅㅣㅂㅅㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-(으)십시오',
            rules: [
                suffixInflection('ㅅㅣㅂㅅㅣㅇㅛ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅅㅣㅂㅅㅣㅇㅛ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅅㅣㅂㅅㅣㅇㅛ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㅅㅣㅂㅅㅣㅇㅛ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅅㅣㅂㅅㅣㅇㅛ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㅅㅣㅂㅅㅣㅇㅛ', 'ㄷㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-아/어',
            rules: [
                suffixInflection('ㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅕ', 'ㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅕ', 'ㅇㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅎㅏㅇㅕ', 'ㅎㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅓ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐ', 'ㅏㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅐ', 'ㅓㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅖ', 'ㅕㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅒ', 'ㅑㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅓ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓ', '', [], ['p'])
            ]
        },
        {
            name: '-아/어다',
            rules: [
                suffixInflection('ㅏㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅕㄷㅏ', 'ㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅕㄷㅏ', 'ㅇㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㄷㅏ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅎㅏㅇㅕㄷㅏ', 'ㅎㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅓㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㄷㅏ', 'ㅏㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅐㄷㅏ', 'ㅓㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅖㄷㅏ', 'ㅕㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅒㄷㅏ', 'ㅑㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅏㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅓㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㄷㅏ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㄷㅏ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㄷㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㄷㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄷㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㄷㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄷㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㄷㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-아/어다가',
            rules: [
                suffixInflection('ㅏㄷㅏㄱㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄷㅏㄱㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㄷㅏㄱㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㄷㅏㄱㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅏㄱㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㄷㅏㄱㅏ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄷㅏㄱㅏ', 'ㅓㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅕㄷㅏㄱㅏ', 'ㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅕㄷㅏㄱㅏ', 'ㅇㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㄷㅏㄱㅏ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅎㅏㅇㅕㄷㅏㄱㅏ', 'ㅎㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏㄷㅏㄱㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅓㄷㅏㄱㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㄷㅏㄱㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㄷㅏㄱㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㄷㅏㄱㅏ', 'ㅏㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅐㄷㅏㄱㅏ', 'ㅓㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅖㄷㅏㄱㅏ', 'ㅕㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅒㄷㅏㄱㅏ', 'ㅑㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅏㄷㅏㄱㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅓㄷㅏㄱㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㄷㅏㄱㅏ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㄷㅏㄱㅏ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㄷㅏㄱㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㄴㄷㅏㄱㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㄷㅏㄱㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄷㅏㄱㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㄷㅏㄱㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄷㅏㄱㅏ', 'ㅡㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-아/어도',
            rules: [
                suffixInflection('ㅏㄷㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄷㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㄷㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㄷㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㄷㅗ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄷㅗ', 'ㅓㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄷㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅕㄷㅗ', 'ㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅕㄷㅗ', 'ㅇㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㄷㅗ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅎㅏㅇㅕㄷㅗ', 'ㅎㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏㄷㅗ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅓㄷㅗ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㄷㅗ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㄷㅗ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㄷㅗ', 'ㅏㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅐㄷㅗ', 'ㅓㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅖㄷㅗ', 'ㅕㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅒㄷㅗ', 'ㅑㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅏㄷㅗ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅓㄷㅗ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㄷㅗ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㄷㅗ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㄷㅗ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄷㅗ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㄷㅗ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄷㅗ', 'ㅡㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-아/어라',
            rules: [
                suffixInflection('ㅏㄹㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄹㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㄹㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㄹㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㄹㅏ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄹㅏ', 'ㅓㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅕㄹㅏ', 'ㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅕㄹㅏ', 'ㅇㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㄹㅏ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅎㅏㅇㅕㄹㅏ', 'ㅎㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏㄹㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅓㄹㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㄹㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㄹㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㄹㅏ', 'ㅏㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅐㄹㅏ', 'ㅓㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅖㄹㅏ', 'ㅕㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅒㄹㅏ', 'ㅑㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅏㄹㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅓㄹㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㄹㅏ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㄹㅏ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㄹㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄹㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㄹㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㄹㅏ', 'ㅡㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-아/아서',
            rules: [
                suffixInflection('ㅏㅅㅓ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅅㅓ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㅅㅓ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅅㅓ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅅㅓ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅅㅓ', 'ㅓㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅓ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅕㅅㅓ', 'ㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅕㅅㅓ', 'ㅇㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㅅㅓ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅎㅏㅇㅕㅅㅓ', 'ㅎㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏㅅㅓ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅓㅅㅓ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㅅㅓ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅅㅓ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㅅㅓ', 'ㅏㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅐㅅㅓ', 'ㅓㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅖㅅㅓ', 'ㅕㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅒㅅㅓ', 'ㅑㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅏㅅㅓ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅓㅅㅓ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㅅㅓ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㅅㅓ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅅㅓ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅅㅓ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅅㅓ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅅㅓ', 'ㅡㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-아/어야',
            rules: [
                suffixInflection('ㅏㅇㅑ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅑ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㅇㅑ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅇㅑ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅇㅑ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅑ', 'ㅓㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅑ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅕㅇㅑ', 'ㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅕㅇㅑ', 'ㅇㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㅇㅑ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅎㅏㅇㅕㅇㅑ', 'ㅎㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏㅇㅑ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅓㅇㅑ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㅇㅑ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅇㅑ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㅇㅑ', 'ㅏㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅐㅇㅑ', 'ㅓㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅖㅇㅑ', 'ㅕㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅒㅇㅑ', 'ㅑㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅏㅇㅑ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅓㅇㅑ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㅇㅑ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㅇㅑ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅇㅑ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅑ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅇㅑ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅑ', 'ㅡㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-아/어야만',
            rules: [
                suffixInflection('ㅏㅇㅑㅁㅏㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅑㅁㅏㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㅇㅑㅁㅏㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅇㅑㅁㅏㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅇㅑㅁㅏㄴ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅑㅁㅏㄴ', 'ㅓㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅑㅁㅏㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅕㅇㅑㅁㅏㄴ', 'ㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅕㅇㅑㅁㅏㄴ', 'ㅇㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㅇㅑㅁㅏㄴ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅎㅏㅇㅕㅇㅑㅁㅏㄴ', 'ㅎㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏㅇㅑㅁㅏㄴ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅓㅇㅑㅁㅏㄴ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㅇㅑㅁㅏㄴ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅇㅑㅁㅏㄴ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㅇㅑㅁㅏㄴ', 'ㅏㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅐㅇㅑㅁㅏㄴ', 'ㅓㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅖㅇㅑㅁㅏㄴ', 'ㅕㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅒㅇㅑㅁㅏㄴ', 'ㅑㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅏㅇㅑㅁㅏㄴ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅓㅇㅑㅁㅏㄴ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㅇㅑㅁㅏㄴ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㅇㅑㅁㅏㄴ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅇㅑㅁㅏㄴ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅑㅁㅏㄴ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅇㅑㅁㅏㄴ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅑㅁㅏㄴ', 'ㅡㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-아/어야지',
            rules: [
                suffixInflection('ㅏㅇㅑㅈㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅑㅈㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㅇㅑㅈㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅇㅑㅈㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅇㅑㅈㅣ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅑㅈㅣ', 'ㅓㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅑㅈㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅕㅇㅑㅈㅣ', 'ㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅕㅇㅑㅈㅣ', 'ㅇㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㅇㅑㅈㅣ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅎㅏㅇㅕㅇㅑㅈㅣ', 'ㅎㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏㅇㅑㅈㅣ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅓㅇㅑㅈㅣ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㅇㅑㅈㅣ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅇㅑㅈㅣ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㅇㅑㅈㅣ', 'ㅏㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅐㅇㅑㅈㅣ', 'ㅓㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅖㅇㅑㅈㅣ', 'ㅕㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅒㅇㅑㅈㅣ', 'ㅑㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅏㅇㅑㅈㅣ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅓㅇㅑㅈㅣ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㅇㅑㅈㅣ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㅇㅑㅈㅣ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅇㅑㅈㅣ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅑㅈㅣ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅇㅑㅈㅣ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅑㅈㅣ', 'ㅡㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-아/어요',
            rules: [
                suffixInflection('ㅏㅇㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅇㅛ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅛ', 'ㅓㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㅇㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅇㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅕㅇㅛ', 'ㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅕㅇㅛ', 'ㅇㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㅇㅛ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅎㅏㅇㅕㅇㅛ', 'ㅎㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏㅇㅛ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅓㅇㅛ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㅇㅛ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅇㅛ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㅇㅛ', 'ㅏㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅐㅇㅛ', 'ㅓㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅖㅇㅛ', 'ㅕㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅒㅇㅛ', 'ㅑㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅏㅇㅛ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅓㅇㅛ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㅇㅛ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㅇㅛ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅇㅛ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅛ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅇㅛ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅇㅛ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅇㅛ', '', [], ['p'])
            ]
        },
        {
            name: '-아/어지이다',
            rules: [
                suffixInflection('ㅏㅈㅣㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅈㅣㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㅈㅣㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅈㅣㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅈㅣㅇㅣㄷㅏ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅈㅣㅇㅣㄷㅏ', 'ㅓㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅕㅈㅣㅇㅣㄷㅏ', 'ㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅕㅈㅣㅇㅣㄷㅏ', 'ㅇㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㅈㅣㅇㅣㄷㅏ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅎㅏㅇㅕㅈㅣㅇㅣㄷㅏ', 'ㅎㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏㅈㅣㅇㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅓㅈㅣㅇㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㅈㅣㅇㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅈㅣㅇㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㅈㅣㅇㅣㄷㅏ', 'ㅏㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅐㅈㅣㅇㅣㄷㅏ', 'ㅓㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅖㅈㅣㅇㅣㄷㅏ', 'ㅕㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅒㅈㅣㅇㅣㄷㅏ', 'ㅑㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅏㅈㅣㅇㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅓㅈㅣㅇㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㅈㅣㅇㅣㄷㅏ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㅈㅣㅇㅣㄷㅏ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅈㅣㅇㅣㄷㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅈㅣㅇㅣㄷㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅈㅣㅇㅣㄷㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅈㅣㅇㅣㄷㅏ', 'ㅡㄷㅏ', [], ['v', 'adj'])
            ]
        },
        {
            name: '-았/었',
            rules: [
                suffixInflection('ㅆ', 'ㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅏㅆ', 'ㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅇㅏㅆ', 'ㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅏㅆ', 'ㅏㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅓㅆ', 'ㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅇㅓㅆ', 'ㄷㅏ', ['p'], ['v', 'adj', 'ida']),
                suffixInflection('ㅓㅆ', 'ㅓㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅕㅆ', 'ㅣㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅇㅕㅆ', 'ㅇㅣㄷㅏ', ['p'], ['v', 'adj', 'ida']),
                suffixInflection('ㅐㅆ', 'ㅏㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅎㅏㅇㅕㅆ', 'ㅎㅏㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏㅆ', 'ㅂㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅇㅜㅓㅆ', 'ㅂㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅇㅏㅆ', 'ㅅㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅇㅓㅆ', 'ㅅㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅐㅆ', 'ㅏㅎㄷㅏ', ['p'], ['adj']),
                suffixInflection('ㅐㅆ', 'ㅓㅎㄷㅏ', ['p'], ['adj']),
                suffixInflection('ㅖㅆ', 'ㅕㅎㄷㅏ', ['p'], ['adj']),
                suffixInflection('ㅒㅆ', 'ㅑㅎㄷㅏ', ['p'], ['adj']),
                suffixInflection('ㄹㅇㅏㅆ', 'ㄷㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㄹㅇㅓㅆ', 'ㄷㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㅆ', 'ㄹㅡㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㅆ', 'ㄹㅡㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅏㅆ', 'ㅡㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅓㅆ', 'ㅡㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅏㅆ', 'ㅡㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅓㅆ', 'ㅡㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅅㅕㅆ', 'ㅅㅣ', ['p'], ['eusi'])
            ]
        },
        {
            name: '-았/었었',
            rules: [
                suffixInflection('ㅏㅆㅇㅓㅆ', 'ㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅆㅇㅓㅆ', 'ㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅇㅏㅆㅇㅓㅆ', 'ㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅏㅆㅇㅓㅆ', 'ㅏㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅓㅆㅇㅓㅆ', 'ㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅇㅓㅆㅇㅓㅆ', 'ㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅓㅆㅇㅓㅆ', 'ㅓㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅕㅆㅇㅓㅆ', 'ㅣㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅇㅕㅆㅇㅓㅆ', 'ㅇㅣㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅐㅆㅇㅓㅆ', 'ㅏㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅎㅏㅇㅕㅆㅇㅓㅆ', 'ㅎㅏㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏㅆㅇㅓㅆ', 'ㅂㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅇㅜㅓㅆㅇㅓㅆ', 'ㅂㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅇㅏㅆㅇㅓㅆ', 'ㅅㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅇㅓㅆㅇㅓㅆ', 'ㅅㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅐㅆㅇㅓㅆ', 'ㅏㅎㄷㅏ', ['p'], ['adj']),
                suffixInflection('ㅐㅆㅇㅓㅆ', 'ㅓㅎㄷㅏ', ['p'], ['adj']),
                suffixInflection('ㅖㅆㅇㅓㅆ', 'ㅕㅎㄷㅏ', ['p'], ['adj']),
                suffixInflection('ㅒㅆㅇㅓㅆ', 'ㅑㅎㄷㅏ', ['p'], ['adj']),
                suffixInflection('ㄹㅇㅏㅆㅇㅓㅆ', 'ㄷㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㄹㅇㅓㅆㅇㅓㅆ', 'ㄷㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㅆㅇㅓㅆ', 'ㄹㅡㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㅆㅇㅓㅆ', 'ㄹㅡㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅏㅆㅇㅓㅆ', 'ㅡㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅓㅆㅇㅓㅆ', 'ㅡㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅏㅆㅇㅓㅆ', 'ㅡㄷㅏ', ['p'], ['v', 'adj']),
                suffixInflection('ㅓㅆㅇㅓㅆ', 'ㅡㄷㅏ', ['p'], ['v', 'adj'])
            ]
        },
        {
            name: '-았/었자',
            rules: [
                suffixInflection('ㅏㅆㅈㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅆㅈㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㅆㅈㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅆㅈㅏ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅆㅈㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅆㅈㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅆㅈㅏ', 'ㅓㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅕㅆㅈㅏ', 'ㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅕㅆㅈㅏ', 'ㅇㅣㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㅆㅈㅏ', 'ㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅎㅏㅇㅕㅆㅈㅏ', 'ㅎㅏㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏㅆㅈㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅓㅆㅈㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅏㅆㅈㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅓㅆㅈㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅐㅆㅈㅏ', 'ㅏㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅐㅆㅈㅏ', 'ㅓㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅖㅆㅈㅏ', 'ㅕㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅒㅆㅈㅏ', 'ㅑㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅏㅆㅈㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅓㅆㅈㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㅆㅈㅏ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㅆㅈㅏ', 'ㄹㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅆㅈㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅆㅈㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅏㅆㅈㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅓㅆㅈㅏ', 'ㅡㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅅㅕㅆㅈㅏ', 'ㅅㅣ', [], ['eusi'])
            ]
        },
        {
            name: '-(으)오-',
            rules: [
                suffixInflection('ㅇㅗ', 'ㄷㅏ', ['euo'], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗ', 'ㄷㅏ', ['euo'], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗ', 'ㅂㄷㅏ', ['euo'], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗ', 'ㅅㄷㅏ', ['euo'], ['v', 'adj']),
                suffixInflection('ㅇㅗ', 'ㅎㄷㅏ', ['euo'], ['adj']),
                suffixInflection('ㅇㅗ', 'ㄹㄷㅏ', ['euo'], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗ', 'ㄷㄷㅏ', ['euo'], ['v', 'adj']),
                suffixInflection('ㅇㅗ', '', ['euo'], ['eusi']),
                suffixInflection('ㅇㅡㅇㅗ', '', ['euo'], ['p', 'f'])
            ]
        },
        {
            name: '-(으)오',
            rules: [
                suffixInflection('ㅇㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅇㅗ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)오니까',
            rules: [
                suffixInflection('ㅇㅗㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㄴㅣㄲㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㄴㅣㄲㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㄴㅣㄲㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㄴㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㄴㅣㄲㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㄴㅣㄲㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅇㅗㄴㅣㄲㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)오리까',
            rules: [
                suffixInflection('ㅇㅗㄹㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㄹㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㄹㅣㄲㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㄹㅣㄲㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㄹㅣㄲㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㄹㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㄹㅣㄲㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㄹㅣㄲㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)오리다',
            rules: [
                suffixInflection('ㅇㅗㄹㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㄹㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㄹㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㄹㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㄹㅣㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㄹㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㄹㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㄹㅣㄷㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)오리이까',
            rules: [
                suffixInflection('ㅇㅗㄹㅣㅇㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㄹㅣㅇㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㄹㅣㅇㅣㄲㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㄹㅣㅇㅣㄲㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㄹㅣㅇㅣㄲㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㄹㅣㅇㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㄹㅣㅇㅣㄲㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㄹㅣㅇㅣㄲㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)오리이다',
            rules: [
                suffixInflection('ㅇㅗㄹㅣㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㄹㅣㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㄹㅣㅇㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㄹㅣㅇㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㄹㅣㅇㅣㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㄹㅣㅇㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㄹㅣㅇㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㄹㅣㅇㅣㄷㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-오이까',
            rules: [
                suffixInflection('ㅇㅗㄹㅣㅇㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅗㄹㅣㅇㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㄹㅣㅇㅣㄲㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-(으)오이다',
            rules: [
                suffixInflection('ㅇㅗㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㅇㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅇㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅇㅣㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㅇㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㅇㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅇㅣㄷㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅇㅗㅇㅣㄷㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-올시다',
            rules: [
                suffixInflection('ㅇㅗㄹㅅㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅣㅇㅗㄹㅅㅣㄷㅏ', '이다', [], ['eusi'])
            ]
        },
        {
            name: '-(으)옵-',
            rules: [
                suffixInflection('ㅇㅗㅂ', 'ㄷㅏ', ['euob'], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂ', 'ㄷㅏ', ['euob'], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㅂ', 'ㅂㄷㅏ', ['euob'], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂ', 'ㅅㄷㅏ', ['euob'], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂ', 'ㅎㄷㅏ', ['euob'], ['adj']),
                suffixInflection('ㅇㅗㅂ', 'ㄹㄷㅏ', ['euob'], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㅂ', 'ㄷㄷㅏ', ['euob'], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂ', '', ['euob'], ['eusi']),
                suffixInflection('ㅇㅡㅇㅗㅂ', '', ['euob'], ['p', 'f'])
            ]
        },
        {
            name: '-(으)옵나이까',
            rules: [
                suffixInflection('ㅇㅗㅂㄴㅏㅇㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂㄴㅏㅇㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㅂㄴㅏㅇㅣㄲㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂㄴㅏㅇㅣㄲㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂㄴㅏㅇㅣㄲㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㅂㄴㅏㅇㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㅂㄴㅏㅇㅣㄲㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂㄴㅏㅇㅣㄲㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅇㅗㅂㄴㅏㅇㅣㄲㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)옵나이다',
            rules: [
                suffixInflection('ㅇㅗㅂㄴㅏㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂㄴㅏㅇㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㅂㄴㅏㅇㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂㄴㅏㅇㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂㄴㅏㅇㅣㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㅂㄴㅏㅇㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㅂㄴㅏㅇㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂㄴㅏㅇㅣㄷㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅇㅗㅂㄴㅏㅇㅣㄷㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)옵니까',
            rules: [
                suffixInflection('ㅇㅗㅂㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㅂㄴㅣㄲㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂㄴㅣㄲㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂㄴㅣㄲㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㅂㄴㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㅂㄴㅣㄲㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂㄴㅣㄲㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅇㅗㅂㄴㅣㄲㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)옵니다',
            rules: [
                suffixInflection('ㅇㅗㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂㄴㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㅂㄴㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂㄴㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂㄴㅣㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㅂㄴㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㅂㄴㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂㄴㅣㄷㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅇㅗㅂㄴㅣㄷㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)옵디까',
            rules: [
                suffixInflection('ㅇㅗㅂㄷㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂㄷㅣㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㅂㄷㅣㄲㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂㄷㅣㄲㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂㄷㅣㄲㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㅂㄷㅣㄲㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㅂㄷㅣㄲㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂㄷㅣㄲㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅇㅗㅂㄷㅣㄲㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)옵디다',
            rules: [
                suffixInflection('ㅇㅗㅂㄷㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂㄷㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㅂㄷㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂㄷㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂㄷㅣㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㅂㄷㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㅂㄷㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂㄷㅣㄷㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅇㅗㅂㄷㅣㄷㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)옵소서',
            rules: [
                suffixInflection('ㅇㅗㅂㅅㅗㅅㅓ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂㅅㅗㅅㅓ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㅂㅅㅗㅅㅓ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅂㅅㅗㅅㅓ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂㅅㅗㅅㅓ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㅂㅅㅗㅅㅓ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㅂㅅㅗㅅㅓ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅂㅅㅗㅅㅓ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅇㅗㅂㅅㅗㅅㅓ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)와',
            rules: [
                suffixInflection('ㅇㅗㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅏ', '', [], ['eusi', 'euo', 'jao']),
                suffixInflection('ㅇㅡㅇㅗㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)외다',
            rules: [
                suffixInflection('ㅇㅗㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅣㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅗㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅗㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅣㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅗㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅗㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅗㅣㄷㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅇㅗㅣㄷㅏ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-요',
            rules: [
                suffixInflection('ㅇㅛ', '다', [], ['ida'])
            ]
        },
        {
            name: '-(으)우',
            rules: [
                suffixInflection('ㅇㅜ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㅇㅜ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅇㅜ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅇㅜ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅜ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㅇㅜ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅇㅜ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-(으)이',
            rules: [
                suffixInflection('ㅇㅣ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅣ', 'ㄹㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅡㅇㅣ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅡㅣ', 'ㄷㅏ', [], ['adj'])
            ]
        },
        {
            name: '-ㄴ/은들',
            rules: [
                suffixInflection('ㄴㄷㅡㄹ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㄴㄷㅡㄹ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄴㄷㅡㄹ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㄷㅡㄹ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㄷㅡㄹ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㄷㅡㄹ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㄴㄷㅡㄹ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㄷㅡㄹ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㄴ/은즉',
            rules: [
                suffixInflection('ㄴㅈㅡㄱ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㄴㅈㅡㄱ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄴㅈㅡㄱ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㅈㅡㄱ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅈㅡㄱ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅈㅡㄱ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㄴㅈㅡㄱ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅈㅡㄱ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄴㅈㅡㄱ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄴ/은즉슨',
            rules: [
                suffixInflection('ㄴㅈㅡㄱㅅㅡㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㅇㅡㄴㅈㅡㄱㅅㅡㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄴㅈㅡㄱㅅㅡㄴ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄴㅈㅡㄱㅅㅡㄴ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅈㅡㄱㅅㅡㄴ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄴㅈㅡㄱㅅㅡㄴ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅡㄴㅈㅡㄱㅅㅡㄴ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄴㅈㅡㄱㅅㅡㄴ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄴㅈㅡㄱㅅㅡㄴ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을까',
            rules: [
                suffixInflection('ㄹㄲㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㄲㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄲㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄲㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄲㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄲㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄲㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄲㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄲㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을깝쇼',
            rules: [
                suffixInflection('ㄹㄲㅏㅂㅅㅛ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㄲㅏㅂㅅㅛ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄲㅏㅂㅅㅛ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄲㅏㅂㅅㅛ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄲㅏㅂㅅㅛ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄲㅏㅂㅅㅛ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄲㅏㅂㅅㅛ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄲㅏㅂㅅㅛ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄲㅏㅂㅅㅛ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을꼬',
            rules: [
                suffixInflection('ㄹㄲㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㄲㅗ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄲㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄲㅗ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄲㅗ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄲㅗ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄲㅗ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄲㅗ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄲㅗ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을는지',
            rules: [
                suffixInflection('ㄹㄴㅡㄴㅈㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㄴㅡㄴㅈㅣ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄴㅡㄴㅈㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄴㅡㄴㅈㅣ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄴㅡㄴㅈㅣ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄴㅡㄴㅈㅣ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄴㅡㄴㅈㅣ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄴㅡㄴㅈㅣ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄴㅡㄴㅈㅣ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을데라니',
            rules: [
                suffixInflection('ㄹㄷㅔㄹㅏㄴㅣ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㄷㅔㄹㅏㄴㅣ', 'ㄹㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅡㄹㄷㅔㄹㅏㄴㅣ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅜㄹㄷㅔㄹㅏㄴㅣ', 'ㅂㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅡㄹㄷㅔㄹㅏㄴㅣ', 'ㅅㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㄷㅔㄹㅏㄴㅣ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄷㅔㄹㅏㄴㅣ', 'ㄷㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㄷㅔㄹㅏㄴㅣ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㄹ/을라',
            rules: [
                suffixInflection('ㄹㄹㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㄹㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄹㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄹㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄹㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을라고',
            rules: [
                suffixInflection('ㄹㄹㅏㄱㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㄹㅏㄱㅗ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅏㄱㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄹㅏㄱㅗ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅏㄱㅗ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㄱㅗ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄹㅏㄱㅗ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅏㄱㅗ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄹㅏㄱㅗ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을라치면',
            rules: [
                suffixInflection('ㄹㄹㅏㅊㅣㅁㅕㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㄹㅏㅊㅣㅁㅕㄴ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㄹㅏㅊㅣㅁㅕㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㄹㅏㅊㅣㅁㅕㄴ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㄹㅏㅊㅣㅁㅕㄴ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㄹㅏㅊㅣㅁㅕㄴ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㄹㅏㅊㅣㅁㅕㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㄹ/을락',
            rules: [
                suffixInflection('ㄹㄹㅏㄱ ㅁㅏㄹㄹㅏㄱ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㄹㅏㄱ ㅁㅏㄹㄹㅏㄱ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㄹㅏㄱ ㅁㅏㄹㄹㅏㄱ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㄹㅏㄱ ㅁㅏㄹㄹㅏㄱ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㄹㅏㄱ ㅁㅏㄹㄹㅏㄱ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㄹㅏㄱ ㅁㅏㄹㄹㅏㄱ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㄹㅏㄱ ㅁㅏㄹㄹㅏㄱ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄹㅏㄱ ㅁㅏㄹㄹㅏㄱ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을래',
            rules: [
                suffixInflection('ㄹㄹㅐ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㄹㅐ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㄹㅐ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㄹㅐ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㄹㅐ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㄹㅐ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㄹㅐ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㄹ/을러니',
            rules: [
                suffixInflection('ㄹㄹㅓㄴㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㄹㅓㄴㅣ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅓㄴㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄹㅓㄴㅣ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅓㄴㅣ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㄴㅣ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄹㅓㄴㅣ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㄴㅣ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄹㅓㄴㅣ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을러라',
            rules: [
                suffixInflection('ㄹㄹㅓㄹㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㄹㅓㄹㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅓㄹㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄹㅓㄹㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅓㄹㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㄹㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄹㅓㄹㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㄹㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄹㅓㄹㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을런가',
            rules: [
                suffixInflection('ㄹㄹㅓㄴㄱㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㄹㅓㄴㄱㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅓㄴㄱㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄹㅓㄴㄱㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅓㄴㄱㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㄴㄱㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄹㅓㄴㄱㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㄴㄱㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄹㅓㄴㄱㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을런고',
            rules: [
                suffixInflection('ㄹㄹㅓㄴㄱㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㄹㅓㄴㄱㅗ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅓㄴㄱㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄹㅓㄴㄱㅗ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅓㄴㄱㅗ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㄴㄱㅗ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄹㅓㄴㄱㅗ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㄴㄱㅗ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄹㅓㄴㄱㅗ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을런지',
            rules: [
                suffixInflection('ㄹㄹㅓㄴㅈㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㄹㅓㄴㅈㅣ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅓㄴㅈㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄹㅓㄴㅈㅣ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅓㄴㅈㅣ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㄴㅈㅣ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄹㅓㄴㅈㅣ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅓㄴㅈㅣ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄹㅓㄴㅈㅣ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을레',
            rules: [
                suffixInflection('ㄹㄹㅔ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㄹㅔ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅔ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄹㅔ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅔ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅔ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄹㅔ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅔ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄹㅔ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을레라',
            rules: [
                suffixInflection('ㄹㄹㅔㄹㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㄹㅔㄹㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅔㄹㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㄹㅔㄹㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㄹㅔㄹㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅔㄹㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㄹㅔㄹㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㄹㅔㄹㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㄹㅔㄹㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을려고',
            rules: [
                suffixInflection('ㄹㄹㅕㄱㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㄹㅕㄱㅗ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㄹㅕㄱㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㄹㅕㄱㅗ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㄹㅕㄱㅗ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㄹㅕㄱㅗ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㄹㅕㄱㅗ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㄹ/을망정',
            rules: [
                suffixInflection('ㄹㅁㅏㅇㅈㅓㅇ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅁㅏㅇㅈㅓㅇ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅁㅏㅇㅈㅓㅇ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅁㅏㅇㅈㅓㅇ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅁㅏㅇㅈㅓㅇ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅁㅏㅇㅈㅓㅇ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅁㅏㅇㅈㅓㅇ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅁㅏㅇㅈㅓㅇ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅁㅏㅇㅈㅓㅇ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을밖에',
            rules: [
                suffixInflection('ㄹㅂㅏㄲㅇㅔ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅂㅏㄲㅇㅔ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅂㅏㄲㅇㅔ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅂㅏㄲㅇㅔ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅂㅏㄲㅇㅔ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅂㅏㄲㅇㅔ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅂㅏㄲㅇㅔ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅂㅏㄲㅇㅔ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅂㅏㄲㅇㅔ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을뿐더러',
            rules: [
                suffixInflection('ㄹㅃㅜㄴㄷㅓㄹㅓ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅃㅜㄴㄷㅓㄹㅓ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅃㅜㄴㄷㅓㄹㅓ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅃㅜㄴㄷㅓㄹㅓ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅃㅜㄴㄷㅓㄹㅓ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅃㅜㄴㄷㅓㄹㅓ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅃㅜㄴㄷㅓㄹㅓ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅃㅜㄴㄷㅓㄹㅓ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅃㅜㄴㄷㅓㄹㅓ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을사',
            rules: [
                suffixInflection('ㄹㅅㅏ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅅㅏ', 'ㄹㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅡㄹㅅㅏ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅜㄹㅅㅏ', 'ㅂㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅡㄹㅅㅏ', 'ㅅㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅅㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅅㅏ', 'ㄷㄷㅏ', [], ['adj'])
            ]
        },
        {
            name: '-ㄹ/을새',
            rules: [
                suffixInflection('ㄹㅅㅐ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅅㅐ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅐ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅅㅐ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅐ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅐ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅅㅐ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅐ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅅㅐ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을세',
            rules: [
                suffixInflection('ㄹㅅㅔ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅅㅔ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅔ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅅㅔ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅔ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅔ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅅㅔ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅔ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅅㅔ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을세라',
            rules: [
                suffixInflection('ㄹㅅㅔㄹㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅅㅔㄹㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅔㄹㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅅㅔㄹㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅔㄹㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅔㄹㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅅㅔㄹㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅔㄹㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅅㅔㄹㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을세말이지',
            rules: [
                suffixInflection('ㄹㅅㅔㅁㅏㄹㅇㅣㅈㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅅㅔㅁㅏㄹㅇㅣㅈㅣ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅔㅁㅏㄹㅇㅣㅈㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅅㅔㅁㅏㄹㅇㅣㅈㅣ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅔㅁㅏㄹㅇㅣㅈㅣ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅔㅁㅏㄹㅇㅣㅈㅣ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅅㅔㅁㅏㄹㅇㅣㅈㅣ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅔㅁㅏㄹㅇㅣㅈㅣ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅅㅔㅁㅏㄹㅇㅣㅈㅣ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을소냐',
            rules: [
                suffixInflection('ㄹㅅㅗㄴㅑ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅅㅗㄴㅑ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅗㄴㅑ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅅㅗㄴㅑ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅗㄴㅑ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅗㄴㅑ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅅㅗㄴㅑ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅗㄴㅑ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅅㅗㄴㅑ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을손가',
            rules: [
                suffixInflection('ㄹㅅㅗㄴㄱㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅅㅗㄴㄱㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅗㄴㄱㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅅㅗㄴㄱㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅗㄴㄱㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅗㄴㄱㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅅㅗㄴㄱㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅗㄴㄱㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅅㅗㄴㄱㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을수록',
            rules: [
                suffixInflection('ㄹㅅㅜㄹㅗㄱ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅅㅜㄹㅗㄱ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅜㄹㅗㄱ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅅㅜㄹㅗㄱ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅜㄹㅗㄱ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅜㄹㅗㄱ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅅㅜㄹㅗㄱ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅜㄹㅗㄱ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅅㅜㄹㅗㄱ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을시',
            rules: [
                suffixInflection('ㄹㅅㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅅㅣ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅅㅣ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅅㅣ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅣ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅅㅣ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅅㅣ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅅㅣ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을시고',
            rules: [
                suffixInflection('ㄹㅅㅣㄱㅗ', 'ㄷㅏ', [], ['adj', 'ida']),
                suffixInflection('ㄹㅅㅣㄱㅗ', 'ㄹㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅡㄹㅅㅣㄱㅗ', 'ㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅜㄹㅅㅣㄱㅗ', 'ㅂㄷㅏ', [], ['adj']),
                suffixInflection('ㅇㅡㄹㅅㅣㄱㅗ', 'ㅅㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅅㅣㄱㅗ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅅㅣㄱㅗ', 'ㄷㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅅㅣㄱㅗ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅅㅣㄱㅗ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을싸록',
            rules: [
                suffixInflection('ㄹㅆㅏㄹㅗㄱ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅆㅏㄹㅗㄱ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅆㅏㄹㅗㄱ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅆㅏㄹㅗㄱ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅆㅏㄹㅗㄱ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅆㅏㄹㅗㄱ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅆㅏㄹㅗㄱ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅆㅏㄹㅗㄱ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅆㅏㄹㅗㄱ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을쏘냐',
            rules: [
                suffixInflection('ㄹㅆㅗㄴㅑ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅆㅗㄴㅑ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅆㅗㄴㅑ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅆㅗㄴㅑ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅆㅗㄴㅑ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅆㅗㄴㅑ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅆㅗㄴㅑ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅆㅗㄴㅑ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅆㅗㄴㅑ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을쏜가',
            rules: [
                suffixInflection('ㄹㅆㅗㄴㄱㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅆㅗㄴㄱㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅆㅗㄴㄱㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅆㅗㄴㄱㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅆㅗㄴㄱㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅆㅗㄴㄱㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅆㅗㄴㄱㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅆㅗㄴㄱㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅆㅗㄴㄱㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을이만큼',
            rules: [
                suffixInflection('ㄹㅇㅣㅁㅏㄴㅋㅡㅁ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅇㅣㅁㅏㄴㅋㅡㅁ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅇㅣㅁㅏㄴㅋㅡㅁ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅇㅣㅁㅏㄴㅋㅡㅁ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅇㅣㅁㅏㄴㅋㅡㅁ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅣㅁㅏㄴㅋㅡㅁ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅇㅣㅁㅏㄴㅋㅡㅁ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅇㅣㅁㅏㄴㅋㅡㅁ', '', [], ['eusi', 'euo']),
                suffixInflection('ㅇㅡㄹㅇㅣㅁㅏㄴㅋㅡㅁ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을작시면',
            rules: [
                suffixInflection('ㄹㅈㅏㄱㅅㅣㅁㅕㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅈㅏㄱㅅㅣㅁㅕㄴ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅈㅏㄱㅅㅣㅁㅕㄴ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅈㅏㄱㅅㅣㅁㅕㄴ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅈㅏㄱㅅㅣㅁㅕㄴ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅈㅏㄱㅅㅣㅁㅕㄴ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅈㅏㄱㅅㅣㅁㅕㄴ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㄹ/을지',
            rules: [
                suffixInflection('ㄹㅈㅣ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅈㅣ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅈㅣ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅈㅣ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅈㅣ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을지나',
            rules: [
                suffixInflection('ㄹㅈㅣㄴㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅈㅣㄴㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅈㅣㄴㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄴㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅈㅣㄴㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄴㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을지나라',
            rules: [
                suffixInflection('ㄹㅈㅣㄴㅏㄹㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅈㅣㄴㅏㄹㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㅏㄹㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅈㅣㄴㅏㄹㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㅏㄹㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄴㅏㄹㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅈㅣㄴㅏㄹㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄴㅏㄹㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㅏㄹㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을지라',
            rules: [
                suffixInflection('ㄹㅈㅣㄹㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅈㅣㄹㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄹㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅈㅣㄹㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄹㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄹㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅈㅣㄹㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄹㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅈㅣㄹㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을지라도',
            rules: [
                suffixInflection('ㄹㅈㅣㄹㅏㄷㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅈㅣㄹㅏㄷㅗ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄹㅏㄷㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅈㅣㄹㅏㄷㅗ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄹㅏㄷㅗ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄹㅏㄷㅗ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅈㅣㄹㅏㄷㅗ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄹㅏㄷㅗ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅈㅣㄹㅏㄷㅗ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을지로다',
            rules: [
                suffixInflection('ㄹㅈㅣㄹㅗㄷㅏ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅈㅣㄹㅗㄷㅏ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄹㅗㄷㅏ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅈㅣㄹㅗㄷㅏ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄹㅗㄷㅏ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄹㅗㄷㅏ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅈㅣㄹㅗㄷㅏ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄹㅗㄷㅏ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅈㅣㄹㅗㄷㅏ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을지며',
            rules: [
                suffixInflection('ㄹㅈㅣㅁㅕ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅈㅣㅁㅕ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㅁㅕ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅈㅣㅁㅕ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㅁㅕ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㅁㅕ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅈㅣㅁㅕ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㅁㅕ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅈㅣㅁㅕ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을지어다',
            rules: [
                suffixInflection('ㄹㅈㅣㅇㅓㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅈㅣㅇㅓㄷㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅈㅣㅇㅓㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㄹㅈㅣㅇㅓㄷㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㄹㅈㅣㅇㅓㄷㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㄹㅈㅣㅇㅓㄷㅏ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅈㅣㅇㅓㄷㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㄹ/을지언정',
            rules: [
                suffixInflection('ㄹㅈㅣㅇㅓㄴㅈㅓㅇ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅈㅣㅇㅓㄴㅈㅓㅇ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㅇㅓㄴㅈㅓㅇ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅈㅣㅇㅓㄴㅈㅓㅇ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㅇㅓㄴㅈㅓㅇ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㅇㅓㄴㅈㅓㅇ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅈㅣㅇㅓㄴㅈㅓㅇ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㅇㅓㄴㅈㅓㅇ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅈㅣㅇㅓㄴㅈㅓㅇ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을진대',
            rules: [
                suffixInflection('ㄹㅈㅣㄴㄷㅐ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅈㅣㄴㄷㅐ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㄷㅐ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅈㅣㄴㄷㅐ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㄷㅐ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄴㄷㅐ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅈㅣㄴㄷㅐ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄴㄷㅐ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㄷㅐ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을진대는',
            rules: [
                suffixInflection('ㄹㅈㅣㄴㄷㅐㄴㅡㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅈㅣㄴㄷㅐㄴㅡㄴ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㄷㅐㄴㅡㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅈㅣㄴㄷㅐㄴㅡㄴ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㄷㅐㄴㅡㄴ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄴㄷㅐㄴㅡㄴ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅈㅣㄴㄷㅐㄴㅡㄴ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄴㄷㅐㄴㅡㄴ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㄷㅐㄴㅡㄴ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을진댄',
            rules: [
                suffixInflection('ㄹㅈㅣㄴㄷㅐㄴ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅈㅣㄴㄷㅐㄴ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㄷㅐㄴ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅈㅣㄴㄷㅐㄴ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㄷㅐㄴ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄴㄷㅐㄴ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅈㅣㄴㄷㅐㄴ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄴㄷㅐㄴ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㄷㅐㄴ', '', [], ['p'])
            ]
        },
        {
            name: '-ㄹ/을진저',
            rules: [
                suffixInflection('ㄹㅈㅣㄴㅈㅓ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅈㅣㄴㅈㅓ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㅈㅓ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㄹㅈㅣㄴㅈㅓ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㅈㅓ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄴㅈㅓ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㄹㅈㅣㄴㅈㅓ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㄹㅈㅣㄴㅈㅓ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㄹㅈㅣㄴㅈㅓ', '', [], ['p'])
            ]
        },
        {
            name: '-ㅁ/음',
            rules: [
                suffixInflection('ㅁ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅁ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅁ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㅁ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅁ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-ㅁ/음세',
            rules: [
                suffixInflection('ㅁ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅁ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅁ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㅁ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅁ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㅁ', 'ㄷㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-ㅁ/음도',
            rules: [
                suffixInflection('ㅁㄷㅗ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅁㄷㅗ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁㄷㅗ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅁㄷㅗ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁㄷㅗ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㄷㅗ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㅁㄷㅗ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㄷㅗ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅁㄷㅗ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-ㅁ/음에랴',
            rules: [
                suffixInflection('ㅁㅇㅔㄹㅑ', 'ㄷㅏ', [], ['v', 'adj', 'ida']),
                suffixInflection('ㄹㅁㅇㅔㄹㅑ', 'ㄹㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁㅇㅔㄹㅑ', 'ㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅜㅁㅇㅔㄹㅑ', 'ㅂㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅇㅡㅁㅇㅔㄹㅑ', 'ㅅㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㅇㅔㄹㅑ', 'ㅎㄷㅏ', [], ['adj']),
                suffixInflection('ㄹㅇㅡㅁㅇㅔㄹㅑ', 'ㄷㄷㅏ', [], ['v', 'adj']),
                suffixInflection('ㅁㅇㅔㄹㅑ', '', [], ['eusi']),
                suffixInflection('ㅇㅡㅁㅇㅔㄹㅑ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-ㅂ/읍쇼',
            rules: [
                suffixInflection('ㅂㅅㅛ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅂㅅㅛ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅂㅅㅛ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㅂㅅㅛ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅂㅅㅛ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㅂㅅㅛ', 'ㄷㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-ㅂ/읍시다',
            rules: [
                suffixInflection('ㅂㅅㅣㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅂㅅㅣㄷㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅂㅅㅣㄷㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㅂㅅㅣㄷㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅂㅅㅣㄷㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㅂㅅㅣㄷㅏ', 'ㄷㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-ㅂ/읍시다',
            rules: [
                suffixInflection('ㅂㅅㅣㅅㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅂㅅㅣㅅㅏ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅂㅅㅣㅅㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㅂㅅㅣㅅㅏ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅂㅅㅣㅅㅏ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㅂㅅㅣㅅㅏ', 'ㄷㄷㅏ', [], ['v']),
                suffixInflection('ㅂㅅㅣㅅㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-ㅂ/읍시오',
            rules: [
                suffixInflection('ㅂㅅㅣㅇㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅂㅅㅣㅇㅗ', 'ㄹㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅂㅅㅣㅇㅗ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅜㅂㅅㅣㅇㅗ', 'ㅂㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅡㅂㅅㅣㅇㅗ', 'ㅅㄷㅏ', [], ['v']),
                suffixInflection('ㄹㅇㅡㅂㅅㅣㅇㅗ', 'ㄷㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-자',
            rules: [
                suffixInflection('ㅈㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅇㅣㅈㅏ', '이다', [], ['v'])
            ]
        },
        {
            name: '-자고',
            rules: [
                suffixInflection('ㅈㅏㄱㅗ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-자구',
            rules: [
                suffixInflection('ㅈㅏㄱㅜ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-자꾸나',
            rules: [
                suffixInflection('ㅈㅏㄲㅜㄴㅏ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-자느니',
            rules: [
                suffixInflection('ㅈㅏㄴㅡㄴㅣ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-자니까',
            rules: [
                suffixInflection('ㅈㅏㄴㅣㄲㅏ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-자마자',
            rules: [
                suffixInflection('ㅈㅏㅁㅏㅈㅏ', 'ㄷㅏ', [], ['v']),
                suffixInflection('ㅈㅏㅁㅏㅈㅏ', '', [], ['eusi'])
            ]
        },
        {
            name: '-자며',
            rules: [
                suffixInflection('ㅈㅏㅁㅕ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-자면',
            rules: [
                suffixInflection('ㅈㅏㅁㅕㄴ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-자면서',
            rules: [
                suffixInflection('ㅈㅏㅁㅕㄴㅅㅓ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-자손',
            rules: [
                suffixInflection('ㅈㅏㅅㅗㄴ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-자오-',
            rules: [
                suffixInflection('ㅈㅏㅇㅗ', 'ㄷㅏ', ['jao'], ['v']),
                suffixInflection('ㅈㅏㅇㅗ', 'ㄷㅏ', [], ['v'])
            ]
        },
        {
            name: '-자옵-',
            rules: [
                suffixInflection('ㅈㅏㅇㅗㅂ', 'ㄷㅏ', ['jaob'], ['v'])
            ]
        },
        {
            name: '-잡-',
            rules: [
                suffixInflection('ㅈㅏㅂ', 'ㄷㅏ', ['jab'], ['v'])
            ]
        },
        {
            name: '-죠',
            rules: [
                suffixInflection('ㅈㅛ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㅈㅛ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-지',
            rules: [
                suffixInflection('ㅈㅣ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㅈㅣ', '', [], ['p', 'f', 'eusi'])
            ]
        },
        {
            name: '-지마는',
            rules: [
                suffixInflection('ㅈㅣㅁㅏㄴㅡㄴ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㅈㅣㅁㅏㄴㅡㄴ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-지만',
            rules: [
                suffixInflection('ㅈㅣㅁㅏㄴ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㅈㅣㅁㅏㄴ', '', [], ['p', 'f', 'euo'])
            ]
        },
        {
            name: '-지만서도',
            rules: [
                suffixInflection('ㅈㅣㅁㅏㄴㅅㅓㄷㅗ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㅈㅣㅁㅏㄴㅅㅓㄷㅗ', '', [], ['p', 'f'])
            ]
        },
        {
            name: '-지요',
            rules: [
                suffixInflection('ㅈㅣㅇㅛ', 'ㄷㅏ', [], ['v', 'ida']),
                suffixInflection('ㅈㅣㅇㅛ', '', [], ['p', 'f', 'eusi'])
            ]
        }
    ]
};
