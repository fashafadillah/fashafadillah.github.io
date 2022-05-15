const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const btnTabs = document.querySelector(".btn-tabs");
const btn = document.querySelector(".menu-section ul li");

btnTabs.addEventListener("click", function () {
  btn.classList.toggle("active");
});
