"use strict";
const ctaButton = document.querySelector(".cta-button");
const inputs = document.querySelectorAll(".input-container");
const inputBoxes = document.querySelectorAll(".form-el");

const inputCorupted = function (input) {
  input.style.border = " 2px solid hsl(0, 100%, 74%)";
  input.setAttribute("placeholder", "");
  input.classList.add("error-icon");
  input.nextElementSibling.classList.add("error-msg__active");
};

ctaButton.addEventListener("click", function (e) {
  e.preventDefault();
  inputBoxes.forEach((input, i) => {
    if (input.value === "") {
      inputCorupted(input);
      if (input.type === "email") {
        input.setAttribute("placeholder", "email@example/com");
        input.style.color = "orangered";
      }
    }
  });
});
