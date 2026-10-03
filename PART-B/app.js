"use strict";

// --- Part 2: Initial State ---
let inventory = [
    { id: 101, name: "Mechanical Keyboard", price: 89.99, inStock: true, tags: ["Electronics", "Hardware"] },
    { id: "P-102", name: "Gaming Mouse", price: 49.50, inStock: true, tags: ["Gaming", "Accessories"] },
    { id: 103, name: "USB-C Hub", price: 25.00, inStock: false, tags: ["Accessories"] },
    { id: "P-104", name: "27-inch Monitor", price: 220.00, inStock: true, tags: ["Displays", "Electronics"] }
];

let appliedDiscountRate = 0;
let showOnlyAvailable = false;

// --- Part 3: Core Functions ---

function calculateDiscount(price, discountPercent = 10) {
    const discountAmount = (price * discountPercent) / 100;
    return Number((price - discountAmount).toFixed(2));
}

function getAvailableProducts(products) {
    return products.filter((p) => p.inStock);
}

function applyDiscountToProducts(products, discountPercent) {
    return products.map((product) => (Object.assign(Object.assign({}, product), { discountPercent, discountedPrice: calculateDiscount(product.price, discountPercent) })));
}

function removeProduct(productId) {
    inventory = inventory.filter((product) => String(product.id) !== String(productId));
    renderInventory();
}

// --- Part 4: DOM Rendering ---

function renderInventory() {
    const tableBody = document.getElementById("inventory-table-body");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    let displayedProducts = showOnlyAvailable ? getAvailableProducts(inventory) : inventory;
    let discountedProducts = applyDiscountToProducts(displayedProducts, appliedDiscountRate);

    if (discountedProducts.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #64748b;">No products found.</td></tr>`;
        return;
    }

    discountedProducts.forEach((product) => {
        const row = document.createElement("tr");

        const tagsHTML = product.tags && product.tags.length > 0
            ? product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")
            : "<em>None</em>";

        const statusBadge = product.inStock
            ? `<span class="badge badge-success">In Stock</span>`
            : `<span class="badge badge-danger">Out of Stock</span>`;

        const discountedPriceDisplay = product.discountPercent > 0
            ? `$${product.discountedPrice.toFixed(2)} (${product.discountPercent}% off)`
            : "-";

        row.innerHTML = `
      <td><strong>${product.id}</strong></td>
      <td>${product.name}</td>
      <td>₹${product.price.toFixed(2)}</td>
      <td>${statusBadge}</td>
      <td>${tagsHTML}</td>
      <td>₹${product.discountedPrice.toFixed(2)} (${product.discountPercent}% off)  </td>
      <td>
        <button class="btn danger-btn remove-btn" data-id="${product.id}">Remove</button>
      </td>
    `;

        tableBody.appendChild(row);
    });

    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const target = e.target;
            const idStr = target.getAttribute("data-id");
            if (idStr !== null) {
                const parsedId = !isNaN(Number(idStr)) ? Number(idStr) : idStr;
                removeProduct(parsedId);
            }
        });
    });
}

// --- Part 5: Event Listeners ---

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("product-form");
    const showAllBtn = document.getElementById("show-all-btn");
    const showAvailableBtn = document.getElementById("show-available-btn");
    const applyDiscountBtn = document.getElementById("apply-discount-btn");

    form?.addEventListener("submit", (e) => {
        e.preventDefault();

        const idInput = document.getElementById("product-id").value.trim();
        const nameInput = document.getElementById("product-name").value.trim();
        const priceInput = parseFloat(document.getElementById("product-price").value);
        const tagsInput = document.getElementById("product-tags").value;
        const inStockInput = document.getElementById("product-instock").checked;

        const parsedId = !isNaN(Number(idInput)) ? Number(idInput) : idInput;
        const exists = inventory.some((p) => String(p.id) === String(parsedId));
        if (exists) {
            alert("A product with this ID already exists. Please use a unique ID.");
            return;
        }

        const parsedTags = tagsInput ? tagsInput.split(",").map((t) => t.trim()) : [];

        const newProduct = {
            id: parsedId,
            name: nameInput,
            price: priceInput,
            inStock: inStockInput,
            tags: parsedTags
        };

        inventory.push(newProduct);
        renderInventory();
        form.reset();
    });

    showAllBtn?.addEventListener("click", () => {
        showOnlyAvailable = false;
        showAllBtn.classList.add("active");
        showAvailableBtn.classList.remove("active");
        renderInventory();
    });

    showAvailableBtn?.addEventListener("click", () => {
        showOnlyAvailable = true;
        showAvailableBtn.classList.add("active");
        showAllBtn.classList.remove("active");
        renderInventory();
    });

    applyDiscountBtn?.addEventListener("click", () => {
        const discountInput = document.getElementById("discount-percent");
        const val = parseFloat(discountInput.value);
        appliedDiscountRate = isNaN(val) ? 0 : val;
        renderInventory();
    });

    renderInventory();
});