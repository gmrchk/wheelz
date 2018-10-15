(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Wheelz"] = factory();
	else
		root["Wheelz"] = factory();
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


var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _index2.default; // this is here for webpack to expose Wheelz as window.Wheelz

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kinet = __webpack_require__(2);

var _kinet2 = _interopRequireDefault(_kinet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wheelz = function () {
    function Wheelz(element, options) {
        _classCallCheck(this, Wheelz);

        var defaults = {
            itemGap: 0,
            containerPadding: 0,
            scrollbar: true,
            delayItems: false,

            friction: 0.3,
            acceleration: 0.04
        };

        this.options = _extends({}, defaults, options);

        // to set correct value (1 - x)
        if (options && options.friction) {
            this.options.friction = 1 - options.friction;
        }

        this.element = element;
        this.direction = 0;
        this.speed = 0;

        // create kinet instance
        this.kinet = new _kinet2.default({
            names: ["x", "y"],
            acceleration: this.options.acceleration,
            friction: this.options.friction
        });

        this.clickHandler = this.click.bind(this);
        this.wheelHandler = this.wheel.bind(this);
        this.mouseDownHandler = this.mouseDown.bind(this);
        this.mouseUpHandler = this.mouseUp.bind(this);
        this.mouseMoveHandler = this.mouseMove.bind(this);
        this.mouseEnterHandler = this.mouseEnter.bind(this);
        this.mouseLeaveHandler = this.mouseLeave.bind(this);
        this.resizeHandler = this.resize.bind(this);
        this.disableHandler = this.disable.bind(this);

        if (this.options.delayItems) {
            this.renderHandler = this.renderDelayed.bind(this);
        } else {
            this.renderHandler = this.render.bind(this);
        }

        this.enable();
    }

    _createClass(Wheelz, [{
        key: "enable",
        value: function enable() {
            this.element.style.overflow = "hidden";
            this.element.classList.add('whee');
            this.children = this.element.children;
            this.childrenLength = this.children.length;
            this.press = {
                pressed: false
            };
            this.resize();

            // wheel
            this.element.addEventListener('mousewheel', this.wheelHandler);

            // drag
            this.element.addEventListener('mousedown', this.mouseDownHandler);
            window.addEventListener('mouseup', this.mouseUpHandler);
            window.addEventListener('mousemove', this.mouseMoveHandler);

            // touch drag
            this.element.addEventListener('touchstart', this.mouseDownHandler);
            window.addEventListener('touchend', this.mouseUpHandler);
            window.addEventListener('touchmove', this.mouseMoveHandler);

            // helpers
            this.element.addEventListener('mouseenter', this.mouseEnterHandler);
            this.element.addEventListener('mouseleave', this.mouseLeaveHandler);
            this.element.addEventListener('click', this.clickHandler);
            window.addEventListener('resize', this.resizeHandler);

            if (this.options.scrollbar) {
                this.createScrollbar();
            } else {
                this.renderScrollBar = function () {};
            }

            this.kinet.on('tick', this.renderHandler);
            this.kinet.set('y', this.element.scrollTop);
        }
    }, {
        key: "disable",
        value: function disable() {
            var s = parseInt(this.scroll);
            this.scroll = 0;
            this.element.style.overflow = "";
            this.element.classList.remove('whee');
            this.element.style.WebkitOverflowScrolling = 'touch';
            this.press = {
                pressed: false
            };

            this.element.removeEventListener('mousewheel', this.wheelHandler);
            this.element.removeEventListener('mousedown', this.mouseDownHandler);
            window.removeEventListener('mouseup', this.mouseUpHandler);
            window.removeEventListener('mousemove', this.mouseMoveHandler);
            this.element.removeEventListener('mouseenter', this.mouseEnterHandler);
            this.element.removeEventListener('mouseleave', this.mouseLeaveHandler);
            window.removeEventListener('resize', this.resizeHandler);
            //window.removeEventListener('touchstart', this.disableHandler);

            this.element.scrollTop = s;

            this.kinet.off('tick');
        }
    }, {
        key: "createScrollbar",
        value: function createScrollbar() {
            var css = "\n                .whee {\n                    touch-action: none;\n                }\n\n                .whee-holder {\n                    position: absolute;\n                    top: 6px;\n                    right: 2px;\n                    height: calc(100% - 12px);\n                    width: 8px;\n                    background: rgba(255, 255, 255, .8);\n                    transition: opacity .4s;\n                    opacity: 0;\n                    border-radius: 4px;\n                }\n\n                .whee-scrollbar, .whee-shadow {\n                    position: absolute;\n                    top: 0;\n                    width: calc(100% - 2px);\n                    left: 1px;\n                    border-radius: 3px;\n                    background: rgba(0, 0, 0, .6);\n                }\n\n                .whee-scrollbar {\n                    background: rgba(0, 0, 0, .6);\n                }\n\n                .whee:hover > .whee-holder {\n                    opacity: 1;\n                }\n            ";

            var style = document.createElement('style');
            style.type = 'text/css';
            style.appendChild(document.createTextNode(css));
            document.head.appendChild(style);

            this.scrollbarHolder = document.createElement('div');
            this.scrollbarHolder.classList.add('whee-holder');

            this.scrollbar = document.createElement('div');
            this.scrollbar.classList.add('whee-scrollbar');

            this.shadowScrollbar = document.createElement('div');
            this.shadowScrollbar.classList.add('whee-shadow');

            this.scrollbarHolder.appendChild(this.scrollbar);
            this.scrollbarHolder.appendChild(this.shadowScrollbar);
            this.element.appendChild(this.scrollbarHolder);

            this.scrollbarHeight = this.height / this.contentHeight * 100;
            this.scrollbar.style.height = this.scrollbarHeight + "%";
            this.shadowScrollbar.style.height = this.scrollbarHeight + "%";
        }
    }, {
        key: "resize",
        value: function resize() {
            this.contentHeight = 0;
            this.height = this.element.offsetHeight;
            for (var i = 0; i < this.childrenLength; i++) {
                this.contentHeight += this.children[i].offsetHeight ? this.children[i].offsetHeight : 0;
                this.contentHeight += parseInt(document.defaultView.getComputedStyle(this.children[i], '').getPropertyValue('margin-top')) + parseInt(document.defaultView.getComputedStyle(this.children[i], '').getPropertyValue('margin-bottom'));
                //this.contentHeight += this.options.itemGap;
            }
            this.contentHeight += this.options.containerPadding;
            this.maxScroll = this.contentHeight - this.height;
        }
    }, {
        key: "click",
        value: function click(event) {
            if (this.moved) {
                event.preventDefault();
                this.moved = false;
            }
        }
    }, {
        key: "mouseDown",
        value: function mouseDown(event) {
            //event.preventDefault();
            this.element.style.cursor = "grabbing";
            document.documentElement.style.cursor = "grabbing";

            this.press = {
                pressed: true,
                x: event.clientX,
                y: event.clientY,
                atScroll: this.kinet._instances.y.target,
                prev: parseInt(event.clientY)
            };
        }
    }, {
        key: "mouseDown",
        value: function mouseDown(event) {
            var ev = event.type == "touchstart" ? event.touches[0] : event;

            this.element.style.cursor = "grabbing";
            document.documentElement.style.cursor = "grabbing";

            this.press = {
                pressed: true,
                x: ev.clientX,
                y: ev.clientY,
                atScroll: this.kinet._instances.y.target,
                prev: parseInt(ev.clientY)
            };
        }
    }, {
        key: "mouseUp",
        value: function mouseUp(event) {
            var _this = this;

            this.element.style.cursor = "";
            document.documentElement.style.cursor = "";
            this.press.pressed = false;
            this.direction = 0;

            setTimeout(function () {
                _this.moved = false;
            });
        }
    }, {
        key: "mouseMove",
        value: function mouseMove(event) {
            if (this.press.pressed) {
                var ev = event.type == "touchmove" ? event.touches[0] : event;

                this.moved = true;
                var s = this.press.atScroll + this.press.y - ev.clientY;

                if (s < 0) {
                    //event.preventDefault();
                    this.kinet.animate('y', 0);
                } else if (s > this.maxScroll) {
                    this.kinet.animate('y', this.maxScroll);
                } else {
                    this.speed = Math.abs(this.press.prev - ev.clientY);
                    this.kinet.animate('y', s);
                }

                this.press.prev = parseInt(ev.clientY);
            }
        }
    }, {
        key: "wheel",
        value: function wheel(event) {
            event.preventDefault();
            this.direction = event.deltaY > 0 ? 1 : -1;

            var s = this.kinet._instances.y.target + event.deltaY;

            if (s < 0) {
                this.kinet.animate('y', 0);
            } else if (s > this.maxScroll) {
                this.kinet.animate('y', this.maxScroll);
            } else {
                event.preventDefault();
                this.speed = Math.abs(event.deltaY);
                this.kinet.animate('y', s);
            }
        }
    }, {
        key: "mouseEnter",
        value: function mouseEnter() {
            if (this.options.delayItems) {
                for (var i = 0; i < this.childrenLength; i++) {
                    this.children[i].style.willChange = "transform";
                }
            }
        }
    }, {
        key: "mouseLeave",
        value: function mouseLeave() {
            if (this.options.delayItems) {
                for (var i = 0; i < this.childrenLength; i++) {
                    this.children[i].style.willChange = "";
                }
            }
        }
    }, {
        key: "render",
        value: function render(instances) {
            this.element.scrollTop = instances.y.current;
            this.renderScrollBar(instances);
        }
    }, {
        key: "renderDelayed",
        value: function renderDelayed(instances) {
            this.element.scrollTop = instances.y.current;

            if (instances.y.velocity > 0) {
                for (var i = this.childrenLength - 1; i >= 0; i--) {
                    this.children[i].style.transform = "translate3d(0, " + -(this.childrenLength - i) * instances.y.velocity + "px, 0)";
                }
            } else {
                for (var _i = this.childrenLength - 1; _i >= 0; _i--) {
                    this.children[_i].style.transform = "translate3d(0, " + -1 * _i * instances.y.velocity + "px, 0)";
                }
            }

            this.renderScrollBar(instances);
        }
    }, {
        key: "renderScrollBar",
        value: function renderScrollBar(instances) {
            var scrolled = instances.y.target / this.maxScroll * (100 - this.scrollbarHeight);
            var scrolledShadow = instances.y.current / this.maxScroll * (100 - this.scrollbarHeight);

            this.scrollbarHolder.style.transform = "translate3d(0, " + instances.y.current + "px, 0)";
            this.scrollbar.style.top = scrolled + "%";
            this.shadowScrollbar.style.top = scrolledShadow + "%";
        }
    }]);

    return Wheelz;
}();

exports.default = Wheelz;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Kinet = function () {
    function Kinet(options) {
        var _this = this;

        _classCallCheck(this, Kinet);

        this._handlers = {
            set: [],
            start: [],
            tick: [],
            end: []
        };

        var dafaults = {
            friction: 1 - 0.3,
            acceleration: 0.04,
            initialValue: 0,
            names: ["x"]
        };

        this._options = _extends({}, dafaults, options);

        // to set correct value (1 - x)
        if (options && options.friction) {
            this._options.friction = 1 - options.friction;
        }

        this._instances = {};
        this._options.names.forEach(function (name) {
            _this._instances[name] = new KinetItem(_this._options.initialValue, _this._options.acceleration, _this._options.friction);
        });

        this._raf = null;
    }

    _createClass(Kinet, [{
        key: 'set',
        value: function set(name, num) {
            var _this2 = this;

            if (num == null) {
                console.warn('Define a value.');
                return;
            }
            if (this._instances[name] == null) {
                console.warn('Instance "' + name + '" doesn\'t exist.');
                return;
            }
            this._instances[name].current = num;
            this._instances[name].target = num;
            if (!this._raf) {
                this._handlers['set'].forEach(function (handler) {
                    return handler(_this2._instances);
                });
                this._handlers['tick'].forEach(function (handler) {
                    return handler(_this2._instances);
                });
            }
        }
    }, {
        key: 'animate',
        value: function animate(name, num) {
            var _this3 = this;

            if (num == null) {
                console.warn('Define a value.');
                return;
            }
            if (this._instances[name] == null) {
                console.warn('Instance ' + name + ' doesn\'t exist.');
                return;
            }
            this._instances[name].target = num;
            if (!this._raf) {
                this._handlers['start'].forEach(function (handler) {
                    return handler(_this3._instances, _this3._instances);
                });
                this._animateValues();
            }
            return num;
        }
    }, {
        key: '_animateValues',
        value: function _animateValues() {
            var _this4 = this;

            var done = true;

            Object.keys(this._instances).forEach(function (key) {
                _this4._instances[key].update();

                if (Math.abs(_this4._instances[key].current - _this4._instances[key].target) > 0.1) {
                    done = false;
                }
            });

            if (!done) {
                this._raf = requestAnimationFrame(this._animateValues.bind(this));
                this._handlers['tick'].forEach(function (handler) {
                    return handler(_this4._instances);
                });
            } else {
                // set to final values
                Object.keys(this._instances).forEach(function (key) {
                    _this4._instances[key].current = _this4._instances[key].target;
                    _this4._instances[key].velocity = 0;
                });

                this._handlers['tick'].forEach(function (handler) {
                    return handler(_this4._instances);
                });
                this._handlers['end'].forEach(function (handler) {
                    return handler(_this4._instances);
                });
                this._raf = null;
            }
        }
    }, {
        key: 'on',
        value: function on(event, handler) {
            if (this._handlers[event]) {
                this._handlers[event].push(handler);
            } else {
                console.warn('Unsupported event ' + event + '.');
            }
        }
    }, {
        key: 'off',
        value: function off(event, handler) {
            if (event != null) {
                if (handler != null) {
                    if (this._handlers[event] && this._handlers[event].filter(function (savedHandler) {
                        return savedHandler === handler;
                    }).length) {
                        var toRemove = this._handlers[event].filter(function (savedHandler) {
                            return savedHandler === handler;
                        })[0];
                        var index = this._handlers[event].indexOf(toRemove);
                        if (index > -1) {
                            this._handlers[event].splice(index, 1);
                        }
                    } else {
                        console.warn('Handler for event ' + event + ' no found.');
                    }
                } else {
                    this._handlers[event] = [];
                }
            } else {
                this._handlers = {};
            }
        }
    }]);

    return Kinet;
}();

exports.default = Kinet;

var KinetItem = function () {
    function KinetItem(intitalValue, acceleration, friction) {
        _classCallCheck(this, KinetItem);

        this.current = intitalValue;
        this.target = intitalValue;
        this._acceleration = acceleration;
        this._friction = friction;
        this.velocity = 0;
    }

    _createClass(KinetItem, [{
        key: 'update',
        value: function update() {
            var distance = this.target - this.current;
            var attraction = distance * this._acceleration;

            this.applyForce(attraction);

            this.velocity *= this._friction;
            this.current += this.velocity;

            return distance;
        }
    }, {
        key: 'applyForce',
        value: function applyForce(force) {
            this.velocity += force;
        }
    }]);

    return KinetItem;
}();

/***/ })
/******/ ]);
});