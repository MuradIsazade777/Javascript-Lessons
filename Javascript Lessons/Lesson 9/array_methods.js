// Array Methods
// **push()**
// Adds one or more elements to the end of an array.
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]


//  **pop()**
// Removes the last element from an array.
let fruits1 = ["apple", "banana", "orange"];
fruits.pop();
console.log(fruits1); // ["apple", "banana"]


// **unshift()**
// Adds one or more elements to the beginning of an array.
let numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3, 4]


// **shift()**
// Removes the first element from an array.
let numbers1 = [1, 2, 3];
numbers.shift();
console.log(numbers1); // [2, 3]


// **slice()**
// Returns a shallow copy of a portion of an array.
let animals = ["cat", "dog", "lion", "tiger"];
let wild = animals.slice(2);
console.log(wild); // ["lion", "tiger"]


// **splice()**
// Adds/removes items from an array at a specific index.
let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow");
console.log(colors); // ["red", "yellow", "blue"]


// **join()**
// Joins all array elements into a string.
let words = ["Hello", "World"];
console.log(words.join(" ")); // "Hello World"



// **includes()**
// Checks if an array contains a certain value.
let numbers2 = [1, 2, 3, 4];
console.log(numbers2.includes(3)); // true


// **indexOf()**
// Returns the first index of a specified value.
let fruits2 = ["apple", "banana", "orange"];
console.log(fruits2.indexOf("banana")); // 1


// **reverse()**
// Reverses the order of array elements.
let nums = [1, 2, 3];
nums.reverse();
console.log(nums); // [3, 2, 1]


// **forEach()**
// Executes a function for each array element.
let numbers3 = [1, 2, 3];
numbers3.forEach(num => console.log(num * 2));
// 2, 4, 6


// **map()**
// Creates a new array by applying a function to each element.
let numbers4 = [1, 2, 3];
let doubled = numbers4.map(num => num * 2);
console.log(doubled); // [2, 4, 6]


// **filter()**
// Creates a new array with elements that pass a test.
let numbers5 = [10, 15, 20, 25];
let result = numbers5.filter(n => n > 15);
console.log(result); // [20, 25]


// **reduce()**
// Executes a reducer function to produce a single value.
let numbers6 = [1, 2, 3, 4];
let sum = numbers6.reduce((total, num) => total + num, 0);
console.log(sum); // 10


// **find()**
// Returns the first element that matches a condition.
let numbers7 = [5, 10, 15];
let found = numbers7.find(n => n > 7);
console.log(found); // 10


// **some()**
// Checks if at least one element passes the condition.
let numbers8 = [1, 2, 3];
console.log(numbers8.some(n => n > 2)); // true


// **every()**
// Checks if all elements pass the condition.
let numbers9 = [2, 4, 6];
console.log(numbers9.every(n => n % 2 === 0)); // true


// **sort()**
// Sorts the array elements.
let numbers10 = [3, 1, 2];
numbers10.sort();
console.log(numbers10); // [1, 2, 3]


// **length**
// Returns the number of elements in an array.
let fruits3 = ["apple", "banana"];
console.log(fruits3.length); // 2


// **toString()**
// Converts an array to a string.
let fruits4 = ["apple", "banana"];
console.log(fruits4.toString()); // "apple,banana"


// **at()**
// Returns the element at a given index (supports negative indexing).
let numbers11 = [10, 20, 30, 40];
console.log(numbers11.at(-1)); // 40