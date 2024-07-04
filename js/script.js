// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// When the hamburger menu is clicked
hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

//togel clas active search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = () => {
  searchForm.classList.toggle("active");
};
// Click outside the sidebar to hide the nav
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
