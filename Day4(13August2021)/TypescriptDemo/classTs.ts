


class Person{

    // By default : public 
    name : string;
    address : string;

    constructor(name:string,address:string){
        this.name = name;
        this.address = address;
    }

}




class Person1{

    // By default : public 
   private name : string;
    private address : string;

    constructor(name:string,address:string){
        this.name = name;
        this.address = address;
    }

    public getName() : string {
        return this.name;
    }

    public getAddress() : string {
        return this.address;
    }

}


 var person = new Person("Mohit","Rohini,Delhi");
 console.log(person.name)
 console.log(person.address)
 console.log(person)

 var person1 : Person1 =new Person1("Mg","Delhi");
 console.log(person1.getName());
 console.log(person1.getAddress());