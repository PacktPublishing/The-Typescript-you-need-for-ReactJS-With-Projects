"use strict";
let number = 4;
let first_name = "Desmond";
let isAlive = true;
let title = "Counter App";
let h1El = document.querySelector("#title");
if (h1El)
    h1El.innerHTML = title.toUpperCase();
let counterValue = document.querySelector("#counterValue");
let countDownBtn = document.querySelector("#countDown");
let countUpBtn = document.querySelector("#countUp");
let resetBtn = document.querySelector("#reset");
let count = 0;
countDownBtn === null || countDownBtn === void 0 ? void 0 : countDownBtn.addEventListener("click", e => {
    count--;
    if (counterValue)
        counterValue.innerHTML = count.toString();
});
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", e => {
    count = 0;
    if (counterValue)
        counterValue.innerHTML = count.toString();
});
countUpBtn === null || countUpBtn === void 0 ? void 0 : countUpBtn.addEventListener("click", e => {
    count++;
    if (counterValue)
        counterValue.innerHTML = count.toString();
});
