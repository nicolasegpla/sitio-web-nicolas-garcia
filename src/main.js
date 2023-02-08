window.addEventListener('scroll', () => {
    mobileVersionDropdownMenu.classList.remove('transformYMenuMovil');
});

function menuMobilToggle() {
    mobileVersionDropdownMenu.classList.toggle('transformYMenuMovil');
}
sectionHome1MenuHamburguesa.addEventListener('click', menuMobilToggle);
divMenuDesplegableImgBotonCierre.addEventListener('click', menuMobilToggle);