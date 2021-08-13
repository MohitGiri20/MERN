var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ticket = /** @class */ (function () {
    function Ticket() {
    }
    Ticket.prototype.printDetails = function () {
        console.log("Ticket Details");
    };
    return Ticket;
}());
var WaitingTicket = /** @class */ (function (_super) {
    __extends(WaitingTicket, _super);
    function WaitingTicket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Run Time Polymorphism (method overriding)
    WaitingTicket.prototype.printDetails = function () {
        console.log("waiting ticket details");
    };
    return WaitingTicket;
}(Ticket));
var ConfirmedTicket = /** @class */ (function (_super) {
    __extends(ConfirmedTicket, _super);
    function ConfirmedTicket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConfirmedTicket;
}(Ticket));
var cancelledTicket = /** @class */ (function (_super) {
    __extends(cancelledTicket, _super);
    function cancelledTicket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cancelledTicket.prototype.printDetails = function () {
        console.log("Cancelled ticket details");
    };
    return cancelledTicket;
}(ConfirmedTicket));
var t = new WaitingTicket();
var t1 = new cancelledTicket();
t.printDetails();
t1.printDetails();
