
class Item{

    // By default : public 
   private itemName : string;
    private price : number;
    private quantity : number;

    constructor(itemName:string,price:number,quantity:number){
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
    }

    public getItemName() : string {
        return this.itemName;
    }

    public getPrice() : number {
        return this.price;
    }

    public getQuantity() : number {
        return this.quantity;
    }
    
}


 var item : Item = new Item("Pen",50,5);


 console.log(item.getItemName());
 console.log(item.getPrice());
 console.log(item.getQuantity());