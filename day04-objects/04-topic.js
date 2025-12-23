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

// const student = {
//   nombre: "Javier",
//   age: 38,
//   countryOrigin: "Spain",
//   diploma: {
//     type: "Development",
//     isEnrolled: true,
//     currentTerm: 4,
//     units: {
//       term_1: ["Cyber", "IT Essentials", "IP"],
//       term_2: ["Design", "Markup", "Lead"],
//       term_3: ["Programming", "Match ICT", "Databases"],
//     },
//   },
// };

// console.log(student.diploma.units.term_1[1]); //= Output: IT Essentials
// console.log(student.diploma.units.term_1); //= Output: [ 'Cyber', 'IT Essentials', 'IP' ]
// console.log(student.nombre); //= Output: Javier
// console.log(nombre); //= Output: Javier

//-> Destructure 3 properties + renaming the three of them:

// const { nombre: nombre_1 } = student;
// const { age: isAdult } = student;
// const { countryOrigin: continent } = student;

//-> Destructure 1 nested property + renaming:

// const {
//   diploma: { type: subType },
// } = student;

//-> Destructure 1 array inside an object + renaming:

// const {
//   diploma: {
//     units: {
//       term_1: [CyberSecurity],
//     },
//   },
// } = student;

// console.log(CyberSecurity);

//? Note:
//? - -----
//? - Code Example:
//? - -----
//? - const student = {
//? - nombre: "Javier";
//? - }
//? - -----
//? - const { nombre } = student
//? - “Take the property nombre from the object student and assign it to a new variable called nombre.”
//? - -----
//? - Which is exactly like this...
//? - const nombre = student.nombre
//? - In every destructuring case, the = is required because you are assigning values.
//? - If I want to rename the variable while destructuring then...
//? - const { nombre: new_variable_name_here } = student

//-> Updating Objects (Mutable vs Immutable)

//-> Step 1 — Mutable update:

// const car = { brand: "Toyota", year: 2020 };
// car.year = 2021;
// console.log(car);

//-> Step 2 — Immutable update (React‑style):

// const updatedCar = { ...car, year: 2022 };
// console.log(updatedCar);

//-> Step 3 — Add property immutably:

// const carWithColour = { ...car, colour: "blue" };
// console.log(carWithColour);

//-> Step 4 — Remove property immutably:

// const { year, ...carWithoutYear } = car; //? This example is using rest syntax...
// console.log(carWithoutYear); //? carWithoutYear is a variable, and the value stored inside it is an object.

//->  ------------------------------------------------------------
//-> Your 10‑minute drill
//-> - Update an object mutably
//-> - Update it immutably
//-> - Add a property immutably
//-> - Remove a property immutably
//->  ------------------------------------------------------------

//-> - Update an object mutably

const diploma = {
  yearStarted: 2025,
  yearFinished: 2026,
  specialty: "Development",
  daysOfClass: 3,
};

// diploma.daysOfClass = 5;

// console.log(diploma);

//-> - Update it immutably

const daysOfClassUpdated = (diploma.daysOfClass = 5);

// console.log(diploma.daysOfClass);
// console.log(daysOfClassUpdated);

//-> - Add a property immutably

// const diplomaUpdated = {...diploma, isPassed: true};
// console.log(diplomaUpdated);

//-> - Remove a property immutably

// const {yearStarted, ...diplomaUpdated} = diploma;
// console.log(diplomaUpdated);

//? Note - Remove a property immutably:
//? - -----
//? - Explained:
//? - -----
//? - You are removing yearStarted from the object without mutating the original,
//? - using REST syntax to collect the remaining properties into a new object.
//? - -----

//? -  1. Object destructuring happens:
//? - JavaScript looks inside the diploma object and extracts the property yearStarted.

//? -  2. REST syntax collects the remaining properties:
//? - ...diplomaUpdated gathers all other properties (everything except yearStarted) into a new object.

//? -  3. You now have an immutable “copy without a property”:
//? - - diploma → unchanged
//? - - diplomaUpdated → a new object without yearStarted

//-> JSON.parse & JSON.stringify

//-> Step 1 — Convert object → JSON string:

// const user = {
//   name: "Javier",
//   age: 38,
//   role: "Admin"
// };

// const json = JSON.stringify(user)
// console.log(json);

//-> Step 2 — Convert JSON string → object:

// const parsed = JSON.parse(json);
// console.log(parsed);

