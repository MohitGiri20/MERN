var Person = /** @class */ (function () {
    function Person(name, address) {
        this.name = name;
        this.address = address;
    }
    return Person;
}());
var person = new Person("Mohit", "Rohini,Delhi");
console.log(person.name);
console.log(person.address);
console.log(person);
