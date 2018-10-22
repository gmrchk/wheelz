export default function mouseEnter(event) {
    if (this.options.delayItems) {
        for (let i = 0; i < this.childrenLength; i++) {
            this.children[i].style.willChange = "transform";
        }
    }

    this.executeHandlers("pointerEnter", event);
}