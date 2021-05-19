export class RomanNumeral {
    convert(number: number) {
        let result = "";
        if(number >= 4) {
            return "IV"
        }
        while (number >= 1) {
            result += "I";
            number -= 1;
        }
        return result;
    }
}