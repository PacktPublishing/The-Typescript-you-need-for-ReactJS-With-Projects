/*
    TYPE ALIAS, INTERFACE AND OBJECTS
    - TypeScript allows variable types to be defined separately.
      allows types to be easily shared between different variables/objects
   
      TYPE ALIASES
    - Type Aliases allow defining types with a custom nameT (an Alias).
    - Used for simple types (strings, numbers,...) or more complex, 
        types such as objects and arrays

    INTERFACES
    - Interfaces are similar to type aliases, except they only apply to object types.
*/

// normal js
// let car = {
//   nameT: "Range Rover",
//   price: 100000,
//   isAvailable: true,
// };

// let car1: { nameT: string; price: number; isAvailable: boolean } = {
//   nameT: "Range Rover",
//   price: 100000,
//   isAvailable: true,
// };

// let car2: { nameT: string; price: number; isAvailable: boolean } = {
//   nameT: "BMW X6",
//   price: 100000,
//   isAvailable: true,
// };

// type
// type nameTType = string;
// const first_nameT: nameTType = "Desmond";

// type goneType = boolean;
// const gone: goneType = true;
// type arrType = [nameT:string, age:number]
// const arr:arrType = ["Desmond", 34]

type carType = { nameT: string; price: number; isAvailable: boolean };

let car1: carType = {
  nameT: "Range Rover",
  price: 100000,
  isAvailable: true,
};
let car2: carType = {
  nameT: "BMW X6",
  price: 900000,
  isAvailable: false,
};

// interface
interface carType2 {
  nameT: string;
  price: number;
  isAvailable: boolean;
}
let car3: carType2 = {
  nameT: "Tesla",
  price: 100000,
  isAvailable: true,
};

let { price, isAvailable, nameT } = car1;

console.log(price, nameT, isAvailable);
console.log(car2);
console.log(car3);
