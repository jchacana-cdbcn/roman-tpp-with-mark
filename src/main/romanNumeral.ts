export class RomanNumeral {
    convert(number: number) {
        let result = "";
        if(number >= 1)
            return result + "I"
        return result;
    }
}