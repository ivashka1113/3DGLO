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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calcValid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calcValid.js */ \"./modules/calcValid.js\");\n/* harmony import */ var _modules_formValid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formValid.js */ \"./modules/formValid.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"28 october 2022\");\r\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calcValid_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_formValid_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calcValid.js":
/*!******************************!*\
  !*** ./modules/calcValid.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst calcValid = () => {\r\n    const calcItems = document.querySelectorAll(\"input.calc-item\");\r\n    calcItems.forEach((calcItem) => {\r\n        calcItem.addEventListener(\"input\", () => {\r\n            calcItem.value = calcItem.value.replace(/[^\\d]/, \"\");\r\n        })\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcValid);\n\n//# sourceURL=webpack:///./modules/calcValid.js?");

/***/ }),

/***/ "./modules/formValid.js":
/*!******************************!*\
  !*** ./modules/formValid.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst formValid = () => {\r\n    const formItemsText = document.querySelectorAll(\"form input[type=text], form input[placeholder='Ваше сообщение']\");\r\n    const formItemsEmail = document.querySelectorAll(\"form input[type=email]\");\r\n    const formItemsTel = document.querySelectorAll(\"form input[type=tel]\");\r\n\r\n    // formItemsText.forEach((formItemText) => {\r\n    //     formItemText.addEventListener(\"input\", () => {\r\n    //         console.log(\"Сообщение\");\r\n    //         formItemText.value = formItemText.value.replace(/[^а-яА-Я\\s\\-]+/, \"\");\r\n    //     })\r\n    // })\r\n\r\n    // formItemsEmail.forEach((formItemEmail) => {\r\n    //     formItemEmail.addEventListener(\"input\", () => {\r\n    //         formItemEmail.value = formItemEmail.value.replace(/[^а-яА-Я\\d\\@\\-\\_\\.\\!\\~\\*\\']+/, \"\");\r\n    //     })\r\n    // })\r\n\r\n    // formItemsTel.forEach((formItemTel) => {\r\n    //     formItemTel.addEventListener(\"input\", () => {\r\n    //         formItemTel.value = formItemTel.value.replace(/[^\\d\\\\(\\\\)\\-]+/, \"\");\r\n    //     })\r\n    // })\r\n\r\n    formItemsText.forEach((formItemText) => {\r\n        formItemText.addEventListener(\"blur\", () => {\r\n            console.log(\"Сообщение\");\r\n            formItemText.value = formItemText.value.replace(/[^а-яА-Я\\s\\-]+/, \"\");\r\n            formItemText.value = formItemText.value.replace(/[\\s]+/, \" \");\r\n            formItemText.value = formItemText.value.replace(/[\\-]+/, \"-\");\r\n            formItemText.value = formItemText.value.replace(/^[\\s\\-]+/, \"\");\r\n            formItemText.value = formItemText.value.replace(/( |^)[а-яА-Я]/g, function (x) {\r\n                return x.toUpperCase();\r\n            });\r\n\r\n        })\r\n    })\r\n\r\n    formItemsEmail.forEach((formItemEmail) => {\r\n        formItemEmail.addEventListener(\"blur\", () => {\r\n            formItemEmail.value = formItemEmail.value.replace(/[^а-яА-Я\\d\\@\\-\\_\\.\\!\\~\\*\\']+/, \"\");\r\n            formItemEmail.value = formItemEmail.value.replace(/[\\-]+/, \"-\");\r\n            formItemEmail.value = formItemEmail.value.replace(/^[\\s\\-]+/, \"\");\r\n        })\r\n    })\r\n\r\n    formItemsTel.forEach((formItemTel) => {\r\n        formItemTel.addEventListener(\"blur\", () => {\r\n            formItemTel.value = formItemTel.value.replace(/[^\\d\\\\(\\\\)\\-]+/, \"\");\r\n            formItemTel.value = formItemTel.value.replace(/[\\-]+/, \"-\");\r\n            formItemTel.value = formItemTel.value.replace(/^[\\s\\-]+/, \"\");\r\n        })\r\n    })\r\n\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValid);\n\n//# sourceURL=webpack:///./modules/formValid.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst menu = () => {\r\n\r\n    const menuBtn = document.querySelector(\".menu\");\r\n    const menu = document.querySelector(\"menu\");\r\n    const closeBtn = menu.querySelector(\".close-btn\");\r\n    const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n    const mouseScroll = document.querySelector(\"main>a\");\r\n\r\n    const smoothScroll = (e, item) => {\r\n        e.preventDefault(); //отключяем стандартную прокрутку якоря\r\n        const blockID = item.getAttribute('href').substr(1); //получаем id элемента, к которому нужно прокрутить\r\n\r\n        document.getElementById(blockID).scrollIntoView({ //получаем элемент по id, затем совершается прокрутка с заданными параметрами\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        })\r\n    }\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle(\"active-menu\");\r\n    }\r\n\r\n    menuBtn.addEventListener(\"click\", handleMenu);\r\n    closeBtn.addEventListener(\"click\", handleMenu);\r\n    menuItems.forEach((item) => item.addEventListener(\"click\", (event) => {\r\n        handleMenu();\r\n        smoothScroll(event, item);\r\n    }));\r\n\r\n    mouseScroll.addEventListener(\"click\", (event) => {\r\n        smoothScroll(event, mouseScroll);\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst modal = () => {\r\n    const buttons = document.querySelectorAll(\".popup-btn\");\r\n    const modal = document.querySelector(\".popup\");\r\n    const closeBtn = modal.querySelector(\".popup-close\");\r\n    modal.style.transform = 'translateY(100%)';\r\n    let count = 50;\r\n    let modalHandle;\r\n\r\n\r\n    buttons.forEach(item => item.addEventListener(\"click\", () => {\r\n        modal.style.display = \"block\";\r\n        screen.width > 768 ? modalShow() : modal.style.transform = '';\r\n\r\n    }));\r\n    closeBtn.addEventListener(\"click\", () => {\r\n        count = 50;\r\n        modal.style.transform = 'translateY(100%)';\r\n        modal.style.display = \"none\"\r\n    });\r\n\r\n    const modalShow = () => {\r\n        if (count > 0) {\r\n            count--;\r\n            modalHandle = requestAnimationFrame(modalShow);\r\n            modal.style.transform = `translateY(${-count * 3}%)`;\r\n        } else {\r\n            cancelAnimationFrame(modalHandle);\r\n        }\r\n\r\n    }\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById(\"timer-hours\");\r\n    const timerMinutes = document.getElementById(\"timer-minutes\");\r\n    const timerSeconds = document.getElementById(\"timer-seconds\");\r\n    const timerDays = document.getElementById(\"timer-days\");\r\n    let timerInterval;\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 3600 / 24);\r\n\r\n        let hours = Math.floor((timeRemaining / 3600) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return {\r\n            timeRemaining,\r\n            days,\r\n            hours,\r\n            minutes,\r\n            seconds\r\n        }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        timerDays.textContent = getTime.days.toString().length === 1 ? \"0\" + getTime.days : getTime.days;\r\n        timerHours.textContent = getTime.hours.toString().length === 1 ? \"0\" + getTime.hours : getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes.toString().length === 1 ? \"0\" + getTime.minutes : getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds.toString().length === 1 ? \"0\" + getTime.seconds : getTime.seconds;\r\n        return getTime.timeRemaining;\r\n    }\r\n\r\n    // updateClock();\r\n\r\n    if (updateClock() > 0) {\r\n        timerInterval = setInterval(updateClock, 1000);\r\n    } else {\r\n        clearInterval(timerInterval);\r\n\r\n        timerDays.textContent = \"00\";\r\n        timerHours.textContent = \"00\";\r\n        timerMinutes.textContent = \"00\";\r\n        timerSeconds.textContent = \"00\";\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;