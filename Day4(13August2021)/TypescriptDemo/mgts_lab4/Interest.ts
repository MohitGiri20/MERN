interface Interest{

    amount : number
    rate :number
    time : number
    //display : ()=>void
    // OR
    display(amount:number,rate:number,time:number) :number
}