console.log("Data Types in JavaScript");

// String
let name_string = "John Doe";
console.log(name_string);

// Number
let age_number = 25;
console.log("Number:", age_number);

// Boolean
let isStudent_boolean = true;
console.log("Boolean:", isStudent_boolean);

// Null
let emptyValue_null = null;
console.log("Null:", emptyValue_null);

// Undefined
let notAssigned_undefined;
console.log("Undefined:", notAssigned_undefined);

// Object
let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 30,
};
console.log("Object:", person);

// Array (a type of object)
let colors = ["red", "green", "blue"];
console.log("Array (Object):", colors);

//Function
let greet_function = function greet() {
  console.log("Hello, World!");
};
greet_function();

console.log(typeof name_string); // string
