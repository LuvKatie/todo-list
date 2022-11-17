const body = document.querySelector('body');
const header = document.querySelector('header');

let formLayout = (() => {
    const form = document.createElement('form');
    form.classList.add('task-creator', 'shown');
    header.append(form);
})();

const form = document.querySelector('.task-creator');

let formContent = (() => {
    // Array containing all inputs and forEach loop to create and append to form
    const formNames = ['title', 'description', 'deadline'];
    formNames.forEach(name => {
        const label = document.createElement('label');
        let input;
        name == 'description' ? input = document.createElement('textarea') : input = document.createElement('input');

        let capFirst = name.slice(0, 1);
        let restOfName = name.slice(1);

        label.innerHTML = `${capFirst.toUpperCase()}${restOfName}`;
        label.setAttribute('for', `${name}`);
        label.setAttribute('class', `${name}`);
        input.setAttribute('id', `${name}`);

        form.append(label);
        label.append(input);
    });
})();


let descriptionFunc = (() => {
    const formDesc = document.querySelector('#description');
    formDesc.setAttribute('rows', 6);
    formDesc.setAttribute('cols', 60);
    
})();

let titleFunc = (() => {
    const formText = document.querySelector('#title');
    formText.setAttribute('type', 'text');
    
})();

let deadlineFunc = (() => {
    const formDate = document.querySelector('#deadline');
    formDate.setAttribute('type', 'date');
})();

let priorityDropDown = (() => {
    // Creating priority drop down selection
    const priorityLabel = document.createElement('label');
    const prioritySelect = document.createElement('select');
    
    priorityLabel.innerHTML = 'Priority: ';
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.setAttribute('class', 'priority');
    prioritySelect.setAttribute('id', 'priority');
    prioritySelect.setAttribute('name', 'importance');
    
    
    for(let i = 1; i <= 4; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', i);
        option.innerHTML = `${i}`;
        prioritySelect.append(option);
    }
    
    form.append(priorityLabel);
    priorityLabel.append(prioritySelect);
})()

let formButton = (() => {
    const submitBtn = document.createElement('input');
    submitBtn.setAttribute('id', 'submit');
    submitBtn.setAttribute('type', 'button');
    submitBtn.setAttribute('value', 'Create Project');
    form.append(submitBtn);
})()

let formBtnEvent = (() => {
    const titleSelector = document.querySelector('#title');
    const dateSelector = document.querySelector('#deadline');
    const prioritySelector = document.querySelector('#priority');
    const descSelector = document.querySelector('#description');
    const formArr = [titleSelector, dateSelector, prioritySelector, descSelector];
    const btnSelector = document.querySelector('#submit');

    btnSelector.addEventListener('click', () => formArr.forEach(i => console.log(i.value)));
})()