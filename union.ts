function combine(input1: number | string, input2: number | string, input3: string) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2
    } else {
        result = input1.toString() + input2.toString();
    }
}
const combineAges = combine(30, 40, "om");
console.log(combineAges);