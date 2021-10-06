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
var Data = /** @class */ (function () {
    function Data() {
    }
    Data.prototype.getData = function () {
        return this.t;
    };
    Data.prototype.setData = function (t) {
        this.t = t;
    };
    return Data;
}());
var MyData = /** @class */ (function () {
    function MyData(t1, t2) {
        this.t1 = t1;
        this.t2 = t2;
    }
    MyData.prototype.get = function () {
        console.log({
            "value1": this.t1,
            "value2": this.t2
        });
    };
    return MyData;
}());
var v1 = new MyData(101, "hello Ji");
var v2 = new MyData(1010, 101);
v1.get();
v2.get();
