export const projectList = [];
const main = document.querySelector('main');

export const Project = function(title, date, priority, desc) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.desc = desc;
}

export let projectDOM = function() {
    const projSections = ['complete', 'title', 'deadline', 'options'];
    const projectContainer = document.createElement('div');
    const projCard = document.createElement('div');
    projSections.forEach(name => {
        if (name == 'complete') {
            const completeCheck = document.createElement('input');
            completeCheck.setAttribute('class', `${name}`);
            completeCheck.setAttribute('type', 'checkbox');
            projCard.append(completeCheck);
        } else {
            const label = document.createElement('p');
            
            let capFirst = name.slice(0, 1);
            let restOfName = name.slice(1);
            label.innerHTML = `${capFirst.toUpperCase()}${restOfName}`;
            label.setAttribute('class', `${name}`);
            
            projCard.setAttribute('id', `project-${projectList.length}`);
            projCard.setAttribute('class', `project`);
            
            projectContainer.append(projCard)
            projCard.append(label);
        }
    });


    projectContainer.setAttribute('class', 'projContainer');
    main.append(projectContainer);
}

//gh-pages