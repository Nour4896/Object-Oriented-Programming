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
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`
    }
}

class perishableProductProperties extends productProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name);
        super(price);
        super(quantity);
        this.expirationDate = expirationDate;
    }
}