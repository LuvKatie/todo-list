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
    modalForm.classList.add('task-form');
    formHeader.classList.add('task-header');

    modalBackground.appendChild(modalForm);
    body.appendChild(modalBackground);
}

export function newTaskEvent() {
    const newBtn = document.querySelector('.new');
    const modalForm = document.querySelector('.task-form');
    newBtn.addEventListener('click', () => {
        if (modalForm.children.length < 6) {
            const task = document.createElement('textarea');
            task.setAttribute('readonly', '');
            modalForm.appendChild(task);
        }

        return;
    });
}

function additionalTasks(modalForm) {

}