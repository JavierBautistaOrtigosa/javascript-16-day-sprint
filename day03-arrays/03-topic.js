//* ------------------------------------------------------------
//* Topic: Arrays & Essential Methods (Full Guided Session)
//* Description: Arrays, indexing, mutation vs immutability,
//* essential methods (map, filter, reduce, find, some, every), spread operator.
//* ------------------------------------------------------------

//-> Array Basics (Guided Practice):

//-> Step 1 — Create your first arrays:

// const numbers = [1, 2, 3, 4, 5];
// const names = ["Javier", "Miriam", "Liam", "Maia"];

//-> Step 2 — Accessing items:

// console.log(numbers[0]);
// console.log(names[0]);

//-> Step 3: Lenght:

// console.log(numbers.length);
// console.log(names.length);

//-> Step 4: Modify items:

// numbers[1] = 25;
// console.log(numbers);

//->  ------------------------------------------------------------
//-> Your 10‑minute drill:
//-> Create:
//-> 1. An array of 5 numbers.
//-> 2. An array of 5 strings.
//-> 3. An array with mixed types.
//-> 4. Log the first, middle, and last item of each.
//->  ------------------------------------------------------------

//-> 1. An array of 5 numbers.

// const numList = [1, 2, 3, 4, 5];
// console.log(numList);

//-> 2. An array of 5 strings.

// const cars = ["Mazda", "Nissan", "Ford", "Renault", "Citroen"];
// console.log(cars);

//-> 3. An array with mixed types.

// const mixedItems = ["Javier", 1, "Miriam", 2, "Liam", 3, "Maia", 4, "Yayos", 5];
// console.table(mixedItems);

//-> Array Mutation Methods (push, pop, shift, unshift):

//-> Step 1 - push (add to end):

// const fruits = ["apple", "banana"];
// fruits.push("orange");
// console.table(fruits);

//-> Step 2 - pop (remove from end):

// fruits.pop();
// console.table(fruits);

//-> Step 3: unshift (add to start):

// fruits.unshift("kiwi");
// console.table(fruits);

//-> Step 4: shift (remove from start):

// fruits.shift();
// console.table(fruits);

//->  ------------------------------------------------------------
//->  Your 10‑minute drill:
//-> Create an array and perform:
//-> 2 pushes
//-> 1 pop
//-> 1 unshift
//-> 1 shift
//->  ------------------------------------------------------------

// const appList = ["Heart Rate", "Remainders", "Notes"];

// appList.push("Safari");
// appList.push("Google Maps");

// console.table(appList);

// appList.pop(); //? Can you pass arguments?

// console.table(appList);

// appList.unshift("Calories Counter");

// console.table(appList);

// appList.shift(); //? Can you pass arguments?

// console.table(appList);

//-> Essential Array Methods (map, filter, find):
//! These are React‑critical.

//-> Step 1: map
//-> Transforms each item → returns a new array.

// const nums = [1, 2, 3, 4];
// const doubled = nums.map((n) => n * 2);
// console.log(doubled);
// console.table(doubled);

//-> Step 2: filter
//-> Keeps items that match a condition.

// const ages = [12, 18, 25, 30];
// const adults = ages.filter((age) => age >= 20);
// console.log(adults);

//-> Step 3: find
//-> Returns the first match.

// const users = [
//   { id: 1, name: "Javier" },
//   { id: 2, name: "Miriam" },
// ];

// const user = users.find((u) => u.id === 2);
// console.log(user);

//->  ------------------------------------------------------------
//-> Your 10‑minute drill:
//-> Using an array of numbers:
//-> 1. map → multiply each by 3
//-> 2. filter → keep only even numbers
//-> 3. find → find the first number > 1
//->  ------------------------------------------------------------

//-> 1. map → multiply each by 3

// const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const daysNew = days.map((d) => d * 3);
// console.log(daysNew);

//-> 2. filter → keep only even numbers

// const daysEven = days.filter((d) => d % 2 === 0);
// console.log(daysEven);

//-> 3. find → find the first number > 1

// const daysFirst = days.find((d) => d > 1);
// console.log(daysFirst);

//-> reduce, some, every (Guided Practice)

//-> Step 1 — reduce
//? Summarises an array into a single value.

// const prices = [10, 20, 30];
// const total = prices.reduce((sum, price) => sum + price, 0);
// console.log(total);

// const array = [1, 2, 3, 4];

// const initialValue = 0; //! 0 + 1 + 2 + 3 + 4
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial); //= Expected output: 10

//-> Step 2 — some
//? Checks if any item matches.

// const hasAdult = [12, 17, 19].some((age) => age >= 18);
// console.log(hasAdult);

//-> Step 3 - every
//? Checks if all items match.

// const allAdults = [18, 22, 30].every((age) => age >= 20); //= false
// const allAdults = [18, 22, 30].every(age => age >= 18) //= true
// console.log(allAdults);

//->  ------------------------------------------------------------
//-> Your 10‑minute drill
//-> Using an array of numbers:
//-> 1. reduce → sum all numbers
//-> 2. reduce → find the max number
//-> 3. some → check if any number is negative
//-> 3. some → check if any number is negative
//-> 4. every → check if all numbers are positive
//->  ------------------------------------------------------------

//-> 1. reduce → sum all numbers

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numSum = num.reduce((a, item) => a + item, 0);
// //? a = accumulator, item = current item
// //? initial value is 0

// console.log(numSum); //= 55

//-> 2. reduce → find the max number

// const numFindMax = num.reduce((accumulator, item) => {
//   if (accumulator > item) {
//     return accumulator;
//   } else {
//     return item;
//   }
// });

// console.log(numFindMax);

//-> 2. (Version 2: Using the ternary operator (compact)).

