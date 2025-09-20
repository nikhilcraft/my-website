document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  header.style.transition = "all 1s ease";
  header.style.opacity = "0";
  setTimeout(() => {
    header.style.opacity = "1";
  }, 500);
});
