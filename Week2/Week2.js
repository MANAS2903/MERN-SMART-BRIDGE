// Task 1: Declare age and check if adult
let age = 25;
let isAdult = age >= 18;
console.log("Is adult:", isAdult);

// Task 2: Arithmetic operations
let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);

// Task 3: Check if a number is even or odd
let n = 7; // Example number
let isEven = n % 2 === 0 ? "Even" : "Odd";
console.log("Number is:", isEven);

// Task 4: Store numbers from 1 to 5 in an array
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
console.log("Numbers array:", numbers);

// Task 5: Function to return the square of a number
function square(num) {
    return num * num;
}
console.log("Square of 4:", square(4));
