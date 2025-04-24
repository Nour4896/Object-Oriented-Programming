class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    static applyDiscounts(products, discount) {
        for (let i = 0; i < products.length; i++) {
            products[i] = products[i] - (products[i] * discount);
            return products[i];
        }
    }

    getTotalValue() {
        let totalValue = (price * quantity);
        return totalValue;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`
    }
}

class PerishableProductProperties extends productProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration: ${this.expirationDate}`
    }
}

let perishable1 = new perishableProductProperties('Yogurt', 4.75, 30, "2025/05/14")
let perishable2 = new perishableProductProperties('Ribeye Steak', 18, 20, "2025/05/05")

console.log(perishable1.toString());
console.log(perishable2.toString());

class Store {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
        this.inventory.push(product);
    }

    getInventoryValue() {
        for (let i = 0; i < this.inventory.length; i++) {
            inventoryValue += this.inventory[i];
            return inventoryValue;
        }
    }
}