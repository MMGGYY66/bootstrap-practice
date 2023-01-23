const hamburger = document.querySelector(".hamburger-btn");
const navMenue = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenue.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenue.classList.remove("active");
      box.classList.toggle("d-block");

}));

