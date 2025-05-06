console.log("objects in Javascript");

let student = {
  name: "John",
  age: 20,
  isEnrolled: true,
  courses: ["Math", "Science", "History"],
  greet() {
    console.log("Hello, my name is " + this.name);
  },
};

// Calling object method

student.greet();

// Accessing object properties

console.log(student);
console.log("Name:", student.name);

//Adding Properti

student.address = ["No 150", "Richway RD", "Melborn"];
console.log(student.address);

// Updating object property

student.age = 21;
console.log("Updated Age:", student.age);

//Adding new method/function to the Object

student.showcourse = function () {
  console.log(student.courses);
};

student.showcourse();

// Error Output
// console.error(student);

//View keys & values in a Object
console.log(Object.keys(student));
console.log(Object.values(student));

//Viewing all properties in a Object
console.log(Object.entries(student));

//Assigning Form one to another
let student2 = {
  name: "Jane",
  age: 22,
};

Object.assign(student2, student);
//Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
console.log(student2);
