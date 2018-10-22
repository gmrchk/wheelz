export default function resize(event) {
    // get sizes
    this.numbers.contentHeight = this.element.scrollHeight;
    this.numbers.height = this.element.offsetHeight;

    // add containerPadding value from options
    this.numbers.contentHeight += this.options.containerPadding;

    // calculate maxScroll
    this.numbers.maxScroll = this.numbers.contentHeight - this.numbers.height;

    this.executeHandlers("resize", event);

}