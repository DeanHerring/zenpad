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

/***/ "./src/js/UI.js":
/*!**********************!*\
  !*** ./src/js/UI.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ \"./src/js/Utils.js\");\n\r\n\r\nconst utils = new _Utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils();\r\n\r\nconst loadSelectValue = (storageId, selectName) => {\r\n  const selectDOM = document.querySelector(selectName);\r\n\r\n  if (selectDOM) {\r\n    if (localStorage.getItem(storageId)) {\r\n      const { olSelectActive } = utils.getChildsByParent(selectDOM);\r\n      olSelectActive.innerText = localStorage.getItem(storageId);\r\n    }\r\n  } else {\r\n    console.log('[UI.Lib 2]: Переданный идентификатор не существует ни у одного из DOM элементов');\r\n  }\r\n};\r\n\r\nclass Ol {\r\n  constructor() {\r\n    this.selectValue = '123';\r\n  }\r\n\r\n  select(domEl) {\r\n    if (domEl) {\r\n      const select = document.querySelector(domEl);\r\n\r\n      if (select) {\r\n        const { olSelectActive, olSelectIcon, olSelectItems, olSelectList, olSelectOpen } =\r\n          utils.getChildsByParent(select);\r\n\r\n        olSelectOpen.addEventListener('click', () => {\r\n          this.selectChangeVisible(olSelectList, olSelectIcon);\r\n        });\r\n        olSelectItems.forEach((item) => {\r\n          item.addEventListener('click', (e) => {\r\n            const target = e.target;\r\n            const value = target.getAttribute('data-item');\r\n\r\n            olSelectActive.innerText = value;\r\n\r\n            this.selectSetValue(value);\r\n            this.selectChangeVisible(olSelectList, olSelectIcon);\r\n          });\r\n        });\r\n      }\r\n    }\r\n  }\r\n  selectWatcher(selectName, storageId) {\r\n    const selectDOM = document.querySelector(selectName);\r\n\r\n    if (selectDOM) {\r\n      utils.getChildsByParent(selectDOM).olSelectItems.forEach((item) => {\r\n        item.addEventListener('click', (e) => {\r\n          const target = e.target;\r\n          const itemValue = target.getAttribute('data-item');\r\n\r\n          localStorage.setItem(storageId, itemValue);\r\n        });\r\n      });\r\n    } else {\r\n      console.log('[UI.Lib]: Переданный идентификатор не существует ни у одного из DOM элементов');\r\n    }\r\n  }\r\n  selectChangeVisible(list, icon) {\r\n    list.classList.toggle('hidden');\r\n    icon.classList.toggle('rotate-180');\r\n  }\r\n  selectSetValue(value) {\r\n    this.selectValue = value;\r\n  }\r\n  selectGetValue() {\r\n    return this.selectValue;\r\n  }\r\n  selectGetValue() {\r\n    return this.selectValue;\r\n  }\r\n}\r\n\r\nconst ol = new Ol();\r\n\r\nol.select('#theme');\r\nol.selectWatcher('#theme', 'theme_name');\r\n\r\nol.select('#sound');\r\nol.selectWatcher('#sound', 'sound_name');\r\n\r\nloadSelectValue('theme_name', '#theme');\r\nloadSelectValue('sound_name', '#sound');\r\n\n\n//# sourceURL=webpack://html-template/./src/js/UI.js?");

/***/ }),

/***/ "./src/js/UI/checkbox.js":
/*!*******************************!*\
  !*** ./src/js/UI/checkbox.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst checkboxShowBorder = document.querySelector('#show_border');\r\n\r\nlet checkboxActive = localStorage.getItem('show_border') ? JSON.parse(localStorage.getItem('show_border')) : false;\r\n\r\ncheckboxShowBorder.addEventListener('click', () => {\r\n  checkboxShowBorder.classList.toggle('bg-white-2');\r\n  checkboxShowBorder.classList.toggle('bg-yellow-1');\r\n\r\n  localStorage.setItem('show_border', !checkboxActive);\r\n});\r\n\r\nif (localStorage.getItem('show_border') && JSON.parse(localStorage.getItem('show_border')) === true) {\r\n  checkboxShowBorder.classList.remove('bg-white-2');\r\n  checkboxShowBorder.classList.add('bg-yellow-1');\r\n}\r\n\n\n//# sourceURL=webpack://html-template/./src/js/UI/checkbox.js?");

/***/ }),

/***/ "./src/js/UI/input.js":
/*!****************************!*\
  !*** ./src/js/UI/input.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst sliders = document.querySelectorAll('#mySlider');\r\n\r\nconst setSliderValue = (storageID, sliderClass) => {\r\n  sliders.forEach((slider) => {\r\n    if (localStorage.getItem(storageID) && slider.classList.contains(sliderClass)) {\r\n      slider.value = localStorage.getItem(storageID);\r\n    }\r\n  });\r\n};\r\n\r\nsetSliderValue('paper_width', 'slider__paper-width');\r\nsetSliderValue('font_size', 'slider__font-size');\r\nsetSliderValue('volume_click', 'slider__volume-click');\r\n\r\nsliders.forEach((slider) => {\r\n  slider.addEventListener('input', () => {\r\n    console.log('Uashdjbajhsd');\r\n    slider.style.setProperty('--slider-value', slider.value);\r\n  });\r\n  slider.addEventListener('change', () => {\r\n    if (slider.classList.contains('slider__paper-width')) {\r\n      localStorage.setItem('paper_width', slider.value);\r\n    }\r\n    if (slider.classList.contains('slider__font-size')) {\r\n      localStorage.setItem('font_size', slider.value);\r\n    }\r\n    if (slider.classList.contains('slider__volume-click')) {\r\n      localStorage.setItem('volume_click', slider.value);\r\n    }\r\n  });\r\n\r\n  slider.style.setProperty('--slider-value', slider.value);\r\n});\r\n\n\n//# sourceURL=webpack://html-template/./src/js/UI/input.js?");

/***/ }),

