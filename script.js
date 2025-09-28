const menuIcon = document.querySelector('#menu-icon-id');
const navbar = document.querySelector('#navBar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