// const numFindMaxTernary = num.reduce((accumulator, item) =>
//   accumulator > item ? accumulator : item
// );

// console.log(numFindMaxTernary);

//-> 3. some → check if any number is negative

// const checkNumNegative = num.some((n) => n < 0);
// console.log(checkNumNegative);

//-> 4. every → check if all numbers are positive

// const checkNumPositive = num.every((n) => n > 0);
// console.log(checkNumPositive);

//-> Spread Operator & Immutability (React‑critical)

//-> Step 1 — Copy an array:

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// console.log(arr2);

//-> Step 2 - Add items immutably:

// const arr3 = [...arr1, 4];
// console.log(arr3);

//-> Step 3 - Combine arrays:

// const combined = [...arr1, ...arr3];
// console.log(combined);

//->  ------------------------------------------------------------
//-> Your 10‑minute drill:
//-> Copy an array:
//-> 1. Add an item immutably.
//-> 2. Merge two arrays.
//-> 3. Remove an item immutably using filter.
//->  ------------------------------------------------------------

//-> 1. Add an item immutably.

// const numList1 = ["arr1: ", 1, 2, 3, 4, 5];
// const numList2 = [...numList1, "arr2: ", 6, 7, 8, 9, 10];

// console.table(numList1);
// console.table(numList2);

//-> 2. Merge two arrays.

// const numList3 = [...numList1, ...numList2];
// console.table(numList3);

//-> 3. Remove an item immutably using filter.

// const removeItem = numList3.filter((num) => num >= 5);
// console.table(removeItem);

//->  ------------------------------------------------------------
//-> Deconstruction Drill (Your Signature Style).

//-> Base snippet:
//-> const numbersTest = [1, 2, 3, 4, 5];

//-> Break into 10 micro‑exercises:
//-> 1. map → double each number
//-> 2. filter → keep numbers > 2
//-> 3. find → find number === 3
//-> 4. reduce → sum all numbers
//-> 5. reduce → multiply all numbers
//-> 6. some → check if any number is even
//-> 7. every → check if all numbers are > 0
//-> 8. spread → copy the array
//-> 9. spread → add a number immutably
//-> 10. filter → remove number 3 immutably
//-> This locks in everything.
//->  ------------------------------------------------------------

//-> Base snippet:
const numbersTest = [1, 2, 3, 4, 5];

//-> 1. map → double each number

const double = numbersTest.map((n) => n * 2);
console.log(double);

//-> 2. filter → keep numbers > 2

const biggerThan2 = numbersTest.filter((n) => n > 2);
console.log(biggerThan2);

//-> 3. find → find number === 3

const whereIs3 = numbersTest.find((n) => n === 3);
console.log(whereIs3);

//-> 4. reduce → sum all numbers

const sumAll = numbersTest.reduce(
  (accumulator, currentItem) => accumulator + currentItem,
  0
);
console.log(sumAll);

//-> 5. reduce → multiply all numbers

const multiplyAll = numbersTest.reduce(
  (accumulator, currentItem) => accumulator * currentItem,
  1
);
console.log(multiplyAll);

//-> 6. some → check if any number is even.

const checkEven = numbersTest.some((n) => n % 2 === 0);
console.log(checkEven);

//-> 7. every → check if all numbers are > 0

const biggerThan = numbersTest.every((n) => n > 0);
console.log(biggerThan);

//-> 8. spread → copy the array

const copyArray = [...numbersTest];
console.log(copyArray);

//-> 9. spread → add a number immutably

const addedItems = [...numbersTest, 4, 3, 2, 1];
console.log(addedItems);

//-> 10. filter → remove number 3 immutably

const removeNum = numbersTest.filter((n) => n != 3);
console.log(removeNum);

//->  ------------------------------------------------------------
//-> Mini Project: “Simple Expense List”
//-> Create a file: expense-list.js
//-> Requirements:
//-> - Start with an array of expenses (numbers)
//-> - Add a new expense immutably
//-> - Remove an expense immutably
//-> - Calculate total using reduce
//-> - Filter expenses > 50
//-> - Map expenses → convert to strings like '$50.00'
//-> - Print results using console.table()
//-> Bonus:
//-> Create a function addExpense(list, amount) that returns a new list.
//->  ------------------------------------------------------------

//? Questions: What does adding or removing immutable mean?
//? Questions: What is immutability?
//? Questions: What is mutability?

console.log(`\n`);
console.log("--- Simple Expense List ---");
const expenses = [1, 2, 3, 4, 5];
const addExpense = [...expenses, 6];
const removeExpense = addExpense.filter((n) => n < 6);
const total = removeExpense.reduce(
  (accumulator, currentItem) => accumulator + currentItem,
  0
);
console.log(total);
const totalAdded = [
  ...removeExpense,
  6,
  7,
  8,
  9,
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100,
];

console.log(totalAdded);

console.log(`\n`);

const filter50 = totalAdded.filter((n) => n < 50);
console.log(filter50);

console.log(`\n`);

const convertToString = filter50.map((n) => String(n));
console.log(convertToString);
console.table(convertToString);

console.log(`\n`);

//-> Create a function addExpense(list, amount) that returns a new list (version_1)

// function addExpense_v2(list, amount) {
//     return [...list, amount];
// }

// const list = [];
// const updated = addExpense_v2(list, 50);

// console.log(list);
// console.log(updated);


//-> Create a function addExpense(list, amount) that returns a new list (version_2)

// function addExpense_v2(list, amount) {
//   return [...list, amount];
// }

// let list = [];
// list = addExpense_v2(list, 50);
// list = addExpense_v2(list, 100);
// list = addExpense_v2(list, 200);

// console.log(list);


