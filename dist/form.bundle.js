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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContent */ \"./src/script/mainContent.js\");\n\n\nconst body = document.querySelector('body');\n\nlet formModal = (() => {\n    const modal = document.createElement('div');\n    modal.classList.add('modal', 'hidden');\n    body.append(modal);\n\n    window.onclick = function(e) {\n        if (e.target == modal) {\n            const taskForm = document.querySelector('.task-creator');\n            taskForm.classList.toggle('hidden');\n            taskForm.classList.toggle('shown');\n            modal.classList.toggle('hidden');\n            modal.classList.toggle('shown');\n        }\n    }\n})();\n\nlet formLayout = (() => {\n    const modalSelect = document.querySelector('.modal');\n    const form = document.createElement('form');\n    form.classList.add('task-creator', 'hidden');\n    modalSelect.append(form);\n})();\n\n\nconst form = document.querySelector('.task-creator');\n\nlet formContent = (() => {\n    // Array containing all inputs and forEach loop to create and append to form\n    const formNames = ['title', 'description', 'deadline'];\n    formNames.forEach(name => {\n        const label = document.createElement('label');\n        let input;\n        name == 'description' ? input = document.createElement('textarea') : input = document.createElement('input');\n\n        let capFirst = name.slice(0, 1);\n        let restOfName = name.slice(1);\n\n        label.innerHTML = `${capFirst.toUpperCase()}${restOfName}`;\n        label.setAttribute('for', `modal-${name}`);\n        label.setAttribute('class', `modal-${name}`);\n        input.setAttribute('id', `modal-${name}`);\n\n        form.append(label);\n        label.append(input);\n    });\n})();\n\n\nlet descriptionFunc = (() => {\n    const formDesc = document.querySelector('#modal-description');\n    formDesc.setAttribute('rows', 7);\n})();\n\nlet titleFunc = (() => {\n    const formText = document.querySelector('#modal-title');\n    formText.setAttribute('type', 'text');\n    \n})();\n\nlet deadlineFunc = (() => {\n    const formDate = document.querySelector('#modal-deadline');\n    formDate.setAttribute('type', 'date');\n})();\n\nlet priorityDropDown = (() => {\n    // Creating priority drop down selection\n    const priorityLabel = document.createElement('label');\n    const prioritySelect = document.createElement('select');\n    \n    priorityLabel.innerHTML = 'Priority';\n    priorityLabel.setAttribute('for', 'modal-priority');\n    priorityLabel.setAttribute('class', 'modal-priority');\n    prioritySelect.setAttribute('id', 'modal-priority');\n    prioritySelect.setAttribute('name', 'importance');\n    \n    \n    for(let i = 1; i <= 4; i++) {\n        const option = document.createElement('option');\n        option.setAttribute('value', i);\n        option.innerHTML = `${i}`;\n        prioritySelect.append(option);\n    }\n    \n    form.append(priorityLabel);\n    priorityLabel.append(prioritySelect);\n})()\n\nlet formButton = (() => {\n    const btnWrapper = document.createElement('div');\n    const submitBtn = document.createElement('button');\n    btnWrapper.setAttribute('id', 'btn-wrap');\n    submitBtn.setAttribute('id', 'submit');\n    submitBtn.setAttribute('type', 'button');\n    submitBtn.innerHTML = 'Create';\n    form.append(btnWrapper);\n    btnWrapper.append(submitBtn);\n})()\n\nlet formBtnEvent = (() => {\n    const titleSelector = document.querySelector('#modal-title');\n    const dateSelector = document.querySelector('#modal-deadline');\n    const prioritySelector = document.querySelector('#modal-priority');\n    const descSelector = document.querySelector('#modal-description');\n    const btnSelector = document.querySelector('#submit');\n\n    btnSelector.addEventListener('click', () => {\n        _mainContent__WEBPACK_IMPORTED_MODULE_0__.projectList.push(new _mainContent__WEBPACK_IMPORTED_MODULE_0__.Project(\n            titleSelector.value, \n            dateSelector.value, \n            prioritySelector.value, \n            descSelector.value))\n\n        ;(0,_mainContent__WEBPACK_IMPORTED_MODULE_0__.projectDOM)(titleSelector.value, dateSelector.value, prioritySelector.value);\n    });\n})()\n\n//gh-pages\n\n//# sourceURL=webpack://todo-list/./src/script/form.js?");

