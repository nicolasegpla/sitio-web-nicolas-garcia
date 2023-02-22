//array de objetos con las tegnologias a agregar
const skills = [
   {img: src = '/assets/tech/html-5 1.svg', alt : 'logo html5', h1: 'HTML5', h2:'Diseño estructural'},
   {img: src = '/assets/tech/js-1.svg', alt : 'logo JavaScript', h1: 'JavaScript', h2:'Lenguage de desarrollo'},
   {img: src = '/assets/tech/css-3-1.svg', alt : 'logo css3', h1: 'CSS3', h2:'Estilos'},
   {img: src = '/assets/tech/sass-1.svg', alt : 'logo Sass', h1: 'Sass', h2:'Preprocesador css'},
   {img: src = '/assets/tech/figma.svg', alt : 'logo figma', h1: 'Figma', h2:'Diseño UI'},
   {img: src = '/assets/tech/wordpress-1.svg', alt : 'logo wordpress', h1: 'Wordpress', h2:'Web development'}
];
//funcion para crear las skills en la seccion de skills del home
function createSkills() {
    const data = skills;
    data.forEach(skill => {
        const divSkill = document.createElement('div');
        divSkill.classList.add('section-home-skills__div-root__skill');
        sectionHomeSkillsRoot.appendChild(divSkill);
        const divSkillImg = document.createElement('img');
        divSkillImg.setAttribute('src', skill.img);
        divSkillImg.setAttribute('alt', skill.alt);
        divSkillImg.classList.add('section-home-skills__div-root__skill__img');
        divSkill.appendChild(divSkillImg);
        const divSkillPh1 = document.createElement('p');
        divSkillPh1.classList.add('section-home-skills__div-root__skill__p-h1');
        divSkill.appendChild(divSkillPh1);
        const divSkillPh2 = document.createElement('p');
        divSkillPh2.classList.add('section-home-skills__div-root__skill__p-h2');
        divSkill.appendChild(divSkillPh2);
    
        
        divSkillImg.innerHTML = skill.img; 
        divSkillPh1.innerHTML = skill.h1;
        divSkillPh2.innerHTML = skill.h2; 
    });

    
}
createSkills();

const skillsMore = [
    {img: src = '/assets/tech/git-1.svg', alt : 'logo html5', h1: 'Git', h2:'Control de versiones'},
    {img: src = '/assets/tech/github-sign-1.svg', alt : 'logo JavaScript', h1: 'GitHub', h2:'Desarrollo colavorativo'}
 ];

function moreSkillsrender() {
    const data = skillsMore;
    data.forEach(skill => {
        const divSkill = document.createElement('div');
        divSkill.classList.add('section-home-skills__div-root__skill');
        sectionHomeSkillsRoot.appendChild(divSkill);
        const divSkillImg = document.createElement('img');
        divSkillImg.setAttribute('src', skill.img);
        divSkillImg.setAttribute('alt', skill.alt);
        divSkillImg.classList.add('section-home-skills__div-root__skill__img');
        divSkill.appendChild(divSkillImg);
        const divSkillPh1 = document.createElement('p');
        divSkillPh1.classList.add('section-home-skills__div-root__skill__p-h1');
        divSkill.appendChild(divSkillPh1);
        const divSkillPh2 = document.createElement('p');
        divSkillPh2.classList.add('section-home-skills__div-root__skill__p-h2');
        divSkill.appendChild(divSkillPh2);
    
        
        divSkillImg.innerHTML = skill.img; 
        divSkillPh1.innerHTML = skill.h1;
        divSkillPh2.innerHTML = skill.h2; 
    });
}

buttonMoreSkills.addEventListener('click',moreSkillsrender);
buttonLessSkills.addEventListener('click', () => {
    sectionHomeSkillsRoot.innerHTML = '';
    createSkills();
});