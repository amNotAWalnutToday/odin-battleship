/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bubbles-bg.jpg */ "./src/img/bubbles-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/explosion-ship.png */ "./src/img/explosion-ship.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/whirlpool-miss-dark.png */ "./src/img/whirlpool-miss-dark.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/whirlpool-miss-light.png */ "./src/img/whirlpool-miss-light.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/chevron-right-box.png */ "./src/img/chevron-right-box.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --grid-font-c: rgb(52, 41, 51);\r\n    --box-color: rgba(240, 255, 255, 0.9);\r\n    --grid1: darkblue;\r\n    --grid2: rgb(0, 140, 255); \r\n    --line-color: rgb(90, 116, 232);\r\n    --outline-color: rgb(53, 74, 94); \r\n    --box-outline: 2px solid rgba(255, 255, 255, 0.8);\r\n\r\n    --grid-size: max(300px, 30vw);\r\n    --grid-size-wide: min(450px, 30vw);\r\n    --grid-size-mini: 150px;\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: var(--grid-font-c);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Containers */\r\n\r\n.title-screen,\r\n#title-screen-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n#title-screen-menu{\r\n    gap: 5rem;\r\n    padding: 1rem;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#title-screen-btns {\r\n    display: flex;\r\n    gap: 5rem;\r\n}\r\n\r\n@media (max-width: 450px){\r\n    #title-screen-btns {\r\n        flex-direction: column;\r\n        padding-bottom: 5rem;\r\n    }\r\n    .title-screen h1 {\r\n        font-size: 45px !important;\r\n    }\r\n}\r\n\r\n#winner-box button,\r\n#winner-box,\r\n.title-screen button,\r\n#title-screen-menu,\r\n#player-icon-container,\r\n#status-box,\r\n#ship-menu,\r\n#grid-2,\r\n#grid {\r\n    box-shadow: 0px 0px 0px 5px var(--outline-color);\r\n    border-radius: 10px; /*not grid*/\r\n}\r\n\r\n#container {\r\n    overflow-x: hidden;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#player-icon-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    margin: 0.3rem auto 1rem auto;\r\n    background-color: var(--box-color);\r\n    width: calc(var(--grid-size) * 1.1);\r\n}\r\n\r\n#grid-2,\r\n#grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    grid-template-rows: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    margin: 1rem auto;\r\n    width: var(--grid-size);\r\n    height: var(--grid-size);\r\n    transform: rotate(270deg);\r\n    border-radius: 1px !important;\r\n    background-color: var(--grid2);\r\n}\r\n\r\n#grid-2 {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.mini-grid {\r\n    grid-template-columns: repeat(auto-fit, calc(var(--grid-size-mini) / 10)) !important;\r\n    grid-template-rows: repeat(auto-fit, calc(var(--grid-size-mini) / 10)) !important;\r\n    width: var(--grid-size-mini) !important;\r\n    height: var(--grid-size-mini) !important;\r\n}\r\n\r\n#announcement {\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    margin-left: -35%;\r\n    margin-top: -5vh;\r\n    padding-top: 3vh;\r\n    height: 10vh;\r\n    width: 70%;\r\n    text-align: center;\r\n    color: var(--grid-font-c);\r\n    font-size: 17px;\r\n    font-family: monofett;\r\n    background-color: var(--box-color);\r\n    box-shadow: 0px 0px 5px 5px white;\r\n    outline: var(--box-outline);\r\n    border-radius: 10px;\r\n    z-index: 1;\r\n}\r\n\r\n@media(max-width: 555px){\r\n    #announcement {\r\n        height: 15vh !important;\r\n        white-space: pre;\r\n    }\r\n\r\n    #status-box {\r\n        padding: 0.5rem 0 !important;\r\n    }\r\n}\r\n\r\n#status-box {\r\n    width: var(--grid-size);\r\n    margin: 1rem auto;\r\n    padding: 2.5rem 0;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#ship-menu {\r\n    position: sticky;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    height: 75px;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n    padding: 0 0.5rem;\r\n    background-color: var(--box-color);\r\n    border-radius: 0 10px 10px 0;\r\n}\r\n\r\n@media(min-width: 1000px){\r\n    #ship-menu {\r\n        padding: 0 2rem;\r\n        gap: 2.5rem;\r\n    }\r\n}\r\n\r\n#winner-box {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    height: fit-content;\r\n    width: max(250px, 50vw);\r\n    gap: 1rem;\r\n    margin: 1rem auto;\r\n    background-color: var(--box-color);\r\n    font-family: monofett;\r\n    letter-spacing: 1px;;\r\n}\r\n\r\n/* End of Containers*/\r\n\r\n/* Text */\r\n#grid-title {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.title-screen h1 {\r\n    padding-top: 1.5rem;\r\n    font-size: 60px;\r\n    font-family: monofett;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n#status-box h2 {\r\n    padding: 0.25rem 2.5rem;\r\n}\r\n/*End of Text*/\r\n\r\n/*Images*/\r\n#status-box div {\r\n    display: inline-block;\r\n    height: 25px;\r\n    width: 25px;\r\n    vertical-align: bottom;\r\n    border: 2px solid var(--outline-color);\r\n}\r\n\r\n#status-box img {\r\n    width: 30px;\r\n    vertical-align: bottom;\r\n}\r\n\r\n#ship-menu div.grid-ship {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    border: 2px solid var(--outline-color);\r\n}\r\n\r\n@media (max-width: 372px) {\r\n    #ship-menu div.grid-ship{\r\n        width: 11px;\r\n        height: 11px;\r\n        border: 1px solid var(--outline-color);\r\n    }\r\n}\r\n\r\n#ship-menu img {\r\n    padding-top: 0.42rem;\r\n}\r\n\r\n.right {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.flip {\r\n    transform: scaleX(-1);\r\n}\r\n\r\n/*End of Images*/\r\n\r\n/*Grid Components*/\r\n.p1,\r\n.p2 {\r\n    border: 0.5px solid var(--line-color);\r\n}\r\n\r\n.p1 {\r\n    background-color: var(--grid1);\r\n}\r\n\r\n.p2 {\r\n    background-color: var(--grid2);\r\n}\r\n\r\n.grid-ship {\r\n    background-color: brown;\r\n}\r\n\r\n.grid-hit {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: contain;\r\n}\r\n\r\n.p1.grid-miss {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");/*radial-gradient(rgb(255, 202, 202) 40%, var(--grid1));*/\r\n    background-size: contain;\r\n}\r\n\r\n.p2.grid-miss {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")/*radial-gradient(rgb(255, 202, 202) 40%, var(--grid2))*/;\r\n    background-size: contain;\r\n}\r\n\r\n.grid-target,\r\n.grid-up,\r\n.grid-right {\r\n    width: calc(var(--grid-size) / 10);\r\n    height: calc(var(--grid-size) / 10);\r\n}\r\n\r\n.grid-up {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.grid-right {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.grid-target {\r\n    filter: invert();\r\n    background-color: cyan;\r\n    border-radius: calc(var(--grid-size) / 10);\r\n}\r\n\r\n#grid img {\r\n    pointer-events: none;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n/*End of Grid Components*/\r\n\r\n/* Buttons */\r\n#winner-box button,\r\n.title-screen button {\r\n    height: 5rem;\r\n    width: 10rem;\r\n    font-size: 30px;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#player-icon-container button {\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 25px;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n#player-1.highlight {\r\n    color: var(--grid2);\r\n    background-color: var(--grid1);\r\n    transform: scale(1.1);\r\n}\r\n\r\n#player-2.highlight {\r\n    color: var(--grid1);\r\n    background-color: var(--grid2);\r\n    transform: scale(1.1);\r\n}\r\n\r\n#ship-menu button {\r\n    height: 50px;\r\n    width: fit-content;\r\n    background-color: rgba(0,0,0,0);\r\n    white-space: pre;\r\n}\r\n\r\n@media(min-width: 500px) {\r\n    #ship-menu button:not(:first-child):not(:last-child) {\r\n        padding-left: 1rem;\r\n        padding-right: 1rem;\r\n    } \r\n}\r\n\r\n\r\n\r\n#player-icon-container button:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 5px 1px black;\r\n    transform: scale(1.2);\r\n}\r\n\r\n#winner-box button:hover,\r\n#ship-menu button:hover,\r\n.title-screen button:hover {\r\n    transform: scale(1.05);\r\n    filter: brightness(110%);\r\n    cursor: pointer;\r\n}\r\n\r\n#ship-menu button:first-child:hover.open,\r\n#ship-menu button:last-child:hover.flip{\r\n    /*rotate && place btn only*/\r\n    transform: scale(-1.05, 1.05) !important;\r\n}\r\n\r\n#grid * {\r\n    cursor: none !important;\r\n    user-select: none;\r\n}\r\n\r\n#place-ship {\r\n    width: 50px !important;\r\n    text-align: start;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: 50%;\r\n    background-position: bottom right;\r\n    padding: 0.5rem 0 2rem 0 !important;\r\n}\r\n\r\n#place-ship.open {\r\n    background-size: cover;\r\n    transform: rotate(180deg);\r\n}\r\n/* End of Buttons*/\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --grid-font-c: rgb(52, 41, 51);\r\n    --box-color: rgba(240, 255, 255, 0.9);\r\n    --grid1: darkblue;\r\n    --grid2: rgb(0, 140, 255); \r\n    --line-color: rgb(90, 116, 232);\r\n    --outline-color: rgb(53, 74, 94); \r\n    --box-outline: 2px solid rgba(255, 255, 255, 0.8);\r\n\r\n    --grid-size: max(300px, 30vw);\r\n    --grid-size-wide: min(450px, 30vw);\r\n    --grid-size-mini: 150px;\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: var(--grid-font-c);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Containers */\r\n\r\n.title-screen,\r\n#title-screen-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n#title-screen-menu{\r\n    gap: 5rem;\r\n    padding: 1rem;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#title-screen-btns {\r\n    display: flex;\r\n    gap: 5rem;\r\n}\r\n\r\n@media (max-width: 450px){\r\n    #title-screen-btns {\r\n        flex-direction: column;\r\n        padding-bottom: 5rem;\r\n    }\r\n    .title-screen h1 {\r\n        font-size: 45px !important;\r\n    }\r\n}\r\n\r\n#winner-box button,\r\n#winner-box,\r\n.title-screen button,\r\n#title-screen-menu,\r\n#player-icon-container,\r\n#status-box,\r\n#ship-menu,\r\n#grid-2,\r\n#grid {\r\n    box-shadow: 0px 0px 0px 5px var(--outline-color);\r\n    border-radius: 10px; /*not grid*/\r\n}\r\n\r\n#container {\r\n    overflow-x: hidden;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: url('./img/bubbles-bg.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#player-icon-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    margin: 0.3rem auto 1rem auto;\r\n    background-color: var(--box-color);\r\n    width: calc(var(--grid-size) * 1.1);\r\n}\r\n\r\n#grid-2,\r\n#grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    grid-template-rows: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    margin: 1rem auto;\r\n    width: var(--grid-size);\r\n    height: var(--grid-size);\r\n    transform: rotate(270deg);\r\n    border-radius: 1px !important;\r\n    background-color: var(--grid2);\r\n}\r\n\r\n#grid-2 {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.mini-grid {\r\n    grid-template-columns: repeat(auto-fit, calc(var(--grid-size-mini) / 10)) !important;\r\n    grid-template-rows: repeat(auto-fit, calc(var(--grid-size-mini) / 10)) !important;\r\n    width: var(--grid-size-mini) !important;\r\n    height: var(--grid-size-mini) !important;\r\n}\r\n\r\n#announcement {\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    margin-left: -35%;\r\n    margin-top: -5vh;\r\n    padding-top: 3vh;\r\n    height: 10vh;\r\n    width: 70%;\r\n    text-align: center;\r\n    color: var(--grid-font-c);\r\n    font-size: 17px;\r\n    font-family: monofett;\r\n    background-color: var(--box-color);\r\n    box-shadow: 0px 0px 5px 5px white;\r\n    outline: var(--box-outline);\r\n    border-radius: 10px;\r\n    z-index: 1;\r\n}\r\n\r\n@media(max-width: 555px){\r\n    #announcement {\r\n        height: 15vh !important;\r\n        white-space: pre;\r\n    }\r\n\r\n    #status-box {\r\n        padding: 0.5rem 0 !important;\r\n    }\r\n}\r\n\r\n#status-box {\r\n    width: var(--grid-size);\r\n    margin: 1rem auto;\r\n    padding: 2.5rem 0;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#ship-menu {\r\n    position: sticky;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    height: 75px;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n    padding: 0 0.5rem;\r\n    background-color: var(--box-color);\r\n    border-radius: 0 10px 10px 0;\r\n}\r\n\r\n@media(min-width: 1000px){\r\n    #ship-menu {\r\n        padding: 0 2rem;\r\n        gap: 2.5rem;\r\n    }\r\n}\r\n\r\n#winner-box {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    height: fit-content;\r\n    width: max(250px, 50vw);\r\n    gap: 1rem;\r\n    margin: 1rem auto;\r\n    background-color: var(--box-color);\r\n    font-family: monofett;\r\n    letter-spacing: 1px;;\r\n}\r\n\r\n/* End of Containers*/\r\n\r\n/* Text */\r\n#grid-title {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.title-screen h1 {\r\n    padding-top: 1.5rem;\r\n    font-size: 60px;\r\n    font-family: monofett;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n#status-box h2 {\r\n    padding: 0.25rem 2.5rem;\r\n}\r\n/*End of Text*/\r\n\r\n/*Images*/\r\n#status-box div {\r\n    display: inline-block;\r\n    height: 25px;\r\n    width: 25px;\r\n    vertical-align: bottom;\r\n    border: 2px solid var(--outline-color);\r\n}\r\n\r\n#status-box img {\r\n    width: 30px;\r\n    vertical-align: bottom;\r\n}\r\n\r\n#ship-menu div.grid-ship {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    border: 2px solid var(--outline-color);\r\n}\r\n\r\n@media (max-width: 372px) {\r\n    #ship-menu div.grid-ship{\r\n        width: 11px;\r\n        height: 11px;\r\n        border: 1px solid var(--outline-color);\r\n    }\r\n}\r\n\r\n#ship-menu img {\r\n    padding-top: 0.42rem;\r\n}\r\n\r\n.right {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.flip {\r\n    transform: scaleX(-1);\r\n}\r\n\r\n/*End of Images*/\r\n\r\n/*Grid Components*/\r\n.p1,\r\n.p2 {\r\n    border: 0.5px solid var(--line-color);\r\n}\r\n\r\n.p1 {\r\n    background-color: var(--grid1);\r\n}\r\n\r\n.p2 {\r\n    background-color: var(--grid2);\r\n}\r\n\r\n.grid-ship {\r\n    background-color: brown;\r\n}\r\n\r\n.grid-hit {\r\n    background: url('./img/explosion-ship.png');\r\n    background-size: contain;\r\n}\r\n\r\n.p1.grid-miss {\r\n    background: url('./img/whirlpool-miss-dark.png');/*radial-gradient(rgb(255, 202, 202) 40%, var(--grid1));*/\r\n    background-size: contain;\r\n}\r\n\r\n.p2.grid-miss {\r\n    background: url('./img/whirlpool-miss-light.png')/*radial-gradient(rgb(255, 202, 202) 40%, var(--grid2))*/;\r\n    background-size: contain;\r\n}\r\n\r\n.grid-target,\r\n.grid-up,\r\n.grid-right {\r\n    width: calc(var(--grid-size) / 10);\r\n    height: calc(var(--grid-size) / 10);\r\n}\r\n\r\n.grid-up {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.grid-right {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.grid-target {\r\n    filter: invert();\r\n    background-color: cyan;\r\n    border-radius: calc(var(--grid-size) / 10);\r\n}\r\n\r\n#grid img {\r\n    pointer-events: none;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n/*End of Grid Components*/\r\n\r\n/* Buttons */\r\n#winner-box button,\r\n.title-screen button {\r\n    height: 5rem;\r\n    width: 10rem;\r\n    font-size: 30px;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#player-icon-container button {\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 25px;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n#player-1.highlight {\r\n    color: var(--grid2);\r\n    background-color: var(--grid1);\r\n    transform: scale(1.1);\r\n}\r\n\r\n#player-2.highlight {\r\n    color: var(--grid1);\r\n    background-color: var(--grid2);\r\n    transform: scale(1.1);\r\n}\r\n\r\n#ship-menu button {\r\n    height: 50px;\r\n    width: fit-content;\r\n    background-color: rgba(0,0,0,0);\r\n    white-space: pre;\r\n}\r\n\r\n@media(min-width: 500px) {\r\n    #ship-menu button:not(:first-child):not(:last-child) {\r\n        padding-left: 1rem;\r\n        padding-right: 1rem;\r\n    } \r\n}\r\n\r\n\r\n\r\n#player-icon-container button:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 5px 1px black;\r\n    transform: scale(1.2);\r\n}\r\n\r\n#winner-box button:hover,\r\n#ship-menu button:hover,\r\n.title-screen button:hover {\r\n    transform: scale(1.05);\r\n    filter: brightness(110%);\r\n    cursor: pointer;\r\n}\r\n\r\n#ship-menu button:first-child:hover.open,\r\n#ship-menu button:last-child:hover.flip{\r\n    /*rotate && place btn only*/\r\n    transform: scale(-1.05, 1.05) !important;\r\n}\r\n\r\n#grid * {\r\n    cursor: none !important;\r\n    user-select: none;\r\n}\r\n\r\n#place-ship {\r\n    width: 50px !important;\r\n    text-align: start;\r\n    background: url('./img/chevron-right-box.png');\r\n    background-repeat: no-repeat;\r\n    background-size: 50%;\r\n    background-position: bottom right;\r\n    padding: 0.5rem 0 2rem 0 !important;\r\n}\r\n\r\n#place-ship.open {\r\n    background-size: cover;\r\n    transform: rotate(180deg);\r\n}\r\n/* End of Buttons*/\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const battleShips = (() => {
    //Factories
    const ship = (coords, length, timesHit, sunk) => {
        const hit = (target) => {
            target.timesHit++;
        }

        const isSunk = (target) => {
            if (target.timesHit >= target.length) {
                target.sunk = true;
            }
        };

        return { coords, length, timesHit, sunk, hit ,isSunk, }
    };

    const gameBoard = (grid, isAi = false) => {
        //board objects
        const ships = [];
        const unplacedShips = [
            {name: 'carrier', length: 5, number: 1},
            {name: 'battleship', length: 4, number: 1},
            {name: 'submarine', length: 3, number: 4},
            {name: 'patrol boat', length: 2, number: 3}
        ];
        const attackLog = [];
        const placePhase = [true];

        const generateGrid = () => {
            const gridMap = [];

            for(let i = 0; i <= 9; i++){
                for(let j = 0; j <= 9; j++){
                    gridMap.push({
                        coordinate: `[${i},${j}]`,
                        shipHere: false,
                        hitHere: false,
                    });
                }
            }
            return gridMap;
        };
        grid = generateGrid();

        //board manipulators
        const setBoard = (coords, prop) => {
            const spots = grid.filter(coord => {
                return coords === coord.coordinate;
            })
            if(prop === 'shipHere') return spots[0].shipHere = true;
            else return spots[0].hitHere = true;
        };

        const removeShipfromStorage = (length) => {
            switch(length){
                case 5: unplacedShips[0].number--
                    break;
                case 4: unplacedShips[1].number--
                    break; 
                case 3: unplacedShips[2].number--
                    break;
                case 2: unplacedShips[3].number--
                    break;
            }
        };
        // grid iterators //
        const checkGridForShip = (coords) => {
            const spots = grid.filter(coord => {
                if(coord.shipHere && coord.coordinate === coords ) return coord;
            });
            if(spots.length < 1 || !spots) return false;
            return spots[0].shipHere;
        };

        const checkGridForHit = (coords) => {
            const spots = grid.filter(coord => {
                if(coord.hitHere && coord.coordinate === coords) return coord;
            });
            if(spots.length < 1 || !spots) return false;
            return spots[0].hitHere;
        };

        const checkStorageForShip = (length) => {
            const availableShip = []
            unplacedShips.forEach(ship => {
                if(length === ship.length && ship.number > 0) availableShip.push(ship);
            });
            if(availableShip.length > 0) return true;
            else return false;
        };

        const checkNumOfSunkShips = (sunkShips = []) => {
            ships.forEach(ship => {
                if(ship.sunk) sunkShips.push(ship);
            });
            return sunkShips.length;
        }

        const getDirections = (length, x, y, direction) => {
            let [checkH, checkV] = [false, false]
            const newCoords = [];

            for(let i = 0; i < length; i++){
                const horizontal = `[${x+i},${y}]`;
                if(checkH) break;
                checkH = checkGridForShip(horizontal)
            }

            for(let i = 0; i < length; i++){
                const vertical = `[${x},${y+i}]`;
                if(checkV) break;
                checkV = checkGridForShip(vertical)
            }

            for(let i = 0; i < length; i++) {
                const horizontal = `[${x+i},${y}]`;
                const vertical = `[${x},${y+i}]`;

                if(direction === 'horizontal') {
                    if(checkH) return 'error';
                    setBoard(horizontal, 'shipHere');
                    newCoords.push(horizontal);
                }else if (direction === 'vertical') {
                    if(checkV) return 'error';
                    setBoard(vertical, 'shipHere');
                    newCoords.push(vertical);
                }
            }
            return newCoords;
        };

        // game functions //
        const changePhase = () => {
            let end = false;
            const totalShipsInStorage = [
                checkStorageForShip(5),
                checkStorageForShip(4),
                checkStorageForShip(3),
                checkStorageForShip(2)
            ];

            if(totalShipsInStorage.every(ship => !ship)) end = true;
            if(end){    
                placePhase[0] = false;
                return 'end of place phase';
            }
            return 'continue placing';
        };

        const placeShip = (length, coords, direction) => {
            if(!checkStorageForShip(length) || !placePhase[0]) return; //TBA
            const [x, y] = [Number(coords[1]), Number(coords[3])];
            const con =
            (x + length >= 11 && direction === 'horizontal')
            || 
            (y + length >= 11 && direction === 'vertical');
            if(con) return 'error';

            const newCoords = getDirections(length, x, y, direction);
            if (newCoords === 'error') return 'error';
            const newShip = ship(newCoords, length, 0, false);

            removeShipfromStorage(length);
            changePhase();
            ships.push(newShip);
            return newShip;
        };

        const aiPlaceShip = () => {
            let shipDirection;
            const [check5, check4, check3, check2] = [
                checkStorageForShip(5),
                checkStorageForShip(4),
                checkStorageForShip(3),
                checkStorageForShip(2)
            ]
            const [x,y, dirDec] = [
                Math.floor(Math.random() * 9.9),
                Math.floor(Math.random() * 9.9),
                Math.random(),
            ]
            if(dirDec > 0.49) shipDirection = 'vertical'
            else shipDirection = 'horizontal';
            if(check5){
                placeShip(5, `[${x},${y}]`, shipDirection);
            }else if(check4){
                placeShip(4, `[${x},${y}]`, shipDirection);
            }else if(check3){
                placeShip(3, `[${x},${y}]`, shipDirection);
            }else if(check2){
                placeShip(2, `[${x},${y}]`, shipDirection);
            }
            if(check5 || check4 || check3 || check2){
                return aiPlaceShip();
            }else {
                return 'placed all ships';
            }
        };

        const receiveAttack = (coords) => {
            if(lose()) return 'game over';
            if(checkGridForHit(coords) || placePhase[0]) return;
            setBoard(coords, 'hitHere');      
            attackLog.push(coords);
            if (!checkGridForShip(coords)) return 'miss';
            let thisShip;
            ships.forEach(ship => {
                for(let i = 0; i < ship.coords.length; i++){
                    if(coords === ship.coords[i]) thisShip = ship;
                }
            });
            thisShip.hit(thisShip);
            thisShip.isSunk(thisShip);
            return 'hit';
        };

        const lose = () => {
            const comparison = [];
            ships.forEach(ship => {
                if(ship.sunk) comparison.push(ship);
            });
            return comparison.length >= ships.length;
        };

        return {
            isAi, 
            grid,
            placeShip,
            aiPlaceShip,
            ships,
            unplacedShips,
            attackLog,
            checkGridForShip,
            checkGridForHit,
            checkNumOfSunkShips,
            receiveAttack,
            //remove below
            placePhase,
            lose,
        };
    };

    const player = (playerNumber, isAi = false) => {
        const firstTurn = (() => {
            if(playerNumber === 1) return true;
            else return false;
        });

        let isTurn = firstTurn(); 

        const takeTurn = (coords, board, user, target, targetBoard) => {
            if(!user.isTurn || board.checkGridForHit(coords)) return;
            const results = board.receiveAttack(coords);
            if(results === 'game over') return 'game over';
            user.isTurn = false;
            target.isTurn = true;
            if(target.isAi) aiTakesTurn(targetBoard, target, user, board);
            return `${results} at ${coords}`;
        };

        const aiTakesTurn = (board, user, target, targetBoard) => {
            const coords = aiChooseCoords(board);
            const results = takeTurn(coords, board, user, target, targetBoard);
            if(!results) return aiTakesTurn(board,user,target, targetBoard)
            else return results;
        };

        const aiChooseCoords = (board) => {
            const checkLastHit = aiChooseLastHit(board);
            const coords = aiChooseDirection(board, checkLastHit);

            if(checkLastHit && board.checkGridForShip(checkLastHit) && coords) return coords;
            else {
                const x = Math.floor(Math.random() * 9.9);
                const y = Math.floor(Math.random() * 9.9);
                return `[${x},${y}]`;
            }
        };

        const aiChooseLastHit = (board) => {
            const hits = [];
            board.attackLog.forEach(coord => {
                if(board.checkGridForShip(coord)) hits.unshift(coord);
            });
            if(hits.length < 1) return;

            const validHits = [];
            hits.forEach(hit => {
                if(aiChooseDirection(board, hit)) validHits.unshift(hit);
            });
            if(validHits.length < 1) return;
            return validHits[0];
        };

        const aiChooseDirection = (board, lastHit) => {
            if(!lastHit) return;
            let dir; 
            const up = Number(lastHit[3]) + 1;
            const down = Number(lastHit[3]) - 1;
            const left = Number(lastHit[1]) - 1;
            const right = Number(lastHit[1]) + 1;
            const [checkUp, checkDown, checkLeft, checkRight] = [
                board.checkGridForHit(`[${lastHit[1]},${up}]`),
                board.checkGridForHit(`[${lastHit[1]},${down}]`),
                board.checkGridForHit(`[${left},${lastHit[3]}]`),
                board.checkGridForHit(`[${right},${lastHit[3]}]`),
            ];

            if(!checkRight){
                dir = `[${right},${lastHit[3]}]`;
            }else if(!checkUp){
                dir = `[${lastHit[1]},${up}]`;
            }else if(!checkLeft){
                dir = `[${left},${lastHit[3]}]`;
            }else if(!checkDown){
                dir = `[${lastHit[1]},${down}]`;
            }else return;
            
            if(!validateCoords(dir)) return;
            else return dir;
        };

        const validateCoords = (dir) => {
            // x / y is in 0 - 9 range if negative or 10 length will be higher //
            if(dir.length !== 5) return;
            else return true;
        }

        return { playerNumber, takeTurn, aiTakesTurn, isTurn, isAi, };
    }

    return {
        ship,
        gameBoard,
        player,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (battleShips);

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship */ "./src/battleship.js");
/* harmony import */ var _img_arrow_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/arrow.png */ "./src/img/arrow.png");
/* harmony import */ var _img_crosshairs_gps_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/crosshairs-gps.png */ "./src/img/crosshairs-gps.png");
/* harmony import */ var _img_rotate_left_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/rotate-left.png */ "./src/img/rotate-left.png");





