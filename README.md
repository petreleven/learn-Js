# Introduction to JavaScript for Beginners

## Table of Contents
1. [What is JavaScript?](#what-is-javascript)
2. [Setting Up](#setting-up)
3. [Variables: Understanding Scope](#variables-understanding-scope)
   - Challenge: Modify and print your own name & age
4. [Functions: The Heart of JavaScript](#functions-the-heart-of-javascript)
   - Challenge: Create a greeting function
5. [Conditions (if-else): Making Decisions](#conditions-if-else-making-decisions)
   - Challenge: Modify the condition to test different values
6. [Loops: Repeating Actions](#loops-repeating-actions)
   - Challenge: Create a loop that counts from 1 to 10
7. [Objects and Arrays](#objects-and-arrays)
   - Challenge: Create an object to store a character’s stats
8. [DOM Manipulation: Interacting with Web Pages](#dom-manipulation-interacting-with-web-pages)
   - Challenge: Change text when clicking a button
9. [Events: Making Things Happen](#events-making-things-happen)
   - Challenge: Change background color on button click
10. [Understanding JavaScript More Deeply](#understanding-javascript-more-deeply)
   - Projects to Try Out

---

## What is JavaScript?
JavaScript (JS) is a programming language that makes websites interactive. It allows you to add cool features like buttons, animations, and games to web pages.

> "JavaScript is one of the most misunderstood programming languages in the world." — *You Don't Know JS*

## Setting Up
To write JavaScript, all you need is a web browser like Chrome or Firefox. You can write JavaScript inside an HTML file or use the browser console.

### Try This:
1. Open Google Chrome.
2. Right-click anywhere on the page and select **Inspect**.
3. Click on the **Console** tab.
4. Type `alert('Hello, World!');` and press **Enter**.
5. A pop-up will appear with the message **Hello, World!** 🎉

---

## Variables: Understanding Scope
Variables store information like numbers or words. Think of them like boxes where you can keep things.

```js
let name = "Alex"; // A variable storing a name
let age = 13; // A variable storing a number

console.log(name); // This prints "Alex" to the console
console.log(age); // This prints 13 to the console
```

> "Variables are one of the most fundamental aspects of any programming language, yet they are often misunderstood." — *You Don't Know JS*

### Challenge:
Change `name` to your own name and `age` to your own age, then run the code in the console.

---

## Functions: The Heart of JavaScript
Functions are blocks of code that do something when you call them.

```js
function sayHello() {
    console.log("Hello, friend!");
}

sayHello(); // Calls the function and prints "Hello, friend!"
```

> "JavaScript functions are more than just reusable pieces of code. They are the backbone of scope and closure." — *You Don't Know JS*

### Challenge:
Create a function called `greet` that takes a name as an input and prints `Hello, <name>!`.

---

## Conditions (if-else): Making Decisions
Conditions allow your program to make decisions.

```js
let number = 10;

if (number > 5) {
    console.log("The number is big!");
} else {
    console.log("The number is small!");
}
```

> "JavaScript has type coercion, which means comparisons don't always behave the way you expect." — *You Don't Know JS*

### Challenge:
Change the number to `3` and see what happens.

---

## Loops: Repeating Actions
Loops repeat code multiple times.

```js
for (let i = 1; i <= 5; i++) {
    console.log("Loop number: " + i);
}
```

> "Understanding how loops work internally helps you write more efficient code." — *You Don't Know JS*

### Challenge:
Make a loop that counts from 1 to 10.

---

## Objects and Arrays
Objects store multiple pieces of related data in a single variable. Arrays store lists of values.

```js
let player = {
    name: "Alex",
    score: 100,
    level: 2
};
console.log(player.name); // Output: Alex
```

### Challenge:
Create an object to store a character’s stats (name, health, strength).

---

## DOM Manipulation: Interacting with Web Pages
JavaScript can change content on a web page.

```js
document.body.innerHTML = "Hello, JavaScript!";
```

### Challenge:
Write JavaScript to change text inside a `<p>` tag when a button is clicked.

---

## Events: Making Things Happen
Events let you make interactive elements.

```js
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
```

### Challenge:
Change the background color of the page when a button is clicked.

---

## Understanding JavaScript More Deeply
JavaScript is a powerful language, but to master it, you need to understand its quirks and features like closures, hoisting, and prototypal inheritance.

### Projects to Try Out
- **Basic Calculator**: A simple web-based calculator
- **To-Do List**: Add and remove tasks dynamically
- **Color Changer**: Click a button to change the background color
- **Number Guessing Game**: The computer picks a random number, and the user has to guess it

  
**Interactive Quiz App (js driven)**
Create multiple-choice questions
Track and display score
Add a timer
Store high scores in local storage

