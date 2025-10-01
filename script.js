const menuIcon = document.querySelector('#menu-icon-id');
const navbar = document.querySelector('#navBar');
const cvBtn = document.querySelector("#cv");
const cvOverlay = document.querySelector("#cv-overlay");
const closeIcon = document.querySelector("#close-icon-id");
const downloadIcon = document.querySelector("#download-icon-id");


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

cvBtn.addEventListener('click', () => {
    cvOverlay.classList.add('active');
});

cvOverlay.addEventListener('click', (e) =>{
    if(e.target === cvOverlay) {
        cvOverlay.classList.remove('active');
    }
});
