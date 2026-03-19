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

console.log(greet("Mitchelle"));    // Hello, Mitchelle
console.log(greet("Alice"));       // Hello, Alice!
console.log(greet("Bob", "Hi"));   // Hi, Bob!

//Print numbers
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//Print even numbers
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//Triangle of stars
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

// Basic operation functions
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function product(a, b) {
    return a * b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

// Main calculator function
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return modulus(num1, num2);
        case "**":
            return power(num1, num2);
        default:
            return "Error: Invalid operator";
    }
}

// Interactive loop
function startCalculator() {
    while (true) {
        let num1 = parseFloat(prompt("Enter first number:"));
        let operator = prompt("Enter operator (+, -, *, /, %, **):");
        let num2 = parseFloat(prompt("Enter second number:"));

        let result = calculate(num1, operator, num2);
        console.log("Result:", result);

        let again = prompt("Do you want to calculate again? (yes/no)");
        if (again.toLowerCase() !== "yes") {
            console.log("Calculator exited.");
            break;
        }
    }
}

// Start the calculator
startCalculator();

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];
// 1. Get all student names
const names = students.map(student => student.name);
console.log(names); 
// Output: ["Alice", "Bob", "Charlie", "Diana", "Eve"]

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log(highAchievers); 
// Output: [{Alice...}, {Charlie...}, {Diana...}, {Eve...}]

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log(charlie); 
// Output: { name: "Charlie", age: 23, grade: 90, major: "CS" }

// 4. Calculate average grade
const avgGrade = students.reduce((acc, student) => acc + student.grade, 0) / students.length;
console.log(avgGrade); 
// Output: 86

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log(csMajors); 
// Output: [{Alice...}, {Charlie...}, {Eve...}]

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade); 
// Output: Eve (95), Charlie (90), Diana (88), Alice (85), Bob (72)

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log(hasTopStudent); 
// Output: true

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log(allPassing); 
// Output: true

const gradeTracker = {
    students: [],
    
    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
    
    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },
    
    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const grades = Object.values(student.grades);
        const avg = grades.reduce((sum, g) => sum + g, 0) / grades.length;
        return parseFloat(avg.toFixed(2));
    },
    
    // Get class average for a subject
    getSubjectAverage(subject) {
        const subjectGrades = this.students
            .map(s => s.grades[subject])
            .filter(g => g !== undefined);
        if (subjectGrades.length === 0) return null;
        const avg = subjectGrades.reduce((sum, g) => sum + g, 0) / subjectGrades.length;
        return parseFloat(avg.toFixed(2));
    },
    
    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) return null;
        let top = this.students[0];
        let topAvg = this.getStudentAverage(top.name);
        for (let i = 1; i < this.students.length; i++) {
            const avg = this.getStudentAverage(this.students[i].name);
            if (avg > topAvg) {
                top = this.students[i];
                topAvg = avg;
            }
        }
        return top.name;
    },
    
    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(s => this.getStudentAverage(s.name) < 70);
    },
    
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const grades = student.grades;
        const avg = this.getStudentAverage(name);
        let report = `Report Card for ${name}:\n`;
        for (let subject in grades) {
            const letter = this.getLetterGrade(grades[subject]);
            report += `${subject}: ${grades[subject]} (${letter})\n`;
        }
        report += `Average: ${avg} (${this.getLetterGrade(avg)})`;
        return report;
    }
};

// --- Test ---
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));      // 91.67
console.log(gradeTracker.getSubjectAverage("math"));       // 75.67
console.log(gradeTracker.getTopStudent());                 // Alice
console.log(gradeTracker.getStrugglingStudents());         // [Charlie]
console.log(gradeTracker.generateReportCard("Alice"));
