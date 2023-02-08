sectionHome1MenuHamburguesa.addEventListener('click', () => {
    mobileVersionDropdownMenu.classList.toggle('transformYMenuMovil');
});

divMenuDesplegableImgBotonCierre.addEventListener('click', () => {
    mobileVersionDropdownMenu.classList.toggle('transformYMenuMovil');
});
window.addEventListener('scroll', () => {
    mobileVersionDropdownMenu.classList.remove('transformYMenuMovil');
});

