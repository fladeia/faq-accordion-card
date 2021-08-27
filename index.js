const arrowToggles = document.querySelectorAll(".arrow-toggle");

console.log(arrowToggles);

arrowToggles.forEach((arrowToggle) => {
  arrowToggle.addEventListener("click", () => {
    console.log("Hello");
  });
});

// arrowToggles.addEventListener("click", () => {
//   console.log("hello");
// });
