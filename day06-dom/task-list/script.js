//-> Selecting Elements (Guided Practice)

//-> Step 1 - Select by ID:

// const title = document.getElementById("title");
// console.log(title);

//-> Step 2 - Select by class:

// const message = document.querySelector(".message"); //! Watch out for the . otherwise is null.
// console.log(message);

//-> Step 3 - Select multiple elements:

// const paragraphs = document.querySelectorAll("p");
// console.log(paragraphs);

//-> Step 4 - Modify text:

// title.textContent = "DOM Manipulation Day!";
// message.textContent = "Let's learn DOM like a pro";

//-> 10‑minute drill
//-> Write:
//-> - select an element by ID
//-> - select an element by class
//-> - select all elements of a tag
//-> - change text of at least 2 elements

//-> - select an element by ID
// const message = document.getElementById('message');
// console.log(message);

//-> - select an element by class
// const title = document.getElementsByClassName('title');
// console.log(title);

//-> - select all elements of a tag
// const allHeadings = document.querySelectorAll('h1');
// console.log(allHeadings);

//-> - change text of at least 2 elements

// Change the #message element
// message.textContent = 'Updated via ID Selection';

// Change the h1 tag
// const heading = document.getElementById("heading");
// console.log(heading);
// heading.textContent = "Heading updated via ID Selection"

//-> Editing Styles & Attributes (Guided Practice)

//-> Change styles:

const title = document.querySelector(".title");
title.style.color = "blue";
title.style.fontSize = "64px";

//-> Add/remove/toggle classes:

const message = document.getElementById("message");
message.classList.add("highlight");
// message.classList.remove("highlight");
message.classList.toggle("active");

//-> Set/get attributes:

title.setAttribute("data-level", "beginner");
console.log(title.getAttribute("data-level"));

//-> 10‑minute drill
//-> Write:
//-> - change color of an element
//-> - add a class
//-> - remove a class
//-> - toggle a class
//-> - add a custom attribute

// const info = document.getElementById("info");

//-> - change color of an element

// info.style.color = "green";

//-> - add a class

// info.classList.add("classAdded");

//-> - remove a class

// info.classList.add("anotherClassAdded");
// info.classList.remove("anotherClassAdded");

//-> - toggle a class

// info.classList.toggle("active");

//-> - add a custom attribute

// info.setAttribute("info", "general");
// console.log(info.getAttribute("info"));

//-> Creating & Removing Elements (Guided Practice)

//-> Create an element:

// const new__item = document.createElement("p");
// new__item.textContent = "I was created with JS";

//-> Append:

// document.body.appendChild(new__item);

//-> Prepend:

// document.body.prepend(new__item);

//-> Insert before/after:

// title.after(new__item)

//-> Remove:

// new__item.remove();

//-> 10‑minute drill
//-> Write:
//-> - create 3 elements
//-> - append them
//-> - remove one
//-> - insert one before another element

//-> - create 3 elements

// const first__element = document.createElement("h3");
// const second__element = document.createElement("h2");
// const third__element = document.createElement("h1");
// first__element.textContent = "I am the first element";
// second__element.textContent = "I am the second element";
// third__element.textContent = "I am the third element";

//-> - append them

// document.body.appendChild(first__element);
// document.body.appendChild(second__element);
// document.body.appendChild(third__element);

//-> - remove one

// first__element.remove()

//-> - insert one before another element

// third__element.after(second__element);

//-> Event Listeners (Guided Practice)

// Added to the HTML:
// <button id="btn">Click me</button>

//-> Select the button:

// const btn = document.getElementById("btn");

//-> Click Event:

// btn.addEventListener("click", () => {
//     console.log("Button Clicked");
// })

//-> Change text on click:

// btn.addEventListener("click", () => {
//     message.textContent = "Button was clicked!";
// })

//-> Toggle class on click:

// btn.addEventListener("click", () => {
//     message.classList.toggle("active");
// })

//-> 10‑minute drill
//-> Write events for:
//-> - click
//-> - mouseover
//-> - mouseout
//-> - double click

// Added HTML:
// <button id="btn__secondary">Click me</button>
// <p id="text__test">I am not clicked yet!</p>

const btn__secondary = document.getElementById("btn__secondary");
const text__test = document.getElementById("text__test");

//-> - click

btn__secondary.addEventListener("click", () => {
  console.log("Button Clicked");
  text__test.textContent = "I have been clicked!";
});

//-> - mouseover

btn__secondary.addEventListener("mouseover", () => {
  btn__secondary.style.color = "orange";
  text__test.style.fontSize = "64px";
});

//-> - mouseout

btn__secondary.addEventListener("mouseout", () => {
  btn__secondary.style.color = "black";
  text__test.style.fontSize = "16px";
});

//-> - double click

btn__secondary.addEventListener("dblclick", () => {
  text__test.textContent = "Double click detected";
});

//-> Forms & Input Handling (Guided Practice)

//-> Select elements:

const name__input = document.getElementById("name__input");
const submit__btn = document.getElementById("submit__btn");
const output = document.getElementById("output");

//-> Handle input:

submit__btn.addEventListener("click", () => {
  const value = name__input.value;
  output.textContent = `Hello, ${value}`;
  //-> Clear input:
  name__input.value = ""; //? Clear input. Note: The placeholder still remains.
});

//-> 10‑minute drill
//-> Write:
//-> - read input
//-> - display it
//-> - clear input
//-> - show error if empty
