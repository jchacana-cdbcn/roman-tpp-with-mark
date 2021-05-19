export class RomanNumeral {
    convert(number: number) {
        let result = "";
        if(number == 4) {
            return "IV"
        }
        if (number == 5){
            return "V";
        }
        while (number >= 1) {
            result += "I";
            number -= 1;
        }
        return result;
    }
}