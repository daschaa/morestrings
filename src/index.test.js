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
    })
});
