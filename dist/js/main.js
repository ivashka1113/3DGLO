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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calcValid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calcValid.js */ \"./modules/calcValid.js\");\n/* harmony import */ var _modules_formValid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formValid.js */ \"./modules/formValid.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs.js */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider.js */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc.js */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm.js */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"28 november 2022\");\r\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calcValid_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_formValid_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"portfolio-content\", \"portfolio-item\", \"portfolio-dots\", \"dot\", \"portfolio-btn\", \"portfolio-item-active\", \"dot-active\");\r\n(0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100);\r\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n    formId: \"form1\",\r\n    someElement: [{\r\n        type: \"block\",\r\n        id: \"total\"\r\n    }]\r\n});\r\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n    formId: \"form2\",\r\n    someElement: [{\r\n        type: \"block\",\r\n        id: \"total\"\r\n    }]\r\n});\r\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n    formId: \"form3\",\r\n    someElement: [{\r\n        type: \"block\",\r\n        id: \"total\"\r\n    }]\r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst calc = (price = 100) => {\r\n    const calcBlock = document.querySelector(\".calc-block\");\r\n    const calcType = document.querySelector(\".calc-type\");\r\n    const calcSquare = document.querySelector(\".calc-square\");\r\n    const calcCount = document.querySelector(\".calc-count\");\r\n    const calcDay = document.querySelector(\".calc-day\");\r\n    const total = document.getElementById(\"total\");\r\n    let oldValue = 0;\r\n    let totalValue = 0;\r\n\r\n\r\n\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcSquareValue = +calcSquare.value;\r\n        const calcCountValue = 1 + (0.1 * (+calcCount.value));\r\n        const calcDayValue = !calcDay.value ? 1 : +calcDay.value >= 10 ? 1 : +calcDay.value > 5 ? 1.5 : 2;\r\n        oldValue = totalValue;\r\n        totalValue = 0;\r\n\r\n\r\n        if (calcTypeValue && calcSquareValue) {\r\n            totalValue = Math.round(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue);\r\n            console.log(calcTypeValue, calcSquareValue, calcCountValue, calcDayValue, totalValue);\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 1000,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    if (totalValue > oldValue) {\r\n                        total.textContent = oldValue + parseInt((totalValue - oldValue) * progress);\r\n                    } else if (totalValue < oldValue) {\r\n                        total.textContent = parseInt((oldValue - ((oldValue - totalValue) * progress)));\r\n                    } else {\r\n                        total.textContent = totalValue;\r\n                    }\r\n                }\r\n            });\r\n\r\n        } else {\r\n            total.textContent = 0;\r\n        }\r\n    }\r\n\r\n    calcBlock.addEventListener('input', () => {\r\n        countCalc();\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator.js */ \"./modules/validator.js\");\n\r\n\r\n\r\n\r\nconst formValid = () => {\r\n    const formItemsText = document.querySelectorAll(\"form input[type=text]\");\r\n    const formItemsEmail = document.querySelectorAll(\"form input[type=email]\");\r\n    const formItemsTel = document.querySelectorAll(\"form input[type=tel]\");\r\n    const formBtn = document.querySelectorAll(\".form-btn\");\r\n    const formItemsMes = document.querySelectorAll(\"form input[name='user_message']\");\r\n    const formItems = document.querySelectorAll(\"form input\")\r\n\r\n    formItemsText.forEach((formItemText) => {\r\n        formItemText.addEventListener(\"input\", () => {\r\n            formItemText.value = formItemText.value.replace(/[^а-яА-Я\\s\\-]+/g, \"\");\r\n        })\r\n    })\r\n\r\n    formItemsMes.forEach((formItemMes) => {\r\n        formItemMes.addEventListener(\"input\", () => {\r\n            formItemMes.value = formItemMes.value.replace(/[^а-яА-Я0-9\\s\\-\\,\\.\\:\\;]+/g, \"\");\r\n        })\r\n    })\r\n\r\n    formItemsEmail.forEach((formItemEmail) => {\r\n        formItemEmail.addEventListener(\"input\", () => {\r\n            formItemEmail.value = formItemEmail.value.replace(/[^a-zA-Z\\d\\@\\-\\_\\.\\!\\~\\*\\']+/g, \"\");\r\n        })\r\n    })\r\n\r\n    formItemsTel.forEach((formItemTel) => {\r\n        formItemTel.addEventListener(\"input\", () => {\r\n            formItemTel.value = formItemTel.value.replace(/[^\\d\\\\(\\\\)\\-\\+]+/g, \"\");\r\n        })\r\n    })\r\n\r\n    formItemsText.forEach((formItemText) => {\r\n        formItemText.addEventListener(\"blur\", () => {\r\n            formItemText.value = formItemText.value.replace(/[\\s]+/g, \" \");\r\n            formItemText.value = formItemText.value.replace(/[\\-]+/g, \"-\");\r\n            formItemText.value = formItemText.value.replace(/[\\s\\-]+/g, \"-\");\r\n            formItemText.value = formItemText.value.replace(/^[\\s\\-]+/g, \"\");\r\n            formItemText.value = formItemText.value.replace(/[\\s\\-]+$/g, \"\");\r\n            formItemText.value = formItemText.value.replace(/( |^)[а-яА-Я]/g, function (x) {\r\n                return x.toUpperCase();\r\n            });\r\n\r\n        })\r\n    })\r\n\r\n    formItemsMes.forEach((formItemMes) => {\r\n        formItemMes.addEventListener(\"blur\", () => {\r\n            formItemMes.value = formItemMes.value.replace(/[\\s]+/g, \" \");\r\n            formItemMes.value = formItemMes.value.replace(/[\\-]+/g, \"-\");\r\n            formItemMes.value = formItemMes.value.replace(/[\\s\\-]+/g, \"-\");\r\n            formItemMes.value = formItemMes.value.replace(/^[\\s\\-]+/g, \"\");\r\n            formItemMes.value = formItemMes.value.replace(/[\\s\\-]+$/g, \"\");\r\n\r\n        })\r\n    })\r\n\r\n    formItemsEmail.forEach((formItemEmail) => {\r\n        formItemEmail.addEventListener(\"blur\", () => {\r\n            formItemEmail.value = formItemEmail.value.replace(/[\\-]+/g, \"-\");\r\n            formItemEmail.value = formItemEmail.value.replace(/[\\s\\-]+/g, \"-\");\r\n            formItemEmail.value = formItemEmail.value.replace(/^[\\s\\-]+/g, \"\");\r\n            formItemEmail.value = formItemEmail.value.replace(/[\\s\\-]+$/g, \"\");\r\n        })\r\n    })\r\n\r\n    formItemsTel.forEach((formItemTel) => {\r\n        formItemTel.addEventListener(\"blur\", () => {\r\n            formItemTel.value = formItemTel.value.replace(/[\\-]+/g, \"-\");\r\n            formItemTel.value = formItemTel.value.replace(/^[\\s\\-]+[\\s\\-]+/g, \"\");\r\n            formItemTel.value = formItemTel.value.replace(/[\\s\\-]+$/g, \"\");\r\n            formItemTel.value = formItemTel.value.replace(/[\\s\\-]+/g, \"-\");\r\n        })\r\n    })\r\n\r\n    formItems.forEach((item) => {\r\n        item.addEventListener(\"input\", (e) => {\r\n            console.log(\"input\")\r\n            const form = e.target.closest(\"form\");\r\n            if (form === null) return;\r\n            (0,_validator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target);\r\n        })\r\n\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValid);\n\n//# sourceURL=webpack:///./modules/formValid.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate({\r\n    timing,\r\n    draw,\r\n    duration\r\n}) {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst menu = () => {\r\n\r\n    const menu = document.querySelector(\"menu\");\r\n\r\n    const smoothScroll = (e, item) => {\r\n        e.preventDefault(); //отключяем стандартную прокрутку якоря\r\n        const blockID = item.getAttribute('href').substr(1); //получаем id элемента, к которому нужно прокрутить\r\n\r\n        document.getElementById(blockID).scrollIntoView({ //получаем элемент по id, затем совершается прокрутка с заданными параметрами\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        })\r\n\r\n    }\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle(\"active-menu\");\r\n    }\r\n\r\n    document.addEventListener(\"click\", (e) => {\r\n        switch (true) {\r\n            case !!e.target.closest(\".close-btn\"):\r\n            case !!e.target.closest(\".menu\"):\r\n                handleMenu();\r\n                break;\r\n            case !!(e.target.matches(\"menu>ul>li>a\")):\r\n                handleMenu();\r\n                smoothScroll(e, e.target);\r\n                break;\r\n            case !!(e.target.closest('main>a')):\r\n                smoothScroll(e, e.target.closest('main>a'));\r\n                if (menu.classList.contains(\"active-menu\")) {\r\n                    handleMenu();\r\n                }\r\n                break;\r\n            case !e.target.closest(\"menu\"):\r\n                if (menu.classList.contains(\"active-menu\")) {\r\n                    handleMenu();\r\n                }\r\n                break;\r\n        }\r\n\r\n\r\n    })\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst modal = () => {\r\n    const buttons = document.querySelectorAll(\".popup-btn\");\r\n    const modal = document.querySelector(\".popup\");\r\n    const modalContent = modal.querySelector(\".popup-content\");\r\n    modal.style.transform = 'translateY(100%)';\r\n    modalContent.style.opacity = 0;\r\n\r\n\r\n    buttons.forEach(item => item.addEventListener(\"click\", () => {\r\n        modalShow();\r\n    }));\r\n\r\n    const modalShow = () => {\r\n        if (screen.width > 768) {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 2000,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    modal.style.display = \"block\";\r\n                    modal.style.transform = `translateY(${ 100 *(1 - progress)}%)`;\r\n                    modalContent.style.opacity = progress;\r\n                }\r\n            });\r\n        } else {\r\n            modal.style.transform = '';\r\n            modalContent.style.opacity = 1;\r\n            modal.style.display = \"block\";\r\n        }\r\n    }\r\n\r\n    modal.addEventListener(\"click\", (e) => {\r\n        if (!e.target.closest(\".popup-content\") || e.target.classList.contains(\"popup-close\")) {\r\n            if (screen.width > 768) {\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 2000,\r\n                    timing(timeFraction) {\r\n                        return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        modalContent.style.opacity = 1 - progress;\r\n                        modal.style.transform = `translateY(${(100 * progress)}%)`;\r\n                        if (progress === 1) modal.style.display = \"none\";\r\n                    }\r\n                });\r\n            } else {\r\n                modal.style.transform = `translateY(100%)`;\r\n                modal.style.display = \"none\";\r\n                modalContent.style.opacity = 0;\r\n            }\r\n\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst sendForm = ({\r\n    formId,\r\n    someElement = []\r\n}) => {\r\n    const form = document.getElementById(formId);\r\n    const statusBlock = document.createElement(\"img\");\r\n    statusBlock.classList.add(\"load-img\");\r\n    const loadUrl = \"../dist/images/loading-svgrepo-com.svg\";\r\n    const successUrl = \"../dist/images/success-svgrepo-com.svg\";\r\n    const errorUrl = \"../dist/images/error-svgrepo-com.svg\";\r\n\r\n    statusBlock.style.width = \"50px\";\r\n\r\n    const validate = (list) => {\r\n        let success = true;\r\n\r\n        list.forEach(input => {\r\n            if (input.classList.contains(\"error\")) success = false;\r\n        })\r\n\r\n        return success;\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n            method: \"POST\",\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    const submitForm = () => {\r\n\r\n        const formData = new FormData(form);\r\n        const formBody = {};\r\n        const formElements = form.querySelectorAll(\"input\");\r\n\r\n\r\n        form.append(statusBlock)\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        })\r\n\r\n        someElement.forEach(elem => {\r\n            const element = document.getElementById(elem.id)\r\n            if (elem.type === \"block\" && element.textContent != 0) {\r\n                formBody[elem.id] = element.textContent;\r\n            } else if (elem.type === \"input\" && element.textContent != \"\") {\r\n                formBody[elem.id] = element.value;\r\n            }\r\n        })\r\n\r\n        if (validate(formElements)) {\r\n            statusBlock.src = loadUrl;\r\n            sendData(formBody).then(data => {\r\n                    formElements.forEach(input => {\r\n                        statusBlock.src = successUrl;\r\n                        statusBlock.classList.add(\"active\");\r\n                        input.value = \"\";\r\n                    })\r\n                }).then(data => {\r\n                    setTimeout(() => {\r\n                        statusBlock.remove();\r\n                        statusBlock.classList.remove(\"active\");\r\n                    }, 2000)\r\n                })\r\n                .catch(error => {\r\n                    statusBlock.src = errorUrl;\r\n                });\r\n        } else {\r\n            statusBlock.src = errorUrl;\r\n            setTimeout(() => {\r\n                statusBlock.remove();\r\n            }, 2000)\r\n        }\r\n\r\n    }\r\n    try {\r\n        if (!form) {\r\n            throw new Error(\"Верните форму на место\")\r\n        }\r\n\r\n        form.addEventListener(\"submit\", (e) => {\r\n            e.preventDefault();\r\n            submitForm();\r\n        })\r\n    } catch (error) {\r\n        console.log(error.message)\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst slider = (sliderBlockClass, slidesClass, dotsBlockClass, dotsClass, slideBtnClass, itemActiveClass = \"portfolio-item-active\", dotActiveClass = \"dot-active\") => {\r\n\r\n    const sliderBlock = document.querySelector(`.${sliderBlockClass}`);\r\n    const slides = document.querySelectorAll(`.${slidesClass}`);\r\n    const dotsBlock = document.querySelector(`.${dotsBlockClass}`);\r\n    const dots = [];\r\n\r\n    if (!(sliderBlockClass && slidesClass && dotsBlockClass && dotsClass && slideBtnClass)) return;\r\n\r\n    let currentSlide = 0;\r\n    let interval;\r\n    const timeInterval = 2000;\r\n\r\n    const createDots = () => {\r\n        for (let i = 0; i < slides.length; i++) {\r\n            const dot = document.createElement('li');\r\n            dot.classList.add(dotsClass);\r\n            if (i === 0) dot.classList.add(dotActiveClass);\r\n            dots.push(dot);\r\n            dotsBlock.append(dot);\r\n        }\r\n    }\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass);\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, itemActiveClass);\r\n        prevSlide(dots, currentSlide, dotActiveClass);\r\n\r\n        currentSlide++;\r\n\r\n        if (currentSlide === slides.length) currentSlide = 0;\r\n        nextSlide(slides, currentSlide, itemActiveClass);\r\n        nextSlide(dots, currentSlide, dotActiveClass);\r\n    }\r\n\r\n    const startSlide = (timerInterval) => {\r\n        interval = setInterval(autoSlide, timerInterval);\r\n    }\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    }\r\n\r\n    sliderBlock.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!e.target.matches(`.${dotsClass}, .${slideBtnClass}`)) {\r\n            return;\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, itemActiveClass);\r\n        prevSlide(dots, currentSlide, dotActiveClass);\r\n\r\n        if (e.target.matches(\"#arrow-right\")) {\r\n            currentSlide++;\r\n        } else if (e.target.matches(\"#arrow-left\")) {\r\n            currentSlide--;\r\n        } else if (e.target.matches(`.${dotsClass}`)) {\r\n            currentSlide = dots.indexOf(e.target);\r\n        }\r\n\r\n        if (currentSlide === slides.length) currentSlide = 0;\r\n        if (currentSlide < 0) currentSlide = slides.length - 1;\r\n\r\n        nextSlide(slides, currentSlide, itemActiveClass);\r\n        nextSlide(dots, currentSlide, dotActiveClass);\r\n    })\r\n\r\n    sliderBlock.addEventListener(\"mouseenter\", (e) => {\r\n        if (e.target.matches(`.${dotsClass}, .${slideBtnClass}`)) stopSlide();\r\n    }, true)\r\n\r\n    sliderBlock.addEventListener(\"mouseleave\", (e) => {\r\n        if (e.target.matches(`.${dotsClass}, .${slideBtnClass}`)) startSlide(timeInterval);\r\n    }, true)\r\n\r\n    createDots();\r\n    startSlide(timeInterval);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst tabs = () => {\r\n    const tabContent = document.querySelectorAll(\".service-tab\");\r\n    const tabPanel = document.querySelector(\".service-header\");\r\n    const tabs = document.querySelectorAll(\".service-header-tab\");\r\n\r\n    tabPanel.addEventListener(\"click\", (e) => {\r\n        if (e.target.closest(\".service-header-tab\")) {\r\n            const tabBtn = e.target.closest(\".service-header-tab\");\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add(\"active\");\r\n                    tabContent[index].classList.remove(\"d-none\");\r\n\r\n                } else {\r\n                    tab.classList.remove(\"active\");\r\n                    tabContent[index].classList.add(\"d-none\");\r\n                }\r\n            })\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById(\"timer-hours\");\r\n    const timerMinutes = document.getElementById(\"timer-minutes\");\r\n    const timerSeconds = document.getElementById(\"timer-seconds\");\r\n    const timerDays = document.getElementById(\"timer-days\");\r\n    let timerInterval;\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 3600 / 24);\r\n\r\n        let hours = Math.floor((timeRemaining / 3600) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return {\r\n            timeRemaining,\r\n            days,\r\n            hours,\r\n            minutes,\r\n            seconds\r\n        }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        timerDays.textContent = getTime.days.toString().length === 1 ? \"0\" + getTime.days : getTime.days;\r\n        timerHours.textContent = getTime.hours.toString().length === 1 ? \"0\" + getTime.hours : getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes.toString().length === 1 ? \"0\" + getTime.minutes : getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds.toString().length === 1 ? \"0\" + getTime.seconds : getTime.seconds;\r\n        return getTime.timeRemaining;\r\n    }\r\n\r\n    // updateClock();\r\n\r\n    if (updateClock() > 0) {\r\n        timerInterval = setInterval(updateClock, 1000);\r\n    } else {\r\n        clearInterval(timerInterval);\r\n\r\n        timerDays.textContent = \"00\";\r\n        timerHours.textContent = \"00\";\r\n        timerMinutes.textContent = \"00\";\r\n        timerSeconds.textContent = \"00\";\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validator.js":
/*!******************************!*\
  !*** ./modules/validator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst validator = (item) => {\r\n    let flag = true;\r\n\r\n\r\n    switch (true) {\r\n        case item.matches(\"form input[type=text]\"):\r\n            if (!item.value.match(/[a-яA-я]{2}/gi)) {\r\n                flag = false;\r\n                item.classList.add(\"error\");\r\n                break;\r\n            } else {\r\n                item.classList.remove(\"error\");\r\n                break;\r\n            }\r\n            case item.matches(\"form input[type=email]\"):\r\n                if (!item.value.match(/^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$/gi)) {\r\n                    flag = false;\r\n                    item.classList.add(\"error\");\r\n                    break;\r\n                } else {\r\n                    item.classList.remove(\"error\");\r\n                    break;\r\n                }\r\n                case item.matches(\"form input[type=tel]\"):\r\n                    if (!item.value.match(/^((\\+7|7|8)+\\(?([0-9]){3}\\)?)(\\-?([0-9]){3})(\\-?([0-9]){2}){2}$/g)) {\r\n                        flag = false;\r\n                        item.classList.add(\"error\");\r\n                    } else {\r\n                        item.classList.remove(\"error\");\r\n                    }\r\n    }\r\n    return flag;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\n\n//# sourceURL=webpack:///./modules/validator.js?");

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