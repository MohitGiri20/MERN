class Ticket {

    source : string
    destination : string
    cost : number

    printDetails() {
        console.log("Ticket Details")
    }
}

class WaitingTicket extends Ticket{
    waitingList : number

    // Run Time Polymorphism (method overriding)
    printDetails(){
        console.log("waiting ticket details")
    }
}

class ConfirmedTicket extends Ticket{
    seatNo : number
}

class cancelledTicket extends ConfirmedTicket{
    refundAmount : number

    printDetails(){
        console.log("Cancelled ticket details")
    }
}

var t : Ticket = new WaitingTicket()
var t1 :Ticket = new cancelledTicket();
t.printDetails();
t1.printDetails();

