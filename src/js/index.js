const hamburgerMenu = document.querySelector(
  '[aria-controls="primary-navigation"]',
);

const closeMenu = document.querySelector(
  '[aria-controls="secondary-navigation"]',
);

const navigation = document.querySelector(".header__navigation");
const navigationList = document.querySelector(".header__navigation-list");

hamburgerMenu.addEventListener("click", () => {
  navigation.style = "display: flex";
  navigationList.style = "display: flex";
});

closeMenu.addEventListener("click", () => {
  navigation.style = "display: none";
});
