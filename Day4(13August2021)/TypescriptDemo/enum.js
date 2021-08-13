var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["sun"] = 0] = "sun";
    Weekdays[Weekdays["mon"] = 1] = "mon";
    Weekdays[Weekdays["tue"] = 2] = "tue";
})(Weekdays || (Weekdays = {}));
var weekday = Weekdays.mon;
console.log(weekday);
