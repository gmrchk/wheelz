export default function mouseMove(event) {
    let ev;
    if (event.type == "touchmove") {
        ev = event.touches[0];
    } else {
        ev = event;
    }

    if (this.press.pressed) {
        this.press.moved = true;
        let s = this.press.atScroll + this.press.y - ev.clientY;

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