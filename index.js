const questions = document.querySelectorAll(".questions");

// function resetArrowToggle() {
//   questions.forEach((arrowToggle) => {
//     arrowToggle.parentNode.children[1].classList.add("answer-toggle");
//     arrowToggle.style.transform = "scaleY(1)";
//   });
// }

questions.forEach((question) => {
  question.addEventListener("click", () => {
    // resetArrowToggle();
    question.lastElementChild.lastElementChild.classList.toggle(
      "answer-toggle"
    );
    question.firstElementChild.firstElementChild.classList.toggle(
      "answer-toggle-font"
    );
    question.lastElementChild.children[0].classList.toggle("arrow-toggle-up");
  });
});
