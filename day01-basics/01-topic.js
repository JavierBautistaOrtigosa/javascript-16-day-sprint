//* Variables & Data Types

//-> Exercise: Create 10 variables, then log their types:

/*
let car = "Sedan";
let animal = "Dog";
let age = 38;
let portions = 3;
let isRaining = false;
let isUser = true;
let test = null;
let weight; //? A variable that is declared but not initialized will have the value of undefined.
let megaNumber = 9007199254740991n;

console.log(typeof car); //= string
console.log(typeof animal); //= string
console.log(typeof age); //= number
console.log(typeof portions); //= number
console.log(typeof isRaining); //= boolean
console.log(typeof isUser); //= boolean
console.log(typeof test); //= null
console.log(typeof weight); //= undefined
console.log(typeof megaNumber); //= bigint
*/

//* Operators & Expressions

//-> Exercise (predict → then run → compare). Write:

//-> 5 arithmetic expressions

/*
let x = 2;
let y = 3;

let sum = x + y;
let substract = x - y;
let multiply = x * y;
let divide = x / y;
let remainder = x % y;

console.log(sum);
console.log(substract);
console.log(multiply);
console.log(divide);
console.log(remainder);
*/

//-> 5 comparison expressions

/*
let n1 = 5;
let n2 = 6;

let comparison1 = n1 == n2;
let comparison2 = n1 === n2;
let comparison3 = n1 < n2;
let comparison4 = n1 <= n2;
let comparison5 = n1 != n2; //? Not Equal To
console.log(10 === 10); //? console.log() can evaluate a comparison expression without the fuss of creating variables...

console.log(comparison1);
console.log(comparison2);
console.log(comparison3);
console.log(comparison4);
console.log(comparison5);
*/

//-> 3 logical expressions

/*
console.log(true && false); //= false
console.log(true || false); //= true
let n1 = !true;
console.log(n1); //= false
*/

//* Strings & Template Literals (guided practice):

//-> Basic strings:

/*
let city = "Perth";
let country = "Australia";
console.log(city, country);
*/

//-> Template literals:

/*
let fullLocation = `${city} is a city from ${country}`;
console.log(fullLocation);
*/

//-> Multi-line:

/*
let msg = `Hi, my name is Javier
and I am passionate about technology`;
console.log(msg);
*/

//-> My drill:

//-> Create a template literal that includes:
//-> Your name, your age, an expression (${2 + 2}) and a multi‑line message

/*
let myName = "Javier";
let myAge = 38;
let expression = 2 + 2;

let test = `My name is ${myName} and I am ${myAge} years old.
The expression of 2 + 2 equals ${expression}.` + `\n` + `This is a 
multi-line message.`;
console.log(test);
*/

//* Console Mastery (guided practice):

//-> Logging:

/*
console.log("Testing log...");
console.error("Testing error...");
*/

//-> Table:

/*
let user = { name: "Javier", age: 38, role: "IT Manager" };
console.table(user);
*/

//-> Trigger an error:

/*
let test1 = 10;
test1 = 20;
console.log(test1); //! Assignment to let variable don't throw an error.
*/

/*
const test2 = 10;
test2 = 20;
console.log(test2); //! TypeError: Assignment to constant variable.
*/

//* Deconstraction Drill (now do these one by one):

//-> Base Snippet:
//-> const greeting = (name) => `Hello ${name}`

//-> Rewrite using function keyword:

/*
function greeting(nombre) {
    console.log(`Hello ${nombre}`);
}

greeting("Javier");
*/

//-> Rewrite with explicit return:

/*
function greeting(nombre) {
    return `Hello ${nombre}`;
}

console.log(greeting("Javier"));
*/

//-> Rewrite with no parameters:

/*
let nombre = "Javier";

function greeting() {
    return `Hello ${nombre}`;
}

console.log(greeting());
*/

//-> Rewrite with two parameters:

/*
function greeting(nombre, age) {
    console.log(`My name is ${nombre} and I am ${age} years old`);
}

greeting("Javier", 38);
*/

//-> Add a default parameter:

/*
let nombre = "Javier";

function greeting(nombre, age = 38) {
  return `My name is ${nombre} and I am ${age} years old.`;
}

console.log(greeting("Javier"));
*/

//-> Log the result:

/*
function operation(x, y, z = 6) {
  return x + y + z;
}

console.log(operation(2, 4));
*/

//-> Store the result in a variable:

/*
function operation(x, y, z = 6) {
  return x + y + z;
}

let result = operation(2, 4);
console.log(result);
*/

//* Mini Project: “About Me” Script:

//-> Create a file: about-me.js (I do it in this file)
//-> Requirements:

//-> Variables for name, age, city, job

/*
const nombre = "Javier";
const age = 38;
const city = "Perth";
const job = "Developer";
*/

//-> A template literal that prints a 3‑line intro

/*
const msg = `My name is ${nombre}
and I am ${age} years old. \n 
I live in ${city}
and I am currently studying to become a ${job}`;

console.log(msg);
*/

//-> Use at least 3 operators

/*
console.log((3 * 3) / 2 + 5);
*/

//-> Use console.table()

/*
const isEnrolled = true;

const student = { name: "Javier", diploma: "IT", isEnrolled };
console.table(student);
*/

//-> Use one function that returns a sentence about you

/*
let myName = "Javier";
let age = 38;

function greet() {
    return `My name is ${myName} and I am ${age} old.`;
};

console.log(greet());
*/