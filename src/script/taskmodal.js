const body = document.querySelector('body');

let taskList = [];
let currProject;

export function populateTasks(id) {
    console.log(id);
}

class Project {
    constructor (title, date, priority, desc, id) {
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.desc = desc;
        this.id = id;
    }
}

class ProjectTasks {
    constructor(task1, task2, task3, task4, task5) {
        this.task1 = task1;
        this.task2 = task2;
        this.task3 = task3;
        this.task4 = task4;
        this.task5 = task5;
    }
}

class MakeTask {
    constructor(title, desc, id) {
        this.title = title;
        this.desc = desc;
        this.id = id;
    }
}

export function taskModal() {
    const modalBackground = document.createElement('div');
    const modalForm = document.createElement('div');
    const formHeader = document.createElement('header');
    const buttonClasses = ['new', 'remove'];

    modalForm.appendChild(formHeader);
    for (let i = 0; i < buttonClasses.length; i++) {
        const headerBtn = document.createElement('button');
        headerBtn.classList.add(`${buttonClasses[i]}`);
        headerBtn.innerHTML = `${buttonClasses[i]}`;
        formHeader.appendChild(headerBtn);
    }

    modalBackground.classList.add('task-modal', 'modal', 'hidden');
    modalForm.classList.add('task-display');
    modalForm.setAttribute('id', 'task-display');
    formHeader.classList.add('task-header');

    modalBackground.appendChild(modalForm);
    body.appendChild(modalBackground);
}

// New button
export function newTaskEvent() {
    const newBtn = document.querySelector('.new');
    const modalForm = document.querySelector('.task-display');
    const taskDetails = document.querySelector('#task-details');
    const taskDisplay = document.querySelector('#task-display');
    const decisionBtn = document.querySelector('#decision');
    newBtn.addEventListener('click', () => {
        if (taskDisplay.childNodes.length <= 6) {
        // Hide task modal
        modalForm.classList.add('hidden');
        modalForm.classList.remove('task-display');
        // Reveal task detail modal
        taskDetails.classList.toggle('hidden');
        taskDetails.classList.toggle('task-details');

        // Display ' CREATE TASK ' button
        decisionBtn.innerHTML = 'create task'
        decisionBtn.classList.add('create-task');
        decisionBtn.classList.remove('save-task');
        }
    });
}

export function exitModal() {
    const taskDisplay = document.querySelector('#task-display');
    const taskExitBtn = document.createElement('button');

    exitModalFn(taskExitBtn);
    taskExitBtn.setAttribute('id', 'task-modal-exit');
    taskExitBtn.innerHTML = 'X';

    taskDisplay.appendChild(taskExitBtn);
}

function exitModalFn(btn) {
    const taskModal = document.querySelector('.task-modal');
    btn.addEventListener('click', () => {
        taskModal.classList.remove('shown');
        taskModal.classList.add('hidden');
    });
}

export function removeTaskMode() {
    const removeBtn = document.querySelector('.remove');
    const newBtn = document.querySelector('.new');
    removeBtn.addEventListener('click', () => {
        const taskSelector = document.querySelectorAll('#task-display > p');
        if (taskSelector.length > 0) {
            taskSelector.forEach(item => {
                item.classList.toggle('remove-mode');
            });
        }

        disableNew(newBtn);
    });
}

function disableNew(newBtn) {
    newBtn.disabled ? newBtn.disabled = false : newBtn.disabled = true;
    newBtn.classList.toggle('new-disabled');
    newBtn.classList.toggle('new');
}

function toggleTaskDisplays(taskDisplay, detailsModal) {
        detailsModal.classList.toggle('task-details');
        detailsModal.classList.toggle('hidden');
        // Reveal overview of task modal
        taskDisplay.classList.toggle('hidden');
        taskDisplay.classList.toggle('task-display');
}

// Edit an existing task / ability to save said task
function taskEditDetails(task, taskDisplay, detailsModal, currTask) {
    const titleSelect = document.querySelector('.title');
    const descSelect = document.querySelector('.details');
    const decisionBtn = document.querySelector('#decision');

    
    task.addEventListener('click', () => {
        if (!task.classList.contains('remove-mode')) {
        titleSelect.value = currTask.title;
        descSelect.value = currTask.desc;
        decisionBtn.innerHTML = 'save';
        decisionBtn.classList.remove('create-task');
        decisionBtn.classList.add('save-task');
        toggleTaskDisplays(taskDisplay, detailsModal);
        } else if (task.classList.contains('remove-mode')) {
            task.parentNode.removeChild(task);
        }
    });

    function saveTask() {
        task.innerHTML = titleSelect.value;
        currTask.title = titleSelect.value;
        currTask.desc = descSelect.value;
        titleSelect.value = '';
        descSelect.value = '';
        toggleTaskDisplays(taskDisplay, detailsModal);
    }

    taskEditDetails.saveTask = saveTask;
}

// Close out of current modal while wiping Task Details values to start from a clean slate
export function exitBtnEvent(exitBtn, detailsModal) {
    const taskDisplay = document.querySelector('#task-display');
    
    exitBtn.addEventListener('click', () => {
        // Resets title and description
        const title = document.querySelector('.title');
        const desc = document.querySelector('.details');
    
        title.value = '';
        desc.value = '';
        toggleTaskDisplays(taskDisplay, detailsModal);
    });
}

// Execute Create or Save function from single button in Task Modal depending on what the user is trying to achieve
function decisionBtnEvent(decisionBtn, detailsModal) {
    const title = document.querySelector('.title');
    const desc = document.querySelector('.details');
    const taskDisplay = document.getElementById('task-display');
    decisionBtn.addEventListener('click', () => {
        if (decisionBtn.innerHTML == 'create task' && taskDisplay.childNodes.length <= 6 && title.value.length >= 3) {
            console.log(currProject);
            createTask(title, desc, taskDisplay, detailsModal);
        } else if (decisionBtn.innerHTML == 'save' && taskDisplay.childNodes.length <= 6 && title.value.length >= 3) {
            taskEditDetails.saveTask();
        } else {
            alert('Title must be 3 characters min.')
        }
    });

}

// Create and append task to Task Display modal
function createTask(title, desc, taskDisplay, detailsModal) {
    // projectList[0].tasks[0] = new MakeTask(title.value, desc.value, taskList.length);
        let currTask = taskList[taskList.length - 1];

        const taskDetails = document.createElement('p');
        taskDetails.setAttribute('id', `task-${taskList.length - 1}`);
        taskDetails.innerHTML = currTask.title;
    // Clear Task Detail input areas
        title.value = '';
        desc.value = '';

        taskDisplay.append(taskDetails);
        toggleTaskDisplays(taskDisplay, detailsModal);
        taskEditDetails(taskDetails, taskDisplay, detailsModal, currTask);
}

export function newTaskDetails() {
    const modalSelect = document.querySelector('.task-modal');
    const newTaskContainer = document.createElement('div');
    const decisionBtn = document.createElement('button');
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

    
    decisionBtn.setAttribute('id', 'decision');

    exitBtn.innerHTML = 'X';
    exitBtn.classList.add('exit-details');

    newTaskContainer.classList.add('hidden');
    newTaskContainer.setAttribute('id', 'task-details');
    newTaskContainer.append(decisionBtn, exitBtn)
    modalSelect.appendChild(newTaskContainer);

    exitBtnEvent(exitBtn, newTaskContainer);
    decisionBtnEvent(decisionBtn, newTaskContainer);
}