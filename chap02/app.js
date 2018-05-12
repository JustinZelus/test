function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eyecolor;
}
Person.weight = 200;
var myFather = new Person("John","Wikker",35,"blue");
var myMother = new Person("Mary","Jane",35,"block");

myFather.nationality = "English";
myFather.name = function() {
    return this.firstName + " " + this.lastName;
};

console.log(myFather);
console.log(myMother);
console.log(myFather.name());
console.log("\r\n ------------------------------- \r\n");


console.log(myFather);
console.log(myMother);
