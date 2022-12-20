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

/***/ "./src/script/mainContent.js":
/*!***********************************!*\
  !*** ./src/script/mainContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectDOM\": () => (/* binding */ projectDOM)\n/* harmony export */ });\n/* harmony import */ var _images_task_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/task-svgrepo-com.svg */ \"./src/images/task-svgrepo-com.svg\");\n/* harmony import */ var _images_trash_bin_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/trash-bin-svgrepo-com.svg */ \"./src/images/trash-bin-svgrepo-com.svg\");\n/* harmony import */ var _images_write_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/write-svgrepo-com.svg */ \"./src/images/write-svgrepo-com.svg\");\n/* harmony import */ var _taskmodal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskmodal */ \"./src/script/taskmodal.js\");\n\n\n\n\n\n\nconst main = document.querySelector('main');\n\n\nlet projectDOM = function(title, date, priority) {\n    const projSections = ['complete', 'proj-title', 'deadline', 'options'];\n    const projectContainer = document.createElement('div');\n    const projCard = document.createElement('div');\n\n    projSections.forEach(name => {\n        switch(name) {\n            case 'complete':\n                const completeCheck = document.createElement('input');\n                completeCheck.setAttribute('class', `${name}`);\n                completeCheck.setAttribute('type', 'checkbox');\n                projCard.append(completeCheck);\n                break;\n            case 'options':\n                const optionIcons = document.createElement('div');\n\n                const taskIcon = new Image();\n                taskIcon.src = _images_task_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__;\n                taskIcon.classList.add('taskBtn');\n                const editIcon = new Image();\n                editIcon.src = _images_write_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__;\n                editIcon.classList.add('editBtn');\n                const trashIcon = new Image();\n                trashIcon.src = _images_trash_bin_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__;\n                trashIcon.classList.add('trashBtn');\n\n                optionIcons.setAttribute('class', `${name}`);\n                optionIcons.append(taskIcon, editIcon, trashIcon);\n                projCard.append(optionIcons);\n\n                iconEvents(taskIcon, editIcon, trashIcon);\n                break;\n            default:\n                const txtDetail = document.createElement('p');\n\n                if(name == 'proj-title') {\n                    txtDetail.innerHTML = `${title}`;\n                } else if(name == 'deadline') {\n                    txtDetail.innerHTML = `${date}`;\n                }\n\n                txtDetail.setAttribute('class', `${name}`);\n                \n                projCard.append(txtDetail);\n                break;\n            }\n        });\n        \n        projCard.setAttribute('id', `project-${main.childNodes.length}`);\n        projCard.setAttribute('class', `project`);\n        projectContainer.append(projCard)\n        projectContainer.setAttribute('class', 'projContainer');\n        main.append(projectContainer);\n\n        projPriority(priority, projCard);\n}\n\nfunction projPriority(priority, projCard) {\n    switch(priority) {\n        case \"1\":\n            projCard.style.backgroundColor = \"#fcfcfc\";\n            break;\n        case \"2\":\n            projCard.style.backgroundColor = \"rgb(188 205 249)\";\n            break;\n        case \"3\":\n            projCard.style.backgroundColor = \"#adf7d1\";\n            break;\n        case \"4\":\n            projCard.style.backgroundColor = \"rgb(249 132 132)\";\n            break;\n    };\n}\n\n// Filters the project elements to remove selected-proj class if they were not the intended target\nfunction selectedProject(iconParent) {\n    iconParent.classList.add('selected-proj');\n    const includesClass = document.querySelectorAll('main > div > .selected-proj');\n\n    if (includesClass.length > 1) {\n        includesClass.forEach(e => {\n            if (e.classList.contains('selected-proj') && e !== iconParent) {\n                e.classList.remove('selected-proj');\n            }\n        });\n    }\n}\n\nfunction iconEvents(task, edit, trash) {\n    \n    task.addEventListener('click', () => {\n        const iconParent = task.closest('.project');\n        const taskDisplay = document.querySelector('.task-modal');\n        \n        taskDisplay.classList.remove('hidden');\n        taskDisplay.classList.add('shown');\n        \n        selectedProject(iconParent);\n    });\n    \n    edit.addEventListener('click', () => {\n        const iconParent = edit.closest('.project');\n        iconParent.style.backgroundColor = 'lightblue';\n    });\n    \n    trash.addEventListener('click', () => {\n        const iconParent = trash.closest('.project');\n        iconParent.style.backgroundColor = 'lightgreen';\n    });\n}\n\n\n//# sourceURL=webpack://todo-list/./src/script/mainContent.js?");

