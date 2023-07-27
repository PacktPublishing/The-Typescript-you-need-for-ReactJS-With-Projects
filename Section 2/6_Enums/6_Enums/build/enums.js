"use strict";
var Numbers;
(function (Numbers) {
    Numbers[Numbers["Zero"] = 0] = "Zero";
    Numbers[Numbers["One"] = 1] = "One";
    Numbers[Numbers["Two"] = 2] = "Two";
    Numbers[Numbers["Three"] = 3] = "Three";
})(Numbers || (Numbers = {}));
let num = Numbers.Two;
var Elements;
(function (Elements) {
    Elements[Elements["Earth"] = 44] = "Earth";
    Elements[Elements["Air"] = 104] = "Air";
    Elements[Elements["Water"] = 78] = "Water";
    Elements[Elements["Fire"] = 4] = "Fire";
})(Elements || (Elements = {}));
let num2 = Elements.Water;
var Directions;
(function (Directions) {
    Directions["North"] = "North";
    Directions["East"] = "East";
    Directions["West"] = "West";
    Directions["South"] = "South";
})(Directions || (Directions = {}));
let currentDirection = Directions.South;
console.log(num, num2);
console.log(currentDirection);
