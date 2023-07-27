/*
    FUNCTIONS AND UNION | (OR) TYPES

    FUNCTIONS
    - For functions you focus on typing the 
    1. Parameter
    2. Return value

    UNION
    - Union types are used when a value can be more than a single type 
      e.g string or number
 */

// normally in js
function goal() {
  console.log("scored a goal");
}
const goal2 = () => {
  console.log("goal #2...");
};

// explicitely define the return type
function voiding(): void {
  console.log("voiding...");
}
const printName = (): string => {
  return "printing...";
};
// console.log(printName());

// explicitely type parameters
function add_prototype(a: number, b: number) {
  console.log(a + b);
}
// add_prototype(2, 5);

// bring typing return value and parameters together
function addTwo(a: number, b: number): number {
  return a + b;
}
// console.log(addTwo(2, 3));

// UNION (|) OR
let id: number | string | boolean = "abccd";
id = true;

function printCode(code: string | number) {
  console.log(`Your code is ${code}`);
}
// printCode(1234);
// printCode("abcd");

function printCodeCaps(code: number | string) {
  if (typeof code === "string")
    console.log(`Your code is ${code.toUpperCase()}`);
  else console.log(`Your code is ${code.toFixed(2)}`);
}
// printCodeCaps("abcd");
// printCodeCaps(123.5678);

// optional parameters and optional object keys
type personType = {
  first_name: string;
  last_name: string;
  age: number;
  cars?: string[];
};
let person1: personType = {
  first_name: "Joel",
  last_name: "Noel",
  age: 32,
};
let person2: personType = {
  first_name: "Desmond",
  last_name: "Oben",
  age: 25,
  cars: ["Range Rover", "Tesla"],
};

function addThree(x: number, y: number, z?: number): number {
  return x + y + (z || 0);
}
// console.log(addThree(2, 3));
// console.log(addThree(2, 3, 8));

// functions with default params
function addThreeDefault(x: number, y: number, z: number = 0): number {
  return x + y + z;
}
// console.log(addThreeDefault(8, 3));
// console.log(addThreeDefault(12, 4, 8));

type funcType = (a: number, ...rest: number[]) => void;

const typedFunc: funcType = (a, ...rest) => {
  console.log(a, rest);
  return a + rest.reduce((acc, n) => acc + n, 0);
};
console.log(typedFunc(1));
console.log(typedFunc(1, 2, 3, 4, 5));