//-> Step 3 — Realistic example:

// const apiResponse = '{"id":1,"name":"Javier","role":"IT Manager"}'
// const data = JSON.parse(apiResponse)
// console.log(data.name)

//->  ------------------------------------------------------------
//-> Your 10‑minute drill
//-> - Convert an object to JSON
//-> - Convert JSON back to object
//-> - Access nested values
//->  ------------------------------------------------------------

//-> - Object:

// const car = {
//   brand: "Mazda",
//   model: "Neo",
//   year: 2016,
// };

// console.log(car);

//-> - Convert an object to JSON

// const car_json = JSON.stringify(car);
// console.log(car_json);

//-> - Convert JSON back to object

// const car_json_parsed = JSON.parse(car_json);
// console.log(car_json_parsed);

//-> - Access nested values

// console.log(car_json_parsed.brand);

//-> ------------------------------------------------------------
//-> Deconstruction Drill (Your Signature Style)

//-> Base snippet:
//-> const book = {
//->   title: 'Clean Code',
//->   author: { first: 'Robert', last: 'Martin' },
//->   pages: 464
//-> }

//-> Break into 10 micro‑exercises:
//-> - Access title
//-> - Access author.first
//-> - Add a new property
//-> - Update pages
//-> - Remove pages immutably
//-> - Destructure title
//-> - Destructure author.last
//-> - Convert to JSON
//-> - Parse JSON back
//-> - Create a new object with updated title (immutable)
//-> This locks in everything.
//-> ------------------------------------------------------------

// let book = {
//   title: "Clean Code",
//   author: { first: "Robert", last: "Martin" },
//   pages: 464,
// };

//-> - Access title

// console.log(book.title);

//-> - Access author.first

// console.log(book.author.first);

//-> - Add a new property

// book = { ...book, year: 2015 };
// console.log(book);

//-> - Update pages

// book.pages = 500;
// console.log(book);

//-> - Remove pages immutably

// let {pages, ...bookUpdatedPages} = book;
// console.log(bookUpdatedPages);

//-> - Destructure title

// let {title} = book;
// console.log(title);

//-> - Destructure author.last

// let {author: {last}} = book;
// console.log(last);

//-> - Convert to JSON

// let json = JSON.stringify(book);
// console.log(json);

//-> - Parse JSON back

// let json_parsed_back = JSON.parse(json);
// console.log(json_parsed_back);

//-> - Create a new object with updated title (immutable)

// Deep Clone Version 1 — structuredClone() (best modern option)
// let deepClone = structuredClone(book);
// deepClone.author = { ...deepClone.author, first: "Javier", last: "Bautista" };
// console.log(deepClone);

//! Safest
//! Handles nested objects
//! Handles arrays, Dates, Maps, Sets
//! No shared references
//! Requires modern browsers / Node 17+

// Deep Clone Version 2 — JSON method (simple & fast)
// let deepClone = JSON.parse(JSON.stringify(book));
// deepClone.author.last = "Changed";
// console.log(deepClone);
// console.log(book);

//! Works everywhere
//! Fully independent clone
//! Loses functions, Dates, undefined, Symbols
//! Not suitable for complex objects

//-> ------------------------------------------------------------
//-> Mini Project: “Library Manager (Objects Version)”
//-> Create a file: `library-manager.js`

//-> Requirements:
//-> - Create an array of book objects
//-> - Add a new book immutably
//-> - Remove a book immutably
//-> - Update a book immutably
//-> - Find a book by ID
//-> - Filter books by page count
//-> - Convert the entire library to JSON
//-> - Parse it back

//-> Bonus:
//-> Use `console.table()` to display the library.
//-> ------------------------------------------------------------

//-> - Create an array of book objects

const bookInventory = [
  { id: 0, title: "Fire", yearPublished: 2025 },
  { id: 1, title: "Water", yearPublished: 2025 },
  { id: 2, title: "Wind", yearPublished: 2025 },
  { id: 3, title: "Nature", yearPublished: 2025 },
  { id: 4, title: "Sand", yearPublished: 2025 },
  { id: 5, title: "War", yearPublished: 2025 },
];

console.log(bookInventory);

//-> - Add a new book immutably

const bookInventoryUpdated = [...bookInventory, {id: 3, title: "Peace", yearPublished: 2025}];
console.log(bookInventoryUpdated);



