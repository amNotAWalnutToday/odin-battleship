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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/explosion-ship.png */ "./src/img/explosion-ship.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/whirlpool-miss-dark.png */ "./src/img/whirlpool-miss-dark.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/whirlpool-miss-light.png */ "./src/img/whirlpool-miss-light.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --grid-font-c: rgb(52, 41, 51);\r\n    --box-color: rgba(240, 255, 255, 0.9);\r\n    --grid1: darkblue;\r\n    --grid2: rgb(0, 140, 255); \r\n    --line-color: rgb(90, 116, 232);\r\n    --outline-color: rgb(53, 74, 94); \r\n    --box-outline: 2px solid rgba(255, 255, 255, 0.8);\r\n\r\n    --grid-size: max(300px, 30vw);\r\n    --grid-size-wide: min(450px, 30vw);\r\n    --grid-size-mini: 150px;\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: var(--grid-font-c);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Containers */\r\n\r\n.title-screen,\r\n#title-screen-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n#title-screen-menu{\r\n    gap: 5rem;\r\n    padding: 1rem;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#title-screen-btns {\r\n    display: flex;\r\n    gap: 5rem;\r\n}\r\n\r\n@media (max-width: 450px){\r\n    #title-screen-btns {\r\n        flex-direction: column;\r\n        padding-bottom: 5rem;\r\n    }\r\n    .title-screen h1 {\r\n        font-size: 45px !important;\r\n    }\r\n}\r\n\r\n#winner-box button,\r\n#winner-box,\r\n.title-screen button,\r\n#title-screen-menu,\r\n#player-icon-container,\r\n#status-box,\r\n#ship-menu,\r\n#grid-2,\r\n#grid {\r\n    box-shadow: 0px 0px 0px 5px var(--outline-color);\r\n    border-radius: 10px; /*not grid*/\r\n}\r\n\r\n#container {\r\n    overflow-x: hidden;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: url('https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_960_720.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#player-icon-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    margin: 0.3rem auto 1rem auto;\r\n    background-color: var(--box-color);\r\n    width: calc(var(--grid-size) * 1.1);\r\n}\r\n\r\n#grid-2,\r\n#grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    grid-template-rows: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    margin: 1rem auto;\r\n    width: var(--grid-size);\r\n    height: var(--grid-size);\r\n    transform: rotate(270deg);\r\n    border-radius: 1px !important;\r\n    background-color: var(--grid2);\r\n}\r\n\r\n#grid-2 {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.mini-grid {\r\n    grid-template-columns: repeat(auto-fit, calc(var(--grid-size-mini) / 10)) !important;\r\n    grid-template-rows: repeat(auto-fit, calc(var(--grid-size-mini) / 10)) !important;\r\n    width: var(--grid-size-mini) !important;\r\n    height: var(--grid-size-mini) !important;\r\n}\r\n\r\n#announcement {\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    margin-left: -35%;\r\n    margin-top: -5vh;\r\n    padding-top: 3vh;\r\n    height: 10vh;\r\n    width: 70%;\r\n    text-align: center;\r\n    color: var(--grid-font-c);\r\n    font-size: 17px;\r\n    font-family: monofett;\r\n    background-color: var(--box-color);\r\n    box-shadow: 0px 0px 5px 5px white;\r\n    outline: var(--box-outline);\r\n    border-radius: 10px;\r\n    z-index: 1;\r\n}\r\n\r\n@media(max-width: 420px){\r\n    #announcement {\r\n        height: 15vh !important;\r\n        white-space: pre;\r\n    }\r\n\r\n    #status-box {\r\n        padding: 0.5rem 0 !important;\r\n    }\r\n}\r\n\r\n#status-box {\r\n    width: var(--grid-size);\r\n    margin: 1rem auto;\r\n    padding: 2.5rem 0;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#ship-menu {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    height: 75px;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n    padding: 0 0.5rem;\r\n    background-color: var(--box-color);\r\n    border-radius: 0 10px 10px 0;\r\n}\r\n\r\n@media(min-width: 1000px){\r\n    #ship-menu {\r\n        padding: 0 2rem;\r\n        gap: 2.5rem;\r\n    }\r\n}\r\n\r\n#winner-box {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    height: fit-content;\r\n    width: max(250px, 50vw);\r\n    margin: 1rem auto;\r\n    background-color: var(--box-color);\r\n    font-family: monofett;\r\n    letter-spacing: 1px;;\r\n}\r\n\r\n/* End of Containers*/\r\n\r\n/* Text */\r\n#grid-title {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.title-screen h1 {\r\n    padding-top: 1.5rem;\r\n    font-size: 60px;\r\n    font-family: monofett;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n#status-box h2 {\r\n    padding: 0.25rem 2.5rem;\r\n}\r\n/*End of Text*/\r\n\r\n/*Images*/\r\n#status-box div {\r\n    display: inline-block;\r\n    height: 25px;\r\n    width: 25px;\r\n    vertical-align: bottom;\r\n    border: 2px solid var(--outline-color);\r\n}\r\n\r\n#status-box img {\r\n    width: 30px;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.right {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n\r\n/*End of Images*/\r\n\r\n/*Grid Components*/\r\n.p1,\r\n.p2 {\r\n    border: 0.5px solid var(--line-color);\r\n}\r\n\r\n.p1 {\r\n    background-color: var(--grid1);\r\n}\r\n\r\n.p2 {\r\n    background-color: var(--grid2);\r\n}\r\n\r\n.grid-ship {\r\n    background-color: brown;\r\n}\r\n\r\n.grid-hit {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: contain;\r\n}\r\n\r\n.p1.grid-miss {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");/*radial-gradient(rgb(255, 202, 202) 40%, var(--grid1));*/\r\n    background-size: contain;\r\n}\r\n\r\n.p2.grid-miss {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")/*radial-gradient(rgb(255, 202, 202) 40%, var(--grid2))*/;\r\n    background-size: contain;\r\n}\r\n\r\n.grid-target,\r\n.grid-up,\r\n.grid-right {\r\n    width: calc(var(--grid-size) / 10);\r\n    height: calc(var(--grid-size) / 10);\r\n}\r\n\r\n.grid-up {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.grid-right {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.grid-target {\r\n    filter: invert();\r\n    background-color: cyan;\r\n    border-radius: calc(var(--grid-size) / 10);\r\n}\r\n\r\n#grid img {\r\n    pointer-events: none;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n/*End of Grid Components*/\r\n\r\n/* Buttons */\r\n#winner-box button,\r\n.title-screen button {\r\n    height: 5rem;\r\n    width: 10rem;\r\n    font-size: 30px;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#player-icon-container button {\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 25px;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n#player-1.highlight {\r\n    color: var(--grid2);\r\n    background-color: var(--grid1);\r\n    transform: scale(1.1);\r\n}\r\n\r\n#player-2.highlight {\r\n    color: var(--grid1);\r\n    background-color: var(--grid2);\r\n    transform: scale(1.1);\r\n}\r\n\r\n#ship-menu button {\r\n    height: 50px;\r\n    width: 50px;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n#player-icon-container button:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 5px 1px black;\r\n    transform: scale(1.2);\r\n}\r\n\r\n#winner-box button:hover,\r\n#ship-menu button:hover,\r\n.title-screen button:hover {\r\n    transform: scale(1.05);\r\n    filter: saturate(10%);\r\n    cursor: pointer;\r\n}\r\n\r\n#grid * {\r\n    cursor: none !important;\r\n}\r\n\r\n#winner-box button {\r\n\r\n}\r\n/* End of Buttons*/", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --grid-font-c: rgb(52, 41, 51);\r\n    --box-color: rgba(240, 255, 255, 0.9);\r\n    --grid1: darkblue;\r\n    --grid2: rgb(0, 140, 255); \r\n    --line-color: rgb(90, 116, 232);\r\n    --outline-color: rgb(53, 74, 94); \r\n    --box-outline: 2px solid rgba(255, 255, 255, 0.8);\r\n\r\n    --grid-size: max(300px, 30vw);\r\n    --grid-size-wide: min(450px, 30vw);\r\n    --grid-size-mini: 150px;\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: var(--grid-font-c);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Containers */\r\n\r\n.title-screen,\r\n#title-screen-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n#title-screen-menu{\r\n    gap: 5rem;\r\n    padding: 1rem;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#title-screen-btns {\r\n    display: flex;\r\n    gap: 5rem;\r\n}\r\n\r\n@media (max-width: 450px){\r\n    #title-screen-btns {\r\n        flex-direction: column;\r\n        padding-bottom: 5rem;\r\n    }\r\n    .title-screen h1 {\r\n        font-size: 45px !important;\r\n    }\r\n}\r\n\r\n#winner-box button,\r\n#winner-box,\r\n.title-screen button,\r\n#title-screen-menu,\r\n#player-icon-container,\r\n#status-box,\r\n#ship-menu,\r\n#grid-2,\r\n#grid {\r\n    box-shadow: 0px 0px 0px 5px var(--outline-color);\r\n    border-radius: 10px; /*not grid*/\r\n}\r\n\r\n#container {\r\n    overflow-x: hidden;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: url('https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_960_720.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#player-icon-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    margin: 0.3rem auto 1rem auto;\r\n    background-color: var(--box-color);\r\n    width: calc(var(--grid-size) * 1.1);\r\n}\r\n\r\n#grid-2,\r\n#grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    grid-template-rows: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    margin: 1rem auto;\r\n    width: var(--grid-size);\r\n    height: var(--grid-size);\r\n    transform: rotate(270deg);\r\n    border-radius: 1px !important;\r\n    background-color: var(--grid2);\r\n}\r\n\r\n#grid-2 {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.mini-grid {\r\n    grid-template-columns: repeat(auto-fit, calc(var(--grid-size-mini) / 10)) !important;\r\n    grid-template-rows: repeat(auto-fit, calc(var(--grid-size-mini) / 10)) !important;\r\n    width: var(--grid-size-mini) !important;\r\n    height: var(--grid-size-mini) !important;\r\n}\r\n\r\n#announcement {\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    margin-left: -35%;\r\n    margin-top: -5vh;\r\n    padding-top: 3vh;\r\n    height: 10vh;\r\n    width: 70%;\r\n    text-align: center;\r\n    color: var(--grid-font-c);\r\n    font-size: 17px;\r\n    font-family: monofett;\r\n    background-color: var(--box-color);\r\n    box-shadow: 0px 0px 5px 5px white;\r\n    outline: var(--box-outline);\r\n    border-radius: 10px;\r\n    z-index: 1;\r\n}\r\n\r\n@media(max-width: 420px){\r\n    #announcement {\r\n        height: 15vh !important;\r\n        white-space: pre;\r\n    }\r\n\r\n    #status-box {\r\n        padding: 0.5rem 0 !important;\r\n    }\r\n}\r\n\r\n#status-box {\r\n    width: var(--grid-size);\r\n    margin: 1rem auto;\r\n    padding: 2.5rem 0;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#ship-menu {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    height: 75px;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n    padding: 0 0.5rem;\r\n    background-color: var(--box-color);\r\n    border-radius: 0 10px 10px 0;\r\n}\r\n\r\n@media(min-width: 1000px){\r\n    #ship-menu {\r\n        padding: 0 2rem;\r\n        gap: 2.5rem;\r\n    }\r\n}\r\n\r\n#winner-box {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    height: fit-content;\r\n    width: max(250px, 50vw);\r\n    margin: 1rem auto;\r\n    background-color: var(--box-color);\r\n    font-family: monofett;\r\n    letter-spacing: 1px;;\r\n}\r\n\r\n/* End of Containers*/\r\n\r\n/* Text */\r\n#grid-title {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.title-screen h1 {\r\n    padding-top: 1.5rem;\r\n    font-size: 60px;\r\n    font-family: monofett;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n#status-box h2 {\r\n    padding: 0.25rem 2.5rem;\r\n}\r\n/*End of Text*/\r\n\r\n/*Images*/\r\n#status-box div {\r\n    display: inline-block;\r\n    height: 25px;\r\n    width: 25px;\r\n    vertical-align: bottom;\r\n    border: 2px solid var(--outline-color);\r\n}\r\n\r\n#status-box img {\r\n    width: 30px;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.right {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n\r\n/*End of Images*/\r\n\r\n/*Grid Components*/\r\n.p1,\r\n.p2 {\r\n    border: 0.5px solid var(--line-color);\r\n}\r\n\r\n.p1 {\r\n    background-color: var(--grid1);\r\n}\r\n\r\n.p2 {\r\n    background-color: var(--grid2);\r\n}\r\n\r\n.grid-ship {\r\n    background-color: brown;\r\n}\r\n\r\n.grid-hit {\r\n    background: url('./img/explosion-ship.png');\r\n    background-size: contain;\r\n}\r\n\r\n.p1.grid-miss {\r\n    background: url('./img/whirlpool-miss-dark.png');/*radial-gradient(rgb(255, 202, 202) 40%, var(--grid1));*/\r\n    background-size: contain;\r\n}\r\n\r\n.p2.grid-miss {\r\n    background: url('./img/whirlpool-miss-light.png')/*radial-gradient(rgb(255, 202, 202) 40%, var(--grid2))*/;\r\n    background-size: contain;\r\n}\r\n\r\n.grid-target,\r\n.grid-up,\r\n.grid-right {\r\n    width: calc(var(--grid-size) / 10);\r\n    height: calc(var(--grid-size) / 10);\r\n}\r\n\r\n.grid-up {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.grid-right {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.grid-target {\r\n    filter: invert();\r\n    background-color: cyan;\r\n    border-radius: calc(var(--grid-size) / 10);\r\n}\r\n\r\n#grid img {\r\n    pointer-events: none;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n/*End of Grid Components*/\r\n\r\n/* Buttons */\r\n#winner-box button,\r\n.title-screen button {\r\n    height: 5rem;\r\n    width: 10rem;\r\n    font-size: 30px;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#player-icon-container button {\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 25px;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n#player-1.highlight {\r\n    color: var(--grid2);\r\n    background-color: var(--grid1);\r\n    transform: scale(1.1);\r\n}\r\n\r\n#player-2.highlight {\r\n    color: var(--grid1);\r\n    background-color: var(--grid2);\r\n    transform: scale(1.1);\r\n}\r\n\r\n#ship-menu button {\r\n    height: 50px;\r\n    width: 50px;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n#player-icon-container button:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 5px 1px black;\r\n    transform: scale(1.2);\r\n}\r\n\r\n#winner-box button:hover,\r\n#ship-menu button:hover,\r\n.title-screen button:hover {\r\n    transform: scale(1.05);\r\n    filter: saturate(10%);\r\n    cursor: pointer;\r\n}\r\n\r\n#grid * {\r\n    cursor: none !important;\r\n}\r\n\r\n#winner-box button {\r\n\r\n}\r\n/* End of Buttons*/"],"sourceRoot":""}]);
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
        }

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
        }

        const aiTakesTurn = (board, user, target, targetBoard) => {
            const [x, y] = [Math.floor(Math.random() * 9.9), Math.floor(Math.random() * 9.9)];
            const coords = `[${x},${y}]`;
            const results = takeTurn(coords, board, user, target, targetBoard);
            if(!results) return aiTakesTurn(board,user,target, targetBoard)
            else return results;
        }

        return { playerNumber, takeTurn, aiTakesTurn, isTurn, isAi };
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
            placeShipBtn.textContent = '↓ Place Ships ↓';
            placeShipBtn.setAttribute('id', 'place-ship');
            container.appendChild(btnContainer);
            btnContainer.appendChild(placeShipBtn);
        };

        const openPlaceShipMenu = () => {
            // buttons //
            const carrier = document.createElement('button');
            carrier.setAttribute('id', 'carrier');
            carrier.textContent = 'Carrier (5)';
            const battleship = document.createElement('button');
            battleship.setAttribute('id', 'battleship');
            battleship.textContent = 'Battle ship (4)';
            const submarine = document.createElement('button');
            submarine.setAttribute('id', 'submarine');
            submarine.textContent = 'Sub marine (3)';
            const patrolBoat = document.createElement('button');
            patrolBoat.setAttribute('id', 'patrol-boat');
            patrolBoat.textContent = 'Patrol boat (2)';
            const rotate = document.createElement('button');
            rotate.setAttribute('id', 'rotate-ship');
            rotate.textContent = '↷ Rotate Ship ↷';
            
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
            setTurnStatus();
        };

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

