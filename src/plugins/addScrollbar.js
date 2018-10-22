module.exports = function addScrollbar(wheelz) {
    // styles for scrollbar
    let css = `
        .wheelz {
            position: relative;
        }

        .wheelz-holder {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 8px;
            background: rgba(255, 255, 255, .9);
            transition: opacity .4s;
            opacity: 0;
            z-index: 1000;
            transform: translateY(0);
        }

        .wheelz-scrollbar, .wheelz-shadow {
            position: absolute;
            top: 0;
            width: 6px;
            left: 1px;
            border-radius: 3px;
            background: rgba(0, 0, 0, .2);
        }

        .wheelz-scrollbar {
            background: rgba(0, 0, 0, .3);
        }

        .wheelz:hover > .wheelz-holder {
            opacity: 1;
        }
    `;

    // prepend styles to head tag
    let style = document.createElement('style');
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

    wheelz.on('disable', () => {
        // remove scrollbar
        wheelz.$scrollbarHolder.outerHTML = "";
        delete wheelz.$scrollbarHolder;
    });

    // recalculate and set scrollbars size
    wheelz.on('resize', resize);
    resize();

    function resize() {
        wheelz.numbers.scrollbarHeight = wheelz.numbers.height / wheelz.numbers.contentHeight * 100;
        wheelz.$scrollbar.style.height = `${ wheelz.numbers.scrollbarHeight }%`;
        wheelz.$shadowScrollbar.style.height = `${ wheelz.numbers.scrollbarHeight }%`;
    }

    function render(instances) {
        let scrolled = instances.y.target / wheelz.numbers.maxScroll * (100 - wheelz.numbers.scrollbarHeight);
        let scrolledShadow = instances.y.current / wheelz.numbers.maxScroll * (100 - wheelz.numbers.scrollbarHeight);

        wheelz.$scrollbarHolder.style.transform = `translate3d(0, ${ instances.y.current }px, 0)`;
        wheelz.$scrollbar.style.top = `${ scrolled }%`;
        wheelz.$shadowScrollbar.style.top = `${ scrolledShadow }%`;
    }
}

