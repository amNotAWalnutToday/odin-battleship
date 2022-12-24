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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --grid-font-c: rgb(52, 41, 51);\r\n    --box-color: rgba(240, 255, 255, 0.9);\r\n    --grid1: darkblue;\r\n    --grid2: rgb(0, 140, 255); \r\n    --line-color: rgb(90, 116, 232);\r\n    --outline-color: rgb(53, 74, 94); \r\n    --box-outline: 2px solid rgba(255, 255, 255, 0.8);\r\n\r\n    --grid-size: max(300px, 30vw);\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: var(--grid-font-c);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Containers */\r\n\r\n.title-screen,\r\n#title-screen-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n#title-screen-menu{\r\n    gap: 5rem;\r\n    padding: 1rem;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#title-screen-btns {\r\n    display: flex;\r\n    gap: 5rem;\r\n}\r\n\r\n@media (max-width: 450px){\r\n    #title-screen-btns {\r\n        flex-direction: column;\r\n        padding-bottom: 5rem;\r\n    }\r\n    .title-screen h1 {\r\n        font-size: 45px !important;\r\n    }\r\n}\r\n\r\n.title-screen button,\r\n#title-screen-menu,\r\n#player-icon-container,\r\n#status-box,\r\n#ship-menu,\r\n#grid {\r\n    box-shadow: 0px 0px 0px 5px var(--outline-color);\r\n    border-radius: 10px; /*not grid*/\r\n}\r\n\r\n#container {\r\n    overflow: hidden;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: url('https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_960_720.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#player-icon-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    margin: 0.3rem auto;\r\n    background-color: var(--box-color);\r\n    width: calc(var(--grid-size) * 1.1);\r\n}\r\n\r\n#grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    grid-template-rows: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    margin: 0 auto;\r\n    width: var(--grid-size);\r\n    height: var(--grid-size);\r\n    transform: rotate(270deg);\r\n    border-radius: 1px !important;\r\n}\r\n\r\n#announcement {\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    margin-left: -35%;\r\n    margin-top: -5vh;\r\n    padding-top: 3vh;\r\n    height: 10vh;\r\n    width: 70%;\r\n    text-align: center;\r\n    color: var(--grid-font-c);\r\n    font-size: 17px;\r\n    font-family: monofett;\r\n    background-color: var(--box-color);\r\n    box-shadow: 0px 0px 5px 5px white;\r\n    outline: var(--box-outline);\r\n    border-radius: 10px;\r\n    z-index: 1;\r\n}\r\n\r\n@media(max-width: 420px){\r\n    #announcement {\r\n        height: 15vh !important;\r\n        white-space: pre;\r\n    }\r\n}\r\n\r\n#status-box {\r\n    width: var(--grid-size);\r\n    margin: 1rem auto;\r\n    padding: 2.5rem 0;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#ship-menu {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    height: 75px;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n    padding: 0 0.5rem;\r\n    background-color: var(--box-color);\r\n    border-radius: 0 10px 10px 0;\r\n}\r\n\r\n@media(min-width: 1000px){\r\n    #ship-menu {\r\n        padding: 0 2rem;\r\n        gap: 2.5rem;\r\n    }\r\n}\r\n/* End of Containers*/\r\n\r\n/* Text */\r\n#grid-title {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.title-screen h1 {\r\n    font-size: 60px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n#status-box h2 {\r\n    padding: 0.25rem 2.5rem;\r\n}\r\n/*End of Text*/\r\n\r\n/*Images*/\r\n#status-box div {\r\n    display: inline-block;\r\n    height: 25px;\r\n    width: 25px;\r\n    vertical-align: bottom;\r\n    border: 2px solid var(--outline-color);\r\n}\r\n\r\n#status-box img {\r\n    width: 30px;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.right {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n\r\n/*End of Images*/\r\n\r\n/*Grid Components*/\r\n.p1,\r\n.p2 {\r\n    border: 0.5px solid var(--line-color);\r\n}\r\n\r\n.p1 {\r\n    background-color: var(--grid1);\r\n}\r\n\r\n.p2 {\r\n    background-color: var(--grid2);\r\n}\r\n\r\n.grid-ship {\r\n    background-color: brown;\r\n}\r\n\r\n.grid-hit {\r\n    background-color: olive !important; \r\n}\r\n\r\n.grid-miss {\r\n    background-color: rgb(255, 136, 136);\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n/*End of Grid Components*/\r\n\r\n/* Buttons */\r\n.title-screen button {\r\n    height: 5rem;\r\n    width: 10rem;\r\n    font-size: 30px;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#player-icon-container button {\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 50%;\r\n}\r\n\r\n#ship-menu button {\r\n    height: 50px;\r\n    width: 50px;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n.title-screen button:hover {\r\n    transform: scale(1.05);\r\n    filter: saturate(10%);\r\n    cursor: pointer;\r\n}\r\n/* End of Buttons*/", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,qCAAqC;IACrC,iBAAiB;IACjB,yBAAyB;IACzB,+BAA+B;IAC/B,gCAAgC;IAChC,iDAAiD;;IAEjD,6BAA6B;;IAE7B,yCAAyC;IACzC,yBAAyB;AAC7B;;AAEA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA,eAAe;;AAEf;;IAEI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI;QACI,sBAAsB;QACtB,oBAAoB;IACxB;IACA;QACI,0BAA0B;IAC9B;AACJ;;AAEA;;;;;;IAMI,gDAAgD;IAChD,mBAAmB,EAAE,WAAW;AACpC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,4FAA4F;IAC5F,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,mBAAmB;IACnB,kCAAkC;IAClC,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,oEAAoE;IACpE,iEAAiE;IACjE,cAAc;IACd,uBAAuB;IACvB,wBAAwB;IACxB,yBAAyB;IACzB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;IACf,qBAAqB;IACrB,kCAAkC;IAClC,iCAAiC;IACjC,2BAA2B;IAC3B,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI;QACI,uBAAuB;QACvB,gBAAgB;IACpB;AACJ;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,kCAAkC;IAClC,4BAA4B;AAChC;;AAEA;IACI;QACI,eAAe;QACf,WAAW;IACf;AACJ;AACA,qBAAqB;;AAErB,SAAS;AACT;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;AAC3B;AACA,cAAc;;AAEd,SAAS;AACT;IACI,qBAAqB;IACrB,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,sCAAsC;AAC1C;;AAEA;IACI,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B;;;AAGA,gBAAgB;;AAEhB,kBAAkB;AAClB;;IAEI,qCAAqC;AACzC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;AACjB;;AAEA,yBAAyB;;AAEzB,YAAY;AACZ;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,+BAA+B;AACnC;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;IACrB,eAAe;AACnB;AACA,kBAAkB","sourcesContent":[":root {\r\n    --grid-font-c: rgb(52, 41, 51);\r\n    --box-color: rgba(240, 255, 255, 0.9);\r\n    --grid1: darkblue;\r\n    --grid2: rgb(0, 140, 255); \r\n    --line-color: rgb(90, 116, 232);\r\n    --outline-color: rgb(53, 74, 94); \r\n    --box-outline: 2px solid rgba(255, 255, 255, 0.8);\r\n\r\n    --grid-size: max(300px, 30vw);\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: var(--grid-font-c);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Containers */\r\n\r\n.title-screen,\r\n#title-screen-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n#title-screen-menu{\r\n    gap: 5rem;\r\n    padding: 1rem;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#title-screen-btns {\r\n    display: flex;\r\n    gap: 5rem;\r\n}\r\n\r\n@media (max-width: 450px){\r\n    #title-screen-btns {\r\n        flex-direction: column;\r\n        padding-bottom: 5rem;\r\n    }\r\n    .title-screen h1 {\r\n        font-size: 45px !important;\r\n    }\r\n}\r\n\r\n.title-screen button,\r\n#title-screen-menu,\r\n#player-icon-container,\r\n#status-box,\r\n#ship-menu,\r\n#grid {\r\n    box-shadow: 0px 0px 0px 5px var(--outline-color);\r\n    border-radius: 10px; /*not grid*/\r\n}\r\n\r\n#container {\r\n    overflow: hidden;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: url('https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_960_720.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#player-icon-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    margin: 0.3rem auto;\r\n    background-color: var(--box-color);\r\n    width: calc(var(--grid-size) * 1.1);\r\n}\r\n\r\n#grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    grid-template-rows: repeat(auto-fit, calc(var(--grid-size) / 10));\r\n    margin: 0 auto;\r\n    width: var(--grid-size);\r\n    height: var(--grid-size);\r\n    transform: rotate(270deg);\r\n    border-radius: 1px !important;\r\n}\r\n\r\n#announcement {\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    margin-left: -35%;\r\n    margin-top: -5vh;\r\n    padding-top: 3vh;\r\n    height: 10vh;\r\n    width: 70%;\r\n    text-align: center;\r\n    color: var(--grid-font-c);\r\n    font-size: 17px;\r\n    font-family: monofett;\r\n    background-color: var(--box-color);\r\n    box-shadow: 0px 0px 5px 5px white;\r\n    outline: var(--box-outline);\r\n    border-radius: 10px;\r\n    z-index: 1;\r\n}\r\n\r\n@media(max-width: 420px){\r\n    #announcement {\r\n        height: 15vh !important;\r\n        white-space: pre;\r\n    }\r\n}\r\n\r\n#status-box {\r\n    width: var(--grid-size);\r\n    margin: 1rem auto;\r\n    padding: 2.5rem 0;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#ship-menu {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    height: 75px;\r\n    width: fit-content;\r\n    margin-top: 2rem;\r\n    padding: 0 0.5rem;\r\n    background-color: var(--box-color);\r\n    border-radius: 0 10px 10px 0;\r\n}\r\n\r\n@media(min-width: 1000px){\r\n    #ship-menu {\r\n        padding: 0 2rem;\r\n        gap: 2.5rem;\r\n    }\r\n}\r\n/* End of Containers*/\r\n\r\n/* Text */\r\n#grid-title {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.title-screen h1 {\r\n    font-size: 60px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n#status-box h2 {\r\n    padding: 0.25rem 2.5rem;\r\n}\r\n/*End of Text*/\r\n\r\n/*Images*/\r\n#status-box div {\r\n    display: inline-block;\r\n    height: 25px;\r\n    width: 25px;\r\n    vertical-align: bottom;\r\n    border: 2px solid var(--outline-color);\r\n}\r\n\r\n#status-box img {\r\n    width: 30px;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.right {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n\r\n/*End of Images*/\r\n\r\n/*Grid Components*/\r\n.p1,\r\n.p2 {\r\n    border: 0.5px solid var(--line-color);\r\n}\r\n\r\n.p1 {\r\n    background-color: var(--grid1);\r\n}\r\n\r\n.p2 {\r\n    background-color: var(--grid2);\r\n}\r\n\r\n.grid-ship {\r\n    background-color: brown;\r\n}\r\n\r\n.grid-hit {\r\n    background-color: olive !important; \r\n}\r\n\r\n.grid-miss {\r\n    background-color: rgb(255, 136, 136);\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n/*End of Grid Components*/\r\n\r\n/* Buttons */\r\n.title-screen button {\r\n    height: 5rem;\r\n    width: 10rem;\r\n    font-size: 30px;\r\n    background-color: var(--box-color);\r\n}\r\n\r\n#player-icon-container button {\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 50%;\r\n}\r\n\r\n#ship-menu button {\r\n    height: 50px;\r\n    width: 50px;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n.title-screen button:hover {\r\n    transform: scale(1.05);\r\n    filter: saturate(10%);\r\n    cursor: pointer;\r\n}\r\n/* End of Buttons*/"],"sourceRoot":""}]);
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
            console.log(sunkShips);
            return sunkShips.length;
        }

        const getDirections = (length, x, y, direction, newCoords = []) => {
            let [checkH, checkV] = [false, false]
            
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



const userInterface = (() => {
    const titleScreen = () => {
        const container = document.querySelector('#container');
        
        const setContainer = () => {
            container.setAttribute('class', 'title-screen');
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
            title.textContent = `Player ${player.playerNumber}'s Board`;
        }
        // end of grid title //

        // grid //

        const addGrid = () => {
            const grid = document.createElement('div');
            grid.setAttribute('id', 'grid');
            container.appendChild(grid);
        }

        const setGridToPlayer = (player, board) => {
            const grid = document.querySelector('#grid');
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
            //carrier
            console.log(e.target);
            console.log(board);  
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
                console.log(e.target.id, board);
            } else if(pointer.isPlacing){
                setGridToShip(e, board);
            }
        };

        const addGridEvents = (player, board) => {
            const gridBtns = document.querySelectorAll(`.p${player.playerNumber}`)
            gridBtns.forEach(btn => {
                btn.addEventListener('click', e => chooseGridFunction(e, board));
            });
        };
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
            console.log(pointer);
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

        const loadGameScreen = () => {
            setContainer();
            addPlayerIcons();
            addGrid();
            addIconEvents();
            addStatus();
            addPlaceShipButton();
            addOpenPlaceShipEvent();
            setGridToPlayer(player1, board1);
            addGridEvents(player1, board1);
            addAnnouncement();
            setAnnouncement('Player 1 \n Placing Phase')
            setTimeout(() => setAnnouncement('', true), 1000);
            


            setTurnStatus();
        };

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
        gameScreen,
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userInterface);

// next step => make game over announcement

/***/ }),

