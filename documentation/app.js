window.addEventListener("scroll", () => {
  const windowHeight = window.pageYOffset;
  const arrowUp = document.querySelector(".fas");

  if (300 < windowHeight) {
    arrowUp.classList.add("show-link");
  } else {
    arrowUp.classList.remove("show-link");
  }
});