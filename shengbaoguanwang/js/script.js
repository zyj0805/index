document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".main-header");

  // Handle scroll effect for header
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Optional: Add mobile menu toggle logic here if needed in the future
});