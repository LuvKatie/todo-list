import { projectDOM, nextPageButtons } from "./mainContent";

let projectList = [];

class Project {
    constructor (title, date, priority, desc, id, page) {
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.desc = desc;
        this.id = id;
        this.page = page;
    }
}

const body = document.querySelector('body');

let formModal = (() => {
    const modal = document.createElement('div');
    modal.classList.add('project-modal', 'modal', 'hidden');
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
    const modalSelect = document.querySelector('.project-modal');
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
    const priorityOptions = ['Low', 'Medium', 'High']
    const priorityLabel = document.createElement('label');
    const prioritySelect = document.createElement('select');
    
    priorityLabel.innerHTML = 'Priority';
    priorityLabel.setAttribute('for', 'modal-priority');
    priorityLabel.setAttribute('class', 'modal-priority');
    prioritySelect.setAttribute('id', 'modal-priority');
    prioritySelect.setAttribute('name', 'importance');
    
    
    for(let i = 0; i < priorityOptions.length; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', priorityOptions[i]);
        option.innerHTML = `${priorityOptions[i]}`;
        prioritySelect.append(option);
    }
    
    form.append(priorityLabel);
    priorityLabel.append(prioritySelect);
})();

let formButton = (() => {
    const btnWrapper = document.createElement('div');
    const submitBtn = document.createElement('button');
    btnWrapper.setAttribute('id', 'btn-wrap');
    submitBtn.setAttribute('id', 'submit');
    submitBtn.setAttribute('type', 'button');
    submitBtn.innerHTML = 'Create';
    form.append(btnWrapper);
    btnWrapper.append(submitBtn);
})();

let formBtnEvent = (() => {
    const main = document.querySelector('main');
    const titleSelector = document.querySelector('#modal-title');
    const dateSelector = document.querySelector('#modal-deadline');
    const prioritySelector = document.querySelector('#modal-priority');
    const descSelector = document.querySelector('#modal-description');
    const btnSelector = document.querySelector('#submit');

    
    btnSelector.addEventListener('click', () => {
    let currentPage = Math.ceil((projectList.length + 1) / 7);
    
    if (projectList.length < 21) {
        projectList.push(new Project(
            titleSelector.value, 
            dateSelector.value, 
            prioritySelector.value, 
            descSelector.value,
            projectList.length + 1,
            currentPage));
        }
        
    let length = projectList.length;
    let thisProject = projectList[length - 1];
    
    if (main.childNodes.length <= 7 && length <= 21) {
        projectDOM(thisProject.title, thisProject.date, thisProject.priority, thisProject.page);
    } else if (length == 21 && main.childNodes.length == 8) {
        alert('You have reached the maximum amount of pages (3)');
    }
    
    if (length % 7 == 0 && length >= 7 && length <= 21 || 
        length % 7 == 1 && length > 7 && length <= 21) {
        console.log(length % 7);
        nextPageButtons(projectList, currentPage);
    }

    });
})();