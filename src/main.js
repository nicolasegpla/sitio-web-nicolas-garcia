function myFunction() {
    if(mobileVersionDropdownMenu.style.display === 'grid') {
        mobileVersionDropdownMenu.style.display = 'none';
    }else {
        mobileVersionDropdownMenu.style.display = 'none';
    }
}

divMenuDesplegableImgBotonCierre.addEventListener('click', myFunction);
window.addEventListener('scroll', myFunction);

function myFunction2() {
    if(mobileVersionDropdownMenu.style.display === 'none') {
        mobileVersionDropdownMenu.style.display = 'grid';
    }else {
        mobileVersionDropdownMenu.style.display = 'grid';
    }
}

sectionHome1MenuHamburguesa.addEventListener('click', myFunction2);