/***/ }),

/***/ "./src/script/taskmodal.js":
/*!*********************************!*\
  !*** ./src/script/taskmodal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exitBtnEvent\": () => (/* binding */ exitBtnEvent),\n/* harmony export */   \"exitModal\": () => (/* binding */ exitModal),\n/* harmony export */   \"newTaskDetails\": () => (/* binding */ newTaskDetails),\n/* harmony export */   \"newTaskEvent\": () => (/* binding */ newTaskEvent),\n/* harmony export */   \"removeTaskMode\": () => (/* binding */ removeTaskMode),\n/* harmony export */   \"taskModal\": () => (/* binding */ taskModal)\n/* harmony export */ });\nconst body = document.querySelector('body');\n\nlet projectList = [];\nlet projectTaskList = [];\n\nclass ProjectTasks {\n    constructor(id, task1, task2, task3, task4, task5) {\n        this.id = id;\n        this.task1 = task1;\n        this.task2 = task2;\n        this.task3 = task3;\n        this.task4 = task4;\n        this.task5 = task5;\n    }\n}\n\nclass ProjectID {\n    constructor(id) {\n        this.id = id;\n    }\n}\n\nclass MakeTask {\n    constructor(title, desc) {\n        this.title = title;\n        this.desc = desc;\n    }\n}\n\nfunction taskModal() {\n    const modalBackground = document.createElement('div');\n    const modalForm = document.createElement('div');\n    const formHeader = document.createElement('header');\n    const buttonClasses = ['new', 'remove'];\n\n    modalForm.appendChild(formHeader);\n    for (let i = 0; i < buttonClasses.length; i++) {\n        const headerBtn = document.createElement('button');\n        headerBtn.classList.add(`${buttonClasses[i]}`);\n        headerBtn.innerHTML = `${buttonClasses[i]}`;\n        formHeader.appendChild(headerBtn);\n    }\n\n    modalBackground.classList.add('task-modal', 'modal', 'hidden');\n    modalForm.classList.add('task-display');\n    modalForm.setAttribute('id', 'task-display');\n    formHeader.classList.add('task-header');\n\n    modalBackground.appendChild(modalForm);\n    body.appendChild(modalBackground);\n}\n\n// New button\nfunction newTaskEvent() {\n    const newBtn = document.querySelector('.new');\n    const modalForm = document.querySelector('.task-display');\n    const taskDetails = document.querySelector('#task-details');\n    const taskDisplay = document.querySelector('#task-display');\n    const decisionBtn = document.querySelector('#decision');\n    newBtn.addEventListener('click', () => {\n        if (taskDisplay.childNodes.length <= 6) {\n        // Hide task modal\n        modalForm.classList.add('hidden');\n        modalForm.classList.remove('task-display');\n        // Reveal task detail modal\n        taskDetails.classList.toggle('hidden');\n        taskDetails.classList.toggle('task-details');\n\n        // Display ' CREATE TASK ' button\n        decisionBtn.innerHTML = 'create task'\n        decisionBtn.classList.add('create-task');\n        decisionBtn.classList.remove('save-task');\n        }\n    });\n}\n\nfunction exitModal() {\n    const taskDisplay = document.querySelector('#task-display');\n    const taskExitBtn = document.createElement('button');\n\n    exitModalFn(taskExitBtn);\n    taskExitBtn.setAttribute('id', 'task-modal-exit');\n    taskExitBtn.innerHTML = 'X';\n\n    taskDisplay.appendChild(taskExitBtn);\n}\n\nfunction exitModalFn(btn) {\n    const taskModal = document.querySelector('.task-modal');\n    btn.addEventListener('click', () => {\n        taskModal.classList.remove('shown');\n        taskModal.classList.add('hidden');\n    });\n}\n\nfunction removeTaskMode() {\n    const removeBtn = document.querySelector('.remove');\n    const newBtn = document.querySelector('.new');\n    removeBtn.addEventListener('click', () => {\n        const taskSelector = document.querySelectorAll('#task-display > p');\n        if (taskSelector.length > 0) {\n            taskSelector.forEach(item => {\n                item.classList.toggle('remove-mode');\n            });\n        }\n\n        disableNew(newBtn);\n    });\n}\n\nfunction disableNew(newBtn) {\n    newBtn.disabled ? newBtn.disabled = false : newBtn.disabled = true;\n    newBtn.classList.toggle('new-disabled');\n    newBtn.classList.toggle('new');\n}\n\nfunction toggleTaskDisplays(taskDisplay, detailsModal) {\n        detailsModal.classList.toggle('task-details');\n        detailsModal.classList.toggle('hidden');\n        // Reveal overview of task modal\n        taskDisplay.classList.toggle('hidden');\n        taskDisplay.classList.toggle('task-display');\n}\n\n// Edit an existing task / ability to save said task\nfunction taskEditDetails(task, taskDisplay, detailsModal, currTask) {\n    const titleSelect = document.querySelector('.title');\n    const descSelect = document.querySelector('.details');\n    const decisionBtn = document.querySelector('#decision');\n\n    \n    task.addEventListener('click', () => {\n        if (!task.classList.contains('remove-mode')) {\n        titleSelect.value = currTask.title;\n        descSelect.value = currTask.desc;\n        decisionBtn.innerHTML = 'save';\n        decisionBtn.classList.remove('create-task');\n        decisionBtn.classList.add('save-task');\n        toggleTaskDisplays(taskDisplay, detailsModal);\n        } else if (task.classList.contains('remove-mode')) {\n            task.parentNode.removeChild(task);\n        }\n    });\n\n    function saveTask() {\n        task.innerHTML = titleSelect.value;\n        currTask.title = titleSelect.value;\n        currTask.desc = descSelect.value;\n        titleSelect.value = '';\n        descSelect.value = '';\n        toggleTaskDisplays(taskDisplay, detailsModal);\n    }\n\n    taskEditDetails.saveTask = saveTask;\n}\n\n// Close out of current modal while wiping Task Details values to start from a clean slate\nfunction exitBtnEvent(exitBtn, detailsModal) {\n    const taskDisplay = document.querySelector('#task-display');\n    \n    exitBtn.addEventListener('click', () => {\n        // Resets title and description\n        const title = document.querySelector('.title');\n        const desc = document.querySelector('.details');\n    \n        title.value = '';\n        desc.value = '';\n        toggleTaskDisplays(taskDisplay, detailsModal);\n    });\n}\n\n// Execute Create or Save function from single button in Task Modal depending on what the user is trying to achieve\nfunction decisionBtnEvent(decisionBtn, detailsModal) {\n    const title = document.querySelector('.title');\n    const desc = document.querySelector('.details');\n    const taskDisplay = document.getElementById('task-display');\n    decisionBtn.addEventListener('click', () => {\n        if (decisionBtn.innerHTML == 'create task' && taskDisplay.childNodes.length <= 6 && title.value.length >= 3) {\n            createTask(title, desc, taskDisplay, detailsModal);\n        } else if (decisionBtn.innerHTML == 'save' && taskDisplay.childNodes.length <= 6 && title.value.length >= 3) {\n            taskEditDetails.saveTask();\n        } else {\n            alert('Title must be 3 characters min.')\n        }\n    });\n\n}\n\nfunction matchFinder(arr, projID, projClass) {\n    const foundMatch = arr.some(i => i.id == projID);\n    if (!foundMatch) {\n        arr.push(new projClass(projID));\n        console.log(arr);\n    }\n}\n\nfunction recordNewProject() {\n    const main = document.querySelector('main');\n    const currSelectedProjID = document.querySelector('.selected-proj').id;\n    const mainChilds = main.childNodes.length;\n    const projects = projectList.length;\n    const tasks = projectTaskList.length;\n\n    let currSelectedProj;\n\n    // Adds new instance of project as a new object in projectList array\n    \n    if (projects < mainChilds) {\n        matchFinder(projectList, currSelectedProjID, ProjectID);\n    }\n    \n    if (tasks <= projects) {\n        matchFinder(projectTaskList, currSelectedProjID, ProjectTasks);\n    }\n    \n    // Sets currSelectedProj as the selected project's object instance via matching id's\n    // Will use this same function to create unique task objects that correlate to these new project instances\n    // Note to self: I have created a separate array that will work in tandem with projectList and this is taskList\n    // This method below will create new ProjectTasks instances that will contain the same unique id as the currSelectedProj\n\n    projectList.forEach(i => {\n        if (i.id == currSelectedProjID) {\n            currSelectedProj = i;\n            console.log(currSelectedProj);\n        };\n    });\n\n}\n\n// Create and append task to Task Display modal\nfunction createTask(title, desc, taskDisplay, detailsModal) {\n    recordNewProject();\n\n    const currSelectedProjID = document.querySelector('.selected-proj').id;\n\n    projectTaskList.forEach(projTask => {\n        if (projTask.id == currSelectedProjID) {\n\n            for (let i = 1; i <= 5; i++) {\n\n                if(projTask[`task${i}`] == undefined) {\n                    projTask[`task${i}`] = new MakeTask(title.value, desc.value);\n                    console.log(projectTaskList);\n                    console.log(projTask[`task${i}`].title);\n                    return;\n                }\n            return;\n            }\n        }\n    });\n\n        // const taskDetails = document.createElement('p');\n        // taskDetails.innerHTML = currTask.title;\n\n        // title.value = '';\n        // desc.value = '';\n\n        // taskDisplay.append(taskDetails);\n        // toggleTaskDisplays(taskDisplay, detailsModal);\n        // taskEditDetails(taskDetails, taskDisplay, detailsModal, currTask);\n}\n\nfunction newTaskDetails() {\n    const modalSelect = document.querySelector('.task-modal');\n    const newTaskContainer = document.createElement('div');\n    const decisionBtn = document.createElement('button');\n    const exitBtn = document.createElement('button');\n    const textareaClasses = ['title', 'details'];\n\n    textareaClasses.forEach(item => {\n        const textArea = document.createElement('textarea');\n        textArea.classList.add(`${item}`);\n        if (item == 'title') {\n            textArea.setAttribute('maxlength', '43');\n            textArea.setAttribute('placeholder', 'Task Title (3 characters MIN )');\n            newTaskContainer.appendChild(textArea);\n        } else {\n            textArea.setAttribute('maxlength', '410');\n            textArea.setAttribute('placeholder', 'Type your task details here ( 400 characters MAX )');\n            newTaskContainer.appendChild(textArea);\n        }\n    });\n\n    \n    decisionBtn.setAttribute('id', 'decision');\n\n    exitBtn.innerHTML = 'X';\n    exitBtn.classList.add('exit-details');\n\n    newTaskContainer.classList.add('hidden');\n    newTaskContainer.setAttribute('id', 'task-details');\n    newTaskContainer.append(decisionBtn, exitBtn)\n    modalSelect.appendChild(newTaskContainer);\n\n    exitBtnEvent(exitBtn, newTaskContainer);\n    decisionBtnEvent(decisionBtn, newTaskContainer);\n}\n\n//# sourceURL=webpack://todo-list/./src/script/taskmodal.js?");

/***/ }),

/***/ "./src/images/task-svgrepo-com.svg":
/*!*****************************************!*\
  !*** ./src/images/task-svgrepo-com.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"69a184040a0a2dc10a90.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/task-svgrepo-com.svg?");

/***/ }),

/***/ "./src/images/trash-bin-svgrepo-com.svg":
/*!**********************************************!*\
  !*** ./src/images/trash-bin-svgrepo-com.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"caa05fbf0d96e546fcd2.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/trash-bin-svgrepo-com.svg?");

/***/ }),

/***/ "./src/images/write-svgrepo-com.svg":
/*!******************************************!*\
  !*** ./src/images/write-svgrepo-com.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"43f44a67e1e048a1a460.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/write-svgrepo-com.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/mainContent.js");
/******/ 	
/******/ })()
;