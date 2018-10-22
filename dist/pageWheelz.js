(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PageWheelz"] = factory();
	else
		root["PageWheelz"] = factory();
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


var _PageWheelz = __webpack_require__(1);

var _PageWheelz2 = _interopRequireDefault(_PageWheelz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _PageWheelz2.default; // this is here for webpack to expose Wheelz as window.Wheelz

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageWheelz = function (_Wheelz) {
    _inherits(PageWheelz, _Wheelz);

    function PageWheelz(options) {
        _classCallCheck(this, PageWheelz);

        // get container
        var $container = document.querySelector('[data-wheelz]');

        // report missing container
        if ($container == null) {
            console.error("Container with attribute 'data-wheelz' is required.");
            return _possibleConstructorReturn(_this);
        }

        // style container
        $container.style.cssText = '\n            position: fixed;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            left: 0;\n            overflow: hidden;\n        ';

        var $sizer = document.createElement('div');
        $sizer.style.cssText = '\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 1px;\n            opacity: 0; \n            pointer-events: none;\n            height: ' + $container.scrollHeight + 'px;\n        ';

        document.body.appendChild($sizer);

        // disable original listeners
        var _this = _possibleConstructorReturn(this, (PageWheelz.__proto__ || Object.getPrototypeOf(PageWheelz)).call(this, $container, options));

        _this.element.removeEventListener('mousewheel', _this._wheelHandler);
        _this.element.removeEventListener('mousemove', _this._wheelHandler);
        _this.element.removeEventListener('touchmove', _this._wheelHandler);

        // mirror page scroll
        _this.kinet.set('y', window.scrollY);
        window.addEventListener('scroll', function (event) {
            _this.kinet.animate('y', window.scrollY);
        }, { passive: true });

        // propagate wheel event from window
        window.addEventListener('wheel', function (event) {
            if (window.scrollY + event.deltaY < 0 || window.scrollY + event.deltaY > _this.numbers.maxScroll) {
                // cancel scrolling of whole page on mac (doesn't work yet)
                // event.preventDefault();
                // event.stopPropagation();
                // event.stopImmediatePropagation();
            }
            _this.executeHandlers("wheel", event);
        }, { passive: true });

        // create new drag
        var dragHandler = function dragHandler(event) {
            var ev = void 0;
            if (event.type == "touchmove") {
                ev = event.touches[0];
            } else {
                ev = event;
            }

            if (_this.press.pressed) {
                _this.press.moved = true;
                var s = _this.press.atScroll + _this.press.y - ev.clientY;
                window.scrollTo(0, s);
                _this.executeHandlers("drag", ev);
            }
        };

        _this.element.addEventListener('mousemove', dragHandler, { passive: true });
        _this.element.addEventListener('touchmove', dragHandler, { passive: true });

        // save to instance
        _this.$container = $container;
        _this.$sizer = $sizer;
        return _this;
    }

    return PageWheelz;
}(_index2.default);

exports.default = PageWheelz;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clickHandler = __webpack_require__(3);

var _clickHandler2 = _interopRequireDefault(_clickHandler);

var _resizeHandler = __webpack_require__(4);

var _resizeHandler2 = _interopRequireDefault(_resizeHandler);

var _mouseDownHandler = __webpack_require__(5);

var _mouseDownHandler2 = _interopRequireDefault(_mouseDownHandler);

var _mouseUpHandler = __webpack_require__(6);

var _mouseUpHandler2 = _interopRequireDefault(_mouseUpHandler);

var _mouseMoveHandler = __webpack_require__(7);

var _mouseMoveHandler2 = _interopRequireDefault(_mouseMoveHandler);

var _wheelHandler = __webpack_require__(8);

var _wheelHandler2 = _interopRequireDefault(_wheelHandler);

var _mouseEnterHandler = __webpack_require__(9);

var _mouseEnterHandler2 = _interopRequireDefault(_mouseEnterHandler);

var _mouseLeaveHandler = __webpack_require__(10);

var _mouseLeaveHandler2 = _interopRequireDefault(_mouseLeaveHandler);

var _kinet = __webpack_require__(11);

var _kinet2 = _interopRequireDefault(_kinet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wheelz = function () {
    function Wheelz(element, options) {
        _classCallCheck(this, Wheelz);

        this.handlers = {
            stabilized: [],
            enable: [],
            disable: [],

            hitTop: [],
            hitBottom: [],
            click: [],

            dragStart: [],
            drag: [],
            dragEnd: [],

            pointerUp: [],
            pointerDown: [],
            pointerEnter: [],
            pointerLeave: [],

            resize: [],
            wheel: [],
            scroll: [],
            scrollStart: [],
            scrollEnd: []
        };
        this._presets = {
            "normal": [0.5, 0.2],
            "smooth": [0.3, 0.04],
            "instant": [0.55, 0.4],
            "bounce": [0.3, 0.08],
            "slow": [0.3, 0.02]
        };
        this._renderHandler = this.render.bind(this);
        this._clickHandler = _clickHandler2.default.bind(this);
        this._resizeHandler = _resizeHandler2.default.bind(this);
        this._mouseDownHandler = _mouseDownHandler2.default.bind(this);
        this._mouseUpHandler = _mouseUpHandler2.default.bind(this);
        this._mouseMoveHandler = _mouseMoveHandler2.default.bind(this);
        this._wheelHandler = _wheelHandler2.default.bind(this);
        this._mouseEnterHandler = _mouseEnterHandler2.default.bind(this);
        this._mouseLeaveHandler = _mouseLeaveHandler2.default.bind(this);

        // default options
        var defaults = {
            containerPadding: 0,
            draggable: false,

            friction: 0.3,
            acceleration: 0.04,
            preset: null
        };

        // merge options
        this.options = _extends({}, defaults, options);

        // apply presets if set
        if (this.options.preset !== null) {
            if (this.options.preset in this._presets) {
                this.options.friction = this._presets[this.options.preset][0];
                this.options.acceleration = this._presets[this.options.preset][1];
            } else {
                console.warn('Preset \'' + this.options.preset + '\' doesn\'t exist. Using set options instead.');
            }
        }

        // save source element
        this.element = element;

        // create kinet instance
        this.kinet = new _kinet2.default({
            names: ["x", "y"],
            acceleration: this.options.acceleration,
            friction: this.options.friction,
            test: function test(instance) {
                return Math.abs(instance.current - instance.target) >= .8;
            }
        });

        this.unlockedPropagation = 0;

        // important values
        this.numbers = {};

        // create press helper
        this.press = {
            pressed: false,
            moved: false
        };

        // enable wheelz
        this.enable();
    }

    _createClass(Wheelz, [{
        key: 'enable',
        value: function enable() {
            var _this = this;

            // styles
            this.element.style.overflow = "hidden";
            if (this.element.style.position === "") {
                this.element.style.position = "relative";
            }
            this.element.style.userDrag = "none";
            this.element.style.transform = "translateZ(0)";
            this.element.style.touchAction = "none";
            this.element.classList.add('wheelz');

            // get and count children
            this.children = this.element.children;
            this.childrenLength = this.children.length;

            // trigger resize
            this._resizeHandler();

            // wheel
            this.element.addEventListener('mousewheel', this._wheelHandler);

            if (this.options.draggable) {
                // drag
                this.element.addEventListener('mousedown', this._mouseDownHandler);
                window.addEventListener('mouseup', this._mouseUpHandler);
                window.addEventListener('mousemove', this._mouseMoveHandler, { passive: false });

                // touch drag
                this.element.addEventListener('touchstart', this._mouseDownHandler);
                window.addEventListener('touchend', this._mouseUpHandler);
                window.addEventListener('touchmove', this._mouseMoveHandler, { passive: false });
            }

            // helpers
            this.element.addEventListener('mouseenter', this._mouseEnterHandler);
            this.element.addEventListener('mouseleave', this._mouseLeaveHandler);
            this.element.addEventListener('click', this._clickHandler);
            window.addEventListener('resize', this._resizeHandler);

            // propagate events from kinet
            this.kinet.on('start', function () {
                _this.executeHandlers("scrollStart");
            });

            this.kinet.on('tick', function (instances) {
                _this.unlockedPropagation = 0;
                _this.executeHandlers("scroll", instances);
            });

            this.kinet.on('end', function () {
                _this.executeHandlers("scrollEnd");
                _this.executeHandlers("stabilized");

                if (_this.element.scrollTop === _this.numbers.maxScroll) {
                    _this.unlockedPropagation = 1;
                    _this.executeHandlers("hitBottom");
                } else if (_this.element.scrollTop === 0) {
                    _this.unlockedPropagation = -1;
                    _this.executeHandlers("hitTop");
                }
            });

            // enable rendering on tick
            this.on('scroll', this._renderHandler);
            this.kinet.set('y', this.element.scrollTop);

            this.executeHandlers("enable");
        }
    }, {
        key: 'disable',
        value: function disable() {
            // remove styles
            this.element.style.overflow = "";
            this.element.classList.remove('wheelz');
            this.element.style.touchAction = "";
            this.element.style.position = "";
            this.element.style.WebkitOverflowScrolling = 'touch';
            this.element.style.transform = "";

            // wheel
            this.element.removeEventListener('mousewheel', this._wheelHandler);

            this.element.removeEventListener('mousewheel', this._wheelHandler);

            if (this.options.draggable) {
                // drag
                this.element.removeEventListener('mousedown', this._mouseDownHandler);
                window.removeEventListener('mouseup', this._mouseUpHandler);
                window.removeEventListener('mousemove', this._mouseMoveHandler);

                // touch drag
                this.element.removeEventListener('touchstart', this._mouseDownHandler);
                window.removeEventListener('touchend', this._mouseUpHandler);
                window.removeEventListener('touchmove', this._mouseMoveHandler);
            }

            // helpers
            this.element.removeEventListener('mouseenter', this._mouseEnterHandler);
            this.element.removeEventListener('mouseleave', this._mouseLeaveHandler);
            this.element.addEventListener('click', this._clickHandler);
            window.removeEventListener('resize', this._resizeHandler);

            // disable handlers of kinet
            this.kinet.off();

            this.executeHandlers("disable");

            this.off();
        }
    }, {
        key: 'render',
        value: function render(instances) {
            this.element.scrollTop = instances.y.current;
        }
    }, {
        key: 'on',
        value: function on(event, handler) {
            if (this.handlers[event]) {
                this.handlers[event].push(handler);
            } else {
                console.warn('Unsupported event ' + event + '.');
            }
        }
    }, {
        key: 'off',
        value: function off(event, handler) {
            if (event != null) {
                if (handler != null) {
                    if (this.handlers[event] && this.handlers[event].filter(function (savedHandler) {
                        return savedHandler === handler;
                    }).length) {
                        var toRemove = this.handlers[event].filter(function (savedHandler) {
                            return savedHandler === handler;
                        })[0];
                        var index = this.handlers[event].indexOf(toRemove);
                        if (index > -1) {
                            this.handlers[event].splice(index, 1);
                        }
                    } else {
                        console.warn('Handler for event ' + event + ' no found.');
                    }
                } else {
                    this.handlers[event] = [];
                }
            } else {
                this.handlers = {};
            }
        }

        // event handlers

    }, {
        key: 'executeHandlers',
        value: function executeHandlers(event, originalEvent) {
            this.handlers[event].forEach(function (handler) {
                return handler(originalEvent);
            });
        }
    }]);

    return Wheelz;
}();

exports.default = Wheelz;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = click;
function click(event) {
    // prevent click if scrollbar was moved
    if (this.press.moved) {
        event.preventDefault();
        event.stopPropagation();
        this.press.moved = false;
    } else {
        this.executeHandlers("click", event);
    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = resize;
function resize(event) {
    // get sizes
    this.numbers.contentHeight = this.element.scrollHeight;
    this.numbers.height = this.element.offsetHeight;

    // add containerPadding value from options
    this.numbers.contentHeight += this.options.containerPadding;

    // calculate maxScroll
    this.numbers.maxScroll = this.numbers.contentHeight - this.numbers.height;

    this.executeHandlers("resize", event);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mouseDown;
function mouseDown(event) {
    var ev = void 0;
    if (event.type == "touchstart") {
        ev = event.touches[0];
    } else {
        ev = event;
    }

    this.element.style.cursor = "grabbing";
    document.documentElement.style.cursor = "grabbing";

    this.press = {
        pressed: true,
        moved: false,
        x: ev.clientX,
        y: ev.clientY,
        atScroll: this.kinet._instances.y.target,
        prev: parseInt(ev.clientY)
    };

    this.executeHandlers("dragStart", event);
    this.executeHandlers("pointerDown", ev);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mouseUp;
function mouseUp(event) {
    var _this = this;

    this.element.style.cursor = "";
    document.documentElement.style.cursor = "";
    this.press.pressed = false;

    var ev = void 0;
    if (event.type == "touchstart") {
        ev = event.touches[0];
    } else {
        ev = event;
    }

    setTimeout(function () {
        _this.press.moved = false;
    }, 10);

    this.executeHandlers("dragEnd", ev);
    this.executeHandlers("pointerUp", ev);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mouseMove;
function mouseMove(event) {
    var ev = void 0;
    if (event.type == "touchmove") {
        ev = event.touches[0];
    } else {
        ev = event;
    }

    if (this.press.pressed) {
        this.press.moved = true;
        var s = this.press.atScroll + this.press.y - ev.clientY;

        if (s < 0) {
            this.kinet.animate('y', 0);
        } else if (s > this.numbers.maxScroll) {
            this.kinet.animate('y', this.numbers.maxScroll);
        } else {
            event.preventDefault();
            this.kinet.animate('y', s);
        }

        this.press.prev = parseInt(ev.clientY);

        this.executeHandlers("drag", ev);
    }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = wheel;
function wheel(event) {
    var s = this.kinet._instances.y.target + event.deltaY;

    if (s < 0) {
        this.kinet.animate('y', 0);
        if (this.unlockedPropagation && this.unlockedPropagation === -1) {
            // blocked propagation
        } else {
            event.preventDefault();
        }
    } else if (s > this.numbers.maxScroll) {
        this.kinet.animate('y', this.numbers.maxScroll);
        if (this.unlockedPropagation && this.unlockedPropagation === 1) {
            // blocked propagation
        } else {
            event.preventDefault();
        }
    } else {
        event.preventDefault();
        this.kinet.animate('y', s);
    }

    this.executeHandlers("wheel", event);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mouseEnter;
function mouseEnter(event) {
    if (this.options.delayItems) {
        for (var i = 0; i < this.childrenLength; i++) {
            this.children[i].style.willChange = "transform";
        }
    }

    this.executeHandlers("pointerEnter", event);
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mouseLeave;
function mouseLeave(event) {
    if (this.options.delayItems) {
        for (var i = 0; i < this.childrenLength; i++) {
            this.children[i].style.willChange = "";
        }
    }

    this.executeHandlers("pointerLeave", event);
}

/***/ }),
/* 11 */
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
            names: ["x"],
            test: function test(instance) {
                return Math.abs(instance.current - instance.target) > 0.1;
            }
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
            if (this._instances[name].target !== num) {
                this._instances[name].target = num;
                if (!this._raf) {
                    this._handlers['start'].forEach(function (handler) {
                        return handler(_this3._instances, _this3._instances);
                    });
                    this._animateValues();
                }
                return num;
            }

            return false;
        }
    }, {
        key: '_animateValues',
        value: function _animateValues() {
            var _this4 = this;

            var done = true;

            Object.keys(this._instances).forEach(function (key) {
                _this4._instances[key].update();

                if (_this4._options.test(_this4._instances[key])) {
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