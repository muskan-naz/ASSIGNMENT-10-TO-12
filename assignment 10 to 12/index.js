// Odd or Even Checker:
var num = prompt("enter a num ");

if (num % 2 == 0){
    alert ("This is even number");
}

else {
    alert("This is odd number" );
 }

// Grade Calculator:
 
var grade  = prompt("Enter a score");

if (grade >=  70){
    alert("your grade is A")
}
else if (grade >= 60){
    alert("your grade is B")
}
else if (grade >= 50){
    alert("your grade is C")
}
else if (grade >= 40){
    alert("your grade is D")
}
else {
    alert("you are failed!")
}

//leap year;

const user  = prompt("Enter a year");
if (user % 4 == 0){
    alert("This is a leap year");
}
else if(user % 400 ==0 )  {
    alert("This is not a leap year");
}
else {
    alert("This is not a leap year");
    }
    
//Number Comparison:

function findLargest() {
    let num1 = (prompt("Enter the first number:"));
    let num2 = (prompt("Enter the second number:"));
    let num3 =(prompt("Enter the third number:"));
  
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      console.log("Please enter valid numbers.");
      return;
    }
    let largest;
    if (num1 > num2 && num1 > num3) {
      largest = num1;
    } else if (num2 > num1 && num2 > num3) {
      largest = num2;
    } else {
      largest = num3;
    }
    console.log("The largest number is: " + largest);
  }
  findLargest();
  
// //Discount Calculator:

function calculateFinalPrice() {
  let originalPrice = parseFloat(prompt("Enter the original price of the item:"));

  if (isNaN(originalPrice) || originalPrice < 0) {
    console.log("Please enter a valid positive number for the price.");
    return;
  }

  let discountRate;
  let finalPrice;
  if (originalPrice < 50) {
    discountRate = 0;
  } else if (originalPrice >= 50 && originalPrice <= 100) {
    discountRate = 0.10; 
  } else {
    discountRate = 0.20;  
  }
  finalPrice = originalPrice - (originalPrice * discountRate);
  console.log("Original Price: $" + originalPrice.toFixed(2));
  console.log("Discount Rate: " + (discountRate * 100) + "%");
  console.log("Final Price: $" + finalPrice.toFixed(2));
}
calculateFinalPrice();

//10. Functions ***********
//Q #01;
//Sum of Two Numbers:
function addition(a,b){
  return  a+b;
}
console.log(addition(5,7));

// Q #02;

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

let celsiusTemp = 25; 
let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(fahrenheitTemp); 

//Q # 03;
// Check for Prime Number:
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; 
    }
  }

  return true; 
}

let num1 = 29; 
console.log(isPrime(num1)); 

//Q # 04;
//Reverse a String:
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello World"));

//Q # 05;
//Factorial of a Number:
function factorial(n) {
  if (n === 0) {
    return 1;
    }
    else {
      return n * factorial(n - 1);
      }
      }
      console.log(factorial(5));

//Q # 06;
//Greet User (No Parameters):

function greetUser() {
  console.log("Hello, welcome!");
}
greetUser();

//Q # 07;
// Greet User (With Parameters):
function greetUser(name) {
  console.log(`Hello, ${name}! Welcome!`
  );
}
greetUser("John");

//Q # 08;
//Sum of Two Numbers (With Parameters):
function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log(sumOfTwoNumbers(5, 7));

//Q # 09;
//Random Number Generator (No Parameters):
function randomNumberGenerator() {
  return Math.floor(Math.random() * 101);
  }
  console.log(randomNumberGenerator());
//Q # 10;

//Check Age for Voting (With Parameter):

function checkAge(age) {
  if (age >= 18) {
    return true;
  }
  else {
    return false;
  }
}
console.log(checkAge(25));

//11. Arrow Function**************
//Q # 01;
//Square of a Number:

const square1 = (num) => num * num;
let number2 = 5;
console.log(square1(number2)); 

//Q # 2;
//Array of Even Numbers:
const evenNumbers = (numbers) => numbers.filter(num => num % 2 === 0
);
console.log(evenNumbers([1, 2, 3, 4, 5,6,7,8,9,10
]));

//Q # 3;

//Concatenate Strings:

const concatenateStrings = (str1, str2) => str1 + str2;
console.log(concatenateStrings("Hello", "World"));

//Q # 4;

//Find Maximum Number in an Array:
const findMax = (numbers) => Math.max(...numbers);
console.log(findMax([1, 2, 3, 4, 5,
]));

//Q # 5;

// Sum of All Numbers in an Array:
const sumOfNumbers = (numbers) => numbers.reduce((a, b) => a +
b, 0);
console.log(sumOfNumbers([1, 2, 3, 4, 5
]));

//Q # 6;

// Print "Hello World" (No Parameters):
const printHelloWorld = () => console.log("Hello World");
printHelloWorld();

//Q # 7;

// Calculate Square of a Number (With Parameter):
const square = (num) => num * num;
console.log(square(5));

//Q # 8;

// Check if Number is Positive (With Parameter):
const isPositive = (num) => num > 0;
console.log(isPositive(5));

//Q # 9;
// Generate a Random Number (No Parameters):
const generateRandomNumber = () => Math.floor(Math.random() * 50) + 1
console.log(generateRandomNumber());

//Q # 10;

// Convert Minutes to Seconds (With Parameter):
const minutesToSeconds = (minutes) => minutes * 60;
console.log(minutesToSeconds(5));

//12.Annoynumus Function************

//Q # 1
//Print "Hello" (No Parameters):
const printHello = () => console.log("Hello");
printHello();

//Q # 2

//Sum of Two Numbers (With Parameters):
const add = (a, b) => a + b;
console.log(add(5, 10));

//Q # 3
// Array Sorting (With Parameters):
const numbers1 = [4, 2, 9, 6];
const sortedNumbers = numbers1.sort((a, b) => a - b);
console.log(sortedNumbers);

//Q # 4

Greeting_Message ( Parameter);
const greeting = (name) => console.log(`Hello, ${name}!`
);
greeting("XYZ");

//Q # 5

// Check if Number is Even or Odd (With Parameter):
const isEvenOrOdd = (num) => console.log(num % 2 === 0
? "Even" : "Odd");
isEvenOrOdd(5);

//Q # 6

// Filter Odd Numbers from an Array (With Parameters):
const number = [1, 2, 3, 4, 5,
6, 7, 8, 9, 10];
const oddNumbers = number.filter((num) => num % 2 !== 0);
console.log(oddNumbers);


//Q # 7
// Factorial Calculation (With Parameter):
const factorial1 = (num) => {
      let result = 1;
      for (let i = 2; i <= num; i++) {
          result *= i;
      }
      return result;
  }
  console.log(factorial1(5));
  console.log(factorial1(10));
  console.log(factorial1(15));

  //Q # 8
// Anonymous Function in Timeout (No Parameters):
setTimeout(() => console.log("Time's up!"), 2000);

//Q # 9

// Sum of All Elements in an Array (With Parameter):
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum);

//Q # 10
// Check Voting Eligibility (With Parameter):
const checkEligibility = (age) => {
    if (age >= 18) {
      console.log("You are eligible to vote.");
    } else {
      console.log("You are not eligible to vote.");
    }
}