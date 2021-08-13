"use strict";
// Modules are created to use as libraries or packages across applications
// export keyword is used to export a class or function form a module
// module has 
exports.__esModule = true;
exports.addition = void 0;
var addition = /** @class */ (function () {
    function addition() {
    }
    addition.prototype.calc = function (a, b) {
        return a + b;
    };
    addition.prototype.concat = function (s, t) {
        return s + t;
    };
    return addition;
}());
exports.addition = addition;
