//* ------------------------------------------------------------
//* Topic: Async JavaScript
//* Description: Reinforcing promises, async and await
//* ------------------------------------------------------------

//-> Traversy example:

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task completed");
//     resolve("Hi");
//   }, 1000);
// });

// promise.then(() => {
//   console.log("Promise consumed..");
// });

// Alternative option:

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task 2 completed");
//     resolve();
//   }, 1000);
// }).then(() => console.log("Promise 2 consumed.."));

// console.log("Hello from the global scope (this message logs immediately..");

//-> ------------------------------------------------------------
//-> Tiny Promise Exercises. (Intuition Builders):
//-> 1. Create a Promise that resolves immediately:
//-> 2. Create a Promise that rejects immediately:
//-> 3. Create a Promise that resolves after 1 second:
//-> 4. Log the order of execution:
//-> 5. Convert a callback into a Promise:
//-> ------------------------------------------------------------

//-> 1. Create a Promise that resolves immediately:

// const p = new Promise((resolve) => resolve("Done"));
// p.then((value) => console.log(value));

//-> 2. Create a Promise that rejects immediately:

// const p = new Promise((resolve, reject) => reject("Error!"));
// p.catch((err) => console.log(err));

//-> 3. Create a Promise that resolves after 1 second:

// const p = new Promise((resolve) => {
//   setTimeout(() => resolve("Finished after 1s"), 1000);
// });

// p.then(msg => console.log(msg));

//-> 4. Log the order of execution:

// console.log("A");
// new Promise((resolve) => resolve("B")).then((msg) => console.log(msg));
// console.log("C");

//-> 5. Convert a callback into a Promise:

//? Convert this:

function wait(ms, callback) {
  setTimeout(callback, ms);
}

//? Into this:

function waitPromise(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

