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
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-description');
        const modalDue = document.getElementById('modal-deadline');
        const modalPrio = document.getElementById('modal-priority');
        const modalArr = [modalTitle, modalDesc, modalDue, modalPrio];

        modalArr.forEach(e => {
            if (e == modalPrio) {
                e.value = 'Low';
            } else {
                e.value = '';
            }
        });
        
        const btnSelector = document.querySelector('#submit');

        btnSelector.textContent == 'Create'
        taskForm.classList.toggle('hidden');
        taskForm.classList.toggle('shown');
        modal.classList.toggle('hidden');
        modal.classList.toggle('shown');
    });

})();