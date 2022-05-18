'use strict';
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
    this.price - (this.price / 100 * 25)
};

const product1 = new Product('water', 150);
product1.make25PercentDiscount();