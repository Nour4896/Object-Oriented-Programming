class productProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        let totalValue = (price * quantity);
        return totalValue;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`
    }
}

class perishableProductProperties extends productProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration: ${this.expirationDate}`
    }
}

let perishable1 = new perishableProductProperties('Yogurt', 4.75, 30, "2025/05/14")
let perishable2 = new perishableProductProperties('Ribeye Steak', 18, 20, "2025/05/05")

