/*
    ENUMS
    - An enum is a special "class" that represents a group of constants (unchangeable variables).
    - 2 Types: Numeric(Default) and String Enums
*/

// NUMERIC ENUMS
enum Numbers {
  Zero, // 0
  One, // 1
  Two, // 2
  Three, // 3
}
let num = Numbers.Two;

// enum Elements {
//   Earth = 44,
//   Air, // 45
//   Water, // 46
//   Fire, //47
// }
enum Elements {
  Earth = 44,
  Air = 104,
  Water = 78,
  Fire = 4,
}
let num2 = Elements.Water;

// STRING ENUMS
enum Directions {
  North = "North",
  East = "East",
  West = "West",
  South = "South",
}
let currentDirection = Directions.South;

console.log(num, num2);
console.log(currentDirection);
