console.log("Scope in JavaScript");
//....................................................................................

let globalVar = "I’m global";

function testScope() {
  let localVar = "I’m local";
  console.log(globalVar); // ✅
  console.log(localVar); // ✅
}

testScope();

console.log(globalVar); // ✅
// console.log(localVar); // ❌ Error

//....................................................................................

//Varialble calling within block scope

let globalVar_1 = "I’m global";

function testScope() {
  let localVar = "I’m local, function scope variable";
  let globalVar_1 = "changed"; //shadowing the global variable
  console.log(globalVar_1); // ✅ changed
  console.log(localVar); // ✅ i’m local
}

testScope();

console.log(globalVar_1); // ✅ I’m global
// console.log(localVar_1); // ❌

// you can make an own block scope with curly braces and declrae a variable with let or const
{
  let blockVar = "I’m in a blockscope variable";
  console.log(blockVar); // ✅
}
// console.log(blockVar); // ❌ Error

//....................................................................................

//Hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope during the compile phase.
// This means that you can use variables and functions before they are declared in the code.
greetHoisted(); // ✅

function greetHoisted() {
  console.log("Hello, Hoisted!");
  console.log(globalVar_1); // ✅ the globalvar_1 take the global scope value declared abovein line 21
}
