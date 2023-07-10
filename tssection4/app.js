// function in tyoescript
// i takes default parameters
var sum = function (a, b) {
    if (b === void 0) { b = 1; }
    a + b;
};
console.log(sum(20, 21));
// spread operator
var myname = ["im", "om"];
var newname = ["akky"];
myname.push.apply(myname, myname);
//rest operator
var x = 0;
function myFunc() {
    var theagrs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        theagrs[_i] = arguments[_i];
    }
    return theagrs;
}
myFunc(1, 2, 3, 4, 4, 5);
// destructring in array and object
var myObj = {
    fname: "om",
    myid: 1
};
var fname = myObj.fname, myid = myObj.myid;
console.log(fname, myid);
