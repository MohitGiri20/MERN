
export namespace Mynamespace{
    export class Product{

        price : number;
        discount : number;
    
        constructor(price : number,discount : number){
            this.price = price;
            this.discount = discount;
        }


        public calcDiscount() : void{
            console.log("Discount Price")
        
            console.log(this.price - (this.price * this.discount / 100)); 
            
    }

   }

    export class Triangle{
        base : number;
        height : number;
    
        constructor(base : number,height : number){
            this.base = base;
            this.height = height;
        }


        public calcArea() : void{
             
            console.log("Area of Triangle" + (0.5* this.base * this.height))
        } 
    }
}