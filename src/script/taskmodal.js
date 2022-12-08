const body = document.querySelector('body');

let taskList = [];

class MakeTask {
    constructor(title, desc, id) {
        this.title = title;
        this.desc = desc;
        this.id = id;
    }
}

export function taskListBtn(parent) {
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
    modalForm.classList.add('task-display');
    modalForm.setAttribute('id', 'task-display');
    formHeader.classList.add('task-header');

    modalBackground.appendChild(modalForm);
    body.appendChild(modalBackground);
}

export function newTaskEvent() {
    const newBtn = document.querySelector('.new');
    const modalForm = document.querySelector('.task-display');
    const taskDetails = document.querySelector('#task-details');
    newBtn.addEventListener('click', () => {
        // Hide task modal
        modalForm.classList.add('hidden');
        modalForm.classList.remove('task-display');
        // Reveal task detail modal
        taskDetails.classList.toggle('hidden');
        // taskDetails.classList.add('shown');
        taskDetails.classList.toggle('task-details');
    });
}

export function closeTaskDetails(exitBtn, modal) {
    const taskDisplay = document.querySelector('#task-display');

    exitBtn.addEventListener('click', () => {
        // Hide task detail modal
        modal.classList.toggle('task-details');
        modal.classList.toggle('hidden');
        // Reveal overview of task modal
        taskDisplay.classList.toggle('hidden');
        taskDisplay.classList.add('task-display');
    });
}

function createTaskDetails(createBtn) {
    const title = document.querySelector('.title');
    const desc = document.querySelector('.details');
    const taskDisplay = document.getElementById('task-display');
    createBtn.addEventListener('click', () => {
        if (taskDisplay.childNodes.length <= 5 && title.value.length >= 3) {
            taskList.push(new MakeTask(title.value, desc.value, taskList.length));
            console.log(taskList);
            const taskDetails = document.createElement('p');
            taskDetails.innerHTML = taskList[taskList.length - 1].title;
            taskDisplay.append(taskDetails);
        } else {
            alert('Title must be 3 characters min.')
        }
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
            textArea.setAttribute('placeholder', 'Task Title (3 characters MIN )');
            newTaskContainer.appendChild(textArea);
        } else {
            textArea.setAttribute('maxlength', '410');
            textArea.setAttribute('placeholder', 'Type your task details here ( 400 characters MAX )');
            newTaskContainer.appendChild(textArea);
        }
    });

    createTaskBtn.innerHTML = 'Create Task';
    exitBtn.innerHTML = 'X';

    createTaskBtn.classList.add('create-task');
    exitBtn.classList.add('exit-details');

    newTaskContainer.classList.add('hidden');
    newTaskContainer.setAttribute('id', 'task-details');
    newTaskContainer.append(createTaskBtn, exitBtn)
    modalSelect.appendChild(newTaskContainer);

    closeTaskDetails(exitBtn, newTaskContainer);
    createTaskDetails(createTaskBtn);
}

function additionalTasks(modalForm) {

}