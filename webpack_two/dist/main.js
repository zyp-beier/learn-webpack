/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/addContent.js":
/*!***************************!*\
  !*** ./src/addContent.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// export default function () {\r\n//     document.write('修改后的addContent')\r\n//     document.write('测试webpack-dev-server的live-reloading，当webpack-dev-server发现工程源文件进行了更新操作就会自动刷新浏览器，显示更新后的内容')\r\n// }\r\n/////////////////////////////////////////////////////////commonJS语法\r\n/*console.log('addContent.js')\r\nconst content = {\r\n    name: 'zhaoyinping',\r\n    add: () => {\r\n       return '执行了addContent.js的add函数(commomJS语法)'\r\n    }\r\n};\r\n\r\n\r\nmodule.exports = content*/\r\n ////////////////////////////////////////////////////////////ES6语法\r\nconsole.log(123)\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    name: 'zhaoyinping',\r\n    add: () => {\r\n        return '执行了addContent.js的add函数(ES6语法)'\r\n    }\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/addContent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addContent */ \"./src/addContent.js\");\n// import addContent from \"./addContent\";\r\n// document.write('---------index');\r\n// document.write('添加了webpack.config.js');\r\n// document.write('<br/>');\r\n// document.write('webpack-dev-serve:令Webpack进行模块打包，并处理打包结果的资源请求,作为普通的Web Server，处理静态资源文件请求');\r\n// addContent();\r\n\r\n/////////////////////////////////////////////////////////////////// commonJS语法\r\n// console.log('index.js')\r\n/*let add = require('./addContent').add;\r\nconsole.log(add())\r\nlet name = require('./addContent').name\r\nconsole.log('两个地方require了calculator.js，但其内部代码只执行了一遍');\r\nlet test = require('../components/public')\r\ntest.test()*/\r\n\r\n/////////////////////////////////////////////////////////////////ES6语法\r\n\r\n\r\nconsole.log(_addContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add())\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });