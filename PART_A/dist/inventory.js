"use strict";
let productName = "Laptop";
let price = 55000;
let inStock = true;
let tags = ["Electronics", "Computer", "Laptop"];
let productId = "P1001";
function printProductInfo() {
    console.log(`Product: ${productName}, Price: ₹${price}, In Stock: ${inStock}, Tags: ${tags.join(", ")}, Product ID: ${productId}`);
}
printProductInfo();
// Example using any
let productDetails = "Laptop";
// Refactored to a specific type
let productCategory = "Electronics";
console.log(productCategory);
