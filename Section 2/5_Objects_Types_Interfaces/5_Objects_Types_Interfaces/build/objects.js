"use strict";
let car1 = {
    nameT: "Range Rover",
    price: 100000,
    isAvailable: true,
};
let car2 = {
    nameT: "BMW X6",
    price: 900000,
    isAvailable: false,
};
let car3 = {
    nameT: "Tesla",
    price: 100000,
    isAvailable: true,
};
const { price, isAvailable, nameT } = car1;
console.log(price, nameT, isAvailable);
console.log(car2);
console.log(car3);