const userInterface = (() => {
    const titleScreen = () => {
        const container = document.querySelector('#container');
        
        const setContainer = () => {
            container.setAttribute('class', 'title-screen');
            while(container.firstChild){
                container.removeChild(container.firstChild);
            }
        }

        const addMenuContainer = () => {
            const box = document.createElement('div');
            box.setAttribute('id', 'title-screen-menu');
            container.appendChild(box);
        }

        const addTitle = () => {
            const menuContainer = document.querySelector('#title-screen-menu');
            const title = document.createElement('h1');
            title.textContent = 'BattleShips';
            menuContainer.appendChild(title);
        }

        const addButtons = () => {
            const menuContainer = document.querySelector('#title-screen-menu');
            const btnContainer = document.createElement('div');
            btnContainer.setAttribute('id', 'title-screen-btns');
            const pvpBtn = document.createElement('button');
            pvpBtn.setAttribute('id', 'pvp-btn');
            const pvmBtn = document.createElement('button');
            pvmBtn.setAttribute('id', 'pvm-btn');
            pvpBtn.textContent = 'Vs Player';
            pvmBtn.textContent = 'Vs Computer';
            menuContainer.appendChild(btnContainer);
            btnContainer.append(pvpBtn, pvmBtn); 
        }

        const addEvents = () => {
            const pvp = gameScreen(true);
            const pvm = gameScreen(false);
            document.querySelector('#pvp-btn')
                .addEventListener('click', pvp.loadGameScreen);
            document.querySelector('#pvm-btn')
                .addEventListener('click', pvm.loadGameScreen);
        };

        const loadTitleScreen = () => { 
            setContainer();
            addMenuContainer();
            addTitle();
            addButtons();
            addEvents();
        }

        return { loadTitleScreen, };
    };

    const gameScreen = (pvp = false) => {        
        const setPlayer = () => {
            return pvp
                ? _battleship__WEBPACK_IMPORTED_MODULE_0__["default"].player(2, false)
                : _battleship__WEBPACK_IMPORTED_MODULE_0__["default"].player(2, true);
        }
        const setBoard = () => {
            return pvp
                ? _battleship__WEBPACK_IMPORTED_MODULE_0__["default"].gameBoard(null, false)
                : _battleship__WEBPACK_IMPORTED_MODULE_0__["default"].gameBoard(null, true);
        }

        const player1 = _battleship__WEBPACK_IMPORTED_MODULE_0__["default"].player(1, false);
        const player2 = setPlayer();
        const board1 = _battleship__WEBPACK_IMPORTED_MODULE_0__["default"].gameBoard();
        const board2 = setBoard();

        const container = document.querySelector('#container');
        const pointer = {
            player: 1,
            isPlacing: false,
            length: 0,
            direction: 'horizontal',
            phase: 'place' // or attack
        };

        const setContainer = () => {
            container.setAttribute('class','game-screen');
            while(container.firstChild){
                container.removeChild(container.firstChild);
            }
        };

        // game controller //
        const changeWhoPlacing = () => {
            const ships = []
            if(pointer.player === 1){    
                board1.unplacedShips.forEach(ship => ships.push(ship.number));
            }

            const con = ships.reduce((current, total) => {
                return total += current;
            }, 0);

            if(con === 0 && ships.length > 0){
                pointer.player = 2;
                setAnnouncement('Player 2 \n Placing Phase');
                setTimeout(() => changeGrid(player2, board2, true), 1000);
                setTimeout(() => pointer.phase = 'place', 1001);
                setGridTitle(player2);
            }
            endPlacing();
        };

        const endPlacing = () => {
            const ships = []
            if(pointer.player === 2){
                board2.unplacedShips.forEach(ship => ships.push(ship.number));
            }

            const con = ships.reduce((current, total) => {
                return total += current;
            }, 0);
            
            if(con === 0 && ships.length > 0){     
                pointer.player = 1;
                setAnnouncement('Attack Phase');
                toggleBtns();
                setTimeout(() => setAnnouncement('Player 1 Turn'), 1000);
                setTimeout(() => {
                    pointer.phase = 'attack';
                    toggleBtns();
                    setTurnStatus();
                    changeGrid(player2, board2, true);
                    removePlaceShipButtons();
                }, 2000);       
            }
        };

        const endTurn = () => {
            if(player1.isTurn){
                changeGrid(player2, board2);
            }else if (player2.isTurn){
                changeGrid(player1, board1);
            }
            setTurnStatus();
            setAnnouncement('', true);
        };

        const toggleBtns = () => {
            const btns = document.querySelectorAll('button');
            btns.forEach(btn => {
                if(btn.disabled) btn.disabled = false;
                else btn.disabled = true;
            });
        }
        // end of game controller //

        // player status //
        const addPlayerIcons = () => {
            const playerIconContainer = document.createElement('div');
            playerIconContainer.setAttribute('id', 'player-icon-container')
            const player1Btn = document.createElement('button');
            const player2Btn = document.createElement('button');
            player1Btn.setAttribute('id', 'player-1');
            player2Btn.setAttribute('id', 'player-2');
            player1Btn.textContent = 'Player 1';
            player2Btn.textContent = 'Player 2';
            container.appendChild(playerIconContainer);
            
            const title = document.createElement('h1');
            title.setAttribute('id', 'grid-title');
            title.textContent = `Player[]`;

            playerIconContainer.append(player1Btn, title, player2Btn);

            setGridTitle(player1);
        };

        const addStatus = () => {
            const statusBox = document.createElement('div');
            statusBox.setAttribute('id', 'status-box');
            const status1 = document.createElement('h2'); // phase / turn
            status1.setAttribute('id', 'status-1');
            status1.textContent = 'phase: / turn: ';
            const status2 = document.createElement('h2') // ship / round
            status2.setAttribute('id', 'status-2');
            status2.textContent = 'ship: / round:'
            const status3 = document.createElement('h2') // direction / ships sunk
            status3.setAttribute('id', 'status-3');
            status3.textContent = 'direction: / ships sunk:';
            container.appendChild(statusBox);
            statusBox.append(status1, status2, status3);
        }

        const setTurnStatus = () => {
            const status1 = document.querySelector('#status-1');
            const status2 = document.querySelector('#status-2');
            const status3 = document.querySelector('#status-3');
            const box = `<div class="grid-ship"></div>`
            let textArrow = `<img src="${_img_arrow_png__WEBPACK_IMPORTED_MODULE_1__}" />`;

            if(pointer.phase === "place"){
                status1.textContent = `Phase: ${pointer.phase} ships`;
                if(pointer.direction === 'vertical') textArrow = `<img src="${_img_arrow_png__WEBPACK_IMPORTED_MODULE_1__}" />`;
                else textArrow = `<img src="${_img_arrow_png__WEBPACK_IMPORTED_MODULE_1__}" class="right">`
                status3.innerHTML = `Direction: ${textArrow}`;
                switch(pointer.length) {
                    case 0:
                        status2.textContent = 'Ship: none(0)'
                        break;
                    case 2:
                        status2.innerHTML = `Ship: ${box}${box}`;
                        break;
                    case 3:
                        status2.innerHTML = `Ship: ${box}${box}${box}`;
                        break;
                    case 4:
                        status2.innerHTML = `Ship: ${box}${box}${box}${box}`;
                        break;
                    case 5:
                        status2.innerHTML = `Ship: ${box}${box}${box}${box}${box}`;
                        break;
                }
            }else {
                let turn = 0;
                if(player1.isTurn)turn = 1;
                else if(player2.isTurn) turn = 2;
                status1.textContent = `Turn: player${turn}`;
                status2.textContent = `Round: ${board2.attackLog.length}`;
                pointer.player === 1 
                    ? status3.textContent = `Ships Sunk: ${board1.checkNumOfSunkShips()}`
                    : status3.textContent = `Ships Sunk: ${board2.checkNumOfSunkShips()}`;
            }
        };

        const addAnnouncement = () => {
            const announcementBox = document.createElement('div');
            announcementBox.setAttribute('id', 'announcement');
            announcementBox.classList.add('hide');
            const status = document.createElement('h1');
            status.setAttribute('id', 'announcement-text');
            document.body.appendChild(announcementBox);
            announcementBox.appendChild(status);
        };

        const setAnnouncement = (text, remove = false) => {
            const box = document.querySelector('#announcement');
            const status = document.querySelector('#announcement-text');
            box.classList.remove('hide');
            !remove
                ? status.textContent = text
                : status.textContent = box.classList.add('hide');
        };

        const addIconEvents = () => {
            document.querySelector('#player-1')
                .addEventListener('click', () => {
                    changeGrid(player1, board1);
                });
            document.querySelector('#player-2')
                .addEventListener('click', () => {
                    changeGrid(player2, board2);
                });
        };
        // end of player status //

        // grid display //
        // grid title //
        const setGridTitle = (player) => {
            const title = document.querySelector('#grid-title');
            title.textContent = `Player ${player.playerNumber}`;
            setGridPlayerBtn();
        }

        const setGridPlayerBtn = () => {
            const btn1 = document.querySelector('#player-1');
            const btn2 = document.querySelector('#player-2');

            if((pointer.player === 1 && pointer.phase === 'place')){
                btn1.classList.add('highlight');
                btn2.classList.remove('highlight');
            }else if(pointer.player === 2 && pointer.phase ==='place') {
                btn2.classList.add('highlight');
                btn1.classList.remove('highlight');
            }else if(pointer.player === 1 && pointer.phase === 'attack'){
                btn2.classList.add('highlight');
                btn1.classList.remove('highlight');
            }else if(pointer.player === 2 && pointer.phase === 'attack') {
                btn1.classList.add('highlight');
                btn2.classList.remove('highlight');
            }
        }

        // end of grid title //

        // grid //

        const addGrid = (plusid = 'grid') => {
            const grid = document.createElement('div');
            grid.setAttribute('id', `${plusid}`);
            container.appendChild(grid);
        }

        const setGridToPlayer = (player, board, plusid = 'grid') => {
            const grid = document.querySelector(`#${plusid}`);
            console.log(grid);
            const playerNumber = player.playerNumber;
            const coords = board.grid;
            coords.forEach(coord => {
                const [x,y] = [coord.coordinate[1], coord.coordinate[3]];
                const btn = document.createElement('button');
                btn.setAttribute('id', `grid-${playerNumber}-${x},${y}`);
                btn.classList.add(`p${playerNumber}`); 
                grid.appendChild(btn);
            });

            if(!player1.isTurn && pointer.player === 1){
                markGrid(playerNumber, board, false);
            }
            if(!player2.isTurn && pointer.player === 2){
                markGrid(playerNumber, board, false);
            }else if(pointer.phase === 'place') {
                markGrid(playerNumber, board, false);
            }else {
                markGrid(playerNumber, board, true);
            }
        };

        const setGridToShip = (e, board) => {
            if(pointer.phase != 'place') return;
            const coords = e.target.id.replace(/grid-/i, '');
            const [playerNumber, x, y] = [
                Number(coords[0]),
                Number(coords[2]),
                Number(coords[4]),
            ];
            !board.isAi
                ? board.placeShip(pointer.length, `[${x},${y}]`, pointer.direction)
                : board.aiPlaceShip();
            if(!board.isAi)markGridToShip(playerNumber, board);

            closePlaceShipMenu();
            openPlaceShipMenu();

            changeWhoPlacing();
        };

        const attackGrid = (e, board) => {
            const coords = e.target.id.replace(/grid-/i, '');
            const [playerNumber, x, y] = [
                Number(coords[0]),
                Number(coords[2]),
                Number(coords[4]),
            ];

            if(playerNumber === 2 && player1.isTurn){
                player1.takeTurn(`[${x},${y}]`, board, player1, player2, board1);
                markGrid(playerNumber, board, true);
                if(!player1.isTurn){
                    setAnnouncement('Player 2 Turn');
                    setTimeout(endTurn, 2000);
                }
            }else if(playerNumber === 1 && player2.isTurn){
                player2.takeTurn(`[${x},${y}]`, board, player2, player1, board2);
                markGrid(playerNumber, board, true);
                if(!player2.isTurn){
                    setAnnouncement('Player 1 Turn');
                    setTimeout(endTurn, 2000);
                }
            }
            setTurnStatus();
            loseGame();
        };

        const loseGame = () => {
            if(board1.lose() || board2.lose()) loadGameOverScreen();
        };

        const markGridToShip = (playerNumber, board) => {
            const gridSquares = document.querySelectorAll(`.p${playerNumber}`);
            const coords = board.grid;
            const marked = [];

            coords.forEach(coord => {
                if(coord.shipHere) marked.push(coord.coordinate);
            });

            gridSquares.forEach(square => {
                const coords = square.id.replace(/grid-\w-/i, '');
                const newCoords = `[${coords}]`;
                for(let i = 0; i < marked.length; i++){
                    if(marked[i] === newCoords){
                        square.classList.add('grid-ship');
                    }
                }
            });
        };

        const markGridToHoverShip = (e) => {
            if(pointer.phase != 'place' || pointer.length < 2) return markGridToHoverHit(e);
            let textArrow;
            pointer.direction === 'horizontal'
                ? textArrow = `<img src="${_img_arrow_png__WEBPACK_IMPORTED_MODULE_1__}" class="grid-right" />`
                : textArrow = `<img src="${_img_arrow_png__WEBPACK_IMPORTED_MODULE_1__}" class="grid-up" />`
            e.target.innerHTML = textArrow;
        };

        const markGridToHit = (playerNumber, board) => {
            const gridSquares = document.querySelectorAll(`.p${playerNumber}`);
            const coords = board.grid;
            const marked = [];

            coords.forEach(coord => {
                if(coord.hitHere && coord.shipHere) marked.push(coord.coordinate);
            });

            gridSquares.forEach(square => {
                const coords = square.id.replace(/grid-\w-/i, '');
                const newCoords = `[${coords}]`;
                for(let i = 0; i < marked.length; i++){
                    if(marked[i] === newCoords){
                        square.classList.add('grid-hit');
                    }
                }
            });
        };

        const markGridToMiss = (playerNumber, board) => {
            const gridSquares = document.querySelectorAll(`.p${playerNumber}`);
            const coords = board.grid;
            const marked = [];

            coords.forEach(coord => {
                if(coord.hitHere && !coord.shipHere) marked.push(coord.coordinate);
            });

            gridSquares.forEach(square => {
                const coords = square.id.replace(/grid-\w-/i, '');
                const newCoords = `[${coords}]`;
                for(let i = 0; i < marked.length; i++){
                    if(marked[i] === newCoords){
                        square.classList.add('grid-miss');
                    }
                }
            });
        };

        const markGridToHoverHit = (e) => {
            if(pointer.phase != 'attack') return;
            e.target.innerHTML = `<img src="${_img_crosshairs_gps_png__WEBPACK_IMPORTED_MODULE_2__}" class="grid-target" />`;
        };

        const markGrid = (playerNumber, board, hideShips) => {
            if(!hideShips) markGridToShip(playerNumber, board);
            markGridToHit(playerNumber, board);
            markGridToMiss(playerNumber, board);
        };

        const removeGrid = () => {
            const grid = document.querySelector('#grid');
            while(grid.firstChild){
                grid.removeChild(grid.firstChild);
            }
        };

        const removeHover = (e) => {
            while(e.target.firstChild){
                e.target.removeChild(e.target.firstChild);
            }
        }

        const changeGrid = (player, board, bypass = false) => {
            if(pointer.phase === 'place' && !bypass) return;
            if(pointer.player === player.playerNumber && !bypass) return;
            removeGrid();
            setGridTitle(player);
            setGridToPlayer(player, board);
            addGridEvents(player, board);
            pointer.player = player.playerNumber;        

            setAnnouncement('', true);
            if(!bypass)setTurnStatus();
            else if(bypass){
                closePlaceShipMenu();
                openPlaceShipMenu();
            }
        };

        const chooseGridFunction = (e, board) => {
            if(pointer.phase === 'attack'){
                attackGrid(e, board);
            } else if(pointer.isPlacing){
                setGridToShip(e, board);
            }
        };

        const addGridEvents = (player, board) => {
            const gridBtns = document.querySelectorAll(`.p${player.playerNumber}`)
            gridBtns.forEach(btn => {
                btn.addEventListener('mouseup', e => chooseGridFunction(e, board));
                btn.addEventListener('mouseenter', e => markGridToHoverShip(e, board));
                btn.addEventListener('touchstart', e => markGridToHoverShip(e, board));
                btn.addEventListener('mouseleave', removeHover);
                btn.addEventListener('touchend', removeHover);
            });
        };

        const loadGrid = (playerNumber, two = false) => {
            addGrid('grid');

            if(two){
                addWinner();
                addGrid('grid-2');
            }
            if(playerNumber === 1){
                setGridToPlayer(player1, board1, 'grid');
                markGrid(player1.playerNumber, board1, false);
            }else{
                setGridToPlayer(player1, board1, 'grid');
                markGrid(player1.playerNumber, board1, false);
                setGridToPlayer(player2, board2, 'grid-2');
                markGrid(player2.playerNumber, board2, false);
            }
        }
        // end of grid //
        // end of grid display //
        
        // place ship buttons //
        const addPlaceShipButton = () => {
            const btnContainer = document.createElement('div');
            btnContainer.setAttribute('id', 'ship-menu');
            const placeShipBtn = document.createElement('button');
            placeShipBtn.textContent = 'Ships';
            placeShipBtn.setAttribute('id', 'place-ship');
            container.appendChild(btnContainer);
            btnContainer.appendChild(placeShipBtn);
        };

        const openPlaceShipMenu = () => {
            const box = `<div class="grid-ship"></div>`
            // buttons //
            // old //
            const placeShip = document.querySelector('#place-ship');
            placeShip.classList.add('open');
            placeShip.textContent = ''
            // new //
            const carrier = document.createElement('button');
            carrier.setAttribute('id', 'carrier');
            carrier.innerHTML = `${box}${box}${box}${box}${box}`;
            const battleship = document.createElement('button');
            battleship.setAttribute('id', 'battleship');
            battleship.innerHTML = `${box}${box}${box}${box}`;
            const submarine = document.createElement('button');
            submarine.setAttribute('id', 'submarine');
            submarine.innerHTML = `${box}${box}${box}`;
            const patrolBoat = document.createElement('button');
            patrolBoat.setAttribute('id', 'patrol-boat');
            patrolBoat.innerHTML = `${box}${box}`;
            const rotate = document.createElement('button');
            rotate.setAttribute('id', 'rotate-ship');
            const rotateInner = document.createElement('img');
            rotateInner.setAttribute('src', `${_img_rotate_left_png__WEBPACK_IMPORTED_MODULE_3__}`);
            rotate.appendChild(rotateInner);
            
            // container //
            const btnsToAppend = [
                patrolBoat,
                submarine,
                battleship,
                carrier,
                rotate
            ];
            const btnContainer = document.querySelector('#ship-menu');
            btnContainer.append(...btnsToAppend);
            addShipNumbers(...btnsToAppend);
            hideShipBtns(...btnsToAppend);
            // events //
            addShipButtonEvents();
            addClosePlaceShipEvent();
        };

        const addShipNumbers = (patrolBoat, submarine, battleship, carrier) => {
            const pBoatN = document.createElement('p');
            const submarineN = document.createElement('p');
            const battleshipN = document.createElement('p');
            const carrierN = document.createElement('p');

            if(pointer.player === 1){
                pBoatN.textContent = `x ${board1.unplacedShips[3].number}`;
                submarineN.textContent = `x ${board1.unplacedShips[2].number}`;
                battleshipN.textContent = `x ${board1.unplacedShips[1].number}`;
                carrierN.textContent = `x ${board1.unplacedShips[0].number}`;
            }else if(pointer.player === 2){
                pBoatN.textContent = `x ${board2.unplacedShips[3].number}`;
                submarineN.textContent = `x ${board2.unplacedShips[2].number}`;
                battleshipN.textContent = `x ${board2.unplacedShips[1].number}`;
                carrierN.textContent = `x ${board2.unplacedShips[0].number}`;
            }

            patrolBoat.appendChild(pBoatN);
            submarine.appendChild(submarineN);
            battleship.appendChild(battleshipN);
            carrier.appendChild(carrierN);
        };

        const closePlaceShipMenu = () => {
            const btnContainer = document.querySelector('#ship-menu');
            const placeShipBtn = document.querySelector('#place-ship');
            placeShipBtn.textContent = 'Ships';
            placeShipBtn.classList.remove('open');

            while(btnContainer.children.length > 1){
                btnContainer.removeChild(btnContainer.lastChild);
            }

            addOpenPlaceShipEvent();
        };

        const addOpenPlaceShipEvent = () => {
            document.querySelector('#place-ship')
                .addEventListener('click', openPlaceShipMenu);
            document.querySelector('#place-ship')
                .removeEventListener('click', closePlaceShipMenu);
        };

        const addClosePlaceShipEvent = () => {
            document.querySelector('#place-ship') 
                .addEventListener('click', closePlaceShipMenu);
            document.querySelector('#place-ship')
                .removeEventListener('click', openPlaceShipMenu);
        };

        const placeShipType = (length) => {
            if(pointer.isPlacing && pointer.length === length){
                pointer.isPlacing = false;
                pointer.length = 0;
            }else{
                pointer.isPlacing = true;
                pointer.length = length;
            }
            setTurnStatus();
        };

        const rotateShip = () => {
            pointer.isPlacing
                ? pointer.direction === 'horizontal'
                    ? pointer.direction = 'vertical'
                    : pointer.direction = 'horizontal'
                : 'nothing to rotate';
            toggleRotateIcon();
            setTurnStatus();
        };

        const toggleRotateIcon = () => {
            const rotateBtn = document.querySelector('#rotate-ship');

            pointer.direction === 'horizontal'
                ? rotateBtn.classList.remove('flip')
                : rotateBtn.classList.add('flip');
        }

        const addShipButtonEvents = () => {
            document.querySelector('#carrier')
                .addEventListener('click', () => placeShipType(5));
            document.querySelector('#battleship')
                .addEventListener('click', () => placeShipType(4));
            document.querySelector('#submarine')
                .addEventListener('click', () => placeShipType(3));
            document.querySelector('#patrol-boat')
                .addEventListener('click', () => placeShipType(2));
            document.querySelector('#rotate-ship')
                .addEventListener('click', rotateShip);
        };

        const hideShipBtns = (patrolBoat, submarine, battleship, carrier) => {
            if(pointer.player === 1 && board1.unplacedShips[0].number < 1){
                carrier.classList.add('hide');
            }
            if(pointer.player === 1 && board1.unplacedShips[1].number < 1){
                battleship.classList.add('hide');
            }
            if(pointer.player === 1 && board1.unplacedShips[2].number < 1){
                submarine.classList.add('hide');
            }
            if(pointer.player === 1 && board1.unplacedShips[3].number < 1){
                patrolBoat.classList.add('hide');
            }
            if(pointer.player === 2 && board2.unplacedShips[0].number < 1){
                carrier.classList.add('hide');
            }
            if(pointer.player === 2 && board2.unplacedShips[1].number < 1){
                battleship.classList.add('hide');
            }
            if(pointer.player === 2 && board2.unplacedShips[2].number < 1){
                submarine.classList.add('hide');
            }
            if(pointer.player === 2 && board2.unplacedShips[3].number < 1){
                patrolBoat.classList.add('hide');
            }
        };

        const removePlaceShipButtons = () => {
            const menu = document.querySelector('#ship-menu')
            while(menu.firstChild){
                menu.removeChild(menu.firstChild);
            }
        }

        // end of place ship buttons //

        // game over //
        const addGrids = () => {
            setContainer();
            loadGrid(2, true);
        };

        const addWinner = () => {
            const box = document.createElement('div');
            box.setAttribute('id', 'winner-box');
            container.appendChild(box);

            const winner = document.createElement('h1');
            winner.classList.add('winner');
            winner.textContent = '';
            box.appendChild(winner);
        }

        const setWinner = () => {
            const winner = document.querySelector('.winner');
            const rounds = board2.attackLog.length;
            board1.lose()
                ? winner.textContent = `Player 2 WINS! in ${rounds} rounds`
                : winner.textContent = `Player 1 WINS! in ${rounds} rounds`
        }

        const addReturnMenuBtn = () => {
            const btn = document.createElement('button');
            btn.setAttribute('id', 'main-menu-btn')
            btn.textContent = 'Main Menu';
            const replayBtn = document.createElement('button');
            replayBtn.setAttribute('id', 'replay-btn');
            replayBtn.textContent = 'Replay';

            const box = document.querySelector('#winner-box');
            while(box.firstChild){
                box.removeChild(box.firstChild);
            }
            box.append(btn, replayBtn);
            addMenuEvent();
            container.removeEventListener('click', addReturnMenuBtn);
        }

        const addReturnEvent = () => {
            container.addEventListener('click', addReturnMenuBtn);
        }

        const addMenuEvent = () => {
            const btn = document.querySelector('#main-menu-btn');
            btn.addEventListener('click', () => {
                const newTitleScreen = titleScreen();
                newTitleScreen.loadTitleScreen();
            });
            const replayBtn = document.querySelector('#replay-btn');
            replayBtn.addEventListener('click', () => {
                const newGameScreen = gameScreen(pvp);
                newGameScreen.loadGameScreen();
            });
        }

        // end of game over //

        // loading //
        const loadGameScreen = () => {
            setContainer();
            addPlayerIcons();
            loadGrid(1);
            addIconEvents();
            addStatus();
            addPlaceShipButton();
            addOpenPlaceShipEvent();
            addGridEvents(player1, board1);
            addAnnouncement();
            setAnnouncement('Player 1 \n Placing Phase')
            setTimeout(() => setAnnouncement('', true), 1000);

            setTurnStatus();
        };

        const loadGameOverScreen = () => {
            addGrids();
            setWinner();
            addReturnEvent();
        }
        // end of loading //
        //////////////////
        // remove below //
        /////////////////
        const placeAllShips = (board) => {
            board.placeShip(5, '[0,1]', 'horizontal');
            board.placeShip(4, '[0,2]', 'horizontal');
            board.placeShip(3, '[0,3]', 'horizontal');
            board.placeShip(3, '[0,4]', 'horizontal');
            board.placeShip(3, '[0,5]', 'horizontal');
            board.placeShip(3, '[0,6]', 'horizontal');
            board.placeShip(2, '[0,7]', 'horizontal');
            board.placeShip(2, '[0,8]', 'horizontal');
        };
        

        return { loadGameScreen, };
    };
    
    return {
        titleScreen,
        gameScreen, //remove
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userInterface);

// try to add a small grid to show what the computer is doing on vs computer
// add mines that explode on the your grid if you hit the enemies mines in a 3x3
// clean code

/***/ }),

