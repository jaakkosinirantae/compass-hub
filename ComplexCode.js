// Filename: ComplexCode.js
// Content: A complex code showcasing a real-life scenario of a Banking System

// Define a Bank class
class Bank {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.accounts = [];
  }

  // Method to create a new account for a customer
  createAccount(customerName, initialBalance) {
    const account = new Account(customerName, initialBalance);
    this.accounts.push(account);
    return account;
  }

  // Method to find an account by customer name
  findAccountByCustomerName(customerName) {
    for (let account of this.accounts) {
      if (account.customerName === customerName) {
        return account;
      }
    }
    return null;
  }

  // Method to calculate the total balance of all accounts
  getTotalBalance() {
    let totalBalance = 0;
    for (let account of this.accounts) {
      totalBalance += account.balance;
    }
    return totalBalance;
  }
}

// Define an Account class
class Account {
  constructor(customerName, initialBalance) {
    this.customerName = customerName;
    this.balance = initialBalance;
  }

  // Method to deposit funds into the account
  deposit(amount) {
    this.balance += amount;
  }

  // Method to withdraw funds from the account
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      return amount;
    } else {
      return "Insufficient funds";
    }
  }
}

// Create a new Bank instance
const bank = new Bank("MyBank", "123 Main Street");

// Create some customer accounts
const account1 = bank.createAccount("John Doe", 1000);
const account2 = bank.createAccount("Jane Smith", 2000);

// Perform some operations on the accounts
account1.deposit(500);
account2.withdraw(100);

// Find an account by customer name
const foundAccount = bank.findAccountByCustomerName("John Doe");

// Print account details
if (foundAccount) {
  console.log(`Customer Name: ${foundAccount.customerName}`);
  console.log(`Account Balance: ${foundAccount.balance}`);
} else {
  console.log("Account not found");
}

// Print total balance of all accounts
console.log(`Total Balance: ${bank.getTotalBalance()}`);

// Output:
// Customer Name: John Doe
// Account Balance: 1500
// Total Balance: 3400