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

/***/ "./src/script/taskmodal.js":
/*!*********************************!*\
  !*** ./src/script/taskmodal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exitBtnEvent\": () => (/* binding */ exitBtnEvent),\n/* harmony export */   \"exitModal\": () => (/* binding */ exitModal),\n/* harmony export */   \"newTaskDetails\": () => (/* binding */ newTaskDetails),\n/* harmony export */   \"newTaskEvent\": () => (/* binding */ newTaskEvent),\n/* harmony export */   \"removeTaskMode\": () => (/* binding */ removeTaskMode),\n/* harmony export */   \"taskModal\": () => (/* binding */ taskModal)\n/* harmony export */ });\nconst body = document.querySelector('body');\nconst main = document.querySelector('main');\n\nclass ProjectTasks {\n    constructor(id, task1, task2, task3, task4, task5) {\n        this.id = id;\n        this.task1 = task1;\n        this.task2 = task2;\n        this.task3 = task3;\n        this.task4 = task4;\n        this.task5 = task5;\n    }\n}\n\nclass MakeTask {\n    constructor(title, desc) {\n        this.title = title;\n        this.desc = desc;\n    }\n}\n\nfunction taskModal() {\n    const modalBackground = document.createElement('div');\n    const modalForm = document.createElement('div');\n    const formHeader = document.createElement('header');\n    const buttonClasses = ['new', 'remove'];\n\n    modalForm.appendChild(formHeader);\n    for (let i = 0; i < buttonClasses.length; i++) {\n        const headerBtn = document.createElement('button');\n        headerBtn.classList.add(`${buttonClasses[i]}`);\n        headerBtn.innerHTML = `${buttonClasses[i]}`;\n        formHeader.appendChild(headerBtn);\n    }\n\n    modalBackground.classList.add('task-modal', 'modal', 'hidden');\n    modalForm.classList.add('task-display');\n    modalForm.setAttribute('id', 'task-display');\n    formHeader.classList.add('task-header');\n\n    modalBackground.appendChild(modalForm);\n    body.appendChild(modalBackground);\n}\n\n// New button\nfunction newTaskEvent() {\n    const newBtn = document.querySelector('.new');\n    const modalForm = document.querySelector('.task-display');\n    const taskDetails = document.querySelector('#task-details');\n    const taskDisplay = document.querySelector('#task-display');\n    const decisionBtn = document.querySelector('#decision');\n    newBtn.addEventListener('click', () => {\n        if (taskDisplay.childNodes.length <= 6) {\n        // Hide task modal\n        modalForm.classList.add('hidden');\n        modalForm.classList.remove('task-display');\n        // Reveal task detail modal\n        taskDetails.classList.toggle('hidden');\n        taskDetails.classList.toggle('task-details');\n\n        // Display ' CREATE TASK ' button\n        decisionBtn.innerHTML = 'create task'\n        decisionBtn.classList.add('create-task');\n        decisionBtn.classList.remove('save-task');\n        }\n    });\n}\n\nfunction exitModal() {\n    const taskDisplay = document.querySelector('#task-display');\n    const taskExitBtn = document.createElement('button');\n\n    exitModalFn(taskExitBtn);\n    taskExitBtn.setAttribute('id', 'task-modal-exit');\n    taskExitBtn.innerHTML = 'X';\n\n    taskDisplay.appendChild(taskExitBtn);\n}\n\nfunction exitModalFn(btn) {\n    const taskModal = document.querySelector('.task-modal');\n    btn.addEventListener('click', () => {\n        taskModal.classList.remove('shown');\n        taskModal.classList.add('hidden');\n    });\n}\n\nfunction removeTaskMode() {\n    const removeBtn = document.querySelector('.remove');\n    const newBtn = document.querySelector('.new');\n    removeBtn.addEventListener('click', () => {\n        const taskSelector = document.querySelectorAll('#task-display > p');\n        if (taskSelector.length > 0) {\n            taskSelector.forEach(item => {\n                item.classList.toggle('remove-mode');\n            });\n        }\n\n        disableNew(newBtn);\n    });\n}\n\nfunction disableNew(newBtn) {\n    newBtn.disabled ? newBtn.disabled = false : newBtn.disabled = true;\n    newBtn.classList.toggle('new-disabled');\n    newBtn.classList.toggle('new');\n}\n\nfunction toggleTaskDisplays(taskDisplay, detailsModal) {\n        detailsModal.classList.toggle('task-details');\n        detailsModal.classList.toggle('hidden');\n        // Reveal overview of task modal\n        taskDisplay.classList.toggle('hidden');\n        taskDisplay.classList.toggle('task-display');\n}\n\n// Edit an existing task / ability to save said task\nfunction taskEditDetails(task, taskDisplay, detailsModal, currTask) {\n    const titleSelect = document.querySelector('.title');\n    const descSelect = document.querySelector('.details');\n    const decisionBtn = document.querySelector('#decision');\n\n    \n    task.addEventListener('click', () => {\n        if (!task.classList.contains('remove-mode')) {\n        titleSelect.value = currTask.title;\n        descSelect.value = currTask.desc;\n        decisionBtn.innerHTML = 'save';\n        decisionBtn.classList.remove('create-task');\n        decisionBtn.classList.add('save-task');\n        toggleTaskDisplays(taskDisplay, detailsModal);\n        } else if (task.classList.contains('remove-mode')) {\n            task.parentNode.removeChild(task);\n        }\n    });\n\n    function saveTask() {\n        task.innerHTML = titleSelect.value;\n        currTask.title = titleSelect.value;\n        currTask.desc = descSelect.value;\n        titleSelect.value = '';\n        descSelect.value = '';\n        toggleTaskDisplays(taskDisplay, detailsModal);\n    }\n\n    taskEditDetails.saveTask = saveTask;\n}\n\n// Close out of current modal while wiping Task Details values to start from a clean slate\nfunction exitBtnEvent(exitBtn, detailsModal) {\n    const taskDisplay = document.querySelector('#task-display');\n    \n    exitBtn.addEventListener('click', () => {\n        // Resets title and description\n        const title = document.querySelector('.title');\n        const desc = document.querySelector('.details');\n    \n        title.value = '';\n        desc.value = '';\n        toggleTaskDisplays(taskDisplay, detailsModal);\n    });\n}\n\n// Execute Create or Save function from single button in Task Modal depending on what the user is trying to achieve\nfunction decisionBtnEvent(decisionBtn, detailsModal) {\n    const title = document.querySelector('.title');\n    const desc = document.querySelector('.details');\n    const taskDisplay = document.getElementById('task-display');\n    decisionBtn.addEventListener('click', () => {\n        if (decisionBtn.innerHTML == 'create task' && taskDisplay.childNodes.length <= 6 && title.value.length >= 3) {\n            const selectedProj = document.querySelector('.selected-proj');\n            console.log(selectedProj);\n            createTask(title, desc, taskDisplay, detailsModal);\n        } else if (decisionBtn.innerHTML == 'save' && taskDisplay.childNodes.length <= 6 && title.value.length >= 3) {\n            taskEditDetails.saveTask();\n        } else {\n            alert('Title must be 3 characters min.')\n        }\n    });\n\n}\n\n// Create and append task to Task Display modal\nfunction createTask(title, desc, taskDisplay, detailsModal) {\n\n    // Was able to grab currently selected project with the class and variable ' selected-proj / selectedProj '\n    // We can now evaulate the id of the currently selected project and now create a new Project Object\n    // by comparing to our empty currProjectList array to main.childNodes.length\n    // basically if the currProjectList is behind in length it will create a new instance of a Project Object and label it the currently selected's id\n    // Now we can start manipulating the instance and fill it with unique tasks\n    // And any time someone chooses to look at a project's tasks it will check to see if the instance exists in the array\n    // if it does not exist it will just create a new one and the next time they click it again it should load up that instance\n    // And if it does it will populate the taskDisplay with the instance's unique tasks created previously\n\n\n    // let taskCounter = taskDisplay.childNodes.length;\n    //     let currTask = taskList[taskList.length - 1];\n\n    //     const taskDetails = document.createElement('p');\n    //     taskDetails.setAttribute('id', `task-${taskList.length - 1}`);\n    //     taskDetails.innerHTML = currTask.title;\n\n\n    // Clear Task Detail input areas\n\n\n        // title.value = '';\n        // desc.value = '';\n\n        // taskDisplay.append(taskDetails);\n        // toggleTaskDisplays(taskDisplay, detailsModal);\n        // taskEditDetails(taskDetails, taskDisplay, detailsModal, currTask);\n}\n\nfunction newTaskDetails() {\n    const modalSelect = document.querySelector('.task-modal');\n    const newTaskContainer = document.createElement('div');\n    const decisionBtn = document.createElement('button');\n    const exitBtn = document.createElement('button');\n    const textareaClasses = ['title', 'details'];\n\n    textareaClasses.forEach(item => {\n        const textArea = document.createElement('textarea');\n        textArea.classList.add(`${item}`);\n        if (item == 'title') {\n            textArea.setAttribute('maxlength', '43');\n            textArea.setAttribute('placeholder', 'Task Title (3 characters MIN )');\n            newTaskContainer.appendChild(textArea);\n        } else {\n            textArea.setAttribute('maxlength', '410');\n            textArea.setAttribute('placeholder', 'Type your task details here ( 400 characters MAX )');\n            newTaskContainer.appendChild(textArea);\n        }\n    });\n\n    \n    decisionBtn.setAttribute('id', 'decision');\n\n    exitBtn.innerHTML = 'X';\n    exitBtn.classList.add('exit-details');\n\n    newTaskContainer.classList.add('hidden');\n    newTaskContainer.setAttribute('id', 'task-details');\n    newTaskContainer.append(decisionBtn, exitBtn)\n    modalSelect.appendChild(newTaskContainer);\n\n    exitBtnEvent(exitBtn, newTaskContainer);\n    decisionBtnEvent(decisionBtn, newTaskContainer);\n}\n\n//# sourceURL=webpack://todo-list/./src/script/taskmodal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/taskmodal.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;