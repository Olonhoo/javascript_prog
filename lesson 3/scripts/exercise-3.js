'use_strict';
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

function sale(cost) {
    cost.price = cost.price - cost.price * 0.15;
}

products.forEach(sale);
console.log(products);