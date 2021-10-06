// Namespaces are created to combine related classes together.
// These namespaces can be packaged as a separate module.
// Namespace allows in avoiding name clashes between classes.

export namespace calculator{
    export class MyCalc{
        public calc() : void{
            console.log("calculating")
        }
    }
}