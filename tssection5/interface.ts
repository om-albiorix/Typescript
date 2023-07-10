// interface example

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void
}

let myObj: Person;

myObj = {
    name: "om",
    age: 21,
    greet(phrase: string) {
        console.log(phrase + " " + this.name);
    }
}; 
