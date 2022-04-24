import {expect, test} from "vitest";
import {more} from './index.js';

test('Reverse a string', () => {
    more();
    expect("String".reverse).toBe("gnirtS");
})