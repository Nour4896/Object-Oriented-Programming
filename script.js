//Create New Class for Products
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    static applyDiscounts(products, discount) {
        for (let i = 0; i < products.length; i++) {
            products[i].price = products[i].price - (products[i].price * discount);
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

//Create Subclass from Class
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration: ${this.expirationDate}`
    }
}

//Create 2 Instances of Subclass
let perishable1 = new PerishableProductProperties('Yogurt', 4.75, 30, "2025/05/14")
let perishable2 = new PerishableProductProperties('Ribeye Steak', 18, 20, "2025/05/05")

//Create New Class for Store
class Store {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
        this.inventory.push(product);
    }

    getInventoryValue() {
        let inventoryValue = 0        
        
        for (let i = 0; i < this.inventory.length; i++) {
            let productValue = this.inventory[i].price * this.inventory[i].quantity;
            inventoryValue += productValue;
        }
        return inventoryValue;
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

//Create 3 Instances of Product Class
let product1 = new ProductProperties('Beans', 3, 50);
let product2 = new ProductProperties('Crackers', 4, 80);
let product3 = new ProductProperties('Kraft Dinner', 3.50, 200);

//Create New Instance of Store Class
let loblaws = new Store;

//Add Products to Store Instance
loblaws.addProduct(perishable1);
loblaws.addProduct(perishable2);
loblaws.addProduct(product1);
loblaws.addProduct(product2);
loblaws.addProduct(product3);

//Print Total Inventory Value
console.log("Total Inventory Value = $" + loblaws.getInventoryValue());

//Print Value After Discount
ProductProperties.applyDiscounts(loblaws.inventory, .15)

console.log("Total Inventory Value After 15% = $" + loblaws.getInventoryValue());