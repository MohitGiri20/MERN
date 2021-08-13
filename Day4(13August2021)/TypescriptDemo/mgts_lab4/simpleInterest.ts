class si implements Interest{
    amount: number;
    rate: number;
    time: number;
    
    display(amount: number, rate: number, time: number): number {
        return (amount * rate * time )/100;
    }
    

}