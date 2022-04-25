import {expect, test, describe, beforeAll} from "vitest";
import {more} from './index.js';

describe('String functions', () => {
    beforeAll(() => {
        more();
    });
    describe('reverse', () => {
        test('defined string', () => {
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
        ])('defined string', (input, output) => {
            expect(input.slugify).toBe(output);
        })
    })
});
