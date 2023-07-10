// function in tyoescript
// i takes default parameters

const sum = (a: number, b: number = 1) => { a + b };
console.log(sum(20, 21));

// spread operator

let myname: string[] = ["im", "om"];
let newname: string[] = ["akky"];
myname.push(...myname);

//rest operator
let x: number = 0
function myFunc(...theagrs) {
    return theagrs;
}
myFunc(1, 2, 3, 4, 4, 5);

// destructring in array and object

let myObj = {
    fname: "om",
    myid: 1
}
let { fname, myid } = myObj;
console.log(fname, myid);


