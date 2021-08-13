// prototype of overloaded parameters
// a function with any type parameter
// logic for optinal parameters

// Static Polymorphism


function calcTotalBill(num1 : number, num2 : number);
function calcTotalBill(num1 : number, num2 : number,num3?:any);
function calcTotalBill(num1 : number, message : string);
function calcTotalBill(a: any,b : any,c?:any){
    var res : number = a+b;

    if(c!=null){
        res+=c;
    }
    console.log(res);
}

calcTotalBill(100,200)
calcTotalBill(121,"Hello Ji")
calcTotalBill(121,43,"Mg");



