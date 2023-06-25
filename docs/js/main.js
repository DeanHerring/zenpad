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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst editor = document.querySelector('#editor');\r\n\r\n// Ещё лучше, осталось только решить проблему с внешними паддингами\r\nfunction scrollToElement(element, block) {\r\n  const offsetTop = element.offsetTop;\r\n  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;\r\n  const editor_offset = editor.offsetTop;\r\n\r\n  let scrollPosition;\r\n\r\n  if (block === 'center') {\r\n    scrollPosition = offsetTop - windowHeight / 2 + element.offsetHeight + editor_offset;\r\n  } else {\r\n    scrollPosition = offsetTop;\r\n  }\r\n\r\n  window.scrollTo({\r\n    top: scrollPosition,\r\n    behavior: 'smooth',\r\n  });\r\n}\r\n\r\nconst centered = () => {\r\n  let selection = window.getSelection();\r\n  let range = selection.getRangeAt(0);\r\n  let currentNode = range.startContainer;\r\n\r\n  while (currentNode.nodeType !== Node.ELEMENT_NODE) {\r\n    currentNode = currentNode.parentNode;\r\n  }\r\n\r\n  //   currentNode.scrollIntoView({\r\n  //     block: 'center',\r\n  //     inline: 'end',\r\n  //     behavior: 'smooth',\r\n  //   });\r\n  scrollToElement(currentNode, 'center');\r\n};\r\n\r\nvar quill = new Quill(editor, {\r\n  theme: 'snow',\r\n  modules: {\r\n    toolbar: false,\r\n  },\r\n  placeholder: 'Hello, world',\r\n});\r\n//\r\n\r\neditor.addEventListener('keydown', centered);\r\neditor.addEventListener('keyup', centered);\r\nquill.on('text-change', centered);\r\n\n\n//# sourceURL=webpack://html-template/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./src/js/main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;