/***/ "./src/img/arrow.png":
/*!***************************!*\
  !*** ./src/img/arrow.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9f321a8a1e93ca9ff96.png";

/***/ }),

/***/ "./src/img/bubbles-bg.jpg":
/*!********************************!*\
  !*** ./src/img/bubbles-bg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abbdd0c5d2aa6fa3f192.jpg";

/***/ }),

/***/ "./src/img/chevron-right-box.png":
/*!***************************************!*\
  !*** ./src/img/chevron-right-box.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "355515fc5b0ba86b8ecf.png";

/***/ }),

/***/ "./src/img/crosshairs-gps.png":
/*!************************************!*\
  !*** ./src/img/crosshairs-gps.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f5d9ebd2f760b84d4d2.png";

/***/ }),

/***/ "./src/img/explosion-ship.png":
/*!************************************!*\
  !*** ./src/img/explosion-ship.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8cba74321e8d8c040fa1.png";

/***/ }),

/***/ "./src/img/rotate-left.png":
/*!*********************************!*\
  !*** ./src/img/rotate-left.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "789e2a955853ccb84c31.png";

/***/ }),

/***/ "./src/img/whirlpool-miss-dark.png":
/*!*****************************************!*\
  !*** ./src/img/whirlpool-miss-dark.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee5e7063e3db670da5b1.png";

/***/ }),

