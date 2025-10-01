const menuIcon = document.querySelector('#menu-icon-id');
const navbar = document.querySelector('#navBar');
const cvBtn = document.querySelector("#cv");
const cvOverlay = document.querySelector("#cv-overlay");
const closeIcon = document.querySelector("#close-icon-id");
const downloadIcon = document.querySelector("#download-icon-id");
const container = document.querySelector("#container");
const totalCircles = 100;

for (let i = 0; i < totalCircles; i++) {
    const circleContainer = document.createElement("div");
    circleContainer.classList.add("circle-container"); // pour le parent
  
    const circle = document.createElement("div");
    circle.classList.add("circle"); // pour l’enfant
  
    circleContainer.appendChild(circle); // on met le cercle dans le parent
    container.appendChild(circleContainer); // on met le parent dans le container
  }
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
