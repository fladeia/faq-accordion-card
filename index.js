const arrowToggles = document.querySelectorAll(".arrow-toggle");
const answers = document.querySelectorAll(".answer")

arrowToggles.forEach((arrowToggle) => {
  arrowToggle.addEventListener("click", (e) => {
    console.log(arrowToggle.parentNode.children[1])
    arrowToggle.parentNode.children[1].classList.toggle("answer-toggle")
  });
});

// answers.forEach((answer) => {
//   answer.addEventListener("click", () => {
//     answer.classList.toggle("answer-toggle")
//   })
// })
