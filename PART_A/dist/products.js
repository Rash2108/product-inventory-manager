"use strict";
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000,
        inStock: true,
        tags: ["Electronics", "Computer"]
    },
    {
        id: 2,
        name: "Wireless Mouse",
        price: 1200,
        inStock: true,
        tags: ["Electronics", "Accessories"]
    },
    {
        id: 3,
        name: "Keyboard",
        price: 1800,
        inStock: false,
        tags: ["Electronics", "Accessories"]
    },
    {
        id: 4,
        name: "Monitor",
        price: 15000,
        inStock: true,
        tags: ["Electronics", "Display"]
    }
];
function getAvailableProducts(products) {
    return products.filter((product) => product.inStock);
}
console.log("Available Products:", getAvailableProducts(products));
function applyDiscountToProducts(products) {
    const discountPercent = 10;
    return products.map((product) => ({
        ...product,
        price: product.price -
            (product.price * discountPercent) / 100,
        discountPercent: discountPercent
    }));
}
const discountedProducts = applyDiscountToProducts(products);
console.log("Discounted Products:", discountedProducts);
