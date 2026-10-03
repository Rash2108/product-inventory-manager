"use strict";
function calculateDiscount(price, discountPercent = 10) {
    return price - (price * discountPercent) / 100;
}
console.log("Discounted Price:", calculateDiscount(1000));
console.log("Discounted Price:", calculateDiscount(1000, 20));
// Bulk discount function
function applyBulkDiscount(prices, discountRate) {
    return prices.map((price) => price - (price * discountRate) / 100);
}
const prices = [1000, 2000, 3000];
const discountedPrices = applyBulkDiscount(prices, 10);
console.log("Bulk Discount:", discountedPrices);
// Block Scope Example
for (let i = 0; i < 3; i++) {
    let message = `Inside loop: ${i}`;
    console.log(message);
}
// The following line would cause an error
// console.log(message);
// message is block-scoped because it was declared using let
// inside the for loop.
