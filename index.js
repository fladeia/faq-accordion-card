const arrowToggles = document.querySelectorAll(".arrow-toggle");

arrowToggles.forEach((arrowToggle) => {
  arrowToggle.addEventListener("click", () => {
    arrowToggles.forEach((arrowToggle) => {
      arrowToggle.parentNode.children[1].classList.add("answer-toggle")
    })
      arrowToggle.parentNode.children[1].classList.toggle("answer-toggle")
    })
});
