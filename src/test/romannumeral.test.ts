import {RomanNumeral} from "../main/romanNumeral";

describe('Roman Numeral', () => {
    it.each([
        ["", 0],
        ["I", 1],
        ["II", 2],
        ["III", 3],
        ["IV", 4],
        ["V", 5],
        ["VI", 6],
        ["VII", 7],
        ["VIII", 8],
        ["IX", 9],
        ["X", 10],
        ["XI", 11],
        ["XIV", 14],
        ["XIX", 19],
        ["XX", 20],
        ["XXXIX", 39],
        ["XL", 40],
        ["XLIX", 49],
        ["L", 50],
    ])
    ("return %s when passing %i", (expected: string, input: number) => {
        let romanNumeral: RomanNumeral = new RomanNumeral();
        expect(romanNumeral.convert(input)).toBe(expected);
    })
})