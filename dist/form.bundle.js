/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/form.js":
/*!****************************!*\
  !*** ./src/script/form.js ***!
  \****************************/
/***/ (() => {

eval("const body = document.querySelector('body');\nconst main = document.querySelector('main');\n\nlet formLayout = (() => {\n    const form = document.createElement('form');\n    form.classList.add('task-creator', 'shown');\n    main.append(form);\n})();\n\nconst form = document.querySelector('.task-creator');\n\nlet formContent = (() => {\n    // Array containing all inputs and forEach loop to create and append to form\n    const formNames = ['title', 'description', 'deadline'];\n    formNames.forEach(name => {\n        const label = document.createElement('label');\n        let input;\n        name == 'description' ? input = document.createElement('textarea') : input = document.createElement('input');\n\n        let capFirst = name.slice(0, 1);\n        let restOfName = name.slice(1);\n\n        label.innerHTML = `${capFirst.toUpperCase()}${restOfName}: `;\n        label.setAttribute('for', `${name}`);\n        label.setAttribute('class', `${name}`);\n        input.setAttribute('id', `${name}`);\n\n        form.append(label);\n        label.append(input);\n    });\n\n})();\n\nlet descriptionFunc = (() => {\n    const formDesc = document.querySelector('#description');\n    formDesc.setAttribute('rows', 6);\n    formDesc.setAttribute('cols', 60);\n\n})();\n\nlet titleFunc = (() => {\n    const formText = document.querySelector('#title');\n    formText.setAttribute('type', 'text');\n\n})();\n\nlet deadlineFunc = (() => {\n    const formDate = document.querySelector('#deadline');\n    formDate.setAttribute('type', 'date');\n})();\n\nlet priorityDropDown = (() => {\n    // Creating priority drop down selection\n    const priorityLabel = document.createElement('label');\n    const prioritySelect = document.createElement('select');\n\n    priorityLabel.innerHTML = 'Priority: ';\n    priorityLabel.setAttribute('for', 'priority');\n    priorityLabel.setAttribute('class', 'priority');\n    prioritySelect.setAttribute('id', 'priority');\n    prioritySelect.setAttribute('name', 'importance');\n\n    \n    for(let i = 1; i <= 4; i++) {\n        const option = document.createElement('option');\n        option.setAttribute('value', i);\n        option.innerHTML = `${i}`;\n        prioritySelect.append(option);\n    }\n\n    form.append(priorityLabel);\n    priorityLabel.append(prioritySelect);\n})()\n\n\n\n//# sourceURL=webpack://todo-list/./src/script/form.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/form.js"]();
/******/ 	
/******/ })()
;