function addAndhandle(n1: number, n2: number, cb: (num: number) => void) {
    const result: number = n1 + n2;
    cb(result);
}
addAndhandle(10, 20, (result) => {
    console.log(result);
})  