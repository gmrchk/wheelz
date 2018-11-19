# Wheelz
Fun, acceleration based scroller. Animates and smoothens the scroll of element content.
Uses native scroll, so any scroll events on the element will work as expected by default. 

## Installation
Include Wheelz with scripts tag

```html
<script src="./dist/wheelz.min.js"></script>
```
or with *npm* and *import*
```shell
npm install wheelz --save
```
```javascript
// import needed modules from npm
import Wheelz from 'wheelz';
```

## Options
Wheelz accepts several options defined as follows.
```javascript
var options = { option: "value" }
var wheelz = new Wheelz(options);
```

### friction
Recommended value 0-1. Default value is `0.3`.

### acceleration
Recommended value 0-1. Default value is `0.04`.

### preset
Sets the friction and acceleration to the proposed values.  
Available values:  
normal = **f**0.5, **a**0.2  
smooth = **f**0.3, **a**0.04  
instant = **f**0.55, **a**0.4  
bounce = **f**0.3, **a**0.08  
slow = **f**0.3, **a**0.02  

```javascript
var wheelz = new Wheelz({
    preset: "smooth"
});
```

### draggable
Makes the are of scrolled element draggable with mouse. Can be set to `true` or `false`.

```javascript
// default value
test: function (instance) {
    return Math.abs(instance.current - instance.target) > 0.1;
}
```

## Events
Wheelz emits a bunch of events while it works. You can subscribe to events with `on` and `off` methods.

```javascript
// init
var wheelz = new Wheelz();

// set handler
wheelz.on('scroll', function () {
    // do something on every animation tick
});

wheelz.off('scroll', handler); // removes single handler
wheelz.off('scroll'); // removes all handlers for 'tick' event
wheelz.off(); // removes all handlers
```

### List of all events
* **click** - triggered on click of the root element
* **disable** - triggered before disabling Wheelz (with `disable` method)
* **drag** - triggered when on every tick of dragging
* **dragEnd** - triggered when drag on root element ends
* **dragStart** - triggered when drag on root element starts
* **hitBottom** - triggered when scroll hits bottom
* **hitTop** - triggered when scroll hits top
* **pointerDown** - triggered when mouse is pressed over a root element
* **pointerEnter** - triggered when mouse cursor enters a root element
* **pointerUp** - triggered when press ends
* **pointerLeave** - triggered when mouse cursor leaves root element
* **resize** - triggered on window resize
* **stabilized** - triggered when scroll ends (values of actual `scrollTop` and animated scroll are at the same value)
* **scroll** - triggered on every tick of scroll animation
* **scrollStart** - triggered when scroll starts
* **scrollEnd** - triggered when scroll ends (same as **stabilized**... only for clarity)
* **wheel** - triggered on mouse wheel over the root element
