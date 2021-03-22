window.addEventListener("scroll", () => {
  const windowHeight = window.pageYOffset;
  const arrowUp = document.querySelector(".fas");
  if (600 < windowHeight) {
    arrowUp.classList.add("show-link");
  } else {
    arrowUp.classList.remove("show-link");
  }
});

const btn = document.querySelector(".btn");
const navTitles = document.querySelectorAll("#nav-bar li");
const navUl = document.querySelector("#nav-bar ul");

btn.addEventListener("click", () => {
  const navUlHeight = navUl.getBoundingClientRect().height;
  let count = 0;
  for (let i = 0; i < navTitles.length; i++) {
    count += navTitles[i].getBoundingClientRect().height;
  }
  if (navUlHeight > 0) {
    navUl.style.height = 0;
    btn.style.color = "grey";
  } else {
    navUl.style.height = `${count}px`;
    btn.style.color = "black";
  }
  console.log(navUl);
});
visualViewport.addEventListener("resize", function () {
  if (visualViewport.width > 990) {
    navUl.style.height = "88%";
  } else {
    navUl.style.height = 0;
  }
});
