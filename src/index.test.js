import {expect, test, describe, beforeAll} from "vitest";
import {more} from './index.js';

describe('String functions', () => {
    beforeAll(() => {
        more();
    });
    describe('reverse', () => {
        test('String converts to gnirtS', () => {
            expect("String".reverse).toBe("gnirtS");
        });
        test('empty string', () => {
            expect("".reverse).toBe("");
        });
        test('empty string with space', () => {
            expect(" ".reverse).toBe(" ");
        });
    });
    describe('slugify', () => {
        test.each([
            ['Test string', 'test-string'],
            ['TestSTring', 'teststring'],
            ['hUk1 lIerSdt 1', 'huk1-liersdt-1'],
            ['test--test12', 'test-test12'],
            ['test----test12', 'test-test12'],
            ['test----test------12', 'test-test-12'],
            ['   Bla Blub   ', 'bla-blub'],
            [' Üm Läu  t ', 'um-lau-t'],
            ['Crème Brulée', 'creme-brulee'],
        ])('%s converts to %s', (input, output) => {
            expect(input.slugify).toBe(output);
        })
    });
    describe('camelCase', () => {
        test.each([
            ['first_name', 'firstName'],
            ['test-data', 'testData'],
            ['über-trieben', 'uberTrieben'],
            ['_moz-webkit', 'MozWebkit'],
            ['_random_data', 'RandomData'],
            ['mul_tip_le_underscores', 'mulTipLeUnderscores'],
            ['space in between', 'spaceInBetween'],
            ['dogs_are_great!', 'dogsAreGreat'],
            ['some special characters . @#$%^&*())_+}{[]\\|"\':;?/>.<~`', 'someSpecialCharacters'],
        ])('%s converts to %s', (input, output) => {
            expect(input.camelCase).toBe(output);
        });
    });

    describe('contains', function () {
        test.each([
            ['Test that in this string is a string', 'this', true],
            ['Test that in this string is not a string', 'banana', false],
            ['Test that in this string is not a string', null, false],
            ['Test that in this string is not a string', undefined, false],
            ['Test that in this string is not a string', 'a', true],
            ['testtesttest', 'tt', true],
            ['', '', true],
            ['', null, false],
            ['', undefined, false],
            ['', 0, false],
            ['', false, false],
            ['0', 0, true],
            ['false', false, true],
        ])('%s contains %s is %s', (input, search, expected) => {
            expect(input.contains(search)).toBe(expected);
        });
    });

    describe('between', () => {
        test.each([
            ['<body>Test string</body>', '<body>', '</body>', 'Test string'],
            ['<body><a>Test string</body>', '<a>', '</a>', ''],
            ['<body><a>Test string</a></body>', '<b>', '</a>', ''],
            ['<div><div>Test string</div></div>', '<div>', '</div>', '<div>Test string'],
            ['<div><div>Test string</div></div>', '', '', ''],
            ['<div><div>Test string>', '<div>', '</div>', ''],
            ['<div><div>Test string>', null, '</div>', ''],
            ['<div><div>Test string>', undefined, '</div>', ''],
            ['<div><div>Test string</div>', '<div>', null, ''],
            ['<div><div>Test string>', 1, false, ''],
            ['<div>1Test stringfalse', 1, false, 'Test string'],
        ])('%s between %s and %s is %s', (input, start, end, expected) => {
            expect(input.between(start, end)).toBe(expected);
        })
    })
});
