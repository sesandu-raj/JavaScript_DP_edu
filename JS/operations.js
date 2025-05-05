console.log("Operations in javascript");
// Addition
let sum = 5 + 3;
console.log("5 + 3 =", sum);

// Subtraction
let difference = 10 - 4;
console.log("10 - 4 =", difference);

// Multiplication
let product = 6 * 7;
console.log("6 * 7 =", product);

// Division
let quotient = 20 / 4;
console.log("20 / 4 =", quotient);

// Modulus (remainder)
let remainder = 15 % 4;
console.log("15 % 4 =", remainder);

//Anothe Method
let a = 10;
let b = 5;

let c = a + b;
console.log("a + b =", c);

console.log("a - b =", a - b);

// Increment
let x = 5;
x++;
console.log("Incremented x =", x);

// Decrement
let y = 10;
y--;
console.log("Decremented y =", y);

// Exponentiation
let base = 2;
let exponent = 3;
let power = base ** exponent;
console.log("2 raised to the power of 3 =", power);

// String Concatenation
let str1 = "Hello";
let str2 = "World";
let greeting = str1 + " " + str2;
console.log("Concatenated string =", greeting);
let greeting2 = str1 - str2;
console.log("Concatenated string =", greeting2);

// String Length
let str = "Hello, World!";
let length = str.length;
console.log("Length of string =", length);

// String to Number Conversion
let numStr = "42";
let num = Number(numStr);
console.log("Converted string to number =", num);

// Number to String Conversion
let num2 = 100;
let strNum = String(num2);
console.log("Converted number to string =", strNum);
console.log(typeof strNum);

// Object Creation
let persons = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log("Person object =", persons);

// Object Access
let personName = persons.name;
console.log("Person's name =", personName);

// Object Modification
persons.age = 31;
console.log("Updated person's age =", persons.age);

// Object Deletion
delete persons.city;
console.log("Person object after deletion =", persons);

//Comparison Operators
let a1 = 5;
let b1 = 10;
console.log("a1 == b1:", a1 == b1); // Equal to
console.log("a1 != b1:", a1 != b1); // Not equal to
console.log("a1 === b1:", a1 === b1); // Strict equal to
console.log("a1 !== b1:", a1 !== b1); // Strict not equal to
console.log("a1 > b1:", a1 > b1); // Greater than
console.log("a1 < b1:", a1 < b1); // Less than
console.log("a1 >= b1:", a1 >= b1); // Greater than or equal to
console.log("a1 <= b1:", a1 <= b1); // Less than or equal to

//Logical Operators
let x1 = true;
let y1 = false;
console.log("x1 && y1:", x1 && y1); // Logical AND
console.log("x1 || y1:", x1 || y1); // Logical OR
console.log("!x1:", !x1); // Logical NOT

/*
// Array Operations
let arr = [1, 2, 3, 4, 5];
arr.push(6); // Add to end
console.log("Array after push =", arr);
arr.pop(); // Remove from end
console.log("Array after pop =", arr);
arr.shift(); // Remove from start
console.log("Array after shift =", arr);
arr.unshift(0); // Add to start
console.log("Array after unshift =", arr);
// Array Length
let arrLength = arr.length;
console.log("Length of array =", arrLength);
// Array Indexing
let firstElement = arr[0];
console.log("First element of array =", firstElement);
// Array Slicing
let slicedArray = arr.slice(1, 3);
console.log("Sliced array =", slicedArray);
// Array Splicing
arr.splice(1, 2, 10, 20); // Remove 2 elements from index 1 and add 10, 20
console.log("Array after splice =", arr);
// Array Iteration
arr.forEach((element) => {
  console.log("Array element =", element);
});
*/
