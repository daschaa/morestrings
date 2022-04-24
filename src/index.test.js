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
});
