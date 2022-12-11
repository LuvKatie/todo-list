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
    const buttonClasses = ['new', 'remove'];

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

// New button
export function newTaskEvent() {
    const newBtn = document.querySelector('.new');
    const modalForm = document.querySelector('.task-display');
    const taskDetails = document.querySelector('#task-details');
    const taskDisplay = document.querySelector('#task-display');
    const decisionBtn = document.querySelector('#decision');
    newBtn.addEventListener('click', () => {
        if (taskDisplay.childNodes.length <= 5) {
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

export function removeTaskMode(task) {
    const removeBtn = document.querySelector('.remove');
    // const taskDisplay = document.getElementById('task-display');
    removeBtn.addEventListener('click', () => {
        const taskSelector = document.querySelectorAll('#task-display > p');
        taskSelector.forEach(item => {
            item.classList.add('remove-mode');
        })
    });
}

function toggleTaskDisplays(taskDisplay, detailsModal) {
        detailsModal.classList.toggle('task-details');
        detailsModal.classList.toggle('hidden');
        // Reveal overview of task modal
        taskDisplay.classList.toggle('hidden');
        taskDisplay.classList.toggle('task-display');
}

// Editing an existing task and implementing the ability to save said task
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
            // Place actual function to delete task
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
        if (decisionBtn.innerHTML == 'create task' && taskDisplay.childNodes.length <= 5 && title.value.length >= 3) {
            createTask(title, desc, taskDisplay, detailsModal);
        } else if (decisionBtn.innerHTML == 'save' && taskDisplay.childNodes.length <= 5 && title.value.length >= 3) {
            taskEditDetails.saveTask();
        } else {
            alert('Title must be 3 characters min.')
        }
    });

}

// Create and append task to Task Display modal
function createTask(title, desc, taskDisplay, detailsModal) {
        taskList.push(new MakeTask(title.value, desc.value, taskList.length));
        let currTask = taskList[taskList.length - 1];
        const taskDetails = document.createElement('p');
        taskDetails.setAttribute('id', `task-${taskList.length - 1}`);
        taskDetails.innerHTML = currTask.title;
        title.value = '';
        desc.value = '';
        taskDisplay.append(taskDetails);
        toggleTaskDisplays(taskDisplay, detailsModal);
        taskEditDetails(taskDetails, taskDisplay, detailsModal, currTask);
        console.log(taskList);
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

function additionalTasks(modalForm) {

}