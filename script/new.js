const search = document.querySelector(".searchIcon");
const searchBox = document.querySelector(".searchBox");

search.addEventListener("click", () => {
  searchBox.classList.toggle("hidden");
});

const loginIcon = document.querySelector(".loginIcon");
const menu = document.querySelector(".menu");
menu.classList.add("hidden");
loginIcon.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
