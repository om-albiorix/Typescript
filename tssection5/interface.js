// interface example
var myObj;
myObj = {
    name: "om",
    age: 21,
    greet: function (phrase) {
        console.log(phrase + " " + this.name);
    }
};