/***/ "./src/img/whirlpool-miss-light.png":
/*!******************************************!*\
  !*** ./src/img/whirlpool-miss-light.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50a24e03607ed2eefbe5.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battleship */ "./src/battleship.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");




const load = () => {
    const intro = _ui__WEBPACK_IMPORTED_MODULE_2__["default"].titleScreen();
    intro.loadTitleScreen();
};

load();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsV0FBVyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sV0FBVyxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssd0JBQXdCLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsV0FBVyxNQUFNLFVBQVUs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELFFBQVE7QUFDcEUsNERBQTRELFFBQVE7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLGFBQWEsRUFBQztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDaUI7QUFDTjtBQUNqQztBQUNBO0FBQ0Esa0JBQWtCLHVEQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2J1YmJsZXMtYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvZXhwbG9zaW9uLXNoaXAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvd2hpcmxwb29sLW1pc3MtZGFyay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZy93aGlybHBvb2wtbWlzcy1saWdodC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9jaGV2cm9uLXJpZ2h0LWJveC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWdyaWQtZm9udC1jOiByZ2IoNTIsIDQxLCA1MSk7XFxyXFxuICAgIC0tYm94LWNvbG9yOiByZ2JhKDI0MCwgMjU1LCAyNTUsIDAuOSk7XFxyXFxuICAgIC0tZ3JpZDE6IGRhcmtibHVlO1xcclxcbiAgICAtLWdyaWQyOiByZ2IoMCwgMTQwLCAyNTUpOyBcXHJcXG4gICAgLS1saW5lLWNvbG9yOiByZ2IoOTAsIDExNiwgMjMyKTtcXHJcXG4gICAgLS1vdXRsaW5lLWNvbG9yOiByZ2IoNTMsIDc0LCA5NCk7IFxcclxcbiAgICAtLWJveC1vdXRsaW5lOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcblxcclxcbiAgICAtLWdyaWQtc2l6ZTogbWF4KDMwMHB4LCAzMHZ3KTtcXHJcXG4gICAgLS1ncmlkLXNpemUtd2lkZTogbWluKDQ1MHB4LCAzMHZ3KTtcXHJcXG4gICAgLS1ncmlkLXNpemUtbWluaTogMTUwcHg7XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JpZC1mb250LWMpO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFpbmVycyAqL1xcclxcblxcclxcbi50aXRsZS1zY3JlZW4sXFxyXFxuI3RpdGxlLXNjcmVlbi1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZS1zY3JlZW4tbWVudXtcXHJcXG4gICAgZ2FwOiA1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUtc2NyZWVuLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDVyZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCl7XFxyXFxuICAgICN0aXRsZS1zY3JlZW4tYnRucyB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLnRpdGxlLXNjcmVlbiBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4jd2lubmVyLWJveCBidXR0b24sXFxyXFxuI3dpbm5lci1ib3gsXFxyXFxuLnRpdGxlLXNjcmVlbiBidXR0b24sXFxyXFxuI3RpdGxlLXNjcmVlbi1tZW51LFxcclxcbiNwbGF5ZXItaWNvbi1jb250YWluZXIsXFxyXFxuI3N0YXR1cy1ib3gsXFxyXFxuI3NoaXAtbWVudSxcXHJcXG4jZ3JpZC0yLFxcclxcbiNncmlkIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggNXB4IHZhcigtLW91dGxpbmUtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKm5vdCBncmlkKi9cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLWljb24tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMC4zcmVtIGF1dG8gMXJlbSBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1ncmlkLXNpemUpICogMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQtMixcXHJcXG4jZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBjYWxjKHZhcigtLWdyaWQtc2l6ZSkgLyAxMCkpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgY2FsYyh2YXIoLS1ncmlkLXNpemUpIC8gMTApKTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1ncmlkLXNpemUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWdyaWQtc2l6ZSk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFweCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkMik7XFxyXFxufVxcclxcblxcclxcbiNncmlkLTIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWluaS1ncmlkIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIGNhbGModmFyKC0tZ3JpZC1zaXplLW1pbmkpIC8gMTApKSAhaW1wb3J0YW50O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgY2FsYyh2YXIoLS1ncmlkLXNpemUtbWluaSkgLyAxMCkpICFpbXBvcnRhbnQ7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1ncmlkLXNpemUtbWluaSkgIWltcG9ydGFudDtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1ncmlkLXNpemUtbWluaSkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI2Fubm91bmNlbWVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyNSU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0zNSU7XFxyXFxuICAgIG1hcmdpbi10b3A6IC01dmg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzdmg7XFxyXFxuICAgIGhlaWdodDogMTB2aDtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JpZC1mb250LWMpO1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vZmV0dDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHdoaXRlO1xcclxcbiAgICBvdXRsaW5lOiB2YXIoLS1ib3gtb3V0bGluZSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDU1NXB4KXtcXHJcXG4gICAgI2Fubm91bmNlbWVudCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1dmggIWltcG9ydGFudDtcXHJcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3N0YXR1cy1ib3gge1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDAgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHVzLWJveCB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1ncmlkLXNpemUpO1xcclxcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG4gICAgcGFkZGluZzogMi41cmVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNzaGlwLW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDc1cHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtaW4td2lkdGg6IDEwMDBweCl7XFxyXFxuICAgICNzaGlwLW1lbnUge1xcclxcbiAgICAgICAgcGFkZGluZzogMCAycmVtO1xcclxcbiAgICAgICAgZ2FwOiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuI3dpbm5lci1ib3gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IG1heCgyNTBweCwgNTB2dyk7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vZmV0dDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDs7XFxyXFxufVxcclxcblxcclxcbi8qIEVuZCBvZiBDb250YWluZXJzKi9cXHJcXG5cXHJcXG4vKiBUZXh0ICovXFxyXFxuI2dyaWQtdGl0bGUge1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLXNjcmVlbiBoMSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9mZXR0O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXR1cy1ib3ggaDIge1xcclxcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDIuNXJlbTtcXHJcXG59XFxyXFxuLypFbmQgb2YgVGV4dCovXFxyXFxuXFxyXFxuLypJbWFnZXMqL1xcclxcbiNzdGF0dXMtYm94IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tb3V0bGluZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNzdGF0dXMtYm94IGltZyB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1tZW51IGRpdi5ncmlkLXNoaXAge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW91dGxpbmUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMzcycHgpIHtcXHJcXG4gICAgI3NoaXAtbWVudSBkaXYuZ3JpZC1zaGlwe1xcclxcbiAgICAgICAgd2lkdGg6IDExcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDExcHg7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vdXRsaW5lLWNvbG9yKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1tZW51IGltZyB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjQycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5mbGlwIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKkVuZCBvZiBJbWFnZXMqL1xcclxcblxcclxcbi8qR3JpZCBDb21wb25lbnRzKi9cXHJcXG4ucDEsXFxyXFxuLnAyIHtcXHJcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAxIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JpZDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucDIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkMik7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXNoaXAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4ucDEuZ3JpZC1taXNzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTsvKnJhZGlhbC1ncmFkaWVudChyZ2IoMjU1LCAyMDIsIDIwMikgNDAlLCB2YXIoLS1ncmlkMSkpOyovXFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnAyLmdyaWQtbWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikvKnJhZGlhbC1ncmFkaWVudChyZ2IoMjU1LCAyMDIsIDIwMikgNDAlLCB2YXIoLS1ncmlkMikpKi87XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtdGFyZ2V0LFxcclxcbi5ncmlkLXVwLFxcclxcbi5ncmlkLXJpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWdyaWQtc2l6ZSkgLyAxMCk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXVwIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1yaWdodCB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXRhcmdldCB7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQgaW1nIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypFbmQgb2YgR3JpZCBDb21wb25lbnRzKi9cXHJcXG5cXHJcXG4vKiBCdXR0b25zICovXFxyXFxuI3dpbm5lci1ib3ggYnV0dG9uLFxcclxcbi50aXRsZS1zY3JlZW4gYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1pY29uLWNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLTEuaGlnaGxpZ2h0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaWQyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JpZDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItMi5oaWdobGlnaHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JpZDEpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkMik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtbWVudSBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1pbi13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgI3NoaXAtbWVudSBidXR0b246bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICB9IFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jcGxheWVyLWljb24tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IGJsYWNrO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItYm94IGJ1dHRvbjpob3ZlcixcXHJcXG4jc2hpcC1tZW51IGJ1dHRvbjpob3ZlcixcXHJcXG4udGl0bGUtc2NyZWVuIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1tZW51IGJ1dHRvbjpmaXJzdC1jaGlsZDpob3Zlci5vcGVuLFxcclxcbiNzaGlwLW1lbnUgYnV0dG9uOmxhc3QtY2hpbGQ6aG92ZXIuZmxpcHtcXHJcXG4gICAgLypyb3RhdGUgJiYgcGxhY2UgYnRuIG9ubHkqL1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLjA1LCAxLjA1KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCAqIHtcXHJcXG4gICAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxhY2Utc2hpcCB7XFxyXFxuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAycmVtIDAgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYWNlLXNoaXAub3BlbiB7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxufVxcclxcbi8qIEVuZCBvZiBCdXR0b25zKi9cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLGlEQUFpRDs7SUFFakQsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyx1QkFBdUI7O0lBRXZCLHlDQUF5QztJQUN6Qyx5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJ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d0M7QUFDNUM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtREFBOEM7SUFDOUMsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtBQUM3QjtBQUNBLGtCQUFrQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tZ3JpZC1mb250LWM6IHJnYig1MiwgNDEsIDUxKTtcXHJcXG4gICAgLS1ib3gtY29sb3I6IHJnYmEoMjQwLCAyNTUsIDI1NSwgMC45KTtcXHJcXG4gICAgLS1ncmlkMTogZGFya2JsdWU7XFxyXFxuICAgIC0tZ3JpZDI6IHJnYigwLCAxNDAsIDI1NSk7IFxcclxcbiAgICAtLWxpbmUtY29sb3I6IHJnYig5MCwgMTE2LCAyMzIpO1xcclxcbiAgICAtLW91dGxpbmUtY29sb3I6IHJnYig1MywgNzQsIDk0KTsgXFxyXFxuICAgIC0tYm94LW91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuXFxyXFxuICAgIC0tZ3JpZC1zaXplOiBtYXgoMzAwcHgsIDMwdncpO1xcclxcbiAgICAtLWdyaWQtc2l6ZS13aWRlOiBtaW4oNDUwcHgsIDMwdncpO1xcclxcbiAgICAtLWdyaWQtc2l6ZS1taW5pOiAxNTBweDtcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmlkLWZvbnQtYyk7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWluZXJzICovXFxyXFxuXFxyXFxuLnRpdGxlLXNjcmVlbixcXHJcXG4jdGl0bGUtc2NyZWVuLW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlLXNjcmVlbi1tZW51e1xcclxcbiAgICBnYXA6IDVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZS1zY3JlZW4tYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KXtcXHJcXG4gICAgI3RpdGxlLXNjcmVlbi1idG5zIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAudGl0bGUtc2NyZWVuIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItYm94IGJ1dHRvbixcXHJcXG4jd2lubmVyLWJveCxcXHJcXG4udGl0bGUtc2NyZWVuIGJ1dHRvbixcXHJcXG4jdGl0bGUtc2NyZWVuLW1lbnUsXFxyXFxuI3BsYXllci1pY29uLWNvbnRhaW5lcixcXHJcXG4jc3RhdHVzLWJveCxcXHJcXG4jc2hpcC1tZW51LFxcclxcbiNncmlkLTIsXFxyXFxuI2dyaWQge1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCA1cHggdmFyKC0tb3V0bGluZS1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qbm90IGdyaWQqL1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvYnViYmxlcy1iZy5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1pY29uLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAuM3JlbSBhdXRvIDFyZW0gYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAqIDEuMSk7XFxyXFxufVxcclxcblxcclxcbiNncmlkLTIsXFxyXFxuI2dyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgY2FsYyh2YXIoLS1ncmlkLXNpemUpIC8gMTApKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKSk7XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICB3aWR0aDogdmFyKC0tZ3JpZC1zaXplKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1ncmlkLXNpemUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcHggIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JpZDIpO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZC0yIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbmktZ3JpZCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBjYWxjKHZhcigtLWdyaWQtc2l6ZS1taW5pKSAvIDEwKSkgIWltcG9ydGFudDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIGNhbGModmFyKC0tZ3JpZC1zaXplLW1pbmkpIC8gMTApKSAhaW1wb3J0YW50O1xcclxcbiAgICB3aWR0aDogdmFyKC0tZ3JpZC1zaXplLW1pbmkpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tZ3JpZC1zaXplLW1pbmkpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNhbm5vdW5jZW1lbnQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMzUlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNXZoO1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3ZoO1xcclxcbiAgICBoZWlnaHQ6IDEwdmg7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaWQtZm9udC1jKTtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub2ZldHQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCB3aGl0ZTtcXHJcXG4gICAgb3V0bGluZTogdmFyKC0tYm94LW91dGxpbmUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA1NTVweCl7XFxyXFxuICAgICNhbm5vdW5jZW1lbnQge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNXZoICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNzdGF0dXMtYm94IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuI3N0YXR1cy1ib3gge1xcclxcbiAgICB3aWR0aDogdmFyKC0tZ3JpZC1zaXplKTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDIuNXJlbSAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1tZW51IHtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWluLXdpZHRoOiAxMDAwcHgpe1xcclxcbiAgICAjc2hpcC1tZW51IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG4gICAgICAgIGdhcDogMi41cmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItYm94IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiBtYXgoMjUwcHgsIDUwdncpO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub2ZldHQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbmQgb2YgQ29udGFpbmVycyovXFxyXFxuXFxyXFxuLyogVGV4dCAqL1xcclxcbiNncmlkLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1zY3JlZW4gaDEge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDYwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vZmV0dDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzdGF0dXMtYm94IGgyIHtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbSAyLjVyZW07XFxyXFxufVxcclxcbi8qRW5kIG9mIFRleHQqL1xcclxcblxcclxcbi8qSW1hZ2VzKi9cXHJcXG4jc3RhdHVzLWJveCBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW91dGxpbmUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHVzLWJveCBpbWcge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtbWVudSBkaXYuZ3JpZC1zaGlwIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1vdXRsaW5lLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM3MnB4KSB7XFxyXFxuICAgICNzaGlwLW1lbnUgZGl2LmdyaWQtc2hpcHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb3V0bGluZS1jb2xvcik7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtbWVudSBpbWcge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMC40MnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxpcCB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLypFbmQgb2YgSW1hZ2VzKi9cXHJcXG5cXHJcXG4vKkdyaWQgQ29tcG9uZW50cyovXFxyXFxuLnAxLFxcclxcbi5wMiB7XFxyXFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wMSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JpZDIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1zaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWhpdCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvZXhwbG9zaW9uLXNoaXAucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnAxLmdyaWQtbWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvd2hpcmxwb29sLW1pc3MtZGFyay5wbmcnKTsvKnJhZGlhbC1ncmFkaWVudChyZ2IoMjU1LCAyMDIsIDIwMikgNDAlLCB2YXIoLS1ncmlkMSkpOyovXFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnAyLmdyaWQtbWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvd2hpcmxwb29sLW1pc3MtbGlnaHQucG5nJykvKnJhZGlhbC1ncmFkaWVudChyZ2IoMjU1LCAyMDIsIDIwMikgNDAlLCB2YXIoLS1ncmlkMikpKi87XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtdGFyZ2V0LFxcclxcbi5ncmlkLXVwLFxcclxcbi5ncmlkLXJpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWdyaWQtc2l6ZSkgLyAxMCk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXVwIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1yaWdodCB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXRhcmdldCB7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQgaW1nIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypFbmQgb2YgR3JpZCBDb21wb25lbnRzKi9cXHJcXG5cXHJcXG4vKiBCdXR0b25zICovXFxyXFxuI3dpbm5lci1ib3ggYnV0dG9uLFxcclxcbi50aXRsZS1zY3JlZW4gYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1pY29uLWNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLTEuaGlnaGxpZ2h0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaWQyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JpZDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItMi5oaWdobGlnaHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JpZDEpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkMik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtbWVudSBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1pbi13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgI3NoaXAtbWVudSBidXR0b246bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICB9IFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jcGxheWVyLWljb24tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IGJsYWNrO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItYm94IGJ1dHRvbjpob3ZlcixcXHJcXG4jc2hpcC1tZW51IGJ1dHRvbjpob3ZlcixcXHJcXG4udGl0bGUtc2NyZWVuIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1tZW51IGJ1dHRvbjpmaXJzdC1jaGlsZDpob3Zlci5vcGVuLFxcclxcbiNzaGlwLW1lbnUgYnV0dG9uOmxhc3QtY2hpbGQ6aG92ZXIuZmxpcHtcXHJcXG4gICAgLypyb3RhdGUgJiYgcGxhY2UgYnRuIG9ubHkqL1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLjA1LCAxLjA1KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCAqIHtcXHJcXG4gICAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxhY2Utc2hpcCB7XFxyXFxuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1nL2NoZXZyb24tcmlnaHQtYm94LnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAycmVtIDAgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYWNlLXNoaXAub3BlbiB7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxufVxcclxcbi8qIEVuZCBvZiBCdXR0b25zKi9cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYXR0bGVTaGlwcyA9ICgoKSA9PiB7XHJcbiAgICAvL0ZhY3Rvcmllc1xyXG4gICAgY29uc3Qgc2hpcCA9IChjb29yZHMsIGxlbmd0aCwgdGltZXNIaXQsIHN1bmspID0+IHtcclxuICAgICAgICBjb25zdCBoaXQgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgIHRhcmdldC50aW1lc0hpdCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNTdW5rID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LnRpbWVzSGl0ID49IHRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5zdW5rID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7IGNvb3JkcywgbGVuZ3RoLCB0aW1lc0hpdCwgc3VuaywgaGl0ICxpc1N1bmssIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2FtZUJvYXJkID0gKGdyaWQsIGlzQWkgPSBmYWxzZSkgPT4ge1xyXG4gICAgICAgIC8vYm9hcmQgb2JqZWN0c1xyXG4gICAgICAgIGNvbnN0IHNoaXBzID0gW107XHJcbiAgICAgICAgY29uc3QgdW5wbGFjZWRTaGlwcyA9IFtcclxuICAgICAgICAgICAge25hbWU6ICdjYXJyaWVyJywgbGVuZ3RoOiA1LCBudW1iZXI6IDF9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ2JhdHRsZXNoaXAnLCBsZW5ndGg6IDQsIG51bWJlcjogMX0sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnc3VibWFyaW5lJywgbGVuZ3RoOiAzLCBudW1iZXI6IDR9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3BhdHJvbCBib2F0JywgbGVuZ3RoOiAyLCBudW1iZXI6IDN9XHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBhdHRhY2tMb2cgPSBbXTtcclxuICAgICAgICBjb25zdCBwbGFjZVBoYXNlID0gW3RydWVdO1xyXG5cclxuICAgICAgICBjb25zdCBnZW5lcmF0ZUdyaWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRNYXAgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPD0gOTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICBncmlkTWFwLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlOiBgWyR7aX0sJHtqfV1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwSGVyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpdEhlcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBncmlkTWFwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ3JpZCA9IGdlbmVyYXRlR3JpZCgpO1xyXG5cclxuICAgICAgICAvL2JvYXJkIG1hbmlwdWxhdG9yc1xyXG4gICAgICAgIGNvbnN0IHNldEJvYXJkID0gKGNvb3JkcywgcHJvcCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcG90cyA9IGdyaWQuZmlsdGVyKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb29yZHMgPT09IGNvb3JkLmNvb3JkaW5hdGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKHByb3AgPT09ICdzaGlwSGVyZScpIHJldHVybiBzcG90c1swXS5zaGlwSGVyZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHNwb3RzWzBdLmhpdEhlcmUgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZVNoaXBmcm9tU3RvcmFnZSA9IChsZW5ndGgpID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoKGxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHVucGxhY2VkU2hpcHNbMF0ubnVtYmVyLS1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogdW5wbGFjZWRTaGlwc1sxXS5udW1iZXItLVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogdW5wbGFjZWRTaGlwc1syXS5udW1iZXItLVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiB1bnBsYWNlZFNoaXBzWzNdLm51bWJlci0tXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGdyaWQgaXRlcmF0b3JzIC8vXHJcbiAgICAgICAgY29uc3QgY2hlY2tHcmlkRm9yU2hpcCA9IChjb29yZHMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3BvdHMgPSBncmlkLmZpbHRlcihjb29yZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjb29yZC5zaGlwSGVyZSAmJiBjb29yZC5jb29yZGluYXRlID09PSBjb29yZHMgKSByZXR1cm4gY29vcmQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZihzcG90cy5sZW5ndGggPCAxIHx8ICFzcG90cykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3BvdHNbMF0uc2hpcEhlcmU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hlY2tHcmlkRm9ySGl0ID0gKGNvb3JkcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcG90cyA9IGdyaWQuZmlsdGVyKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNvb3JkLmhpdEhlcmUgJiYgY29vcmQuY29vcmRpbmF0ZSA9PT0gY29vcmRzKSByZXR1cm4gY29vcmQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZihzcG90cy5sZW5ndGggPCAxIHx8ICFzcG90cykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3BvdHNbMF0uaGl0SGVyZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjaGVja1N0b3JhZ2VGb3JTaGlwID0gKGxlbmd0aCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVTaGlwID0gW11cclxuICAgICAgICAgICAgdW5wbGFjZWRTaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYobGVuZ3RoID09PSBzaGlwLmxlbmd0aCAmJiBzaGlwLm51bWJlciA+IDApIGF2YWlsYWJsZVNoaXAucHVzaChzaGlwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKGF2YWlsYWJsZVNoaXAubGVuZ3RoID4gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrTnVtT2ZTdW5rU2hpcHMgPSAoc3Vua1NoaXBzID0gW10pID0+IHtcclxuICAgICAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHNoaXAuc3Vuaykgc3Vua1NoaXBzLnB1c2goc2hpcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gc3Vua1NoaXBzLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldERpcmVjdGlvbnMgPSAobGVuZ3RoLCB4LCB5LCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IFtjaGVja0gsIGNoZWNrVl0gPSBbZmFsc2UsIGZhbHNlXVxyXG4gICAgICAgICAgICBjb25zdCBuZXdDb29yZHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3Jpem9udGFsID0gYFske3graX0sJHt5fV1gO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tIKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGNoZWNrSCA9IGNoZWNrR3JpZEZvclNoaXAoaG9yaXpvbnRhbClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsID0gYFske3h9LCR7eStpfV1gO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGNoZWNrViA9IGNoZWNrR3JpZEZvclNoaXAodmVydGljYWwpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaG9yaXpvbnRhbCA9IGBbJHt4K2l9LCR7eX1dYDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsID0gYFske3h9LCR7eStpfV1gO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2hlY2tIKSByZXR1cm4gJ2Vycm9yJztcclxuICAgICAgICAgICAgICAgICAgICBzZXRCb2FyZChob3Jpem9udGFsLCAnc2hpcEhlcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDb29yZHMucHVzaChob3Jpem9udGFsKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjaGVja1YpIHJldHVybiAnZXJyb3InO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEJvYXJkKHZlcnRpY2FsLCAnc2hpcEhlcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDb29yZHMucHVzaCh2ZXJ0aWNhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld0Nvb3JkcztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBnYW1lIGZ1bmN0aW9ucyAvL1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZVBoYXNlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsU2hpcHNJblN0b3JhZ2UgPSBbXHJcbiAgICAgICAgICAgICAgICBjaGVja1N0b3JhZ2VGb3JTaGlwKDUpLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tTdG9yYWdlRm9yU2hpcCg0KSxcclxuICAgICAgICAgICAgICAgIGNoZWNrU3RvcmFnZUZvclNoaXAoMyksXHJcbiAgICAgICAgICAgICAgICBjaGVja1N0b3JhZ2VGb3JTaGlwKDIpXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBpZih0b3RhbFNoaXBzSW5TdG9yYWdlLmV2ZXJ5KHNoaXAgPT4gIXNoaXApKSBlbmQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZihlbmQpeyAgICBcclxuICAgICAgICAgICAgICAgIHBsYWNlUGhhc2VbMF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZW5kIG9mIHBsYWNlIHBoYXNlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJ2NvbnRpbnVlIHBsYWNpbmcnO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYWNlU2hpcCA9IChsZW5ndGgsIGNvb3JkcywgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFjaGVja1N0b3JhZ2VGb3JTaGlwKGxlbmd0aCkgfHwgIXBsYWNlUGhhc2VbMF0pIHJldHVybjsgLy9UQkFcclxuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gW051bWJlcihjb29yZHNbMV0pLCBOdW1iZXIoY29vcmRzWzNdKV07XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbiA9XHJcbiAgICAgICAgICAgICh4ICsgbGVuZ3RoID49IDExICYmIGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKVxyXG4gICAgICAgICAgICB8fCBcclxuICAgICAgICAgICAgKHkgKyBsZW5ndGggPj0gMTEgJiYgZGlyZWN0aW9uID09PSAndmVydGljYWwnKTtcclxuICAgICAgICAgICAgaWYoY29uKSByZXR1cm4gJ2Vycm9yJztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0Nvb3JkcyA9IGdldERpcmVjdGlvbnMobGVuZ3RoLCB4LCB5LCBkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBpZiAobmV3Q29vcmRzID09PSAnZXJyb3InKSByZXR1cm4gJ2Vycm9yJztcclxuICAgICAgICAgICAgY29uc3QgbmV3U2hpcCA9IHNoaXAobmV3Q29vcmRzLCBsZW5ndGgsIDAsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHJlbW92ZVNoaXBmcm9tU3RvcmFnZShsZW5ndGgpO1xyXG4gICAgICAgICAgICBjaGFuZ2VQaGFzZSgpO1xyXG4gICAgICAgICAgICBzaGlwcy5wdXNoKG5ld1NoaXApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3U2hpcDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhaVBsYWNlU2hpcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNoaXBEaXJlY3Rpb247XHJcbiAgICAgICAgICAgIGNvbnN0IFtjaGVjazUsIGNoZWNrNCwgY2hlY2szLCBjaGVjazJdID0gW1xyXG4gICAgICAgICAgICAgICAgY2hlY2tTdG9yYWdlRm9yU2hpcCg1KSxcclxuICAgICAgICAgICAgICAgIGNoZWNrU3RvcmFnZUZvclNoaXAoNCksXHJcbiAgICAgICAgICAgICAgICBjaGVja1N0b3JhZ2VGb3JTaGlwKDMpLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tTdG9yYWdlRm9yU2hpcCgyKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIGNvbnN0IFt4LHksIGRpckRlY10gPSBbXHJcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5LjkpLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOS45KSxcclxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgaWYoZGlyRGVjID4gMC40OSkgc2hpcERpcmVjdGlvbiA9ICd2ZXJ0aWNhbCdcclxuICAgICAgICAgICAgZWxzZSBzaGlwRGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xyXG4gICAgICAgICAgICBpZihjaGVjazUpe1xyXG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKDUsIGBbJHt4fSwke3l9XWAsIHNoaXBEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjaGVjazQpe1xyXG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKDQsIGBbJHt4fSwke3l9XWAsIHNoaXBEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjaGVjazMpe1xyXG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKDMsIGBbJHt4fSwke3l9XWAsIHNoaXBEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjaGVjazIpe1xyXG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKDIsIGBbJHt4fSwke3l9XWAsIHNoaXBEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNoZWNrNSB8fCBjaGVjazQgfHwgY2hlY2szIHx8IGNoZWNrMil7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWlQbGFjZVNoaXAoKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdwbGFjZWQgYWxsIHNoaXBzJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGxvc2UoKSkgcmV0dXJuICdnYW1lIG92ZXInO1xyXG4gICAgICAgICAgICBpZihjaGVja0dyaWRGb3JIaXQoY29vcmRzKSB8fCBwbGFjZVBoYXNlWzBdKSByZXR1cm47XHJcbiAgICAgICAgICAgIHNldEJvYXJkKGNvb3JkcywgJ2hpdEhlcmUnKTsgICAgICBcclxuICAgICAgICAgICAgYXR0YWNrTG9nLnB1c2goY29vcmRzKTtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0dyaWRGb3JTaGlwKGNvb3JkcykpIHJldHVybiAnbWlzcyc7XHJcbiAgICAgICAgICAgIGxldCB0aGlzU2hpcDtcclxuICAgICAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmNvb3Jkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29vcmRzID09PSBzaGlwLmNvb3Jkc1tpXSkgdGhpc1NoaXAgPSBzaGlwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpc1NoaXAuaGl0KHRoaXNTaGlwKTtcclxuICAgICAgICAgICAgdGhpc1NoaXAuaXNTdW5rKHRoaXNTaGlwKTtcclxuICAgICAgICAgICAgcmV0dXJuICdoaXQnO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGxvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmlzb24gPSBbXTtcclxuICAgICAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHNoaXAuc3VuaykgY29tcGFyaXNvbi5wdXNoKHNoaXApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmlzb24ubGVuZ3RoID49IHNoaXBzLmxlbmd0aDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpc0FpLCBcclxuICAgICAgICAgICAgZ3JpZCxcclxuICAgICAgICAgICAgcGxhY2VTaGlwLFxyXG4gICAgICAgICAgICBhaVBsYWNlU2hpcCxcclxuICAgICAgICAgICAgc2hpcHMsXHJcbiAgICAgICAgICAgIHVucGxhY2VkU2hpcHMsXHJcbiAgICAgICAgICAgIGF0dGFja0xvZyxcclxuICAgICAgICAgICAgY2hlY2tHcmlkRm9yU2hpcCxcclxuICAgICAgICAgICAgY2hlY2tHcmlkRm9ySGl0LFxyXG4gICAgICAgICAgICBjaGVja051bU9mU3Vua1NoaXBzLFxyXG4gICAgICAgICAgICByZWNlaXZlQXR0YWNrLFxyXG4gICAgICAgICAgICAvL3JlbW92ZSBiZWxvd1xyXG4gICAgICAgICAgICBwbGFjZVBoYXNlLFxyXG4gICAgICAgICAgICBsb3NlLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBsYXllciA9IChwbGF5ZXJOdW1iZXIsIGlzQWkgPSBmYWxzZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VHVybiA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBsYXllck51bWJlciA9PT0gMSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgaXNUdXJuID0gZmlyc3RUdXJuKCk7IFxyXG5cclxuICAgICAgICBjb25zdCB0YWtlVHVybiA9IChjb29yZHMsIGJvYXJkLCB1c2VyLCB0YXJnZXQsIHRhcmdldEJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCF1c2VyLmlzVHVybiB8fCBib2FyZC5jaGVja0dyaWRGb3JIaXQoY29vcmRzKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xyXG4gICAgICAgICAgICBpZihyZXN1bHRzID09PSAnZ2FtZSBvdmVyJykgcmV0dXJuICdnYW1lIG92ZXInO1xyXG4gICAgICAgICAgICB1c2VyLmlzVHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0YXJnZXQuaXNUdXJuID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYodGFyZ2V0LmlzQWkpIGFpVGFrZXNUdXJuKHRhcmdldEJvYXJkLCB0YXJnZXQsIHVzZXIsIGJvYXJkKTtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdHN9IGF0ICR7Y29vcmRzfWA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWlUYWtlc1R1cm4gPSAoYm9hcmQsIHVzZXIsIHRhcmdldCwgdGFyZ2V0Qm9hcmQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gYWlDaG9vc2VDb29yZHMoYm9hcmQpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gdGFrZVR1cm4oY29vcmRzLCBib2FyZCwgdXNlciwgdGFyZ2V0LCB0YXJnZXRCb2FyZCk7XHJcbiAgICAgICAgICAgIGlmKCFyZXN1bHRzKSByZXR1cm4gYWlUYWtlc1R1cm4oYm9hcmQsdXNlcix0YXJnZXQsIHRhcmdldEJvYXJkKVxyXG4gICAgICAgICAgICBlbHNlIHJldHVybiByZXN1bHRzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFpQ2hvb3NlQ29vcmRzID0gKGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrTGFzdEhpdCA9IGFpQ2hvb3NlTGFzdEhpdChib2FyZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGFpQ2hvb3NlRGlyZWN0aW9uKGJvYXJkLCBjaGVja0xhc3RIaXQpO1xyXG5cclxuICAgICAgICAgICAgaWYoY2hlY2tMYXN0SGl0ICYmIGJvYXJkLmNoZWNrR3JpZEZvclNoaXAoY2hlY2tMYXN0SGl0KSAmJiBjb29yZHMpIHJldHVybiBjb29yZHM7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkuOSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOS45KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgWyR7eH0sJHt5fV1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWlDaG9vc2VMYXN0SGl0ID0gKGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpdHMgPSBbXTtcclxuICAgICAgICAgICAgYm9hcmQuYXR0YWNrTG9nLmZvckVhY2goY29vcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoYm9hcmQuY2hlY2tHcmlkRm9yU2hpcChjb29yZCkpIGhpdHMudW5zaGlmdChjb29yZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZihoaXRzLmxlbmd0aCA8IDEpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkSGl0cyA9IFtdO1xyXG4gICAgICAgICAgICBoaXRzLmZvckVhY2goaGl0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGFpQ2hvb3NlRGlyZWN0aW9uKGJvYXJkLCBoaXQpKSB2YWxpZEhpdHMudW5zaGlmdChoaXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYodmFsaWRIaXRzLmxlbmd0aCA8IDEpIHJldHVybjtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkSGl0c1swXTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhaUNob29zZURpcmVjdGlvbiA9IChib2FyZCwgbGFzdEhpdCkgPT4ge1xyXG4gICAgICAgICAgICBpZighbGFzdEhpdCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgZGlyOyBcclxuICAgICAgICAgICAgY29uc3QgdXAgPSBOdW1iZXIobGFzdEhpdFszXSkgKyAxO1xyXG4gICAgICAgICAgICBjb25zdCBkb3duID0gTnVtYmVyKGxhc3RIaXRbM10pIC0gMTtcclxuICAgICAgICAgICAgY29uc3QgbGVmdCA9IE51bWJlcihsYXN0SGl0WzFdKSAtIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gTnVtYmVyKGxhc3RIaXRbMV0pICsgMTtcclxuICAgICAgICAgICAgY29uc3QgW2NoZWNrVXAsIGNoZWNrRG93biwgY2hlY2tMZWZ0LCBjaGVja1JpZ2h0XSA9IFtcclxuICAgICAgICAgICAgICAgIGJvYXJkLmNoZWNrR3JpZEZvckhpdChgWyR7bGFzdEhpdFsxXX0sJHt1cH1dYCksXHJcbiAgICAgICAgICAgICAgICBib2FyZC5jaGVja0dyaWRGb3JIaXQoYFske2xhc3RIaXRbMV19LCR7ZG93bn1dYCksXHJcbiAgICAgICAgICAgICAgICBib2FyZC5jaGVja0dyaWRGb3JIaXQoYFske2xlZnR9LCR7bGFzdEhpdFszXX1dYCksXHJcbiAgICAgICAgICAgICAgICBib2FyZC5jaGVja0dyaWRGb3JIaXQoYFske3JpZ2h0fSwke2xhc3RIaXRbM119XWApLFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgaWYoIWNoZWNrUmlnaHQpe1xyXG4gICAgICAgICAgICAgICAgZGlyID0gYFske3JpZ2h0fSwke2xhc3RIaXRbM119XWA7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKCFjaGVja1VwKXtcclxuICAgICAgICAgICAgICAgIGRpciA9IGBbJHtsYXN0SGl0WzFdfSwke3VwfV1gO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZighY2hlY2tMZWZ0KXtcclxuICAgICAgICAgICAgICAgIGRpciA9IGBbJHtsZWZ0fSwke2xhc3RIaXRbM119XWA7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKCFjaGVja0Rvd24pe1xyXG4gICAgICAgICAgICAgICAgZGlyID0gYFske2xhc3RIaXRbMV19LCR7ZG93bn1dYDtcclxuICAgICAgICAgICAgfWVsc2UgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIXZhbGlkYXRlQ29vcmRzKGRpcikpIHJldHVybjtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gZGlyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlQ29vcmRzID0gKGRpcikgPT4ge1xyXG4gICAgICAgICAgICAvLyB4IC8geSBpcyBpbiAwIC0gOSByYW5nZSBpZiBuZWdhdGl2ZSBvciAxMCBsZW5ndGggd2lsbCBiZSBoaWdoZXIgLy9cclxuICAgICAgICAgICAgaWYoZGlyLmxlbmd0aCAhPT0gNSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgcGxheWVyTnVtYmVyLCB0YWtlVHVybiwgYWlUYWtlc1R1cm4sIGlzVHVybiwgaXNBaSwgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNoaXAsXHJcbiAgICAgICAgZ2FtZUJvYXJkLFxyXG4gICAgICAgIHBsYXllcixcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXR0bGVTaGlwczsiLCJpbXBvcnQgYmF0dGxlU2hpcHMgZnJvbSBcIi4vYmF0dGxlc2hpcFwiO1xyXG5pbXBvcnQgYXJyb3cgZnJvbSAnLi9pbWcvYXJyb3cucG5nJztcclxuaW1wb3J0IGNyb3NzaGFpciBmcm9tICcuL2ltZy9jcm9zc2hhaXJzLWdwcy5wbmcnO1xyXG5pbXBvcnQgcm90YXRlSWNvbiBmcm9tICcuL2ltZy9yb3RhdGUtbGVmdC5wbmcnO1xyXG5cclxuY29uc3QgdXNlckludGVyZmFjZSA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZVNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2V0Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZS1zY3JlZW4nKTtcclxuICAgICAgICAgICAgd2hpbGUoY29udGFpbmVyLmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkTWVudUNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlLXNjcmVlbi1tZW51Jyk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkVGl0bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtc2NyZWVuLW1lbnUnKTtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdCYXR0bGVTaGlwcyc7XHJcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkQnV0dG9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1zY3JlZW4tbWVudScpO1xyXG4gICAgICAgICAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUtc2NyZWVuLWJ0bnMnKTtcclxuICAgICAgICAgICAgY29uc3QgcHZwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHB2cEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3B2cC1idG4nKTtcclxuICAgICAgICAgICAgY29uc3QgcHZtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHB2bUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3B2bS1idG4nKTtcclxuICAgICAgICAgICAgcHZwQnRuLnRleHRDb250ZW50ID0gJ1ZzIFBsYXllcic7XHJcbiAgICAgICAgICAgIHB2bUJ0bi50ZXh0Q29udGVudCA9ICdWcyBDb21wdXRlcic7XHJcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZChwdnBCdG4sIHB2bUJ0bik7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwdnAgPSBnYW1lU2NyZWVuKHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCBwdm0gPSBnYW1lU2NyZWVuKGZhbHNlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B2cC1idG4nKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHZwLmxvYWRHYW1lU2NyZWVuKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B2bS1idG4nKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHZtLmxvYWRHYW1lU2NyZWVuKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBsb2FkVGl0bGVTY3JlZW4gPSAoKSA9PiB7IFxyXG4gICAgICAgICAgICBzZXRDb250YWluZXIoKTtcclxuICAgICAgICAgICAgYWRkTWVudUNvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICBhZGRUaXRsZSgpO1xyXG4gICAgICAgICAgICBhZGRCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGFkZEV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgbG9hZFRpdGxlU2NyZWVuLCB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnYW1lU2NyZWVuID0gKHB2cCA9IGZhbHNlKSA9PiB7ICAgICAgICBcclxuICAgICAgICBjb25zdCBzZXRQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwdnBcclxuICAgICAgICAgICAgICAgID8gYmF0dGxlU2hpcHMucGxheWVyKDIsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgOiBiYXR0bGVTaGlwcy5wbGF5ZXIoMiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldEJvYXJkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcHZwXHJcbiAgICAgICAgICAgICAgICA/IGJhdHRsZVNoaXBzLmdhbWVCb2FyZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIDogYmF0dGxlU2hpcHMuZ2FtZUJvYXJkKG51bGwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVyMSA9IGJhdHRsZVNoaXBzLnBsYXllcigxLCBmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyMiA9IHNldFBsYXllcigpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkMSA9IGJhdHRsZVNoaXBzLmdhbWVCb2FyZCgpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkMiA9IHNldEJvYXJkKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBwb2ludGVyID0ge1xyXG4gICAgICAgICAgICBwbGF5ZXI6IDEsXHJcbiAgICAgICAgICAgIGlzUGxhY2luZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGxlbmd0aDogMCxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgICAgIHBoYXNlOiAncGxhY2UnIC8vIG9yIGF0dGFja1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHNldENvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdnYW1lLXNjcmVlbicpO1xyXG4gICAgICAgICAgICB3aGlsZShjb250YWluZXIuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gZ2FtZSBjb250cm9sbGVyIC8vXHJcbiAgICAgICAgY29uc3QgY2hhbmdlV2hvUGxhY2luZyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2hpcHMgPSBbXVxyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBsYXllciA9PT0gMSl7ICAgIFxyXG4gICAgICAgICAgICAgICAgYm9hcmQxLnVucGxhY2VkU2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXBzLnB1c2goc2hpcC5udW1iZXIpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY29uID0gc2hpcHMucmVkdWNlKChjdXJyZW50LCB0b3RhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsICs9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgICAgaWYoY29uID09PSAwICYmIHNoaXBzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci5wbGF5ZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgc2V0QW5ub3VuY2VtZW50KCdQbGF5ZXIgMiBcXG4gUGxhY2luZyBQaGFzZScpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjaGFuZ2VHcmlkKHBsYXllcjIsIGJvYXJkMiwgdHJ1ZSksIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwb2ludGVyLnBoYXNlID0gJ3BsYWNlJywgMTAwMSk7XHJcbiAgICAgICAgICAgICAgICBzZXRHcmlkVGl0bGUocGxheWVyMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZW5kUGxhY2luZygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZFBsYWNpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBzID0gW11cclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IDIpe1xyXG4gICAgICAgICAgICAgICAgYm9hcmQyLnVucGxhY2VkU2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXBzLnB1c2goc2hpcC5udW1iZXIpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY29uID0gc2hpcHMucmVkdWNlKChjdXJyZW50LCB0b3RhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsICs9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoY29uID09PSAwICYmIHNoaXBzLmxlbmd0aCA+IDApeyAgICAgXHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLnBsYXllciA9IDE7XHJcbiAgICAgICAgICAgICAgICBzZXRBbm5vdW5jZW1lbnQoJ0F0dGFjayBQaGFzZScpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnRucygpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRBbm5vdW5jZW1lbnQoJ1BsYXllciAxIFR1cm4nKSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLnBoYXNlID0gJ2F0dGFjayc7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQnRucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFR1cm5TdGF0dXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VHcmlkKHBsYXllcjIsIGJvYXJkMiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUGxhY2VTaGlwQnV0dG9ucygpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7ICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZW5kVHVybiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYocGxheWVyMS5pc1R1cm4pe1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlR3JpZChwbGF5ZXIyLCBib2FyZDIpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAocGxheWVyMi5pc1R1cm4pe1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlR3JpZChwbGF5ZXIxLCBib2FyZDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFR1cm5TdGF0dXMoKTtcclxuICAgICAgICAgICAgc2V0QW5ub3VuY2VtZW50KCcnLCB0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0b2dnbGVCdG5zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoYnRuLmRpc2FibGVkKSBidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgYnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVuZCBvZiBnYW1lIGNvbnRyb2xsZXIgLy9cclxuXHJcbiAgICAgICAgLy8gcGxheWVyIHN0YXR1cyAvL1xyXG4gICAgICAgIGNvbnN0IGFkZFBsYXllckljb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJJY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHBsYXllckljb25Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXItaWNvbi1jb250YWluZXInKVxyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIxQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcjJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgcGxheWVyMUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllci0xJyk7XHJcbiAgICAgICAgICAgIHBsYXllcjJCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXItMicpO1xyXG4gICAgICAgICAgICBwbGF5ZXIxQnRuLnRleHRDb250ZW50ID0gJ1BsYXllciAxJztcclxuICAgICAgICAgICAgcGxheWVyMkJ0bi50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMic7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJJY29uQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdncmlkLXRpdGxlJyk7XHJcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYFBsYXllcltdYDtcclxuXHJcbiAgICAgICAgICAgIHBsYXllckljb25Db250YWluZXIuYXBwZW5kKHBsYXllcjFCdG4sIHRpdGxlLCBwbGF5ZXIyQnRuKTtcclxuXHJcbiAgICAgICAgICAgIHNldEdyaWRUaXRsZShwbGF5ZXIxKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1c0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBzdGF0dXNCb3guc2V0QXR0cmlidXRlKCdpZCcsICdzdGF0dXMtYm94Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1czEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpOyAvLyBwaGFzZSAvIHR1cm5cclxuICAgICAgICAgICAgc3RhdHVzMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXR1cy0xJyk7XHJcbiAgICAgICAgICAgIHN0YXR1czEudGV4dENvbnRlbnQgPSAncGhhc2U6IC8gdHVybjogJztcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJykgLy8gc2hpcCAvIHJvdW5kXHJcbiAgICAgICAgICAgIHN0YXR1czIuc2V0QXR0cmlidXRlKCdpZCcsICdzdGF0dXMtMicpO1xyXG4gICAgICAgICAgICBzdGF0dXMyLnRleHRDb250ZW50ID0gJ3NoaXA6IC8gcm91bmQ6J1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKSAvLyBkaXJlY3Rpb24gLyBzaGlwcyBzdW5rXHJcbiAgICAgICAgICAgIHN0YXR1czMuc2V0QXR0cmlidXRlKCdpZCcsICdzdGF0dXMtMycpO1xyXG4gICAgICAgICAgICBzdGF0dXMzLnRleHRDb250ZW50ID0gJ2RpcmVjdGlvbjogLyBzaGlwcyBzdW5rOic7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0dXNCb3gpO1xyXG4gICAgICAgICAgICBzdGF0dXNCb3guYXBwZW5kKHN0YXR1czEsIHN0YXR1czIsIHN0YXR1czMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2V0VHVyblN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0dXMtMScpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXR1cy0yJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1czMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHVzLTMnKTtcclxuICAgICAgICAgICAgY29uc3QgYm94ID0gYDxkaXYgY2xhc3M9XCJncmlkLXNoaXBcIj48L2Rpdj5gXHJcbiAgICAgICAgICAgIGxldCB0ZXh0QXJyb3cgPSBgPGltZyBzcmM9XCIke2Fycm93fVwiIC8+YDtcclxuXHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGhhc2UgPT09IFwicGxhY2VcIil7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMxLnRleHRDb250ZW50ID0gYFBoYXNlOiAke3BvaW50ZXIucGhhc2V9IHNoaXBzYDtcclxuICAgICAgICAgICAgICAgIGlmKHBvaW50ZXIuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB0ZXh0QXJyb3cgPSBgPGltZyBzcmM9XCIke2Fycm93fVwiIC8+YDtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGV4dEFycm93ID0gYDxpbWcgc3JjPVwiJHthcnJvd31cIiBjbGFzcz1cInJpZ2h0XCI+YFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzMy5pbm5lckhUTUwgPSBgRGlyZWN0aW9uOiAke3RleHRBcnJvd31gO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKHBvaW50ZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMyLnRleHRDb250ZW50ID0gJ1NoaXA6IG5vbmUoMCknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzMi5pbm5lckhUTUwgPSBgU2hpcDogJHtib3h9JHtib3h9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMyLmlubmVySFRNTCA9IGBTaGlwOiAke2JveH0ke2JveH0ke2JveH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czIuaW5uZXJIVE1MID0gYFNoaXA6ICR7Ym94fSR7Ym94fSR7Ym94fSR7Ym94fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzMi5pbm5lckhUTUwgPSBgU2hpcDogJHtib3h9JHtib3h9JHtib3h9JHtib3h9JHtib3h9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCB0dXJuID0gMDtcclxuICAgICAgICAgICAgICAgIGlmKHBsYXllcjEuaXNUdXJuKXR1cm4gPSAxO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihwbGF5ZXIyLmlzVHVybikgdHVybiA9IDI7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMxLnRleHRDb250ZW50ID0gYFR1cm46IHBsYXllciR7dHVybn1gO1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzMi50ZXh0Q29udGVudCA9IGBSb3VuZDogJHtib2FyZDIuYXR0YWNrTG9nLmxlbmd0aH1gO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci5wbGF5ZXIgPT09IDEgXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzdGF0dXMzLnRleHRDb250ZW50ID0gYFNoaXBzIFN1bms6ICR7Ym9hcmQxLmNoZWNrTnVtT2ZTdW5rU2hpcHMoKX1gXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0dXMzLnRleHRDb250ZW50ID0gYFNoaXBzIFN1bms6ICR7Ym9hcmQyLmNoZWNrTnVtT2ZTdW5rU2hpcHMoKX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRkQW5ub3VuY2VtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhbm5vdW5jZW1lbnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYW5ub3VuY2VtZW50Qm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnYW5ub3VuY2VtZW50Jyk7XHJcbiAgICAgICAgICAgIGFubm91bmNlbWVudEJveC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgICAgIHN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fubm91bmNlbWVudC10ZXh0Jyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYW5ub3VuY2VtZW50Qm94KTtcclxuICAgICAgICAgICAgYW5ub3VuY2VtZW50Qm94LmFwcGVuZENoaWxkKHN0YXR1cyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2V0QW5ub3VuY2VtZW50ID0gKHRleHQsIHJlbW92ZSA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbm5vdW5jZW1lbnQnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fubm91bmNlbWVudC10ZXh0Jyk7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICFyZW1vdmVcclxuICAgICAgICAgICAgICAgID8gc3RhdHVzLnRleHRDb250ZW50ID0gdGV4dFxyXG4gICAgICAgICAgICAgICAgOiBzdGF0dXMudGV4dENvbnRlbnQgPSBib3guY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZEljb25FdmVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItMScpXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlR3JpZChwbGF5ZXIxLCBib2FyZDEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItMicpXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlR3JpZChwbGF5ZXIyLCBib2FyZDIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBlbmQgb2YgcGxheWVyIHN0YXR1cyAvL1xyXG5cclxuICAgICAgICAvLyBncmlkIGRpc3BsYXkgLy9cclxuICAgICAgICAvLyBncmlkIHRpdGxlIC8vXHJcbiAgICAgICAgY29uc3Qgc2V0R3JpZFRpdGxlID0gKHBsYXllcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNncmlkLXRpdGxlJyk7XHJcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYFBsYXllciAke3BsYXllci5wbGF5ZXJOdW1iZXJ9YDtcclxuICAgICAgICAgICAgc2V0R3JpZFBsYXllckJ0bigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2V0R3JpZFBsYXllckJ0biA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItMScpO1xyXG4gICAgICAgICAgICBjb25zdCBidG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci0yJyk7XHJcblxyXG4gICAgICAgICAgICBpZigocG9pbnRlci5wbGF5ZXIgPT09IDEgJiYgcG9pbnRlci5waGFzZSA9PT0gJ3BsYWNlJykpe1xyXG4gICAgICAgICAgICAgICAgYnRuMS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgICAgIGJ0bjIuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHBvaW50ZXIucGxheWVyID09PSAyICYmIHBvaW50ZXIucGhhc2UgPT09J3BsYWNlJykge1xyXG4gICAgICAgICAgICAgICAgYnRuMi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgICAgIGJ0bjEuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHBvaW50ZXIucGxheWVyID09PSAxICYmIHBvaW50ZXIucGhhc2UgPT09ICdhdHRhY2snKXtcclxuICAgICAgICAgICAgICAgIGJ0bjIuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICBidG4xLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihwb2ludGVyLnBsYXllciA9PT0gMiAmJiBwb2ludGVyLnBoYXNlID09PSAnYXR0YWNrJykge1xyXG4gICAgICAgICAgICAgICAgYnRuMS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgICAgIGJ0bjIuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVuZCBvZiBncmlkIHRpdGxlIC8vXHJcblxyXG4gICAgICAgIC8vIGdyaWQgLy9cclxuXHJcbiAgICAgICAgY29uc3QgYWRkR3JpZCA9IChwbHVzaWQgPSAnZ3JpZCcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBncmlkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtwbHVzaWR9YCk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNldEdyaWRUb1BsYXllciA9IChwbGF5ZXIsIGJvYXJkLCBwbHVzaWQgPSAnZ3JpZCcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BsdXNpZH1gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZ3JpZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllck51bWJlciA9IHBsYXllci5wbGF5ZXJOdW1iZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGJvYXJkLmdyaWQ7XHJcbiAgICAgICAgICAgIGNvb3Jkcy5mb3JFYWNoKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFt4LHldID0gW2Nvb3JkLmNvb3JkaW5hdGVbMV0sIGNvb3JkLmNvb3JkaW5hdGVbM11dO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsIGBncmlkLSR7cGxheWVyTnVtYmVyfS0ke3h9LCR7eX1gKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGBwJHtwbGF5ZXJOdW1iZXJ9YCk7IFxyXG4gICAgICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFwbGF5ZXIxLmlzVHVybiAmJiBwb2ludGVyLnBsYXllciA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXJOdW1iZXIsIGJvYXJkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIXBsYXllcjIuaXNUdXJuICYmIHBvaW50ZXIucGxheWVyID09PSAyKXtcclxuICAgICAgICAgICAgICAgIG1hcmtHcmlkKHBsYXllck51bWJlciwgYm9hcmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYocG9pbnRlci5waGFzZSA9PT0gJ3BsYWNlJykge1xyXG4gICAgICAgICAgICAgICAgbWFya0dyaWQocGxheWVyTnVtYmVyLCBib2FyZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXJOdW1iZXIsIGJvYXJkLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHNldEdyaWRUb1NoaXAgPSAoZSwgYm9hcmQpID0+IHtcclxuICAgICAgICAgICAgaWYocG9pbnRlci5waGFzZSAhPSAncGxhY2UnKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGUudGFyZ2V0LmlkLnJlcGxhY2UoL2dyaWQtL2ksICcnKTtcclxuICAgICAgICAgICAgY29uc3QgW3BsYXllck51bWJlciwgeCwgeV0gPSBbXHJcbiAgICAgICAgICAgICAgICBOdW1iZXIoY29vcmRzWzBdKSxcclxuICAgICAgICAgICAgICAgIE51bWJlcihjb29yZHNbMl0pLFxyXG4gICAgICAgICAgICAgICAgTnVtYmVyKGNvb3Jkc1s0XSksXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICFib2FyZC5pc0FpXHJcbiAgICAgICAgICAgICAgICA/IGJvYXJkLnBsYWNlU2hpcChwb2ludGVyLmxlbmd0aCwgYFske3h9LCR7eX1dYCwgcG9pbnRlci5kaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICA6IGJvYXJkLmFpUGxhY2VTaGlwKCk7XHJcbiAgICAgICAgICAgIGlmKCFib2FyZC5pc0FpKW1hcmtHcmlkVG9TaGlwKHBsYXllck51bWJlciwgYm9hcmQpO1xyXG5cclxuICAgICAgICAgICAgY2xvc2VQbGFjZVNoaXBNZW51KCk7XHJcbiAgICAgICAgICAgIG9wZW5QbGFjZVNoaXBNZW51KCk7XHJcblxyXG4gICAgICAgICAgICBjaGFuZ2VXaG9QbGFjaW5nKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYXR0YWNrR3JpZCA9IChlLCBib2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBlLnRhcmdldC5pZC5yZXBsYWNlKC9ncmlkLS9pLCAnJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IFtwbGF5ZXJOdW1iZXIsIHgsIHldID0gW1xyXG4gICAgICAgICAgICAgICAgTnVtYmVyKGNvb3Jkc1swXSksXHJcbiAgICAgICAgICAgICAgICBOdW1iZXIoY29vcmRzWzJdKSxcclxuICAgICAgICAgICAgICAgIE51bWJlcihjb29yZHNbNF0pLFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgaWYocGxheWVyTnVtYmVyID09PSAyICYmIHBsYXllcjEuaXNUdXJuKXtcclxuICAgICAgICAgICAgICAgIHBsYXllcjEudGFrZVR1cm4oYFske3h9LCR7eX1dYCwgYm9hcmQsIHBsYXllcjEsIHBsYXllcjIsIGJvYXJkMSk7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXJOdW1iZXIsIGJvYXJkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmKCFwbGF5ZXIxLmlzVHVybil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QW5ub3VuY2VtZW50KCdQbGF5ZXIgMiBUdXJuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChlbmRUdXJuLCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYocGxheWVyTnVtYmVyID09PSAxICYmIHBsYXllcjIuaXNUdXJuKXtcclxuICAgICAgICAgICAgICAgIHBsYXllcjIudGFrZVR1cm4oYFske3h9LCR7eX1dYCwgYm9hcmQsIHBsYXllcjIsIHBsYXllcjEsIGJvYXJkMik7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXJOdW1iZXIsIGJvYXJkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmKCFwbGF5ZXIyLmlzVHVybil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QW5ub3VuY2VtZW50KCdQbGF5ZXIgMSBUdXJuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChlbmRUdXJuLCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUdXJuU3RhdHVzKCk7XHJcbiAgICAgICAgICAgIGxvc2VHYW1lKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9zZUdhbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGJvYXJkMS5sb3NlKCkgfHwgYm9hcmQyLmxvc2UoKSkgbG9hZEdhbWVPdmVyU2NyZWVuKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFya0dyaWRUb1NoaXAgPSAocGxheWVyTnVtYmVyLCBib2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wJHtwbGF5ZXJOdW1iZXJ9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGJvYXJkLmdyaWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlZCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29vcmRzLmZvckVhY2goY29vcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoY29vcmQuc2hpcEhlcmUpIG1hcmtlZC5wdXNoKGNvb3JkLmNvb3JkaW5hdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGdyaWRTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IHNxdWFyZS5pZC5yZXBsYWNlKC9ncmlkLVxcdy0vaSwgJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29vcmRzID0gYFske2Nvb3Jkc31dYDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtYXJrZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1hcmtlZFtpXSA9PT0gbmV3Q29vcmRzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2dyaWQtc2hpcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFya0dyaWRUb0hvdmVyU2hpcCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGhhc2UgIT0gJ3BsYWNlJyB8fCBwb2ludGVyLmxlbmd0aCA8IDIpIHJldHVybiBtYXJrR3JpZFRvSG92ZXJIaXQoZSk7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0QXJyb3c7XHJcbiAgICAgICAgICAgIHBvaW50ZXIuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCdcclxuICAgICAgICAgICAgICAgID8gdGV4dEFycm93ID0gYDxpbWcgc3JjPVwiJHthcnJvd31cIiBjbGFzcz1cImdyaWQtcmlnaHRcIiAvPmBcclxuICAgICAgICAgICAgICAgIDogdGV4dEFycm93ID0gYDxpbWcgc3JjPVwiJHthcnJvd31cIiBjbGFzcz1cImdyaWQtdXBcIiAvPmBcclxuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gdGV4dEFycm93O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmtHcmlkVG9IaXQgPSAocGxheWVyTnVtYmVyLCBib2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wJHtwbGF5ZXJOdW1iZXJ9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGJvYXJkLmdyaWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlZCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29vcmRzLmZvckVhY2goY29vcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoY29vcmQuaGl0SGVyZSAmJiBjb29yZC5zaGlwSGVyZSkgbWFya2VkLnB1c2goY29vcmQuY29vcmRpbmF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZ3JpZFNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gc3F1YXJlLmlkLnJlcGxhY2UoL2dyaWQtXFx3LS9pLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDb29yZHMgPSBgWyR7Y29vcmRzfV1gO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG1hcmtlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWFya2VkW2ldID09PSBuZXdDb29yZHMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnZ3JpZC1oaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmtHcmlkVG9NaXNzID0gKHBsYXllck51bWJlciwgYm9hcmQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucCR7cGxheWVyTnVtYmVyfWApO1xyXG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBib2FyZC5ncmlkO1xyXG4gICAgICAgICAgICBjb25zdCBtYXJrZWQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvb3Jkcy5mb3JFYWNoKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNvb3JkLmhpdEhlcmUgJiYgIWNvb3JkLnNoaXBIZXJlKSBtYXJrZWQucHVzaChjb29yZC5jb29yZGluYXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBncmlkU3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZHMgPSBzcXVhcmUuaWQucmVwbGFjZSgvZ3JpZC1cXHctL2ksICcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Nvb3JkcyA9IGBbJHtjb29yZHN9XWA7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWFya2VkLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihtYXJrZWRbaV0gPT09IG5ld0Nvb3Jkcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdncmlkLW1pc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmtHcmlkVG9Ib3ZlckhpdCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGhhc2UgIT0gJ2F0dGFjaycpIHJldHVybjtcclxuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtjcm9zc2hhaXJ9XCIgY2xhc3M9XCJncmlkLXRhcmdldFwiIC8+YDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrR3JpZCA9IChwbGF5ZXJOdW1iZXIsIGJvYXJkLCBoaWRlU2hpcHMpID0+IHtcclxuICAgICAgICAgICAgaWYoIWhpZGVTaGlwcykgbWFya0dyaWRUb1NoaXAocGxheWVyTnVtYmVyLCBib2FyZCk7XHJcbiAgICAgICAgICAgIG1hcmtHcmlkVG9IaXQocGxheWVyTnVtYmVyLCBib2FyZCk7XHJcbiAgICAgICAgICAgIG1hcmtHcmlkVG9NaXNzKHBsYXllck51bWJlciwgYm9hcmQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZUdyaWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3JpZCcpO1xyXG4gICAgICAgICAgICB3aGlsZShncmlkLmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgICAgICAgICAgZ3JpZC5yZW1vdmVDaGlsZChncmlkLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlSG92ZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICB3aGlsZShlLnRhcmdldC5maXJzdENoaWxkKXtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnJlbW92ZUNoaWxkKGUudGFyZ2V0LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaGFuZ2VHcmlkID0gKHBsYXllciwgYm9hcmQsIGJ5cGFzcyA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGhhc2UgPT09ICdwbGFjZScgJiYgIWJ5cGFzcykgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBsYXllciA9PT0gcGxheWVyLnBsYXllck51bWJlciAmJiAhYnlwYXNzKSByZXR1cm47XHJcbiAgICAgICAgICAgIHJlbW92ZUdyaWQoKTtcclxuICAgICAgICAgICAgc2V0R3JpZFRpdGxlKHBsYXllcik7XHJcbiAgICAgICAgICAgIHNldEdyaWRUb1BsYXllcihwbGF5ZXIsIGJvYXJkKTtcclxuICAgICAgICAgICAgYWRkR3JpZEV2ZW50cyhwbGF5ZXIsIGJvYXJkKTtcclxuICAgICAgICAgICAgcG9pbnRlci5wbGF5ZXIgPSBwbGF5ZXIucGxheWVyTnVtYmVyOyAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBzZXRBbm5vdW5jZW1lbnQoJycsIHRydWUpO1xyXG4gICAgICAgICAgICBpZighYnlwYXNzKXNldFR1cm5TdGF0dXMoKTtcclxuICAgICAgICAgICAgZWxzZSBpZihieXBhc3Mpe1xyXG4gICAgICAgICAgICAgICAgY2xvc2VQbGFjZVNoaXBNZW51KCk7XHJcbiAgICAgICAgICAgICAgICBvcGVuUGxhY2VTaGlwTWVudSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hvb3NlR3JpZEZ1bmN0aW9uID0gKGUsIGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGhhc2UgPT09ICdhdHRhY2snKXtcclxuICAgICAgICAgICAgICAgIGF0dGFja0dyaWQoZSwgYm9hcmQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYocG9pbnRlci5pc1BsYWNpbmcpe1xyXG4gICAgICAgICAgICAgICAgc2V0R3JpZFRvU2hpcChlLCBib2FyZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRHcmlkRXZlbnRzID0gKHBsYXllciwgYm9hcmQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucCR7cGxheWVyLnBsYXllck51bWJlcn1gKVxyXG4gICAgICAgICAgICBncmlkQnRucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGUgPT4gY2hvb3NlR3JpZEZ1bmN0aW9uKGUsIGJvYXJkKSk7XHJcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGUgPT4gbWFya0dyaWRUb0hvdmVyU2hpcChlLCBib2FyZCkpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBlID0+IG1hcmtHcmlkVG9Ib3ZlclNoaXAoZSwgYm9hcmQpKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcmVtb3ZlSG92ZXIpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgcmVtb3ZlSG92ZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBsb2FkR3JpZCA9IChwbGF5ZXJOdW1iZXIsIHR3byA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZEdyaWQoJ2dyaWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHR3byl7XHJcbiAgICAgICAgICAgICAgICBhZGRXaW5uZXIoKTtcclxuICAgICAgICAgICAgICAgIGFkZEdyaWQoJ2dyaWQtMicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBsYXllck51bWJlciA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICBzZXRHcmlkVG9QbGF5ZXIocGxheWVyMSwgYm9hcmQxLCAnZ3JpZCcpO1xyXG4gICAgICAgICAgICAgICAgbWFya0dyaWQocGxheWVyMS5wbGF5ZXJOdW1iZXIsIGJvYXJkMSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldEdyaWRUb1BsYXllcihwbGF5ZXIxLCBib2FyZDEsICdncmlkJyk7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXIxLnBsYXllck51bWJlciwgYm9hcmQxLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRHcmlkVG9QbGF5ZXIocGxheWVyMiwgYm9hcmQyLCAnZ3JpZC0yJyk7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXIyLnBsYXllck51bWJlciwgYm9hcmQyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZW5kIG9mIGdyaWQgLy9cclxuICAgICAgICAvLyBlbmQgb2YgZ3JpZCBkaXNwbGF5IC8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcGxhY2Ugc2hpcCBidXR0b25zIC8vXHJcbiAgICAgICAgY29uc3QgYWRkUGxhY2VTaGlwQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcC1tZW51Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlU2hpcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBwbGFjZVNoaXBCdG4udGV4dENvbnRlbnQgPSAnU2hpcHMnO1xyXG4gICAgICAgICAgICBwbGFjZVNoaXBCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwbGFjZS1zaGlwJyk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG4gICAgICAgICAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VTaGlwQnRuKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBvcGVuUGxhY2VTaGlwTWVudSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYm94ID0gYDxkaXYgY2xhc3M9XCJncmlkLXNoaXBcIj48L2Rpdj5gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbnMgLy9cclxuICAgICAgICAgICAgLy8gb2xkIC8vXHJcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZS1zaGlwJyk7XHJcbiAgICAgICAgICAgIHBsYWNlU2hpcC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIHBsYWNlU2hpcC50ZXh0Q29udGVudCA9ICcnXHJcbiAgICAgICAgICAgIC8vIG5ldyAvL1xyXG4gICAgICAgICAgICBjb25zdCBjYXJyaWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGNhcnJpZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJyaWVyJyk7XHJcbiAgICAgICAgICAgIGNhcnJpZXIuaW5uZXJIVE1MID0gYCR7Ym94fSR7Ym94fSR7Ym94fSR7Ym94fSR7Ym94fWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgYmF0dGxlc2hpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhdHRsZXNoaXAnKTtcclxuICAgICAgICAgICAgYmF0dGxlc2hpcC5pbm5lckhUTUwgPSBgJHtib3h9JHtib3h9JHtib3h9JHtib3h9YDtcclxuICAgICAgICAgICAgY29uc3Qgc3VibWFyaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHN1Ym1hcmluZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1hcmluZScpO1xyXG4gICAgICAgICAgICBzdWJtYXJpbmUuaW5uZXJIVE1MID0gYCR7Ym94fSR7Ym94fSR7Ym94fWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgcGF0cm9sQm9hdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BhdHJvbC1ib2F0Jyk7XHJcbiAgICAgICAgICAgIHBhdHJvbEJvYXQuaW5uZXJIVE1MID0gYCR7Ym94fSR7Ym94fWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICByb3RhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdyb3RhdGUtc2hpcCcpO1xyXG4gICAgICAgICAgICBjb25zdCByb3RhdGVJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICByb3RhdGVJbm5lci5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke3JvdGF0ZUljb259YCk7XHJcbiAgICAgICAgICAgIHJvdGF0ZS5hcHBlbmRDaGlsZChyb3RhdGVJbm5lcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBjb250YWluZXIgLy9cclxuICAgICAgICAgICAgY29uc3QgYnRuc1RvQXBwZW5kID0gW1xyXG4gICAgICAgICAgICAgICAgcGF0cm9sQm9hdCxcclxuICAgICAgICAgICAgICAgIHN1Ym1hcmluZSxcclxuICAgICAgICAgICAgICAgIGJhdHRsZXNoaXAsXHJcbiAgICAgICAgICAgICAgICBjYXJyaWVyLFxyXG4gICAgICAgICAgICAgICAgcm90YXRlXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwLW1lbnUnKTtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZCguLi5idG5zVG9BcHBlbmQpO1xyXG4gICAgICAgICAgICBhZGRTaGlwTnVtYmVycyguLi5idG5zVG9BcHBlbmQpO1xyXG4gICAgICAgICAgICBoaWRlU2hpcEJ0bnMoLi4uYnRuc1RvQXBwZW5kKTtcclxuICAgICAgICAgICAgLy8gZXZlbnRzIC8vXHJcbiAgICAgICAgICAgIGFkZFNoaXBCdXR0b25FdmVudHMoKTtcclxuICAgICAgICAgICAgYWRkQ2xvc2VQbGFjZVNoaXBFdmVudCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFNoaXBOdW1iZXJzID0gKHBhdHJvbEJvYXQsIHN1Ym1hcmluZSwgYmF0dGxlc2hpcCwgY2FycmllcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwQm9hdE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1hcmluZU4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhdHRsZXNoaXBOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJyaWVyTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAxKXtcclxuICAgICAgICAgICAgICAgIHBCb2F0Ti50ZXh0Q29udGVudCA9IGB4ICR7Ym9hcmQxLnVucGxhY2VkU2hpcHNbM10ubnVtYmVyfWA7XHJcbiAgICAgICAgICAgICAgICBzdWJtYXJpbmVOLnRleHRDb250ZW50ID0gYHggJHtib2FyZDEudW5wbGFjZWRTaGlwc1syXS5udW1iZXJ9YDtcclxuICAgICAgICAgICAgICAgIGJhdHRsZXNoaXBOLnRleHRDb250ZW50ID0gYHggJHtib2FyZDEudW5wbGFjZWRTaGlwc1sxXS5udW1iZXJ9YDtcclxuICAgICAgICAgICAgICAgIGNhcnJpZXJOLnRleHRDb250ZW50ID0gYHggJHtib2FyZDEudW5wbGFjZWRTaGlwc1swXS5udW1iZXJ9YDtcclxuICAgICAgICAgICAgfWVsc2UgaWYocG9pbnRlci5wbGF5ZXIgPT09IDIpe1xyXG4gICAgICAgICAgICAgICAgcEJvYXROLnRleHRDb250ZW50ID0gYHggJHtib2FyZDIudW5wbGFjZWRTaGlwc1szXS5udW1iZXJ9YDtcclxuICAgICAgICAgICAgICAgIHN1Ym1hcmluZU4udGV4dENvbnRlbnQgPSBgeCAke2JvYXJkMi51bnBsYWNlZFNoaXBzWzJdLm51bWJlcn1gO1xyXG4gICAgICAgICAgICAgICAgYmF0dGxlc2hpcE4udGV4dENvbnRlbnQgPSBgeCAke2JvYXJkMi51bnBsYWNlZFNoaXBzWzFdLm51bWJlcn1gO1xyXG4gICAgICAgICAgICAgICAgY2Fycmllck4udGV4dENvbnRlbnQgPSBgeCAke2JvYXJkMi51bnBsYWNlZFNoaXBzWzBdLm51bWJlcn1gO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXRyb2xCb2F0LmFwcGVuZENoaWxkKHBCb2F0Tik7XHJcbiAgICAgICAgICAgIHN1Ym1hcmluZS5hcHBlbmRDaGlsZChzdWJtYXJpbmVOKTtcclxuICAgICAgICAgICAgYmF0dGxlc2hpcC5hcHBlbmRDaGlsZChiYXR0bGVzaGlwTik7XHJcbiAgICAgICAgICAgIGNhcnJpZXIuYXBwZW5kQ2hpbGQoY2Fycmllck4pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNsb3NlUGxhY2VTaGlwTWVudSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAtbWVudScpO1xyXG4gICAgICAgICAgICBjb25zdCBwbGFjZVNoaXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhY2Utc2hpcCcpO1xyXG4gICAgICAgICAgICBwbGFjZVNoaXBCdG4udGV4dENvbnRlbnQgPSAnU2hpcHMnO1xyXG4gICAgICAgICAgICBwbGFjZVNoaXBCdG4uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUoYnRuQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICAgICAgYnRuQ29udGFpbmVyLnJlbW92ZUNoaWxkKGJ0bkNvbnRhaW5lci5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhZGRPcGVuUGxhY2VTaGlwRXZlbnQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRPcGVuUGxhY2VTaGlwRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZS1zaGlwJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5QbGFjZVNoaXBNZW51KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLXNoaXAnKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQbGFjZVNoaXBNZW51KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRDbG9zZVBsYWNlU2hpcEV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhY2Utc2hpcCcpIFxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQbGFjZVNoaXBNZW51KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLXNoaXAnKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblBsYWNlU2hpcE1lbnUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYWNlU2hpcFR5cGUgPSAobGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIuaXNQbGFjaW5nICYmIHBvaW50ZXIubGVuZ3RoID09PSBsZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci5pc1BsYWNpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXIubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLmlzUGxhY2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUdXJuU3RhdHVzKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm90YXRlU2hpcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgcG9pbnRlci5pc1BsYWNpbmdcclxuICAgICAgICAgICAgICAgID8gcG9pbnRlci5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gcG9pbnRlci5kaXJlY3Rpb24gPSAndmVydGljYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgOiBwb2ludGVyLmRpcmVjdGlvbiA9ICdob3Jpem9udGFsJ1xyXG4gICAgICAgICAgICAgICAgOiAnbm90aGluZyB0byByb3RhdGUnO1xyXG4gICAgICAgICAgICB0b2dnbGVSb3RhdGVJY29uKCk7XHJcbiAgICAgICAgICAgIHNldFR1cm5TdGF0dXMoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0b2dnbGVSb3RhdGVJY29uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm90YXRlLXNoaXAnKTtcclxuXHJcbiAgICAgICAgICAgIHBvaW50ZXIuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCdcclxuICAgICAgICAgICAgICAgID8gcm90YXRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXAnKVxyXG4gICAgICAgICAgICAgICAgOiByb3RhdGVCdG4uY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkU2hpcEJ1dHRvbkV2ZW50cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcnJpZXInKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcGxhY2VTaGlwVHlwZSg1KSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXR0bGVzaGlwJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBsYWNlU2hpcFR5cGUoNCkpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBsYWNlU2hpcFR5cGUoMykpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGF0cm9sLWJvYXQnKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcGxhY2VTaGlwVHlwZSgyKSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3RhdGUtc2hpcCcpXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBoaWRlU2hpcEJ0bnMgPSAocGF0cm9sQm9hdCwgc3VibWFyaW5lLCBiYXR0bGVzaGlwLCBjYXJyaWVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAxICYmIGJvYXJkMS51bnBsYWNlZFNoaXBzWzBdLm51bWJlciA8IDEpe1xyXG4gICAgICAgICAgICAgICAgY2Fycmllci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IDEgJiYgYm9hcmQxLnVucGxhY2VkU2hpcHNbMV0ubnVtYmVyIDwgMSl7XHJcbiAgICAgICAgICAgICAgICBiYXR0bGVzaGlwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBsYXllciA9PT0gMSAmJiBib2FyZDEudW5wbGFjZWRTaGlwc1syXS5udW1iZXIgPCAxKXtcclxuICAgICAgICAgICAgICAgIHN1Ym1hcmluZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IDEgJiYgYm9hcmQxLnVucGxhY2VkU2hpcHNbM10ubnVtYmVyIDwgMSl7XHJcbiAgICAgICAgICAgICAgICBwYXRyb2xCb2F0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBsYXllciA9PT0gMiAmJiBib2FyZDIudW5wbGFjZWRTaGlwc1swXS5udW1iZXIgPCAxKXtcclxuICAgICAgICAgICAgICAgIGNhcnJpZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAyICYmIGJvYXJkMi51bnBsYWNlZFNoaXBzWzFdLm51bWJlciA8IDEpe1xyXG4gICAgICAgICAgICAgICAgYmF0dGxlc2hpcC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IDIgJiYgYm9hcmQyLnVucGxhY2VkU2hpcHNbMl0ubnVtYmVyIDwgMSl7XHJcbiAgICAgICAgICAgICAgICBzdWJtYXJpbmUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAyICYmIGJvYXJkMi51bnBsYWNlZFNoaXBzWzNdLm51bWJlciA8IDEpe1xyXG4gICAgICAgICAgICAgICAgcGF0cm9sQm9hdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZW1vdmVQbGFjZVNoaXBCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAtbWVudScpXHJcbiAgICAgICAgICAgIHdoaWxlKG1lbnUuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUNoaWxkKG1lbnUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVuZCBvZiBwbGFjZSBzaGlwIGJ1dHRvbnMgLy9cclxuXHJcbiAgICAgICAgLy8gZ2FtZSBvdmVyIC8vXHJcbiAgICAgICAgY29uc3QgYWRkR3JpZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICBsb2FkR3JpZCgyLCB0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRXaW5uZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdpZCcsICd3aW5uZXItYm94Jyk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3gpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2lubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAgICAgd2lubmVyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcicpO1xyXG4gICAgICAgICAgICB3aW5uZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHdpbm5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZXRXaW5uZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKTtcclxuICAgICAgICAgICAgY29uc3Qgcm91bmRzID0gYm9hcmQyLmF0dGFja0xvZy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGJvYXJkMS5sb3NlKClcclxuICAgICAgICAgICAgICAgID8gd2lubmVyLnRleHRDb250ZW50ID0gYFBsYXllciAyIFdJTlMhIGluICR7cm91bmRzfSByb3VuZHNgXHJcbiAgICAgICAgICAgICAgICA6IHdpbm5lci50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMSBXSU5TISBpbiAke3JvdW5kc30gcm91bmRzYFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkUmV0dXJuTWVudUJ0biA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4tbWVudS1idG4nKVxyXG4gICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnTWFpbiBNZW51JztcclxuICAgICAgICAgICAgY29uc3QgcmVwbGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHJlcGxheUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlcGxheS1idG4nKTtcclxuICAgICAgICAgICAgcmVwbGF5QnRuLnRleHRDb250ZW50ID0gJ1JlcGxheSc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lubmVyLWJveCcpO1xyXG4gICAgICAgICAgICB3aGlsZShib3guZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBib3gucmVtb3ZlQ2hpbGQoYm94LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJveC5hcHBlbmQoYnRuLCByZXBsYXlCdG4pO1xyXG4gICAgICAgICAgICBhZGRNZW51RXZlbnQoKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUmV0dXJuTWVudUJ0bik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRSZXR1cm5FdmVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUmV0dXJuTWVudUJ0bik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRNZW51RXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLW1lbnUtYnRuJyk7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RpdGxlU2NyZWVuID0gdGl0bGVTY3JlZW4oKTtcclxuICAgICAgICAgICAgICAgIG5ld1RpdGxlU2NyZWVuLmxvYWRUaXRsZVNjcmVlbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlcGxheS1idG4nKTtcclxuICAgICAgICAgICAgcmVwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3R2FtZVNjcmVlbiA9IGdhbWVTY3JlZW4ocHZwKTtcclxuICAgICAgICAgICAgICAgIG5ld0dhbWVTY3JlZW4ubG9hZEdhbWVTY3JlZW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlbmQgb2YgZ2FtZSBvdmVyIC8vXHJcblxyXG4gICAgICAgIC8vIGxvYWRpbmcgLy9cclxuICAgICAgICBjb25zdCBsb2FkR2FtZVNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0Q29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgIGFkZFBsYXllckljb25zKCk7XHJcbiAgICAgICAgICAgIGxvYWRHcmlkKDEpO1xyXG4gICAgICAgICAgICBhZGRJY29uRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIGFkZFN0YXR1cygpO1xyXG4gICAgICAgICAgICBhZGRQbGFjZVNoaXBCdXR0b24oKTtcclxuICAgICAgICAgICAgYWRkT3BlblBsYWNlU2hpcEV2ZW50KCk7XHJcbiAgICAgICAgICAgIGFkZEdyaWRFdmVudHMocGxheWVyMSwgYm9hcmQxKTtcclxuICAgICAgICAgICAgYWRkQW5ub3VuY2VtZW50KCk7XHJcbiAgICAgICAgICAgIHNldEFubm91bmNlbWVudCgnUGxheWVyIDEgXFxuIFBsYWNpbmcgUGhhc2UnKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEFubm91bmNlbWVudCgnJywgdHJ1ZSksIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgc2V0VHVyblN0YXR1cygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGxvYWRHYW1lT3ZlclNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgYWRkR3JpZHMoKTtcclxuICAgICAgICAgICAgc2V0V2lubmVyKCk7XHJcbiAgICAgICAgICAgIGFkZFJldHVybkV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVuZCBvZiBsb2FkaW5nIC8vXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gcmVtb3ZlIGJlbG93IC8vXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBjb25zdCBwbGFjZUFsbFNoaXBzID0gKGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCg1LCAnWzAsMV0nLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoNCwgJ1swLDJdJywgJ2hvcml6b250YWwnKTtcclxuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKDMsICdbMCwzXScsICdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCgzLCAnWzAsNF0nLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoMywgJ1swLDVdJywgJ2hvcml6b250YWwnKTtcclxuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKDMsICdbMCw2XScsICdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCgyLCAnWzAsN10nLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoMiwgJ1swLDhdJywgJ2hvcml6b250YWwnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4geyBsb2FkR2FtZVNjcmVlbiwgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGVTY3JlZW4sXHJcbiAgICAgICAgZ2FtZVNjcmVlbiwgLy9yZW1vdmVcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnRlcmZhY2U7XHJcblxyXG4vLyB0cnkgdG8gYWRkIGEgc21hbGwgZ3JpZCB0byBzaG93IHdoYXQgdGhlIGNvbXB1dGVyIGlzIGRvaW5nIG9uIHZzIGNvbXB1dGVyXHJcbi8vIGFkZCBtaW5lcyB0aGF0IGV4cGxvZGUgb24gdGhlIHlvdXIgZ3JpZCBpZiB5b3UgaGl0IHRoZSBlbmVtaWVzIG1pbmVzIGluIGEgM3gzXHJcbi8vIGNsZWFuIGNvZGUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgYmF0dGxlU2hpcHMgZnJvbSAnLi9iYXR0bGVzaGlwJztcclxuaW1wb3J0IHVzZXJJbnRlcmZhY2UgZnJvbSAnLi91aSc7XHJcblxyXG5jb25zdCBsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW50cm8gPSB1c2VySW50ZXJmYWNlLnRpdGxlU2NyZWVuKCk7XHJcbiAgICBpbnRyby5sb2FkVGl0bGVTY3JlZW4oKTtcclxufTtcclxuXHJcbmxvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=