/***/ }),

/***/ "./src/script/mainContent.js":
/*!***********************************!*\
  !*** ./src/script/mainContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"projectDOM\": () => (/* binding */ projectDOM),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _images_task_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/task-svgrepo-com.svg */ \"./src/images/task-svgrepo-com.svg\");\n/* harmony import */ var _images_trash_bin_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/trash-bin-svgrepo-com.svg */ \"./src/images/trash-bin-svgrepo-com.svg\");\n/* harmony import */ var _images_write_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/write-svgrepo-com.svg */ \"./src/images/write-svgrepo-com.svg\");\n\n\n\n\nconst projectList = [];\nconst main = document.querySelector('main');\n\nconst Project = function(title, date, priority, desc) {\n    this.title = title;\n    this.date = date;\n    this.priority = priority;\n    this.desc = desc;\n}\n\nlet projectDOM = function(title, date, priority) {\n    const projSections = ['complete', 'title', 'deadline', 'options'];\n    const projectContainer = document.createElement('div');\n    const projCard = document.createElement('div');\n\n    projSections.forEach(name => {\n        switch(name) {\n            case 'complete':\n                const completeCheck = document.createElement('input');\n                completeCheck.setAttribute('class', `${name}`);\n                completeCheck.setAttribute('type', 'checkbox');\n                projCard.append(completeCheck);\n                break;\n            case 'options':\n                const optionIcons = document.createElement('div');\n\n                const taskIcon = new Image();\n                taskIcon.src = _images_task_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__;\n                taskIcon.classList.add('taskBtn');\n                taskIcon.addEventListener('click', () => {\n                    taskList(taskIcon);\n                });\n                const editIcon = new Image();\n                editIcon.src = _images_write_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__;\n                editIcon.classList.add('editBtn');\n                const trashIcon = new Image();\n                trashIcon.src = _images_trash_bin_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__;\n                trashIcon.classList.add('trashBtn');\n\n                optionIcons.setAttribute('class', `${name}`);\n                optionIcons.append(taskIcon, editIcon, trashIcon);\n                projCard.append(optionIcons);\n                break;\n            default:\n                const txtDetail = document.createElement('p');\n\n                if(name == 'title') {\n                    txtDetail.innerHTML = `${title}`;\n                } else if(name == 'deadline') {\n                    txtDetail.innerHTML = `${date}`;\n                }\n\n                txtDetail.setAttribute('class', `${name}`);\n                \n                projCard.append(txtDetail);\n                break;\n            }\n        });\n        \n        projCard.setAttribute('id', `project-${projectList.length}`);\n        projCard.setAttribute('class', `project`);\n        projectContainer.append(projCard)\n        projectContainer.setAttribute('class', 'projContainer');\n        main.append(projectContainer);\n\n        projPriority(priority, projCard);\n}\n\nfunction projPriority(priority, projCard) {\n    switch(priority) {\n        case \"1\":\n            projCard.style.backgroundColor = \"#fcfcfc\";\n            break;\n        case \"2\":\n            projCard.style.backgroundColor = \"rgb(188 205 249)\";\n            break;\n        case \"3\":\n            projCard.style.backgroundColor = \"#adf7d1\";\n            break;\n        case \"4\":\n            projCard.style.backgroundColor = \"rgb(249 132 132)\";\n            break;\n    };\n}\n\nfunction taskList(task) {\n    console.log(task);\n    // Grab specific project card so we can load specific tasks for that project\n}\n\n//gh-pages\n\n\n//# sourceURL=webpack://todo-list/./src/script/mainContent.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/form.js");
/******/ 	
/******/ })()
;