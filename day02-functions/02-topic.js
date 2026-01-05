//* ------------------------------------------------------------
//* Topic: Functions Mastery.
//* Description: Function declarations, expressions, arrow functions, 
//* parameters, return, scope, pure functions.
//* ------------------------------------------------------------

//-> -----------------------------------------------------------
//-> Function Declarations (Guided Practice):
//-> -----------------------------------------------------------

//-> Type this:

// function greet() {
//   console.log("Hello from a function");
// }

// greet();

//-> Add parameters:

// function greetUser(name) {
//   console.log(`Hello ${name}`);
// }

// greetUser("Javier");

//-> Add a return value:

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 2));
// let result = console.log(add(2, 2)); //? Same thing but storing the return in a variable.

//->  ------------------------------------------------------------
//-> 10‑minute drill:
//-> Write 5 functions:
//-> - 1 with no parameters:
//-> - 1 with one parameter:
//-> - 1 with two parameters:
//-> - 1 that returns a string:
//-> - 1 that returns a number:
//-> - Run all of them:
//->  ------------------------------------------------------------

//-> 1 with no parameters:

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();

//-> 1 with one parameter:

// function sayHello(name) {
//     console.log(`Hello ${name}`);
// };

// sayHello("Javier");

//-> 1 with two parameters:

// function sayHello(name, age) {
//     console.log(`Hello ${name}. Are you ${age} years old?`);
// }
// sayHello("Javier", 38);

//-> 1 that returns a string:

// function stringTest(name) {
//     return name;
// }

// console.log(typeof(stringTest("Javier")));

//-> 1 that returns a number:

// function numTest(num) {
//     return num;
// }

// console.log(typeof(numTest(10)));

//-> -----------------------------------------------------------
//-> Function Expressions (Guided Practice):
//-> -----------------------------------------------------------

//-> Basic expression:

// const multiply = function (x, y) {
//   return x * y;
// };

// console.log(multiply(2, 2));

//-> Anonymous function:

// const sayHi = function () {
//   console.log("Hi");
// };

// sayHi();

//-> Store Result:

// const result = multiply(10, 2); //? Function defined in Step 1.
// console.log(result);

//-> -----------------------------------------------------------
//-> Arrow Functions (Guided Practice):
//-> -----------------------------------------------------------

//-> Basic arrow function:

// const square = (n) => {
//   return n * n;
// };

// console.log(square(5));

//-> Implicit return:

// const double = (n) => n * 2;
// Why the example has (n) with no parenthesis
// Why there are no curly brackets here?

// console.log(double(8));

//-> No params:

// const getRandom = () => Math.random();
// console.log(getRandom());

//-> Multiple params:

// const fullName = (first, last) => `${first} ${last}`;
// console.log(fullName("Javier", "Bautista"));

//-> -----------------------------------------------------------
//-> Your 10 minute Drill:
//-> Convert your 5 functions from earlier into function expressions:
//-> - 1 with no parameters:
//-> - 1 with one parameter:
//-> - 1 with two parameters:
//-> - 1 that returns a string:
//-> - 1 that returns a number:
//-> -----------------------------------------------------------

//-> 1 with no parameters:

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();

// const sayHello = () => console.log("Hello!");
// sayHello();

//-> 1 with one parameter:

// function sayHello(name) {
//     console.log(`Hello ${name}`);
// };

// sayHello("Javier");

// const sayGoodbye = (param) => console.log(param);
// sayGoodbye("Goodbye!");

//-> 1 with two parameters:

// function sayHello(name, age) {
//     console.log(`Hello ${name}. Are you ${age} years old?`);
// }
// sayHello("Javier", 38);

// const sayTwoWords = (param1, param2) => console.log(param1 + param2);
// sayTwoWords("Hello!", "Goodbye!");

//-> 1 that returns a string:

// function stringTest(name) {
//     return name;
// }

// console.log(typeof(stringTest("Javier")));

// const showType = (param) => console.log(param);
// showType(`Javier is a ${typeof "Javier"}.`);

//-> 1 that returns a number:

// function numTest(num) {
//     return num;
// }

