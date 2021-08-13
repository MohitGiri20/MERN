// var x = () =>{
//     console.log("Hello Ji")
// }
// x()
// var myfunc = function(callme){
//     callme();
// }
// myfunc(()=>{
//     console.log("called")
// })
var myfunc = function (callme) {
    callme(10, 20);
};
var sampleFunc = function (a, b) {
    console.log(a + b);
};
myfunc(sampleFunc);
myfunc(function () {
    console.log("called");
});
