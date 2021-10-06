"use strict";
// Namespaces are created to combine related classes together.
// These namespaces can be packaged as a separate module.
// Namespace allows in avoiding name clashes between classes.
exports.__esModule = true;
exports.calculator = void 0;
var calculator;
(function (calculator) {
    var MyCalc = /** @class */ (function () {
        function MyCalc() {
        }
        MyCalc.prototype.calc = function () {
            console.log("calculating");
        };
        return MyCalc;
    }());
    calculator.MyCalc = MyCalc;
})(calculator = exports.calculator || (exports.calculator = {}));