// console.log(typeof(numTest(10)));

// const numTest = (param) => console.log(param);
// numTest(`10 is a ${typeof 10}.`);

//-> ------------------------------------------------------------
//-> Function Expressions. (guided practice):
//-> ------------------------------------------------------------

//-> Basic expression:

// const multiply = function (x, y) {
//   return x * y;
// };

// console.log(multiply(2, 2));

// const multiply = (x, y) => x * y;
// console.log(multiply(2, 2));

//-> Anonymous function:

// const sayHi = function () {
// console.log("Hi");
// };

// sayHi();

// const sayHi = () => console.log("Hi");
// sayHi();

//-> Store Result:

// const result = multiply(10, 2);
// console.log(result);

// const result = multiply(2, 2);
// console.log(result);

//-> ------------------------------------------------------------
//-> Parameters, Defaults & Return. (Guided Practice):
//-> ------------------------------------------------------------

//-> Default parameters:

// const greetAgain = (name = "friend") => `Hello ${name}`
// console.log(greetAgain());

//-> Return early:

//? Is the following like an implicit else?

// const isAdult = (age) => {
//     if (age < 18) return false;
//     return true;
// }

// console.log(isAdult(13));
// console.log(isAdult(23));

//? - Note:
//? - When the function is called, it first checks if age < 18.
//? - If that condition is true, it immediately returns false and exits the function.
//? - If the condition is false (meaning age is 18 or older), the function continues to the next line and returns true.
//? - Because the first return exits early, the second return only runs if the first condition is not met, effectively acting like an else branch without explicitly writing else.

//-> Return objects:

// const makeUser = (name, age) => ({
//     name, age, role: "student"
// })

// console.log(makeUser("Javier", 34));

//? Note:
//? - Arrow functions with concise bodies can return expressions implicitly without using the return keyword.
//? - However, when returning an object literal directly, you must wrap the object in parentheses () to distinguish it from a block body.
//? - Without parentheses, JavaScript interprets the curly braces {} as the start of a function block, not an object.
//? - So the parentheses tell JavaScript "this is an expression (an object), not a block," allowing the object to be returned directly.

//-> ------------------------------------------------------------
//-> Your 10‑minute drill
//-> Write:
//-> - A function with a default parameter:
//-> - A function that returns early:
//-> - A function that returns an object:
//-> - A function that returns a template literal:
//-> ------------------------------------------------------------

//-> A function with a default parameter:

/*
const sum = (n1, n2 = 2) => n1 + n2;
console.log(sum(2));
*/

//-> A function that returns early:

/*
const compare = (n1, n2) => {
  if (n1 < n2) return true;
  return false;
};

console.log(compare(2, 4));
console.log(compare(6, 4));
*/

//-> A function that returns an object:

/*
const car = (brand, model, year) => ({
  Brand: `${brand}`,
  Model: `${model}`,
  Year: `${year}`,
});

console.log(car("Mazda", "Neo", 2016));
console.table(car("Mazda", "Neo", 2016));
*/

//-> A function that returns a template literal:

/*
const composePhrase = (string1, string2, string3) =>
  `String 1 = ${string1} \nString 2 = ${string2} \nString 3 = ${string3}`;

console.log(composePhrase("Javier", "Student", "Diploma IT"));
*/

//-> ------------------------------------------------------------
//-> Scope. (Guided Practice):
//-> ------------------------------------------------------------

//-> Block scope:

// let x = 10;

// if (true) {
//   let x = 20;
//   console.log("Inside block:", x);
// }

// console.log("Outside block", x);

//-> Function scope:

// function testScope() {
//   const message = "Inside function";
//   console.log(message);
// }

// testScope();
// console.log(message); //! Error

//-> Global vs local:

// let counter = 0;

// function increment() {
//   counter++;
// }

// increment();
// increment();
// console.log(counter);

//? - Note:
//? - Here's what is happening step-by-step:
//? - let counter = 0 declares a variable counter in the global scope and initializes it to 0.
//? - The function increment increases the value of counter by 1 each time it is called.
//? - When you call increment() the first time, it adds 1 to counter, so counter becomes 1.
//? - When you call increment() the second time, it adds 1 again, so counter becomes 2.
//? - Finally, console.log(counter) prints the current value of counter, which is 2.
//? - This example shows how a function can modify a variable declared outside its own scope (a global variable), and how repeated calls to the function accumulate changes to that variable.

//? MDN: Scopehttps://developer.mozilla.org/en-US/docs/Glossary/Scope

//->  ------------------------------------------------------------
//-> 10‑minute drill:
//-> Show me the following: Write 3 examples:
//-> - One showing block scope:
//-> - One showing function scope:
//-> - One showing global variable mutation:
//->  ------------------------------------------------------------

//-> Block Scope:

// {
//   let msg = "Inside block!";
//   console.log(msg); //! Accessible inside block.
// }

// console.log(msg); //! Reference error: msg is not defined.

//-> Function Scope:

// function test() {
//     let num = 10;
//     console.log(num); //! Accessible only inside this function.
// }

// test();
// console.log(num); //! Reference error: num is not defined.

//-> Global variable mutation. (Example 1):

// let myName = "Javier";

// function sayMyName() {
//   // myName = "Miriam";
//   let myName = "Miriam"; // Local variable (shadowing)
//   console.log(myName);
// }

//? Note:
//?  Inside the function:
//?  This creates a new variable that exists only inside the function.
//? It shadows the global myName, meaning the global one is temporarily hidden inside that scope.

// sayMyName();
// console.log(myName);

//? Note:
//? Outside the function:
//? The global myName is still "Javier" because you never reassigned it.

//-> Global variable mutation. (Example 2):

// let num = 10; //! Global variable

// function changeNum() {
//   num++; //! Mutating the global variable.
// }

// console.log(num); //= 10
// changeNum();
// console.log(num); //= 11 (Global variable changed)

//->  ------------------------------------------------------------
//-> Deconstruction Drill. (Your Signature Style):

//-> Base snippet:
//-> const greeting = (name) => `Hello ${name}`

//-> Break into 10 micro‑exercises:
//-> 1) Rewrite as a function declaration:
//-> 2) Rewrite as a function expression:
//-> 3) Rewrite with explicit return:
//-> 4) Bonus: Implicit return:
//-> 5) Add a default parameter:
//-> 6) Add two parameters:
//-> 7) Return an object:
//-> 8) Return a template literal:
//-> 9) Add validation (if no name → return error):
//-> 10) Store the result in a variable and log it:
//->  ------------------------------------------------------------

//-> 1) Rewrite as a function declaration:

// function greetingTest1(name) {
//   console.log(`Hello ${name}`);
// }

// greetingTest1("Javier");

//-> 2) Rewrite as a function expression:

// const greetingTest2 = function (name) {
//   console.log(`Hello ${name}`);
// };

// greetingTest2("Miriam");

//-> 3) Rewrite with explicit return:

// const greetingTest3 = function (name) {
//   return `Hello ${name}`;
// };

// console.log(greetingTest3("Liam"));

//-> 4) Bonus: Implicit return:

// const greetingTest4 = (name) => `Hello ${name}`;
// console.log(greetingTest4("Maia"));

//-> 5) Add a default parameter:

// function add(n1, n2 = 2) {
//   return n1 + n2;
// }

// console.log(add(1));

//-> 6) Add two parameters:

// function multipleParams(n1, n2, n3 = 2) {
//   return n1 + n2 + n3;
// }

// console.log(multipleParams(2, 2));

//-> 7) Return an object:

// function car(brand, model, year) {
//   return { Brand: brand, Model: model, Year: year };
// }

// console.table(car("Mazda", "Neo", 2016));

//-> Returning an object (arrow function version):

// const secondCar = (brand, model, year) => ({
//   Brand: brand,
//   Model: model,
//   Year: year,
// });

// console.table(secondCar("Mazda", "Neo", 2016));

//-> 8) Return a template literal:
//-> 9) Add validation (if no name → return error):
//-> 10) Store the result in a variable and log it:

//! Not finished
