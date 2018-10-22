import clickHandler from './clickHandler';
import resizeHandler from './resizeHandler';
import mouseDownHandler from './mouseDownHandler';
import mouseUpHandler from './mouseUpHandler';
import mouseMoveHandler from './mouseMoveHandler';
import wheelHandler from './wheelHandler';
import mouseEnterHandler from './mouseEnterHandler';
import mouseLeaveHandler from './mouseLeaveHandler';

import Kinet from '../kinet';


class Wheelz {
    constructor(element, options) {
        // default options
        let defaults = {
            containerPadding: 0,
            draggable: false,

            friction: 0.3,
            acceleration: 0.04,
            preset: null,
        };

        // merge options
        this.options = {
            ...defaults,
            ...options,
        }

        // apply presets if set
        if (this.options.preset !== null) {
            if (this.options.preset in this._presets) {
                this.options.friction = this._presets[this.options.preset][0];
                this.options.acceleration = this._presets[this.options.preset][1];
            } else {
                console.warn(`Preset '${ this.options.preset }' doesn't exist. Using set options instead.`);
            }
        }

        // save source element
        this.element = element;

        // create kinet instance
        this.kinet = new Kinet({
            names: ["x", "y"],
            acceleration: this.options.acceleration,
            friction: this.options.friction,
            test: function (instance) {
                return Math.abs(instance.current - instance.target) >= .8;
            },
        });

        this.unlockedPropagation = 0;
        
        // important values
        this.numbers = {};

        // create press helper
        this.press = {
            pressed: false,
            moved: false,
        };

        // enable wheelz
        this.enable();
    }

    enable() {
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
        this.kinet.on('start', () => {
            this.executeHandlers("scrollStart");
        });

        this.kinet.on('tick', instances => {
            this.unlockedPropagation = 0;
            this.executeHandlers("scroll", instances);
        });

        this.kinet.on('end', () => {
            this.executeHandlers("scrollEnd");
            this.executeHandlers("stabilized");

            if (this.element.scrollTop === this.numbers.maxScroll) {
                this.unlockedPropagation = 1;
                this.executeHandlers("hitBottom");
            } else if (this.element.scrollTop === 0) {
                this.unlockedPropagation = -1;
                this.executeHandlers("hitTop");
            }
        });

        // enable rendering on tick
        this.on('scroll', this._renderHandler);
        this.kinet.set('y', this.element.scrollTop);

        this.executeHandlers("enable");
    }

    disable() {
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

    render(instances) {
        this.element.scrollTop = instances.y.current;
    }

    on(event, handler) {
        if (this.handlers[event]) {
            this.handlers[event].push(handler);
        } else {
            console.warn(`Unsupported event ${event}.`);
        }
    }

    off(event, handler) {
        if (event != null) {
            if (handler != null) {
                if (this.handlers[event] && this.handlers[event].filter(savedHandler => savedHandler === handler).length) {
                    let toRemove = this.handlers[event].filter(savedHandler => savedHandler === handler)[0];
                    let index = this.handlers[event].indexOf(toRemove);
                    if (index > -1) {
                        this.handlers[event].splice(index, 1);
                    }
                } else {
                    console.warn(`Handler for event ${event} no found.`);
                }
            } else {
                this.handlers[event] = [];
            }
        } else {
            this.handlers = {};
        }
    }

    handlers = {
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
        scrollEnd: [],
    }

    _presets = {
        "normal": [0.5, 0.2],
        "smooth": [0.3, 0.04],
        "instant": [0.55, 0.4],
        "bounce": [0.3, 0.08],
        "slow": [0.3, 0.02],
    };

    // event handlers
    _renderHandler = this.render.bind(this);
    _clickHandler = clickHandler.bind(this);
    _resizeHandler = resizeHandler.bind(this);
    _mouseDownHandler = mouseDownHandler.bind(this);
    _mouseUpHandler = mouseUpHandler.bind(this);
    _mouseMoveHandler = mouseMoveHandler.bind(this);
    _wheelHandler = wheelHandler.bind(this);
    _mouseEnterHandler = mouseEnterHandler.bind(this);
    _mouseLeaveHandler = mouseLeaveHandler.bind(this);

    executeHandlers(event, originalEvent) {
        this.handlers[event].forEach(handler => handler( originalEvent ));
    }
}

export default Wheelz;