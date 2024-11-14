"use strict";

export default () => {
  const burgerButton = document.querySelector("#burger-btn");
  const elementsToHide = document.querySelectorAll("[data-hide]");

  burgerButton.addEventListener("click", (e) => {
    elementsToHide.forEach((element) => {
      element.style.display =
        element.style.display === "none" ? "block" : "none";
    });
  });
};
