export default function mouseUp(event) {
    this.element.style.cursor = "";
    document.documentElement.style.cursor = "";
    this.press.pressed = false;

    let ev;
    if (event.type == "touchstart") {
        ev = event.touches[0];
    } else {
        ev = event;
    }

    setTimeout(() => {
        this.press.moved = false;
    }, 10)

    this.executeHandlers("dragEnd", ev);
    this.executeHandlers("pointerUp", ev);
}