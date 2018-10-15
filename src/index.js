import Kinet from 'kinet';



class Wheelz {
    constructor(element, options) {
        let defaults = {
            itemGap: 0,
            containerPadding: 0,
            scrollbar: true,
            delayItems: false,

            friction: 0.3,
            acceleration: 0.04,
        };

        this.options = {
            ...defaults,
            ...options,
        }

        // to set correct value (1 - x)
        if (options && options.friction) {
            this.options.friction = 1 - options.friction;
        }

        this.element = element;
        this.direction = 0;
        this.speed = 0;

        // create kinet instance
        this.kinet = new Kinet({
            names: ["x", "y"],
            acceleration: this.options.acceleration,
            friction: this.options.friction,
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

    enable() {
        this.element.style.overflow = "hidden";
        this.element.classList.add('whee');
        this.children = this.element.children;
        this.childrenLength = this.children.length;
        this.press = {
            pressed: false,
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
            this.renderScrollBar = () => {};
        }

        this.kinet.on('tick', this.renderHandler);
        this.kinet.set('y', this.element.scrollTop);
    }

    disable() {
        let s = parseInt(this.scroll);
        this.scroll = 0;
        this.element.style.overflow = "";
        this.element.classList.remove('whee');
        this.element.style.WebkitOverflowScrolling = 'touch';
        this.press = {
            pressed: false,
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

    createScrollbar() {
        let css = `
                .whee {
                    touch-action: none;
                }

                .whee-holder {
                    position: absolute;
                    top: 6px;
                    right: 2px;
                    height: calc(100% - 12px);
                    width: 8px;
                    background: rgba(255, 255, 255, .8);
                    transition: opacity .4s;
                    opacity: 0;
                    border-radius: 4px;
                }

                .whee-scrollbar, .whee-shadow {
                    position: absolute;
                    top: 0;
                    width: calc(100% - 2px);
                    left: 1px;
                    border-radius: 3px;
                    background: rgba(0, 0, 0, .6);
                }

                .whee-scrollbar {
                    background: rgba(0, 0, 0, .6);
                }

                .whee:hover > .whee-holder {
                    opacity: 1;
                }
            `;

        let style = document.createElement('style');
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
        this.scrollbar.style.height = `${this.scrollbarHeight}%`;
        this.shadowScrollbar.style.height = `${this.scrollbarHeight}%`;
    }

    resize() {
        this.contentHeight = 0;
        this.height = this.element.offsetHeight;
        for(let i = 0; i < this.childrenLength; i++) {
            this.contentHeight += this.children[i].offsetHeight ? this.children[i].offsetHeight : 0;
            this.contentHeight += parseInt(document.defaultView.getComputedStyle(this.children[i], '').getPropertyValue('margin-top')) + parseInt(document.defaultView.getComputedStyle(this.children[i], '').getPropertyValue('margin-bottom'));
            //this.contentHeight += this.options.itemGap;
        }
        this.contentHeight += this.options.containerPadding;
        this.maxScroll = this.contentHeight - this.height;
    }

    click(event) {
        if (this.moved) {
            event.preventDefault();
            this.moved = false;
        }
    }

    mouseDown(event) {
        //event.preventDefault();
        this.element.style.cursor = "grabbing";
        document.documentElement.style.cursor = "grabbing";

        this.press = {
            pressed: true,
            x: event.clientX,
            y: event.clientY,
            atScroll: this.kinet._instances.y.target,
            prev: parseInt(event.clientY),
        };
    }

    mouseDown(event) {
        let ev = event.type == "touchstart" ? event.touches[0] : event;

        this.element.style.cursor = "grabbing";
        document.documentElement.style.cursor = "grabbing";

        this.press = {
            pressed: true,
            x: ev.clientX,
            y: ev.clientY,
            atScroll: this.kinet._instances.y.target,
            prev: parseInt(ev.clientY),
        };
    }

    mouseUp(event) {
        this.element.style.cursor = "";
        document.documentElement.style.cursor = "";
        this.press.pressed = false;
        this.direction = 0;

        setTimeout(() => {
            this.moved = false;
        })
    }

    mouseMove(event) {
        if (this.press.pressed) {
            let ev = event.type == "touchmove" ? event.touches[0] : event;

            this.moved = true;
            let s = this.press.atScroll + this.press.y - ev.clientY;

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

    wheel(event) {
        event.preventDefault();
        this.direction = event.deltaY > 0 ? 1 : -1;

        let s = this.kinet._instances.y.target + event.deltaY;

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

    mouseEnter() {
        if (this.options.delayItems) {
            for(let i = 0; i < this.childrenLength; i++) {
                this.children[i].style.willChange = "transform";
            }
        }
    }

    mouseLeave() {
        if (this.options.delayItems) {
            for (let i = 0; i < this.childrenLength; i++) {
                this.children[i].style.willChange = "";
            }
        }
    }

    render(instances) {
        this.element.scrollTop = instances.y.current;
        this.renderScrollBar(instances);
    }

    renderDelayed(instances) {
        this.element.scrollTop = instances.y.current;

        if (instances.y.velocity > 0) {
            for(let i = this.childrenLength-1; i >= 0; i--) {
                this.children[i].style.transform = `translate3d(0, ${-(this.childrenLength-i) * instances.y.velocity }px, 0)`;
            }
        } else {
            for(let i = this.childrenLength-1; i >= 0; i--) {
                this.children[i].style.transform = `translate3d(0, ${ -1 * i * instances.y.velocity }px, 0)`;
            }
        }

        this.renderScrollBar(instances);
    }

    renderScrollBar(instances) {
        let scrolled = instances.y.target / this.maxScroll * (100 - this.scrollbarHeight);
        let scrolledShadow = instances.y.current / this.maxScroll * (100 - this.scrollbarHeight);

        this.scrollbarHolder.style.transform = `translate3d(0, ${ instances.y.current }px, 0)`;
        this.scrollbar.style.top = `${ scrolled }%`;
        this.shadowScrollbar.style.top = `${ scrolledShadow }%`;
    }

}

export default Wheelz;