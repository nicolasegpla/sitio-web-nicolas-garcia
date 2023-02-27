window.addEventListener('scroll', () => {
    mobileVersionDropdownMenu.classList.remove('transformYMenuMovil');
});


function menuMobilToggle() {
    mobileVersionDropdownMenu.classList.toggle('transformYMenuMovil');
    location.hash = '';
}
sectionHome1MenuHamburguesa.addEventListener('click', menuMobilToggle);
divMenuDesplegableImgBotonCierre.addEventListener('click', menuMobilToggle);

//funcion para ir a la parte superior de nuestro documento
inicioButton.addEventListener('click', scrollTop);
inicioMobilButton.addEventListener('click', scrollTop);
logoH2.addEventListener('click', scrollTop);
logoFooter.addEventListener('click', scrollTop);
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

contactoButton.addEventListener('click', () => {
    location.hash = '#contacto';
});
proyectosButton.addEventListener('click', () => {
    location.hash = '#proyectos';
});

//navegacion del footer
sobreMiFooter.addEventListener('click', () => {
    location.hash = '#sobre-mi';
});
proyectosFooter.addEventListener('click', () => {
    location.hash = '#proyectos';
});
contactoFooter.addEventListener('click', () => {
    location.hash = '#contacto';
});


//botones de whatsapp
function goToPageWhatsapp() {
    window.open ('https://wa.me/573167578206');
}
buttonSectionHome1.addEventListener('click', goToPageWhatsapp);
buttonWhatsappContact.addEventListener('click', goToPageWhatsapp);
whatsapp.addEventListener('click', goToPageWhatsapp);

//github
function goToPageGithub() {
    window.open ('https://github.com/nicolasegpla');
}
github.addEventListener('click', goToPageGithub);

//instagram
function goToPageInstagram() {
    window.open ('https://www.instagram.com/thisisnicolasp/');
}
instagram.addEventListener('click', goToPageInstagram);

//linkedin
function goToPageLinkedin() {
    window.open ('https://www.linkedin.com/in/frontend-nicolas-garcia/');
}
linkedin.addEventListener('click', goToPageLinkedin);

//botones de skills

function buttonSkillsMore() {
    buttonMoreSkills.style.display = 'none';
    buttonLessSkills.style.display = 'flex';
}
buttonMoreSkills.addEventListener('click', buttonSkillsMore);

function buttonSkillsLess() {
    buttonMoreSkills.style.display = 'flex';
    buttonLessSkills.style.display = 'none';
}
buttonLessSkills.addEventListener('click', buttonSkillsLess);