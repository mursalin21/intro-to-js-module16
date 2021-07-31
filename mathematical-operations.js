var onionPrice = 43;
var eggPrice = 42;
var eggQuantity = 7;


var totalPrice = onionPrice + eggPrice;
var priceDifference = onionPrice - eggPrice;

//Multiplication
var eggPriceMultiplication = eggPrice * eggQuantity;

// console.log(onionPrice);
// console.log(eggPrice);

//Ways to show the total price
console.log(onionPrice + eggPrice);
console.log(totalPrice);
console.log(priceDifference);

console.log(eggPriceMultiplication);

//Division

var moneyAvailable = 100;
var orangePrice = 5;

var orangeQuantity = moneyAvailable / orangePrice;

console.log(orangeQuantity);

// special edition
var firstNumber = 0.1;
var secondNumber = 0.2;

var total = firstNumber + secondNumber;
console.log(parseFloat(total.toFixed(1))); //Using toFixed returns a string

//modulus
var mangoes = 57;
var hungryPerson = 12;

var remaining = mangoes % hungryPerson;
console.log(remaining);