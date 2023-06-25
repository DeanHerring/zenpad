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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("const quill = new Quill(\".ql-editor\", {\r\n\tmodules: {\r\n\t\ttoolbar: false,\r\n\t},\r\n});\r\n\r\nconst notepadField = document.querySelector(\".ql-editor\");\r\n\r\nconst buttons = document.querySelector(\".buttons\");\r\nconst save = document.querySelector(\".save\");\r\nconst importF = document.querySelector(\".import\");\r\nconst exportF = document.querySelector(\".export\");\r\n\r\nconst filesUpload = document.querySelector(\".files__upload\");\r\nconst filesFile = document.querySelector(\".files__file\");\r\n\r\nconst eyeIcon = document.querySelector(\".eye-icon\");\r\nconst eyeIconSlash = document.querySelector(\".eye-icon-slash\");\r\n\r\nconst volume = document.querySelector(\".volume\");\r\nlet volumeOff = false;\r\n\r\nlet cps = 0;\r\n\r\nlet audioKey = new Audio(`/Typing Sounds/Springs/key_0.wav`);\r\nlet audioBackspace = new Audio(`/Typing Sounds/Springs/backspace.wav`);\r\nlet audioSpacebar = new Audio(`/Typing Sounds/Springs/spacebar.wav`);\r\nlet audioReturn = new Audio(`/Typing Sounds/Springs/return.wav`);\r\n\r\nlocalStorage.text\r\n\t? quill.setText(localStorage.text)\r\n\t: quill.setText(\"Okay dude...\");\r\nsave.addEventListener(\"click\", () => (localStorage.text = quill.getText()));\r\n\r\nsetInterval(() => {\r\n\tcps = 0;\r\n}, 1000);\r\n\r\n// typing sound\r\nconst playSound = (audio) => {\r\n\tcps += 1;\r\n\r\n\tconst sps = cps * audio.duration;\r\n\r\n\tvolumeOff ? audio.volume = 0.0 : audio.volume = 0.2\r\n\taudio.currentTime = 0.0;\r\n\tsps < 1 ? (audio.playbackRate = 1.0) : (audio.playbackRate = sps);\r\n\r\n\taudio.play();\r\n};\r\n\r\nquill.on(\"text-change\", (delta) => {\r\n\tif (delta.ops[1].insert) {\r\n\t\tplaySound(audioSpacebar);\r\n\t}\r\n\tif (delta.ops[1].delete) {\r\n\t\tplaySound(audioBackspace);\r\n\t}\r\n\tif (delta.ops[1].insert === \"\\n\") {\r\n\t\tplaySound(audioReturn);\r\n\t}\r\n\tif (\r\n\t\tdelta.ops[1].insert !== \" \" &&\r\n\t\t!delta.ops[1].delete &&\r\n\t\tdelta.ops[1].insert !== \"\\n\"\r\n\t) {\r\n\t\tplaySound(audioKey);\r\n\t}\r\n});\r\n\r\n// export\r\nexportF.addEventListener(\"click\", () => {\r\n\tlet el = document.createElement(\"a\");\r\n\r\n\tel.href = \"data:attachment/text,\" + encodeURI(quill.getText());\r\n\tel.target = \"_blank\";\r\n\tel.download = `${new Date().toLocaleDateString()}.txt`;\r\n\tel.click();\r\n});\r\n\r\n// import\r\nconst uploadText = async () => {\r\n\treturn new Promise((res) => {\r\n\t\tfilesFile.addEventListener(\"change\", () => {\r\n\t\t\tconst files = filesFile.files;\r\n\r\n\t\t\tif (files.length) {\r\n\t\t\t\tconst reader = new FileReader();\r\n\r\n\t\t\t\treader.addEventListener(\"load\", () => res(reader.result));\r\n\t\t\t\treader.readAsText(files[0]);\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n};\r\n\r\nimportF.addEventListener(\"click\", () => {\r\n\tfilesFile.click();\r\n\r\n\tnew Promise((res) => {\r\n\t\tfilesFile.addEventListener(\"change\", () => {\r\n\t\t\tconst files = filesFile.files;\r\n\r\n\t\t\tif (files.length) {\r\n\t\t\t\tconst reader = new FileReader();\r\n\r\n\t\t\t\treader.addEventListener(\"load\", () => res(reader.result));\r\n\t\t\t\treader.readAsText(files[0]);\r\n\t\t\t}\r\n\t\t});\r\n\t}).then((text) => quill.setText(text));\r\n});\r\n\r\n// eyes\r\nconst toggleEye = (eyeOne, eyeTwo) => {\r\n\t[eyeOne, buttons, volume].forEach((i) => i.classList.toggle(\"hidden\"));\r\n\teyeTwo.classList.remove(\"hidden\");\r\n};\r\n\r\neyeIcon.addEventListener(\"click\", () => toggleEye(eyeIcon, eyeIconSlash));\r\neyeIconSlash.addEventListener(\"click\", () => toggleEye(eyeIconSlash, eyeIcon));\r\n\r\n// volume\r\nObject.values(volume.children).forEach((i) => {\r\n\ti.addEventListener(\"click\", () => {\r\n\t\tvolumeOff = !volumeOff;\r\n\r\n\t\tvolume.children[0].classList.toggle(\"hidden\");\r\n\t\tvolume.children[1].classList.toggle(\"hidden\");\r\n\t});\r\n});\n\n//# sourceURL=webpack://html-template/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;