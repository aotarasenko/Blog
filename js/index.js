const menuBurger = document.querySelector('.menu__burger');
const navMain = document.querySelector('.blog__navigation');



menuBurger.addEventListener('click', (Event) => {
    navMain.classList.toggle('visible');
});