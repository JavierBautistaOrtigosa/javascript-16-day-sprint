//* ------------------------------------------------------------
//* Topic: Loops & Control Flow (Full Guided Session)
//* Description: if, else, switch, for, while, do…while, for…of, break, continue,
//* and combining loops with arrays & objects.
//* ------------------------------------------------------------

//-> -----------------------------------------------------------
//-> Control Flow: if/else. (Guided Practice)
//-> -----------------------------------------------------------

//-> Basic if:

// const age = 7;
// if (age >= 18) {
//   console.log("Adult");
// }

//-> if/else:

// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Not an adult");
// }

//-> else/if:

// const score = 85;

// if (score >= 90) {
//     console.log("A");
// } else if (score >= 75) {
//     console.log("B");
// } else {
//     console.log("C or below")
// }

//-> Ternary:

// const isLoggedIn = false;
// const message = isLoggedIn ? "Welcome back" : "Please log in";
// console.log(message);

//? Ternary Syntax:
//? condition ? expressionIfTrue : expressionIfFalse

//->  ------------------------------------------------------------
//-> 10‑minute drill:
//-> Write:
//-> - An if/else checking temperature:
//-> - An if/else if chain for grades:
//-> - A ternary checking if a number is even:
//->  ------------------------------------------------------------

//-> An if/else checking temperature:

// const temp = 10;

// if (temp >= 18) {
//     console.log("Is getting warmer");
// } else {
//     console.log("Is not getting warmer yet");
// };

//-> An if/else if chain for grades:

// const grade = 7;

// if (grade < 5) {
//   console.log("Fail");
// } else if (grade < 7 ) {
//   console.log("Pass");
// } else if (grade < 10) {
//   console.log("Good Grades");
// } else {
//   console.log("Excellent");
// }

//-> A ternary checking if a number is even:

// const num = 7;

// if (num % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Not Even");
// }

//? condition ? expressionIfTrue : expressionIfFalse

// const isEven = num%2 === 0 ? "Even" : "Not Even";
// console.log(isEven);

//-> -----------------------------------------------------------
//-> switch Statements. (Guided Practice):
//-> -----------------------------------------------------------

// const day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Start of week");
//     break;
//   case "Friday":
//     console.log("Weekend soon");
//     break;
//   default:
//     console.log("Regular day");
// }

//-> Multiple cases:

// const fruit = "apple";

// switch (fruit) {
//   case "apple":
//   case "pear":
//     console.log("Pome fruit");
//     break;
//   default:
//     console.log("Unknown fruit");
// }

//->  ------------------------------------------------------------
//-> 10‑minute drill:
//-> Write a switch for:
//-> - Traffic light colours:
//-> - User roles (admin, editor, viewer):
//->  ------------------------------------------------------------

// const colour = "red";
// const colour = "green";
// const colour = "amber";

// switch (colour) {
//   case "red":
//     console.log("Need to stop");
//     break;
//   case "green":
//     console.log("Can pass");
//     break;
//   case "amber":
//     console.log("Going red soon");
//     break;
//   default:
//     console.log("This is a traffic light");
// }

//-> -----------------------------------------------------------
//-> for Loops. (Guided Practice):
//-> -----------------------------------------------------------

//-> Basic Loop:

// for (let i = 0; i < 5; i++) {
//   console.log("i =", i);
// }

//-> Loop through array:

// const nums = [10, 20, 30];

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

//-> Loop backwards:

// for (let i = nums.length - 1; i >= 0; i--) {
//   console.log(nums[i]);
// }

//? Explanation:
//? Initialization: let i = arr.length - 1 starts at the last index of the array.
//? Condition: i >= 0 ensures the loop continues until the first element.
//? Decrement: i-- decreases the index by 1 in each iteration.

//->  ------------------------------------------------------------
//-> 10‑minute drill:
//-> Write loops that:
//-> - Count from 1 to 10:
//-> - Count down from 10 to 1:
//-> - Loop through an array of names:
//->  ------------------------------------------------------------

//-> Count from 1 to 10:

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//-> Count down from 10 to 1:

// for (let i = 10; i >= 1; i--) console.log(i);

//-> Loop through an array of names:

// let names = ["Javier", "Miriam", "Liam", "Maia"];

// for (let i = 0; i < names.length; i++) {
//   console.log(`${i}`);
//   console.log(`${names[i]}`);
// }

//-> -----------------------------------------------------------
//-> while & do…while. (Guided Practice):
//-> -----------------------------------------------------------

//-> while:

// let count = 0;

// while (count < 3) {
//   console.log(count);
//   count++;
// }

//-> do.. while:

// let n = 0;

// do {
//   console.log(n);
//   n++;
// } while (n < 3);

//->  ------------------------------------------------------------
//-> 10‑minute drill:
//-> Write:
//-> - A while loop counting to 5:
//-> - A do…while loop that runs at least once:
//-> - A while loop iterating through an array:
//->  ------------------------------------------------------------

//-> A while loop counting to 5:

// let num = 0;

// while (num <= 5) {
//   console.log(num);
//   num++;
// }

//-> A do…while loop that runs at least once:

// do {
//   console.log(num);
//   num++;
// } while (num <= 5);

//-> A while loop iterating through an array:

// let nums = [1, 2, 3, 4, 5];
// let i = 0;

// while (i < nums.length) {
//     console.log(nums[i]);
//     i++;
// }

//? i starts at 0
//? i < nums.length ensures we stay inside the array
//? nums[i] accesses each element
//? i++ moves to the next index

//-> -----------------------------------------------------------
//-> for...of & break / continue. (Guided Practice)
//-> -----------------------------------------------------------

