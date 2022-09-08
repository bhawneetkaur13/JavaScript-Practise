// Variable is a container that stores some value
// the variable behaves like if it was the value that it contains

// Two steps
// 1. Declaration(let,const,var)  let is the best practise because of variable scope
// 2. Assignment (= operator)

// Data Types
// 1. number (can be used in arithmetic operations)
// 2. string (series of characters)
// 3. boolean (true or false)


let age = 21;  //it is not compulsory to use semicolon
console.log(age);

let firstName = "bhawneet"
console.log(firstName);

let status1 = true
console.log(status1);

// To display the content on DOM
document.getElementById("p1").innerHTML = "Hello " + firstName;  //during string concatenation take care of spacing
document.getElementById("p2").innerHTML = "My age is " + age;
document.getElementById("p3").innerHTML = "Enrolled: " + status1;

// const - is a variable that cannot be changed
const PI = 3.14  //keeping the name in capitals is not necessary but it is a good practise
let radius = 5
circumference = 2* PI *radius
console.log(circumference)
