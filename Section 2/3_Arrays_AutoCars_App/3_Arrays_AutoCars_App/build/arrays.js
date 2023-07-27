"use strict";
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
let readOnlyArr = ["One", "Two", "Three"];
let carContainer = document.querySelector("#cars-container");
let addBtn = document.querySelector("#add");
let resetBtn = document.querySelector("#reset");
let input = document.querySelector("input");
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", e => {
    if (input && carContainer) {
        if (input.value.trim().length > 0) {
            carContainer.innerHTML += `
                    <div class="car">
                        <p>${input.value}</p>
                    </div>
            `;
            input.value = "";
        }
        else
            alert("Enter a car name");
    }
});
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", e => {
    if (carContainer) {
        carContainer.innerHTML = `
                    <div class="car">
                        <p>Default Car</p>
                    </div>
            `;
    }
});
