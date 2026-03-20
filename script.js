const header = document.getElementById("header");
const stickyCTA = document.querySelector(".sticky-cta");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
    stickyCTA.style.display = "flex";
  } else {
    header.classList.remove("scrolled");
    stickyCTA.style.display = "none";
  }
});
