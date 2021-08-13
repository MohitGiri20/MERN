class homeLoan implements loan{
    security: boolean;
    displayS(security: any): string {
        
        if(security) return "Yes"
        else return "No"
    }
    amount: number;
    rate: number;
    time: number;
    constructor( amount: number,rate: number,time: number,security:boolean){
        this.amount = amount;
        this.rate =rate;
        this.time = time;
        this.security = security;
    }

    display(amount: number, rate: number, time: number): number {
        this.security = true;
        return (amount*rate*time)/100;
    }
    
}

var h:homeLoan = new homeLoan(40000,10,5,true);
console.log(h.display(40000,10,5));
console.log(h.displayS(true))

