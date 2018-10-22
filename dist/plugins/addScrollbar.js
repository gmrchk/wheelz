(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["addScrollbar"] = factory();
	else
		root["addScrollbar"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function addScrollbar(wheelz) {
    // styles for scrollbar
    var css = '\n        .wheelz {\n            position: relative;\n        }\n\n        .wheelz-holder {\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            right: 0;\n            width: 8px;\n            background: rgba(255, 255, 255, .9);\n            transition: opacity .4s;\n            opacity: 0;\n            z-index: 1000;\n            transform: translateY(0);\n        }\n\n        .wheelz-scrollbar, .wheelz-shadow {\n            position: absolute;\n            top: 0;\n            width: 6px;\n            left: 1px;\n            border-radius: 3px;\n            background: rgba(0, 0, 0, .2);\n        }\n\n        .wheelz-scrollbar {\n            background: rgba(0, 0, 0, .3);\n        }\n\n        .wheelz:hover > .wheelz-holder {\n            opacity: 1;\n        }\n    ';

    // prepend styles to head tag
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.prepend(style);

    // create scrollbar holder
    wheelz.$scrollbarHolder = document.createElement('div');
    wheelz.$scrollbarHolder.classList.add('wheelz-holder');

    // create scrollbar - position of scrollbar
    wheelz.$scrollbar = document.createElement('div');
    wheelz.$scrollbar.classList.add('wheelz-scrollbar');

    // create shadow scrollbar - position of scrollbar animated value
    wheelz.$shadowScrollbar = document.createElement('div');
    wheelz.$shadowScrollbar.classList.add('wheelz-shadow');

    // insert to DOM
    wheelz.$scrollbarHolder.appendChild(wheelz.$scrollbar);
    wheelz.$scrollbarHolder.appendChild(wheelz.$shadowScrollbar);
    wheelz.element.appendChild(wheelz.$scrollbarHolder);

    // set size of scrollbar
    wheelz.numbers.scrollbarHeight = wheelz.numbers.height / wheelz.numbers.contentHeight * 100;

    // do render on scroll
    wheelz.on('scroll', render);

    wheelz.on('disable', function () {
        // remove scrollbar
        wheelz.$scrollbarHolder.outerHTML = "";
        delete wheelz.$scrollbarHolder;
    });

    // recalculate and set scrollbars size
    wheelz.on('resize', resize);
    resize();

    function resize() {
        wheelz.numbers.scrollbarHeight = wheelz.numbers.height / wheelz.numbers.contentHeight * 100;
        wheelz.$scrollbar.style.height = wheelz.numbers.scrollbarHeight + '%';
        wheelz.$shadowScrollbar.style.height = wheelz.numbers.scrollbarHeight + '%';
    }

    function render(instances) {
        var scrolled = instances.y.target / wheelz.numbers.maxScroll * (100 - wheelz.numbers.scrollbarHeight);
        var scrolledShadow = instances.y.current / wheelz.numbers.maxScroll * (100 - wheelz.numbers.scrollbarHeight);

        wheelz.$scrollbarHolder.style.transform = 'translate3d(0, ' + instances.y.current + 'px, 0)';
        wheelz.$scrollbar.style.top = scrolled + '%';
        wheelz.$shadowScrollbar.style.top = scrolledShadow + '%';
    }
};

/***/ })
/******/ ]);
});