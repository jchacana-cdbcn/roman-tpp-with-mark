export class RomanNumeral {
    convert(number: number) {
        let result = "";
        while (number >= 1) {
            result += "I";
            number--;
        }
        return result;
    }
}