// next step => readjust the size for bigger width screens by moving the place ship widget higher
// try to add a small grid to show what the computer is doing on vs computer

/***/ }),

/***/ "./src/img/arrow.png":
/*!***************************!*\
  !*** ./src/img/arrow.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9f321a8a1e93ca9ff96.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsb0JBQW9CO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxRQUFRO0FBQ3BFLDREQUE0RCxRQUFRO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxhQUFhLEVBQUM7QUFDN0I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzV3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNpQjtBQUNOO0FBQ2pDO0FBQ0E7QUFDQSxrQkFBa0IsdURBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvZXhwbG9zaW9uLXNoaXAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvd2hpcmxwb29sLW1pc3MtZGFyay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy93aGlybHBvb2wtbWlzcy1saWdodC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1ncmlkLWZvbnQtYzogcmdiKDUyLCA0MSwgNTEpO1xcclxcbiAgICAtLWJveC1jb2xvcjogcmdiYSgyNDAsIDI1NSwgMjU1LCAwLjkpO1xcclxcbiAgICAtLWdyaWQxOiBkYXJrYmx1ZTtcXHJcXG4gICAgLS1ncmlkMjogcmdiKDAsIDE0MCwgMjU1KTsgXFxyXFxuICAgIC0tbGluZS1jb2xvcjogcmdiKDkwLCAxMTYsIDIzMik7XFxyXFxuICAgIC0tb3V0bGluZS1jb2xvcjogcmdiKDUzLCA3NCwgOTQpOyBcXHJcXG4gICAgLS1ib3gtb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG5cXHJcXG4gICAgLS1ncmlkLXNpemU6IG1heCgzMDBweCwgMzB2dyk7XFxyXFxuICAgIC0tZ3JpZC1zaXplLXdpZGU6IG1pbig0NTBweCwgMzB2dyk7XFxyXFxuICAgIC0tZ3JpZC1zaXplLW1pbmk6IDE1MHB4O1xcclxcblxcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaWQtZm9udC1jKTtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRhaW5lcnMgKi9cXHJcXG5cXHJcXG4udGl0bGUtc2NyZWVuLFxcclxcbiN0aXRsZS1zY3JlZW4tbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUtc2NyZWVuLW1lbnV7XFxyXFxuICAgIGdhcDogNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlLXNjcmVlbi1idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpe1xcclxcbiAgICAjdGl0bGUtc2NyZWVuLWJ0bnMge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC50aXRsZS1zY3JlZW4gaDEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuI3dpbm5lci1ib3ggYnV0dG9uLFxcclxcbiN3aW5uZXItYm94LFxcclxcbi50aXRsZS1zY3JlZW4gYnV0dG9uLFxcclxcbiN0aXRsZS1zY3JlZW4tbWVudSxcXHJcXG4jcGxheWVyLWljb24tY29udGFpbmVyLFxcclxcbiNzdGF0dXMtYm94LFxcclxcbiNzaGlwLW1lbnUsXFxyXFxuI2dyaWQtMixcXHJcXG4jZ3JpZCB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDVweCB2YXIoLS1vdXRsaW5lLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgLypub3QgZ3JpZCovXFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDEzLzEyLzE3LzIwLzEwL2J1YmJsZXMtMjMwMDE0Xzk2MF83MjAuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItaWNvbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwLjNyZW0gYXV0byAxcmVtIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWdyaWQtc2l6ZSkgKiAxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZC0yLFxcclxcbiNncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBjYWxjKHZhcigtLWdyaWQtc2l6ZSkgLyAxMCkpO1xcclxcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG4gICAgd2lkdGg6IHZhcigtLWdyaWQtc2l6ZSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tZ3JpZC1zaXplKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQyKTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQtMiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5taW5pLWdyaWQge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgY2FsYyh2YXIoLS1ncmlkLXNpemUtbWluaSkgLyAxMCkpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBjYWxjKHZhcigtLWdyaWQtc2l6ZS1taW5pKSAvIDEwKSkgIWltcG9ydGFudDtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWdyaWQtc2l6ZS1taW5pKSAhaW1wb3J0YW50O1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWdyaWQtc2l6ZS1taW5pKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jYW5ub3VuY2VtZW50IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTM1JTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTV2aDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDN2aDtcXHJcXG4gICAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmlkLWZvbnQtYyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9mZXR0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggd2hpdGU7XFxyXFxuICAgIG91dGxpbmU6IHZhcigtLWJveC1vdXRsaW5lKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNDIwcHgpe1xcclxcbiAgICAjYW5ub3VuY2VtZW50IHtcXHJcXG4gICAgICAgIGhlaWdodDogMTV2aCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjc3RhdHVzLWJveCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiNzdGF0dXMtYm94IHtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWdyaWQtc2l6ZSk7XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyLjVyZW0gMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDc1cHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtaW4td2lkdGg6IDEwMDBweCl7XFxyXFxuICAgICNzaGlwLW1lbnUge1xcclxcbiAgICAgICAgcGFkZGluZzogMCAycmVtO1xcclxcbiAgICAgICAgZ2FwOiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuI3dpbm5lci1ib3gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IG1heCgyNTBweCwgNTB2dyk7XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub2ZldHQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbmQgb2YgQ29udGFpbmVycyovXFxyXFxuXFxyXFxuLyogVGV4dCAqL1xcclxcbiNncmlkLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1zY3JlZW4gaDEge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDYwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vZmV0dDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzdGF0dXMtYm94IGgyIHtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbSAyLjVyZW07XFxyXFxufVxcclxcbi8qRW5kIG9mIFRleHQqL1xcclxcblxcclxcbi8qSW1hZ2VzKi9cXHJcXG4jc3RhdHVzLWJveCBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW91dGxpbmUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHVzLWJveCBpbWcge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKkVuZCBvZiBJbWFnZXMqL1xcclxcblxcclxcbi8qR3JpZCBDb21wb25lbnRzKi9cXHJcXG4ucDEsXFxyXFxuLnAyIHtcXHJcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAxIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JpZDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucDIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkMik7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXNoaXAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4ucDEuZ3JpZC1taXNzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTsvKnJhZGlhbC1ncmFkaWVudChyZ2IoMjU1LCAyMDIsIDIwMikgNDAlLCB2YXIoLS1ncmlkMSkpOyovXFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnAyLmdyaWQtbWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikvKnJhZGlhbC1ncmFkaWVudChyZ2IoMjU1LCAyMDIsIDIwMikgNDAlLCB2YXIoLS1ncmlkMikpKi87XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtdGFyZ2V0LFxcclxcbi5ncmlkLXVwLFxcclxcbi5ncmlkLXJpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWdyaWQtc2l6ZSkgLyAxMCk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXVwIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1yaWdodCB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXRhcmdldCB7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQgaW1nIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypFbmQgb2YgR3JpZCBDb21wb25lbnRzKi9cXHJcXG5cXHJcXG4vKiBCdXR0b25zICovXFxyXFxuI3dpbm5lci1ib3ggYnV0dG9uLFxcclxcbi50aXRsZS1zY3JlZW4gYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1pY29uLWNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLTEuaGlnaGxpZ2h0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaWQyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JpZDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItMi5oaWdobGlnaHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JpZDEpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkMik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtbWVudSBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLWljb24tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IGJsYWNrO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItYm94IGJ1dHRvbjpob3ZlcixcXHJcXG4jc2hpcC1tZW51IGJ1dHRvbjpob3ZlcixcXHJcXG4udGl0bGUtc2NyZWVuIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIGZpbHRlcjogc2F0dXJhdGUoMTAlKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCAqIHtcXHJcXG4gICAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItYm94IGJ1dHRvbiB7XFxyXFxuXFxyXFxufVxcclxcbi8qIEVuZCBvZiBCdXR0b25zKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLGlEQUFpRDs7SUFFakQsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyx1QkFBdUI7O0lBRXZCLHlDQUF5QztJQUN6Qyx5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBLGVBQWU7O0FBRWY7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lB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LDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEseUJBQXlCOztBQUV6QixZQUFZO0FBQ1o7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxxQkFBcUI7QUFDekI7O0FBRUE7OztJQUdJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tZ3JpZC1mb250LWM6IHJnYig1MiwgNDEsIDUxKTtcXHJcXG4gICAgLS1ib3gtY29sb3I6IHJnYmEoMjQwLCAyNTUsIDI1NSwgMC45KTtcXHJcXG4gICAgLS1ncmlkMTogZGFya2JsdWU7XFxyXFxuICAgIC0tZ3JpZDI6IHJnYigwLCAxNDAsIDI1NSk7IFxcclxcbiAgICAtLWxpbmUtY29sb3I6IHJnYig5MCwgMTE2LCAyMzIpO1xcclxcbiAgICAtLW91dGxpbmUtY29sb3I6IHJnYig1MywgNzQsIDk0KTsgXFxyXFxuICAgIC0tYm94LW91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuXFxyXFxuICAgIC0tZ3JpZC1zaXplOiBtYXgoMzAwcHgsIDMwdncpO1xcclxcbiAgICAtLWdyaWQtc2l6ZS13aWRlOiBtaW4oNDUwcHgsIDMwdncpO1xcclxcbiAgICAtLWdyaWQtc2l6ZS1taW5pOiAxNTBweDtcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmlkLWZvbnQtYyk7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWluZXJzICovXFxyXFxuXFxyXFxuLnRpdGxlLXNjcmVlbixcXHJcXG4jdGl0bGUtc2NyZWVuLW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlLXNjcmVlbi1tZW51e1xcclxcbiAgICBnYXA6IDVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZS1zY3JlZW4tYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KXtcXHJcXG4gICAgI3RpdGxlLXNjcmVlbi1idG5zIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAudGl0bGUtc2NyZWVuIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItYm94IGJ1dHRvbixcXHJcXG4jd2lubmVyLWJveCxcXHJcXG4udGl0bGUtc2NyZWVuIGJ1dHRvbixcXHJcXG4jdGl0bGUtc2NyZWVuLW1lbnUsXFxyXFxuI3BsYXllci1pY29uLWNvbnRhaW5lcixcXHJcXG4jc3RhdHVzLWJveCxcXHJcXG4jc2hpcC1tZW51LFxcclxcbiNncmlkLTIsXFxyXFxuI2dyaWQge1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCA1cHggdmFyKC0tb3V0bGluZS1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qbm90IGdyaWQqL1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxMy8xMi8xNy8yMC8xMC9idWJibGVzLTIzMDAxNF85NjBfNzIwLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLWljb24tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMC4zcmVtIGF1dG8gMXJlbSBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1ncmlkLXNpemUpICogMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQtMixcXHJcXG4jZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBjYWxjKHZhcigtLWdyaWQtc2l6ZSkgLyAxMCkpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgY2FsYyh2YXIoLS1ncmlkLXNpemUpIC8gMTApKTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1ncmlkLXNpemUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWdyaWQtc2l6ZSk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFweCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkMik7XFxyXFxufVxcclxcblxcclxcbiNncmlkLTIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWluaS1ncmlkIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIGNhbGModmFyKC0tZ3JpZC1zaXplLW1pbmkpIC8gMTApKSAhaW1wb3J0YW50O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgY2FsYyh2YXIoLS1ncmlkLXNpemUtbWluaSkgLyAxMCkpICFpbXBvcnRhbnQ7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1ncmlkLXNpemUtbWluaSkgIWltcG9ydGFudDtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1ncmlkLXNpemUtbWluaSkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI2Fubm91bmNlbWVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyNSU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0zNSU7XFxyXFxuICAgIG1hcmdpbi10b3A6IC01dmg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzdmg7XFxyXFxuICAgIGhlaWdodDogMTB2aDtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JpZC1mb250LWMpO1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vZmV0dDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHdoaXRlO1xcclxcbiAgICBvdXRsaW5lOiB2YXIoLS1ib3gtb3V0bGluZSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDQyMHB4KXtcXHJcXG4gICAgI2Fubm91bmNlbWVudCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1dmggIWltcG9ydGFudDtcXHJcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3N0YXR1cy1ib3gge1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDAgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHVzLWJveCB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1ncmlkLXNpemUpO1xcclxcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG4gICAgcGFkZGluZzogMi41cmVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNzaGlwLW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWluLXdpZHRoOiAxMDAwcHgpe1xcclxcbiAgICAjc2hpcC1tZW51IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG4gICAgICAgIGdhcDogMi41cmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItYm94IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiBtYXgoMjUwcHgsIDUwdncpO1xcclxcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9mZXR0O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4OztcXHJcXG59XFxyXFxuXFxyXFxuLyogRW5kIG9mIENvbnRhaW5lcnMqL1xcclxcblxcclxcbi8qIFRleHQgKi9cXHJcXG4jZ3JpZC10aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtc2NyZWVuIGgxIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub2ZldHQ7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhdHVzLWJveCBoMiB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMi41cmVtO1xcclxcbn1cXHJcXG4vKkVuZCBvZiBUZXh0Ki9cXHJcXG5cXHJcXG4vKkltYWdlcyovXFxyXFxuI3N0YXR1cy1ib3ggZGl2IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1vdXRsaW5lLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXR1cy1ib3ggaW1nIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbi5yaWdodCB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLypFbmQgb2YgSW1hZ2VzKi9cXHJcXG5cXHJcXG4vKkdyaWQgQ29tcG9uZW50cyovXFxyXFxuLnAxLFxcclxcbi5wMiB7XFxyXFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wMSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JpZDIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1zaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWhpdCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvZXhwbG9zaW9uLXNoaXAucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnAxLmdyaWQtbWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvd2hpcmxwb29sLW1pc3MtZGFyay5wbmcnKTsvKnJhZGlhbC1ncmFkaWVudChyZ2IoMjU1LCAyMDIsIDIwMikgNDAlLCB2YXIoLS1ncmlkMSkpOyovXFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnAyLmdyaWQtbWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvd2hpcmxwb29sLW1pc3MtbGlnaHQucG5nJykvKnJhZGlhbC1ncmFkaWVudChyZ2IoMjU1LCAyMDIsIDIwMikgNDAlLCB2YXIoLS1ncmlkMikpKi87XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtdGFyZ2V0LFxcclxcbi5ncmlkLXVwLFxcclxcbi5ncmlkLXJpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWdyaWQtc2l6ZSkgLyAxMCk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXVwIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1yaWdodCB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLXRhcmdldCB7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQgaW1nIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypFbmQgb2YgR3JpZCBDb21wb25lbnRzKi9cXHJcXG5cXHJcXG4vKiBCdXR0b25zICovXFxyXFxuI3dpbm5lci1ib3ggYnV0dG9uLFxcclxcbi50aXRsZS1zY3JlZW4gYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1pY29uLWNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLTEuaGlnaGxpZ2h0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaWQyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JpZDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItMi5oaWdobGlnaHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JpZDEpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkMik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtbWVudSBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLWljb24tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IGJsYWNrO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItYm94IGJ1dHRvbjpob3ZlcixcXHJcXG4jc2hpcC1tZW51IGJ1dHRvbjpob3ZlcixcXHJcXG4udGl0bGUtc2NyZWVuIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIGZpbHRlcjogc2F0dXJhdGUoMTAlKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCAqIHtcXHJcXG4gICAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXItYm94IGJ1dHRvbiB7XFxyXFxuXFxyXFxufVxcclxcbi8qIEVuZCBvZiBCdXR0b25zKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYXR0bGVTaGlwcyA9ICgoKSA9PiB7XHJcbiAgICAvL0ZhY3Rvcmllc1xyXG4gICAgY29uc3Qgc2hpcCA9IChjb29yZHMsIGxlbmd0aCwgdGltZXNIaXQsIHN1bmspID0+IHtcclxuICAgICAgICBjb25zdCBoaXQgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgIHRhcmdldC50aW1lc0hpdCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNTdW5rID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LnRpbWVzSGl0ID49IHRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5zdW5rID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7IGNvb3JkcywgbGVuZ3RoLCB0aW1lc0hpdCwgc3VuaywgaGl0ICxpc1N1bmssIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2FtZUJvYXJkID0gKGdyaWQsIGlzQWkgPSBmYWxzZSkgPT4ge1xyXG4gICAgICAgIC8vYm9hcmQgb2JqZWN0c1xyXG4gICAgICAgIGNvbnN0IHNoaXBzID0gW107XHJcbiAgICAgICAgY29uc3QgdW5wbGFjZWRTaGlwcyA9IFtcclxuICAgICAgICAgICAge25hbWU6ICdjYXJyaWVyJywgbGVuZ3RoOiA1LCBudW1iZXI6IDF9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ2JhdHRsZXNoaXAnLCBsZW5ndGg6IDQsIG51bWJlcjogMX0sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnc3VibWFyaW5lJywgbGVuZ3RoOiAzLCBudW1iZXI6IDR9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3BhdHJvbCBib2F0JywgbGVuZ3RoOiAyLCBudW1iZXI6IDN9XHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBhdHRhY2tMb2cgPSBbXTtcclxuICAgICAgICBjb25zdCBwbGFjZVBoYXNlID0gW3RydWVdO1xyXG5cclxuICAgICAgICBjb25zdCBnZW5lcmF0ZUdyaWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRNYXAgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPD0gOTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICBncmlkTWFwLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlOiBgWyR7aX0sJHtqfV1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwSGVyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpdEhlcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBncmlkTWFwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ3JpZCA9IGdlbmVyYXRlR3JpZCgpO1xyXG5cclxuICAgICAgICAvL2JvYXJkIG1hbmlwdWxhdG9yc1xyXG4gICAgICAgIGNvbnN0IHNldEJvYXJkID0gKGNvb3JkcywgcHJvcCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcG90cyA9IGdyaWQuZmlsdGVyKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb29yZHMgPT09IGNvb3JkLmNvb3JkaW5hdGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKHByb3AgPT09ICdzaGlwSGVyZScpIHJldHVybiBzcG90c1swXS5zaGlwSGVyZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHNwb3RzWzBdLmhpdEhlcmUgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZVNoaXBmcm9tU3RvcmFnZSA9IChsZW5ndGgpID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoKGxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHVucGxhY2VkU2hpcHNbMF0ubnVtYmVyLS1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogdW5wbGFjZWRTaGlwc1sxXS5udW1iZXItLVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogdW5wbGFjZWRTaGlwc1syXS5udW1iZXItLVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiB1bnBsYWNlZFNoaXBzWzNdLm51bWJlci0tXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGdyaWQgaXRlcmF0b3JzIC8vXHJcbiAgICAgICAgY29uc3QgY2hlY2tHcmlkRm9yU2hpcCA9IChjb29yZHMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3BvdHMgPSBncmlkLmZpbHRlcihjb29yZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjb29yZC5zaGlwSGVyZSAmJiBjb29yZC5jb29yZGluYXRlID09PSBjb29yZHMgKSByZXR1cm4gY29vcmQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZihzcG90cy5sZW5ndGggPCAxIHx8ICFzcG90cykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3BvdHNbMF0uc2hpcEhlcmU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hlY2tHcmlkRm9ySGl0ID0gKGNvb3JkcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcG90cyA9IGdyaWQuZmlsdGVyKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNvb3JkLmhpdEhlcmUgJiYgY29vcmQuY29vcmRpbmF0ZSA9PT0gY29vcmRzKSByZXR1cm4gY29vcmQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZihzcG90cy5sZW5ndGggPCAxIHx8ICFzcG90cykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3BvdHNbMF0uaGl0SGVyZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjaGVja1N0b3JhZ2VGb3JTaGlwID0gKGxlbmd0aCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVTaGlwID0gW11cclxuICAgICAgICAgICAgdW5wbGFjZWRTaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYobGVuZ3RoID09PSBzaGlwLmxlbmd0aCAmJiBzaGlwLm51bWJlciA+IDApIGF2YWlsYWJsZVNoaXAucHVzaChzaGlwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKGF2YWlsYWJsZVNoaXAubGVuZ3RoID4gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrTnVtT2ZTdW5rU2hpcHMgPSAoc3Vua1NoaXBzID0gW10pID0+IHtcclxuICAgICAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHNoaXAuc3Vuaykgc3Vua1NoaXBzLnB1c2goc2hpcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gc3Vua1NoaXBzLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldERpcmVjdGlvbnMgPSAobGVuZ3RoLCB4LCB5LCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IFtjaGVja0gsIGNoZWNrVl0gPSBbZmFsc2UsIGZhbHNlXVxyXG4gICAgICAgICAgICBjb25zdCBuZXdDb29yZHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3Jpem9udGFsID0gYFske3graX0sJHt5fV1gO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tIKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGNoZWNrSCA9IGNoZWNrR3JpZEZvclNoaXAoaG9yaXpvbnRhbClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsID0gYFske3h9LCR7eStpfV1gO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tWKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGNoZWNrViA9IGNoZWNrR3JpZEZvclNoaXAodmVydGljYWwpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaG9yaXpvbnRhbCA9IGBbJHt4K2l9LCR7eX1dYDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsID0gYFske3h9LCR7eStpfV1gO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2hlY2tIKSByZXR1cm4gJ2Vycm9yJztcclxuICAgICAgICAgICAgICAgICAgICBzZXRCb2FyZChob3Jpem9udGFsLCAnc2hpcEhlcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDb29yZHMucHVzaChob3Jpem9udGFsKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjaGVja1YpIHJldHVybiAnZXJyb3InO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEJvYXJkKHZlcnRpY2FsLCAnc2hpcEhlcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDb29yZHMucHVzaCh2ZXJ0aWNhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld0Nvb3JkcztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBnYW1lIGZ1bmN0aW9ucyAvL1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZVBoYXNlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsU2hpcHNJblN0b3JhZ2UgPSBbXHJcbiAgICAgICAgICAgICAgICBjaGVja1N0b3JhZ2VGb3JTaGlwKDUpLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tTdG9yYWdlRm9yU2hpcCg0KSxcclxuICAgICAgICAgICAgICAgIGNoZWNrU3RvcmFnZUZvclNoaXAoMyksXHJcbiAgICAgICAgICAgICAgICBjaGVja1N0b3JhZ2VGb3JTaGlwKDIpXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBpZih0b3RhbFNoaXBzSW5TdG9yYWdlLmV2ZXJ5KHNoaXAgPT4gIXNoaXApKSBlbmQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZihlbmQpeyAgICBcclxuICAgICAgICAgICAgICAgIHBsYWNlUGhhc2VbMF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZW5kIG9mIHBsYWNlIHBoYXNlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJ2NvbnRpbnVlIHBsYWNpbmcnO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYWNlU2hpcCA9IChsZW5ndGgsIGNvb3JkcywgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFjaGVja1N0b3JhZ2VGb3JTaGlwKGxlbmd0aCkgfHwgIXBsYWNlUGhhc2VbMF0pIHJldHVybjsgLy9UQkFcclxuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gW051bWJlcihjb29yZHNbMV0pLCBOdW1iZXIoY29vcmRzWzNdKV07XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbiA9XHJcbiAgICAgICAgICAgICh4ICsgbGVuZ3RoID49IDExICYmIGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKVxyXG4gICAgICAgICAgICB8fCBcclxuICAgICAgICAgICAgKHkgKyBsZW5ndGggPj0gMTEgJiYgZGlyZWN0aW9uID09PSAndmVydGljYWwnKTtcclxuICAgICAgICAgICAgaWYoY29uKSByZXR1cm4gJ2Vycm9yJztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0Nvb3JkcyA9IGdldERpcmVjdGlvbnMobGVuZ3RoLCB4LCB5LCBkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBpZiAobmV3Q29vcmRzID09PSAnZXJyb3InKSByZXR1cm4gJ2Vycm9yJztcclxuICAgICAgICAgICAgY29uc3QgbmV3U2hpcCA9IHNoaXAobmV3Q29vcmRzLCBsZW5ndGgsIDAsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHJlbW92ZVNoaXBmcm9tU3RvcmFnZShsZW5ndGgpO1xyXG4gICAgICAgICAgICBjaGFuZ2VQaGFzZSgpO1xyXG4gICAgICAgICAgICBzaGlwcy5wdXNoKG5ld1NoaXApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3U2hpcDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhaVBsYWNlU2hpcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNoaXBEaXJlY3Rpb247XHJcbiAgICAgICAgICAgIGNvbnN0IFtjaGVjazUsIGNoZWNrNCwgY2hlY2szLCBjaGVjazJdID0gW1xyXG4gICAgICAgICAgICAgICAgY2hlY2tTdG9yYWdlRm9yU2hpcCg1KSxcclxuICAgICAgICAgICAgICAgIGNoZWNrU3RvcmFnZUZvclNoaXAoNCksXHJcbiAgICAgICAgICAgICAgICBjaGVja1N0b3JhZ2VGb3JTaGlwKDMpLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tTdG9yYWdlRm9yU2hpcCgyKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIGNvbnN0IFt4LHksIGRpckRlY10gPSBbXHJcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5LjkpLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOS45KSxcclxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgaWYoZGlyRGVjID4gMC40OSkgc2hpcERpcmVjdGlvbiA9ICd2ZXJ0aWNhbCdcclxuICAgICAgICAgICAgZWxzZSBzaGlwRGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xyXG4gICAgICAgICAgICBpZihjaGVjazUpe1xyXG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKDUsIGBbJHt4fSwke3l9XWAsIHNoaXBEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjaGVjazQpe1xyXG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKDQsIGBbJHt4fSwke3l9XWAsIHNoaXBEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjaGVjazMpe1xyXG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKDMsIGBbJHt4fSwke3l9XWAsIHNoaXBEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjaGVjazIpe1xyXG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKDIsIGBbJHt4fSwke3l9XWAsIHNoaXBEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNoZWNrNSB8fCBjaGVjazQgfHwgY2hlY2szIHx8IGNoZWNrMil7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWlQbGFjZVNoaXAoKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdwbGFjZWQgYWxsIHNoaXBzJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGxvc2UoKSkgcmV0dXJuICdnYW1lIG92ZXInO1xyXG4gICAgICAgICAgICBpZihjaGVja0dyaWRGb3JIaXQoY29vcmRzKSB8fCBwbGFjZVBoYXNlWzBdKSByZXR1cm47XHJcbiAgICAgICAgICAgIHNldEJvYXJkKGNvb3JkcywgJ2hpdEhlcmUnKTsgICAgICBcclxuICAgICAgICAgICAgYXR0YWNrTG9nLnB1c2goY29vcmRzKTtcclxuICAgICAgICAgICAgaWYgKCFjaGVja0dyaWRGb3JTaGlwKGNvb3JkcykpIHJldHVybiAnbWlzcyc7XHJcbiAgICAgICAgICAgIGxldCB0aGlzU2hpcDtcclxuICAgICAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmNvb3Jkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29vcmRzID09PSBzaGlwLmNvb3Jkc1tpXSkgdGhpc1NoaXAgPSBzaGlwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpc1NoaXAuaGl0KHRoaXNTaGlwKTtcclxuICAgICAgICAgICAgdGhpc1NoaXAuaXNTdW5rKHRoaXNTaGlwKTtcclxuICAgICAgICAgICAgcmV0dXJuICdoaXQnO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGxvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmlzb24gPSBbXTtcclxuICAgICAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHNoaXAuc3VuaykgY29tcGFyaXNvbi5wdXNoKHNoaXApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmlzb24ubGVuZ3RoID49IHNoaXBzLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzQWksIFxyXG4gICAgICAgICAgICBncmlkLFxyXG4gICAgICAgICAgICBwbGFjZVNoaXAsXHJcbiAgICAgICAgICAgIGFpUGxhY2VTaGlwLFxyXG4gICAgICAgICAgICBzaGlwcyxcclxuICAgICAgICAgICAgdW5wbGFjZWRTaGlwcyxcclxuICAgICAgICAgICAgYXR0YWNrTG9nLFxyXG4gICAgICAgICAgICBjaGVja0dyaWRGb3JTaGlwLFxyXG4gICAgICAgICAgICBjaGVja0dyaWRGb3JIaXQsXHJcbiAgICAgICAgICAgIGNoZWNrTnVtT2ZTdW5rU2hpcHMsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBdHRhY2ssXHJcbiAgICAgICAgICAgIC8vcmVtb3ZlIGJlbG93XHJcbiAgICAgICAgICAgIHBsYWNlUGhhc2UsXHJcbiAgICAgICAgICAgIGxvc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGxheWVyID0gKHBsYXllck51bWJlciwgaXNBaSA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlyc3RUdXJuID0gKCgpID0+IHtcclxuICAgICAgICAgICAgaWYocGxheWVyTnVtYmVyID09PSAxKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBpc1R1cm4gPSBmaXJzdFR1cm4oKTsgXHJcblxyXG4gICAgICAgIGNvbnN0IHRha2VUdXJuID0gKGNvb3JkcywgYm9hcmQsIHVzZXIsIHRhcmdldCwgdGFyZ2V0Qm9hcmQpID0+IHtcclxuICAgICAgICAgICAgaWYoIXVzZXIuaXNUdXJuIHx8IGJvYXJkLmNoZWNrR3JpZEZvckhpdChjb29yZHMpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdHMgPT09ICdnYW1lIG92ZXInKSByZXR1cm4gJ2dhbWUgb3Zlcic7XHJcbiAgICAgICAgICAgIHVzZXIuaXNUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRhcmdldC5pc1R1cm4gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZih0YXJnZXQuaXNBaSkgYWlUYWtlc1R1cm4odGFyZ2V0Qm9hcmQsIHRhcmdldCwgdXNlciwgYm9hcmQpO1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0c30gYXQgJHtjb29yZHN9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFpVGFrZXNUdXJuID0gKGJvYXJkLCB1c2VyLCB0YXJnZXQsIHRhcmdldEJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5LjkpLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5LjkpXTtcclxuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gYFske3h9LCR7eX1dYDtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IHRha2VUdXJuKGNvb3JkcywgYm9hcmQsIHVzZXIsIHRhcmdldCwgdGFyZ2V0Qm9hcmQpO1xyXG4gICAgICAgICAgICBpZighcmVzdWx0cykgcmV0dXJuIGFpVGFrZXNUdXJuKGJvYXJkLHVzZXIsdGFyZ2V0LCB0YXJnZXRCb2FyZClcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gcmVzdWx0cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHBsYXllck51bWJlciwgdGFrZVR1cm4sIGFpVGFrZXNUdXJuLCBpc1R1cm4sIGlzQWkgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNoaXAsXHJcbiAgICAgICAgZ2FtZUJvYXJkLFxyXG4gICAgICAgIHBsYXllcixcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXR0bGVTaGlwczsiLCJpbXBvcnQgYmF0dGxlU2hpcHMgZnJvbSBcIi4vYmF0dGxlc2hpcFwiO1xyXG5pbXBvcnQgYXJyb3cgZnJvbSAnLi9pbWcvYXJyb3cucG5nJztcclxuaW1wb3J0IGNyb3NzaGFpciBmcm9tICcuL2ltZy9jcm9zc2hhaXJzLWdwcy5wbmcnO1xyXG5cclxuY29uc3QgdXNlckludGVyZmFjZSA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZVNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2V0Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZS1zY3JlZW4nKTtcclxuICAgICAgICAgICAgd2hpbGUoY29udGFpbmVyLmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkTWVudUNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlLXNjcmVlbi1tZW51Jyk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkVGl0bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtc2NyZWVuLW1lbnUnKTtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdCYXR0bGVTaGlwcyc7XHJcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkQnV0dG9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1zY3JlZW4tbWVudScpO1xyXG4gICAgICAgICAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUtc2NyZWVuLWJ0bnMnKTtcclxuICAgICAgICAgICAgY29uc3QgcHZwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHB2cEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3B2cC1idG4nKTtcclxuICAgICAgICAgICAgY29uc3QgcHZtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHB2bUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3B2bS1idG4nKTtcclxuICAgICAgICAgICAgcHZwQnRuLnRleHRDb250ZW50ID0gJ1ZzIFBsYXllcic7XHJcbiAgICAgICAgICAgIHB2bUJ0bi50ZXh0Q29udGVudCA9ICdWcyBDb21wdXRlcic7XHJcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZChwdnBCdG4sIHB2bUJ0bik7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwdnAgPSBnYW1lU2NyZWVuKHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCBwdm0gPSBnYW1lU2NyZWVuKGZhbHNlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B2cC1idG4nKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHZwLmxvYWRHYW1lU2NyZWVuKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B2bS1idG4nKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHZtLmxvYWRHYW1lU2NyZWVuKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBsb2FkVGl0bGVTY3JlZW4gPSAoKSA9PiB7IFxyXG4gICAgICAgICAgICBzZXRDb250YWluZXIoKTtcclxuICAgICAgICAgICAgYWRkTWVudUNvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICBhZGRUaXRsZSgpO1xyXG4gICAgICAgICAgICBhZGRCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGFkZEV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgbG9hZFRpdGxlU2NyZWVuLCB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnYW1lU2NyZWVuID0gKHB2cCA9IGZhbHNlKSA9PiB7ICAgICAgICBcclxuICAgICAgICBjb25zdCBzZXRQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwdnBcclxuICAgICAgICAgICAgICAgID8gYmF0dGxlU2hpcHMucGxheWVyKDIsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgOiBiYXR0bGVTaGlwcy5wbGF5ZXIoMiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldEJvYXJkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcHZwXHJcbiAgICAgICAgICAgICAgICA/IGJhdHRsZVNoaXBzLmdhbWVCb2FyZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIDogYmF0dGxlU2hpcHMuZ2FtZUJvYXJkKG51bGwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVyMSA9IGJhdHRsZVNoaXBzLnBsYXllcigxLCBmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyMiA9IHNldFBsYXllcigpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkMSA9IGJhdHRsZVNoaXBzLmdhbWVCb2FyZCgpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkMiA9IHNldEJvYXJkKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBwb2ludGVyID0ge1xyXG4gICAgICAgICAgICBwbGF5ZXI6IDEsXHJcbiAgICAgICAgICAgIGlzUGxhY2luZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGxlbmd0aDogMCxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgICAgIHBoYXNlOiAncGxhY2UnIC8vIG9yIGF0dGFja1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHNldENvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdnYW1lLXNjcmVlbicpO1xyXG4gICAgICAgICAgICB3aGlsZShjb250YWluZXIuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gZ2FtZSBjb250cm9sbGVyIC8vXHJcbiAgICAgICAgY29uc3QgY2hhbmdlV2hvUGxhY2luZyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2hpcHMgPSBbXVxyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBsYXllciA9PT0gMSl7ICAgIFxyXG4gICAgICAgICAgICAgICAgYm9hcmQxLnVucGxhY2VkU2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXBzLnB1c2goc2hpcC5udW1iZXIpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY29uID0gc2hpcHMucmVkdWNlKChjdXJyZW50LCB0b3RhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsICs9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgICAgaWYoY29uID09PSAwICYmIHNoaXBzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci5wbGF5ZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgc2V0QW5ub3VuY2VtZW50KCdQbGF5ZXIgMiBcXG4gUGxhY2luZyBQaGFzZScpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjaGFuZ2VHcmlkKHBsYXllcjIsIGJvYXJkMiwgdHJ1ZSksIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwb2ludGVyLnBoYXNlID0gJ3BsYWNlJywgMTAwMSk7XHJcbiAgICAgICAgICAgICAgICBzZXRHcmlkVGl0bGUocGxheWVyMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZW5kUGxhY2luZygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZFBsYWNpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBzID0gW11cclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IDIpe1xyXG4gICAgICAgICAgICAgICAgYm9hcmQyLnVucGxhY2VkU2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXBzLnB1c2goc2hpcC5udW1iZXIpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY29uID0gc2hpcHMucmVkdWNlKChjdXJyZW50LCB0b3RhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsICs9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoY29uID09PSAwICYmIHNoaXBzLmxlbmd0aCA+IDApeyAgICAgXHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLnBsYXllciA9IDE7XHJcbiAgICAgICAgICAgICAgICBzZXRBbm5vdW5jZW1lbnQoJ0F0dGFjayBQaGFzZScpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnRucygpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRBbm5vdW5jZW1lbnQoJ1BsYXllciAxIFR1cm4nKSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLnBoYXNlID0gJ2F0dGFjayc7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQnRucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFR1cm5TdGF0dXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VHcmlkKHBsYXllcjIsIGJvYXJkMiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUGxhY2VTaGlwQnV0dG9ucygpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7ICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZW5kVHVybiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYocGxheWVyMS5pc1R1cm4pe1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlR3JpZChwbGF5ZXIyLCBib2FyZDIpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAocGxheWVyMi5pc1R1cm4pe1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlR3JpZChwbGF5ZXIxLCBib2FyZDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFR1cm5TdGF0dXMoKTtcclxuICAgICAgICAgICAgc2V0QW5ub3VuY2VtZW50KCcnLCB0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0b2dnbGVCdG5zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoYnRuLmRpc2FibGVkKSBidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgYnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVuZCBvZiBnYW1lIGNvbnRyb2xsZXIgLy9cclxuXHJcbiAgICAgICAgLy8gcGxheWVyIHN0YXR1cyAvL1xyXG4gICAgICAgIGNvbnN0IGFkZFBsYXllckljb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJJY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHBsYXllckljb25Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXItaWNvbi1jb250YWluZXInKVxyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIxQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcjJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgcGxheWVyMUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllci0xJyk7XHJcbiAgICAgICAgICAgIHBsYXllcjJCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXItMicpO1xyXG4gICAgICAgICAgICBwbGF5ZXIxQnRuLnRleHRDb250ZW50ID0gJ1BsYXllciAxJztcclxuICAgICAgICAgICAgcGxheWVyMkJ0bi50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMic7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJJY29uQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdncmlkLXRpdGxlJyk7XHJcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYFBsYXllcltdYDtcclxuXHJcbiAgICAgICAgICAgIHBsYXllckljb25Db250YWluZXIuYXBwZW5kKHBsYXllcjFCdG4sIHRpdGxlLCBwbGF5ZXIyQnRuKTtcclxuXHJcbiAgICAgICAgICAgIHNldEdyaWRUaXRsZShwbGF5ZXIxKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1c0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBzdGF0dXNCb3guc2V0QXR0cmlidXRlKCdpZCcsICdzdGF0dXMtYm94Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1czEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpOyAvLyBwaGFzZSAvIHR1cm5cclxuICAgICAgICAgICAgc3RhdHVzMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXR1cy0xJyk7XHJcbiAgICAgICAgICAgIHN0YXR1czEudGV4dENvbnRlbnQgPSAncGhhc2U6IC8gdHVybjogJztcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJykgLy8gc2hpcCAvIHJvdW5kXHJcbiAgICAgICAgICAgIHN0YXR1czIuc2V0QXR0cmlidXRlKCdpZCcsICdzdGF0dXMtMicpO1xyXG4gICAgICAgICAgICBzdGF0dXMyLnRleHRDb250ZW50ID0gJ3NoaXA6IC8gcm91bmQ6J1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKSAvLyBkaXJlY3Rpb24gLyBzaGlwcyBzdW5rXHJcbiAgICAgICAgICAgIHN0YXR1czMuc2V0QXR0cmlidXRlKCdpZCcsICdzdGF0dXMtMycpO1xyXG4gICAgICAgICAgICBzdGF0dXMzLnRleHRDb250ZW50ID0gJ2RpcmVjdGlvbjogLyBzaGlwcyBzdW5rOic7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0dXNCb3gpO1xyXG4gICAgICAgICAgICBzdGF0dXNCb3guYXBwZW5kKHN0YXR1czEsIHN0YXR1czIsIHN0YXR1czMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2V0VHVyblN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0dXMtMScpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXR1cy0yJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1czMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHVzLTMnKTtcclxuICAgICAgICAgICAgY29uc3QgYm94ID0gYDxkaXYgY2xhc3M9XCJncmlkLXNoaXBcIj48L2Rpdj5gXHJcbiAgICAgICAgICAgIGxldCB0ZXh0QXJyb3cgPSBgPGltZyBzcmM9XCIke2Fycm93fVwiIC8+YDtcclxuXHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGhhc2UgPT09IFwicGxhY2VcIil7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMxLnRleHRDb250ZW50ID0gYFBoYXNlOiAke3BvaW50ZXIucGhhc2V9IHNoaXBzYDtcclxuICAgICAgICAgICAgICAgIGlmKHBvaW50ZXIuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB0ZXh0QXJyb3cgPSBgPGltZyBzcmM9XCIke2Fycm93fVwiIC8+YDtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGV4dEFycm93ID0gYDxpbWcgc3JjPVwiJHthcnJvd31cIiBjbGFzcz1cInJpZ2h0XCI+YFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzMy5pbm5lckhUTUwgPSBgRGlyZWN0aW9uOiAke3RleHRBcnJvd31gO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKHBvaW50ZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMyLnRleHRDb250ZW50ID0gJ1NoaXA6IG5vbmUoMCknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzMi5pbm5lckhUTUwgPSBgU2hpcDogJHtib3h9JHtib3h9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMyLmlubmVySFRNTCA9IGBTaGlwOiAke2JveH0ke2JveH0ke2JveH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czIuaW5uZXJIVE1MID0gYFNoaXA6ICR7Ym94fSR7Ym94fSR7Ym94fSR7Ym94fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzMi5pbm5lckhUTUwgPSBgU2hpcDogJHtib3h9JHtib3h9JHtib3h9JHtib3h9JHtib3h9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCB0dXJuID0gMDtcclxuICAgICAgICAgICAgICAgIGlmKHBsYXllcjEuaXNUdXJuKXR1cm4gPSAxO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihwbGF5ZXIyLmlzVHVybikgdHVybiA9IDI7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMxLnRleHRDb250ZW50ID0gYFR1cm46IHBsYXllciR7dHVybn1gO1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzMi50ZXh0Q29udGVudCA9IGBSb3VuZDogJHtib2FyZDIuYXR0YWNrTG9nLmxlbmd0aH1gO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci5wbGF5ZXIgPT09IDEgXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzdGF0dXMzLnRleHRDb250ZW50ID0gYFNoaXBzIFN1bms6ICR7Ym9hcmQxLmNoZWNrTnVtT2ZTdW5rU2hpcHMoKX1gXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0dXMzLnRleHRDb250ZW50ID0gYFNoaXBzIFN1bms6ICR7Ym9hcmQyLmNoZWNrTnVtT2ZTdW5rU2hpcHMoKX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRkQW5ub3VuY2VtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhbm5vdW5jZW1lbnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYW5ub3VuY2VtZW50Qm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnYW5ub3VuY2VtZW50Jyk7XHJcbiAgICAgICAgICAgIGFubm91bmNlbWVudEJveC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgICAgIHN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fubm91bmNlbWVudC10ZXh0Jyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYW5ub3VuY2VtZW50Qm94KTtcclxuICAgICAgICAgICAgYW5ub3VuY2VtZW50Qm94LmFwcGVuZENoaWxkKHN0YXR1cyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2V0QW5ub3VuY2VtZW50ID0gKHRleHQsIHJlbW92ZSA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbm5vdW5jZW1lbnQnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fubm91bmNlbWVudC10ZXh0Jyk7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICFyZW1vdmVcclxuICAgICAgICAgICAgICAgID8gc3RhdHVzLnRleHRDb250ZW50ID0gdGV4dFxyXG4gICAgICAgICAgICAgICAgOiBzdGF0dXMudGV4dENvbnRlbnQgPSBib3guY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZEljb25FdmVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItMScpXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlR3JpZChwbGF5ZXIxLCBib2FyZDEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItMicpXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlR3JpZChwbGF5ZXIyLCBib2FyZDIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBlbmQgb2YgcGxheWVyIHN0YXR1cyAvL1xyXG5cclxuICAgICAgICAvLyBncmlkIGRpc3BsYXkgLy9cclxuICAgICAgICAvLyBncmlkIHRpdGxlIC8vXHJcbiAgICAgICAgY29uc3Qgc2V0R3JpZFRpdGxlID0gKHBsYXllcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNncmlkLXRpdGxlJyk7XHJcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYFBsYXllciAke3BsYXllci5wbGF5ZXJOdW1iZXJ9YDtcclxuICAgICAgICAgICAgc2V0R3JpZFBsYXllckJ0bigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2V0R3JpZFBsYXllckJ0biA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItMScpO1xyXG4gICAgICAgICAgICBjb25zdCBidG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci0yJyk7XHJcblxyXG4gICAgICAgICAgICBpZigocG9pbnRlci5wbGF5ZXIgPT09IDEgJiYgcG9pbnRlci5waGFzZSA9PT0gJ3BsYWNlJykpe1xyXG4gICAgICAgICAgICAgICAgYnRuMS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgICAgIGJ0bjIuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHBvaW50ZXIucGxheWVyID09PSAyICYmIHBvaW50ZXIucGhhc2UgPT09J3BsYWNlJykge1xyXG4gICAgICAgICAgICAgICAgYnRuMi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgICAgIGJ0bjEuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHBvaW50ZXIucGxheWVyID09PSAxICYmIHBvaW50ZXIucGhhc2UgPT09ICdhdHRhY2snKXtcclxuICAgICAgICAgICAgICAgIGJ0bjIuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICBidG4xLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihwb2ludGVyLnBsYXllciA9PT0gMiAmJiBwb2ludGVyLnBoYXNlID09PSAnYXR0YWNrJykge1xyXG4gICAgICAgICAgICAgICAgYnRuMS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgICAgIGJ0bjIuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVuZCBvZiBncmlkIHRpdGxlIC8vXHJcblxyXG4gICAgICAgIC8vIGdyaWQgLy9cclxuXHJcbiAgICAgICAgY29uc3QgYWRkR3JpZCA9IChwbHVzaWQgPSAnZ3JpZCcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBncmlkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtwbHVzaWR9YCk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNldEdyaWRUb1BsYXllciA9IChwbGF5ZXIsIGJvYXJkLCBwbHVzaWQgPSAnZ3JpZCcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BsdXNpZH1gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZ3JpZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllck51bWJlciA9IHBsYXllci5wbGF5ZXJOdW1iZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGJvYXJkLmdyaWQ7XHJcbiAgICAgICAgICAgIGNvb3Jkcy5mb3JFYWNoKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFt4LHldID0gW2Nvb3JkLmNvb3JkaW5hdGVbMV0sIGNvb3JkLmNvb3JkaW5hdGVbM11dO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsIGBncmlkLSR7cGxheWVyTnVtYmVyfS0ke3h9LCR7eX1gKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGBwJHtwbGF5ZXJOdW1iZXJ9YCk7IFxyXG4gICAgICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFwbGF5ZXIxLmlzVHVybiAmJiBwb2ludGVyLnBsYXllciA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXJOdW1iZXIsIGJvYXJkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIXBsYXllcjIuaXNUdXJuICYmIHBvaW50ZXIucGxheWVyID09PSAyKXtcclxuICAgICAgICAgICAgICAgIG1hcmtHcmlkKHBsYXllck51bWJlciwgYm9hcmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYocG9pbnRlci5waGFzZSA9PT0gJ3BsYWNlJykge1xyXG4gICAgICAgICAgICAgICAgbWFya0dyaWQocGxheWVyTnVtYmVyLCBib2FyZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXJOdW1iZXIsIGJvYXJkLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHNldEdyaWRUb1NoaXAgPSAoZSwgYm9hcmQpID0+IHtcclxuICAgICAgICAgICAgaWYocG9pbnRlci5waGFzZSAhPSAncGxhY2UnKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGUudGFyZ2V0LmlkLnJlcGxhY2UoL2dyaWQtL2ksICcnKTtcclxuICAgICAgICAgICAgY29uc3QgW3BsYXllck51bWJlciwgeCwgeV0gPSBbXHJcbiAgICAgICAgICAgICAgICBOdW1iZXIoY29vcmRzWzBdKSxcclxuICAgICAgICAgICAgICAgIE51bWJlcihjb29yZHNbMl0pLFxyXG4gICAgICAgICAgICAgICAgTnVtYmVyKGNvb3Jkc1s0XSksXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICFib2FyZC5pc0FpXHJcbiAgICAgICAgICAgICAgICA/IGJvYXJkLnBsYWNlU2hpcChwb2ludGVyLmxlbmd0aCwgYFske3h9LCR7eX1dYCwgcG9pbnRlci5kaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICA6IGJvYXJkLmFpUGxhY2VTaGlwKCk7XHJcbiAgICAgICAgICAgIGlmKCFib2FyZC5pc0FpKW1hcmtHcmlkVG9TaGlwKHBsYXllck51bWJlciwgYm9hcmQpO1xyXG5cclxuICAgICAgICAgICAgY2xvc2VQbGFjZVNoaXBNZW51KCk7XHJcbiAgICAgICAgICAgIG9wZW5QbGFjZVNoaXBNZW51KCk7XHJcblxyXG4gICAgICAgICAgICBjaGFuZ2VXaG9QbGFjaW5nKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYXR0YWNrR3JpZCA9IChlLCBib2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBlLnRhcmdldC5pZC5yZXBsYWNlKC9ncmlkLS9pLCAnJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IFtwbGF5ZXJOdW1iZXIsIHgsIHldID0gW1xyXG4gICAgICAgICAgICAgICAgTnVtYmVyKGNvb3Jkc1swXSksXHJcbiAgICAgICAgICAgICAgICBOdW1iZXIoY29vcmRzWzJdKSxcclxuICAgICAgICAgICAgICAgIE51bWJlcihjb29yZHNbNF0pLFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgaWYocGxheWVyTnVtYmVyID09PSAyICYmIHBsYXllcjEuaXNUdXJuKXtcclxuICAgICAgICAgICAgICAgIHBsYXllcjEudGFrZVR1cm4oYFske3h9LCR7eX1dYCwgYm9hcmQsIHBsYXllcjEsIHBsYXllcjIsIGJvYXJkMSk7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXJOdW1iZXIsIGJvYXJkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmKCFwbGF5ZXIxLmlzVHVybil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QW5ub3VuY2VtZW50KCdQbGF5ZXIgMiBUdXJuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChlbmRUdXJuLCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYocGxheWVyTnVtYmVyID09PSAxICYmIHBsYXllcjIuaXNUdXJuKXtcclxuICAgICAgICAgICAgICAgIHBsYXllcjIudGFrZVR1cm4oYFske3h9LCR7eX1dYCwgYm9hcmQsIHBsYXllcjIsIHBsYXllcjEsIGJvYXJkMik7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXJOdW1iZXIsIGJvYXJkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmKCFwbGF5ZXIyLmlzVHVybil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QW5ub3VuY2VtZW50KCdQbGF5ZXIgMSBUdXJuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChlbmRUdXJuLCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUdXJuU3RhdHVzKCk7XHJcbiAgICAgICAgICAgIGxvc2VHYW1lKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9zZUdhbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGJvYXJkMS5sb3NlKCkgfHwgYm9hcmQyLmxvc2UoKSkgbG9hZEdhbWVPdmVyU2NyZWVuKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFya0dyaWRUb1NoaXAgPSAocGxheWVyTnVtYmVyLCBib2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wJHtwbGF5ZXJOdW1iZXJ9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGJvYXJkLmdyaWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlZCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29vcmRzLmZvckVhY2goY29vcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoY29vcmQuc2hpcEhlcmUpIG1hcmtlZC5wdXNoKGNvb3JkLmNvb3JkaW5hdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGdyaWRTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IHNxdWFyZS5pZC5yZXBsYWNlKC9ncmlkLVxcdy0vaSwgJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29vcmRzID0gYFske2Nvb3Jkc31dYDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtYXJrZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1hcmtlZFtpXSA9PT0gbmV3Q29vcmRzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2dyaWQtc2hpcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFya0dyaWRUb0hvdmVyU2hpcCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGhhc2UgIT0gJ3BsYWNlJyB8fCBwb2ludGVyLmxlbmd0aCA8IDIpIHJldHVybiBtYXJrR3JpZFRvSG92ZXJIaXQoZSk7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0QXJyb3c7XHJcbiAgICAgICAgICAgIHBvaW50ZXIuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCdcclxuICAgICAgICAgICAgICAgID8gdGV4dEFycm93ID0gYDxpbWcgc3JjPVwiJHthcnJvd31cIiBjbGFzcz1cImdyaWQtcmlnaHRcIiAvPmBcclxuICAgICAgICAgICAgICAgIDogdGV4dEFycm93ID0gYDxpbWcgc3JjPVwiJHthcnJvd31cIiBjbGFzcz1cImdyaWQtdXBcIiAvPmBcclxuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gdGV4dEFycm93O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmtHcmlkVG9IaXQgPSAocGxheWVyTnVtYmVyLCBib2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wJHtwbGF5ZXJOdW1iZXJ9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGJvYXJkLmdyaWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlZCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29vcmRzLmZvckVhY2goY29vcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoY29vcmQuaGl0SGVyZSAmJiBjb29yZC5zaGlwSGVyZSkgbWFya2VkLnB1c2goY29vcmQuY29vcmRpbmF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZ3JpZFNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gc3F1YXJlLmlkLnJlcGxhY2UoL2dyaWQtXFx3LS9pLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDb29yZHMgPSBgWyR7Y29vcmRzfV1gO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG1hcmtlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWFya2VkW2ldID09PSBuZXdDb29yZHMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnZ3JpZC1oaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmtHcmlkVG9NaXNzID0gKHBsYXllck51bWJlciwgYm9hcmQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucCR7cGxheWVyTnVtYmVyfWApO1xyXG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBib2FyZC5ncmlkO1xyXG4gICAgICAgICAgICBjb25zdCBtYXJrZWQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvb3Jkcy5mb3JFYWNoKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNvb3JkLmhpdEhlcmUgJiYgIWNvb3JkLnNoaXBIZXJlKSBtYXJrZWQucHVzaChjb29yZC5jb29yZGluYXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBncmlkU3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZHMgPSBzcXVhcmUuaWQucmVwbGFjZSgvZ3JpZC1cXHctL2ksICcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Nvb3JkcyA9IGBbJHtjb29yZHN9XWA7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWFya2VkLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihtYXJrZWRbaV0gPT09IG5ld0Nvb3Jkcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdncmlkLW1pc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmtHcmlkVG9Ib3ZlckhpdCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGhhc2UgIT0gJ2F0dGFjaycpIHJldHVybjtcclxuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtjcm9zc2hhaXJ9XCIgY2xhc3M9XCJncmlkLXRhcmdldFwiIC8+YDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrR3JpZCA9IChwbGF5ZXJOdW1iZXIsIGJvYXJkLCBoaWRlU2hpcHMpID0+IHtcclxuICAgICAgICAgICAgaWYoIWhpZGVTaGlwcykgbWFya0dyaWRUb1NoaXAocGxheWVyTnVtYmVyLCBib2FyZCk7XHJcbiAgICAgICAgICAgIG1hcmtHcmlkVG9IaXQocGxheWVyTnVtYmVyLCBib2FyZCk7XHJcbiAgICAgICAgICAgIG1hcmtHcmlkVG9NaXNzKHBsYXllck51bWJlciwgYm9hcmQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZUdyaWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3JpZCcpO1xyXG4gICAgICAgICAgICB3aGlsZShncmlkLmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgICAgICAgICAgZ3JpZC5yZW1vdmVDaGlsZChncmlkLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlSG92ZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICB3aGlsZShlLnRhcmdldC5maXJzdENoaWxkKXtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnJlbW92ZUNoaWxkKGUudGFyZ2V0LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaGFuZ2VHcmlkID0gKHBsYXllciwgYm9hcmQsIGJ5cGFzcyA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGhhc2UgPT09ICdwbGFjZScgJiYgIWJ5cGFzcykgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBsYXllciA9PT0gcGxheWVyLnBsYXllck51bWJlciAmJiAhYnlwYXNzKSByZXR1cm47XHJcbiAgICAgICAgICAgIHJlbW92ZUdyaWQoKTtcclxuICAgICAgICAgICAgc2V0R3JpZFRpdGxlKHBsYXllcik7XHJcbiAgICAgICAgICAgIHNldEdyaWRUb1BsYXllcihwbGF5ZXIsIGJvYXJkKTtcclxuICAgICAgICAgICAgYWRkR3JpZEV2ZW50cyhwbGF5ZXIsIGJvYXJkKTtcclxuICAgICAgICAgICAgcG9pbnRlci5wbGF5ZXIgPSBwbGF5ZXIucGxheWVyTnVtYmVyOyAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBzZXRBbm5vdW5jZW1lbnQoJycsIHRydWUpO1xyXG4gICAgICAgICAgICBpZighYnlwYXNzKXNldFR1cm5TdGF0dXMoKTtcclxuICAgICAgICAgICAgZWxzZSBpZihieXBhc3Mpe1xyXG4gICAgICAgICAgICAgICAgY2xvc2VQbGFjZVNoaXBNZW51KCk7XHJcbiAgICAgICAgICAgICAgICBvcGVuUGxhY2VTaGlwTWVudSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hvb3NlR3JpZEZ1bmN0aW9uID0gKGUsIGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGhhc2UgPT09ICdhdHRhY2snKXtcclxuICAgICAgICAgICAgICAgIGF0dGFja0dyaWQoZSwgYm9hcmQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYocG9pbnRlci5pc1BsYWNpbmcpe1xyXG4gICAgICAgICAgICAgICAgc2V0R3JpZFRvU2hpcChlLCBib2FyZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRHcmlkRXZlbnRzID0gKHBsYXllciwgYm9hcmQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucCR7cGxheWVyLnBsYXllck51bWJlcn1gKVxyXG4gICAgICAgICAgICBncmlkQnRucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGUgPT4gY2hvb3NlR3JpZEZ1bmN0aW9uKGUsIGJvYXJkKSk7XHJcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGUgPT4gbWFya0dyaWRUb0hvdmVyU2hpcChlLCBib2FyZCkpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBlID0+IG1hcmtHcmlkVG9Ib3ZlclNoaXAoZSwgYm9hcmQpKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcmVtb3ZlSG92ZXIpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgcmVtb3ZlSG92ZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBsb2FkR3JpZCA9IChwbGF5ZXJOdW1iZXIsIHR3byA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZEdyaWQoJ2dyaWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHR3byl7XHJcbiAgICAgICAgICAgICAgICBhZGRXaW5uZXIoKTtcclxuICAgICAgICAgICAgICAgIGFkZEdyaWQoJ2dyaWQtMicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBsYXllck51bWJlciA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICBzZXRHcmlkVG9QbGF5ZXIocGxheWVyMSwgYm9hcmQxLCAnZ3JpZCcpO1xyXG4gICAgICAgICAgICAgICAgbWFya0dyaWQocGxheWVyMS5wbGF5ZXJOdW1iZXIsIGJvYXJkMSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldEdyaWRUb1BsYXllcihwbGF5ZXIxLCBib2FyZDEsICdncmlkJyk7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXIxLnBsYXllck51bWJlciwgYm9hcmQxLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRHcmlkVG9QbGF5ZXIocGxheWVyMiwgYm9hcmQyLCAnZ3JpZC0yJyk7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXIyLnBsYXllck51bWJlciwgYm9hcmQyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZW5kIG9mIGdyaWQgLy9cclxuICAgICAgICAvLyBlbmQgb2YgZ3JpZCBkaXNwbGF5IC8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcGxhY2Ugc2hpcCBidXR0b25zIC8vXHJcbiAgICAgICAgY29uc3QgYWRkUGxhY2VTaGlwQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcC1tZW51Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlU2hpcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBwbGFjZVNoaXBCdG4udGV4dENvbnRlbnQgPSAn4oaTIFBsYWNlIFNoaXBzIOKGkyc7XHJcbiAgICAgICAgICAgIHBsYWNlU2hpcEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYWNlLXNoaXAnKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZVNoaXBCdG4pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG9wZW5QbGFjZVNoaXBNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBidXR0b25zIC8vXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcnJpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgY2Fycmllci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcnJpZXInKTtcclxuICAgICAgICAgICAgY2Fycmllci50ZXh0Q29udGVudCA9ICdDYXJyaWVyICg1KSc7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgYmF0dGxlc2hpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhdHRsZXNoaXAnKTtcclxuICAgICAgICAgICAgYmF0dGxlc2hpcC50ZXh0Q29udGVudCA9ICdCYXR0bGUgc2hpcCAoNCknO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJtYXJpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgc3VibWFyaW5lLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWFyaW5lJyk7XHJcbiAgICAgICAgICAgIHN1Ym1hcmluZS50ZXh0Q29udGVudCA9ICdTdWIgbWFyaW5lICgzKSc7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgcGF0cm9sQm9hdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BhdHJvbC1ib2F0Jyk7XHJcbiAgICAgICAgICAgIHBhdHJvbEJvYXQudGV4dENvbnRlbnQgPSAnUGF0cm9sIGJvYXQgKDIpJztcclxuICAgICAgICAgICAgY29uc3Qgcm90YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHJvdGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvdGF0ZS1zaGlwJyk7XHJcbiAgICAgICAgICAgIHJvdGF0ZS50ZXh0Q29udGVudCA9ICfihrcgUm90YXRlIFNoaXAg4oa3JztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGNvbnRhaW5lciAvL1xyXG4gICAgICAgICAgICBjb25zdCBidG5zVG9BcHBlbmQgPSBbXHJcbiAgICAgICAgICAgICAgICBwYXRyb2xCb2F0LFxyXG4gICAgICAgICAgICAgICAgc3VibWFyaW5lLFxyXG4gICAgICAgICAgICAgICAgYmF0dGxlc2hpcCxcclxuICAgICAgICAgICAgICAgIGNhcnJpZXIsXHJcbiAgICAgICAgICAgICAgICByb3RhdGVcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAtbWVudScpO1xyXG4gICAgICAgICAgICBidG5Db250YWluZXIuYXBwZW5kKC4uLmJ0bnNUb0FwcGVuZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoaWRlU2hpcEJ0bnMoLi4uYnRuc1RvQXBwZW5kKTtcclxuICAgICAgICAgICAgLy8gZXZlbnRzIC8vXHJcbiAgICAgICAgICAgIGFkZFNoaXBCdXR0b25FdmVudHMoKTtcclxuICAgICAgICAgICAgYWRkQ2xvc2VQbGFjZVNoaXBFdmVudCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNsb3NlUGxhY2VTaGlwTWVudSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAtbWVudScpO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUoYnRuQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICAgICAgYnRuQ29udGFpbmVyLnJlbW92ZUNoaWxkKGJ0bkNvbnRhaW5lci5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhZGRPcGVuUGxhY2VTaGlwRXZlbnQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRPcGVuUGxhY2VTaGlwRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZS1zaGlwJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5QbGFjZVNoaXBNZW51KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLXNoaXAnKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQbGFjZVNoaXBNZW51KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRDbG9zZVBsYWNlU2hpcEV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhY2Utc2hpcCcpIFxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQbGFjZVNoaXBNZW51KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLXNoaXAnKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblBsYWNlU2hpcE1lbnUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYWNlU2hpcFR5cGUgPSAobGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIuaXNQbGFjaW5nICYmIHBvaW50ZXIubGVuZ3RoID09PSBsZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci5pc1BsYWNpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXIubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLmlzUGxhY2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUdXJuU3RhdHVzKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm90YXRlU2hpcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgcG9pbnRlci5pc1BsYWNpbmdcclxuICAgICAgICAgICAgICAgID8gcG9pbnRlci5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gcG9pbnRlci5kaXJlY3Rpb24gPSAndmVydGljYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgOiBwb2ludGVyLmRpcmVjdGlvbiA9ICdob3Jpem9udGFsJ1xyXG4gICAgICAgICAgICAgICAgOiAnbm90aGluZyB0byByb3RhdGUnO1xyXG4gICAgICAgICAgICBzZXRUdXJuU3RhdHVzKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRkU2hpcEJ1dHRvbkV2ZW50cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcnJpZXInKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcGxhY2VTaGlwVHlwZSg1KSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXR0bGVzaGlwJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBsYWNlU2hpcFR5cGUoNCkpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBsYWNlU2hpcFR5cGUoMykpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGF0cm9sLWJvYXQnKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcGxhY2VTaGlwVHlwZSgyKSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3RhdGUtc2hpcCcpXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBoaWRlU2hpcEJ0bnMgPSAocGF0cm9sQm9hdCwgc3VibWFyaW5lLCBiYXR0bGVzaGlwLCBjYXJyaWVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAxICYmIGJvYXJkMS51bnBsYWNlZFNoaXBzWzBdLm51bWJlciA8IDEpe1xyXG4gICAgICAgICAgICAgICAgY2Fycmllci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IDEgJiYgYm9hcmQxLnVucGxhY2VkU2hpcHNbMV0ubnVtYmVyIDwgMSl7XHJcbiAgICAgICAgICAgICAgICBiYXR0bGVzaGlwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBsYXllciA9PT0gMSAmJiBib2FyZDEudW5wbGFjZWRTaGlwc1syXS5udW1iZXIgPCAxKXtcclxuICAgICAgICAgICAgICAgIHN1Ym1hcmluZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IDEgJiYgYm9hcmQxLnVucGxhY2VkU2hpcHNbM10ubnVtYmVyIDwgMSl7XHJcbiAgICAgICAgICAgICAgICBwYXRyb2xCb2F0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBsYXllciA9PT0gMiAmJiBib2FyZDIudW5wbGFjZWRTaGlwc1swXS5udW1iZXIgPCAxKXtcclxuICAgICAgICAgICAgICAgIGNhcnJpZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAyICYmIGJvYXJkMi51bnBsYWNlZFNoaXBzWzFdLm51bWJlciA8IDEpe1xyXG4gICAgICAgICAgICAgICAgYmF0dGxlc2hpcC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IDIgJiYgYm9hcmQyLnVucGxhY2VkU2hpcHNbMl0ubnVtYmVyIDwgMSl7XHJcbiAgICAgICAgICAgICAgICBzdWJtYXJpbmUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAyICYmIGJvYXJkMi51bnBsYWNlZFNoaXBzWzNdLm51bWJlciA8IDEpe1xyXG4gICAgICAgICAgICAgICAgcGF0cm9sQm9hdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZW1vdmVQbGFjZVNoaXBCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAtbWVudScpXHJcbiAgICAgICAgICAgIHdoaWxlKG1lbnUuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUNoaWxkKG1lbnUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVuZCBvZiBwbGFjZSBzaGlwIGJ1dHRvbnMgLy9cclxuXHJcbiAgICAgICAgLy8gZ2FtZSBvdmVyIC8vXHJcbiAgICAgICAgY29uc3QgYWRkR3JpZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICBsb2FkR3JpZCgyLCB0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRXaW5uZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdpZCcsICd3aW5uZXItYm94Jyk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3gpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2lubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAgICAgd2lubmVyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcicpO1xyXG4gICAgICAgICAgICB3aW5uZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHdpbm5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZXRXaW5uZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKTtcclxuICAgICAgICAgICAgY29uc3Qgcm91bmRzID0gYm9hcmQyLmF0dGFja0xvZy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGJvYXJkMS5sb3NlKClcclxuICAgICAgICAgICAgICAgID8gd2lubmVyLnRleHRDb250ZW50ID0gYFBsYXllciAyIFdJTlMhIGluICR7cm91bmRzfSByb3VuZHNgXHJcbiAgICAgICAgICAgICAgICA6IHdpbm5lci50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMSBXSU5TISBpbiAke3JvdW5kc30gcm91bmRzYFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkUmV0dXJuTWVudUJ0biA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4tbWVudS1idG4nKVxyXG4gICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnTWFpbiBNZW51JztcclxuICAgICAgICAgICAgY29uc3QgcmVwbGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHJlcGxheUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlcGxheS1idG4nKTtcclxuICAgICAgICAgICAgcmVwbGF5QnRuLnRleHRDb250ZW50ID0gJ1JlcGxheSc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lubmVyLWJveCcpO1xyXG4gICAgICAgICAgICB3aGlsZShib3guZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBib3gucmVtb3ZlQ2hpbGQoYm94LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJveC5hcHBlbmQoYnRuLCByZXBsYXlCdG4pO1xyXG4gICAgICAgICAgICBhZGRNZW51RXZlbnQoKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUmV0dXJuTWVudUJ0bik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRSZXR1cm5FdmVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUmV0dXJuTWVudUJ0bik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRNZW51RXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLW1lbnUtYnRuJyk7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RpdGxlU2NyZWVuID0gdGl0bGVTY3JlZW4oKTtcclxuICAgICAgICAgICAgICAgIG5ld1RpdGxlU2NyZWVuLmxvYWRUaXRsZVNjcmVlbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlcGxheS1idG4nKTtcclxuICAgICAgICAgICAgcmVwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3R2FtZVNjcmVlbiA9IGdhbWVTY3JlZW4ocHZwKTtcclxuICAgICAgICAgICAgICAgIG5ld0dhbWVTY3JlZW4ubG9hZEdhbWVTY3JlZW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlbmQgb2YgZ2FtZSBvdmVyIC8vXHJcblxyXG4gICAgICAgIC8vIGxvYWRpbmcgLy9cclxuICAgICAgICBjb25zdCBsb2FkR2FtZVNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0Q29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgIGFkZFBsYXllckljb25zKCk7XHJcbiAgICAgICAgICAgIGxvYWRHcmlkKDEpO1xyXG4gICAgICAgICAgICBhZGRJY29uRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIGFkZFN0YXR1cygpO1xyXG4gICAgICAgICAgICBhZGRQbGFjZVNoaXBCdXR0b24oKTtcclxuICAgICAgICAgICAgYWRkT3BlblBsYWNlU2hpcEV2ZW50KCk7XHJcbiAgICAgICAgICAgIGFkZEdyaWRFdmVudHMocGxheWVyMSwgYm9hcmQxKTtcclxuICAgICAgICAgICAgYWRkQW5ub3VuY2VtZW50KCk7XHJcbiAgICAgICAgICAgIHNldEFubm91bmNlbWVudCgnUGxheWVyIDEgXFxuIFBsYWNpbmcgUGhhc2UnKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEFubm91bmNlbWVudCgnJywgdHJ1ZSksIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgc2V0VHVyblN0YXR1cygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGxvYWRHYW1lT3ZlclNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgYWRkR3JpZHMoKTtcclxuICAgICAgICAgICAgc2V0V2lubmVyKCk7XHJcbiAgICAgICAgICAgIGFkZFJldHVybkV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVuZCBvZiBsb2FkaW5nIC8vXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gcmVtb3ZlIGJlbG93IC8vXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBjb25zdCBwbGFjZUFsbFNoaXBzID0gKGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCg1LCAnWzAsMV0nLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoNCwgJ1swLDJdJywgJ2hvcml6b250YWwnKTtcclxuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKDMsICdbMCwzXScsICdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCgzLCAnWzAsNF0nLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoMywgJ1swLDVdJywgJ2hvcml6b250YWwnKTtcclxuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKDMsICdbMCw2XScsICdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCgyLCAnWzAsN10nLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoMiwgJ1swLDhdJywgJ2hvcml6b250YWwnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4geyBsb2FkR2FtZVNjcmVlbiwgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGVTY3JlZW4sXHJcbiAgICAgICAgZ2FtZVNjcmVlbiwgLy9yZW1vdmVcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnRlcmZhY2U7XHJcblxyXG4vLyBuZXh0IHN0ZXAgPT4gcmVhZGp1c3QgdGhlIHNpemUgZm9yIGJpZ2dlciB3aWR0aCBzY3JlZW5zIGJ5IG1vdmluZyB0aGUgcGxhY2Ugc2hpcCB3aWRnZXQgaGlnaGVyXHJcbi8vIHRyeSB0byBhZGQgYSBzbWFsbCBncmlkIHRvIHNob3cgd2hhdCB0aGUgY29tcHV0ZXIgaXMgZG9pbmcgb24gdnMgY29tcHV0ZXIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgYmF0dGxlU2hpcHMgZnJvbSAnLi9iYXR0bGVzaGlwJztcclxuaW1wb3J0IHVzZXJJbnRlcmZhY2UgZnJvbSAnLi91aSc7XHJcblxyXG5jb25zdCBsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW50cm8gPSB1c2VySW50ZXJmYWNlLnRpdGxlU2NyZWVuKCk7XHJcbiAgICBpbnRyby5sb2FkVGl0bGVTY3JlZW4oKTtcclxufTtcclxuXHJcbmxvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=