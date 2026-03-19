// Declare variables
let name = "Mitchelle";
let age = 21;
let isStudent = true;
let favoriteColors = ["blue", "black", "white"];
let todayDate = new Date ();

// Output to console
console.log("My name is: " + name);
console.log("I am " + age + " years old");
console.log("Am I a student? " + isStudent);
console.log("My favorite colors are: " + favoriteColors.join(", "));
console.log("Today's date is: " + todayDate);

// Basic math
let a = 10;
let b = 3;

console.log(a + b);   // Addition
console.log(a - b);   // Subtraction
console.log(a * b);   // Multiplication
console.log(a / b);   // Division
console.log(a % b);   // Modulus (remainder)
console.log(a ** b);  // Exponentiation

// Increment/Decrement
let count = 0;
count++;  // count is now 1
count--;  // count is now 0

let firstName = "Mitchelle";
let lastName = "Khakayi";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals (preferred)
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

// String methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Mitchelle Khakayi"));

// Comparison
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

// Logical
console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT

// Calculations
let ageInDays = age * 365;
let ageInHours = age * 365 * 24;

// Get current year
let currentYear = new Date().getFullYear();

// Calculate year you'll turn 100
let yearTurning100 = currentYear + (100 - age);

// Output results
console.log("My age in days is approximately: " + ageInDays + " days");
console.log("My age in hours is approximately: " + ageInHours + " hours");
console.log("I will turn 100 years old in the year: " + yearTurning100);

// Function declaration
function greet(Mitchelle) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// 1. Calculate area of a rectangle
function calculateArea(width, height) {
    return width * height;
}

// 2. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// 3. Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// 4. Get initials from full name
function getInitials(fullName) {
    let names = fullName.split(" ");
    let initials = names.map(name => name[0].toUpperCase());
    return initials.join("");
}

// 5. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

function greet(name = "Mitchelle", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet("Mitchelle"));              // Hello, Guest!
console.log(greet("Alice"));       // Hello, Alice!
console.log(greet("Bob", "Hi"));   // Hi, Bob!

//Function  Calculate tip
function calculateTotal(bill, tipPercent = 15) {
    let tip = calculateTip(bill, tipPercent);
    return bill + tip;
}

console.log(calculateTotal(100)); 