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

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration: ${this.expirationDate}`
    }
}

let perishable1 = new PerishableProductProperties('Yogurt', 4.75, 30, "2025/05/14")
let perishable2 = new PerishableProductProperties('Ribeye Steak', 18, 20, "2025/05/05")

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

    findProductByName(name) {
        let foundItem = null
        
        for (let i = 0; i < this.inventory.length; i++) {
           if (name = this.inventory[i]) {
            foundItem = name
           }
        }

        return foundItem
    }
}

let product1 = new ProductProperties('Beans', 3, 50);
let product2 = new ProductProperties('Crackers', 4, 80);
let product3 = new ProductProperties('Kraft Dinner', 3.50, 200);