const hamburgerMenu = document.querySelector(
  '[aria-controls="primary-navigation"]',
);

const closeMenu = document.querySelector(
  '[aria-controls="secondary-navigation"]',
);

const navigation = document.querySelector(".header__navigation");
const navigationList = document.querySelector(".header__navigation-list");

const overlay = document.querySelector(".overlay");

const clonseNavigation = () => {
  navigation.style = "display: none";
  overlay.style = "opacity: 0; visibility: hidden;";
};

hamburgerMenu.addEventListener("click", () => {
  navigation.style = "display: flex";
  navigationList.style = "display: flex";
  overlay.style = "opacity: 1; visibility: visible";
});

closeMenu.addEventListener("click", () => {
  clonseNavigation();
});

overlay.addEventListener("click", () => {
  clonseNavigation();
});

window.addEventListener("scroll", () => {
  clonseNavigation();
});
