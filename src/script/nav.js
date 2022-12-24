const nav = document.querySelector('nav');

let navDirectory = (() => {
    let navNames = ['Home', 'All Projects', 'New Project'];

    navNames.forEach(link => {
        const name = document.createElement('h2');
        const linkLowerCase = link.toLowerCase();
        name.innerHTML = link;
        name.setAttribute('id', linkLowerCase)
        nav.append(name);
    });
})();

let newProjEvent = (() => {
    const newProj = document.getElementById('new project');
    
    newProj.addEventListener('click', () => {
        const modal = document.querySelector('.project-modal');
        const taskForm = document.querySelector('.task-creator');
        taskForm.classList.toggle('hidden');
        taskForm.classList.toggle('shown');
        modal.classList.toggle('hidden');
        modal.classList.toggle('shown');
    });

})();

//gh-pages