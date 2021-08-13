// prototype of overloaded parameters
// a function with any type parameter
// logic for optinal parameters
function calcTotalBill(a, b, c) {
    var res = a + b;
    if (c != null) {
        res += c;
    }
    console.log(res);
}
calcTotalBill(100, 200);
calcTotalBill(121, "Hello Ji");
calcTotalBill(121, 43, "Mg");
