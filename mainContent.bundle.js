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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"projectDOM\": () => (/* binding */ projectDOM),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList)\n/* harmony export */ });\nconst projectList = [];\nconst main = document.querySelector('main');\n\nconst Project = function(title, date, priority, desc) {\n    this.title = title;\n    this.date = date;\n    this.priority = priority;\n    this.desc = desc;\n}\n\nlet projectDOM = function() {\n    const formNames = ['title', 'description', 'deadline'];\n    const projForm = document.createElement('form');\n    const projectContainer = document.createElement('div');\n    formNames.forEach(name => {\n        const label = document.createElement('label');\n        let input;\n        name == 'description' ? input = document.createElement('textarea') : input = document.createElement('input');\n\n        let capFirst = name.slice(0, 1);\n        let restOfName = name.slice(1);\n\n        projForm.setAttribute('id', `project-${projectList.length}`);\n        projForm.setAttribute('class', `project`);\n\n        label.innerHTML = `${capFirst.toUpperCase()}${restOfName}`;\n        label.setAttribute('class', `${name}`);\n\n        input.setAttribute('readonly', '');\n\n        projectContainer.append(projForm)\n        projForm.append(label);\n        label.append(input);\n    });\n\n\n    projectContainer.setAttribute('class', 'projContainer');\n    main.append(projectContainer);\n\n    projectDropDown(projForm);\n    projectFormTypes();\n}\n\nlet projectFormTypes = function() {\n    const projTitle = document.querySelector('.project > .title > input')\n    projTitle.setAttribute('type', 'text');\n\n    const projDate = document.querySelector('.project > .deadline > input')\n    projDate.setAttribute('type', 'date');\n\n    const projDesc = document.querySelector('.project > .description > textarea')\n    projDesc.setAttribute('rows', 7);\n};\n\nlet projectDropDown = function(form) {\n    const priorityLabel = document.createElement('label');\n    const prioritySelect = document.createElement('select');\n    \n    priorityLabel.innerHTML = 'Priority';\n    priorityLabel.setAttribute('for', 'priority');\n    priorityLabel.setAttribute('class', 'priority');\n    prioritySelect.setAttribute('name', 'importance');\n    \n    \n    for(let i = 1; i <= 4; i++) {\n        const option = document.createElement('option');\n        option.setAttribute('value', i);\n        option.innerHTML = `${i}`;\n        prioritySelect.append(option);\n    }\n    \n    form.append(priorityLabel);\n    priorityLabel.append(prioritySelect);\n}\n\n//# sourceURL=webpack://todo-list/./src/script/mainContent.js?");

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
/******/ 	__webpack_modules__["./src/script/mainContent.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;