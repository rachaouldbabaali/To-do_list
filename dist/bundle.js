/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/checkbox.js":
/*!*********************************!*\
  !*** ./src/modules/checkbox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/modules/store.js");

function handleCheckboxChange(taskIndex) {
  var checkbox = document.getElementById("checky".concat(taskIndex));
  var taski = document.getElementById("".concat(taskIndex));
  checkbox.addEventListener('change', function () {
    var task = _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks(taskIndex);
    task.completed = checkbox.checked;
    if (task.completed) {
      taski.classList.add('completed');
    } else {
      taski.classList.remove('completed');
    }
    _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateCheckbox(taskIndex, task.completed);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleCheckboxChange);

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);
  }
  _createClass(Store, null, [{
    key: "getTasks",
    value: function getTasks() {
      var tasks;
      if (localStorage.getItem('tasks') === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
      }
      return tasks;
    }
  }, {
    key: "addTask",
    value: function addTask(task) {
      var tasks = this.getTasks();
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      tasks.forEach(function (task) {
        task.index = tasks.indexOf(task) + 1;
      });
    }
  }, {
    key: "removeTask",
    value: function removeTask(index) {
      var tasks = this.getTasks();
      var filteredTasks = tasks.filter(function (ele) {
        return ele.index != index;
      });
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    }
  }, {
    key: "updateIndex",
    value: function updateIndex() {
      var tasks = this.getTasks();
      tasks.forEach(function (task) {
        task.index = tasks.indexOf(task) + 1;
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // check if task is already in the list
  }, {
    key: "checkTask",
    value: function checkTask(description) {
      var tasks = Store.getTasks();
      var check = false;
      tasks.forEach(function (task) {
        if (task.description.toUpperCase() === description.toUpperCase()) {
          check = true;
        }
      });
      return check;
    }

    // update task with the new description
  }, {
    key: "updateTask",
    value: function updateTask(index, description) {
      var tasks = Store.getTasks();
      tasks.forEach(function (task) {
        if (task.index == index) {
          task.description = description;
        }
        task.index = tasks.indexOf(task) + 1;
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, {
    key: "updateCheckbox",
    value: function updateCheckbox(index, completed) {
      var tasks = Store.getTasks();
      tasks.forEach(function (task) {
        if (task.index == index) {
          task.completed = completed;
        }
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, {
    key: "clearCompletedTasks",
    value: function clearCompletedTasks() {
      var tasks = Store.getTasks();
      var filteredTasks = tasks.filter(function (ele) {
        return ele.completed != true;
      });
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    }
  }]);
  return Store;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// create class for tasks
var Task = /*#__PURE__*/_createClass(
// eslint-disable-next-line no-unused-vars
function Task(description, completed, index) {
  _classCallCheck(this, Task);
  Task.index += 1;
  this.description = description;
  this.completed = completed;
  this.index = Task.index;
});
_defineProperty(Task, "index", 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Define variables for colors and font families */\nhtml {\n  box-sizing: border-box;\n  background-color: #f2ecef;\n}\n\n/* Define styles for the todo form */\n#todo-form {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0;\n  padding: 0.5rem 1rem;\n  border-bottom: #6c757d 1px solid;\n}\n\n/* Define styles for the input field */\n#todo-input {\n  flex-grow: 1;\n  border: none;\n  font-family: arial, sans-serif;\n  font-size: 1rem;\n  color: #6c757d;\n}\n#todo-input::placeholder {\n  color: #6c757d;\n  opacity: 0.5;\n}\n#todo-input:focus {\n  outline: none;\n  border-color: #855a71;\n}\n\n/* Define styles for the submit button */\n[type=submit] {\n  margin: 0 1rem;\n  padding: 0.5rem;\n  background-color: transparent;\n  border: none;\n  border-radius: 3px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out;\n}\n[type=submit]:hover {\n  background-color: #c9afbd;\n  color: #ecf4fc;\n}\n\n/* Define styles for the todo list container */\n.todo-list {\n  margin: 0 auto;\n  max-width: 600px;\n  font-family: arial, sans-serif;\n  box-shadow: #6c757d 0 0 10px 0;\n  border: #6c757d 1px solid;\n  background-color: white;\n}\n\n/* Define styles for the list title */\n.todo-list > h2 {\n  font-size: 2rem;\n  color: #855a71;\n  text-align: left;\n  margin: 0;\n  border-bottom: #6c757d 1px solid;\n  padding: 1rem;\n}\n\n/* Define styles for the task list */\n#tasks {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/* Define styles for individual tasks */\nli {\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid #6c757d;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out;\n}\nli:hover {\n  background-color: #c9afbd;\n  color: #ecf4fc;\n}\nli .checkbox {\n  margin-right: 1rem;\n}\nli .task-description {\n  display: inline-block;\n  width: 85%;\n  background-color: transparent;\n  border: none;\n}\n\n#clear-btn {\n  margin: 1rem auto;\n  border: none;\n  background-color: transparent;\n  font-size: 1.5rem;\n  opacity: 0.5;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out;\n  display: block;\n}\n#clear-btn:hover {\n  background-color: transparent;\n  color: #855a71;\n}\n\n.insert-task {\n  background-color: rgb(250, 66, 66);\n  color: white;\n  padding: 0.5rem 1rem;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: #6c757d;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA,kDAAA;AAMA;EACE,sBAAA;EACA,yBAAA;AAJF;;AAOA,oCAAA;AACA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,SAAA;EACA,oBAAA;EACA,gCAAA;AAJF;;AAOA,sCAAA;AACA;EACE,YAAA;EACA,YAAA;EACA,8BArBY;EAsBZ,eAAA;EACA,cAzBgB;AAqBlB;AAME;EACE,cA5Bc;EA6Bd,YAAA;AAJJ;AAOE;EACE,aAAA;EACA,qBAnCY;AA8BhB;;AASA,wCAAA;AACA;EACE,cAAA;EACA,eAAA;EACA,6BAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,6CAAA;AANF;AAQE;EACE,yBAAA;EACA,cAlDU;AA4Cd;;AAUA,8CAAA;AACA;EACE,cAAA;EACA,gBAAA;EACA,8BAzDY;EA0DZ,8BAAA;EACA,yBAAA;EACA,uBAAA;AAPF;;AAUA,qCAAA;AACA;EACE,eAAA;EACA,cArEc;EAsEd,gBAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;AAPF;;AAUA,oCAAA;AACA;EACE,gBAAA;EACA,SAAA;EACA,UAAA;AAPF;;AAUA,uCAAA;AACA;EACE,oBAAA;EACA,gCAAA;EACA,eAAA;EACA,6CAAA;AAPF;AASE;EACE,yBAAA;EACA,cA1FU;AAmFd;AAUE;EACE,kBAAA;AARJ;AAWE;EACE,qBAAA;EACA,UAAA;EACA,6BAAA;EACA,YAAA;AATJ;;AAaA;EACE,iBAAA;EACA,YAAA;EACA,6BAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;EACA,6CAAA;EACA,cAAA;AAVF;AAYE;EACE,6BAAA;EACA,cAvHY;AA6GhB;;AAcA;EACE,kCAAA;EACA,YAAA;EACA,oBAAA;AAXF;;AAcA;EACE,6BAAA;EACA,cAlIgB;AAuHlB","sourcesContent":["/* Define variables for colors and font families */\r\n$primary-color: #855a71;\r\n$secondary-color: #6c757d;\r\n$third-color: #ecf4fc;\r\n$font-family: arial, sans-serif;\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  background-color: lighten($primary-color, 50%);\r\n}\r\n\r\n/* Define styles for the todo form */\r\n#todo-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0;\r\n  padding: 0.5rem 1rem;\r\n  border-bottom: $secondary-color 1px solid;\r\n}\r\n\r\n/* Define styles for the input field */\r\n#todo-input {\r\n  flex-grow: 1;\r\n  border: none;\r\n  font-family: $font-family;\r\n  font-size: 1rem;\r\n  color: $secondary-color;\r\n\r\n  &::placeholder {\r\n    color: $secondary-color;\r\n    opacity: 0.5;\r\n  }\r\n\r\n  &:focus {\r\n    outline: none;\r\n    border-color: $primary-color;\r\n  }\r\n}\r\n\r\n/* Define styles for the submit button */\r\n[type=\"submit\"] {\r\n  margin: 0 1rem;\r\n  padding: 0.5rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-radius: 3px;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  transition: background-color 0.2s ease-in-out;\r\n\r\n  &:hover {\r\n    background-color: lighten($primary-color, 30%);\r\n    color: $third-color;\r\n  }\r\n}\r\n\r\n/* Define styles for the todo list container */\r\n.todo-list {\r\n  margin: 0 auto;\r\n  max-width: 600px;\r\n  font-family: $font-family;\r\n  box-shadow: $secondary-color 0 0 10px 0;\r\n  border: #6c757d 1px solid;\r\n  background-color: lighten($color: $primary-color, $amount: 60%);\r\n}\r\n\r\n/* Define styles for the list title */\r\n.todo-list > h2 {\r\n  font-size: 2rem;\r\n  color: $primary-color;\r\n  text-align: left;\r\n  margin: 0;\r\n  border-bottom: #6c757d 1px solid;\r\n  padding: 1rem;\r\n}\r\n\r\n/* Define styles for the task list */\r\n#tasks {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* Define styles for individual tasks */\r\nli {\r\n  padding: 0.5rem 1rem;\r\n  border-bottom: 1px solid $secondary-color;\r\n  cursor: pointer;\r\n  transition: background-color 0.2s ease-in-out;\r\n\r\n  &:hover {\r\n    background-color: lighten($primary-color, 30%);\r\n    color: $third-color;\r\n  }\r\n\r\n  .checkbox {\r\n    margin-right: 1rem;\r\n  }\r\n\r\n  .task-description {\r\n    display: inline-block;\r\n    width: 85%;\r\n    background-color: transparent;\r\n    border: none;\r\n  }\r\n}\r\n\r\n#clear-btn {\r\n  margin: 1rem auto;\r\n  border: none;\r\n  background-color: transparent;\r\n  font-size: 1.5rem;\r\n  opacity: 0.5;\r\n  cursor: pointer;\r\n  transition: background-color 0.2s ease-in-out;\r\n  display: block;\r\n\r\n  &:hover {\r\n    background-color: transparent;\r\n    color: $primary-color;\r\n  }\r\n}\r\n\r\n.insert-task {\r\n  background-color: rgb(250, 66, 66);\r\n  color: white;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n  color: $secondary-color;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tasks.js */ "./src/modules/tasks.js");
/* harmony import */ var _modules_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/store.js */ "./src/modules/store.js");
/* harmony import */ var _modules_checkbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/checkbox.js */ "./src/modules/checkbox.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




// UI c!lass handles ui tasks
var UI = /*#__PURE__*/function () {
  function UI() {
    _classCallCheck(this, UI);
  }
  _createClass(UI, null, [{
    key: "displayTasks",
    value: function displayTasks() {
      var tasks = _modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTasks();
      tasks.forEach(function (task) {
        return UI.addTaskToList(task);
      });
    }
  }, {
    key: "addTaskToList",
    value: function addTaskToList(task) {
      var list = document.querySelector('#tasks');
      var row = document.createElement('li');
      row.innerHTML = "\n        <input type=\"checkbox\" class=\"checkbox\" id=\"checky".concat(task.index, "\" ").concat(task.completed ? 'checked' : '', ">\n        <input class=\" task task-description \" id=\"").concat(task.index, "\" value= \"").concat(task.description, "\">  \n        <label class=\"label\"><i class=\"fas fa-checked \"></i></label>\n        <a href=\"#\" id =\"delete-btn").concat(task.index, "\" data-task=").concat(task.index, "><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash3-fill delete\" viewBox=\"0 0 16 16\">\n        <path class=\"deleteFromPath\" d=\"M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z\"/>\n        </svg></a>\n        ");
      list.appendChild(row);
      (0,_modules_checkbox_js__WEBPACK_IMPORTED_MODULE_3__["default"])(task.index);
      var removeTaskBtn = document.getElementById("delete-btn".concat(task.index));
      removeTaskBtn.addEventListener('click', function () {
        UI.deleteTask(removeTaskBtn);
        // Remove task from localStorage
        _modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeTask(task.index);
        // update index of tasks in localStorage
        _modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateIndex();
      });
      _modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateIndex();
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(el) {
      el.parentNode.remove();
    }
  }, {
    key: "showAlert",
    value: function showAlert(message, className) {
      var div = document.createElement('div');
      div.className = "alert alert-".concat(className);
      div.appendChild(document.createTextNode(message));
      var msg = document.querySelector('.msg');
      msg.appendChild(div);
      // Vanish in 3 seconds
      setTimeout(function () {
        return document.querySelector('.alert').remove();
      }, 3000);
    }
  }, {
    key: "clearFields",
    value: function clearFields() {
      document.querySelector('#todo-input').value = '';
    }
  }, {
    key: "editTask",
    value: function editTask(index) {
      var task = _modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTasks(index);
      var input = document.getElementById("".concat(index));
      task.description = input.value;
      _modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateTask(index, task.description);
    }
  }, {
    key: "deleteCompletedTasks",
    value: function deleteCompletedTasks() {
      var tasks = _modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTasks();
      tasks.forEach(function (task) {
        if (task.completed) {
          _modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeTask(task.index);
        }
      });
      UI.clearCompletedTasks();
    }
  }, {
    key: "clearCompletedTasks",
    value: function clearCompletedTasks() {
      var tasks = document.querySelectorAll('.checkbox');
      tasks.forEach(function (task) {
        if (task.checked) {
          task.parentNode.remove();
        }
      });
    }
  }]);
  return UI;
}(); // Event: Display Tasks
// document.addEventListener('DOMContentLoaded', UI.displayTasks);
document.addEventListener('DOMContentLoaded', function () {
  var tasks = _modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTasks();
  tasks.forEach(function (task) {
    UI.addTaskToList(task);
  });
});

// Event: Add a Task
document.querySelector('#todo-form').addEventListener('submit', function (e) {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  var description = document.querySelector('#todo-input').value;
  // validate
  if (description === '') {
    UI.showAlert('Please add a task', 'danger');
  } else if (_modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTask(description)) {
    UI.showAlert('Task already in the list', 'danger');
  } else {
    // Instantiate task
    var task = new _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"](description, false);
    // Add task to UI
    UI.addTaskToList(task);
    UI.showAlert('Task Added', 'success');
    // Add task to store
    _modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(task);
    _modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateIndex();
    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a Task
// document.querySelector('#tasks').addEventListener('click', (e) => {
//   console.log('remove task ');
//   e.preventDefault();

// });

// Event: Edit a Task on change
document.querySelector('#tasks').addEventListener('change', function (e) {
  e.preventDefault();
  // get the index of the task
  var index = e.target.id;
  UI.editTask(index, e.target.value);
  UI.showAlert('Task Updated', 'success');
  // Update task in localStorage
  _modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateTask(index, e.target.value);
});

// Event: Clear All completed Tasks
document.querySelector('#clear-btn').addEventListener('click', function (e) {
  e.preventDefault();
  // Remove all completed tasks from UI
  UI.deleteCompletedTasks();
  UI.showAlert('All completed tasks have been removed', 'success');
  _modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].clearCompletedTasks();
  _modules_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateIndex();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map