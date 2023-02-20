window.addEventListener('scroll', () => {
    mobileVersionDropdownMenu.classList.remove('transformYMenuMovil');
});

function menuMobilToggle() {
    mobileVersionDropdownMenu.classList.toggle('transformYMenuMovil');
}
sectionHome1MenuHamburguesa.addEventListener('click', menuMobilToggle);
divMenuDesplegableImgBotonCierre.addEventListener('click', menuMobilToggle);

//funcion para ir a la parte superior de nuestro documento
inicioButton.addEventListener('click', scrollTop);
inicioMobilButton.addEventListener('click', scrollTop);
logoH2.addEventListener('click', scrollTop);
function scrollTop() {
    location.hash = '#inicio';
    document.documentElement.scrollTop = 0;
}
//navegacion del menu desplegable movil
skillsMobilButton.addEventListener('click', () => {
    location.hash = '#skills';
});
sobreMiMobilButton.addEventListener('click', () => {
    location.hash = '#sobre-mi';
});
serviciosMobilButton.addEventListener('click', () => {
    location.hash = '#servicios';
});
contactoMobilButton.addEventListener('click', () => {
    location.hash = '#contacto';
});
proyectosMobilButton.addEventListener('click', () => {
    location.hash = '#proyectos';
});

//navegacion de la barra de navegacion desktop
skillsButton.addEventListener('click', () => {
    location.hash = '#skills';
});
aboutMeButton.addEventListener('click', () => {
    location.hash = '#sobre-mi';
});
serviciosButton.addEventListener('click', () => {
    location.hash = '#servicios';
});
contactoButton.addEventListener('click', () => {
    location.hash = '#contacto';
});
proyectosButton.addEventListener('click', () => {
    location.hash = '#proyectos';
});


