// Functions
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Alice")); // Hello, Alice

// Functions expressions
const greet = function(name){
    return "Hello, " + name;
}
console.log(greet("Alice"));

// Arrow Functions
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
