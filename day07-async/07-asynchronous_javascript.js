//-> async, await, try, catch

//-> async and await are two keywords.
//-> By using these two keywords, they allow you to write
//-> ... asynchronous code in a synchronous manner.

//-> async = makes a function return a promise.
//-> await = makes async function wait for a promise.

//-> Original code:

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = true;

//       if (dogWalked) {
//         resolve("Task 1: Walk the dog. Completed.");
//       } else {
//         reject("Task 1: Pending.");
//       }
//     }, 1500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kitchenCleaned = true;
//       if (kitchenCleaned) {
//         resolve("Task 2: Clean the Kitchen. Completed.");
//       } else {
//         reject("Task 2: Pending.");
//       }
//     }, 2500);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const trashTakenOut = false;
//       if (trashTakenOut) {
//         resolve("Task 3: Take out the trash. Completed.");
//       } else {
//         reject("Task 3: Pending.");
//       }
//     }, 500);
//   });
// }

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen(); //? It returns another promise...
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("All tasks finished!");
//   })
//   .catch((error) => console.error(error));

//-> A function can be declared with async:

//* An async function will return a promise.
//* However, that promised that is returned doesn't resolve or reject.
//? In a way we could say is an empty promise...

//* Right now we don't need method chaining anymore.
//* async and await need to work in conjuction.

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = false;
      if (dogWalked) {
        resolve("Task 1: Walk the dog. Completed.");
      } else {
        reject("Task 1: Pending.");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("Task 2: Clean the Kitchen. Completed.");
      } else {
        reject("Task 2: Pending.");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = false;
      if (trashTakenOut) {
        resolve("Task 3: Take out the trash. Completed.");
      } else {
        reject("Task 3: Pending.");
      }
    }, 500);
  });
}

async function doTasks() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
  } catch (error) {
    console.log("Some tasks are not completed!");
  }
}

doTasks();
