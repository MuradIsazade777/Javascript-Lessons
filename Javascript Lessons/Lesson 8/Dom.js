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
