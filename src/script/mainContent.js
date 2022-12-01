import task from '../images/task-svgrepo-com.svg';
import trash from '../images/trash-bin-svgrepo-com.svg';
import edit from '../images/write-svgrepo-com.svg';
import { taskList } from './taskmodal.js';

export const projectList = [];
export const taskID = [];

const main = document.querySelector('main');

export const Project = function(title, date, priority, desc, id) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.desc = desc;
    this.id = id;
}

export const Task = function(id) {
    this.id = id;
}

export let projectDOM = function(title, date, priority) {
    const projSections = ['complete', 'title', 'deadline', 'options'];
    const projectContainer = document.createElement('div');
    const projCard = document.createElement('div');

    projSections.forEach(name => {
        switch(name) {
            case 'complete':
                const completeCheck = document.createElement('input');
                completeCheck.setAttribute('class', `${name}`);
                completeCheck.setAttribute('type', 'checkbox');
                projCard.append(completeCheck);
                break;
            case 'options':
                const optionIcons = document.createElement('div');

                const taskIcon = new Image();
                taskIcon.src = task;
                taskIcon.classList.add('taskBtn');
                const editIcon = new Image();
                editIcon.src = edit;
                editIcon.classList.add('editBtn');
                const trashIcon = new Image();
                trashIcon.src = trash;
                trashIcon.classList.add('trashBtn');

                optionIcons.setAttribute('class', `${name}`);
                optionIcons.append(taskIcon, editIcon, trashIcon);
                projCard.append(optionIcons);

                iconEvents(taskIcon, editIcon, trashIcon);
                break;
            default:
                const txtDetail = document.createElement('p');

                if(name == 'title') {
                    txtDetail.innerHTML = `${title}`;
                } else if(name == 'deadline') {
                    txtDetail.innerHTML = `${date}`;
                }

                txtDetail.setAttribute('class', `${name}`);
                
                projCard.append(txtDetail);
                break;
            }
        });
        
        projCard.setAttribute('id', `project-${projectList.length}`);
        projCard.setAttribute('class', `project`);
        projectContainer.append(projCard)
        projectContainer.setAttribute('class', 'projContainer');
        main.append(projectContainer);

        projPriority(priority, projCard);
}

function projPriority(priority, projCard) {
    switch(priority) {
        case "1":
            projCard.style.backgroundColor = "#fcfcfc";
            break;
        case "2":
            projCard.style.backgroundColor = "rgb(188 205 249)";
            break;
        case "3":
            projCard.style.backgroundColor = "#adf7d1";
            break;
        case "4":
            projCard.style.backgroundColor = "rgb(249 132 132)";
            break;
    };
}

function iconEvents(task, edit, trash) {
    
    task.addEventListener('click', () => {
        const iconParent = task.closest('.project');
        taskList(iconParent);
    });
    
    edit.addEventListener('click', () => {
        const iconParent = edit.closest('.project');
        iconParent.style.backgroundColor = 'lightblue';
    });
    
    trash.addEventListener('click', () => {
        const iconParent = trash.closest('.project');
        iconParent.style.backgroundColor = 'lightgreen';
    });
}
