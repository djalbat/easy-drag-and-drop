"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _event = require("../utilities/event");
var _constants = require("../constants");
var _eventTypes = require("../eventTypes");
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
    var eventType = _eventTypes.DRAG_EVENT_TYPE, handler = dragHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offDrag(dragHandler, element) {
    var eventType = _eventTypes.DRAG_EVENT_TYPE, handler = dragHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function onStopDrag(stopDragHandler, element) {
    var eventType = _eventTypes.STOP_DRAG_EVENT_TYPE, handler = stopDragHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offStopDrag(stopDragHandler, element) {
    var eventType = _eventTypes.STOP_DRAG_EVENT_TYPE, handler = stopDragHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function onStartDrag(startDragHandler, element) {
    var eventType = _eventTypes.START_DRAG_EVENT_TYPE, handler = startDragHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offStartDrag(startDragHandler, element) {
    var eventType = _eventTypes.START_DRAG_EVENT_TYPE, handler = startDragHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function enableDrag() {
    var _properties = this.properties, onDrag = _properties.onDrag, onStopDrag = _properties.onStopDrag, onStartDrag = _properties.onStartDrag, dragHandler = onDrag, stopDragHandler = onStopDrag, startDragHandler = onStartDrag, timeout = null, topOffset = null, leftOffset = null, startMouseTop = null, startMouseLeft = null;
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
    var _properties = this.properties, onDrag = _properties.onDrag, onStopDrag = _properties.onStopDrag, onStartDrag = _properties.onStartDrag, dragHandler = onDrag, stopDragHandler = onStopDrag, startDragHandler = onStartDrag; ///
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
    var bounds = this.getBounds(), eventType = _eventTypes.START_DRAG_EVENT_TYPE, boundsTop = bounds.getTop(), boundsLeft = bounds.getLeft(), boundsRight = bounds.getRight(), boundsBottom = bounds.getBottom(), boundsWidth = boundsRight - boundsLeft, boundsHeight = boundsBottom - boundsTop, topOffset = Math.floor(boundsHeight / 2), leftOffset = Math.floor(boundsWidth / 2), dragElement = this, startMouseTop = mouseTop, startMouseLeft = mouseLeft; ///
    _easy.window.onKeyDown(keyDownHandler, this);
    _easy.window.onMouseMove(mouseMoveHandler, this);
    this.addClass("dragging");
    Object.assign(globalThis, {
        dragElement: dragElement
    });
    this.setTopOffset(topOffset);
    this.setLeftOffset(leftOffset);
    this.setStartMouseTop(startMouseTop);
    this.setStartMouseLeft(startMouseLeft);
    this.callHandlers(eventType);
    this.drag(mouseTop, mouseLeft);
}
function stopDrag() {
    var dropElement = globalThis.dropElement, eventType = _eventTypes.STOP_DRAG_EVENT_TYPE, dragElement = null;
    _easy.window.offKeyDown(keyDownHandler, this);
    _easy.window.offMouseMove(mouseMoveHandler, this);
    if (dropElement !== null) {
        var dragElement = this; ///
        dropElement.drop(dragElement);
    }
    this.callHandlers(eventType);
    Object.assign(globalThis, {
        dragElement: dragElement
    });
    this.removeClass("dragging");
}
function drag(mouseTop, mouseLeft) {
    var eventType = _eventTypes.DRAG_EVENT_TYPE, scrollTop = _easy.window.getScrollTop(), scrollLeft = _easy.window.getScrollLeft(), topOffset = this.getTopOffset(), leftOffset = this.getLeftOffset(), startMouseTop = this.getStartMouseTop(), startMouseLeft = this.getStartMouseLeft(), relativeMouseTop = mouseTop - startMouseTop, relativeMouseLeft = mouseLeft - startMouseLeft;
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
    _easy.window.off(_eventTypes.BLUR_EVENT_TYPE, mouseUpHandler, this); ///
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
    _easy.window.on(_eventTypes.BLUR_EVENT_TYPE, mouseUpHandler, this); ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZHJhZy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjb25zdGFudHMiLCJtb3VzZVRvcEZyb21FdmVudCIsIm1vdXNlTGVmdEZyb21FdmVudCIsIkVTQ0FQRV9LRVlDT0RFIiwiU1RBUlRfRFJBR0dJTkdfREVMQVkiLCJCTFVSX0VWRU5UX1RZUEUiLCJEUkFHX0VWRU5UX1RZUEUiLCJTVE9QX0RSQUdfRVZFTlRfVFlQRSIsIlNUQVJUX0RSQUdfRVZFTlRfVFlQRSIsImRyYWdFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiZ2xvYmFsVGhpcyIsIkxFRlRfTU9VU0VfQlVUVE9OIiwib25EcmFnIiwiZHJhZ0hhbmRsZXIiLCJlbGVtZW50IiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZEcmFnIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uU3RvcERyYWciLCJzdG9wRHJhZ0hhbmRsZXIiLCJvZmZTdG9wRHJhZyIsIm9uU3RhcnREcmFnIiwic3RhcnREcmFnSGFuZGxlciIsIm9mZlN0YXJ0RHJhZyIsImVuYWJsZURyYWciLCJwcm9wZXJ0aWVzIiwidGltZW91dCIsInRvcE9mZnNldCIsImxlZnRPZmZzZXQiLCJzdGFydE1vdXNlVG9wIiwic3RhcnRNb3VzZUxlZnQiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJzZXRTdGF0ZSIsImRpc2FibGVEcmFnIiwib2ZmTW91c2VEb3duIiwiaXNEcmFnZ2luZyIsImRyYWdnaW5nIiwiaGFzQ2xhc3MiLCJzdGFydFdhaXRpbmdUb0RyYWciLCJtb3VzZVRvcCIsIm1vdXNlTGVmdCIsImdldFRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVzZXRUaW1lb3V0Iiwic3RhcnREcmFnIiwidXBkYXRlVGltZW91dCIsInN0b3BXYWl0aW5nVG9EcmFnIiwiY2xlYXJUaW1lb3V0IiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwiYm91bmRzVG9wIiwiZ2V0VG9wIiwiYm91bmRzTGVmdCIsImdldExlZnQiLCJib3VuZHNSaWdodCIsImdldFJpZ2h0IiwiYm91bmRzQm90dG9tIiwiZ2V0Qm90dG9tIiwiYm91bmRzV2lkdGgiLCJib3VuZHNIZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJvbktleURvd24iLCJrZXlEb3duSGFuZGxlciIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlSGFuZGxlciIsImFkZENsYXNzIiwic2V0VG9wT2Zmc2V0Iiwic2V0TGVmdE9mZnNldCIsInNldFN0YXJ0TW91c2VUb3AiLCJzZXRTdGFydE1vdXNlTGVmdCIsImNhbGxIYW5kbGVycyIsImRyYWciLCJzdG9wRHJhZyIsImRyb3BFbGVtZW50Iiwib2ZmS2V5RG93biIsIm9mZk1vdXNlTW92ZSIsImRyb3AiLCJyZW1vdmVDbGFzcyIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0IiwiZ2V0VG9wT2Zmc2V0IiwiZ2V0TGVmdE9mZnNldCIsImdldFN0YXJ0TW91c2VUb3AiLCJnZXRTdGFydE1vdXNlTGVmdCIsInJlbGF0aXZlTW91c2VUb3AiLCJyZWxhdGl2ZU1vdXNlTGVmdCIsInRvcCIsImxlZnQiLCJjc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImZvckVhY2giLCJldmVudExpc3RlbmVyIiwiY2FsbCIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsImV2ZW50Iiwia2V5Q29kZSIsImVzY2FwZUtleSIsInN0b3BQcm9wYWdhdGlvbiIsIm1vdXNlVXBIYW5kbGVyIiwib2ZmIiwib2ZmTW91c2VVcCIsImJ1dHRvbiIsIm9uIiwib25Nb3VzZVVwIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVzQixHQUFNLENBQU4sS0FBTTtBQUVjLEdBQW9CLENBQXBCLE1BQW9CO0FBQ3JCLEdBQWMsQ0FBZCxVQUFjO0FBQzJCLEdBQWUsQ0FBZixXQUFlOzs7Ozs7Ozs7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