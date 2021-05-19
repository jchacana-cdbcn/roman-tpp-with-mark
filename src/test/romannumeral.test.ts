import {RomanNumeral} from "../main/romanNumeral";

describe('Roman Numeral', () => {
    it.each([
        ["", 0],
        ["I", 1],
        ["II", 2],
        ["III", 3],
        ["IV", 4]])
    ("return %s when passing %i", (expected: string, input: number) => {
        let romanNumeral: RomanNumeral = new RomanNumeral();
        expect(romanNumeral.convert(input)).toBe(expected);
    })
})