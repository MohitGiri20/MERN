var myCalc  = function(a :number , b:number) : number{
    return a+b
}

// var data : any ="Hello"
// data = 12

console.log(myCalc(12,24))

var calc = function(data1:any,data2:any){
    console.log(data1+data2)
}

console.log(21,23);
console.log("Hello","Ji")

// Rest Parameters

var calcu = function (...mydata){
    console.log(mydata)
} 

calcu(12,10,24)