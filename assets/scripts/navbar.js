const bars = document.querySelector(".header__icon--bars");
const xmark = document.querySelector(".header__icon--xmark");

const nav = document.querySelector(".navbar");

bars.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    bars.style.display = "none";
    const showXmark = (xmark.style.display = "block");
    if (showXmark) {
      xmark.addEventListener("click", () => {
        nav.classList.remove("active");
        bars.style.display = "block";
        xmark.style.display = "none";
      });
    }
  }
});
