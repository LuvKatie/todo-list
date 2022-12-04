import { projectList, taskID } from "./mainContent";

const body = document.querySelector('body');

export function taskList(parent) {
    console.log(parent);
    parent.style.backgroundColor = 'lightpink';
}

export function taskModal() {
    const modalBackground = document.createElement('div');
    const modalForm = document.createElement('div');
    const formHeader = document.createElement('header');
    const buttonClasses = ['new', 'edit'];

    modalForm.appendChild(formHeader);
    for (let i = 0; i < buttonClasses.length; i++) {
        const headerBtn = document.createElement('button');
        headerBtn.classList.add(`${buttonClasses[i]}`);
        headerBtn.innerHTML = `${buttonClasses[i]}`;
        formHeader.appendChild(headerBtn);
    }

    modalBackground.classList.add('task-modal', 'modal', 'shown');
    // modalForm.classList.add('task-display');
    modalForm.classList.add('hidden');
    formHeader.classList.add('task-header');

    modalBackground.appendChild(modalForm);
    body.appendChild(modalBackground);
}

export function newTaskEvent() {
    const newBtn = document.querySelector('.new');
    const modalForm = document.querySelector('.task-display');
    const taskDetails = document.querySelector('.task-details');
    newBtn.addEventListener('click', () => {
        modalForm.classList.add('hidden');
        modalForm.classList.remove('task-display');
        taskDetails.classList.toggle('hidden');
    });
}

export function newTaskDetails() {
    const modalSelect = document.querySelector('.task-modal');
    const newTaskContainer = document.createElement('div');
    const createTaskBtn = document.createElement('button');
    const exitBtn = document.createElement('button');
    const textareaClasses = ['title', 'details'];

    textareaClasses.forEach(item => {
        const textArea = document.createElement('textarea');
        textArea.classList.add(`${item}`);
        if (item == 'title') {
            textArea.setAttribute('maxlength', '43');
            newTaskContainer.appendChild(textArea);
        } else {
            textArea.setAttribute('maxlength', '410');
            newTaskContainer.appendChild(textArea);
        }
    });

    createTaskBtn.classList.add('create-task');
    exitBtn.classList.add('exit-details');

    // newTaskContainer.classList.add('task-details', 'hidden');
    newTaskContainer.classList.add('task-details');
    newTaskContainer.append(createTaskBtn, exitBtn)
    modalSelect.appendChild(newTaskContainer);
}

function additionalTasks(modalForm) {

}