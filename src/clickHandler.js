export default function click(event) {
    // prevent click if scrollbar was moved
    if (this.press.moved) {
        event.preventDefault();
        event.stopPropagation();
        this.press.moved = false;
    } else {
        this.executeHandlers("click", event);
    }
}