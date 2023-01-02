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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --grid-font-c: rgb(52, 41, 51);\r\n    --box-color: rgba(240, 255, 255, 0.9);\r\n    --grid1: darkblue;\r\n    --grid2: rgb(0, 140, 255); \r\n    --line-color: rgb(90, 116, 232);\r\n    --outline-color: rgb(53, 74, 94); \r\n    --box-outline: 2px solid rgba(255, 255, 255, 0.8);\r\n\r\n    --grid-size: max(300px, 30vw);\r\n    --grid-size-wide: min(450px, 30vw);\r\n    --grid-size-mini: 150px;\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: var(--grid-font-c);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Containers */\r\n\r\n.title-screen,\r\n#title-screen-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n#title-screen-menu{\r\n    gap: 5rem;\r\n    padding: 1rem;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#title-screen-btns {\r\n    display: flex;\r\n    gap: 5rem;\r\n}\r\n\r\n@media (max-width: 450px){\r\n    #title-screen-btns {\r\n        flex-direction: column;\r\n        padding-bottom: 5rem;\r\n    }\r\n    .title-screen h1 {\r\n        font-size: 45px !important;\r\n    }\r\n}\r\n\r\n#winner-box button,\r\n#winner-box,\r\n.title-screen button,\r\n#title-screen-menu,\r\n#player-icon-container,\r\n#status-box,\r\n#ship-menu,\r\n#grid-2,\r\n#grid {\r\n    box-shadow: 0px 0px 0px 5px var(--outline-color);\r\n    border-radius: 10px; /*not grid*/\r\n}\r\n\r\n#container {\r\n    overflow-x: hidden;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#player-icon-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    margin: 0.3rem auto 1rem auto;\r\n    background-color: var(--box-color);\r\n    width: calc(var(--grid-size) * 1.1);\r\n}\r\n\r\n#grid-2,\r\n#grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    grid-template-rows: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    margin: 1rem auto;\r\n    width: var(--grid-size);\r\n    height: var(--grid-size);\r\n    transform: rotate(270deg);\r\n    border-radius: 1px !important;\r\n    background-color: var(--grid2);\r\n}\r\n\r\n#grid-2 {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.mini-grid {\r\n    grid-template-columns: repeat(auto-fit, calc(var(--grid-size-mini) / 10)) !important;\r\n    grid-template-rows: repeat(auto-fit, calc(var(--grid-size-mini) / 10)) !important;\r\n    width: var(--grid-size-mini) !important;\r\n    height: var(--grid-size-mini) !important;\r\n}\r\n\r\n#announcement {\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    margin-left: -35%;\r\n    margin-top: -5vh;\r\n    padding-top: 3vh;\r\n    height: 10vh;\r\n    width: 70%;\r\n    text-align: center;\r\n    color: var(--grid-font-c);\r\n    font-size: 17px;\r\n    font-family: monofett;\r\n    background-color: var(--box-color);\r\n    box-shadow: 0px 0px 5px 5px white;\r\n    outline: var(--box-outline);\r\n    border-radius: 10px;\r\n    z-index: 1;\r\n}\r\n\r\n@media(max-width: 420px){\r\n    #announcement {\r\n        height: 15vh !important;\r\n        white-space: pre;\r\n    }\r\n\r\n    #status-box {\r\n        padding: 0.5rem 0 !important;\r\n    }\r\n}\r\n\r\n#status-box {\r\n    width: var(--grid-size);\r\n    margin: 1rem auto;\r\n    padding: 2.5rem 0;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#ship-menu {\r\n    position: sticky;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    height: 75px;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n    padding: 0 0.5rem;\r\n    background-color: var(--box-color);\r\n    border-radius: 0 10px 10px 0;\r\n}\r\n\r\n@media(min-width: 1000px){\r\n    #ship-menu {\r\n        padding: 0 2rem;\r\n        gap: 2.5rem;\r\n    }\r\n}\r\n\r\n#winner-box {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    height: fit-content;\r\n    width: max(250px, 50vw);\r\n    gap: 1rem;\r\n    margin: 1rem auto;\r\n    background-color: var(--box-color);\r\n    font-family: monofett;\r\n    letter-spacing: 1px;;\r\n}\r\n\r\n/* End of Containers*/\r\n\r\n/* Text */\r\n#grid-title {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.title-screen h1 {\r\n    padding-top: 1.5rem;\r\n    font-size: 60px;\r\n    font-family: monofett;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n#status-box h2 {\r\n    padding: 0.25rem 2.5rem;\r\n}\r\n/*End of Text*/\r\n\r\n/*Images*/\r\n#status-box div {\r\n    display: inline-block;\r\n    height: 25px;\r\n    width: 25px;\r\n    vertical-align: bottom;\r\n    border: 2px solid var(--outline-color);\r\n}\r\n\r\n#status-box img {\r\n    width: 30px;\r\n    vertical-align: bottom;\r\n}\r\n\r\n#ship-menu div.grid-ship {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    border: 2px solid var(--outline-color);\r\n}\r\n\r\n@media (max-width: 372px) {\r\n    #ship-menu div.grid-ship{\r\n        width: 11px;\r\n        height: 11px;\r\n        border: 1px solid var(--outline-color);\r\n    }\r\n}\r\n\r\n#ship-menu img {\r\n    padding-top: 0.42rem;\r\n}\r\n\r\n.right {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.flip {\r\n    transform: scaleX(-1);\r\n}\r\n\r\n/*End of Images*/\r\n\r\n/*Grid Components*/\r\n.p1,\r\n.p2 {\r\n    border: 0.5px solid var(--line-color);\r\n}\r\n\r\n.p1 {\r\n    background-color: var(--grid1);\r\n}\r\n\r\n.p2 {\r\n    background-color: var(--grid2);\r\n}\r\n\r\n.grid-ship {\r\n    background-color: brown;\r\n}\r\n\r\n.grid-hit {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: contain;\r\n}\r\n\r\n.p1.grid-miss {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");/*radial-gradient(rgb(255, 202, 202) 40%, var(--grid1));*/\r\n    background-size: contain;\r\n}\r\n\r\n.p2.grid-miss {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")/*radial-gradient(rgb(255, 202, 202) 40%, var(--grid2))*/;\r\n    background-size: contain;\r\n}\r\n\r\n.grid-target,\r\n.grid-up,\r\n.grid-right {\r\n    width: calc(var(--grid-size) / 10);\r\n    height: calc(var(--grid-size) / 10);\r\n}\r\n\r\n.grid-up {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.grid-right {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.grid-target {\r\n    filter: invert();\r\n    background-color: cyan;\r\n    border-radius: calc(var(--grid-size) / 10);\r\n}\r\n\r\n#grid img {\r\n    pointer-events: none;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n/*End of Grid Components*/\r\n\r\n/* Buttons */\r\n#winner-box button,\r\n.title-screen button {\r\n    height: 5rem;\r\n    width: 10rem;\r\n    font-size: 30px;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#player-icon-container button {\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 25px;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n#player-1.highlight {\r\n    color: var(--grid2);\r\n    background-color: var(--grid1);\r\n    transform: scale(1.1);\r\n}\r\n\r\n#player-2.highlight {\r\n    color: var(--grid1);\r\n    background-color: var(--grid2);\r\n    transform: scale(1.1);\r\n}\r\n\r\n#ship-menu button {\r\n    height: 50px;\r\n    width: fit-content;\r\n    background-color: rgba(0,0,0,0);\r\n    white-space: pre;\r\n}\r\n\r\n@media(min-width: 500px) {\r\n    #ship-menu button:not(:first-child):not(:last-child) {\r\n        padding-left: 1rem;\r\n        padding-right: 1rem;\r\n    } \r\n}\r\n\r\n\r\n\r\n#player-icon-container button:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 5px 1px black;\r\n    transform: scale(1.2);\r\n}\r\n\r\n#winner-box button:hover,\r\n#ship-menu button:hover,\r\n.title-screen button:hover {\r\n    transform: scale(1.05);\r\n    filter: saturate(10%);\r\n    cursor: pointer;\r\n}\r\n\r\n#ship-menu button:first-child:hover.open,\r\n#ship-menu button:last-child:hover.flip{\r\n    /*rotate button only*/\r\n    transform: scale(-1.05, 1.05) !important;\r\n}\r\n\r\n#grid * {\r\n    cursor: none !important;\r\n}\r\n\r\n#place-ship {\r\n    width: 50px !important;\r\n    text-align: start;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: 50%;\r\n    background-position: bottom right;\r\n    padding: 0.5rem 0 2rem 0 !important;\r\n}\r\n\r\n#place-ship.open {\r\n    background-size: cover;\r\n    transform: rotate(180deg);\r\n}\r\n/* End of Buttons*/\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --grid-font-c: rgb(52, 41, 51);\r\n    --box-color: rgba(240, 255, 255, 0.9);\r\n    --grid1: darkblue;\r\n    --grid2: rgb(0, 140, 255); \r\n    --line-color: rgb(90, 116, 232);\r\n    --outline-color: rgb(53, 74, 94); \r\n    --box-outline: 2px solid rgba(255, 255, 255, 0.8);\r\n\r\n    --grid-size: max(300px, 30vw);\r\n    --grid-size-wide: min(450px, 30vw);\r\n    --grid-size-mini: 150px;\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: var(--grid-font-c);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Containers */\r\n\r\n.title-screen,\r\n#title-screen-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n#title-screen-menu{\r\n    gap: 5rem;\r\n    padding: 1rem;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#title-screen-btns {\r\n    display: flex;\r\n    gap: 5rem;\r\n}\r\n\r\n@media (max-width: 450px){\r\n    #title-screen-btns {\r\n        flex-direction: column;\r\n        padding-bottom: 5rem;\r\n    }\r\n    .title-screen h1 {\r\n        font-size: 45px !important;\r\n    }\r\n}\r\n\r\n#winner-box button,\r\n#winner-box,\r\n.title-screen button,\r\n#title-screen-menu,\r\n#player-icon-container,\r\n#status-box,\r\n#ship-menu,\r\n#grid-2,\r\n#grid {\r\n    box-shadow: 0px 0px 0px 5px var(--outline-color);\r\n    border-radius: 10px; /*not grid*/\r\n}\r\n\r\n#container {\r\n    overflow-x: hidden;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: url('./img/bubbles-bg.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#player-icon-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    margin: 0.3rem auto 1rem auto;\r\n    background-color: var(--box-color);\r\n    width: calc(var(--grid-size) * 1.1);\r\n}\r\n\r\n#grid-2,\r\n#grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    grid-template-rows: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    margin: 1rem auto;\r\n    width: var(--grid-size);\r\n    height: var(--grid-size);\r\n    transform: rotate(270deg);\r\n    border-radius: 1px !important;\r\n    background-color: var(--grid2);\r\n}\r\n\r\n#grid-2 {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.mini-grid {\r\n    grid-template-columns: repeat(auto-fit, calc(var(--grid-size-mini) / 10)) !important;\r\n    grid-template-rows: repeat(auto-fit, calc(var(--grid-size-mini) / 10)) !important;\r\n    width: var(--grid-size-mini) !important;\r\n    height: var(--grid-size-mini) !important;\r\n}\r\n\r\n#announcement {\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    margin-left: -35%;\r\n    margin-top: -5vh;\r\n    padding-top: 3vh;\r\n    height: 10vh;\r\n    width: 70%;\r\n    text-align: center;\r\n    color: var(--grid-font-c);\r\n    font-size: 17px;\r\n    font-family: monofett;\r\n    background-color: var(--box-color);\r\n    box-shadow: 0px 0px 5px 5px white;\r\n    outline: var(--box-outline);\r\n    border-radius: 10px;\r\n    z-index: 1;\r\n}\r\n\r\n@media(max-width: 420px){\r\n    #announcement {\r\n        height: 15vh !important;\r\n        white-space: pre;\r\n    }\r\n\r\n    #status-box {\r\n        padding: 0.5rem 0 !important;\r\n    }\r\n}\r\n\r\n#status-box {\r\n    width: var(--grid-size);\r\n    margin: 1rem auto;\r\n    padding: 2.5rem 0;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#ship-menu {\r\n    position: sticky;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    height: 75px;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n    padding: 0 0.5rem;\r\n    background-color: var(--box-color);\r\n    border-radius: 0 10px 10px 0;\r\n}\r\n\r\n@media(min-width: 1000px){\r\n    #ship-menu {\r\n        padding: 0 2rem;\r\n        gap: 2.5rem;\r\n    }\r\n}\r\n\r\n#winner-box {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    height: fit-content;\r\n    width: max(250px, 50vw);\r\n    gap: 1rem;\r\n    margin: 1rem auto;\r\n    background-color: var(--box-color);\r\n    font-family: monofett;\r\n    letter-spacing: 1px;;\r\n}\r\n\r\n/* End of Containers*/\r\n\r\n/* Text */\r\n#grid-title {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.title-screen h1 {\r\n    padding-top: 1.5rem;\r\n    font-size: 60px;\r\n    font-family: monofett;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n#status-box h2 {\r\n    padding: 0.25rem 2.5rem;\r\n}\r\n/*End of Text*/\r\n\r\n/*Images*/\r\n#status-box div {\r\n    display: inline-block;\r\n    height: 25px;\r\n    width: 25px;\r\n    vertical-align: bottom;\r\n    border: 2px solid var(--outline-color);\r\n}\r\n\r\n#status-box img {\r\n    width: 30px;\r\n    vertical-align: bottom;\r\n}\r\n\r\n#ship-menu div.grid-ship {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    border: 2px solid var(--outline-color);\r\n}\r\n\r\n@media (max-width: 372px) {\r\n    #ship-menu div.grid-ship{\r\n        width: 11px;\r\n        height: 11px;\r\n        border: 1px solid var(--outline-color);\r\n    }\r\n}\r\n\r\n#ship-menu img {\r\n    padding-top: 0.42rem;\r\n}\r\n\r\n.right {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.flip {\r\n    transform: scaleX(-1);\r\n}\r\n\r\n/*End of Images*/\r\n\r\n/*Grid Components*/\r\n.p1,\r\n.p2 {\r\n    border: 0.5px solid var(--line-color);\r\n}\r\n\r\n.p1 {\r\n    background-color: var(--grid1);\r\n}\r\n\r\n.p2 {\r\n    background-color: var(--grid2);\r\n}\r\n\r\n.grid-ship {\r\n    background-color: brown;\r\n}\r\n\r\n.grid-hit {\r\n    background: url('./img/explosion-ship.png');\r\n    background-size: contain;\r\n}\r\n\r\n.p1.grid-miss {\r\n    background: url('./img/whirlpool-miss-dark.png');/*radial-gradient(rgb(255, 202, 202) 40%, var(--grid1));*/\r\n    background-size: contain;\r\n}\r\n\r\n.p2.grid-miss {\r\n    background: url('./img/whirlpool-miss-light.png')/*radial-gradient(rgb(255, 202, 202) 40%, var(--grid2))*/;\r\n    background-size: contain;\r\n}\r\n\r\n.grid-target,\r\n.grid-up,\r\n.grid-right {\r\n    width: calc(var(--grid-size) / 10);\r\n    height: calc(var(--grid-size) / 10);\r\n}\r\n\r\n.grid-up {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.grid-right {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.grid-target {\r\n    filter: invert();\r\n    background-color: cyan;\r\n    border-radius: calc(var(--grid-size) / 10);\r\n}\r\n\r\n#grid img {\r\n    pointer-events: none;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n/*End of Grid Components*/\r\n\r\n/* Buttons */\r\n#winner-box button,\r\n.title-screen button {\r\n    height: 5rem;\r\n    width: 10rem;\r\n    font-size: 30px;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#player-icon-container button {\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 25px;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n#player-1.highlight {\r\n    color: var(--grid2);\r\n    background-color: var(--grid1);\r\n    transform: scale(1.1);\r\n}\r\n\r\n#player-2.highlight {\r\n    color: var(--grid1);\r\n    background-color: var(--grid2);\r\n    transform: scale(1.1);\r\n}\r\n\r\n#ship-menu button {\r\n    height: 50px;\r\n    width: fit-content;\r\n    background-color: rgba(0,0,0,0);\r\n    white-space: pre;\r\n}\r\n\r\n@media(min-width: 500px) {\r\n    #ship-menu button:not(:first-child):not(:last-child) {\r\n        padding-left: 1rem;\r\n        padding-right: 1rem;\r\n    } \r\n}\r\n\r\n\r\n\r\n#player-icon-container button:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 5px 1px black;\r\n    transform: scale(1.2);\r\n}\r\n\r\n#winner-box button:hover,\r\n#ship-menu button:hover,\r\n.title-screen button:hover {\r\n    transform: scale(1.05);\r\n    filter: saturate(10%);\r\n    cursor: pointer;\r\n}\r\n\r\n#ship-menu button:first-child:hover.open,\r\n#ship-menu button:last-child:hover.flip{\r\n    /*rotate button only*/\r\n    transform: scale(-1.05, 1.05) !important;\r\n}\r\n\r\n#grid * {\r\n    cursor: none !important;\r\n}\r\n\r\n#place-ship {\r\n    width: 50px !important;\r\n    text-align: start;\r\n    background: url('./img/chevron-right-box.png');\r\n    background-repeat: no-repeat;\r\n    background-size: 50%;\r\n    background-position: bottom right;\r\n    padding: 0.5rem 0 2rem 0 !important;\r\n}\r\n\r\n#place-ship.open {\r\n    background-size: cover;\r\n    transform: rotate(180deg);\r\n}\r\n/* End of Buttons*/\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _img_chevron_right_box_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/chevron-right-box.png */ "./src/img/chevron-right-box.png");
/* harmony import */ var _img_rotate_left_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/rotate-left.png */ "./src/img/rotate-left.png");






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
            rotateInner.setAttribute('src', `${_img_rotate_left_png__WEBPACK_IMPORTED_MODULE_4__}`);
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
            
            hideShipBtns(...btnsToAppend);
            // events //
            addShipButtonEvents();
            addClosePlaceShipEvent();
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
// add amount of ships to the buttons

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxXQUFXLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxXQUFXLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxhQUFhLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyx3QkFBd0IsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxXQUFXLE1BQU0sVUFBVSxVQUFVLFVB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Q0E7QUFDQTtBQUNBLG1DQUFtQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtBQUMvRDtBQUNBO0FBQ0Esc0NBQXNDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7QUFDNUQ7QUFDQTtBQUNBLHFDQUFxQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7QUFDckQ7QUFDQTtBQUNBLHNDQUFzQyxJQUFJLEVBQUUsSUFBSTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaURBQVUsQ0FBQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELFFBQVE7QUFDcEUsNERBQTRELFFBQVE7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLGFBQWEsRUFBQztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3B5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNpQjtBQUNOO0FBQ2pDO0FBQ0E7QUFDQSxrQkFBa0IsdURBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvYnViYmxlcy1iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9leHBsb3Npb24tc2hpcC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy93aGlybHBvb2wtbWlzcy1kYXJrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL3doaXJscG9vbC1taXNzLWxpZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1nL2NoZXZyb24tcmlnaHQtYm94LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0tZ3JpZC1mb250LWM6IHJnYig1MiwgNDEsIDUxKTtcXHJcXG4gICAgLS1ib3gtY29sb3I6IHJnYmEoMjQwLCAyNTUsIDI1NSwgMC45KTtcXHJcXG4gICAgLS1ncmlkMTogZGFya2JsdWU7XFxyXFxuICAgIC0tZ3JpZDI6IHJnYigwLCAxNDAsIDI1NSk7IFxcclxcbiAgICAtLWxpbmUtY29sb3I6IHJnYig5MCwgMTE2LCAyMzIpO1xcclxcbiAgICAtLW91dGxpbmUtY29sb3I6IHJnYig1MywgNzQsIDk0KTsgXFxyXFxuICAgIC0tYm94LW91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuXFxyXFxuICAgIC0tZ3JpZC1zaXplOiBtYXgoMzAwcHgsIDMwdncpO1xcclxcbiAgICAtLWdyaWQtc2l6ZS13aWRlOiBtaW4oNDUwcHgsIDMwdncpO1xcclxcbiAgICAtLWdyaWQtc2l6ZS1taW5pOiAxNTBweDtcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmlkLWZvbnQtYyk7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWluZXJzICovXFxyXFxuXFxyXFxuLnRpdGxlLXNjcmVlbixcXHJcXG4jdGl0bGUtc2NyZWVuLW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlLXNjcmVlbi1tZW51e1xcclxcbiAgICBnYXA6IDVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZS1zY3JlZW4tYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KXtcXHJcXG4gICAgI3RpdGxlLXNjcmVlbi1idG5zIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAudGl0bGUtc2NyZWVuIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItYm94IGJ1dHRvbixcXHJcXG4jd2lubmVyLWJveCxcXHJcXG4udGl0bGUtc2NyZWVuIGJ1dHRvbixcXHJcXG4jdGl0bGUtc2NyZWVuLW1lbnUsXFxyXFxuI3BsYXllci1pY29uLWNvbnRhaW5lcixcXHJcXG4jc3RhdHVzLWJveCxcXHJcXG4jc2hpcC1tZW51LFxcclxcbiNncmlkLTIsXFxyXFxuI2dyaWQge1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCA1cHggdmFyKC0tb3V0bGluZS1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qbm90IGdyaWQqL1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItaWNvbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwLjNyZW0gYXV0byAxcmVtIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWdyaWQtc2l6ZSkgKiAxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZC0yLFxcclxcbiNncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBjYWxjKHZhcigtLWdyaWQtc2l6ZSkgLyAxMCkpO1xcclxcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG4gICAgd2lkdGg6IHZhcigtLWdyaWQtc2l6ZSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tZ3JpZC1zaXplKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQyKTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQtMiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5taW5pLWdyaWQge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgY2FsYyh2YXIoLS1ncmlkLXNpemUtbWluaSkgLyAxMCkpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBjYWxjKHZhcigtLWdyaWQtc2l6ZS1taW5pKSAvIDEwKSkgIWltcG9ydGFudDtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWdyaWQtc2l6ZS1taW5pKSAhaW1wb3J0YW50O1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWdyaWQtc2l6ZS1taW5pKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jYW5ub3VuY2VtZW50IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTM1JTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTV2aDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDN2aDtcXHJcXG4gICAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmlkLWZvbnQtYyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9mZXR0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggd2hpdGU7XFxyXFxuICAgIG91dGxpbmU6IHZhcigtLWJveC1vdXRsaW5lKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNDIwcHgpe1xcclxcbiAgICAjYW5ub3VuY2VtZW50IHtcXHJcXG4gICAgICAgIGhlaWdodDogMTV2aCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjc3RhdHVzLWJveCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiNzdGF0dXMtYm94IHtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWdyaWQtc2l6ZSk7XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyLjVyZW0gMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtbWVudSB7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1pbi13aWR0aDogMTAwMHB4KXtcXHJcXG4gICAgI3NoaXAtbWVudSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDJyZW07XFxyXFxuICAgICAgICBnYXA6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4jd2lubmVyLWJveCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogbWF4KDI1MHB4LCA1MHZ3KTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9mZXR0O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4OztcXHJcXG59XFxyXFxuXFxyXFxuLyogRW5kIG9mIENvbnRhaW5lcnMqL1xcclxcblxcclxcbi8qIFRleHQgKi9cXHJcXG4jZ3JpZC10aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtc2NyZWVuIGgxIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub2ZldHQ7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHVzLWJveCBoMiB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMi41cmVtO1xcclxcbn1cXHJcXG4vKkVuZCBvZiBUZXh0Ki9cXHJcXG5cXHJcXG4vKkltYWdlcyovXFxyXFxuI3N0YXR1cy1ib3ggZGl2IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1vdXRsaW5lLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXR1cy1ib3ggaW1nIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbiNzaGlwLW1lbnUgZGl2LmdyaWQtc2hpcCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tb3V0bGluZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNzJweCkge1xcclxcbiAgICAjc2hpcC1tZW51IGRpdi5ncmlkLXNoaXB7XFxyXFxuICAgICAgICB3aWR0aDogMTFweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTFweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW91dGxpbmUtY29sb3IpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiNzaGlwLW1lbnUgaW1nIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDAuNDJyZW07XFxyXFxufVxcclxcblxcclxcbi5yaWdodCB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsaXAge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxyXFxufVxcclxcblxcclxcbi8qRW5kIG9mIEltYWdlcyovXFxyXFxuXFxyXFxuLypHcmlkIENvbXBvbmVudHMqL1xcclxcbi5wMSxcXHJcXG4ucDIge1xcclxcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucDEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkMSk7XFxyXFxufVxcclxcblxcclxcbi5wMiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtc2hpcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1oaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5wMS5ncmlkLW1pc3Mge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpOy8qcmFkaWFsLWdyYWRpZW50KHJnYigyNTUsIDIwMiwgMjAyKSA0MCUsIHZhcigtLWdyaWQxKSk7Ki9cXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4ucDIuZ3JpZC1taXNzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKS8qcmFkaWFsLWdyYWRpZW50KHJnYigyNTUsIDIwMiwgMjAyKSA0MCUsIHZhcigtLWdyaWQyKSkqLztcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC10YXJnZXQsXFxyXFxuLmdyaWQtdXAsXFxyXFxuLmdyaWQtcmlnaHQge1xcclxcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1ncmlkLXNpemUpIC8gMTApO1xcclxcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtdXAge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXJpZ2h0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtdGFyZ2V0IHtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ncmlkLXNpemUpIC8gMTApO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCBpbWcge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKkVuZCBvZiBHcmlkIENvbXBvbmVudHMqL1xcclxcblxcclxcbi8qIEJ1dHRvbnMgKi9cXHJcXG4jd2lubmVyLWJveCBidXR0b24sXFxyXFxuLnRpdGxlLXNjcmVlbiBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLWljb24tY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItMS5oaWdobGlnaHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JpZDIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkMSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci0yLmhpZ2hsaWdodCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmlkMSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQyKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1tZW51IGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWluLXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAjc2hpcC1tZW51IGJ1dHRvbjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICAgIH0gXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNwbGF5ZXItaWNvbi1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggYmxhY2s7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3dpbm5lci1ib3ggYnV0dG9uOmhvdmVyLFxcclxcbiNzaGlwLW1lbnUgYnV0dG9uOmhvdmVyLFxcclxcbi50aXRsZS1zY3JlZW4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgxMCUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaGlwLW1lbnUgYnV0dG9uOmZpcnN0LWNoaWxkOmhvdmVyLm9wZW4sXFxyXFxuI3NoaXAtbWVudSBidXR0b246bGFzdC1jaGlsZDpob3Zlci5mbGlwe1xcclxcbiAgICAvKnJvdGF0ZSBidXR0b24gb25seSovXFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLTEuMDUsIDEuMDUpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNncmlkICoge1xcclxcbiAgICBjdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYWNlLXNoaXAge1xcclxcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDAgMnJlbSAwICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNwbGFjZS1zaGlwLm9wZW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbn1cXHJcXG4vKiBFbmQgb2YgQnV0dG9ucyovXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxpREFBaUQ7O0lBRWpELDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMsdUJBQXVCOztJQUV2Qix5Q0FBeUM7SUFDekMseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQSxlQUFlOztBQUVmOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7O0FBRUE7Ozs7Ozs7OztJQVNJLGdEQUFnRDtJQUNoRCxtQkFBbUIs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O0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLHlCQUF5Qjs7QUFFekIsWUFBWTtBQUNaOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7QUFDSjs7OztBQUlBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxxQkFBcUI7QUFDekI7O0FBRUE7OztJQUdJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtREFBOEM7SUFDOUMsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtBQUM3QjtBQUNBLGtCQUFrQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tZ3JpZC1mb250LWM6IHJnYig1MiwgNDEsIDUxKTtcXHJcXG4gICAgLS1ib3gtY29sb3I6IHJnYmEoMjQwLCAyNTUsIDI1NSwgMC45KTtcXHJcXG4gICAgLS1ncmlkMTogZGFya2JsdWU7XFxyXFxuICAgIC0tZ3JpZDI6IHJnYigwLCAxNDAsIDI1NSk7IFxcclxcbiAgICAtLWxpbmUtY29sb3I6IHJnYig5MCwgMTE2LCAyMzIpO1xcclxcbiAgICAtLW91dGxpbmUtY29sb3I6IHJnYig1MywgNzQsIDk0KTsgXFxyXFxuICAgIC0tYm94LW91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuXFxyXFxuICAgIC0tZ3JpZC1zaXplOiBtYXgoMzAwcHgsIDMwdncpO1xcclxcbiAgICAtLWdyaWQtc2l6ZS13aWRlOiBtaW4oNDUwcHgsIDMwdncpO1xcclxcbiAgICAtLWdyaWQtc2l6ZS1taW5pOiAxNTBweDtcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmlkLWZvbnQtYyk7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWluZXJzICovXFxyXFxuXFxyXFxuLnRpdGxlLXNjcmVlbixcXHJcXG4jdGl0bGUtc2NyZWVuLW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlLXNjcmVlbi1tZW51e1xcclxcbiAgICBnYXA6IDVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZS1zY3JlZW4tYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KXtcXHJcXG4gICAgI3RpdGxlLXNjcmVlbi1idG5zIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAudGl0bGUtc2NyZWVuIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItYm94IGJ1dHRvbixcXHJcXG4jd2lubmVyLWJveCxcXHJcXG4udGl0bGUtc2NyZWVuIGJ1dHRvbixcXHJcXG4jdGl0bGUtc2NyZWVuLW1lbnUsXFxyXFxuI3BsYXllci1pY29uLWNvbnRhaW5lcixcXHJcXG4jc3RhdHVzLWJveCxcXHJcXG4jc2hpcC1tZW51LFxcclxcbiNncmlkLTIsXFxyXFxuI2dyaWQge1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCA1cHggdmFyKC0tb3V0bGluZS1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qbm90IGdyaWQqL1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvYnViYmxlcy1iZy5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1pY29uLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAuM3JlbSBhdXRvIDFyZW0gYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAqIDEuMSk7XFxyXFxufVxcclxcblxcclxcbiNncmlkLTIsXFxyXFxuI2dyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgY2FsYyh2YXIoLS1ncmlkLXNpemUpIC8gMTApKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKSk7XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICB3aWR0aDogdmFyKC0tZ3JpZC1zaXplKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1ncmlkLXNpemUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcHggIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JpZDIpO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZC0yIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbmktZ3JpZCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBjYWxjKHZhcigtLWdyaWQtc2l6ZS1taW5pKSAvIDEwKSkgIWltcG9ydGFudDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIGNhbGModmFyKC0tZ3JpZC1zaXplLW1pbmkpIC8gMTApKSAhaW1wb3J0YW50O1xcclxcbiAgICB3aWR0aDogdmFyKC0tZ3JpZC1zaXplLW1pbmkpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tZ3JpZC1zaXplLW1pbmkpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNhbm5vdW5jZW1lbnQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMzUlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNXZoO1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3ZoO1xcclxcbiAgICBoZWlnaHQ6IDEwdmg7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaWQtZm9udC1jKTtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub2ZldHQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCB3aGl0ZTtcXHJcXG4gICAgb3V0bGluZTogdmFyKC0tYm94LW91dGxpbmUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA0MjBweCl7XFxyXFxuICAgICNhbm5vdW5jZW1lbnQge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNXZoICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNzdGF0dXMtYm94IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuI3N0YXR1cy1ib3gge1xcclxcbiAgICB3aWR0aDogdmFyKC0tZ3JpZC1zaXplKTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDIuNXJlbSAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1tZW51IHtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWluLXdpZHRoOiAxMDAwcHgpe1xcclxcbiAgICAjc2hpcC1tZW51IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG4gICAgICAgIGdhcDogMi41cmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItYm94IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiBtYXgoMjUwcHgsIDUwdncpO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub2ZldHQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbmQgb2YgQ29udGFpbmVycyovXFxyXFxuXFxyXFxuLyogVGV4dCAqL1xcclxcbiNncmlkLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1zY3JlZW4gaDEge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDYwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vZmV0dDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzdGF0dXMtYm94IGgyIHtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbSAyLjVyZW07XFxyXFxufVxcclxcbi8qRW5kIG9mIFRleHQqL1xcclxcblxcclxcbi8qSW1hZ2VzKi9cXHJcXG4jc3RhdHVzLWJveCBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW91dGxpbmUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHVzLWJveCBpbWcge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtbWVudSBkaXYuZ3JpZC1zaGlwIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1vdXRsaW5lLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM3MnB4KSB7XFxyXFxuICAgICNzaGlwLW1lbnUgZGl2LmdyaWQtc2hpcHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb3V0bGluZS1jb2xvcik7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtbWVudSBpbWcge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMC40MnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxpcCB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLypFbmQgb2YgSW1hZ2VzKi9cXHJcXG5cXHJcXG4vKkdyaWQgQ29tcG9uZW50cyovXFxyXFxuLnAxLFxcclxcbi5wMiB7XFxyXFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wMSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JpZDIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1zaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWhpdCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvZXhwbG9zaW9uLXNoaXAucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnAxLmdyaWQtbWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvd2hpcmxwb29sLW1pc3MtZGFyay5wbmcnKTsvKnJhZGlhbC1ncmFkaWVudChyZ2IoMjU1LCAyMDIsIDIwMikgNDAlLCB2YXIoLS1ncmlkMSkpOyovXFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnAyLmdyaWQtbWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvd2hpcmxwb29sLW1pc3MtbGlnaHQucG5nJykvKnJhZGlhbC1ncmFkaWVudChyZ2IoMjU1LCAyMDIsIDIwMikgNDAlLCB2YXIoLS1ncmlkMikpKi87XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtdGFyZ2V0LFxcclxcbi5ncmlkLXVwLFxcclxcbi5ncmlkLXJpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWdyaWQtc2l6ZSkgLyAxMCk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXVwIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1yaWdodCB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXRhcmdldCB7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQgaW1nIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypFbmQgb2YgR3JpZCBDb21wb25lbnRzKi9cXHJcXG5cXHJcXG4vKiBCdXR0b25zICovXFxyXFxuI3dpbm5lci1ib3ggYnV0dG9uLFxcclxcbi50aXRsZS1zY3JlZW4gYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1pY29uLWNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLTEuaGlnaGxpZ2h0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaWQyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JpZDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItMi5oaWdobGlnaHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JpZDEpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkMik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtbWVudSBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1pbi13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgI3NoaXAtbWVudSBidXR0b246bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICB9IFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jcGxheWVyLWljb24tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IGJsYWNrO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItYm94IGJ1dHRvbjpob3ZlcixcXHJcXG4jc2hpcC1tZW51IGJ1dHRvbjpob3ZlcixcXHJcXG4udGl0bGUtc2NyZWVuIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIGZpbHRlcjogc2F0dXJhdGUoMTAlKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1tZW51IGJ1dHRvbjpmaXJzdC1jaGlsZDpob3Zlci5vcGVuLFxcclxcbiNzaGlwLW1lbnUgYnV0dG9uOmxhc3QtY2hpbGQ6aG92ZXIuZmxpcHtcXHJcXG4gICAgLypyb3RhdGUgYnV0dG9uIG9ubHkqL1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLjA1LCAxLjA1KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCAqIHtcXHJcXG4gICAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNwbGFjZS1zaGlwIHtcXHJcXG4gICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvY2hldnJvbi1yaWdodC1ib3gucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDJyZW0gMCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jcGxhY2Utc2hpcC5vcGVuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG59XFxyXFxuLyogRW5kIG9mIEJ1dHRvbnMqL1xcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGJhdHRsZVNoaXBzID0gKCgpID0+IHtcclxuICAgIC8vRmFjdG9yaWVzXHJcbiAgICBjb25zdCBzaGlwID0gKGNvb3JkcywgbGVuZ3RoLCB0aW1lc0hpdCwgc3VuaykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhpdCA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgdGFyZ2V0LnRpbWVzSGl0Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc1N1bmsgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQudGltZXNIaXQgPj0gdGFyZ2V0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnN1bmsgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgY29vcmRzLCBsZW5ndGgsIHRpbWVzSGl0LCBzdW5rLCBoaXQgLGlzU3VuaywgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnYW1lQm9hcmQgPSAoZ3JpZCwgaXNBaSA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgLy9ib2FyZCBvYmplY3RzXHJcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBbXTtcclxuICAgICAgICBjb25zdCB1bnBsYWNlZFNoaXBzID0gW1xyXG4gICAgICAgICAgICB7bmFtZTogJ2NhcnJpZXInLCBsZW5ndGg6IDUsIG51bWJlcjogMX0sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnYmF0dGxlc2hpcCcsIGxlbmd0aDogNCwgbnVtYmVyOiAxfSxcclxuICAgICAgICAgICAge25hbWU6ICdzdWJtYXJpbmUnLCBsZW5ndGg6IDMsIG51bWJlcjogNH0sXHJcbiAgICAgICAgICAgIHtuYW1lOiAncGF0cm9sIGJvYXQnLCBsZW5ndGg6IDIsIG51bWJlcjogM31cclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGF0dGFja0xvZyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHBsYWNlUGhhc2UgPSBbdHJ1ZV07XHJcblxyXG4gICAgICAgIGNvbnN0IGdlbmVyYXRlR3JpZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZE1hcCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSA5OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8PSA5OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRNYXAucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGU6IGBbJHtpfSwke2p9XWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBIZXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGl0SGVyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGdyaWRNYXA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBncmlkID0gZ2VuZXJhdGVHcmlkKCk7XHJcblxyXG4gICAgICAgIC8vYm9hcmQgbWFuaXB1bGF0b3JzXHJcbiAgICAgICAgY29uc3Qgc2V0Qm9hcmQgPSAoY29vcmRzLCBwcm9wKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwb3RzID0gZ3JpZC5maWx0ZXIoY29vcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvb3JkcyA9PT0gY29vcmQuY29vcmRpbmF0ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYocHJvcCA9PT0gJ3NoaXBIZXJlJykgcmV0dXJuIHNwb3RzWzBdLnNoaXBIZXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gc3BvdHNbMF0uaGl0SGVyZSA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlU2hpcGZyb21TdG9yYWdlID0gKGxlbmd0aCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2gobGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogdW5wbGFjZWRTaGlwc1swXS5udW1iZXItLVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiB1bnBsYWNlZFNoaXBzWzFdLm51bWJlci0tXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiB1bnBsYWNlZFNoaXBzWzJdLm51bWJlci0tXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHVucGxhY2VkU2hpcHNbM10ubnVtYmVyLS1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gZ3JpZCBpdGVyYXRvcnMgLy9cclxuICAgICAgICBjb25zdCBjaGVja0dyaWRGb3JTaGlwID0gKGNvb3JkcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcG90cyA9IGdyaWQuZmlsdGVyKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNvb3JkLnNoaXBIZXJlICYmIGNvb3JkLmNvb3JkaW5hdGUgPT09IGNvb3JkcyApIHJldHVybiBjb29yZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHNwb3RzLmxlbmd0aCA8IDEgfHwgIXNwb3RzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBzcG90c1swXS5zaGlwSGVyZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjaGVja0dyaWRGb3JIaXQgPSAoY29vcmRzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwb3RzID0gZ3JpZC5maWx0ZXIoY29vcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoY29vcmQuaGl0SGVyZSAmJiBjb29yZC5jb29yZGluYXRlID09PSBjb29yZHMpIHJldHVybiBjb29yZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHNwb3RzLmxlbmd0aCA8IDEgfHwgIXNwb3RzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBzcG90c1swXS5oaXRIZXJlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrU3RvcmFnZUZvclNoaXAgPSAobGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZVNoaXAgPSBbXVxyXG4gICAgICAgICAgICB1bnBsYWNlZFNoaXBzLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihsZW5ndGggPT09IHNoaXAubGVuZ3RoICYmIHNoaXAubnVtYmVyID4gMCkgYXZhaWxhYmxlU2hpcC5wdXNoKHNoaXApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYoYXZhaWxhYmxlU2hpcC5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hlY2tOdW1PZlN1bmtTaGlwcyA9IChzdW5rU2hpcHMgPSBbXSkgPT4ge1xyXG4gICAgICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoc2hpcC5zdW5rKSBzdW5rU2hpcHMucHVzaChzaGlwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdW5rU2hpcHMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0RGlyZWN0aW9ucyA9IChsZW5ndGgsIHgsIHksIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgW2NoZWNrSCwgY2hlY2tWXSA9IFtmYWxzZSwgZmFsc2VdXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0Nvb3JkcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvcml6b250YWwgPSBgWyR7eCtpfSwke3l9XWA7XHJcbiAgICAgICAgICAgICAgICBpZihjaGVja0gpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tIID0gY2hlY2tHcmlkRm9yU2hpcChob3Jpem9udGFsKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVydGljYWwgPSBgWyR7eH0sJHt5K2l9XWA7XHJcbiAgICAgICAgICAgICAgICBpZihjaGVja1YpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tWID0gY2hlY2tHcmlkRm9yU2hpcCh2ZXJ0aWNhbClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3Jpem9udGFsID0gYFske3graX0sJHt5fV1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVydGljYWwgPSBgWyR7eH0sJHt5K2l9XWA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjaGVja0gpIHJldHVybiAnZXJyb3InO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEJvYXJkKGhvcml6b250YWwsICdzaGlwSGVyZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0Nvb3Jkcy5wdXNoKGhvcml6b250YWwpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNoZWNrVikgcmV0dXJuICdlcnJvcic7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Qm9hcmQodmVydGljYWwsICdzaGlwSGVyZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0Nvb3Jkcy5wdXNoKHZlcnRpY2FsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3Q29vcmRzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGdhbWUgZnVuY3Rpb25zIC8vXHJcbiAgICAgICAgY29uc3QgY2hhbmdlUGhhc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxTaGlwc0luU3RvcmFnZSA9IFtcclxuICAgICAgICAgICAgICAgIGNoZWNrU3RvcmFnZUZvclNoaXAoNSksXHJcbiAgICAgICAgICAgICAgICBjaGVja1N0b3JhZ2VGb3JTaGlwKDQpLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tTdG9yYWdlRm9yU2hpcCgzKSxcclxuICAgICAgICAgICAgICAgIGNoZWNrU3RvcmFnZUZvclNoaXAoMilcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRvdGFsU2hpcHNJblN0b3JhZ2UuZXZlcnkoc2hpcCA9PiAhc2hpcCkpIGVuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKGVuZCl7ICAgIFxyXG4gICAgICAgICAgICAgICAgcGxhY2VQaGFzZVswXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdlbmQgb2YgcGxhY2UgcGhhc2UnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAnY29udGludWUgcGxhY2luZyc7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcGxhY2VTaGlwID0gKGxlbmd0aCwgY29vcmRzLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgaWYoIWNoZWNrU3RvcmFnZUZvclNoaXAobGVuZ3RoKSB8fCAhcGxhY2VQaGFzZVswXSkgcmV0dXJuOyAvL1RCQVxyXG4gICAgICAgICAgICBjb25zdCBbeCwgeV0gPSBbTnVtYmVyKGNvb3Jkc1sxXSksIE51bWJlcihjb29yZHNbM10pXTtcclxuICAgICAgICAgICAgY29uc3QgY29uID1cclxuICAgICAgICAgICAgKHggKyBsZW5ndGggPj0gMTEgJiYgZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpXHJcbiAgICAgICAgICAgIHx8IFxyXG4gICAgICAgICAgICAoeSArIGxlbmd0aCA+PSAxMSAmJiBkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpO1xyXG4gICAgICAgICAgICBpZihjb24pIHJldHVybiAnZXJyb3InO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3Q29vcmRzID0gZ2V0RGlyZWN0aW9ucyhsZW5ndGgsIHgsIHksIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChuZXdDb29yZHMgPT09ICdlcnJvcicpIHJldHVybiAnZXJyb3InO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTaGlwID0gc2hpcChuZXdDb29yZHMsIGxlbmd0aCwgMCwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgcmVtb3ZlU2hpcGZyb21TdG9yYWdlKGxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNoYW5nZVBoYXNlKCk7XHJcbiAgICAgICAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdTaGlwO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFpUGxhY2VTaGlwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2hpcERpcmVjdGlvbjtcclxuICAgICAgICAgICAgY29uc3QgW2NoZWNrNSwgY2hlY2s0LCBjaGVjazMsIGNoZWNrMl0gPSBbXHJcbiAgICAgICAgICAgICAgICBjaGVja1N0b3JhZ2VGb3JTaGlwKDUpLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tTdG9yYWdlRm9yU2hpcCg0KSxcclxuICAgICAgICAgICAgICAgIGNoZWNrU3RvcmFnZUZvclNoaXAoMyksXHJcbiAgICAgICAgICAgICAgICBjaGVja1N0b3JhZ2VGb3JTaGlwKDIpXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgY29uc3QgW3gseSwgZGlyRGVjXSA9IFtcclxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkuOSksXHJcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5LjkpLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBpZihkaXJEZWMgPiAwLjQ5KSBzaGlwRGlyZWN0aW9uID0gJ3ZlcnRpY2FsJ1xyXG4gICAgICAgICAgICBlbHNlIHNoaXBEaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgICAgIGlmKGNoZWNrNSl7XHJcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoNSwgYFske3h9LCR7eX1dYCwgc2hpcERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNoZWNrNCl7XHJcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoNCwgYFske3h9LCR7eX1dYCwgc2hpcERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNoZWNrMyl7XHJcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoMywgYFske3h9LCR7eX1dYCwgc2hpcERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNoZWNrMil7XHJcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoMiwgYFske3h9LCR7eX1dYCwgc2hpcERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2hlY2s1IHx8IGNoZWNrNCB8fCBjaGVjazMgfHwgY2hlY2syKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhaVBsYWNlU2hpcCgpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3BsYWNlZCBhbGwgc2hpcHMnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZHMpID0+IHtcclxuICAgICAgICAgICAgaWYobG9zZSgpKSByZXR1cm4gJ2dhbWUgb3Zlcic7XHJcbiAgICAgICAgICAgIGlmKGNoZWNrR3JpZEZvckhpdChjb29yZHMpIHx8IHBsYWNlUGhhc2VbMF0pIHJldHVybjtcclxuICAgICAgICAgICAgc2V0Qm9hcmQoY29vcmRzLCAnaGl0SGVyZScpOyAgICAgIFxyXG4gICAgICAgICAgICBhdHRhY2tMb2cucHVzaChjb29yZHMpO1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrR3JpZEZvclNoaXAoY29vcmRzKSkgcmV0dXJuICdtaXNzJztcclxuICAgICAgICAgICAgbGV0IHRoaXNTaGlwO1xyXG4gICAgICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAuY29vcmRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb29yZHMgPT09IHNoaXAuY29vcmRzW2ldKSB0aGlzU2hpcCA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzU2hpcC5oaXQodGhpc1NoaXApO1xyXG4gICAgICAgICAgICB0aGlzU2hpcC5pc1N1bmsodGhpc1NoaXApO1xyXG4gICAgICAgICAgICByZXR1cm4gJ2hpdCc7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyaXNvbiA9IFtdO1xyXG4gICAgICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoc2hpcC5zdW5rKSBjb21wYXJpc29uLnB1c2goc2hpcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyaXNvbi5sZW5ndGggPj0gc2hpcHMubGVuZ3RoO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzQWksIFxyXG4gICAgICAgICAgICBncmlkLFxyXG4gICAgICAgICAgICBwbGFjZVNoaXAsXHJcbiAgICAgICAgICAgIGFpUGxhY2VTaGlwLFxyXG4gICAgICAgICAgICBzaGlwcyxcclxuICAgICAgICAgICAgdW5wbGFjZWRTaGlwcyxcclxuICAgICAgICAgICAgYXR0YWNrTG9nLFxyXG4gICAgICAgICAgICBjaGVja0dyaWRGb3JTaGlwLFxyXG4gICAgICAgICAgICBjaGVja0dyaWRGb3JIaXQsXHJcbiAgICAgICAgICAgIGNoZWNrTnVtT2ZTdW5rU2hpcHMsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBdHRhY2ssXHJcbiAgICAgICAgICAgIC8vcmVtb3ZlIGJlbG93XHJcbiAgICAgICAgICAgIHBsYWNlUGhhc2UsXHJcbiAgICAgICAgICAgIGxvc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGxheWVyID0gKHBsYXllck51bWJlciwgaXNBaSA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlyc3RUdXJuID0gKCgpID0+IHtcclxuICAgICAgICAgICAgaWYocGxheWVyTnVtYmVyID09PSAxKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBpc1R1cm4gPSBmaXJzdFR1cm4oKTsgXHJcblxyXG4gICAgICAgIGNvbnN0IHRha2VUdXJuID0gKGNvb3JkcywgYm9hcmQsIHVzZXIsIHRhcmdldCwgdGFyZ2V0Qm9hcmQpID0+IHtcclxuICAgICAgICAgICAgaWYoIXVzZXIuaXNUdXJuIHx8IGJvYXJkLmNoZWNrR3JpZEZvckhpdChjb29yZHMpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdHMgPT09ICdnYW1lIG92ZXInKSByZXR1cm4gJ2dhbWUgb3Zlcic7XHJcbiAgICAgICAgICAgIHVzZXIuaXNUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRhcmdldC5pc1R1cm4gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZih0YXJnZXQuaXNBaSkgYWlUYWtlc1R1cm4odGFyZ2V0Qm9hcmQsIHRhcmdldCwgdXNlciwgYm9hcmQpO1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0c30gYXQgJHtjb29yZHN9YDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhaVRha2VzVHVybiA9IChib2FyZCwgdXNlciwgdGFyZ2V0LCB0YXJnZXRCb2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBhaUNob29zZUNvb3Jkcyhib2FyZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSB0YWtlVHVybihjb29yZHMsIGJvYXJkLCB1c2VyLCB0YXJnZXQsIHRhcmdldEJvYXJkKTtcclxuICAgICAgICAgICAgaWYoIXJlc3VsdHMpIHJldHVybiBhaVRha2VzVHVybihib2FyZCx1c2VyLHRhcmdldCwgdGFyZ2V0Qm9hcmQpXHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWlDaG9vc2VDb29yZHMgPSAoYm9hcmQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tMYXN0SGl0ID0gYWlDaG9vc2VMYXN0SGl0KGJvYXJkKTtcclxuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gYWlDaG9vc2VEaXJlY3Rpb24oYm9hcmQsIGNoZWNrTGFzdEhpdCk7XHJcblxyXG4gICAgICAgICAgICBpZihjaGVja0xhc3RIaXQgJiYgYm9hcmQuY2hlY2tHcmlkRm9yU2hpcChjaGVja0xhc3RIaXQpICYmIGNvb3JkcykgcmV0dXJuIGNvb3JkcztcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOS45KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5LjkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBbJHt4fSwke3l9XWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhaUNob29zZUxhc3RIaXQgPSAoYm9hcmQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGl0cyA9IFtdO1xyXG4gICAgICAgICAgICBib2FyZC5hdHRhY2tMb2cuZm9yRWFjaChjb29yZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihib2FyZC5jaGVja0dyaWRGb3JTaGlwKGNvb3JkKSkgaGl0cy51bnNoaWZ0KGNvb3JkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKGhpdHMubGVuZ3RoIDwgMSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsaWRIaXRzID0gW107XHJcbiAgICAgICAgICAgIGhpdHMuZm9yRWFjaChoaXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoYWlDaG9vc2VEaXJlY3Rpb24oYm9hcmQsIGhpdCkpIHZhbGlkSGl0cy51bnNoaWZ0KGhpdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZih2YWxpZEhpdHMubGVuZ3RoIDwgMSkgcmV0dXJuO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRIaXRzWzBdO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFpQ2hvb3NlRGlyZWN0aW9uID0gKGJvYXJkLCBsYXN0SGl0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFsYXN0SGl0KSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBkaXI7IFxyXG4gICAgICAgICAgICBjb25zdCB1cCA9IE51bWJlcihsYXN0SGl0WzNdKSArIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvd24gPSBOdW1iZXIobGFzdEhpdFszXSkgLSAxO1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gTnVtYmVyKGxhc3RIaXRbMV0pIC0gMTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSBOdW1iZXIobGFzdEhpdFsxXSkgKyAxO1xyXG4gICAgICAgICAgICBjb25zdCBbY2hlY2tVcCwgY2hlY2tEb3duLCBjaGVja0xlZnQsIGNoZWNrUmlnaHRdID0gW1xyXG4gICAgICAgICAgICAgICAgYm9hcmQuY2hlY2tHcmlkRm9ySGl0KGBbJHtsYXN0SGl0WzFdfSwke3VwfV1gKSxcclxuICAgICAgICAgICAgICAgIGJvYXJkLmNoZWNrR3JpZEZvckhpdChgWyR7bGFzdEhpdFsxXX0sJHtkb3dufV1gKSxcclxuICAgICAgICAgICAgICAgIGJvYXJkLmNoZWNrR3JpZEZvckhpdChgWyR7bGVmdH0sJHtsYXN0SGl0WzNdfV1gKSxcclxuICAgICAgICAgICAgICAgIGJvYXJkLmNoZWNrR3JpZEZvckhpdChgWyR7cmlnaHR9LCR7bGFzdEhpdFszXX1dYCksXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBpZighY2hlY2tSaWdodCl7XHJcbiAgICAgICAgICAgICAgICBkaXIgPSBgWyR7cmlnaHR9LCR7bGFzdEhpdFszXX1dYDtcclxuICAgICAgICAgICAgfWVsc2UgaWYoIWNoZWNrVXApe1xyXG4gICAgICAgICAgICAgICAgZGlyID0gYFske2xhc3RIaXRbMV19LCR7dXB9XWA7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKCFjaGVja0xlZnQpe1xyXG4gICAgICAgICAgICAgICAgZGlyID0gYFske2xlZnR9LCR7bGFzdEhpdFszXX1dYDtcclxuICAgICAgICAgICAgfWVsc2UgaWYoIWNoZWNrRG93bil7XHJcbiAgICAgICAgICAgICAgICBkaXIgPSBgWyR7bGFzdEhpdFsxXX0sJHtkb3dufV1gO1xyXG4gICAgICAgICAgICB9ZWxzZSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighdmFsaWRhdGVDb29yZHMoZGlyKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiBkaXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGVDb29yZHMgPSAoZGlyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHggLyB5IGlzIGluIDAgLSA5IHJhbmdlIGlmIG5lZ2F0aXZlIG9yIDEwIGxlbmd0aCB3aWxsIGJlIGhpZ2hlciAvL1xyXG4gICAgICAgICAgICBpZihkaXIubGVuZ3RoICE9PSA1KSByZXR1cm47XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBwbGF5ZXJOdW1iZXIsIHRha2VUdXJuLCBhaVRha2VzVHVybiwgaXNUdXJuLCBpc0FpLCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hpcCxcclxuICAgICAgICBnYW1lQm9hcmQsXHJcbiAgICAgICAgcGxheWVyLFxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhdHRsZVNoaXBzOyIsImltcG9ydCBiYXR0bGVTaGlwcyBmcm9tIFwiLi9iYXR0bGVzaGlwXCI7XHJcbmltcG9ydCBhcnJvdyBmcm9tICcuL2ltZy9hcnJvdy5wbmcnO1xyXG5pbXBvcnQgY3Jvc3NoYWlyIGZyb20gJy4vaW1nL2Nyb3NzaGFpcnMtZ3BzLnBuZyc7XHJcbmltcG9ydCBjaGV2cm9uIGZyb20gJy4vaW1nL2NoZXZyb24tcmlnaHQtYm94LnBuZyc7XHJcbmltcG9ydCByb3RhdGVJY29uIGZyb20gJy4vaW1nL3JvdGF0ZS1sZWZ0LnBuZyc7XHJcblxyXG5jb25zdCB1c2VySW50ZXJmYWNlID0gKCgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzZXRDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlLXNjcmVlbicpO1xyXG4gICAgICAgICAgICB3aGlsZShjb250YWluZXIuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRNZW51Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUtc2NyZWVuLW1lbnUnKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJveCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRUaXRsZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1zY3JlZW4tbWVudScpO1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0JhdHRsZVNoaXBzJztcclxuICAgICAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLXNjcmVlbi1tZW51Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBidG5Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZS1zY3JlZW4tYnRucycpO1xyXG4gICAgICAgICAgICBjb25zdCBwdnBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgcHZwQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHZwLWJ0bicpO1xyXG4gICAgICAgICAgICBjb25zdCBwdm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgcHZtQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHZtLWJ0bicpO1xyXG4gICAgICAgICAgICBwdnBCdG4udGV4dENvbnRlbnQgPSAnVnMgUGxheWVyJztcclxuICAgICAgICAgICAgcHZtQnRuLnRleHRDb250ZW50ID0gJ1ZzIENvbXB1dGVyJztcclxuICAgICAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG4gICAgICAgICAgICBidG5Db250YWluZXIuYXBwZW5kKHB2cEJ0biwgcHZtQnRuKTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRFdmVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHB2cCA9IGdhbWVTY3JlZW4odHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHB2bSA9IGdhbWVTY3JlZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHZwLWJ0bicpXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwdnAubG9hZEdhbWVTY3JlZW4pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHZtLWJ0bicpXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwdm0ubG9hZEdhbWVTY3JlZW4pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGxvYWRUaXRsZVNjcmVlbiA9ICgpID0+IHsgXHJcbiAgICAgICAgICAgIHNldENvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICBhZGRNZW51Q29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgIGFkZFRpdGxlKCk7XHJcbiAgICAgICAgICAgIGFkZEJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgYWRkRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBsb2FkVGl0bGVTY3JlZW4sIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdhbWVTY3JlZW4gPSAocHZwID0gZmFsc2UpID0+IHsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNldFBsYXllciA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHB2cFxyXG4gICAgICAgICAgICAgICAgPyBiYXR0bGVTaGlwcy5wbGF5ZXIoMiwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICA6IGJhdHRsZVNoaXBzLnBsYXllcigyLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2V0Qm9hcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwdnBcclxuICAgICAgICAgICAgICAgID8gYmF0dGxlU2hpcHMuZ2FtZUJvYXJkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgOiBiYXR0bGVTaGlwcy5nYW1lQm9hcmQobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwbGF5ZXIxID0gYmF0dGxlU2hpcHMucGxheWVyKDEsIGZhbHNlKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXIyID0gc2V0UGxheWVyKCk7XHJcbiAgICAgICAgY29uc3QgYm9hcmQxID0gYmF0dGxlU2hpcHMuZ2FtZUJvYXJkKCk7XHJcbiAgICAgICAgY29uc3QgYm9hcmQyID0gc2V0Qm9hcmQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSB7XHJcbiAgICAgICAgICAgIHBsYXllcjogMSxcclxuICAgICAgICAgICAgaXNQbGFjaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICAgICAgICAgICAgcGhhc2U6ICdwbGFjZScgLy8gb3IgYXR0YWNrXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2V0Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2dhbWUtc2NyZWVuJyk7XHJcbiAgICAgICAgICAgIHdoaWxlKGNvbnRhaW5lci5maXJzdENoaWxkKXtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBnYW1lIGNvbnRyb2xsZXIgLy9cclxuICAgICAgICBjb25zdCBjaGFuZ2VXaG9QbGFjaW5nID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaGlwcyA9IFtdXHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAxKXsgICAgXHJcbiAgICAgICAgICAgICAgICBib2FyZDEudW5wbGFjZWRTaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcHMucHVzaChzaGlwLm51bWJlcikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb24gPSBzaGlwcy5yZWR1Y2UoKGN1cnJlbnQsIHRvdGFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG90YWwgKz0gY3VycmVudDtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICBpZihjb24gPT09IDAgJiYgc2hpcHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLnBsYXllciA9IDI7XHJcbiAgICAgICAgICAgICAgICBzZXRBbm5vdW5jZW1lbnQoJ1BsYXllciAyIFxcbiBQbGFjaW5nIFBoYXNlJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNoYW5nZUdyaWQocGxheWVyMiwgYm9hcmQyLCB0cnVlKSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHBvaW50ZXIucGhhc2UgPSAncGxhY2UnLCAxMDAxKTtcclxuICAgICAgICAgICAgICAgIHNldEdyaWRUaXRsZShwbGF5ZXIyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbmRQbGFjaW5nKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZW5kUGxhY2luZyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2hpcHMgPSBbXVxyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBsYXllciA9PT0gMil7XHJcbiAgICAgICAgICAgICAgICBib2FyZDIudW5wbGFjZWRTaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcHMucHVzaChzaGlwLm51bWJlcikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb24gPSBzaGlwcy5yZWR1Y2UoKGN1cnJlbnQsIHRvdGFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG90YWwgKz0gY3VycmVudDtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihjb24gPT09IDAgJiYgc2hpcHMubGVuZ3RoID4gMCl7ICAgICBcclxuICAgICAgICAgICAgICAgIHBvaW50ZXIucGxheWVyID0gMTtcclxuICAgICAgICAgICAgICAgIHNldEFubm91bmNlbWVudCgnQXR0YWNrIFBoYXNlJyk7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVCdG5zKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEFubm91bmNlbWVudCgnUGxheWVyIDEgVHVybicpLCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXIucGhhc2UgPSAnYXR0YWNrJztcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVCdG5zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VHVyblN0YXR1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUdyaWQocGxheWVyMiwgYm9hcmQyLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVQbGFjZVNoaXBCdXR0b25zKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTsgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBlbmRUdXJuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihwbGF5ZXIxLmlzVHVybil7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VHcmlkKHBsYXllcjIsIGJvYXJkMik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmIChwbGF5ZXIyLmlzVHVybil7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VHcmlkKHBsYXllcjEsIGJvYXJkMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VHVyblN0YXR1cygpO1xyXG4gICAgICAgICAgICBzZXRBbm5vdW5jZW1lbnQoJycsIHRydWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZUJ0bnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICAgICAgICAgICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihidG4uZGlzYWJsZWQpIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZW5kIG9mIGdhbWUgY29udHJvbGxlciAvL1xyXG5cclxuICAgICAgICAvLyBwbGF5ZXIgc3RhdHVzIC8vXHJcbiAgICAgICAgY29uc3QgYWRkUGxheWVySWNvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllckljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgcGxheWVySWNvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllci1pY29uLWNvbnRhaW5lcicpXHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcjFCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgY29uc3QgcGxheWVyMkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBwbGF5ZXIxQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyLTEnKTtcclxuICAgICAgICAgICAgcGxheWVyMkJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllci0yJyk7XHJcbiAgICAgICAgICAgIHBsYXllcjFCdG4udGV4dENvbnRlbnQgPSAnUGxheWVyIDEnO1xyXG4gICAgICAgICAgICBwbGF5ZXIyQnRuLnRleHRDb250ZW50ID0gJ1BsYXllciAyJztcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckljb25Db250YWluZXIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dyaWQtdGl0bGUnKTtcclxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgUGxheWVyW11gO1xyXG5cclxuICAgICAgICAgICAgcGxheWVySWNvbkNvbnRhaW5lci5hcHBlbmQocGxheWVyMUJ0biwgdGl0bGUsIHBsYXllcjJCdG4pO1xyXG5cclxuICAgICAgICAgICAgc2V0R3JpZFRpdGxlKHBsYXllcjEpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHN0YXR1c0JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXR1cy1ib3gnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7IC8vIHBoYXNlIC8gdHVyblxyXG4gICAgICAgICAgICBzdGF0dXMxLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhdHVzLTEnKTtcclxuICAgICAgICAgICAgc3RhdHVzMS50ZXh0Q29udGVudCA9ICdwaGFzZTogLyB0dXJuOiAnO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKSAvLyBzaGlwIC8gcm91bmRcclxuICAgICAgICAgICAgc3RhdHVzMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXR1cy0yJyk7XHJcbiAgICAgICAgICAgIHN0YXR1czIudGV4dENvbnRlbnQgPSAnc2hpcDogLyByb3VuZDonXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1czMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpIC8vIGRpcmVjdGlvbiAvIHNoaXBzIHN1bmtcclxuICAgICAgICAgICAgc3RhdHVzMy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXR1cy0zJyk7XHJcbiAgICAgICAgICAgIHN0YXR1czMudGV4dENvbnRlbnQgPSAnZGlyZWN0aW9uOiAvIHNoaXBzIHN1bms6JztcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXR1c0JveCk7XHJcbiAgICAgICAgICAgIHN0YXR1c0JveC5hcHBlbmQoc3RhdHVzMSwgc3RhdHVzMiwgc3RhdHVzMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZXRUdXJuU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXR1cy0xJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1czIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHVzLTInKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0dXMtMycpO1xyXG4gICAgICAgICAgICBjb25zdCBib3ggPSBgPGRpdiBjbGFzcz1cImdyaWQtc2hpcFwiPjwvZGl2PmBcclxuICAgICAgICAgICAgbGV0IHRleHRBcnJvdyA9IGA8aW1nIHNyYz1cIiR7YXJyb3d9XCIgLz5gO1xyXG5cclxuICAgICAgICAgICAgaWYocG9pbnRlci5waGFzZSA9PT0gXCJwbGFjZVwiKXtcclxuICAgICAgICAgICAgICAgIHN0YXR1czEudGV4dENvbnRlbnQgPSBgUGhhc2U6ICR7cG9pbnRlci5waGFzZX0gc2hpcHNgO1xyXG4gICAgICAgICAgICAgICAgaWYocG9pbnRlci5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHRleHRBcnJvdyA9IGA8aW1nIHNyYz1cIiR7YXJyb3d9XCIgLz5gO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0ZXh0QXJyb3cgPSBgPGltZyBzcmM9XCIke2Fycm93fVwiIGNsYXNzPVwicmlnaHRcIj5gXHJcbiAgICAgICAgICAgICAgICBzdGF0dXMzLmlubmVySFRNTCA9IGBEaXJlY3Rpb246ICR7dGV4dEFycm93fWA7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gocG9pbnRlci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czIudGV4dENvbnRlbnQgPSAnU2hpcDogbm9uZSgwKSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMyLmlubmVySFRNTCA9IGBTaGlwOiAke2JveH0ke2JveH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czIuaW5uZXJIVE1MID0gYFNoaXA6ICR7Ym94fSR7Ym94fSR7Ym94fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzMi5pbm5lckhUTUwgPSBgU2hpcDogJHtib3h9JHtib3h9JHtib3h9JHtib3h9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMyLmlubmVySFRNTCA9IGBTaGlwOiAke2JveH0ke2JveH0ke2JveH0ke2JveH0ke2JveH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHR1cm4gPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYocGxheWVyMS5pc1R1cm4pdHVybiA9IDE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHBsYXllcjIuaXNUdXJuKSB0dXJuID0gMjtcclxuICAgICAgICAgICAgICAgIHN0YXR1czEudGV4dENvbnRlbnQgPSBgVHVybjogcGxheWVyJHt0dXJufWA7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMyLnRleHRDb250ZW50ID0gYFJvdW5kOiAke2JvYXJkMi5hdHRhY2tMb2cubGVuZ3RofWA7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLnBsYXllciA9PT0gMSBcclxuICAgICAgICAgICAgICAgICAgICA/IHN0YXR1czMudGV4dENvbnRlbnQgPSBgU2hpcHMgU3VuazogJHtib2FyZDEuY2hlY2tOdW1PZlN1bmtTaGlwcygpfWBcclxuICAgICAgICAgICAgICAgICAgICA6IHN0YXR1czMudGV4dENvbnRlbnQgPSBgU2hpcHMgU3VuazogJHtib2FyZDIuY2hlY2tOdW1PZlN1bmtTaGlwcygpfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRBbm5vdW5jZW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFubm91bmNlbWVudEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhbm5vdW5jZW1lbnRCb3guc2V0QXR0cmlidXRlKCdpZCcsICdhbm5vdW5jZW1lbnQnKTtcclxuICAgICAgICAgICAgYW5ub3VuY2VtZW50Qm94LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAgICAgc3RhdHVzLnNldEF0dHJpYnV0ZSgnaWQnLCAnYW5ub3VuY2VtZW50LXRleHQnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbm5vdW5jZW1lbnRCb3gpO1xyXG4gICAgICAgICAgICBhbm5vdW5jZW1lbnRCb3guYXBwZW5kQ2hpbGQoc3RhdHVzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzZXRBbm5vdW5jZW1lbnQgPSAodGV4dCwgcmVtb3ZlID0gZmFsc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fubm91bmNlbWVudCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYW5ub3VuY2VtZW50LXRleHQnKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgIXJlbW92ZVxyXG4gICAgICAgICAgICAgICAgPyBzdGF0dXMudGV4dENvbnRlbnQgPSB0ZXh0XHJcbiAgICAgICAgICAgICAgICA6IHN0YXR1cy50ZXh0Q29udGVudCA9IGJveC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRkSWNvbkV2ZW50cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci0xJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VHcmlkKHBsYXllcjEsIGJvYXJkMSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci0yJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VHcmlkKHBsYXllcjIsIGJvYXJkMik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGVuZCBvZiBwbGF5ZXIgc3RhdHVzIC8vXHJcblxyXG4gICAgICAgIC8vIGdyaWQgZGlzcGxheSAvL1xyXG4gICAgICAgIC8vIGdyaWQgdGl0bGUgLy9cclxuICAgICAgICBjb25zdCBzZXRHcmlkVGl0bGUgPSAocGxheWVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dyaWQtdGl0bGUnKTtcclxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgUGxheWVyICR7cGxheWVyLnBsYXllck51bWJlcn1gO1xyXG4gICAgICAgICAgICBzZXRHcmlkUGxheWVyQnRuKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZXRHcmlkUGxheWVyQnRuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG4xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci0xJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLTInKTtcclxuXHJcbiAgICAgICAgICAgIGlmKChwb2ludGVyLnBsYXllciA9PT0gMSAmJiBwb2ludGVyLnBoYXNlID09PSAncGxhY2UnKSl7XHJcbiAgICAgICAgICAgICAgICBidG4xLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgYnRuMi5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYocG9pbnRlci5wbGF5ZXIgPT09IDIgJiYgcG9pbnRlci5waGFzZSA9PT0ncGxhY2UnKSB7XHJcbiAgICAgICAgICAgICAgICBidG4yLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgYnRuMS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYocG9pbnRlci5wbGF5ZXIgPT09IDEgJiYgcG9pbnRlci5waGFzZSA9PT0gJ2F0dGFjaycpe1xyXG4gICAgICAgICAgICAgICAgYnRuMi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgICAgIGJ0bjEuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHBvaW50ZXIucGxheWVyID09PSAyICYmIHBvaW50ZXIucGhhc2UgPT09ICdhdHRhY2snKSB7XHJcbiAgICAgICAgICAgICAgICBidG4xLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgYnRuMi5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZW5kIG9mIGdyaWQgdGl0bGUgLy9cclxuXHJcbiAgICAgICAgLy8gZ3JpZCAvL1xyXG5cclxuICAgICAgICBjb25zdCBhZGRHcmlkID0gKHBsdXNpZCA9ICdncmlkJykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGdyaWQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3BsdXNpZH1gKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2V0R3JpZFRvUGxheWVyID0gKHBsYXllciwgYm9hcmQsIHBsdXNpZCA9ICdncmlkJykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGx1c2lkfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhncmlkKTtcclxuICAgICAgICAgICAgY29uc3QgcGxheWVyTnVtYmVyID0gcGxheWVyLnBsYXllck51bWJlcjtcclxuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gYm9hcmQuZ3JpZDtcclxuICAgICAgICAgICAgY29vcmRzLmZvckVhY2goY29vcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3gseV0gPSBbY29vcmQuY29vcmRpbmF0ZVsxXSwgY29vcmQuY29vcmRpbmF0ZVszXV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGdyaWQtJHtwbGF5ZXJOdW1iZXJ9LSR7eH0sJHt5fWApO1xyXG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoYHAke3BsYXllck51bWJlcn1gKTsgXHJcbiAgICAgICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYoIXBsYXllcjEuaXNUdXJuICYmIHBvaW50ZXIucGxheWVyID09PSAxKXtcclxuICAgICAgICAgICAgICAgIG1hcmtHcmlkKHBsYXllck51bWJlciwgYm9hcmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighcGxheWVyMi5pc1R1cm4gJiYgcG9pbnRlci5wbGF5ZXIgPT09IDIpe1xyXG4gICAgICAgICAgICAgICAgbWFya0dyaWQocGxheWVyTnVtYmVyLCBib2FyZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihwb2ludGVyLnBoYXNlID09PSAncGxhY2UnKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXJOdW1iZXIsIGJvYXJkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hcmtHcmlkKHBsYXllck51bWJlciwgYm9hcmQsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2V0R3JpZFRvU2hpcCA9IChlLCBib2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBoYXNlICE9ICdwbGFjZScpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gZS50YXJnZXQuaWQucmVwbGFjZSgvZ3JpZC0vaSwgJycpO1xyXG4gICAgICAgICAgICBjb25zdCBbcGxheWVyTnVtYmVyLCB4LCB5XSA9IFtcclxuICAgICAgICAgICAgICAgIE51bWJlcihjb29yZHNbMF0pLFxyXG4gICAgICAgICAgICAgICAgTnVtYmVyKGNvb3Jkc1syXSksXHJcbiAgICAgICAgICAgICAgICBOdW1iZXIoY29vcmRzWzRdKSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgIWJvYXJkLmlzQWlcclxuICAgICAgICAgICAgICAgID8gYm9hcmQucGxhY2VTaGlwKHBvaW50ZXIubGVuZ3RoLCBgWyR7eH0sJHt5fV1gLCBwb2ludGVyLmRpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgIDogYm9hcmQuYWlQbGFjZVNoaXAoKTtcclxuICAgICAgICAgICAgaWYoIWJvYXJkLmlzQWkpbWFya0dyaWRUb1NoaXAocGxheWVyTnVtYmVyLCBib2FyZCk7XHJcblxyXG4gICAgICAgICAgICBjbG9zZVBsYWNlU2hpcE1lbnUoKTtcclxuICAgICAgICAgICAgb3BlblBsYWNlU2hpcE1lbnUoKTtcclxuXHJcbiAgICAgICAgICAgIGNoYW5nZVdob1BsYWNpbmcoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhdHRhY2tHcmlkID0gKGUsIGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGUudGFyZ2V0LmlkLnJlcGxhY2UoL2dyaWQtL2ksICcnKTtcclxuICAgICAgICAgICAgY29uc3QgW3BsYXllck51bWJlciwgeCwgeV0gPSBbXHJcbiAgICAgICAgICAgICAgICBOdW1iZXIoY29vcmRzWzBdKSxcclxuICAgICAgICAgICAgICAgIE51bWJlcihjb29yZHNbMl0pLFxyXG4gICAgICAgICAgICAgICAgTnVtYmVyKGNvb3Jkc1s0XSksXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBpZihwbGF5ZXJOdW1iZXIgPT09IDIgJiYgcGxheWVyMS5pc1R1cm4pe1xyXG4gICAgICAgICAgICAgICAgcGxheWVyMS50YWtlVHVybihgWyR7eH0sJHt5fV1gLCBib2FyZCwgcGxheWVyMSwgcGxheWVyMiwgYm9hcmQxKTtcclxuICAgICAgICAgICAgICAgIG1hcmtHcmlkKHBsYXllck51bWJlciwgYm9hcmQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYoIXBsYXllcjEuaXNUdXJuKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbm5vdW5jZW1lbnQoJ1BsYXllciAyIFR1cm4nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGVuZFR1cm4sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihwbGF5ZXJOdW1iZXIgPT09IDEgJiYgcGxheWVyMi5pc1R1cm4pe1xyXG4gICAgICAgICAgICAgICAgcGxheWVyMi50YWtlVHVybihgWyR7eH0sJHt5fV1gLCBib2FyZCwgcGxheWVyMiwgcGxheWVyMSwgYm9hcmQyKTtcclxuICAgICAgICAgICAgICAgIG1hcmtHcmlkKHBsYXllck51bWJlciwgYm9hcmQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYoIXBsYXllcjIuaXNUdXJuKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbm5vdW5jZW1lbnQoJ1BsYXllciAxIFR1cm4nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGVuZFR1cm4sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFR1cm5TdGF0dXMoKTtcclxuICAgICAgICAgICAgbG9zZUdhbWUoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBsb3NlR2FtZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYoYm9hcmQxLmxvc2UoKSB8fCBib2FyZDIubG9zZSgpKSBsb2FkR2FtZU92ZXJTY3JlZW4oKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrR3JpZFRvU2hpcCA9IChwbGF5ZXJOdW1iZXIsIGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAke3BsYXllck51bWJlcn1gKTtcclxuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gYm9hcmQuZ3JpZDtcclxuICAgICAgICAgICAgY29uc3QgbWFya2VkID0gW107XHJcblxyXG4gICAgICAgICAgICBjb29yZHMuZm9yRWFjaChjb29yZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjb29yZC5zaGlwSGVyZSkgbWFya2VkLnB1c2goY29vcmQuY29vcmRpbmF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZ3JpZFNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gc3F1YXJlLmlkLnJlcGxhY2UoL2dyaWQtXFx3LS9pLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDb29yZHMgPSBgWyR7Y29vcmRzfV1gO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG1hcmtlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWFya2VkW2ldID09PSBuZXdDb29yZHMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnZ3JpZC1zaGlwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrR3JpZFRvSG92ZXJTaGlwID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYocG9pbnRlci5waGFzZSAhPSAncGxhY2UnIHx8IHBvaW50ZXIubGVuZ3RoIDwgMikgcmV0dXJuIG1hcmtHcmlkVG9Ib3ZlckhpdChlKTtcclxuICAgICAgICAgICAgbGV0IHRleHRBcnJvdztcclxuICAgICAgICAgICAgcG9pbnRlci5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJ1xyXG4gICAgICAgICAgICAgICAgPyB0ZXh0QXJyb3cgPSBgPGltZyBzcmM9XCIke2Fycm93fVwiIGNsYXNzPVwiZ3JpZC1yaWdodFwiIC8+YFxyXG4gICAgICAgICAgICAgICAgOiB0ZXh0QXJyb3cgPSBgPGltZyBzcmM9XCIke2Fycm93fVwiIGNsYXNzPVwiZ3JpZC11cFwiIC8+YFxyXG4gICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSB0ZXh0QXJyb3c7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFya0dyaWRUb0hpdCA9IChwbGF5ZXJOdW1iZXIsIGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAke3BsYXllck51bWJlcn1gKTtcclxuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gYm9hcmQuZ3JpZDtcclxuICAgICAgICAgICAgY29uc3QgbWFya2VkID0gW107XHJcblxyXG4gICAgICAgICAgICBjb29yZHMuZm9yRWFjaChjb29yZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjb29yZC5oaXRIZXJlICYmIGNvb3JkLnNoaXBIZXJlKSBtYXJrZWQucHVzaChjb29yZC5jb29yZGluYXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBncmlkU3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZHMgPSBzcXVhcmUuaWQucmVwbGFjZSgvZ3JpZC1cXHctL2ksICcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Nvb3JkcyA9IGBbJHtjb29yZHN9XWA7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWFya2VkLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihtYXJrZWRbaV0gPT09IG5ld0Nvb3Jkcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdncmlkLWhpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFya0dyaWRUb01pc3MgPSAocGxheWVyTnVtYmVyLCBib2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wJHtwbGF5ZXJOdW1iZXJ9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGJvYXJkLmdyaWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlZCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29vcmRzLmZvckVhY2goY29vcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoY29vcmQuaGl0SGVyZSAmJiAhY29vcmQuc2hpcEhlcmUpIG1hcmtlZC5wdXNoKGNvb3JkLmNvb3JkaW5hdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGdyaWRTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IHNxdWFyZS5pZC5yZXBsYWNlKC9ncmlkLVxcdy0vaSwgJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29vcmRzID0gYFske2Nvb3Jkc31dYDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtYXJrZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1hcmtlZFtpXSA9PT0gbmV3Q29vcmRzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2dyaWQtbWlzcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFya0dyaWRUb0hvdmVySGl0ID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYocG9pbnRlci5waGFzZSAhPSAnYXR0YWNrJykgcmV0dXJuO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2Nyb3NzaGFpcn1cIiBjbGFzcz1cImdyaWQtdGFyZ2V0XCIgLz5gO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmtHcmlkID0gKHBsYXllck51bWJlciwgYm9hcmQsIGhpZGVTaGlwcykgPT4ge1xyXG4gICAgICAgICAgICBpZighaGlkZVNoaXBzKSBtYXJrR3JpZFRvU2hpcChwbGF5ZXJOdW1iZXIsIGJvYXJkKTtcclxuICAgICAgICAgICAgbWFya0dyaWRUb0hpdChwbGF5ZXJOdW1iZXIsIGJvYXJkKTtcclxuICAgICAgICAgICAgbWFya0dyaWRUb01pc3MocGxheWVyTnVtYmVyLCBib2FyZCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlR3JpZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNncmlkJyk7XHJcbiAgICAgICAgICAgIHdoaWxlKGdyaWQuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBncmlkLnJlbW92ZUNoaWxkKGdyaWQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZW1vdmVIb3ZlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIHdoaWxlKGUudGFyZ2V0LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucmVtb3ZlQ2hpbGQoZS50YXJnZXQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYW5nZUdyaWQgPSAocGxheWVyLCBib2FyZCwgYnlwYXNzID0gZmFsc2UpID0+IHtcclxuICAgICAgICAgICAgaWYocG9pbnRlci5waGFzZSA9PT0gJ3BsYWNlJyAmJiAhYnlwYXNzKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSBwbGF5ZXIucGxheWVyTnVtYmVyICYmICFieXBhc3MpIHJldHVybjtcclxuICAgICAgICAgICAgcmVtb3ZlR3JpZCgpO1xyXG4gICAgICAgICAgICBzZXRHcmlkVGl0bGUocGxheWVyKTtcclxuICAgICAgICAgICAgc2V0R3JpZFRvUGxheWVyKHBsYXllciwgYm9hcmQpO1xyXG4gICAgICAgICAgICBhZGRHcmlkRXZlbnRzKHBsYXllciwgYm9hcmQpO1xyXG4gICAgICAgICAgICBwb2ludGVyLnBsYXllciA9IHBsYXllci5wbGF5ZXJOdW1iZXI7ICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHNldEFubm91bmNlbWVudCgnJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmKCFieXBhc3Mpc2V0VHVyblN0YXR1cygpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKGJ5cGFzcyl7XHJcbiAgICAgICAgICAgICAgICBjbG9zZVBsYWNlU2hpcE1lbnUoKTtcclxuICAgICAgICAgICAgICAgIG9wZW5QbGFjZVNoaXBNZW51KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjaG9vc2VHcmlkRnVuY3Rpb24gPSAoZSwgYm9hcmQpID0+IHtcclxuICAgICAgICAgICAgaWYocG9pbnRlci5waGFzZSA9PT0gJ2F0dGFjaycpe1xyXG4gICAgICAgICAgICAgICAgYXR0YWNrR3JpZChlLCBib2FyZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihwb2ludGVyLmlzUGxhY2luZyl7XHJcbiAgICAgICAgICAgICAgICBzZXRHcmlkVG9TaGlwKGUsIGJvYXJkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZEdyaWRFdmVudHMgPSAocGxheWVyLCBib2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wJHtwbGF5ZXIucGxheWVyTnVtYmVyfWApXHJcbiAgICAgICAgICAgIGdyaWRCdG5zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZSA9PiBjaG9vc2VHcmlkRnVuY3Rpb24oZSwgYm9hcmQpKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZSA9PiBtYXJrR3JpZFRvSG92ZXJTaGlwKGUsIGJvYXJkKSk7XHJcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGUgPT4gbWFya0dyaWRUb0hvdmVyU2hpcChlLCBib2FyZCkpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZW1vdmVIb3Zlcik7XHJcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCByZW1vdmVIb3Zlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGxvYWRHcmlkID0gKHBsYXllck51bWJlciwgdHdvID0gZmFsc2UpID0+IHtcclxuICAgICAgICAgICAgYWRkR3JpZCgnZ3JpZCcpO1xyXG5cclxuICAgICAgICAgICAgaWYodHdvKXtcclxuICAgICAgICAgICAgICAgIGFkZFdpbm5lcigpO1xyXG4gICAgICAgICAgICAgICAgYWRkR3JpZCgnZ3JpZC0yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocGxheWVyTnVtYmVyID09PSAxKXtcclxuICAgICAgICAgICAgICAgIHNldEdyaWRUb1BsYXllcihwbGF5ZXIxLCBib2FyZDEsICdncmlkJyk7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXIxLnBsYXllck51bWJlciwgYm9hcmQxLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0R3JpZFRvUGxheWVyKHBsYXllcjEsIGJvYXJkMSwgJ2dyaWQnKTtcclxuICAgICAgICAgICAgICAgIG1hcmtHcmlkKHBsYXllcjEucGxheWVyTnVtYmVyLCBib2FyZDEsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldEdyaWRUb1BsYXllcihwbGF5ZXIyLCBib2FyZDIsICdncmlkLTInKTtcclxuICAgICAgICAgICAgICAgIG1hcmtHcmlkKHBsYXllcjIucGxheWVyTnVtYmVyLCBib2FyZDIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbmQgb2YgZ3JpZCAvL1xyXG4gICAgICAgIC8vIGVuZCBvZiBncmlkIGRpc3BsYXkgLy9cclxuICAgICAgICBcclxuICAgICAgICAvLyBwbGFjZSBzaGlwIGJ1dHRvbnMgLy9cclxuICAgICAgICBjb25zdCBhZGRQbGFjZVNoaXBCdXR0b24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBidG5Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaGlwLW1lbnUnKTtcclxuICAgICAgICAgICAgY29uc3QgcGxhY2VTaGlwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHBsYWNlU2hpcEJ0bi50ZXh0Q29udGVudCA9ICdTaGlwcyc7XHJcbiAgICAgICAgICAgIHBsYWNlU2hpcEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYWNlLXNoaXAnKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZVNoaXBCdG4pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG9wZW5QbGFjZVNoaXBNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBib3ggPSBgPGRpdiBjbGFzcz1cImdyaWQtc2hpcFwiPjwvZGl2PmBcclxuICAgICAgICAgICAgLy8gYnV0dG9ucyAvL1xyXG4gICAgICAgICAgICAvLyBvbGQgLy9cclxuICAgICAgICAgICAgY29uc3QgcGxhY2VTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLXNoaXAnKTtcclxuICAgICAgICAgICAgcGxhY2VTaGlwLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgICAgICAgcGxhY2VTaGlwLnRleHRDb250ZW50ID0gJydcclxuICAgICAgICAgICAgLy8gbmV3IC8vXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcnJpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgY2Fycmllci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcnJpZXInKTtcclxuICAgICAgICAgICAgY2Fycmllci5pbm5lckhUTUwgPSBgJHtib3h9JHtib3h9JHtib3h9JHtib3h9JHtib3h9YDtcclxuICAgICAgICAgICAgY29uc3QgYmF0dGxlc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBiYXR0bGVzaGlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmF0dGxlc2hpcCcpO1xyXG4gICAgICAgICAgICBiYXR0bGVzaGlwLmlubmVySFRNTCA9IGAke2JveH0ke2JveH0ke2JveH0ke2JveH1gO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJtYXJpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgc3VibWFyaW5lLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWFyaW5lJyk7XHJcbiAgICAgICAgICAgIHN1Ym1hcmluZS5pbm5lckhUTUwgPSBgJHtib3h9JHtib3h9JHtib3h9YDtcclxuICAgICAgICAgICAgY29uc3QgcGF0cm9sQm9hdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBwYXRyb2xCb2F0LnNldEF0dHJpYnV0ZSgnaWQnLCAncGF0cm9sLWJvYXQnKTtcclxuICAgICAgICAgICAgcGF0cm9sQm9hdC5pbm5lckhUTUwgPSBgJHtib3h9JHtib3h9YDtcclxuICAgICAgICAgICAgY29uc3Qgcm90YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHJvdGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvdGF0ZS1zaGlwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdGF0ZUlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHJvdGF0ZUlubmVyLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7cm90YXRlSWNvbn1gKTtcclxuICAgICAgICAgICAgcm90YXRlLmFwcGVuZENoaWxkKHJvdGF0ZUlubmVyKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGNvbnRhaW5lciAvL1xyXG4gICAgICAgICAgICBjb25zdCBidG5zVG9BcHBlbmQgPSBbXHJcbiAgICAgICAgICAgICAgICBwYXRyb2xCb2F0LFxyXG4gICAgICAgICAgICAgICAgc3VibWFyaW5lLFxyXG4gICAgICAgICAgICAgICAgYmF0dGxlc2hpcCxcclxuICAgICAgICAgICAgICAgIGNhcnJpZXIsXHJcbiAgICAgICAgICAgICAgICByb3RhdGVcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAtbWVudScpO1xyXG4gICAgICAgICAgICBidG5Db250YWluZXIuYXBwZW5kKC4uLmJ0bnNUb0FwcGVuZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoaWRlU2hpcEJ0bnMoLi4uYnRuc1RvQXBwZW5kKTtcclxuICAgICAgICAgICAgLy8gZXZlbnRzIC8vXHJcbiAgICAgICAgICAgIGFkZFNoaXBCdXR0b25FdmVudHMoKTtcclxuICAgICAgICAgICAgYWRkQ2xvc2VQbGFjZVNoaXBFdmVudCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNsb3NlUGxhY2VTaGlwTWVudSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAtbWVudScpO1xyXG4gICAgICAgICAgICBjb25zdCBwbGFjZVNoaXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhY2Utc2hpcCcpO1xyXG4gICAgICAgICAgICBwbGFjZVNoaXBCdG4udGV4dENvbnRlbnQgPSAnU2hpcHMnO1xyXG4gICAgICAgICAgICBwbGFjZVNoaXBCdG4uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUoYnRuQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICAgICAgYnRuQ29udGFpbmVyLnJlbW92ZUNoaWxkKGJ0bkNvbnRhaW5lci5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhZGRPcGVuUGxhY2VTaGlwRXZlbnQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRPcGVuUGxhY2VTaGlwRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZS1zaGlwJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5QbGFjZVNoaXBNZW51KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLXNoaXAnKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQbGFjZVNoaXBNZW51KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRDbG9zZVBsYWNlU2hpcEV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhY2Utc2hpcCcpIFxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQbGFjZVNoaXBNZW51KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLXNoaXAnKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblBsYWNlU2hpcE1lbnUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYWNlU2hpcFR5cGUgPSAobGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIuaXNQbGFjaW5nICYmIHBvaW50ZXIubGVuZ3RoID09PSBsZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci5pc1BsYWNpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXIubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLmlzUGxhY2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUdXJuU3RhdHVzKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm90YXRlU2hpcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgcG9pbnRlci5pc1BsYWNpbmdcclxuICAgICAgICAgICAgICAgID8gcG9pbnRlci5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gcG9pbnRlci5kaXJlY3Rpb24gPSAndmVydGljYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgOiBwb2ludGVyLmRpcmVjdGlvbiA9ICdob3Jpem9udGFsJ1xyXG4gICAgICAgICAgICAgICAgOiAnbm90aGluZyB0byByb3RhdGUnO1xyXG4gICAgICAgICAgICB0b2dnbGVSb3RhdGVJY29uKCk7XHJcbiAgICAgICAgICAgIHNldFR1cm5TdGF0dXMoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0b2dnbGVSb3RhdGVJY29uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm90YXRlLXNoaXAnKTtcclxuXHJcbiAgICAgICAgICAgIHBvaW50ZXIuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCdcclxuICAgICAgICAgICAgICAgID8gcm90YXRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXAnKVxyXG4gICAgICAgICAgICAgICAgOiByb3RhdGVCdG4uY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkU2hpcEJ1dHRvbkV2ZW50cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcnJpZXInKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcGxhY2VTaGlwVHlwZSg1KSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXR0bGVzaGlwJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBsYWNlU2hpcFR5cGUoNCkpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBsYWNlU2hpcFR5cGUoMykpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGF0cm9sLWJvYXQnKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcGxhY2VTaGlwVHlwZSgyKSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3RhdGUtc2hpcCcpXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBoaWRlU2hpcEJ0bnMgPSAocGF0cm9sQm9hdCwgc3VibWFyaW5lLCBiYXR0bGVzaGlwLCBjYXJyaWVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAxICYmIGJvYXJkMS51bnBsYWNlZFNoaXBzWzBdLm51bWJlciA8IDEpe1xyXG4gICAgICAgICAgICAgICAgY2Fycmllci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IDEgJiYgYm9hcmQxLnVucGxhY2VkU2hpcHNbMV0ubnVtYmVyIDwgMSl7XHJcbiAgICAgICAgICAgICAgICBiYXR0bGVzaGlwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBsYXllciA9PT0gMSAmJiBib2FyZDEudW5wbGFjZWRTaGlwc1syXS5udW1iZXIgPCAxKXtcclxuICAgICAgICAgICAgICAgIHN1Ym1hcmluZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IDEgJiYgYm9hcmQxLnVucGxhY2VkU2hpcHNbM10ubnVtYmVyIDwgMSl7XHJcbiAgICAgICAgICAgICAgICBwYXRyb2xCb2F0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBsYXllciA9PT0gMiAmJiBib2FyZDIudW5wbGFjZWRTaGlwc1swXS5udW1iZXIgPCAxKXtcclxuICAgICAgICAgICAgICAgIGNhcnJpZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAyICYmIGJvYXJkMi51bnBsYWNlZFNoaXBzWzFdLm51bWJlciA8IDEpe1xyXG4gICAgICAgICAgICAgICAgYmF0dGxlc2hpcC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IDIgJiYgYm9hcmQyLnVucGxhY2VkU2hpcHNbMl0ubnVtYmVyIDwgMSl7XHJcbiAgICAgICAgICAgICAgICBzdWJtYXJpbmUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAyICYmIGJvYXJkMi51bnBsYWNlZFNoaXBzWzNdLm51bWJlciA8IDEpe1xyXG4gICAgICAgICAgICAgICAgcGF0cm9sQm9hdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZW1vdmVQbGFjZVNoaXBCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAtbWVudScpXHJcbiAgICAgICAgICAgIHdoaWxlKG1lbnUuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUNoaWxkKG1lbnUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVuZCBvZiBwbGFjZSBzaGlwIGJ1dHRvbnMgLy9cclxuXHJcbiAgICAgICAgLy8gZ2FtZSBvdmVyIC8vXHJcbiAgICAgICAgY29uc3QgYWRkR3JpZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICBsb2FkR3JpZCgyLCB0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRXaW5uZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdpZCcsICd3aW5uZXItYm94Jyk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3gpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2lubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAgICAgd2lubmVyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcicpO1xyXG4gICAgICAgICAgICB3aW5uZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHdpbm5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZXRXaW5uZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKTtcclxuICAgICAgICAgICAgY29uc3Qgcm91bmRzID0gYm9hcmQyLmF0dGFja0xvZy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGJvYXJkMS5sb3NlKClcclxuICAgICAgICAgICAgICAgID8gd2lubmVyLnRleHRDb250ZW50ID0gYFBsYXllciAyIFdJTlMhIGluICR7cm91bmRzfSByb3VuZHNgXHJcbiAgICAgICAgICAgICAgICA6IHdpbm5lci50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMSBXSU5TISBpbiAke3JvdW5kc30gcm91bmRzYFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkUmV0dXJuTWVudUJ0biA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4tbWVudS1idG4nKVxyXG4gICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnTWFpbiBNZW51JztcclxuICAgICAgICAgICAgY29uc3QgcmVwbGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHJlcGxheUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlcGxheS1idG4nKTtcclxuICAgICAgICAgICAgcmVwbGF5QnRuLnRleHRDb250ZW50ID0gJ1JlcGxheSc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lubmVyLWJveCcpO1xyXG4gICAgICAgICAgICB3aGlsZShib3guZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBib3gucmVtb3ZlQ2hpbGQoYm94LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJveC5hcHBlbmQoYnRuLCByZXBsYXlCdG4pO1xyXG4gICAgICAgICAgICBhZGRNZW51RXZlbnQoKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUmV0dXJuTWVudUJ0bik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRSZXR1cm5FdmVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUmV0dXJuTWVudUJ0bik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRNZW51RXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLW1lbnUtYnRuJyk7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RpdGxlU2NyZWVuID0gdGl0bGVTY3JlZW4oKTtcclxuICAgICAgICAgICAgICAgIG5ld1RpdGxlU2NyZWVuLmxvYWRUaXRsZVNjcmVlbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlcGxheS1idG4nKTtcclxuICAgICAgICAgICAgcmVwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3R2FtZVNjcmVlbiA9IGdhbWVTY3JlZW4ocHZwKTtcclxuICAgICAgICAgICAgICAgIG5ld0dhbWVTY3JlZW4ubG9hZEdhbWVTY3JlZW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlbmQgb2YgZ2FtZSBvdmVyIC8vXHJcblxyXG4gICAgICAgIC8vIGxvYWRpbmcgLy9cclxuICAgICAgICBjb25zdCBsb2FkR2FtZVNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0Q29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgIGFkZFBsYXllckljb25zKCk7XHJcbiAgICAgICAgICAgIGxvYWRHcmlkKDEpO1xyXG4gICAgICAgICAgICBhZGRJY29uRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIGFkZFN0YXR1cygpO1xyXG4gICAgICAgICAgICBhZGRQbGFjZVNoaXBCdXR0b24oKTtcclxuICAgICAgICAgICAgYWRkT3BlblBsYWNlU2hpcEV2ZW50KCk7XHJcbiAgICAgICAgICAgIGFkZEdyaWRFdmVudHMocGxheWVyMSwgYm9hcmQxKTtcclxuICAgICAgICAgICAgYWRkQW5ub3VuY2VtZW50KCk7XHJcbiAgICAgICAgICAgIHNldEFubm91bmNlbWVudCgnUGxheWVyIDEgXFxuIFBsYWNpbmcgUGhhc2UnKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEFubm91bmNlbWVudCgnJywgdHJ1ZSksIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgc2V0VHVyblN0YXR1cygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGxvYWRHYW1lT3ZlclNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgYWRkR3JpZHMoKTtcclxuICAgICAgICAgICAgc2V0V2lubmVyKCk7XHJcbiAgICAgICAgICAgIGFkZFJldHVybkV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVuZCBvZiBsb2FkaW5nIC8vXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gcmVtb3ZlIGJlbG93IC8vXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBjb25zdCBwbGFjZUFsbFNoaXBzID0gKGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCg1LCAnWzAsMV0nLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoNCwgJ1swLDJdJywgJ2hvcml6b250YWwnKTtcclxuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKDMsICdbMCwzXScsICdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCgzLCAnWzAsNF0nLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoMywgJ1swLDVdJywgJ2hvcml6b250YWwnKTtcclxuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKDMsICdbMCw2XScsICdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCgyLCAnWzAsN10nLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoMiwgJ1swLDhdJywgJ2hvcml6b250YWwnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4geyBsb2FkR2FtZVNjcmVlbiwgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGVTY3JlZW4sXHJcbiAgICAgICAgZ2FtZVNjcmVlbiwgLy9yZW1vdmVcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnRlcmZhY2U7XHJcblxyXG4vLyB0cnkgdG8gYWRkIGEgc21hbGwgZ3JpZCB0byBzaG93IHdoYXQgdGhlIGNvbXB1dGVyIGlzIGRvaW5nIG9uIHZzIGNvbXB1dGVyXHJcbi8vIGFkZCBtaW5lcyB0aGF0IGV4cGxvZGUgb24gdGhlIHlvdXIgZ3JpZCBpZiB5b3UgaGl0IHRoZSBlbmVtaWVzIG1pbmVzIGluIGEgM3gzXHJcbi8vIGNsZWFuIGNvZGVcclxuLy8gYWRkIGFtb3VudCBvZiBzaGlwcyB0byB0aGUgYnV0dG9ucyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBiYXR0bGVTaGlwcyBmcm9tICcuL2JhdHRsZXNoaXAnO1xyXG5pbXBvcnQgdXNlckludGVyZmFjZSBmcm9tICcuL3VpJztcclxuXHJcbmNvbnN0IGxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRybyA9IHVzZXJJbnRlcmZhY2UudGl0bGVTY3JlZW4oKTtcclxuICAgIGludHJvLmxvYWRUaXRsZVNjcmVlbigpO1xyXG59O1xyXG5cclxubG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==