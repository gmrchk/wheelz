import Wheelz from './index';

class PageWheelz extends Wheelz {
    constructor(options) {
        // get container
        const $container = document.querySelector('[data-wheelz]');

        // report missing container
        if ($container == null) {
            console.error("Container with attribute 'data-wheelz' is required.");
            return;
        }

        // style container
        $container.style.cssText = `
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            overflow: hidden;
        `;

        const $sizer = document.createElement('div');
        $sizer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            opacity: 0; 
            pointer-events: none;
            height: ${ $container.scrollHeight }px;
        `;

        document.body.appendChild($sizer);

        super($container, options);

        // disable original listeners
        this.element.removeEventListener('mousewheel', this._wheelHandler);
        this.element.removeEventListener('mousemove', this._wheelHandler);
        this.element.removeEventListener('touchmove', this._wheelHandler);

        // mirror page scroll
        this.kinet.set('y', window.scrollY);
        window.addEventListener('scroll', event => {
            this.kinet.animate('y', window.scrollY);
        }, { passive: true });

        // propagate wheel event from window
        window.addEventListener('wheel', event => {
            if (window.scrollY + event.deltaY < 0 || window.scrollY + event.deltaY > this.numbers.maxScroll) {
                // cancel scrolling of whole page on mac (doesn't work yet)
                // event.preventDefault();
                // event.stopPropagation();
                // event.stopImmediatePropagation();
            }
            this.executeHandlers("wheel", event);
        }, { passive: true });

        // create new drag
        const dragHandler = event => {
            let ev;
            if (event.type == "touchmove") {
                ev = event.touches[0];
            } else {
                ev = event;
            }

            if (this.press.pressed) {
                this.press.moved = true;
                let s = this.press.atScroll + this.press.y - ev.clientY;
                window.scrollTo(0, s);
                this.executeHandlers("drag", ev);
            }
        }

        this.element.addEventListener('mousemove', dragHandler, { passive: true });
        this.element.addEventListener('touchmove', dragHandler, { passive: true });

        // save to instance
        this.$container = $container;
        this.$sizer = $sizer;
    }
}

export default PageWheelz;
