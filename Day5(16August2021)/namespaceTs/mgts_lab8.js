var MData = /** @class */ (function () {
    function MData() {
    }
    MData.prototype.getData = function () {
        return this.t;
    };
    MData.prototype.setData = function (t) {
        this.t = t;
    };
    return MData;
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
var v = new MData();
v.setData("hello ji");
console.log(v.getData());
var v1 = new MyData(101, "hello Ji");
var v2 = new MyData(1010, 101);
v1.get();
v2.get();
