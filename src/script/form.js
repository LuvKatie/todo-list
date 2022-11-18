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
        label.setAttribute('for', `${name}`);
        label.setAttribute('class', `${name}`);
        input.setAttribute('id', `${name}`);

        form.append(label);
        label.append(input);
    });
})();


let descriptionFunc = (() => {
    const formDesc = document.querySelector('#description');
    formDesc.setAttribute('rows', 7);
})();

let titleFunc = (() => {
    const formText = document.querySelector('#title');
    formText.setAttribute('type', 'text');
    
})();

let deadlineFunc = (() => {
    const formDate = document.querySelector('#deadline');
    formDate.setAttribute('type', 'date');
})();

let priorityDropDown = (() => {
    // Creating priority drop down selection
    const priorityLabel = document.createElement('label');
    const prioritySelect = document.createElement('select');
    
    priorityLabel.innerHTML = 'Priority';
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.setAttribute('class', 'priority');
    prioritySelect.setAttribute('id', 'priority');
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
    submitBtn.innerHTML = 'Create';
    form.append(btnWrapper);
    btnWrapper.append(submitBtn);
})()

let formBtnEvent = (() => {
    const titleSelector = document.querySelector('#title');
    const dateSelector = document.querySelector('#deadline');
    const prioritySelector = document.querySelector('#priority');
    const descSelector = document.querySelector('#description');
    const btnSelector = document.querySelector('#submit');
    
    const formArr = [titleSelector, dateSelector, prioritySelector, descSelector];

    btnSelector.addEventListener('click', () => {
        projectList.push(new Project(
            titleSelector.value, 
            dateSelector.value, 
            prioritySelector.value, 
            descSelector.value))

        projectDOM();
    });
})()