"use strict";
function goal() {
    console.log("scored a goal");
}
const goal2 = () => {
    console.log("goal #2...");
};
function voiding() {
    console.log("voiding...");
}
const printName = () => {
    return "printing...";
};
function add_prototype(a, b) {
    console.log(a + b);
}
function addTwo(a, b) {
    return a + b;
}
let id = "abccd";
id = true;
function printCode(code) {
    console.log(`Your code is ${code}`);
}
function printCodeCaps(code) {
    if (typeof code === "string")
        console.log(`Your code is ${code.toUpperCase()}`);
    else
        console.log(`Your code is ${code.toFixed(2)}`);
}
let person1 = {
    first_name: "Joel",
    last_name: "Noel",
    age: 32,
};
let person2 = {
    first_name: "Desmond",
    last_name: "Oben",
    age: 25,
    cars: ["Range Rover", "Tesla"],
};
function addThree(x, y, z) {
    return x + y + (z || 0);
}
function addThreeDefault(x, y, z = 0) {
    return x + y + z;
}
const typedFunc = (a, ...rest) => {
    console.log(a, rest);
    return a + rest.reduce((acc, n) => acc + n, 0);
};
console.log(typedFunc(1));
console.log(typedFunc(1, 2, 3, 4, 5));
