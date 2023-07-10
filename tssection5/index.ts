// udemy section 5 ts
interface om{
    
}

class Department {
    name: string;
    emloyess: string[] = [];

    constructor(n: string) {
        this.name = n
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployes(emloyess: string) {
        this.emloyess.push(emloyess)
    }
}
let myNewname = new om("jd");
const myname = new Department("om");
myname.addEmployes("yash");
myname.describe();
console.log(myname);