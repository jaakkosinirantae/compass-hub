/* 
Filename: AdvancedDataProcessing.js 

Description: 
This code demonstrates an advanced data processing system that simulates a real-world scenario of analyzing customer data and generating personalized recommendations based on their preferences. The code utilizes various advanced JavaScript concepts, including object-oriented programming, asynchronous operations, closures, and array manipulation, among others. 

*/

// -------------------- Data Processing System --------------------

// Customer class definition
class Customer {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.preferences = {};
  }

  setPreference(category, value) {
    this.preferences[category] = value;
  }

  getPreference(category) {
    return this.preferences[category];
  }
}

// Catalog class definition
class Catalog {
  constructor() {
    this.categories = {};
  }

  addCategory(category) {
    this.categories[category] = [];
  }

  addItem(category, item) {
    if (this.categories[category]) {
      this.categories[category].push(item);
    } else {
      console.log("Invalid category!");
    }
  }

  getRandomItem(category) {
    if (this.categories[category]) {
      const items = this.categories[category];
      return items[Math.floor(Math.random() * items.length)];
    } else {
      console.log("Invalid category!");
    }
  }
}

// Recommendation Engine class definition
class RecommendationEngine {
  constructor(customers, catalog) {
    this.customers = customers;
    this.catalog = catalog;
  }

  generateRecommendation(customer) {
    const preferences = Object.keys(customer.preferences);
    const randomCategory = preferences[Math.floor(Math.random() * preferences.length)];
    const randomItem = this.catalog.getRandomItem(randomCategory);

    return `${customer.name}, we recommend you try ${randomItem} in the ${randomCategory} category!`;
  }

  processRecommendations() {
    this.customers.forEach((customer) => {
      setTimeout(() => {
        const recommendation = this.generateRecommendation(customer);
        console.log(recommendation);
      }, Math.random() * 5000);
    });
  }
}

// -------------------- Usage --------------------

// Create some sample customers
const john = new Customer("John", 25);
const emily = new Customer("Emily", 30);
const david = new Customer("David", 40);

// Set customer preferences
john.setPreference("Clothing", "Shirts");
john.setPreference("Electronics", "Laptops");

emily.setPreference("Electronics", "Headphones");
emily.setPreference("Sports", "Tennis");

david.setPreference("Clothing", "Trousers");
david.setPreference("Sports", "Basketball");

// Create catalog and add categories/items
const catalog = new Catalog();

catalog.addCategory("Clothing");
catalog.addItem("Clothing", "T-Shirt");
catalog.addItem("Clothing", "Jeans");
catalog.addItem("Clothing", "Dress");

catalog.addCategory("Electronics");
catalog.addItem("Electronics", "Smartphone");
catalog.addItem("Electronics", "Tablet");
catalog.addItem("Electronics", "Camera");

catalog.addCategory("Sports");
catalog.addItem("Sports", "Football");
catalog.addItem("Sports", "Yoga Mat");
catalog.addItem("Sports", "Tennis Racket");

// Create recommendation engine and process recommendations
const customers = [john, emily, david];
const recommendationEngine = new RecommendationEngine(customers, catalog);
recommendationEngine.processRecommendations();