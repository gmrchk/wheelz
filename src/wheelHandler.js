export default function wheel(event) {
    let s = this.kinet._instances.y.target + event.deltaY;

    if (s < 0) {
        this.kinet.animate('y', 0);
        if (this.unlockedPropagation && this.unlockedPropagation === -1) {
            // blocked propagation
        } else {
            event.preventDefault();
        }
    } else if (s > this.numbers.maxScroll) {
        this.kinet.animate('y', this.numbers.maxScroll);
        if (this.unlockedPropagation && this.unlockedPropagation === 1) {
            // blocked propagation
        } else {
            event.preventDefault();
        }
    } else {
        event.preventDefault();
        this.kinet.animate('y', s);
    }

    this.executeHandlers("wheel", event);
}