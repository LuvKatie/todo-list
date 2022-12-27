import task from '../images/task-svgrepo-com.svg';
import trash from '../images/trash-bin-svgrepo-com.svg';
import edit from '../images/write-svgrepo-com.svg';

const main = document.querySelector('main');

let projectList;

export let projectDOM = function(title, date, priority) {
    const projSections = ['complete', 'proj-title', 'deadline', 'options'];
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

                if(name == 'proj-title') {
                    txtDetail.innerHTML = `${title}`;
                } else if(name == 'deadline') {
                    txtDetail.innerHTML = `${date}`;
                }

                txtDetail.setAttribute('class', `${name}`);
                
                projCard.append(txtDetail);
                break;
            }
        });
        
        projCard.setAttribute('id', `project-${main.childNodes.length}`);
        projCard.setAttribute('class', `project`);
        projectContainer.append(projCard)
        projectContainer.setAttribute('class', 'projContainer');
        main.append(projectContainer);

        projPriority(priority, projCard);
}

export function nextPageButtons(list, page) {
    const buttonContainer = document.createElement('div');
    if (page == 1) {
        const nextBtn = document.createElement('button');
        const prevBtn = document.createElement('button');
        nextBtn.classList.add('next-page');
        prevBtn.classList.add('prev-page');

        nextBtn.textContent = 'Next';
        prevBtn.textContent = 'Prev';
        buttonContainer.setAttribute('id', 'page-buttons');

        buttonContainer.append(prevBtn, nextBtn);
        main.appendChild(buttonContainer);
    }
}

function nextPageFunc() {

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

// Filters the project elements to remove selected-proj class if they were not the intended target
function selectedProject(iconParent) {
    iconParent.classList.add('selected-proj');
    const includesClass = document.querySelectorAll('main > div > .selected-proj');

    if (includesClass.length > 1) {
        includesClass.forEach(e => {
            if (e.classList.contains('selected-proj') && e !== iconParent) {
                e.classList.remove('selected-proj');
            }
        });
    }
}

function iconEvents(task, edit, trash) {
    
    task.addEventListener('click', () => {
        const iconParent = task.closest('.project');
        const taskDisplay = document.querySelector('.task-modal');
        
        taskDisplay.classList.remove('hidden');
        taskDisplay.classList.add('shown');
        
        selectedProject(iconParent);
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
