//* ------------------------------------------------------------
//* Topic: Async JavaScript
//* Description: Callbacks, Promises, async/await, fetch, error
//* handling, and understanding the event loop.
//* ------------------------------------------------------------

//-> -----------------------------------------------------------
//-> Understanding Sync vs Async. (Guided Practice):
//-> -----------------------------------------------------------

//-> Synchronous example:

// console.log("A");
// console.log("B");
// console.log("C");

//-> Asynchronous example:

// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 5000);
// console.log("C");

//? Note:
//? JavaScript is single-threaded, but async functions allow
//? tasks to run later, without blocking the main thread.

//-> -----------------------------------------------------------
//-> 10‑minute drill:
//-> Write:
//-> - a synchronous sequence of 3 logs:
//-> - an async sequence using setTimeout:
//-> - a mix of sync + async and predict the order:
//-> -----------------------------------------------------------

//-> - a synchronous sequence of 3 logs:

// console.log("Hello, ");
// console.log("Javier.");
// console.log("How are you?");

//-> - an async sequence using setTimeout:
//-> - a mix of sync + async and predict the order:

// console.log("Hey Javier.");
// setTimeout(() => {
//   console.log("How are you doing today?");
// }, 1000);
// setTimeout(() => {
//   console.log("I hope you are well :)");
// }, 5000);

//-> -----------------------------------------------------------
//-> Callbacks. (Guided Practice):
//-> -----------------------------------------------------------

//-> Basic callback:

// function greet(name, callback) {
//   console.log(`Hello ${name}`);
//   callback();
// }

// greet("Javier", () => {
//   console.log("Callback executed");
// });

//-> Callback with delay:

// setTimeout(() => {
//   console.log("Task finished");
// }, 2000);

//-> Callback hell example:

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//     }, 3000);
//   }, 2000);
// }, 1000);

//-> -----------------------------------------------------------
//-> 10‑minute drill:
//-> Write:
//-> - A function that accepts a callback:
//-> - A delayed callback:
//-> - A 3‑step callback chain:
//-> -----------------------------------------------------------

//-> - A function that accepts a callback:

// sayHello = (name, callback) => {
//   console.log(`Hello ${name}`);
//   callback();
// };

// callback = () => {
//   console.log("How are you?");
// };

// sayHello("Javier", callback);

//-> - A delayed callback:

// sayGoodbye = (name, callbackDelayed) => {
//   console.log(`See yaa ${name}...`);
//   callbackDelayed();
// };

// callbackDelayed = () => {
//   setTimeout(() => {
//     console.log("bla bla bla");
//   }, 1000);
// };

// sayGoodbye("Javier", callbackDelayed);

//-> - A 3‑step callback chain:

// count = (callback_1, callback_2, callback_3) => {
//   console.log("Counting from 1 to 3 now:");
//   callback_1();
//   callback_2();
//   callback_3();
// };

// callback_1 = () => {
//   setTimeout(() => {
//     console.log(1);
//   }, 1000);
// };
// callback_2 = () => {
//   setTimeout(() => {
//     console.log(2);
//   }, 2000);
// };
// callback_3 = () => {
//   setTimeout(() => {
//     console.log(3);
//   }, 3000);
// };

// count(callback_1, callback_2, callback_3);

//-> Version 2:

// count = (callback_1) => {
//   console.log("Counting from 1 to 3 now:");
//   callback_1();
// };

// callback_1 = () => {
//   setTimeout(() => {
//     console.log(1);
//     callback_2(); // move to next step
//   }, 1000);
// };

// callback_2 = () => {
//   setTimeout(() => {
//     console.log(2);
//     callback_3(); // move to next step
//   }, 1000);
// };

// callback_3 = () => {
//   setTimeout(() => {
//     console.log(3);
//     // chain ends here
//   }, 1000);
// };

// count(callback_1);

//-> -----------------------------------------------------------
//-> Promises. (Guided Practice):
//-> -----------------------------------------------------------

//-> Create a promise:

// const promise = new Promise((resolve, reject) => {
//   const success = true;
//   //   const success = false;

//   if (success) resolve("Operation Succeesful");
//   else reject("Operation failed");
// });

//-> Consume a Promise:

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

//-> Promise with timeout:
//? Note: A Promise is a cleaner, more structured way to handle asynchronous operations without nesting callbacks.

// function wait(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`Waited ${ms}ms`), ms);
//   });
// }

// wait(1000).then((msg) => console.log(msg));

//-> -----------------------------------------------------------
//-> async / await. (Guided Practice):
//-> -----------------------------------------------------------

//-> Convert Promise to async/await:

// function wait(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Done"), ms);
//   });
// }

// async function run() {
//   const result = await wait(1000);
//   console.log(result);
// }

// run();

//-> Error handling:

// async function run() {
//   try {
//     const result = await Promise.reject("Not done");
//     console.log(result);
//   } catch (error) {
//     console.error("Caught:", error);
//   }
// }

// run();

//-> -----------------------------------------------------------
//-> 10‑minute drill:
//-> Write:
//-> - An async function:
//-> - Use await on a Promise:
//-> - Handle errors with try/catch:
//-> -----------------------------------------------------------
