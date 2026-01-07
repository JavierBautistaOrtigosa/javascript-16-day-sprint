//-> promises and method chaining


//-> Let's think of it as a set of tasks...
//-> 1. Walk the dog
//-> 2. Clean the kitchen
//-> 3. Take out the trash

//-> Let's create 3 function with timers.

// function walkDog() {
//   setTimeout(() => {
//     console.log("Task 1: Walk the dog. Completed.");
//   }, 1500);
// }

// function cleanKitchen() {
//   setTimeout(() => {
//     console.log("Task 2: Clean the Kitchen. Completed.");
//   }, 2500);
// }

// function takeOutTrash() {
//   setTimeout(() => {
//     console.log("Task 3: Take out the trash. Completed.");
//   }, 500);
// }

// walkDog();
// cleanKitchen();
// takeOutTrash();

//-> Let's implement some callbacks...

// function walkDog(callback) {
//   setTimeout(() => {
//     console.log("Task 1: Walk the dog. Completed.");
//     callback();
//   }, 1500);
// }

// function cleanKitchen(callback) {
//   setTimeout(() => {
//     console.log("Task 2: Clean the Kitchen. Completed.");
//     callback();
//   }, 2500);
// }

// function takeOutTrash(callback) {
//   setTimeout(() => {
//     console.log("Task 3: Take out the trash. Completed.");
//     callback();
//   }, 500);
// }

// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => {console.log("All tasks finished!")});
//   });
// });

//-> Let's wrap all this asynchronous code within a promise...

//? By using a promise we don't need callbacks. Instead we will use method chaining...
//? We wil method chain our promises...

//* We need to modify the functions so they return an object.
//* Formula: new Promise((resolve, reject) => {asynchronous code}).
//* If we want to display a message when the promise is resolved we can call the resolve parameter instead of console.log.
//* By the way the resolve parameter is actually a function and the message is the value and the argument that we are passing in...

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Task 1: Walk the dog. Completed.");
//     }, 1500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Task 2: Clean the Kitchen. Completed.");
//     }, 2500);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Task 3: Take out the trash. Completed.");
//     }, 500);
//   });
// }

//-> Let's create the method chaining...

//* .then is a method... Walk the dog, then what???
//* The walkDog() function does provide a value parameter -> Task 1: Walk the dog. Completed.
//* The message is going to be stored within value so...

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
//   });

//-> Let's handle if the function fails...

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

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

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen(); //? It returns another promise...
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("All tasks finished!");
  })
  .catch((error) => console.error(error));

  
