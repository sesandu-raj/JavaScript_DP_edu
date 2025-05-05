console.log("Functions in JavaScript");

//Declaring a Function
function greet() {
  console.log("Hello, World!");
}
greet();

//....................................................................................

//Function with Parameters
let name_f = "Sesandu";

function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

greetUser(name_f); // Output: Hello, (name_f)!

//....................................................................................

//Difference between Template Literals and String Concatenation

//...................................................................................

//Template Literals
//automatically adds spacing
function greetUser2(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}!`);
}
greetUser2("John", "Doe");

//String Concatenation
//harder to manage in longer or more complex strings
function greetUser3(firstName, lastName) {
  console.log("hello" + " " + firstName + " " + lastName);
}
greetUser3("Patrik", "Parker");

//...................................................................................

//Functions that Return Values
function add(a, b) {
  return a + b;
}

let result_r = add(5, 3);
console.log(result_r); // Output: 8

console.log(add(10, 5)); // Output: 15.20

//Arrow Functions
const multiply = (x, y) => {
  return x * y;
};

console.log(multiply(2, 3)); // Output: 6

const square = (num) => num * num;
console.log(square(4)); // Output: 16
