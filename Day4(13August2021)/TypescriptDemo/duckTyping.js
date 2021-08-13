// DuckTyping
var Duck = /** @class */ (function () {
    function Duck() {
        this.sound = "Quack";
    }
    return Duck;
}());
var Cow = /** @class */ (function () {
    function Cow() {
        this.sound = "Moo";
    }
    return Cow;
}());
var Tiger = /** @class */ (function () {
    function Tiger() {
        this.sound = "Roar";
    }
    return Tiger;
}());
var animal = new Duck();
var bird = new Cow();
console.log(bird);
console.log(animal.sound);
