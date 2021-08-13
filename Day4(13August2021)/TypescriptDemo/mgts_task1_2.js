var months;
(function (months) {
    months["jan"] = "january";
    months["feb"] = "february";
    months["mar"] = "march";
    months["apr"] = "april";
    months["may"] = "may";
    months["june"] = "june";
    months["jul"] = "july";
    months["aug"] = "august";
    months["sept"] = "septeber";
    months["oct"] = "october";
    months["nov"] = "novemeber";
    months["dec"] = "december";
})(months || (months = {}));
var month1 = months.aug;
console.log(month1);
var month2 = months.dec;
console.log(month2);
