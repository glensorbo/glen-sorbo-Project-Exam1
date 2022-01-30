const menuButtons = document.querySelectorAll(".menu__btn");
const sideMenu = document.querySelector(".sidemenu");

menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    sideMenu.classList.toggle("sidemenu__closed");
  });
});
