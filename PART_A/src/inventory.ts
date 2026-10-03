let productName: string = "Laptop";
let price: number = 55000;
let inStock: boolean = true;
let tags: string[] = ["Electronics", "Computer", "Laptop"];

let productId: number | string = "P1001";

function printProductInfo(): void {
    console.log(
        `Product: ${productName}, Price: ₹${price}, In Stock: ${inStock}, Tags: ${tags.join(", ")}, Product ID: ${productId}`
    );
}

printProductInfo();

// Example using any
let productDetails: any = "Laptop";

// Refactored to a specific type
let productCategory: string = "Electronics";

console.log(productCategory);