'use strict';
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price - (this.price / 100 * 25)
    }
}
const product1 = new Product('water', 150);
product1.make25PercentDiscount();
//из-за одинаковых названий объектов в разных синтаксисах, работа es6 ссылается на es5, но все заработает обособленно, если заменить названия объектов