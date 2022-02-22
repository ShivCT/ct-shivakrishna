let value = document.getElementById("heading");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");

decrease.addEventListener("click", function () {
  let currentValue = value.textContent;
  let updateValue = parseInt(currentValue) - 1;
  value.textContent = updateValue;
});

increase.addEventListener("click", function () {
  let currentValue = value.textContent;
  let updateValue = parseInt(currentValue) + 1;
  value.textContent = updateValue;
});

reset.addEventListener("click", function () {
  value.textContent = 0;
});
