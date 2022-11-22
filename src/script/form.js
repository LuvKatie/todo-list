import { Project, projectList, projectDOM } from "./mainContent";

const body = document.querySelector('body');

let formModal = (() => {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'hidden');
    body.append(modal);

    window.onclick = function(e) {
        if (e.target == modal) {
            const taskForm = document.querySelector('.task-creator');
            taskForm.classList.toggle('hidden');
            taskForm.classList.toggle('shown');
            modal.classList.toggle('hidden');
            modal.classList.toggle('shown');
        }
    }
})();

let formLayout = (() => {
    const modalSelect = document.querySelector('.modal');
    const form = document.createElement('form');
    form.classList.add('task-creator', 'hidden');
    modalSelect.append(form);
})();


const form = document.querySelector('.task-creator');

let formContent = (() => {
    // Array containing all inputs and forEach loop to create and append to form
    const formNames = ['title', 'description', 'deadline'];
    formNames.forEach(name => {
        const label = document.createElement('label');
        let input;
        name == 'description' ? input = document.createElement('textarea') : input = document.createElement('input');

        let capFirst = name.slice(0, 1);
        let restOfName = name.slice(1);

        label.innerHTML = `${capFirst.toUpperCase()}${restOfName}`;
        label.setAttribute('for', `modal-${name}`);
        label.setAttribute('class', `modal-${name}`);
        input.setAttribute('id', `modal-${name}`);

        form.append(label);
        label.append(input);
    });
})();


let descriptionFunc = (() => {
    const formDesc = document.querySelector('#modal-description');
    formDesc.setAttribute('rows', 7);
})();

let titleFunc = (() => {
    const formText = document.querySelector('#modal-title');
    formText.setAttribute('type', 'text');
    
})();

let deadlineFunc = (() => {
    const formDate = document.querySelector('#modal-deadline');
    formDate.setAttribute('type', 'date');
})();

let priorityDropDown = (() => {
    // Creating priority drop down selection
    const priorityLabel = document.createElement('label');
    const prioritySelect = document.createElement('select');
    
    priorityLabel.innerHTML = 'Priority';
    priorityLabel.setAttribute('for', 'modal-priority');
    priorityLabel.setAttribute('class', 'modal-priority');
    prioritySelect.setAttribute('id', 'modal-priority');
    prioritySelect.setAttribute('name', 'importance');
    
    
    for(let i = 1; i <= 4; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', i);
        option.innerHTML = `${i}`;
        prioritySelect.append(option);
    }
    
    form.append(priorityLabel);
    priorityLabel.append(prioritySelect);
})()

let formButton = (() => {
    const btnWrapper = document.createElement('div');
    const submitBtn = document.createElement('button');
    btnWrapper.setAttribute('id', 'btn-wrap');
    submitBtn.setAttribute('id', 'submit');
    submitBtn.setAttribute('type', 'button');
    submitBtn.innerHTML = 'Create';
    form.append(btnWrapper);
    btnWrapper.append(submitBtn);
})()

let formBtnEvent = (() => {
    const titleSelector = document.querySelector('#modal-title');
    const dateSelector = document.querySelector('#modal-deadline');
    const prioritySelector = document.querySelector('#modal-priority');
    const descSelector = document.querySelector('#modal-description');
    const btnSelector = document.querySelector('#submit');

    btnSelector.addEventListener('click', () => {
        projectList.push(new Project(
            titleSelector.value, 
            dateSelector.value, 
            prioritySelector.value, 
            descSelector.value))

        projectDOM(titleSelector.value, dateSelector.value, prioritySelector.value, descSelector.value);
    });
})()

//gh-pages