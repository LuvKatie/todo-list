export const projectList = [];
const main = document.querySelector('main');

export const Project = function(title, date, priority, desc) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.desc = desc;
}

export let projectDOM = function() {
    const formNames = ['title', 'description', 'deadline'];
    const projForm = document.createElement('form');
    const projectContainer = document.createElement('div');
    formNames.forEach(name => {
        const label = document.createElement('label');
        let input;
        name == 'description' ? input = document.createElement('textarea') : input = document.createElement('input');

        let capFirst = name.slice(0, 1);
        let restOfName = name.slice(1);

        projForm.setAttribute('id', `project-${projectList.length}`);
        projForm.setAttribute('class', `project`);

        label.innerHTML = `${capFirst.toUpperCase()}${restOfName}`;
        label.setAttribute('class', `${name}`);

        input.setAttribute('readonly', '');

        projectContainer.append(projForm)
        projForm.append(label);
        label.append(input);
    });


    projectContainer.setAttribute('class', 'projContainer');
    main.append(projectContainer);

    projectDropDown(projForm);
    projectFormTypes();
}

let projectFormTypes = function() {
    const projTitle = document.querySelector('.project > .title > input')
    projTitle.setAttribute('type', 'text');

    const projDate = document.querySelector('.project > .deadline > input')
    projDate.setAttribute('type', 'date');

    const projDesc = document.querySelector('.project > .description > textarea')
    projDesc.setAttribute('rows', 7);
    projDesc.setAttribute('cols', 50);
};

let projectDropDown = function(form) {
    const priorityLabel = document.createElement('label');
    const prioritySelect = document.createElement('select');
    
    priorityLabel.innerHTML = 'Priority';
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.setAttribute('class', 'priority');
    prioritySelect.setAttribute('name', 'importance');
    
    
    for(let i = 1; i <= 4; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', i);
        option.innerHTML = `${i}`;
        prioritySelect.append(option);
    }
    
    form.append(priorityLabel);
    priorityLabel.append(prioritySelect);
}