/***/ "./src/img/arrow.png":
/*!***************************!*\
  !*** ./src/img/arrow.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9f321a8a1e93ca9ff96.png";

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




const player1 = _battleship__WEBPACK_IMPORTED_MODULE_1__["default"].player(1, true);
const player2 = _battleship__WEBPACK_IMPORTED_MODULE_1__["default"].player(2, true);
const Board1 = _battleship__WEBPACK_IMPORTED_MODULE_1__["default"].gameBoard();
const Board2 = _battleship__WEBPACK_IMPORTED_MODULE_1__["default"].gameBoard();
const intro = _ui__WEBPACK_IMPORTED_MODULE_2__["default"].titleScreen();
const game = _ui__WEBPACK_IMPORTED_MODULE_2__["default"].gameScreen();

const placeAllShips = (p1Board) => {
    p1Board.placeShip(5, '[0,1]', 'horizontal');
    p1Board.placeShip(4, '[0,2]', 'horizontal');
    p1Board.placeShip(3, '[0,3]', 'horizontal');
    p1Board.placeShip(3, '[0,4]', 'horizontal');
    p1Board.placeShip(3, '[0,5]', 'horizontal');
    p1Board.placeShip(3, '[0,6]', 'horizontal');
    p1Board.placeShip(2, '[0,7]', 'horizontal');
    p1Board.placeShip(2, '[0,8]', 'horizontal');
    p1Board.placeShip(2, '[0,9]', 'horizontal');
};



const playGame = () => {
    intro.loadTitleScreen();
    placeAllShips(Board1);
    placeAllShips(Board2);
    player1.takeTurn('[5,4]', Board2, player1, player2, Board1);
};
playGame();
console.log(Board1.attackLog);
console.log(Board2.attackLog);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLDREQUE0RCxvQkFBb0I7QUFDaEY7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLGFBQWEsRUFBQztBQUM3QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDdG9CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDaUI7QUFDTjtBQUNqQztBQUNBLGdCQUFnQiwwREFBa0I7QUFDbEMsZ0JBQWdCLDBEQUFrQjtBQUNsQyxlQUFlLDZEQUFxQjtBQUNwQyxlQUFlLDZEQUFxQjtBQUNwQyxjQUFjLHVEQUF5QjtBQUN2QyxhQUFhLHNEQUF3QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1ncmlkLWZvbnQtYzogcmdiKDUyLCA0MSwgNTEpO1xcclxcbiAgICAtLWJveC1jb2xvcjogcmdiYSgyNDAsIDI1NSwgMjU1LCAwLjkpO1xcclxcbiAgICAtLWdyaWQxOiBkYXJrYmx1ZTtcXHJcXG4gICAgLS1ncmlkMjogcmdiKDAsIDE0MCwgMjU1KTsgXFxyXFxuICAgIC0tbGluZS1jb2xvcjogcmdiKDkwLCAxMTYsIDIzMik7XFxyXFxuICAgIC0tb3V0bGluZS1jb2xvcjogcmdiKDUzLCA3NCwgOTQpOyBcXHJcXG4gICAgLS1ib3gtb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG5cXHJcXG4gICAgLS1ncmlkLXNpemU6IG1heCgzMDBweCwgMzB2dyk7XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JpZC1mb250LWMpO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFpbmVycyAqL1xcclxcblxcclxcbi50aXRsZS1zY3JlZW4sXFxyXFxuI3RpdGxlLXNjcmVlbi1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZS1zY3JlZW4tbWVudXtcXHJcXG4gICAgZ2FwOiA1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUtc2NyZWVuLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDVyZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCl7XFxyXFxuICAgICN0aXRsZS1zY3JlZW4tYnRucyB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLnRpdGxlLXNjcmVlbiBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtc2NyZWVuIGJ1dHRvbixcXHJcXG4jdGl0bGUtc2NyZWVuLW1lbnUsXFxyXFxuI3BsYXllci1pY29uLWNvbnRhaW5lcixcXHJcXG4jc3RhdHVzLWJveCxcXHJcXG4jc2hpcC1tZW51LFxcclxcbiNncmlkIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggNXB4IHZhcigtLW91dGxpbmUtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKm5vdCBncmlkKi9cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDEzLzEyLzE3LzIwLzEwL2J1YmJsZXMtMjMwMDE0Xzk2MF83MjAuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItaWNvbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwLjNyZW0gYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAqIDEuMSk7XFxyXFxufVxcclxcblxcclxcbiNncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBjYWxjKHZhcigtLWdyaWQtc2l6ZSkgLyAxMCkpO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IHZhcigtLWdyaWQtc2l6ZSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tZ3JpZC1zaXplKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNhbm5vdW5jZW1lbnQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMzUlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNXZoO1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3ZoO1xcclxcbiAgICBoZWlnaHQ6IDEwdmg7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaWQtZm9udC1jKTtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub2ZldHQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCB3aGl0ZTtcXHJcXG4gICAgb3V0bGluZTogdmFyKC0tYm94LW91dGxpbmUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA0MjBweCl7XFxyXFxuICAgICNhbm5vdW5jZW1lbnQge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNXZoICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiNzdGF0dXMtYm94IHtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWdyaWQtc2l6ZSk7XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyLjVyZW0gMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDc1cHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtaW4td2lkdGg6IDEwMDBweCl7XFxyXFxuICAgICNzaGlwLW1lbnUge1xcclxcbiAgICAgICAgcGFkZGluZzogMCAycmVtO1xcclxcbiAgICAgICAgZ2FwOiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyogRW5kIG9mIENvbnRhaW5lcnMqL1xcclxcblxcclxcbi8qIFRleHQgKi9cXHJcXG4jZ3JpZC10aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtc2NyZWVuIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXR1cy1ib3ggaDIge1xcclxcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDIuNXJlbTtcXHJcXG59XFxyXFxuLypFbmQgb2YgVGV4dCovXFxyXFxuXFxyXFxuLypJbWFnZXMqL1xcclxcbiNzdGF0dXMtYm94IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tb3V0bGluZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNzdGF0dXMtYm94IGltZyB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qRW5kIG9mIEltYWdlcyovXFxyXFxuXFxyXFxuLypHcmlkIENvbXBvbmVudHMqL1xcclxcbi5wMSxcXHJcXG4ucDIge1xcclxcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucDEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkMSk7XFxyXFxufVxcclxcblxcclxcbi5wMiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtc2hpcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1oaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvbGl2ZSAhaW1wb3J0YW50OyBcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtbWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEzNiwgMTM2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKkVuZCBvZiBHcmlkIENvbXBvbmVudHMqL1xcclxcblxcclxcbi8qIEJ1dHRvbnMgKi9cXHJcXG4udGl0bGUtc2NyZWVuIGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItaWNvbi1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1tZW51IGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1zY3JlZW4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgxMCUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi8qIEVuZCBvZiBCdXR0b25zKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLGlEQUFpRDs7SUFFakQsNkJBQTZCOztJQUU3Qix5Q0FBeUM7SUFDekMseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQSxlQUFlOztBQUVmOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7O0FBRUE7Ozs7OztJQU1JLGdEQUFnRDtJQUNoRCxtQkFBbUIsRUFBRSxXQUFXO0FBQ3BDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osNEZBQTRGO0lBQzVGLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixvRUFBb0U7SUFDcEUsaUVBQWlFO0lBQ2pFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7UUFDdkIsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLFdBQVc7SUFDZjtBQUNKO0FBQ0EscUJBQXFCOztBQUVyQixTQUFTO0FBQ1Q7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBLGNBQWM7O0FBRWQsU0FBUztBQUNUO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7OztBQUdBLGdCQUFnQjs7QUFFaEIsa0JBQWtCO0FBQ2xCOztJQUVJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEseUJBQXlCOztBQUV6QixZQUFZO0FBQ1o7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0Esa0JBQWtCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1ncmlkLWZvbnQtYzogcmdiKDUyLCA0MSwgNTEpO1xcclxcbiAgICAtLWJveC1jb2xvcjogcmdiYSgyNDAsIDI1NSwgMjU1LCAwLjkpO1xcclxcbiAgICAtLWdyaWQxOiBkYXJrYmx1ZTtcXHJcXG4gICAgLS1ncmlkMjogcmdiKDAsIDE0MCwgMjU1KTsgXFxyXFxuICAgIC0tbGluZS1jb2xvcjogcmdiKDkwLCAxMTYsIDIzMik7XFxyXFxuICAgIC0tb3V0bGluZS1jb2xvcjogcmdiKDUzLCA3NCwgOTQpOyBcXHJcXG4gICAgLS1ib3gtb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG5cXHJcXG4gICAgLS1ncmlkLXNpemU6IG1heCgzMDBweCwgMzB2dyk7XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JpZC1mb250LWMpO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFpbmVycyAqL1xcclxcblxcclxcbi50aXRsZS1zY3JlZW4sXFxyXFxuI3RpdGxlLXNjcmVlbi1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZS1zY3JlZW4tbWVudXtcXHJcXG4gICAgZ2FwOiA1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUtc2NyZWVuLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDVyZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCl7XFxyXFxuICAgICN0aXRsZS1zY3JlZW4tYnRucyB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLnRpdGxlLXNjcmVlbiBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtc2NyZWVuIGJ1dHRvbixcXHJcXG4jdGl0bGUtc2NyZWVuLW1lbnUsXFxyXFxuI3BsYXllci1pY29uLWNvbnRhaW5lcixcXHJcXG4jc3RhdHVzLWJveCxcXHJcXG4jc2hpcC1tZW51LFxcclxcbiNncmlkIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggNXB4IHZhcigtLW91dGxpbmUtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKm5vdCBncmlkKi9cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDEzLzEyLzE3LzIwLzEwL2J1YmJsZXMtMjMwMDE0Xzk2MF83MjAuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItaWNvbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwLjNyZW0gYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tZ3JpZC1zaXplKSAqIDEuMSk7XFxyXFxufVxcclxcblxcclxcbiNncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIGNhbGModmFyKC0tZ3JpZC1zaXplKSAvIDEwKSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBjYWxjKHZhcigtLWdyaWQtc2l6ZSkgLyAxMCkpO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IHZhcigtLWdyaWQtc2l6ZSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tZ3JpZC1zaXplKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNhbm5vdW5jZW1lbnQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMzUlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNXZoO1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3ZoO1xcclxcbiAgICBoZWlnaHQ6IDEwdmg7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyaWQtZm9udC1jKTtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub2ZldHQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCB3aGl0ZTtcXHJcXG4gICAgb3V0bGluZTogdmFyKC0tYm94LW91dGxpbmUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA0MjBweCl7XFxyXFxuICAgICNhbm5vdW5jZW1lbnQge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNXZoICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiNzdGF0dXMtYm94IHtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWdyaWQtc2l6ZSk7XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyLjVyZW0gMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDc1cHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtaW4td2lkdGg6IDEwMDBweCl7XFxyXFxuICAgICNzaGlwLW1lbnUge1xcclxcbiAgICAgICAgcGFkZGluZzogMCAycmVtO1xcclxcbiAgICAgICAgZ2FwOiAyLjVyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyogRW5kIG9mIENvbnRhaW5lcnMqL1xcclxcblxcclxcbi8qIFRleHQgKi9cXHJcXG4jZ3JpZC10aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtc2NyZWVuIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXR1cy1ib3ggaDIge1xcclxcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDIuNXJlbTtcXHJcXG59XFxyXFxuLypFbmQgb2YgVGV4dCovXFxyXFxuXFxyXFxuLypJbWFnZXMqL1xcclxcbiNzdGF0dXMtYm94IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tb3V0bGluZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNzdGF0dXMtYm94IGltZyB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qRW5kIG9mIEltYWdlcyovXFxyXFxuXFxyXFxuLypHcmlkIENvbXBvbmVudHMqL1xcclxcbi5wMSxcXHJcXG4ucDIge1xcclxcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucDEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkMSk7XFxyXFxufVxcclxcblxcclxcbi5wMiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtc2hpcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1oaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvbGl2ZSAhaW1wb3J0YW50OyBcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtbWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEzNiwgMTM2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKkVuZCBvZiBHcmlkIENvbXBvbmVudHMqL1xcclxcblxcclxcbi8qIEJ1dHRvbnMgKi9cXHJcXG4udGl0bGUtc2NyZWVuIGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItaWNvbi1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1tZW51IGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1zY3JlZW4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgxMCUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi8qIEVuZCBvZiBCdXR0b25zKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGJhdHRsZVNoaXBzID0gKCgpID0+IHtcclxuICAgIC8vRmFjdG9yaWVzXHJcbiAgICBjb25zdCBzaGlwID0gKGNvb3JkcywgbGVuZ3RoLCB0aW1lc0hpdCwgc3VuaykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhpdCA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgdGFyZ2V0LnRpbWVzSGl0Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc1N1bmsgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQudGltZXNIaXQgPj0gdGFyZ2V0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnN1bmsgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgY29vcmRzLCBsZW5ndGgsIHRpbWVzSGl0LCBzdW5rLCBoaXQgLGlzU3VuaywgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnYW1lQm9hcmQgPSAoZ3JpZCwgaXNBaSA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgLy9ib2FyZCBvYmplY3RzXHJcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBbXTtcclxuICAgICAgICBjb25zdCB1bnBsYWNlZFNoaXBzID0gW1xyXG4gICAgICAgICAgICB7bmFtZTogJ2NhcnJpZXInLCBsZW5ndGg6IDUsIG51bWJlcjogMX0sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnYmF0dGxlc2hpcCcsIGxlbmd0aDogNCwgbnVtYmVyOiAxfSxcclxuICAgICAgICAgICAge25hbWU6ICdzdWJtYXJpbmUnLCBsZW5ndGg6IDMsIG51bWJlcjogNH0sXHJcbiAgICAgICAgICAgIHtuYW1lOiAncGF0cm9sIGJvYXQnLCBsZW5ndGg6IDIsIG51bWJlcjogM31cclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGF0dGFja0xvZyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHBsYWNlUGhhc2UgPSBbdHJ1ZV07XHJcblxyXG4gICAgICAgIGNvbnN0IGdlbmVyYXRlR3JpZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZE1hcCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSA5OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8PSA5OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRNYXAucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGU6IGBbJHtpfSwke2p9XWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBIZXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGl0SGVyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGdyaWRNYXA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBncmlkID0gZ2VuZXJhdGVHcmlkKCk7XHJcblxyXG4gICAgICAgIC8vYm9hcmQgbWFuaXB1bGF0b3JzXHJcbiAgICAgICAgY29uc3Qgc2V0Qm9hcmQgPSAoY29vcmRzLCBwcm9wKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwb3RzID0gZ3JpZC5maWx0ZXIoY29vcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvb3JkcyA9PT0gY29vcmQuY29vcmRpbmF0ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYocHJvcCA9PT0gJ3NoaXBIZXJlJykgcmV0dXJuIHNwb3RzWzBdLnNoaXBIZXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gc3BvdHNbMF0uaGl0SGVyZSA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlU2hpcGZyb21TdG9yYWdlID0gKGxlbmd0aCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2gobGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogdW5wbGFjZWRTaGlwc1swXS5udW1iZXItLVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiB1bnBsYWNlZFNoaXBzWzFdLm51bWJlci0tXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiB1bnBsYWNlZFNoaXBzWzJdLm51bWJlci0tXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHVucGxhY2VkU2hpcHNbM10ubnVtYmVyLS1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gZ3JpZCBpdGVyYXRvcnMgLy9cclxuICAgICAgICBjb25zdCBjaGVja0dyaWRGb3JTaGlwID0gKGNvb3JkcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzcG90cyA9IGdyaWQuZmlsdGVyKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNvb3JkLnNoaXBIZXJlICYmIGNvb3JkLmNvb3JkaW5hdGUgPT09IGNvb3JkcyApIHJldHVybiBjb29yZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHNwb3RzLmxlbmd0aCA8IDEgfHwgIXNwb3RzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBzcG90c1swXS5zaGlwSGVyZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjaGVja0dyaWRGb3JIaXQgPSAoY29vcmRzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwb3RzID0gZ3JpZC5maWx0ZXIoY29vcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoY29vcmQuaGl0SGVyZSAmJiBjb29yZC5jb29yZGluYXRlID09PSBjb29yZHMpIHJldHVybiBjb29yZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHNwb3RzLmxlbmd0aCA8IDEgfHwgIXNwb3RzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBzcG90c1swXS5oaXRIZXJlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrU3RvcmFnZUZvclNoaXAgPSAobGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZVNoaXAgPSBbXVxyXG4gICAgICAgICAgICB1bnBsYWNlZFNoaXBzLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihsZW5ndGggPT09IHNoaXAubGVuZ3RoICYmIHNoaXAubnVtYmVyID4gMCkgYXZhaWxhYmxlU2hpcC5wdXNoKHNoaXApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYoYXZhaWxhYmxlU2hpcC5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hlY2tOdW1PZlN1bmtTaGlwcyA9IChzdW5rU2hpcHMgPSBbXSkgPT4ge1xyXG4gICAgICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoc2hpcC5zdW5rKSBzdW5rU2hpcHMucHVzaChzaGlwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1bmtTaGlwcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdW5rU2hpcHMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0RGlyZWN0aW9ucyA9IChsZW5ndGgsIHgsIHksIGRpcmVjdGlvbiwgbmV3Q29vcmRzID0gW10pID0+IHtcclxuICAgICAgICAgICAgbGV0IFtjaGVja0gsIGNoZWNrVl0gPSBbZmFsc2UsIGZhbHNlXVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvcml6b250YWwgPSBgWyR7eCtpfSwke3l9XWA7XHJcbiAgICAgICAgICAgICAgICBpZihjaGVja0gpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tIID0gY2hlY2tHcmlkRm9yU2hpcChob3Jpem9udGFsKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVydGljYWwgPSBgWyR7eH0sJHt5K2l9XWA7XHJcbiAgICAgICAgICAgICAgICBpZihjaGVja1YpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tWID0gY2hlY2tHcmlkRm9yU2hpcCh2ZXJ0aWNhbClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3Jpem9udGFsID0gYFske3graX0sJHt5fV1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVydGljYWwgPSBgWyR7eH0sJHt5K2l9XWA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjaGVja0gpIHJldHVybiAnZXJyb3InO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEJvYXJkKGhvcml6b250YWwsICdzaGlwSGVyZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0Nvb3Jkcy5wdXNoKGhvcml6b250YWwpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNoZWNrVikgcmV0dXJuICdlcnJvcic7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Qm9hcmQodmVydGljYWwsICdzaGlwSGVyZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0Nvb3Jkcy5wdXNoKHZlcnRpY2FsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3Q29vcmRzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGdhbWUgZnVuY3Rpb25zIC8vXHJcbiAgICAgICAgY29uc3QgY2hhbmdlUGhhc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxTaGlwc0luU3RvcmFnZSA9IFtcclxuICAgICAgICAgICAgICAgIGNoZWNrU3RvcmFnZUZvclNoaXAoNSksXHJcbiAgICAgICAgICAgICAgICBjaGVja1N0b3JhZ2VGb3JTaGlwKDQpLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tTdG9yYWdlRm9yU2hpcCgzKSxcclxuICAgICAgICAgICAgICAgIGNoZWNrU3RvcmFnZUZvclNoaXAoMilcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRvdGFsU2hpcHNJblN0b3JhZ2UuZXZlcnkoc2hpcCA9PiAhc2hpcCkpIGVuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKGVuZCl7ICAgIFxyXG4gICAgICAgICAgICAgICAgcGxhY2VQaGFzZVswXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdlbmQgb2YgcGxhY2UgcGhhc2UnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAnY29udGludWUgcGxhY2luZyc7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcGxhY2VTaGlwID0gKGxlbmd0aCwgY29vcmRzLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgaWYoIWNoZWNrU3RvcmFnZUZvclNoaXAobGVuZ3RoKSB8fCAhcGxhY2VQaGFzZVswXSkgcmV0dXJuOyAvL1RCQVxyXG4gICAgICAgICAgICBjb25zdCBbeCwgeV0gPSBbTnVtYmVyKGNvb3Jkc1sxXSksIE51bWJlcihjb29yZHNbM10pXTtcclxuICAgICAgICAgICAgY29uc3QgY29uID1cclxuICAgICAgICAgICAgKHggKyBsZW5ndGggPj0gMTEgJiYgZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpXHJcbiAgICAgICAgICAgIHx8IFxyXG4gICAgICAgICAgICAoeSArIGxlbmd0aCA+PSAxMSAmJiBkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpO1xyXG4gICAgICAgICAgICBpZihjb24pIHJldHVybiAnZXJyb3InO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3Q29vcmRzID0gZ2V0RGlyZWN0aW9ucyhsZW5ndGgsIHgsIHksIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChuZXdDb29yZHMgPT09ICdlcnJvcicpIHJldHVybiAnZXJyb3InO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTaGlwID0gc2hpcChuZXdDb29yZHMsIGxlbmd0aCwgMCwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgcmVtb3ZlU2hpcGZyb21TdG9yYWdlKGxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNoYW5nZVBoYXNlKCk7XHJcbiAgICAgICAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdTaGlwO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFpUGxhY2VTaGlwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2hpcERpcmVjdGlvbjtcclxuICAgICAgICAgICAgY29uc3QgW2NoZWNrNSwgY2hlY2s0LCBjaGVjazMsIGNoZWNrMl0gPSBbXHJcbiAgICAgICAgICAgICAgICBjaGVja1N0b3JhZ2VGb3JTaGlwKDUpLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tTdG9yYWdlRm9yU2hpcCg0KSxcclxuICAgICAgICAgICAgICAgIGNoZWNrU3RvcmFnZUZvclNoaXAoMyksXHJcbiAgICAgICAgICAgICAgICBjaGVja1N0b3JhZ2VGb3JTaGlwKDIpXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgY29uc3QgW3gseSwgZGlyRGVjXSA9IFtcclxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkuOSksXHJcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5LjkpLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBpZihkaXJEZWMgPiAwLjQ5KSBzaGlwRGlyZWN0aW9uID0gJ3ZlcnRpY2FsJ1xyXG4gICAgICAgICAgICBlbHNlIHNoaXBEaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgICAgIGlmKGNoZWNrNSl7XHJcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoNSwgYFske3h9LCR7eX1dYCwgc2hpcERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNoZWNrNCl7XHJcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoNCwgYFske3h9LCR7eX1dYCwgc2hpcERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNoZWNrMyl7XHJcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoMywgYFske3h9LCR7eX1dYCwgc2hpcERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNoZWNrMil7XHJcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoMiwgYFske3h9LCR7eX1dYCwgc2hpcERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2hlY2s1IHx8IGNoZWNrNCB8fCBjaGVjazMgfHwgY2hlY2syKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhaVBsYWNlU2hpcCgpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3BsYWNlZCBhbGwgc2hpcHMnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZHMpID0+IHtcclxuICAgICAgICAgICAgaWYobG9zZSgpKSByZXR1cm4gJ2dhbWUgb3Zlcic7XHJcbiAgICAgICAgICAgIGlmKGNoZWNrR3JpZEZvckhpdChjb29yZHMpIHx8IHBsYWNlUGhhc2VbMF0pIHJldHVybjtcclxuICAgICAgICAgICAgc2V0Qm9hcmQoY29vcmRzLCAnaGl0SGVyZScpOyAgICAgIFxyXG4gICAgICAgICAgICBhdHRhY2tMb2cucHVzaChjb29yZHMpO1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrR3JpZEZvclNoaXAoY29vcmRzKSkgcmV0dXJuICdtaXNzJztcclxuICAgICAgICAgICAgbGV0IHRoaXNTaGlwO1xyXG4gICAgICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAuY29vcmRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb29yZHMgPT09IHNoaXAuY29vcmRzW2ldKSB0aGlzU2hpcCA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzU2hpcC5oaXQodGhpc1NoaXApO1xyXG4gICAgICAgICAgICB0aGlzU2hpcC5pc1N1bmsodGhpc1NoaXApO1xyXG4gICAgICAgICAgICByZXR1cm4gJ2hpdCc7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyaXNvbiA9IFtdO1xyXG4gICAgICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoc2hpcC5zdW5rKSBjb21wYXJpc29uLnB1c2goc2hpcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyaXNvbi5sZW5ndGggPj0gc2hpcHMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNBaSwgXHJcbiAgICAgICAgICAgIGdyaWQsXHJcbiAgICAgICAgICAgIHBsYWNlU2hpcCxcclxuICAgICAgICAgICAgYWlQbGFjZVNoaXAsXHJcbiAgICAgICAgICAgIHNoaXBzLFxyXG4gICAgICAgICAgICB1bnBsYWNlZFNoaXBzLFxyXG4gICAgICAgICAgICBhdHRhY2tMb2csXHJcbiAgICAgICAgICAgIGNoZWNrR3JpZEZvclNoaXAsXHJcbiAgICAgICAgICAgIGNoZWNrR3JpZEZvckhpdCxcclxuICAgICAgICAgICAgY2hlY2tOdW1PZlN1bmtTaGlwcyxcclxuICAgICAgICAgICAgcmVjZWl2ZUF0dGFjayxcclxuICAgICAgICAgICAgLy9yZW1vdmUgYmVsb3dcclxuICAgICAgICAgICAgcGxhY2VQaGFzZSxcclxuICAgICAgICAgICAgbG9zZSxcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXIgPSAocGxheWVyTnVtYmVyLCBpc0FpID0gZmFsc2UpID0+IHtcclxuICAgICAgICBjb25zdCBmaXJzdFR1cm4gPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihwbGF5ZXJOdW1iZXIgPT09IDEpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGlzVHVybiA9IGZpcnN0VHVybigpOyBcclxuXHJcbiAgICAgICAgY29uc3QgdGFrZVR1cm4gPSAoY29vcmRzLCBib2FyZCwgdXNlciwgdGFyZ2V0LCB0YXJnZXRCb2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBpZighdXNlci5pc1R1cm4gfHwgYm9hcmQuY2hlY2tHcmlkRm9ySGl0KGNvb3JkcykpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcclxuICAgICAgICAgICAgaWYocmVzdWx0cyA9PT0gJ2dhbWUgb3ZlcicpIHJldHVybiAnZ2FtZSBvdmVyJztcclxuICAgICAgICAgICAgdXNlci5pc1R1cm4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGFyZ2V0LmlzVHVybiA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKHRhcmdldC5pc0FpKSBhaVRha2VzVHVybih0YXJnZXRCb2FyZCwgdGFyZ2V0LCB1c2VyLCBib2FyZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtyZXN1bHRzfSBhdCAke2Nvb3Jkc31gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWlUYWtlc1R1cm4gPSAoYm9hcmQsIHVzZXIsIHRhcmdldCwgdGFyZ2V0Qm9hcmQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkuOSksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkuOSldO1xyXG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBgWyR7eH0sJHt5fV1gO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gdGFrZVR1cm4oY29vcmRzLCBib2FyZCwgdXNlciwgdGFyZ2V0LCB0YXJnZXRCb2FyZCk7XHJcbiAgICAgICAgICAgIGlmKCFyZXN1bHRzKSByZXR1cm4gYWlUYWtlc1R1cm4oYm9hcmQsdXNlcix0YXJnZXQsIHRhcmdldEJvYXJkKVxyXG4gICAgICAgICAgICBlbHNlIHJldHVybiByZXN1bHRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgcGxheWVyTnVtYmVyLCB0YWtlVHVybiwgYWlUYWtlc1R1cm4sIGlzVHVybiwgaXNBaSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hpcCxcclxuICAgICAgICBnYW1lQm9hcmQsXHJcbiAgICAgICAgcGxheWVyLFxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhdHRsZVNoaXBzOyIsImltcG9ydCBiYXR0bGVTaGlwcyBmcm9tIFwiLi9iYXR0bGVzaGlwXCI7XHJcbmltcG9ydCBhcnJvdyBmcm9tICcuL2ltZy9hcnJvdy5wbmcnO1xyXG5cclxuY29uc3QgdXNlckludGVyZmFjZSA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZVNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2V0Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZS1zY3JlZW4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZE1lbnVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZS1zY3JlZW4tbWVudScpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm94KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFRpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLXNjcmVlbi1tZW51Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQmF0dGxlU2hpcHMnO1xyXG4gICAgICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtc2NyZWVuLW1lbnUnKTtcclxuICAgICAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGJ0bkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlLXNjcmVlbi1idG5zJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHB2cEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBwdnBCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwdnAtYnRuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHB2bUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBwdm1CdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwdm0tYnRuJyk7XHJcbiAgICAgICAgICAgIHB2cEJ0bi50ZXh0Q29udGVudCA9ICdWcyBQbGF5ZXInO1xyXG4gICAgICAgICAgICBwdm1CdG4udGV4dENvbnRlbnQgPSAnVnMgQ29tcHV0ZXInO1xyXG4gICAgICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGJ0bkNvbnRhaW5lci5hcHBlbmQocHZwQnRuLCBwdm1CdG4pOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZEV2ZW50cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHZwID0gZ2FtZVNjcmVlbih0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgcHZtID0gZ2FtZVNjcmVlbihmYWxzZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwdnAtYnRuJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHB2cC5sb2FkR2FtZVNjcmVlbik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwdm0tYnRuJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHB2bS5sb2FkR2FtZVNjcmVlbik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9hZFRpdGxlU2NyZWVuID0gKCkgPT4geyBcclxuICAgICAgICAgICAgc2V0Q29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgIGFkZE1lbnVDb250YWluZXIoKTtcclxuICAgICAgICAgICAgYWRkVGl0bGUoKTtcclxuICAgICAgICAgICAgYWRkQnV0dG9ucygpO1xyXG4gICAgICAgICAgICBhZGRFdmVudHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGxvYWRUaXRsZVNjcmVlbiwgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2FtZVNjcmVlbiA9IChwdnAgPSBmYWxzZSkgPT4geyAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2V0UGxheWVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcHZwXHJcbiAgICAgICAgICAgICAgICA/IGJhdHRsZVNoaXBzLnBsYXllcigyLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIDogYmF0dGxlU2hpcHMucGxheWVyKDIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXRCb2FyZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHB2cFxyXG4gICAgICAgICAgICAgICAgPyBiYXR0bGVTaGlwcy5nYW1lQm9hcmQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICA6IGJhdHRsZVNoaXBzLmdhbWVCb2FyZChudWxsLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllcjEgPSBiYXR0bGVTaGlwcy5wbGF5ZXIoMSwgZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllcjIgPSBzZXRQbGF5ZXIoKTtcclxuICAgICAgICBjb25zdCBib2FyZDEgPSBiYXR0bGVTaGlwcy5nYW1lQm9hcmQoKTtcclxuICAgICAgICBjb25zdCBib2FyZDIgPSBzZXRCb2FyZCgpO1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IHtcclxuICAgICAgICAgICAgcGxheWVyOiAxLFxyXG4gICAgICAgICAgICBpc1BsYWNpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgICAgICAgICBwaGFzZTogJ3BsYWNlJyAvLyBvciBhdHRhY2tcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzZXRDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZ2FtZS1zY3JlZW4nKTtcclxuICAgICAgICAgICAgd2hpbGUoY29udGFpbmVyLmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGdhbWUgY29udHJvbGxlciAvL1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZVdob1BsYWNpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBzID0gW11cclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IDEpeyAgICBcclxuICAgICAgICAgICAgICAgIGJvYXJkMS51bnBsYWNlZFNoaXBzLmZvckVhY2goc2hpcCA9PiBzaGlwcy5wdXNoKHNoaXAubnVtYmVyKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbiA9IHNoaXBzLnJlZHVjZSgoY3VycmVudCwgdG90YWwpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbCArPSBjdXJyZW50O1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbiA9PT0gMCAmJiBzaGlwcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXIucGxheWVyID0gMjtcclxuICAgICAgICAgICAgICAgIHNldEFubm91bmNlbWVudCgnUGxheWVyIDIgXFxuIFBsYWNpbmcgUGhhc2UnKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2hhbmdlR3JpZChwbGF5ZXIyLCBib2FyZDIsIHRydWUpLCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcG9pbnRlci5waGFzZSA9ICdwbGFjZScsIDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgc2V0R3JpZFRpdGxlKHBsYXllcjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVuZFBsYWNpbmcoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBlbmRQbGFjaW5nID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaGlwcyA9IFtdXHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAyKXtcclxuICAgICAgICAgICAgICAgIGJvYXJkMi51bnBsYWNlZFNoaXBzLmZvckVhY2goc2hpcCA9PiBzaGlwcy5wdXNoKHNoaXAubnVtYmVyKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbiA9IHNoaXBzLnJlZHVjZSgoY3VycmVudCwgdG90YWwpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbCArPSBjdXJyZW50O1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGNvbiA9PT0gMCAmJiBzaGlwcy5sZW5ndGggPiAwKXsgICAgIFxyXG4gICAgICAgICAgICAgICAgcG9pbnRlci5wbGF5ZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgc2V0QW5ub3VuY2VtZW50KCdBdHRhY2sgUGhhc2UnKTtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUJ0bnMoKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QW5ub3VuY2VtZW50KCdQbGF5ZXIgMSBUdXJuJyksIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci5waGFzZSA9ICdhdHRhY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ0bnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUdXJuU3RhdHVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlR3JpZChwbGF5ZXIyLCBib2FyZDIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVBsYWNlU2hpcEJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApOyAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZFR1cm4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBsYXllcjEuaXNUdXJuKXtcclxuICAgICAgICAgICAgICAgIGNoYW5nZUdyaWQocGxheWVyMiwgYm9hcmQyKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYgKHBsYXllcjIuaXNUdXJuKXtcclxuICAgICAgICAgICAgICAgIGNoYW5nZUdyaWQocGxheWVyMSwgYm9hcmQxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUdXJuU3RhdHVzKCk7XHJcbiAgICAgICAgICAgIHNldEFubm91bmNlbWVudCgnJywgdHJ1ZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlQnRucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBidG5zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGJ0bi5kaXNhYmxlZCkgYnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbmQgb2YgZ2FtZSBjb250cm9sbGVyIC8vXHJcblxyXG4gICAgICAgIC8vIHBsYXllciBzdGF0dXMgLy9cclxuICAgICAgICBjb25zdCBhZGRQbGF5ZXJJY29ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGxheWVySWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBwbGF5ZXJJY29uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyLWljb24tY29udGFpbmVyJylcclxuICAgICAgICAgICAgY29uc3QgcGxheWVyMUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHBsYXllcjFCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXItMScpO1xyXG4gICAgICAgICAgICBwbGF5ZXIyQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyLTInKTtcclxuICAgICAgICAgICAgcGxheWVyMUJ0bi50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMSc7XHJcbiAgICAgICAgICAgIHBsYXllcjJCdG4udGV4dENvbnRlbnQgPSAnUGxheWVyIDInO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVySWNvbkNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3JpZC10aXRsZScpO1xyXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGBQbGF5ZXJbXWA7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXJJY29uQ29udGFpbmVyLmFwcGVuZChwbGF5ZXIxQnRuLCB0aXRsZSwgcGxheWVyMkJ0bik7XHJcblxyXG4gICAgICAgICAgICBzZXRHcmlkVGl0bGUocGxheWVyMSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRkU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgc3RhdHVzQm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhdHVzLWJveCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTsgLy8gcGhhc2UgLyB0dXJuXHJcbiAgICAgICAgICAgIHN0YXR1czEuc2V0QXR0cmlidXRlKCdpZCcsICdzdGF0dXMtMScpO1xyXG4gICAgICAgICAgICBzdGF0dXMxLnRleHRDb250ZW50ID0gJ3BoYXNlOiAvIHR1cm46ICc7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1czIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpIC8vIHNoaXAgLyByb3VuZFxyXG4gICAgICAgICAgICBzdGF0dXMyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhdHVzLTInKTtcclxuICAgICAgICAgICAgc3RhdHVzMi50ZXh0Q29udGVudCA9ICdzaGlwOiAvIHJvdW5kOidcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJykgLy8gZGlyZWN0aW9uIC8gc2hpcHMgc3Vua1xyXG4gICAgICAgICAgICBzdGF0dXMzLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhdHVzLTMnKTtcclxuICAgICAgICAgICAgc3RhdHVzMy50ZXh0Q29udGVudCA9ICdkaXJlY3Rpb246IC8gc2hpcHMgc3VuazonO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdHVzQm94KTtcclxuICAgICAgICAgICAgc3RhdHVzQm94LmFwcGVuZChzdGF0dXMxLCBzdGF0dXMyLCBzdGF0dXMzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNldFR1cm5TdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1czEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHVzLTEnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0dXMtMicpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXR1cy0zJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGA8ZGl2IGNsYXNzPVwiZ3JpZC1zaGlwXCI+PC9kaXY+YFxyXG4gICAgICAgICAgICBsZXQgdGV4dEFycm93ID0gYDxpbWcgc3JjPVwiJHthcnJvd31cIiAvPmA7XHJcblxyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBoYXNlID09PSBcInBsYWNlXCIpe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzMS50ZXh0Q29udGVudCA9IGBQaGFzZTogJHtwb2ludGVyLnBoYXNlfSBzaGlwc2A7XHJcbiAgICAgICAgICAgICAgICBpZihwb2ludGVyLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykgdGV4dEFycm93ID0gYDxpbWcgc3JjPVwiJHthcnJvd31cIiAvPmA7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRleHRBcnJvdyA9IGA8aW1nIHNyYz1cIiR7YXJyb3d9XCIgY2xhc3M9XCJyaWdodFwiPmBcclxuICAgICAgICAgICAgICAgIHN0YXR1czMuaW5uZXJIVE1MID0gYERpcmVjdGlvbjogJHt0ZXh0QXJyb3d9YDtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChwb2ludGVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzMi50ZXh0Q29udGVudCA9ICdTaGlwOiBub25lKDApJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czIuaW5uZXJIVE1MID0gYFNoaXA6ICR7Ym94fSR7Ym94fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzMi5pbm5lckhUTUwgPSBgU2hpcDogJHtib3h9JHtib3h9JHtib3h9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMyLmlubmVySFRNTCA9IGBTaGlwOiAke2JveH0ke2JveH0ke2JveH0ke2JveH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czIuaW5uZXJIVE1MID0gYFNoaXA6ICR7Ym94fSR7Ym94fSR7Ym94fSR7Ym94fSR7Ym94fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHVybiA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXIxLmlzVHVybil0dXJuID0gMTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYocGxheWVyMi5pc1R1cm4pIHR1cm4gPSAyO1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzMS50ZXh0Q29udGVudCA9IGBUdXJuOiBwbGF5ZXIke3R1cm59YDtcclxuICAgICAgICAgICAgICAgIHN0YXR1czIudGV4dENvbnRlbnQgPSBgUm91bmQ6ICR7Ym9hcmQyLmF0dGFja0xvZy5sZW5ndGh9YDtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXIucGxheWVyID09PSAxIFxyXG4gICAgICAgICAgICAgICAgICAgID8gc3RhdHVzMy50ZXh0Q29udGVudCA9IGBTaGlwcyBTdW5rOiAke2JvYXJkMS5jaGVja051bU9mU3Vua1NoaXBzKCl9YFxyXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdHVzMy50ZXh0Q29udGVudCA9IGBTaGlwcyBTdW5rOiAke2JvYXJkMi5jaGVja051bU9mU3Vua1NoaXBzKCl9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZEFubm91bmNlbWVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYW5ub3VuY2VtZW50Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGFubm91bmNlbWVudEJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fubm91bmNlbWVudCcpO1xyXG4gICAgICAgICAgICBhbm5vdW5jZW1lbnRCb3guY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgICAgICBzdGF0dXMuc2V0QXR0cmlidXRlKCdpZCcsICdhbm5vdW5jZW1lbnQtdGV4dCcpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFubm91bmNlbWVudEJveCk7XHJcbiAgICAgICAgICAgIGFubm91bmNlbWVudEJveC5hcHBlbmRDaGlsZChzdGF0dXMpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHNldEFubm91bmNlbWVudCA9ICh0ZXh0LCByZW1vdmUgPSBmYWxzZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYW5ub3VuY2VtZW50Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbm5vdW5jZW1lbnQtdGV4dCcpO1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICAhcmVtb3ZlXHJcbiAgICAgICAgICAgICAgICA/IHN0YXR1cy50ZXh0Q29udGVudCA9IHRleHRcclxuICAgICAgICAgICAgICAgIDogc3RhdHVzLnRleHRDb250ZW50ID0gYm94LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRJY29uRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLTEnKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUdyaWQocGxheWVyMSwgYm9hcmQxKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLTInKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUdyaWQocGxheWVyMiwgYm9hcmQyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gZW5kIG9mIHBsYXllciBzdGF0dXMgLy9cclxuXHJcbiAgICAgICAgLy8gZ3JpZCBkaXNwbGF5IC8vXHJcbiAgICAgICAgLy8gZ3JpZCB0aXRsZSAvL1xyXG4gICAgICAgIGNvbnN0IHNldEdyaWRUaXRsZSA9IChwbGF5ZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3JpZC10aXRsZScpO1xyXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgJHtwbGF5ZXIucGxheWVyTnVtYmVyfSdzIEJvYXJkYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZW5kIG9mIGdyaWQgdGl0bGUgLy9cclxuXHJcbiAgICAgICAgLy8gZ3JpZCAvL1xyXG5cclxuICAgICAgICBjb25zdCBhZGRHcmlkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGdyaWQuc2V0QXR0cmlidXRlKCdpZCcsICdncmlkJyk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNldEdyaWRUb1BsYXllciA9IChwbGF5ZXIsIGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3JpZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJOdW1iZXIgPSBwbGF5ZXIucGxheWVyTnVtYmVyO1xyXG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBib2FyZC5ncmlkO1xyXG4gICAgICAgICAgICBjb29yZHMuZm9yRWFjaChjb29yZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbeCx5XSA9IFtjb29yZC5jb29yZGluYXRlWzFdLCBjb29yZC5jb29yZGluYXRlWzNdXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgZ3JpZC0ke3BsYXllck51bWJlcn0tJHt4fSwke3l9YCk7XHJcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChgcCR7cGxheWVyTnVtYmVyfWApOyBcclxuICAgICAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZighcGxheWVyMS5pc1R1cm4gJiYgcG9pbnRlci5wbGF5ZXIgPT09IDEpe1xyXG4gICAgICAgICAgICAgICAgbWFya0dyaWQocGxheWVyTnVtYmVyLCBib2FyZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFwbGF5ZXIyLmlzVHVybiAmJiBwb2ludGVyLnBsYXllciA9PT0gMil7XHJcbiAgICAgICAgICAgICAgICBtYXJrR3JpZChwbGF5ZXJOdW1iZXIsIGJvYXJkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHBvaW50ZXIucGhhc2UgPT09ICdwbGFjZScpIHtcclxuICAgICAgICAgICAgICAgIG1hcmtHcmlkKHBsYXllck51bWJlciwgYm9hcmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWFya0dyaWQocGxheWVyTnVtYmVyLCBib2FyZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzZXRHcmlkVG9TaGlwID0gKGUsIGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGhhc2UgIT0gJ3BsYWNlJykgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBlLnRhcmdldC5pZC5yZXBsYWNlKC9ncmlkLS9pLCAnJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IFtwbGF5ZXJOdW1iZXIsIHgsIHldID0gW1xyXG4gICAgICAgICAgICAgICAgTnVtYmVyKGNvb3Jkc1swXSksXHJcbiAgICAgICAgICAgICAgICBOdW1iZXIoY29vcmRzWzJdKSxcclxuICAgICAgICAgICAgICAgIE51bWJlcihjb29yZHNbNF0pLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAhYm9hcmQuaXNBaVxyXG4gICAgICAgICAgICAgICAgPyBib2FyZC5wbGFjZVNoaXAocG9pbnRlci5sZW5ndGgsIGBbJHt4fSwke3l9XWAsIHBvaW50ZXIuZGlyZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgOiBib2FyZC5haVBsYWNlU2hpcCgpO1xyXG4gICAgICAgICAgICBpZighYm9hcmQuaXNBaSltYXJrR3JpZFRvU2hpcChwbGF5ZXJOdW1iZXIsIGJvYXJkKTtcclxuXHJcbiAgICAgICAgICAgIGNsb3NlUGxhY2VTaGlwTWVudSgpO1xyXG4gICAgICAgICAgICBvcGVuUGxhY2VTaGlwTWVudSgpO1xyXG5cclxuICAgICAgICAgICAgY2hhbmdlV2hvUGxhY2luZygpO1xyXG4gICAgICAgICAgICAvL2NhcnJpZXJcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib2FyZCk7ICBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhdHRhY2tHcmlkID0gKGUsIGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGUudGFyZ2V0LmlkLnJlcGxhY2UoL2dyaWQtL2ksICcnKTtcclxuICAgICAgICAgICAgY29uc3QgW3BsYXllck51bWJlciwgeCwgeV0gPSBbXHJcbiAgICAgICAgICAgICAgICBOdW1iZXIoY29vcmRzWzBdKSxcclxuICAgICAgICAgICAgICAgIE51bWJlcihjb29yZHNbMl0pLFxyXG4gICAgICAgICAgICAgICAgTnVtYmVyKGNvb3Jkc1s0XSksXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBpZihwbGF5ZXJOdW1iZXIgPT09IDIgJiYgcGxheWVyMS5pc1R1cm4pe1xyXG4gICAgICAgICAgICAgICAgcGxheWVyMS50YWtlVHVybihgWyR7eH0sJHt5fV1gLCBib2FyZCwgcGxheWVyMSwgcGxheWVyMiwgYm9hcmQxKTtcclxuICAgICAgICAgICAgICAgIG1hcmtHcmlkKHBsYXllck51bWJlciwgYm9hcmQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYoIXBsYXllcjEuaXNUdXJuKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbm5vdW5jZW1lbnQoJ1BsYXllciAyIFR1cm4nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGVuZFR1cm4sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihwbGF5ZXJOdW1iZXIgPT09IDEgJiYgcGxheWVyMi5pc1R1cm4pe1xyXG4gICAgICAgICAgICAgICAgcGxheWVyMi50YWtlVHVybihgWyR7eH0sJHt5fV1gLCBib2FyZCwgcGxheWVyMiwgcGxheWVyMSwgYm9hcmQyKTtcclxuICAgICAgICAgICAgICAgIG1hcmtHcmlkKHBsYXllck51bWJlciwgYm9hcmQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYoIXBsYXllcjIuaXNUdXJuKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBbm5vdW5jZW1lbnQoJ1BsYXllciAxIFR1cm4nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGVuZFR1cm4sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFR1cm5TdGF0dXMoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrR3JpZFRvU2hpcCA9IChwbGF5ZXJOdW1iZXIsIGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAke3BsYXllck51bWJlcn1gKTtcclxuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gYm9hcmQuZ3JpZDtcclxuICAgICAgICAgICAgY29uc3QgbWFya2VkID0gW107XHJcblxyXG4gICAgICAgICAgICBjb29yZHMuZm9yRWFjaChjb29yZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjb29yZC5zaGlwSGVyZSkgbWFya2VkLnB1c2goY29vcmQuY29vcmRpbmF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZ3JpZFNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gc3F1YXJlLmlkLnJlcGxhY2UoL2dyaWQtXFx3LS9pLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDb29yZHMgPSBgWyR7Y29vcmRzfV1gO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG1hcmtlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWFya2VkW2ldID09PSBuZXdDb29yZHMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnZ3JpZC1zaGlwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrR3JpZFRvSGl0ID0gKHBsYXllck51bWJlciwgYm9hcmQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucCR7cGxheWVyTnVtYmVyfWApO1xyXG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBib2FyZC5ncmlkO1xyXG4gICAgICAgICAgICBjb25zdCBtYXJrZWQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvb3Jkcy5mb3JFYWNoKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNvb3JkLmhpdEhlcmUgJiYgY29vcmQuc2hpcEhlcmUpIG1hcmtlZC5wdXNoKGNvb3JkLmNvb3JkaW5hdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGdyaWRTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IHNxdWFyZS5pZC5yZXBsYWNlKC9ncmlkLVxcdy0vaSwgJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29vcmRzID0gYFske2Nvb3Jkc31dYDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtYXJrZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1hcmtlZFtpXSA9PT0gbmV3Q29vcmRzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2dyaWQtaGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrR3JpZFRvTWlzcyA9IChwbGF5ZXJOdW1iZXIsIGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnAke3BsYXllck51bWJlcn1gKTtcclxuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gYm9hcmQuZ3JpZDtcclxuICAgICAgICAgICAgY29uc3QgbWFya2VkID0gW107XHJcblxyXG4gICAgICAgICAgICBjb29yZHMuZm9yRWFjaChjb29yZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjb29yZC5oaXRIZXJlICYmICFjb29yZC5zaGlwSGVyZSkgbWFya2VkLnB1c2goY29vcmQuY29vcmRpbmF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZ3JpZFNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gc3F1YXJlLmlkLnJlcGxhY2UoL2dyaWQtXFx3LS9pLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDb29yZHMgPSBgWyR7Y29vcmRzfV1gO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG1hcmtlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWFya2VkW2ldID09PSBuZXdDb29yZHMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnZ3JpZC1taXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrR3JpZCA9IChwbGF5ZXJOdW1iZXIsIGJvYXJkLCBoaWRlU2hpcHMpID0+IHtcclxuICAgICAgICAgICAgaWYoIWhpZGVTaGlwcykgbWFya0dyaWRUb1NoaXAocGxheWVyTnVtYmVyLCBib2FyZCk7XHJcbiAgICAgICAgICAgIG1hcmtHcmlkVG9IaXQocGxheWVyTnVtYmVyLCBib2FyZCk7XHJcbiAgICAgICAgICAgIG1hcmtHcmlkVG9NaXNzKHBsYXllck51bWJlciwgYm9hcmQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZUdyaWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3JpZCcpO1xyXG4gICAgICAgICAgICB3aGlsZShncmlkLmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgICAgICAgICAgZ3JpZC5yZW1vdmVDaGlsZChncmlkLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhbmdlR3JpZCA9IChwbGF5ZXIsIGJvYXJkLCBieXBhc3MgPSBmYWxzZSkgPT4ge1xyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBoYXNlID09PSAncGxhY2UnICYmICFieXBhc3MpIHJldHVybjtcclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IHBsYXllci5wbGF5ZXJOdW1iZXIgJiYgIWJ5cGFzcykgcmV0dXJuO1xyXG4gICAgICAgICAgICByZW1vdmVHcmlkKCk7XHJcbiAgICAgICAgICAgIHNldEdyaWRUaXRsZShwbGF5ZXIpO1xyXG4gICAgICAgICAgICBzZXRHcmlkVG9QbGF5ZXIocGxheWVyLCBib2FyZCk7XHJcbiAgICAgICAgICAgIGFkZEdyaWRFdmVudHMocGxheWVyLCBib2FyZCk7XHJcbiAgICAgICAgICAgIHBvaW50ZXIucGxheWVyID0gcGxheWVyLnBsYXllck51bWJlcjsgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgc2V0QW5ub3VuY2VtZW50KCcnLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYoIWJ5cGFzcylzZXRUdXJuU3RhdHVzKCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoYnlwYXNzKXtcclxuICAgICAgICAgICAgICAgIGNsb3NlUGxhY2VTaGlwTWVudSgpO1xyXG4gICAgICAgICAgICAgICAgb3BlblBsYWNlU2hpcE1lbnUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNob29zZUdyaWRGdW5jdGlvbiA9IChlLCBib2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBoYXNlID09PSAnYXR0YWNrJyl7XHJcbiAgICAgICAgICAgICAgICBhdHRhY2tHcmlkKGUsIGJvYXJkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkLCBib2FyZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihwb2ludGVyLmlzUGxhY2luZyl7XHJcbiAgICAgICAgICAgICAgICBzZXRHcmlkVG9TaGlwKGUsIGJvYXJkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZEdyaWRFdmVudHMgPSAocGxheWVyLCBib2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wJHtwbGF5ZXIucGxheWVyTnVtYmVyfWApXHJcbiAgICAgICAgICAgIGdyaWRCdG5zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gY2hvb3NlR3JpZEZ1bmN0aW9uKGUsIGJvYXJkKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gZW5kIG9mIGdyaWQgLy9cclxuICAgICAgICAvLyBlbmQgb2YgZ3JpZCBkaXNwbGF5IC8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcGxhY2Ugc2hpcCBidXR0b25zIC8vXHJcbiAgICAgICAgY29uc3QgYWRkUGxhY2VTaGlwQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcC1tZW51Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlU2hpcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBwbGFjZVNoaXBCdG4udGV4dENvbnRlbnQgPSAn4oaTIFBsYWNlIFNoaXBzIOKGkyc7XHJcbiAgICAgICAgICAgIHBsYWNlU2hpcEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYWNlLXNoaXAnKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZVNoaXBCdG4pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG9wZW5QbGFjZVNoaXBNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBidXR0b25zIC8vXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcnJpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgY2Fycmllci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcnJpZXInKTtcclxuICAgICAgICAgICAgY2Fycmllci50ZXh0Q29udGVudCA9ICdDYXJyaWVyICg1KSc7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgYmF0dGxlc2hpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhdHRsZXNoaXAnKTtcclxuICAgICAgICAgICAgYmF0dGxlc2hpcC50ZXh0Q29udGVudCA9ICdCYXR0bGUgc2hpcCAoNCknO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJtYXJpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgc3VibWFyaW5lLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWFyaW5lJyk7XHJcbiAgICAgICAgICAgIHN1Ym1hcmluZS50ZXh0Q29udGVudCA9ICdTdWIgbWFyaW5lICgzKSc7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgcGF0cm9sQm9hdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BhdHJvbC1ib2F0Jyk7XHJcbiAgICAgICAgICAgIHBhdHJvbEJvYXQudGV4dENvbnRlbnQgPSAnUGF0cm9sIGJvYXQgKDIpJztcclxuICAgICAgICAgICAgY29uc3Qgcm90YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHJvdGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvdGF0ZS1zaGlwJyk7XHJcbiAgICAgICAgICAgIHJvdGF0ZS50ZXh0Q29udGVudCA9ICfihrcgUm90YXRlIFNoaXAg4oa3JztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGNvbnRhaW5lciAvL1xyXG4gICAgICAgICAgICBjb25zdCBidG5zVG9BcHBlbmQgPSBbXHJcbiAgICAgICAgICAgICAgICBwYXRyb2xCb2F0LFxyXG4gICAgICAgICAgICAgICAgc3VibWFyaW5lLFxyXG4gICAgICAgICAgICAgICAgYmF0dGxlc2hpcCxcclxuICAgICAgICAgICAgICAgIGNhcnJpZXIsXHJcbiAgICAgICAgICAgICAgICByb3RhdGVcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAtbWVudScpO1xyXG4gICAgICAgICAgICBidG5Db250YWluZXIuYXBwZW5kKC4uLmJ0bnNUb0FwcGVuZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoaWRlU2hpcEJ0bnMoLi4uYnRuc1RvQXBwZW5kKTtcclxuICAgICAgICAgICAgLy8gZXZlbnRzIC8vXHJcbiAgICAgICAgICAgIGFkZFNoaXBCdXR0b25FdmVudHMoKTtcclxuICAgICAgICAgICAgYWRkQ2xvc2VQbGFjZVNoaXBFdmVudCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNsb3NlUGxhY2VTaGlwTWVudSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAtbWVudScpO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUoYnRuQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICAgICAgYnRuQ29udGFpbmVyLnJlbW92ZUNoaWxkKGJ0bkNvbnRhaW5lci5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhZGRPcGVuUGxhY2VTaGlwRXZlbnQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRPcGVuUGxhY2VTaGlwRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZS1zaGlwJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5QbGFjZVNoaXBNZW51KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLXNoaXAnKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQbGFjZVNoaXBNZW51KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhZGRDbG9zZVBsYWNlU2hpcEV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhY2Utc2hpcCcpIFxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQbGFjZVNoaXBNZW51KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLXNoaXAnKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblBsYWNlU2hpcE1lbnUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYWNlU2hpcFR5cGUgPSAobGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIuaXNQbGFjaW5nICYmIHBvaW50ZXIubGVuZ3RoID09PSBsZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci5pc1BsYWNpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXIubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLmlzUGxhY2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUdXJuU3RhdHVzKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdGF0ZVNoaXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBvaW50ZXIuaXNQbGFjaW5nXHJcbiAgICAgICAgICAgICAgICA/IHBvaW50ZXIuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCdcclxuICAgICAgICAgICAgICAgICAgICA/IHBvaW50ZXIuZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogcG9pbnRlci5kaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCdcclxuICAgICAgICAgICAgICAgIDogJ25vdGhpbmcgdG8gcm90YXRlJztcclxuICAgICAgICAgICAgc2V0VHVyblN0YXR1cygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFNoaXBCdXR0b25FdmVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJyaWVyJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBsYWNlU2hpcFR5cGUoNSkpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmF0dGxlc2hpcCcpXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwbGFjZVNoaXBUeXBlKDQpKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1hcmluZScpXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwbGFjZVNoaXBUeXBlKDMpKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhdHJvbC1ib2F0JylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBsYWNlU2hpcFR5cGUoMikpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm90YXRlLXNoaXAnKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaGlkZVNoaXBCdG5zID0gKHBhdHJvbEJvYXQsIHN1Ym1hcmluZSwgYmF0dGxlc2hpcCwgY2FycmllcikgPT4ge1xyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBsYXllciA9PT0gMSAmJiBib2FyZDEudW5wbGFjZWRTaGlwc1swXS5udW1iZXIgPCAxKXtcclxuICAgICAgICAgICAgICAgIGNhcnJpZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAxICYmIGJvYXJkMS51bnBsYWNlZFNoaXBzWzFdLm51bWJlciA8IDEpe1xyXG4gICAgICAgICAgICAgICAgYmF0dGxlc2hpcC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IDEgJiYgYm9hcmQxLnVucGxhY2VkU2hpcHNbMl0ubnVtYmVyIDwgMSl7XHJcbiAgICAgICAgICAgICAgICBzdWJtYXJpbmUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAxICYmIGJvYXJkMS51bnBsYWNlZFNoaXBzWzNdLm51bWJlciA8IDEpe1xyXG4gICAgICAgICAgICAgICAgcGF0cm9sQm9hdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocG9pbnRlci5wbGF5ZXIgPT09IDIgJiYgYm9hcmQyLnVucGxhY2VkU2hpcHNbMF0ubnVtYmVyIDwgMSl7XHJcbiAgICAgICAgICAgICAgICBjYXJyaWVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBsYXllciA9PT0gMiAmJiBib2FyZDIudW5wbGFjZWRTaGlwc1sxXS5udW1iZXIgPCAxKXtcclxuICAgICAgICAgICAgICAgIGJhdHRsZXNoaXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIucGxheWVyID09PSAyICYmIGJvYXJkMi51bnBsYWNlZFNoaXBzWzJdLm51bWJlciA8IDEpe1xyXG4gICAgICAgICAgICAgICAgc3VibWFyaW5lLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwb2ludGVyLnBsYXllciA9PT0gMiAmJiBib2FyZDIudW5wbGFjZWRTaGlwc1szXS5udW1iZXIgPCAxKXtcclxuICAgICAgICAgICAgICAgIHBhdHJvbEJvYXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlUGxhY2VTaGlwQnV0dG9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwLW1lbnUnKVxyXG4gICAgICAgICAgICB3aGlsZShtZW51LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgICAgICAgICAgbWVudS5yZW1vdmVDaGlsZChtZW51LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlbmQgb2YgcGxhY2Ugc2hpcCBidXR0b25zIC8vXHJcblxyXG4gICAgICAgIGNvbnN0IGxvYWRHYW1lU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb250YWluZXIoKTtcclxuICAgICAgICAgICAgYWRkUGxheWVySWNvbnMoKTtcclxuICAgICAgICAgICAgYWRkR3JpZCgpO1xyXG4gICAgICAgICAgICBhZGRJY29uRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIGFkZFN0YXR1cygpO1xyXG4gICAgICAgICAgICBhZGRQbGFjZVNoaXBCdXR0b24oKTtcclxuICAgICAgICAgICAgYWRkT3BlblBsYWNlU2hpcEV2ZW50KCk7XHJcbiAgICAgICAgICAgIHNldEdyaWRUb1BsYXllcihwbGF5ZXIxLCBib2FyZDEpO1xyXG4gICAgICAgICAgICBhZGRHcmlkRXZlbnRzKHBsYXllcjEsIGJvYXJkMSk7XHJcbiAgICAgICAgICAgIGFkZEFubm91bmNlbWVudCgpO1xyXG4gICAgICAgICAgICBzZXRBbm5vdW5jZW1lbnQoJ1BsYXllciAxIFxcbiBQbGFjaW5nIFBoYXNlJylcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRBbm5vdW5jZW1lbnQoJycsIHRydWUpLCAxMDAwKTtcclxuICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgc2V0VHVyblN0YXR1cygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIHJlbW92ZSBiZWxvdyAvL1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgY29uc3QgcGxhY2VBbGxTaGlwcyA9IChib2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoNSwgJ1swLDFdJywgJ2hvcml6b250YWwnKTtcclxuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKDQsICdbMCwyXScsICdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCgzLCAnWzAsM10nLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoMywgJ1swLDRdJywgJ2hvcml6b250YWwnKTtcclxuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKDMsICdbMCw1XScsICdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCgzLCAnWzAsNl0nLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoMiwgJ1swLDddJywgJ2hvcml6b250YWwnKTtcclxuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKDIsICdbMCw4XScsICdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgbG9hZEdhbWVTY3JlZW4sIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlU2NyZWVuLFxyXG4gICAgICAgIGdhbWVTY3JlZW4sXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VySW50ZXJmYWNlO1xyXG5cclxuLy8gbmV4dCBzdGVwID0+IG1ha2UgZ2FtZSBvdmVyIGFubm91bmNlbWVudCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBiYXR0bGVTaGlwcyBmcm9tICcuL2JhdHRsZXNoaXAnO1xyXG5pbXBvcnQgdXNlckludGVyZmFjZSBmcm9tICcuL3VpJztcclxuXHJcbmNvbnN0IHBsYXllcjEgPSBiYXR0bGVTaGlwcy5wbGF5ZXIoMSwgdHJ1ZSk7XHJcbmNvbnN0IHBsYXllcjIgPSBiYXR0bGVTaGlwcy5wbGF5ZXIoMiwgdHJ1ZSk7XHJcbmNvbnN0IEJvYXJkMSA9IGJhdHRsZVNoaXBzLmdhbWVCb2FyZCgpO1xyXG5jb25zdCBCb2FyZDIgPSBiYXR0bGVTaGlwcy5nYW1lQm9hcmQoKTtcclxuY29uc3QgaW50cm8gPSB1c2VySW50ZXJmYWNlLnRpdGxlU2NyZWVuKCk7XHJcbmNvbnN0IGdhbWUgPSB1c2VySW50ZXJmYWNlLmdhbWVTY3JlZW4oKTtcclxuXHJcbmNvbnN0IHBsYWNlQWxsU2hpcHMgPSAocDFCb2FyZCkgPT4ge1xyXG4gICAgcDFCb2FyZC5wbGFjZVNoaXAoNSwgJ1swLDFdJywgJ2hvcml6b250YWwnKTtcclxuICAgIHAxQm9hcmQucGxhY2VTaGlwKDQsICdbMCwyXScsICdob3Jpem9udGFsJyk7XHJcbiAgICBwMUJvYXJkLnBsYWNlU2hpcCgzLCAnWzAsM10nLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgcDFCb2FyZC5wbGFjZVNoaXAoMywgJ1swLDRdJywgJ2hvcml6b250YWwnKTtcclxuICAgIHAxQm9hcmQucGxhY2VTaGlwKDMsICdbMCw1XScsICdob3Jpem9udGFsJyk7XHJcbiAgICBwMUJvYXJkLnBsYWNlU2hpcCgzLCAnWzAsNl0nLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgcDFCb2FyZC5wbGFjZVNoaXAoMiwgJ1swLDddJywgJ2hvcml6b250YWwnKTtcclxuICAgIHAxQm9hcmQucGxhY2VTaGlwKDIsICdbMCw4XScsICdob3Jpem9udGFsJyk7XHJcbiAgICBwMUJvYXJkLnBsYWNlU2hpcCgyLCAnWzAsOV0nLCAnaG9yaXpvbnRhbCcpO1xyXG59O1xyXG5cclxuXHJcblxyXG5jb25zdCBwbGF5R2FtZSA9ICgpID0+IHtcclxuICAgIGludHJvLmxvYWRUaXRsZVNjcmVlbigpO1xyXG4gICAgcGxhY2VBbGxTaGlwcyhCb2FyZDEpO1xyXG4gICAgcGxhY2VBbGxTaGlwcyhCb2FyZDIpO1xyXG4gICAgcGxheWVyMS50YWtlVHVybignWzUsNF0nLCBCb2FyZDIsIHBsYXllcjEsIHBsYXllcjIsIEJvYXJkMSk7XHJcbn07XHJcbnBsYXlHYW1lKCk7XHJcbmNvbnNvbGUubG9nKEJvYXJkMS5hdHRhY2tMb2cpO1xyXG5jb25zb2xlLmxvZyhCb2FyZDIuYXR0YWNrTG9nKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=