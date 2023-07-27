/*  TYPES (SIMPLE AND SPECIAL TYPES)
    There are three main simple types or primitives in JavaScript and TypeScript.
    boolean - true or false values
    number - whole numbers and floating point values
    string - text values like "TypeScript Rocks"
*/

// normal js
let number = 4; // implicit typing
let first_name: string = "Desmond"; // explicit typing
let isAlive: boolean = true;
let title = "Counter App";

/* 
TypeScript has special types that may not refer to any specific type of data.
    - any: disables typechecking and allows all types to be used
    - unknown: safer option to any, best used when we don't know the type of the variable
    - never: rarely used as it simply throws an error when it's defined
    - undefined: same as javascript variable with an undefined value
    - null: same as javascript variable with a null value
*/

// COUNTER APP

let h1El = document.querySelector("#title");
if (h1El) h1El.innerHTML = title.toUpperCase();

let counterValue = document.querySelector("#counterValue");

let countDownBtn = document.querySelector("#countDown");
let countUpBtn = document.querySelector("#countUp");
let resetBtn = document.querySelector("#reset");
let count = 0;

countDownBtn?.addEventListener("click", e => {
  count--; // count = count(old) - 1
  if (counterValue) counterValue.innerHTML = count.toString();
});
resetBtn?.addEventListener("click", e => {
  count = 0; // reset
  if (counterValue) counterValue.innerHTML = count.toString();
});
countUpBtn?.addEventListener("click", e => {
  count++; // count = count(old) - 1
  if (counterValue) counterValue.innerHTML = count.toString();
});
