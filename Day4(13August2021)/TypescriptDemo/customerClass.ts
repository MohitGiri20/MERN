class custClass implements Customer{
    email: string;
    name: string;
    address: string;
    age: number;
    display(): string {
        throw new Error("Method not implemented.");
    }
    
}