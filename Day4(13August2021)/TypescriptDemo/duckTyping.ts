// DuckTyping

class Duck{
    sound : string ="Quack"
}

class Cow{
    sound : string = "Moo"
}

class Tiger{
    sound : string ="Roar"
}

var animal: Tiger = new Duck();
var bird : Duck = new Cow();
console.log(bird);
console.log(animal.sound);