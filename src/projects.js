//array de objetos con los proyectos a agregar
const projects = [
    {img: src = '/assets/projectsCards/nutricionAnimalCard.png', alt : 'logo html5', h1: 'NUTRICION ANIMAL', description:'En este proyecto estuve a cargo de la recopilacion de informacion, diseño, produccion y despliegue del producto digital nutricionanimal.com.co.', p: 'Ver sitio', id: 'nutricionAnimal'}
];

//funcion para crear las skills en la seccion de skills del home
function createProjects() {
    const data = projects;
    data.forEach(project => {
        const divProject = document.createElement('div');
        divProject.classList.add('section-home-projects__div-root__project');
        sectionHomeProjectsRoot.appendChild(divProject);
        const divProjectImg = document.createElement('img');
        divProjectImg.setAttribute('src', project.img);
        divProjectImg.setAttribute('alt', project.alt);
        divProjectImg.classList.add('section-home-projects__div-root__project__img');
        divProject.appendChild(divProjectImg);
        const divProjectPh1 = document.createElement('p');
        divProjectPh1.classList.add('section-home-projects__div-root__project__p-h1');
        divProject.appendChild(divProjectPh1);
        const divProjectPh2 = document.createElement('p');
        divProjectPh2.classList.add('section-home-projects__div-root__project__p-h2');
        divProject.appendChild(divProjectPh2);
        const buttonCardProject = document.createElement('button');
        buttonCardProject.setAttribute('id',`${project.id}`);
        buttonCardProject.classList.add('section-home-projects__div-root__project__button');
        divProject.appendChild(buttonCardProject);
        const pButtonCardProject = document.createElement('p');
        pButtonCardProject.classList.add('section-home-projects__div-root__project__button__p');
        buttonCardProject.appendChild(pButtonCardProject);

    
        pButtonCardProject.innerText = project.p;
        divProjectImg.innerText = project.img; 
        divProjectPh1.innerText = project.h1;
        divProjectPh2.innerText = project.description; 
    });

    
}
createProjects();

const buttonCardNutricionAnimal = document.querySelector('#nutricionAnimal'); 
buttonCardNutricionAnimal.addEventListener('click', () => {
    window.open('https://nutricionanimal.com.co/');
});

const projectsComplete = document.querySelector('#project-complete');
projectsComplete.innerHTML = projects.length;

const projectProjects = document.querySelector('#project-projects');

function projectOrProjects() {
    if(projects.length === 1) {
        projectProjects.innerHTML = 'Completado';
    }else{
        projectProjects.innerHTML = 'Completados';
    }
}

projectOrProjects();