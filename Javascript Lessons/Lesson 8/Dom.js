// DOM Manipulation
//? Selecting Elements
const heading = document.getElementById("title");
const buttons = document.querySelectorAll(".btn");

//? Changing Content
heading.textContent = "Hello World!";

//? Adding Event Listeners
const btn = document.querySelector("#clickMe");

btn.addEventListener("click", () => {
  alert("Button clicked!");
});


//?  Selecting an element
//! There are various methods for selecting elements in the DOM:
//* getElementById("id") → selects an element by id only.
//? querySelector("selector") → selects the first element with a CSS selector.
// querySelectorAll("selector") → selects all matching elements (returns a NodeList).

//! For Example:
const title = document.getElementById("title");
const firstParagraph = document.querySelector(".text");
const allParagraphs = document.querySelectorAll("p");


//? Changing the content
//! Used to change the text or HTML inside an element:
//! .innerText → changes only the text part.
//! .innerHTML → can add both HTML and text.
//! .textContent → brings in and changes all the text as it is.

title.innerText = "Hello World!";
firstParagraph.innerHTML = "<b>Bold text</b>";



//? Changing class and style
//! Used to change the design of an element:
//! .classList.add("className") → adds a new class.
//! .classList.remove("className") → removes a class.
//! .classList.toggle("className") → adds a class if it doesn't exist, removes it if it does.
//! .style.property → changes inline CSS.


title.classList.add("highlight");
title.style.color = "red";



//? Creating and deleting elements
//! It is possible to add new elements or delete existing ones:
//! createElement("tag") → creates a new element.
//! appendChild(element) → adds an element.
//! removeChild(element) → removes an element.


const newDiv = document.createElement("div");
newDiv.innerText = "I'm new element!";
document.body.appendChild(newDiv);

document.body.removeChild(newDiv);



//? Working with Attributes
// Used to manage HTML attributes:
// getAttribute("attrName") → returns the value of the attribute.
// setAttribute("attrName", "value") → sets the attribute.
// removeAttribute("attrName") → removes the attribute.

const link = document.querySelector("a");
link.setAttribute("href", "https://google.com");
console.log(link.getAttribute("href"));
link.removeAttribute("target");
