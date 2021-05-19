import {RomanNumeral} from "../main/romanNumeral";

describe('Roman Numeral', () => {
    it("return '' when passing 0", () => {
        let romanNumeral: RomanNumeral = new RomanNumeral();
        expect(romanNumeral.convert(0)).toBe("");
    })

    it("return 'I' when passing 1", () => {
        let romanNumeral: RomanNumeral = new RomanNumeral();
        expect(romanNumeral.convert(1)).toBe("I");
    })

    it("return 'II' when passing 2", () => {
        let romanNumeral: RomanNumeral = new RomanNumeral();
        expect(romanNumeral.convert(2)).toBe("II");
    })
})