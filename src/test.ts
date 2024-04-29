// imports
import { describe, expect, test } from '@jest/globals';
import results from './testdataresults';
import { calcCrow, Convert, toRad } from './utils';

// Test for our Distance Calculating Function

describe('distance calculation module', () => {
    test('distance calculation using coordinates', () => {
        expect(calcCrow(53.339428, -6.257664, 53.008769, -6.1056711)).toBe(38.137568098201655)
    })
})

// Test Deg to RAd Function
describe('To Rad Module', () => {
    test('convert deg to rad', () => {
        expect(toRad(53.339428)).toBe(0.9309486397304539)
    })
})


// Test if Convert returns JSON
describe('To JSON Module', () => {
    test('convert to json', async () => {
        const data = await Convert("./src/test.txt")
        expect(data).toEqual(results)
    })
})
