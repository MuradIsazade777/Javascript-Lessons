---

### 📘 **08-dom (DOM Manipulation)**
```markdown
# DOM Manipulation in JavaScript

The **DOM (Document Object Model)** allows JavaScript to interact with HTML elements.

## Selecting Elements

```js
const heading = document.getElementById("title");
const buttons = document.querySelectorAll(".btn");

//Changing Content
heading.textContent = "Hello World!";

//Adding Event Listeners
const btn = document.querySelector("#clickMe");

btn.addEventListener("click", () => {
  alert("Button clicked!");
});
