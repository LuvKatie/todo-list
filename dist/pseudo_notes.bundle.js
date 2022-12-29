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

/***/ "./src/script/pseudo_notes.js":
/*!************************************!*\
  !*** ./src/script/pseudo_notes.js ***!
  \************************************/
/***/ (() => {

eval("// 12 - 20 - 22\n\n// Just finished fixing save functionality\n\n// Edit project ability\n// Deleting Projects\n\n// Nav bar should be Home and All Projects\n// On Home if user presses Create Project it will just take them to All Projects and following that bring up the Create Project modal\n\n// Restyle ' Home ' page to have \" Other projects \" hanging to the right half of main\n// and the ' Main ' project hanging on the left half of main\n\n// ------------- 12 / 27 / 2022 -------------\n\n// Added DOM for next and previous page buttons\n// Added functionality to display the next page of contents correctly\n\n// Need to add functionality for ' Previous ' page button\n// Need to add method for tracking which page we are on\n\n// Pseudo code \n// for Next / Previous page buttons if the user is scrolling finished pages\n// When a NEW page is created our current code will disable the ' Next ' button because there is no existing next page.\n// HOWEVER if a user were to press the ' Previous ' button\n// We have the ability to track page number in our parameters whenever we hookup listeners to the buttons\n// So I can add a hook to ' Previous ' button every time we click to the next new page\n// and basically call the populateMain() function again but with page - 1\n\n// Maybe we need to rework the populateMain() function to work with previous page scrolling\n\n\n// DONT FORGET WE STILL NEED TO TRACK TASKS WITH EACH INDIVIDUAL PROJECT\n// ALSO FIGURE OUT HOW WE CAN GET THAT TO WORK WITH PAGE SCROLLING\n// THEN THE FINAL TASK IS REALLY JUST Edit / Delete projects\n// AND restyling main and making ' All Projects ' in nav functional\n// ' All Projects ' will probably just be reworking the grid properties to display everything evenly\n\n\n//# sourceURL=webpack://todo-list/./src/script/pseudo_notes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/pseudo_notes.js"]();
/******/ 	
/******/ })()
;