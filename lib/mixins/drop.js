"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _handler;
var dropElement = null;
Object.assign(globalThis, {
    dropElement: dropElement
});
function drop(dragElement) {
    var eventType = _constants.DROP;
    this.callHandlers(eventType, dragElement);
}
function dragOut(dragElement) {
    var eventType = _constants.DRAG_OUT;
    this.callHandlers(eventType, dragElement);
}
function dragOver() {
    var eventType = _constants.DRAG_OVER;
    this.callHandlers(eventType, dragElement);
}
function onDrop(dropHandler, element) {
    var eventType = _constants.DROP, handler = dropHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offDrop(dropHandler, element) {
    var eventType = _constants.DROP, handler = dropHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function onDragOut(dragOutHandler, element) {
    var eventType = _constants.DRAG_OUT, handler = dragOutHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offDragOut(dragOutHandler, element) {
    var eventType = _constants.DRAG_OUT, handler = dragOutHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function onDragOver(dragOverHandler, element) {
    var eventType = _constants.DRAG_OVER, handler = dragOverHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offDragOver(dragOverHandler, element) {
    var eventType = _constants.DRAG_OVER, handler = dragOverHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function enableDrop() {
    var _properties = this.properties, onDrop1 = _properties.onDrop, onDragOut1 = _properties.onDragOut, onDragOver1 = _properties.onDragOver, dropHandler = onDrop1, dragOutHandler = onDragOut1, dragOverHandler = onDragOver1; ///
    dropHandler && this.onDrop(dropHandler);
    dragOutHandler && this.onDragOut(dragOutHandler);
    dragOverHandler && this.onDragOver(dragOverHandler);
    this.onMouseOut(mouseOutHandler, this);
    this.onMouseOver(mouseOverHandler, this);
}
function disableDrop() {
    var _properties = this.properties, onDrop1 = _properties.onDrop, onDragOut1 = _properties.onDragOut, onDragOver1 = _properties.onDragOver, dropHandler = onDrop1, dragOutHandler = onDragOut1, dragOverHandler = onDragOver1; ///
    dropHandler && this.offDrop(dropHandler);
    dragOutHandler && this.offDragOut(dragOutHandler);
    dragOverHandler && this.offDragOver(dragOverHandler);
    this.offMouseOut(mouseOutHandler, this);
    this.offMouseOver(mouseOverHandler, this);
}
function callHandlers(eventType) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        remainingArguments[_key - 1] = arguments[_key];
    }
    var eventListeners = this.findEventListeners(eventType);
    eventListeners.forEach(function(eventListener) {
        var handler = eventListener.handler, element = eventListener.element;
        (_handler = handler).call.apply(_handler, [
            element
        ].concat(_toConsumableArray(remainingArguments), [
            element
        ]));
    });
}
var _default = {
    drop: drop,
    dragOut: dragOut,
    dragOver: dragOver,
    onDrop: onDrop,
    offDrop: offDrop,
    onDragOut: onDragOut,
    offDragOut: offDragOut,
    onDragOver: onDragOver,
    offDragOver: offDragOver,
    enableDrop: enableDrop,
    disableDrop: disableDrop,
    callHandlers: callHandlers
};
exports.default = _default;
function mouseOutHandler(event, element) {
    var dragElement = globalThis.dragElement;
    if (dragElement !== null) {
        var dropElement1 = null; ///
        Object.assign(globalThis, {
            dropElement: dropElement1
        });
        this.dragOut(dragElement);
    }
    event.stopPropagation();
}
function mouseOverHandler(event, element) {
    var dragElement = globalThis.dragElement;
    if (dragElement !== null) {
        var dropElement2 = this; ///
        Object.assign(globalThis, {
            dropElement: dropElement2
        });
        this.dragOver(dragElement);
    }
    event.stopPropagation();
}
