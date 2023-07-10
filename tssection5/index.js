var Department = /** @class */ (function () {
    function Department(n) {
        this.emloyess = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    Department.prototype.addEmployes = function (emloyess) {
        this.emloyess.push(emloyess);
    };
    return Department;
}());
var myNewname = new om("jd");
var myname = new Department("om");
myname.addEmployes("yash");
myname.describe();
console.log(myname);
