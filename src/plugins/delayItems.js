module.exports = function delayItems(wheelz) {
    // rewrite render method
    wheelz.on('scroll', instances => {
        if (instances.y.velocity > 0) {
            for(let i = wheelz.childrenLength-1; i >= 0; i--) {
                wheelz.children[i].style.transform = `translate3d(0, ${-(wheelz.childrenLength-i) * instances.y.velocity }px, 0)`;
            }
        } else {
            for(let i = wheelz.childrenLength-1; i >= 0; i--) {
                wheelz.children[i].style.transform = `translate3d(0, ${ -1 * i * instances.y.velocity }px, 0)`;
            }
        }
    });
}

