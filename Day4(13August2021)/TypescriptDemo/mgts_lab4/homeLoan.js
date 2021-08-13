var homeLoan = /** @class */ (function () {
    function homeLoan(amount, rate, time, security) {
        this.amount = amount;
        this.rate = rate;
        this.time = time;
        this.security = security;
    }
    homeLoan.prototype.displayS = function (security) {
        if (security)
            return "Yes";
        else
            return "No";
    };
    homeLoan.prototype.display = function (amount, rate, time) {
        this.security = true;
        return (amount * rate * time) / 100;
    };
    return homeLoan;
}());
var h = new homeLoan(40000, 10, 5, true);
console.log(h.display(40000, 10, 5));
console.log(h.displayS(true));
