function myFuntion(n1: number, n2: number) {
    return n1 + n2;
}
myFuntion(21, 21)

function add(n1: number, n2: number): number {
    return n1 + n2;
}

function resultFunction(num: number): void {
    console.log("string :" + num)
}
resultFunction(add(21, 21))

