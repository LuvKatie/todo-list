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

/***/ "./src/script/nav.js":
/*!***************************!*\
  !*** ./src/script/nav.js ***!
  \***************************/
/***/ (() => {

eval("const nav = document.querySelector('nav');\n\nlet navDirectory = (() => {\n    let navNames = ['Home', 'All Projects', 'New Project'];\n\n    navNames.forEach(link => {\n        const name = document.createElement('h2');\n        const linkLowerCase = link.toLowerCase();\n        name.innerHTML = link;\n        name.setAttribute('id', linkLowerCase)\n        nav.append(name);\n    });\n})();\n\nlet newProjEvent = (() => {\n    const newProj = document.getElementById('new project');\n    \n    newProj.addEventListener('click', () => {\n        const modal = document.querySelector('.project-modal');\n        const taskForm = document.querySelector('.task-creator');\n        const modalTitle = document.getElementById('modal-title');\n        const modalDesc = document.getElementById('modal-description');\n        const modalDue = document.getElementById('modal-deadline');\n        const modalPrio = document.getElementById('modal-priority');\n        const modalArr = [modalTitle, modalDesc, modalDue, modalPrio];\n\n        modalArr.forEach(e => {\n            if (e == modalPrio) {\n                e.value = 'Low';\n            } else {\n                e.value = '';\n            }\n        });\n        \n        const btnSelector = document.querySelector('#submit');\n\n        btnSelector.textContent == 'Create'\n        taskForm.classList.toggle('hidden');\n        taskForm.classList.toggle('shown');\n        modal.classList.toggle('hidden');\n        modal.classList.toggle('shown');\n    });\n\n})();\n\n//# sourceURL=webpack://todo-list/./src/script/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/nav.js"]();
/******/ 	
/******/ })()
;