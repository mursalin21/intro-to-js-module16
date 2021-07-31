var firstName = "Jennie";
var lastName = "Kim";

//concatenating strings
var fullName = firstName + " " + lastName;
//console.log(fullName);

var first = "Ariana";
var last = "Grande";
var name = first + " " + last;
//console.log(name);

var onionPrice = '42';
var eggPrice = '41';

// Adding one string to integer will produce same result as adding 2 strings.
var totalPrice = onionPrice + eggPrice;
//console.log(totalPrice);

//integer
var sunglass = 3;

//float
var price = 99.99;


//Type Conversion: string to number
var cabbagePrice = '51';
var lettucePrice = '45';
var totPrice = parseInt(cabbagePrice) + parseInt(lettucePrice);
// console.log(totPrice);


// for converting to float 
var tomatoPrice = '45.68';
// console.log(parseFloat(tomatoPrice));


//adding float and integer gives a float value
console.log(parseFloat(tomatoPrice) + parseInt(cabbagePrice));