/***/ "./src/js/Utils.js":
/*!*************************!*\
  !*** ./src/js/Utils.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Utils\": () => (/* binding */ Utils)\n/* harmony export */ });\nclass Utils {\r\n  findChildByParent(className, parent) {\r\n    const childs = [];\r\n    let elements = parent.querySelectorAll('.' + className);\r\n\r\n    for (var i = 0; i < elements.length; i++) {\r\n      let element = elements[i];\r\n\r\n      childs.push(element);\r\n    }\r\n\r\n    return childs;\r\n  }\r\n\r\n  getChildsByParent(select) {\r\n    const olSelectList = this.findChildByParent('ol__select-list', select)[0];\r\n    const olSelectOpen = this.findChildByParent('ol__select-top', select)[0];\r\n    const olSelectItems = this.findChildByParent('ol__select-item', select);\r\n    const olSelectIcon = this.findChildByParent('ol__select-icon', select)[0];\r\n    const olSelectActive = this.findChildByParent('ol__select-active', select)[0];\r\n\r\n    return { olSelectActive, olSelectIcon, olSelectItems, olSelectList, olSelectOpen };\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://html-template/./src/js/Utils.js?");

/***/ }),

/***/ "./src/js/animation.js":
/*!*****************************!*\
  !*** ./src/js/animation.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst setting_open = document.querySelector('#setting__open');\r\nconst setting = document.querySelector('#setting');\r\nconst setting_close = document.querySelector('#setting__close');\r\nconst setting__body = document.querySelector('.setting__body');\r\n\r\nlet isClosingAnimation = false;\r\n\r\n// Два блока блять анимировал, я ебал...\r\nsetting_open.addEventListener('click', () => {\r\n  setting.classList.remove('hidden');\r\n  setting.classList.remove('animate__animated', 'animate__fadeOut', 'animate__faster');\r\n  setting.classList.add('animate__animated', 'animate__fadeIn', 'animate__faster');\r\n\r\n  setting__body.classList.remove('animate__animated', 'animate__fadeOutRightBig', 'animate__faster');\r\n  setting__body.classList.add('animate__animated', 'animate__fadeInRightBig', 'animate__faster');\r\n});\r\n\r\nsetting__close.addEventListener('click', () => {\r\n  if (!isClosingAnimation) {\r\n    setting.classList.remove('animate__animated', 'animate__fadeIn', 'animate__faster');\r\n    setting.classList.add('animate__animated', 'animate__fadeOut', 'animate__faster');\r\n\r\n    setting__body.classList.remove('animate__animated', 'animate__fadeInRightBig', 'animate__faster');\r\n    setting__body.classList.add('animate__animated', 'animate__fadeOutRightBig', 'animate__faster');\r\n\r\n    isClosingAnimation = true;\r\n  }\r\n});\r\n\r\nsetting.addEventListener('animationend', () => {\r\n  if (isClosingAnimation) {\r\n    setting.classList.add('hidden');\r\n    setting__body.classList.add('animate__animated', 'animate__fadeOutRightBig', 'animate__faster');\r\n\r\n    isClosingAnimation = false;\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://html-template/./src/js/animation.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst editor = document.querySelector('#editor');\r\n\r\n// Ещё лучше, осталось только решить проблему с внешними паддингами\r\n// Идеально?\r\nfunction scrollToElement(element, block) {\r\n  const offsetTop = element.offsetTop;\r\n  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;\r\n  const editor_offset = editor.offsetTop;\r\n\r\n  let scrollPosition;\r\n\r\n  if (block === 'center') {\r\n    scrollPosition = offsetTop - windowHeight / 2 + element.offsetHeight + editor_offset;\r\n  } else {\r\n    scrollPosition = offsetTop;\r\n  }\r\n\r\n  window.scrollTo({\r\n    top: scrollPosition,\r\n    behavior: 'smooth',\r\n  });\r\n}\r\n\r\nconst centered = () => {\r\n  let selection = window.getSelection();\r\n  let range = selection.getRangeAt(0);\r\n  let currentNode = range.startContainer;\r\n\r\n  while (currentNode.nodeType !== Node.ELEMENT_NODE) {\r\n    currentNode = currentNode.parentNode;\r\n  }\r\n\r\n  //   currentNode.scrollIntoView({\r\n  //     block: 'center',\r\n  //     inline: 'end',\r\n  //     behavior: 'smooth',\r\n  //   });\r\n  scrollToElement(currentNode, 'center');\r\n};\r\n\r\nvar quill = new Quill(editor, {\r\n  theme: 'snow',\r\n  modules: {\r\n    toolbar: false,\r\n  },\r\n  placeholder: 'Write something awesome...',\r\n});\r\n//\r\n\r\neditor.addEventListener('keydown', centered);\r\neditor.addEventListener('keyup', centered);\r\nquill.on('text-change', centered);\r\n\n\n//# sourceURL=webpack://html-template/./src/js/main.js?");

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
/******/ 	__webpack_require__("./src/js/animation.js");
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	__webpack_require__("./src/js/UI.js");
/******/ 	__webpack_require__("./src/js/Utils.js");
/******/ 	__webpack_require__("./src/js/UI/checkbox.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/UI/input.js");
/******/ 	
/******/ })()
;