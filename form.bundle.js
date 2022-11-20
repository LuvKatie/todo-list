/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/form.js":
/*!****************************!*\
  !*** ./src/script/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContent */ \"./src/script/mainContent.js\");\n\n\nconst body = document.querySelector('body');\n\nlet formModal = (() => {\n    const modal = document.createElement('div');\n    modal.classList.add('modal', 'hidden');\n    body.append(modal);\n\n    window.onclick = function(e) {\n        if (e.target == modal) {\n            const taskForm = document.querySelector('.task-creator');\n            taskForm.classList.toggle('hidden');\n            taskForm.classList.toggle('shown');\n            modal.classList.toggle('hidden');\n            modal.classList.toggle('shown');\n        }\n    }\n})();\n\nlet formLayout = (() => {\n    const modalSelect = document.querySelector('.modal');\n    const form = document.createElement('form');\n    form.classList.add('task-creator', 'hidden');\n    modalSelect.append(form);\n})();\n\n\nconst form = document.querySelector('.task-creator');\n\nlet formContent = (() => {\n    // Array containing all inputs and forEach loop to create and append to form\n    const formNames = ['title', 'description', 'deadline'];\n    formNames.forEach(name => {\n        const label = document.createElement('label');\n        let input;\n        name == 'description' ? input = document.createElement('textarea') : input = document.createElement('input');\n\n        let capFirst = name.slice(0, 1);\n        let restOfName = name.slice(1);\n\n        label.innerHTML = `${capFirst.toUpperCase()}${restOfName}`;\n        label.setAttribute('for', `modal-${name}`);\n        label.setAttribute('class', `modal-${name}`);\n        input.setAttribute('id', `modal-${name}`);\n\n        form.append(label);\n        label.append(input);\n    });\n})();\n\n\nlet descriptionFunc = (() => {\n    const formDesc = document.querySelector('#modal-description');\n    formDesc.setAttribute('rows', 7);\n})();\n\nlet titleFunc = (() => {\n    const formText = document.querySelector('#modal-title');\n    formText.setAttribute('type', 'text');\n    \n})();\n\nlet deadlineFunc = (() => {\n    const formDate = document.querySelector('#modal-deadline');\n    formDate.setAttribute('type', 'date');\n})();\n\nlet priorityDropDown = (() => {\n    // Creating priority drop down selection\n    const priorityLabel = document.createElement('label');\n    const prioritySelect = document.createElement('select');\n    \n    priorityLabel.innerHTML = 'Priority';\n    priorityLabel.setAttribute('for', 'modal-priority');\n    priorityLabel.setAttribute('class', 'modal-priority');\n    prioritySelect.setAttribute('id', 'modal-priority');\n    prioritySelect.setAttribute('name', 'importance');\n    \n    \n    for(let i = 1; i <= 4; i++) {\n        const option = document.createElement('option');\n        option.setAttribute('value', i);\n        option.innerHTML = `${i}`;\n        prioritySelect.append(option);\n    }\n    \n    form.append(priorityLabel);\n    priorityLabel.append(prioritySelect);\n})()\n\nlet formButton = (() => {\n    const btnWrapper = document.createElement('div');\n    const submitBtn = document.createElement('button');\n    btnWrapper.setAttribute('id', 'btn-wrap');\n    submitBtn.setAttribute('id', 'submit');\n    submitBtn.setAttribute('type', 'button');\n    submitBtn.innerHTML = 'Create';\n    form.append(btnWrapper);\n    btnWrapper.append(submitBtn);\n})()\n\nlet formBtnEvent = (() => {\n    const titleSelector = document.querySelector('#modal-title');\n    const dateSelector = document.querySelector('#modal-deadline');\n    const prioritySelector = document.querySelector('#modal-priority');\n    const descSelector = document.querySelector('#modal-description');\n    const btnSelector = document.querySelector('#submit');\n\n    btnSelector.addEventListener('click', () => {\n        _mainContent__WEBPACK_IMPORTED_MODULE_0__.projectList.push(new _mainContent__WEBPACK_IMPORTED_MODULE_0__.Project(\n            titleSelector.value, \n            dateSelector.value, \n            prioritySelector.value, \n            descSelector.value))\n\n        ;(0,_mainContent__WEBPACK_IMPORTED_MODULE_0__.projectDOM)();\n    });\n})()\n\n//gh-pages\n\n//# sourceURL=webpack://todo-list/./src/script/form.js?");

/***/ }),

/***/ "./src/script/mainContent.js":
/*!***********************************!*\
  !*** ./src/script/mainContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"projectDOM\": () => (/* binding */ projectDOM),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList)\n/* harmony export */ });\nconst projectList = [];\nconst main = document.querySelector('main');\n\nconst Project = function(title, date, priority, desc) {\n    this.title = title;\n    this.date = date;\n    this.priority = priority;\n    this.desc = desc;\n}\n\nlet projectDOM = function() {\n    const projSections = ['complete', 'title', 'deadline', 'options'];\n    const projectContainer = document.createElement('div');\n    const projCard = document.createElement('div');\n    projSections.forEach(name => {\n        if (name == 'complete') {\n            const completeCheck = document.createElement('input');\n            completeCheck.setAttribute('class', `${name}`);\n            completeCheck.setAttribute('type', 'checkbox');\n            projCard.append(completeCheck);\n        } else {\n            const label = document.createElement('p');\n            \n            let capFirst = name.slice(0, 1);\n            let restOfName = name.slice(1);\n            label.innerHTML = `${capFirst.toUpperCase()}${restOfName}`;\n            label.setAttribute('class', `${name}`);\n            \n            projCard.setAttribute('id', `project-${projectList.length}`);\n            projCard.setAttribute('class', `project`);\n            \n            projectContainer.append(projCard)\n            projCard.append(label);\n        }\n    });\n\n\n    projectContainer.setAttribute('class', 'projContainer');\n    main.append(projectContainer);\n}\n\n//gh-pages\n\n//# sourceURL=webpack://todo-list/./src/script/mainContent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/form.js");
/******/ 	
/******/ })()
;