document.querySelectorAll(".navbar__menu__parent").forEach((acc) => {
  acc.addEventListener("click", () => {
    const accorditionContent = acc.nextElementSibling;

    acc.classList.toggle("active-according");

    if (acc.classList.contains("active-according")) {
      accorditionContent.style.maxHeight =
        accorditionContent.scrollHeight + "px";
    } else {
      accorditionContent.style.maxHeight = 0;
    }
  });
});
