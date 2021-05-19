export class RomanNumeral {
    numeralMaps: Record<number, string> = {0: "", 1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL"};
    keys = Object.keys(this.numeralMaps).reverse()

    convert(number: number): string {
        if(number === 0) return ""
        let foundKey = this.getFloorKey(number);
        return this.numeralMaps[foundKey] + this.convert(number - foundKey);
    }

    getFloorKey(input: number): number {
        return Number(this.keys.map(x => Number(x)).filter(x => x <= input)[0]);
    }
}