"use strict";
exports.__esModule = true;
exports.Mynamespace = void 0;
var Mynamespace;
(function (Mynamespace) {
    var Product = /** @class */ (function () {
        function Product(price, discount) {
            this.price = price;
            this.discount = discount;
        }
        Product.prototype.calcDiscount = function () {
            console.log("Discount Price");
            console.log(this.price - (this.price * this.discount / 100));
        };
        return Product;
    }());
    Mynamespace.Product = Product;
    var Triangle = /** @class */ (function () {
        function Triangle(base, height) {
            this.base = base;
            this.height = height;
        }
        Triangle.prototype.calcArea = function () {
            console.log("Area of Triangle" + (0.5 * this.base * this.height));
        };
        return Triangle;
    }());
    Mynamespace.Triangle = Triangle;
})(Mynamespace = exports.Mynamespace || (exports.Mynamespace = {}));
