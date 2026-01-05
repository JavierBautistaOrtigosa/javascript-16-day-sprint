//* ------------------------------------------------------------
//* Topic: Async JavaScript
//* Description: Reinforcing promises, async and await
//* ------------------------------------------------------------

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task completed");
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log("Promise consumed..");
});

// Alternative option:

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 completed");
    resolve();
  }, 1000);
}).then(() => console.log("Promise 2 consumed.."));

console.log("Hello from the global scope (this message logs immediately..");