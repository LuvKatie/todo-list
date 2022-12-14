import task from '../images/task-svgrepo-com.svg';
import trash from '../images/trash-bin-svgrepo-com.svg';
import edit from '../images/write-svgrepo-com.svg';

import { iconEvents } from './taskmodal.js';

export let mainContentProjList = [];

const main = document.querySelector('main');

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

                iconEvents(taskIcon, editIcon, trashIcon, mainContentProjList);
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
    const nextBtn = document.createElement('button');
    const prevBtn = document.createElement('button');
    if (page == 1) {
        nextBtn.classList.add('next-page');
        prevBtn.classList.add('prev-page');
        nextBtn.classList.add('disabled-page-btn');
        prevBtn.classList.add('disabled-page-btn');

        nextBtn.textContent = 'Next';
        prevBtn.textContent = 'Prev';
        buttonContainer.setAttribute('id', 'page-buttons');

        buttonContainer.append(prevBtn, nextBtn);
        main.appendChild(buttonContainer);
    }

    if (list.length % 7 == 1) {
        console.log(page)
        nextPageFunc(list, page);
    }
}

function clearMain() {
    const projects = document.querySelectorAll('.projContainer');
    projects.forEach(item => {
        item.parentNode.removeChild(item);
    });
}

function nextPageFunc(list, page) {
    const next = document.querySelector('.next-page');
    next.classList.remove('disabled-page-btn');
    
    
    function populateMain() {
        clearMain();
        
        next.classList.add('disabled-page-btn');
        list.forEach(project => {
            if (project.page == page) {
                projectDOM(project.title, project.date, project.priority);
            }
        });

        next.removeEventListener('click', populateMain);
    };

    next.addEventListener('click', populateMain);

}

export function projPriority(priority, projCard) {
    switch(priority) {
        case "Low":
            projCard.style.backgroundColor = "#adf7d1";
            break;
        case "Medium":
            projCard.style.backgroundColor = "rgb(188 205 249)";
            break;
        case "High":
            projCard.style.backgroundColor = "rgb(249 132 132)";
            break;
    };
}