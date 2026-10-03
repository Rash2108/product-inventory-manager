export const calculateDiscount = (
    price: number,
    discountPercent: number = 10
): number => {
    return price - (price * discountPercent) / 100;
}

console.log("Discounted Price:", calculateDiscount(1000));
console.log("Discounted Price:", calculateDiscount(1000, 20));

// Bulk discount function
export const applyBulkDiscount = (
    prices: number[],
    discountRate: number
): number[] => {
    return prices.map((price: number) =>
        calculateDiscount(price, discountRate)
    );
};

const prices: number[] = [1000, 2000, 3000];

const discountedPrices: number[] =
    applyBulkDiscount(prices, 10);

console.log("Bulk Discount:", discountedPrices);

// Block Scope Example
for (let i = 0; i < 3; i++) {
    let message: string = `Inside loop: ${i}`;
    console.log(message);
}

// The following line would cause an error
// console.log(message);

// message is block-scoped because it was declared using let
// inside the for loop.