var myCalc = function (a, b) {
    return a + b;
};
// var data : any ="Hello"
// data = 12
console.log(myCalc(12, 24));
var calc = function (data1, data2) {
    console.log(data1 + data2);
};
console.log(21, 23);
console.log("Hello", "Ji");
// Rest Parameters
var calcu = function () {
    var mydata = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mydata[_i] = arguments[_i];
    }
    console.log(mydata);
};
calcu(12, 10, 24);
