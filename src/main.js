//funcion para cerrar automaticamnet el menu movil
function scrollDownMenu() {
    mobileVersionDropdownMenu.classList.add('display');
}
window.addEventListener('scroll', scrollDownMenu);
//funcion para abrir el menu movil
function openMobilMenu() {
    mobileVersionDropdownMenu.classList.remove('display');
}
sectionHome1MenuHamburguesa.addEventListener('click', openMobilMenu);
//funcion para cerra el menu movil manual
function closeMobilMenu() {
    mobileVersionDropdownMenu.classList.add('display');
}
divMenuDesplegableImgBotonCierre.addEventListener('click', closeMobilMenu);