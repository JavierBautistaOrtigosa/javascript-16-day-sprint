//* ------------------------------------------------------------
//* Topic: Objects & JSON (Full Guided Session)*
//* Description: Object literals, nested objects, destructuring,
//* updating objects immutably, JSON.parse/stringify.
//* ------------------------------------------------------------

//-> Object Basics (Guided Practice):

//-> Step 1 - Create your first object:

// const user = {
//   name: "Javier",
//   age: 38,
//   city: "Perth",
// };

// console.table(user);

//-> Step 2 - Access properties:

// console.log(user.name);
// console.log(user.age);

//-> Step 3 - Modify properties:

// user.age = 35;
// console.log(user);

//-> Step 4 - Add new properties:

// user.role = "Developer";
// console.log(user);

//->  ------------------------------------------------------------
//-> Your 10‑minute drill:
//-> Create an object representing:
//-> - a book
//-> - a car
//-> - a laptop
//->  ------------------------------------------------------------

// const book = {
//   Author: "Javier",
//   Title: "Fire",
//   Year: 1987,
//   Publisher: "Fire Publisher",
// };
// const car = {
//   brand: "Mazda",
//   Model: "Neo 2",
//   Year: 2016,
//   Engine: "Petrol",
// };
// const laptop = {
//   Brand: "Lenovo",
//   Year: 2024,
//   RAM: "32GB",
//   OS: "Windows 11",
// };

//-> Nested Objects & Arrays Inside Objects

//-> Step 1 — Create a nested object:

// const person = {
//   name: "Javier",
//   address: {
//     street: "Main St",
//     city: "Perth",
//     postcode: 6000,
//   },
// };

// console.log(person.address.city);

//-> Step 2 — Add an array inside an object:

// person.skills = ["JavaScript", "PHP", "Linux"];
// console.log(person.skills[0]);
// console.table(person);

//-> Step 3 — Add an object inside an array:

// const library = [
//   { id: 1, title: "Clean Code", pages: 464 },
//   { id: 2, title: "Atopmic Habits", pages: 464 },
// ];

// console.log(library[1].title);

//->  ------------------------------------------------------------
//-> Your 10‑minute drill
//-> Create an object with:
//-> - nested object
//-> - array
//-> - array of objects
//-> Access at least 5 nested values.
//->  ------------------------------------------------------------

// const student = {
//   name: "Liam",
//   age: "4",
//   year: "2025",
//   isEnrolled: true,
//   subjects: {
//     math: "Satisfactory",
//     english: "Satisfactory",
//     music: "Satisfactory",
//   },
//   terms: ["Term 1", "Term 2", "Term 3"],
//   course: [
//     { id: "Pre-Kindy", schoolSection: "Section A" },
//     { id: "Kindy", schoolSection: "Section B" },
//   ],
// };

// console.log(student.name);
// console.log(student.isEnrolled);
// console.log(student.subjects.Music);
// console.log(student.terms[1]);
// console.log(student.course[1].id);

//-> Destructuring (Guided Practice)

//-> Step 1 — Basic destructuring:

// const product = {
//   nombre: "Laptop",
//   price: 1500,
//   brand: "Dell",
// };

// const { nombre, price } = product;
// console.log(nombre, price);

// -> Step 2 - Rename Variables:

// const { brand: manufacturer } = product; //? Analogy: Here is like saying I want the property brand: to be also a variable and to be called manufacturer.
// console.log(product.brand); //= Output: Dell
// console.log(manufacturer); //= Output: Dell

//-> Step 3 - Nested Destructuring:

// const employee = {
//   id:1,
//   details: {
//     firstName: "Javier",
//     lastName: "Bautista"
//   }
// }

// const {details: {firstName}} = employee; //? Same analogy as the above.

// console.log(employee.details.firstName); //? Now we have the firstName property.
// console.log(firstName); //? And a firstName variable.

//-> Destructuring arrays inside objects:

// const settings = {
//   theme: "dark",
//   shortcuts: ["copy", "paste", "undo"]
// };

// console.log(settings);

// const {shortcuts: [firstShortcut, secondShortcut]} = settings;
// console.log(firstShortcut); //= Output: copy
// console.log(secondShortcut); //= Output: paste

//->  ------------------------------------------------------------
//-> Your 10‑minute drill
//-> Destructure:
//-> - 3 properties
//-> - 1 nested property
//-> - 1 array inside an object
//-> - rename at least 1 variable
//->  ------------------------------------------------------------

const student = {
  name: "Javier",
  diplomaInfo: [
    {
      term: 1,
      isFinished: true,
      units: [
        { title: "Cyber", isPassed: true },
        { title: "General It", isPassed: true },
        { title: "Management", isPassed: true },
      ],
    },
    {
      term: 2,
      isFinished: true,
      units: [
        { title: "Design", isPassed: true },
        { title: "Markup", isPassed: true },
        { title: "Lead", isPassed: true },
      ],
    },
    {
      term: 3,
      isFinished: true,
      units: [
        { title: "Programming", isPassed: true },
        { title: "Databases", isPassed: true },
        { title: "Match ICT", isPassed: true },
      ],
    },
  ],
};

const {
  diplomaInfo: [
    {
      units: [firstUnit, secondUnit],
    },
  ],
} = student;

console.log(firstUnit);
console.log(secondUnit);
