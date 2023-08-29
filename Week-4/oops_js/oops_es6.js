class vehical{
  constructor(make , model , year, color){
  this.make = make;
  this.model = model;
  this.year = year ;
  this.color = color;
  }

  drive(){
    console.log("Driving "+this.make+" "+this.model);
  }
}

class Car extends vehical{
  constructor(make , model , year, color, numSeats){
    super(make , model , year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car{
  constructor(make , model , year, color, numSeats, isAvailable){
    super(make , model , year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

const maruti = new RideShareCar("swrift" ,"model 2",2022,"red" ,5,"Yes");
maruti.drive();

//**************************************************************** */
// Section 2 - Polymorphism:


class shape{
  constructor(){
  }

  calculateArea(){
    return "area";
  }
}

class Rectangle extends shape{
  constructor(width,height){
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea(){
    return this.width*this.height;
  }
}

class Triangle extends shape{
  constructor(base,height){
    super();
    this.base = base;
    this.height = height;
  }
  calculateArea(){
    return (this.base*this.height)/2;
  }
}

class Circle extends shape{
  constructor(radius){
    super();
    this.radius = radius;
  }
  calculateArea(){
    return (Math.PI*this.radius*this.radius)/2;
  }
}

const rectangle = new Rectangle(5, 5);
const triangle = new Triangle(3, 8);
const circle = new Circle(10);

console.log("Rectangle area:", rectangle.calculateArea());
console.log("Triangle area:", triangle.calculateArea());
console.log("Circle area:", circle.calculateArea());

//**************************************************************** */
// Section 3 – Abstraction and encpasulation:

class BankAccount {
  #accountNumber = "";
  #balance = 0;
  #accountHolderName = "";

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  get balance() {
    return this.#balance;
  }

  withdraw(amount) {
    if (this.#balance - amount < 0) {
      console.log("Withdrawal failed. Balance cannot go below zero.");
      return;
    }

    this.#balance -= amount;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
}

const checkingAccount = new CheckingAccount("11111111", 5000, "Mandar");
const savingsAccount = new SavingsAccount("12121121", 10000, "Akash");

checkingAccount.deposit(150);
console.log("Checking account balance: " + checkingAccount.balance);

savingsAccount.deposit(210);
console.log("Savings account balance: " + savingsAccount.balance);

savingsAccount.withdraw(600);
console.log("Savings account balance: " + savingsAccount.balance);

console.log("\n--tring to withdraw 60000--");

savingsAccount.withdraw(60000);
