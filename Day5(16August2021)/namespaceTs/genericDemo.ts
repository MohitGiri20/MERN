// Generic functions and classes

// Generic functionality helps in creating classes and functions
// that can be bound to any type.
// helps in avoiding confusion related to typescript


// This generic template is restricted to typescript only.
// function getData<Type>(a:Type) : Type{
//     return a;
// }

// var a = getData<string>("Hello Ji")
// console.log(a);

class Data<Type>{
    t : Type

    getData() : Type
{
     return this.t
} 

    setData(t:Type){
       this. t = t;
    }


}

class MyData<Type1,Type2>{
    t1 : Type1
    t2 : Type2

    constructor(t1:Type1,t2:Type2){
        this.t1 = t1;
        this.t2 = t2;
    }

    public get(){
        console.log({
            "value1" : this.t1,
            "value2" : this.t2
        })
    }



}

var v1 = new MyData<number,string>(101,"hello Ji");
var v2 = new MyData<number,number>(1010,101);
v1.get();
v2.get();