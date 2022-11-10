import '../styles/style.css';

const body = document.querySelector('body');

let mainLayout = (() => {
    const sideBar = document.createElement('nav');
    const header = document.createElement('header');
    const content = document.createElement('main');

    body.append(sideBar, header, content);
})();

const selContent = document.querySelector('main');

let formLayout = (() => {
    const form = document.createElement('form');
    form.classList.add('task-creator');
    selContent.append(form);
})();

const form = document.querySelector('.task-creator');

let formContent = (() => {
    // Array containing all inputs and forEach loop to create and append to form
    const formNames = ['title', 'description', 'deadline'];
    formNames.forEach(name => {
        const label = document.createElement('label');
        const input = document.createElement('input');

        let capFirst = name.slice(0, 1);
        let restOfName = name.slice(1);

        label.innerHTML = `${capFirst.toUpperCase()}${restOfName}: `;
        label.setAttribute('for', `${name}`);
        input.setAttribute('id', `${name}`);

        form.append(label, input);
    });

    // Setting types for text inputs
    const formText = document.querySelectorAll('#title, #description');
    formText.forEach(input => input.setAttribute('type', 'text'));

    // Setting type for date input
    const formDate = document.querySelector('#deadline');
    formDate.setAttribute('type', 'date');
})();

let priorityDropDown = (() => {
    // Creating priority drop down selection
    const priorityLabel = document.createElement('label');
    const prioritySelect = document.createElement('select');

    priorityLabel.innerHTML = 'Priority';
    priorityLabel.setAttribute('for', 'priority');
    prioritySelect.setAttribute('id', 'priority');
    prioritySelect.setAttribute('name', 'importance');

    
    for(let i = 1; i <= 4; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', i);
        option.innerHTML = `${i}`;
        prioritySelect.append(option);
    }

    form.append(priorityLabel, prioritySelect);
})()

