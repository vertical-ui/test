const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const body = document.querySelector("body")

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
  body.classList.toggle("body-active")

  
};
mobileNav.addEventListener("click", () => toggleNav());
