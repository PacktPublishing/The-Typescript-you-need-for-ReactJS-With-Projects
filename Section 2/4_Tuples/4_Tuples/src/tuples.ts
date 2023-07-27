/*
    TUPLES: TYPED ARRAYS
    - A tuple is a typed array 
    - A tuple has pre-defined length and types for each index.
*/

let person: readonly [name: string, age: number, isAlive: boolean] = [
  "Desmond",
  400,
  true,
];
// person.push(9);
// person.push("Perrick");
// person.shift();

// array destructuring
//const [n] = person // get first item(name)
// const [, a] = person; // get second item(age)
const [, , i] = person; // get third item (isAlive)
// const [,a, i] = person; // get second and third items

console.log(person);
console.log(i);
