export default function mouseLeave(event) {
    if (this.options.delayItems) {
        for (let i = 0; i < this.childrenLength; i++) {
            this.children[i].style.willChange = "";
        }
    }

    this.executeHandlers("pointerLeave", event);
}