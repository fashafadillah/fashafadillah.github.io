document.querySelectorAll(".home").forEach((link) => {
  if (link.hostname === window.location.hostname) {
    link.classList.add("active");
  }
});
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