// const colours = ["red", "green", "blue"];
// for (const color of colours) {
//   console.log(color);
// }

//-> break:

// for (const num of [1, 2, 3, 4, 5]) {
//   if (num === 3) break;
//   console.log(num);
// }

//-> continue:

// for (const num of [1, 2, 3, 4, 5]) {
//   if (num === 3) continue;
//   console.log(num);
// }

//->  ------------------------------------------------------------
//-> 10‑minute drill:
//-> Using an array of numbers:
//-> - Stop when you hit 7:
//-> - Skip all even numbers:
//-> - Print only numbers > 10:
//->  ------------------------------------------------------------

//-> Stop when you hit 7

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (const num of arr) {
//   if (num === 7) break;
//   console.log(num);
// }

//-> Skip all even numbers

// for (const num of arr) {
//   if (num % 2 === 0) continue;
//   console.log(num);
// }

//-> Print only numbers > 10

// for (const num of arr) {
//   if (num > 10) {
//     console.log(num);
//   }
// }

//->  ------------------------------------------------------------
//-> Deconstruction Drill (Your Signature Style):

//-> Base snippet:
//-> const numbers = [1, 2, 3, 4, 5]

//-> Break into 10 micro‑exercises:
//-> 1) for loop → print all numbers:
//-> 2) for loop → print only even numbers:
//-> 3) for…of → print all numbers:
//-> 4) while loop → print all numbers:
//-> 5) do…while → print all numbers:
//-> 6) break when number === 3:
//-> 7) continue when number === 2:
//-> 8) if/else → label numbers as even/odd:
//-> 9) switch → label numbers 1–5:
//-> 10) combine: filter numbers > 2 using a loop:
//->  ------------------------------------------------------------


//-> Base snippet:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//-> 1) for loop → print all numbers:

// for (let i = 0; i < numbers.length; i++) {
//   console.log(`${numbers[i]}`);
// }

//-> 2) for loop → print only even numbers:

// for (let i = 0; i < numbers.length; i++) {
//   if (i % 2 === 0) {
//     console.log(`${numbers[i]}`);
//   }
// }

//-> 3) for…of → print all numbers:

// for (num of numbers) {
//     console.log(num);
// }

//-> 4) while loop → print all numbers:

// let i = 0;

// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }

//-> 5) do…while → print all numbers:

// let i = 0;

// do {
//   console.log(numbers[i]);
//   i++;
// } while (i < numbers.length);

//-> 6) break when number === 3:

// for (const num of numbers) {
//     if (num === 3) break;
//     console.log(num);
// }

//-> 7) continue when number === 2:

// for (const num of numbers) {
//     if (num === 2) continue;
//     console.log(num);
// }

//-> 8) if/else → label numbers as even/odd:

// for (const num of numbers) {
//   if (num % 2 === 0) console.log(num + ` = even`);
//   else {
//     console.log(num + " = not even");
//   }
// }

//-> 9) switch → label numbers 1–5:

// for (let num of numbers) {
//   switch (num) {
//     case 1:
//       console.log(num + " = Number is one");
//       break;
//     case 2:
//       console.log(num + " = Number is two");
//       break;
//     case 3:
//       console.log(num + " = Number is three");
//       break;
//     case 4:
//       console.log(num + " = Number is four");
//       break;
//     case 5:
//       console.log(num + " = Number is five");
//   }
// }

//-> 10) combine: filter numbers > 2 using a loop:

// for (let num of numbers) {
//   if (num > 2) {
//     console.log(num);
//   }
// }

//->  ------------------------------------------------------------
//-> Mini Project: “Student Grades Analyzer”.

//-> Requirements:

//-> Create an array of student objects:

//-> - 1) Loop through students:
//-> - 2) Count how many passed (>= 60):
//-> - 3) Count how many failed:
//-> - 4) Find highest grade:
//-> - 5) Find lowest grade:
//-> - 6) Categorise grades using if/else or switch:
//-> - 7) Print results using console.table():
//->  ------------------------------------------------------------

//-> Students array:

const students = [
  { name: "Javier", grade: 85 },
  { name: "Miriam", grade: 90 },
  { name: "Liam", grade: 60 },
  { name: "Maia", grade: 40 },
];

//-> 1) Loop through students
//-> 2) Count how many passed (>= 60)
//-> 3) Count how many failed

// let passed = 0;
// let failed = 0;

// for (const student of students) {
//   if (student.grade > 50) {
//     passed++;
//   } else if (student.grade < 50) {
//     failed++;
//   }
// };

// console.log(passed);
// console.log(failed);

// for (const student of students) {
//     const test = Math.max(...students);
//     console.log(test);
// }

//-> 4) Find highest grade
//-> 5) Find lowest grade

// let highesGrade = 0;
// let lowestGrade = 100;

// for (const student of students) {
//   if (student.grade > highesGrade) {
//     highesGrade = student.grade;
//   }
// }
// console.log(highesGrade);

// for (const student of students) {
//   if (student.grade < lowestGrade) {
//     lowestGrade = student.grade;
//   }
// }
// console.log(lowestGrade);

//-> 6) Categorise grades using if/else or switch
//-> 7) Print results using console.table()

//! Bonus: Try creating a small dataset like so:
//! { name: student.name, grade: student.grade, result: "Great job" }
//! ... and console.table the results...

for (const student of students) {
  if (student.grade > 90) {
    console.log(`${student.name} " Results: Excellent"`);
  } else if (student.grade > 70) {
    console.log(`${student.name} " Results: Great job"`);
  } else if (student.grade > 50) {
    console.log(`${student.name} " Results: Pass"`);
  }
}
