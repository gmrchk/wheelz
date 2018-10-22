export default function mouseDown(event) {
    let ev;
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
        prev: parseInt(ev.clientY),
    };

    this.executeHandlers("dragStart", event);
    this.executeHandlers("pointerDown", ev);
}