
// Multiple Inheritance is not supported in Typescript


class Per{

    // By default : public 
    name : string;
    address : string;

    constructor(name:string,address:string){
        this.name = name;
        this.address = address;
    }

}

class Employee extends Per{

    constructor(){
        super("Mg","Delhi")
    }
}

var e = new Employee();
console.log(e);
console.log(e.name);