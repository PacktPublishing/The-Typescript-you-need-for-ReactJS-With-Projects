/*  ARRAYS
    - let variableName: type[] = [values]
    - we can make arrays readonly: won't be able to add or remove items
*/

let numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6);

let readOnlyArr: readonly string[] = ["One", "Two", "Three"];

// console.log(numbers);
// console.log(readOnlyArr[2]);

// AUTO CARS APP

let carContainer = document.querySelector("#cars-container");
let addBtn = document.querySelector("#add");
let resetBtn = document.querySelector("#reset");
let input = document.querySelector("input");

// add car
addBtn?.addEventListener("click", e => {
  if (input && carContainer) {
    if (input.value.trim().length > 0) {
      carContainer.innerHTML += `
                    <div class="car">
                        <p>${input.value}</p>
                    </div>
            `;
      input.value = "";
    } else alert("Enter a car name");
  }
});

// reset car
resetBtn?.addEventListener("click", e => {
  if (carContainer) {
    carContainer.innerHTML = `
                    <div class="car">
                        <p>Default Car</p>
                    </div>
            `;
  }
});
