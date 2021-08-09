"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _event = require("../utilities/event");
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
var dragElement = null;
Object.assign(globalThis, {
    dragElement: dragElement
});
var LEFT_MOUSE_BUTTON = _easy.constants.LEFT_MOUSE_BUTTON;
function onDrag(dragHandler, element) {
    var eventType = _constants.DRAG, handler = dragHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offDrag(dragHandler, element) {
    var eventType = _constants.DRAG, handler = dragHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function onStopDrag(stopDragHandler, element) {
    var eventType = _constants.STOP_DRAG, handler = stopDragHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offStopDrag(stopDragHandler, element) {
    var eventType = _constants.STOP_DRAG, handler = stopDragHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function onStartDrag(startDragHandler, element) {
    var eventType = _constants.START_DRAG, handler = startDragHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offStartDrag(startDragHandler, element) {
    var eventType = _constants.START_DRAG, handler = startDragHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function enableDrag() {
    var _properties = this.properties, onDrag1 = _properties.onDrag, onStopDrag1 = _properties.onStopDrag, onStartDrag1 = _properties.onStartDrag, dragHandler = onDrag1, stopDragHandler = onStopDrag1, startDragHandler = onStartDrag1, timeout = null, topOffset = null, leftOffset = null, startMouseTop = null, startMouseLeft = null;
    dragHandler && this.onDrag(dragHandler);
    stopDragHandler && this.onStopDrag(stopDragHandler);
    startDragHandler && this.onStartDrag(startDragHandler);
    this.onMouseDown(mouseDownHandler, this);
    this.setState({
        timeout: timeout,
        topOffset: topOffset,
        leftOffset: leftOffset,
        startMouseTop: startMouseTop,
        startMouseLeft: startMouseLeft
    });
}
function disableDrag() {
    var _properties = this.properties, onDrag1 = _properties.onDrag, onStopDrag1 = _properties.onStopDrag, onStartDrag1 = _properties.onStartDrag, dragHandler = onDrag1, stopDragHandler = onStopDrag1, startDragHandler = onStartDrag1; ///
    dragHandler && this.offDrag(dragHandler);
    stopDragHandler && this.offStopDrag(stopDragHandler);
    startDragHandler && this.offStartDrag(startDragHandler);
    this.offMouseDown(mouseDownHandler, this);
}
function isDragging() {
    var dragging = this.hasClass("dragging");
    return dragging;
}
function startWaitingToDrag(mouseTop, mouseLeft) {
    var timeout = this.getTimeout();
    if (timeout === null) {
        timeout = setTimeout((function() {
            this.resetTimeout();
            this.startDrag(mouseTop, mouseLeft);
        }).bind(this), _constants.START_DRAGGING_DELAY);
        this.updateTimeout(timeout);
    }
}
function stopWaitingToDrag() {
    var timeout = this.getTimeout();
    if (timeout !== null) {
        clearTimeout(timeout);
        this.resetTimeout();
    }
}
function startDrag(mouseTop, mouseLeft) {
    var bounds = this.getBounds(), eventType = _constants.START_DRAG, boundsTop = bounds.getTop(), boundsLeft = bounds.getLeft(), boundsRight = bounds.getRight(), boundsBottom = bounds.getBottom(), boundsWidth = boundsRight - boundsLeft, boundsHeight = boundsBottom - boundsTop, topOffset = Math.floor(boundsHeight / 2), leftOffset = Math.floor(boundsWidth / 2), dragElement1 = this, startMouseTop = mouseTop, startMouseLeft = mouseLeft; ///
    _easy.window.onKeyDown(keyDownHandler, this);
    _easy.window.onMouseMove(mouseMoveHandler, this);
    this.addClass("dragging");
    Object.assign(globalThis, {
        dragElement: dragElement1
    });
    this.setTopOffset(topOffset);
    this.setLeftOffset(leftOffset);
    this.setStartMouseTop(startMouseTop);
    this.setStartMouseLeft(startMouseLeft);
    this.callHandlers(eventType);
    this.drag(mouseTop, mouseLeft);
}
function stopDrag() {
    var dropElement = globalThis.dropElement, eventType = _constants.STOP_DRAG, dragElement1 = null;
    _easy.window.offKeyDown(keyDownHandler, this);
    _easy.window.offMouseMove(mouseMoveHandler, this);
    if (dropElement !== null) {
        var dragElement2 = this; ///
        dropElement.drop(dragElement2);
    }
    this.callHandlers(eventType);
    Object.assign(globalThis, {
        dragElement: dragElement1
    });
    this.removeClass("dragging");
}
function drag(mouseTop, mouseLeft) {
    var eventType = _constants.DRAG, scrollTop = _easy.window.getScrollTop(), scrollLeft = _easy.window.getScrollLeft(), topOffset = this.getTopOffset(), leftOffset = this.getLeftOffset(), startMouseTop = this.getStartMouseTop(), startMouseLeft = this.getStartMouseLeft(), relativeMouseTop = mouseTop - startMouseTop, relativeMouseLeft = mouseLeft - startMouseLeft;
    var top = startMouseTop + relativeMouseTop - topOffset - scrollTop, left = startMouseLeft + relativeMouseLeft - leftOffset - scrollLeft;
    top = "".concat(top, "px"); ///
    left = "".concat(left, "px"); ///
    var css = {
        top: top,
        left: left
    };
    this.css(css);
    this.callHandlers(eventType, relativeMouseTop, relativeMouseLeft);
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
function getTimeout() {
    var state = this.getState(), timeout = state.timeout;
    return timeout;
}
function resetTimeout() {
    var timeout = null;
    this.updateTimeout(timeout);
}
function updateTimeout(timeout) {
    this.updateState({
        timeout: timeout
    });
}
function getTopOffset() {
    var state = this.getState(), topOffset = state.topOffset;
    return topOffset;
}
function getLeftOffset() {
    var state = this.getState(), leftOffset = state.leftOffset;
    return leftOffset;
}
function getStartMouseTop() {
    var state = this.getState(), startMouseTop = state.startMouseTop;
    return startMouseTop;
}
function getStartMouseLeft() {
    var state = this.getState(), startMouseLeft = state.startMouseLeft;
    return startMouseLeft;
}
function setTopOffset(topOffset) {
    this.updateState({
        topOffset: topOffset
    });
}
function setLeftOffset(leftOffset) {
    this.updateState({
        leftOffset: leftOffset
    });
}
function setStartMouseTop(startMouseTop) {
    this.updateState({
        startMouseTop: startMouseTop
    });
}
function setStartMouseLeft(startMouseLeft) {
    this.updateState({
        startMouseLeft: startMouseLeft
    });
}
var _default = {
    onDrag: onDrag,
    offDrag: offDrag,
    onStopDrag: onStopDrag,
    offStopDrag: offStopDrag,
    onStartDrag: onStartDrag,
    offStartDrag: offStartDrag,
    enableDrag: enableDrag,
    disableDrag: disableDrag,
    isDragging: isDragging,
    startWaitingToDrag: startWaitingToDrag,
    stopWaitingToDrag: stopWaitingToDrag,
    startDrag: startDrag,
    stopDrag: stopDrag,
    drag: drag,
    callHandlers: callHandlers,
    getTimeout: getTimeout,
    resetTimeout: resetTimeout,
    updateTimeout: updateTimeout,
    getTopOffset: getTopOffset,
    getLeftOffset: getLeftOffset,
    getStartMouseTop: getStartMouseTop,
    getStartMouseLeft: getStartMouseLeft,
    setTopOffset: setTopOffset,
    setLeftOffset: setLeftOffset,
    setStartMouseTop: setStartMouseTop,
    setStartMouseLeft: setStartMouseLeft
};
exports.default = _default;
function keyDownHandler(event, element) {
    var keyCode = event.keyCode, escapeKey = keyCode === _constants.ESCAPE_KEYCODE;
    if (escapeKey) {
        this.stopDrag();
        event.stopPropagation();
    }
}
function mouseUpHandler(event, element) {
    var dragging = this.isDragging();
    dragging ? this.stopDrag() : this.stopWaitingToDrag();
    event.stopPropagation();
    _easy.window.off(_constants.BLUR, mouseUpHandler, this); ///
    _easy.window.offMouseUp(mouseUpHandler, this);
}
function mouseDownHandler(event, element) {
    var button = event.button;
    if (button === LEFT_MOUSE_BUTTON) {
        var dragging = this.isDragging();
        if (!dragging) {
            var mouseTop = (0, _event).mouseTopFromEvent(event), mouseLeft = (0, _event).mouseLeftFromEvent(event);
            this.startWaitingToDrag(mouseTop, mouseLeft);
        }
    }
    event.stopPropagation();
    _easy.window.on(_constants.BLUR, mouseUpHandler, this); ///
    _easy.window.onMouseUp(mouseUpHandler, this);
}
function mouseMoveHandler(event, element) {
    var dragging = this.isDragging();
    if (dragging) {
        var mouseTop = (0, _event).mouseTopFromEvent(event), mouseLeft = (0, _event).mouseLeftFromEvent(event);
        this.drag(mouseTop, mouseLeft);
    }
    event.stopPropagation();
}
