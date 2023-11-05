// JavaScript Code: Advanced Shopping Cart Implementation 

// Filename: shoppingCart.js

// Define the Product class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}`;
  }
}

// Define the ShoppingCart class
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productId) {
    this.products = this.products.filter(product => product.id !== productId);
  }

  getTotalPrice() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  checkout() {
    const totalPrice = this.getTotalPrice();
    console.log(`Total Price: $${totalPrice.toFixed(2)}`);
    // Perform actual checkout process here...
  }

  displayCart() {
    console.log("Shopping Cart:");
    this.products.forEach(product => {
      console.log(product.getInfo());
    });
  }
}

// Create some test products
const product1 = new Product(1, "Smartphone", 899.99);
const product2 = new Product(2, "Laptop", 1499.99);
const product3 = new Product(3, "Headphones", 199.99);

// Create a shopping cart instance
const shoppingCart = new ShoppingCart();

// Add products to the shopping cart
shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);
shoppingCart.addProduct(product3);

// Display the shopping cart
shoppingCart.displayCart();

// Remove a product from the shopping cart
shoppingCart.removeProduct(2);

// Display the updated shopping cart
shoppingCart.displayCart();

// Checkout and show the total price
shoppingCart.checkout();

// Output:
// Shopping Cart:
// Product: Smartphone, Price: $899.99
// Product: Laptop, Price: $1499.99
// Product: Headphones, Price: $199.99
// Shopping Cart:
// Product: Smartphone, Price: $899.99
// Product: Headphones, Price: $199.99
// Total Price: $1099.98