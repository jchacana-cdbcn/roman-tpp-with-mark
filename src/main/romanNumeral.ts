export class RomanNumeral {
    numeralMaps: Record<number, string> = {0: "", 1: "I", 4: "IV", 5: "V", 9: "IX"};
    keys = Object.keys(this.numeralMaps)

    convert(number: number): string {

        let foundKey = this.getFloorKey(number);

        if (number >= 9){
            return this.numeralMaps[foundKey] + this.convert(number - foundKey);
        }
        if (number >= 5){
            return this.numeralMaps[foundKey] + this.convert(number - foundKey);
        }
        if(number == 4) {
            return this.numeralMaps[foundKey] + this.convert(number - foundKey);
        }
        if (number >= 1) {
            return this.numeralMaps[foundKey] + this.convert(number - foundKey)
        }

        return "";
    }

    getFloorKey(input: number): number {
        let result = Number(this.keys.reverse().map(x => Number(x)).filter(x => x <= input)[0]);
        return result;
    }
}