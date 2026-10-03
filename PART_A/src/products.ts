interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    tags?: string[];
}

const products: Product[] = [
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

const getAvailableProductsInStock = (
    products: Product[]
): Product[] =>
    products.filter(
        (product: Product) => product.inStock
    );

console.log(
    "Available Products:",
    getAvailableProductsInStock(products)
);


// Extended Interface

interface DiscountedProduct extends Product {
    discountPercent: number;
}
const applyDiscountToProductsWithTenPercentDiscount = (
    products: Product[]
): DiscountedProduct[] => {

    const discountPercent: number = 10;

    return products.map((product: Product) => ({
        ...product,
        price: product.price -
            (product.price * discountPercent) / 100,
        discountPercent: discountPercent
    }));
}

const discountedProducts: DiscountedProduct[] =
    applyDiscountToProductsWithTenPercentDiscount(products);

console.log("Discounted Products:", discountedProducts);