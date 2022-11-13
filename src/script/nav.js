const nav = document.querySelector('nav');

let navDirectory = (() => {
    let navNames = ['Home', 'All Projects', 'Completed', 'New Project'];

    navNames.forEach(link => {
        const name = document.createElement('h2');
        const linkLowerCase = link.toLowerCase();
        name.innerHTML = link;
        name.setAttribute('id', linkLowerCase)
        nav.append(name);
    });
})();

let projectPopUp = (() => {
    const newProj = document.getElementById('new project');
    
    newProj.addEventListener('click', () => {
        const taskForm = document.querySelector('.task-creator');
        taskForm.classList.toggle('hidden-form');
    })
})();