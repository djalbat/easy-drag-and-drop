"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easy = require("easy");
var _necessary = require("necessary");
var _constants = require("../constants");
var _event = require("../utilities/event");
var _eventTypes = require("../eventTypes");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var forEach = _necessary.asynchronousUtilities.forEach, ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, BLUR_EVENT_TYPE = _easy.eventTypes.BLUR_EVENT_TYPE, LEFT_MOUSE_BUTTON = _easy.buttons.LEFT_MOUSE_BUTTON;
var dragElement = null;
Object.assign(globalThis, {
    dragElement: dragElement
});
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
    var _this_properties = this.properties, _$onDrag = _this_properties.onDrag, _$onStopDrag = _this_properties.onStopDrag, _$onStartDrag = _this_properties.onStartDrag, dragHandler = _$onDrag, stopDragHandler = _$onStopDrag, startDragHandler = _$onStartDrag, timeout = null, topOffset = null, leftOffset = null, startMouseTop = null, startMouseLeft = null;
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
    var _this_properties = this.properties, _$onDrag = _this_properties.onDrag, _$onStopDrag = _this_properties.onStopDrag, _$onStartDrag = _this_properties.onStartDrag, dragHandler = _$onDrag, stopDragHandler = _$onStopDrag, startDragHandler = _$onStartDrag; ///
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
    var _this = this;
    var timeout = this.getTimeout();
    if (timeout === null) {
        timeout = setTimeout(function() {
            _this.resetTimeout();
            _this.startDrag(mouseTop, mouseLeft);
        }, _constants.START_DRAGGING_DELAY);
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
function stopDrag(aborted) {
    var _this = this;
    var dropElement = globalThis.dropElement, eventType = _eventTypes.STOP_DRAG_EVENT_TYPE;
    _easy.window.offKeyDown(keyDownHandler, this);
    _easy.window.offMouseMove(mouseMoveHandler, this);
    var done = function() {
        _this.callHandlersAsync(eventType, dropElement, aborted, function() {
            var dragElement = null;
            Object.assign(globalThis, {
                dragElement: dragElement
            });
            _this.removeClass("dragging");
        });
    };
    if (dropElement !== null) {
        var dragElement = this; ///
        dropElement.drop(dragElement, aborted, done);
    } else {
        done();
    }
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
function getTimeout() {
    var timeout = this.getState().timeout;
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
    var topOffset = this.getState().topOffset;
    return topOffset;
}
function getLeftOffset() {
    var leftOffset = this.getState().leftOffset;
    return leftOffset;
}
function getStartMouseTop() {
    var startMouseTop = this.getState().startMouseTop;
    return startMouseTop;
}
function getStartMouseLeft() {
    var startMouseLeft = this.getState().startMouseLeft;
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
function callHandlers(eventType) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        remainingArguments[_key - 1] = arguments[_key];
    }
    var _this = this;
    var eventListeners = this.findEventListeners(eventType);
    eventListeners.forEach(function(eventListener) {
        var _handler;
        var handler = eventListener.handler, handlerElement = eventListener.element, element = _this; ///
        (_handler = handler).call.apply(_handler, [
            handlerElement
        ].concat(_to_consumable_array(remainingArguments), [
            element
        ]));
    });
}
function callHandlersAsync(eventType) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        remainingArguments[_key - 1] = arguments[_key];
    }
    var _this = this;
    var done = remainingArguments.pop(), eventListeners = this.findEventListeners(eventType);
    forEach(eventListeners, function(eventListener, next) {
        var _handler;
        var handler = eventListener.handler, handlerElement = eventListener.element, element = _this, done = next; ///
        (_handler = handler).call.apply(_handler, [
            handlerElement
        ].concat(_to_consumable_array(remainingArguments), [
            element,
            done
        ]));
    }, done);
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
    setStartMouseLeft: setStartMouseLeft,
    callHandlers: callHandlers,
    callHandlersAsync: callHandlersAsync
};
function keyDownHandler(event, element) {
    var keyCode = event.keyCode, escapeKey = keyCode === ESCAPE_KEY_CODE, aborted = true;
    if (escapeKey) {
        this.stopDrag(aborted);
        event.stopPropagation();
    }
}
function mouseUpHandler(event, element) {
    var dragging = this.isDragging(), aborted = false;
    dragging ? this.stopDrag(aborted) : this.stopWaitingToDrag();
    event.stopPropagation();
    _easy.window.off(BLUR_EVENT_TYPE, mouseUpHandler, this); ///
    _easy.window.offMouseUp(mouseUpHandler, this);
}
function mouseDownHandler(event, element) {
    var button = event.button;
    if (button === LEFT_MOUSE_BUTTON) {
        var dragging = this.isDragging();
        if (!dragging) {
            var mouseTop = (0, _event.mouseTopFromEvent)(event), mouseLeft = (0, _event.mouseLeftFromEvent)(event);
            this.startWaitingToDrag(mouseTop, mouseLeft);
        }
    }
    event.stopPropagation();
    _easy.window.on(BLUR_EVENT_TYPE, mouseUpHandler, this); ///
    _easy.window.onMouseUp(mouseUpHandler, this);
}
function mouseMoveHandler(event, element) {
    var dragging = this.isDragging();
    if (dragging) {
        var mouseTop = (0, _event.mouseTopFromEvent)(event), mouseLeft = (0, _event.mouseLeftFromEvent)(event);
        this.drag(mouseTop, mouseLeft);
    }
    event.stopPropagation();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZHJhZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgd2luZG93LCBidXR0b25zLCBldmVudFR5cGVzIH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGtleUNvZGVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCIgO1xuXG5pbXBvcnQgeyBTVEFSVF9EUkFHR0lOR19ERUxBWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1vdXNlVG9wRnJvbUV2ZW50LCBtb3VzZUxlZnRGcm9tRXZlbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2V2ZW50XCI7XG5pbXBvcnQgeyBEUkFHX0VWRU5UX1RZUEUsIFNUT1BfRFJBR19FVkVOVF9UWVBFLCBTVEFSVF9EUkFHX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgRVNDQVBFX0tFWV9DT0RFIH0gPSBrZXlDb2RlcyxcbiAgICAgIHsgQkxVUl9FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzLFxuICAgICAgeyBMRUZUX01PVVNFX0JVVFRPTiB9ID0gYnV0dG9ucztcblxuY29uc3QgZHJhZ0VsZW1lbnQgPSBudWxsO1xuXG5PYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgZHJhZ0VsZW1lbnRcbn0pO1xuXG5mdW5jdGlvbiBvbkRyYWcoZHJhZ0hhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gZHJhZ0hhbmRsZXI7ICAvLy9cblxuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmRHJhZyhkcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSBkcmFnSGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvblN0b3BEcmFnKHN0b3BEcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBTVE9QX0RSQUdfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHN0b3BEcmFnSGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZTdG9wRHJhZyhzdG9wRHJhZ0hhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gU1RPUF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSBzdG9wRHJhZ0hhbmRsZXI7ICAvLy9cblxuICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25TdGFydERyYWcoc3RhcnREcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBTVEFSVF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSBzdGFydERyYWdIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZlN0YXJ0RHJhZyhzdGFydERyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFNUQVJUX0RSQUdfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHN0YXJ0RHJhZ0hhbmRsZXI7ICAvLy9cblxuICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRHJhZygpIHtcbiAgY29uc3QgeyBvbkRyYWcsIG9uU3RvcERyYWcsIG9uU3RhcnREcmFnIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnLCAvLy9cbiAgICAgICAgc3RvcERyYWdIYW5kbGVyID0gb25TdG9wRHJhZywgLy8vXG4gICAgICAgIHN0YXJ0RHJhZ0hhbmRsZXIgPSBvblN0YXJ0RHJhZywgLy8vXG4gICAgICAgIHRpbWVvdXQgPSBudWxsLFxuICAgICAgICB0b3BPZmZzZXQgPSBudWxsLFxuICAgICAgICBsZWZ0T2Zmc2V0ID0gbnVsbCxcbiAgICAgICAgc3RhcnRNb3VzZVRvcCA9IG51bGwsXG4gICAgICAgIHN0YXJ0TW91c2VMZWZ0ID0gbnVsbDtcblxuICBkcmFnSGFuZGxlciAmJiB0aGlzLm9uRHJhZyhkcmFnSGFuZGxlcik7XG4gIHN0b3BEcmFnSGFuZGxlciAmJiB0aGlzLm9uU3RvcERyYWcoc3RvcERyYWdIYW5kbGVyKTtcbiAgc3RhcnREcmFnSGFuZGxlciAmJiB0aGlzLm9uU3RhcnREcmFnKHN0YXJ0RHJhZ0hhbmRsZXIpO1xuXG4gIHRoaXMub25Nb3VzZURvd24obW91c2VEb3duSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgdGltZW91dCxcbiAgICB0b3BPZmZzZXQsXG4gICAgbGVmdE9mZnNldCxcbiAgICBzdGFydE1vdXNlVG9wLFxuICAgIHN0YXJ0TW91c2VMZWZ0XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlRHJhZygpIHtcbiAgY29uc3QgeyBvbkRyYWcsIG9uU3RvcERyYWcsIG9uU3RhcnREcmFnIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnLCAvLy9cbiAgICAgICAgc3RvcERyYWdIYW5kbGVyID0gb25TdG9wRHJhZywgLy8vXG4gICAgICAgIHN0YXJ0RHJhZ0hhbmRsZXIgPSBvblN0YXJ0RHJhZzsgLy8vXG5cbiAgZHJhZ0hhbmRsZXIgJiYgdGhpcy5vZmZEcmFnKGRyYWdIYW5kbGVyKTtcbiAgc3RvcERyYWdIYW5kbGVyICYmIHRoaXMub2ZmU3RvcERyYWcoc3RvcERyYWdIYW5kbGVyKTtcbiAgc3RhcnREcmFnSGFuZGxlciAmJiB0aGlzLm9mZlN0YXJ0RHJhZyhzdGFydERyYWdIYW5kbGVyKTtcblxuICB0aGlzLm9mZk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gaXNEcmFnZ2luZygpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgcmV0dXJuIGRyYWdnaW5nO1xufVxuXG5mdW5jdGlvbiBzdGFydFdhaXRpbmdUb0RyYWcobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICBsZXQgdGltZW91dCA9IHRoaXMuZ2V0VGltZW91dCgpO1xuXG4gIGlmICh0aW1lb3V0ID09PSBudWxsKSB7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldFRpbWVvdXQoKTtcblxuICAgICAgdGhpcy5zdGFydERyYWcobW91c2VUb3AsIG1vdXNlTGVmdCk7XG4gICAgfSwgU1RBUlRfRFJBR0dJTkdfREVMQVkpO1xuXG4gICAgdGhpcy51cGRhdGVUaW1lb3V0KHRpbWVvdXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3BXYWl0aW5nVG9EcmFnKCkge1xuICBjb25zdCB0aW1lb3V0ID0gdGhpcy5nZXRUaW1lb3V0KCk7XG5cbiAgaWYgKHRpbWVvdXQgIT09IG51bGwpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG5cbiAgICB0aGlzLnJlc2V0VGltZW91dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0RHJhZyhtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gIGNvbnN0IGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCksXG4gICAgICAgIGV2ZW50VHlwZSA9IFNUQVJUX0RSQUdfRVZFTlRfVFlQRSxcbiAgICAgICAgYm91bmRzVG9wID0gYm91bmRzLmdldFRvcCgpLFxuICAgICAgICBib3VuZHNMZWZ0ID0gYm91bmRzLmdldExlZnQoKSxcbiAgICAgICAgYm91bmRzUmlnaHQgPSBib3VuZHMuZ2V0UmlnaHQoKSxcbiAgICAgICAgYm91bmRzQm90dG9tID0gYm91bmRzLmdldEJvdHRvbSgpLFxuICAgICAgICBib3VuZHNXaWR0aCA9IGJvdW5kc1JpZ2h0IC0gYm91bmRzTGVmdCxcbiAgICAgICAgYm91bmRzSGVpZ2h0ID0gYm91bmRzQm90dG9tIC0gYm91bmRzVG9wLFxuICAgICAgICB0b3BPZmZzZXQgPSBNYXRoLmZsb29yKGJvdW5kc0hlaWdodCAvIDIpLFxuICAgICAgICBsZWZ0T2Zmc2V0ID0gTWF0aC5mbG9vcihib3VuZHNXaWR0aCAvIDIpLFxuICAgICAgICBkcmFnRWxlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICBzdGFydE1vdXNlVG9wID0gbW91c2VUb3AsIC8vL1xuICAgICAgICBzdGFydE1vdXNlTGVmdCA9IG1vdXNlTGVmdDsgLy8vXG5cbiAgd2luZG93Lm9uS2V5RG93bihrZXlEb3duSGFuZGxlciwgdGhpcyk7XG5cbiAgd2luZG93Lm9uTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMuYWRkQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICBkcmFnRWxlbWVudFxuICB9KTtcblxuICB0aGlzLnNldFRvcE9mZnNldCh0b3BPZmZzZXQpO1xuXG4gIHRoaXMuc2V0TGVmdE9mZnNldChsZWZ0T2Zmc2V0KTtcblxuICB0aGlzLnNldFN0YXJ0TW91c2VUb3Aoc3RhcnRNb3VzZVRvcCk7XG5cbiAgdGhpcy5zZXRTdGFydE1vdXNlTGVmdChzdGFydE1vdXNlTGVmdCk7XG5cbiAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlKTtcblxuICB0aGlzLmRyYWcobW91c2VUb3AsIG1vdXNlTGVmdCk7XG59XG5cbmZ1bmN0aW9uIHN0b3BEcmFnKGFib3J0ZWQpIHtcbiAgY29uc3QgeyBkcm9wRWxlbWVudCB9ID0gZ2xvYmFsVGhpcyxcbiAgICAgICAgZXZlbnRUeXBlID0gU1RPUF9EUkFHX0VWRU5UX1RZUEU7XG5cbiAgd2luZG93Lm9mZktleURvd24oa2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuXG4gIHdpbmRvdy5vZmZNb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG5cbiAgY29uc3QgZG9uZSA9ICgpID0+IHtcbiAgICB0aGlzLmNhbGxIYW5kbGVyc0FzeW5jKGV2ZW50VHlwZSwgZHJvcEVsZW1lbnQsIGFib3J0ZWQsICgpID0+IHtcbiAgICAgIGNvbnN0IGRyYWdFbGVtZW50ID0gbnVsbDtcblxuICAgICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICAgIGRyYWdFbGVtZW50XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcImRyYWdnaW5nXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGRyb3BFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGRyb3BFbGVtZW50LmRyb3AoZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGRvbmUpO1xuICB9IGVsc2Uge1xuICAgIGRvbmUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmFnKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICBzY3JvbGxUb3AgPSB3aW5kb3cuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgIHNjcm9sbExlZnQgPSB3aW5kb3cuZ2V0U2Nyb2xsTGVmdCgpLFxuICAgICAgICB0b3BPZmZzZXQgPSB0aGlzLmdldFRvcE9mZnNldCgpLFxuICAgICAgICBsZWZ0T2Zmc2V0ID0gdGhpcy5nZXRMZWZ0T2Zmc2V0KCksXG4gICAgICAgIHN0YXJ0TW91c2VUb3AgPSB0aGlzLmdldFN0YXJ0TW91c2VUb3AoKSxcbiAgICAgICAgc3RhcnRNb3VzZUxlZnQgPSB0aGlzLmdldFN0YXJ0TW91c2VMZWZ0KCksXG4gICAgICAgIHJlbGF0aXZlTW91c2VUb3AgPSBtb3VzZVRvcCAtIHN0YXJ0TW91c2VUb3AsXG4gICAgICAgIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gc3RhcnRNb3VzZUxlZnQ7XG5cbiAgbGV0IHRvcCA9IHN0YXJ0TW91c2VUb3AgKyByZWxhdGl2ZU1vdXNlVG9wIC0gdG9wT2Zmc2V0IC0gc2Nyb2xsVG9wLFxuICAgICAgbGVmdCA9IHN0YXJ0TW91c2VMZWZ0ICsgcmVsYXRpdmVNb3VzZUxlZnQgLSBsZWZ0T2Zmc2V0IC0gc2Nyb2xsTGVmdDtcblxuICB0b3AgPSBgJHt0b3B9cHhgOyAvLy9cbiAgbGVmdCA9IGAke2xlZnR9cHhgOyAvLy9cblxuICBjb25zdCBjc3MgPSB7XG4gICAgdG9wLFxuICAgIGxlZnRcbiAgfTtcblxuICB0aGlzLmNzcyhjc3MpO1xuXG4gIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgcmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpO1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lb3V0KCkge1xuICBjb25zdCB7IHRpbWVvdXQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gdGltZW91dDtcbn1cblxuZnVuY3Rpb24gcmVzZXRUaW1lb3V0KCkge1xuICBjb25zdCB0aW1lb3V0ID0gbnVsbDtcblxuICB0aGlzLnVwZGF0ZVRpbWVvdXQodGltZW91dCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRpbWVvdXQodGltZW91dCkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICB0aW1lb3V0XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRUb3BPZmZzZXQoKSB7XG4gIGNvbnN0IHsgdG9wT2Zmc2V0IH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHRvcE9mZnNldDtcbn1cblxuZnVuY3Rpb24gZ2V0TGVmdE9mZnNldCgpIHtcbiAgY29uc3QgeyBsZWZ0T2Zmc2V0IH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIGxlZnRPZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0TW91c2VUb3AoKSB7XG4gIGNvbnN0IHsgc3RhcnRNb3VzZVRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydE1vdXNlVG9wO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydE1vdXNlTGVmdCgpIHtcbiAgY29uc3QgeyBzdGFydE1vdXNlTGVmdCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydE1vdXNlTGVmdDtcbn1cblxuZnVuY3Rpb24gc2V0VG9wT2Zmc2V0KHRvcE9mZnNldCkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICB0b3BPZmZzZXRcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldExlZnRPZmZzZXQobGVmdE9mZnNldCkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBsZWZ0T2Zmc2V0XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRTdGFydE1vdXNlVG9wKHN0YXJ0TW91c2VUb3ApIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRNb3VzZVRvcFxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRNb3VzZUxlZnQoc3RhcnRNb3VzZUxlZnQpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRNb3VzZUxlZnRcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxIYW5kbGVycyhldmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudDogaGFuZGxlckVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsbEhhbmRsZXJzQXN5bmMoZXZlbnRUeXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgZG9uZSA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgIC8vL1xuICAgICAgICBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgZm9yRWFjaChldmVudExpc3RlbmVycywgKGV2ZW50TGlzdGVuZXIsIG5leHQpID0+IHtcbiAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQ6IGhhbmRsZXJFbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBkb25lID0gbmV4dDsgIC8vL1xuXG4gICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQsIGRvbmUpO1xuICB9LCBkb25lKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvbkRyYWcsXG4gIG9mZkRyYWcsXG4gIG9uU3RvcERyYWcsXG4gIG9mZlN0b3BEcmFnLFxuICBvblN0YXJ0RHJhZyxcbiAgb2ZmU3RhcnREcmFnLFxuICBlbmFibGVEcmFnLFxuICBkaXNhYmxlRHJhZyxcbiAgaXNEcmFnZ2luZyxcbiAgc3RhcnRXYWl0aW5nVG9EcmFnLFxuICBzdG9wV2FpdGluZ1RvRHJhZyxcbiAgc3RhcnREcmFnLFxuICBzdG9wRHJhZyxcbiAgZHJhZyxcbiAgZ2V0VGltZW91dCxcbiAgcmVzZXRUaW1lb3V0LFxuICB1cGRhdGVUaW1lb3V0LFxuICBnZXRUb3BPZmZzZXQsXG4gIGdldExlZnRPZmZzZXQsXG4gIGdldFN0YXJ0TW91c2VUb3AsXG4gIGdldFN0YXJ0TW91c2VMZWZ0LFxuICBzZXRUb3BPZmZzZXQsXG4gIHNldExlZnRPZmZzZXQsXG4gIHNldFN0YXJ0TW91c2VUb3AsXG4gIHNldFN0YXJ0TW91c2VMZWZ0LFxuICBjYWxsSGFuZGxlcnMsXG4gIGNhbGxIYW5kbGVyc0FzeW5jXG59O1xuXG5mdW5jdGlvbiBrZXlEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50LFxuICAgICAgICBlc2NhcGVLZXkgPSAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSxcbiAgICAgICAgYWJvcnRlZCA9IHRydWU7XG5cbiAgaWYgKGVzY2FwZUtleSkge1xuICAgIHRoaXMuc3RvcERyYWcoYWJvcnRlZCk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpLFxuICAgICAgICBhYm9ydGVkID0gZmFsc2U7XG5cbiAgZHJhZ2dpbmcgP1xuICAgIHRoaXMuc3RvcERyYWcoYWJvcnRlZCkgOlxuICAgICAgdGhpcy5zdG9wV2FpdGluZ1RvRHJhZygpO1xuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIHdpbmRvdy5vZmYoQkxVUl9FVkVOVF9UWVBFLCBtb3VzZVVwSGFuZGxlciwgdGhpcyk7ICAvLy9cblxuICB3aW5kb3cub2ZmTW91c2VVcChtb3VzZVVwSGFuZGxlciwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBidXR0b24gfSA9IGV2ZW50O1xuXG4gIGlmIChidXR0b24gPT09IExFRlRfTU9VU0VfQlVUVE9OKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgIGNvbnN0IG1vdXNlVG9wID0gbW91c2VUb3BGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICAgICAgbW91c2VMZWZ0ID0gbW91c2VMZWZ0RnJvbUV2ZW50KGV2ZW50KTtcblxuICAgICAgdGhpcy5zdGFydFdhaXRpbmdUb0RyYWcobW91c2VUb3AsIG1vdXNlTGVmdCk7XG4gICAgfVxuICB9XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgd2luZG93Lm9uKEJMVVJfRVZFTlRfVFlQRSwgbW91c2VVcEhhbmRsZXIsIHRoaXMpOyAvLy9cblxuICB3aW5kb3cub25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gIGlmIChkcmFnZ2luZykge1xuICAgIGNvbnN0IG1vdXNlVG9wID0gbW91c2VUb3BGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICAgIG1vdXNlTGVmdCA9IG1vdXNlTGVmdEZyb21FdmVudChldmVudCk7XG5cbiAgICB0aGlzLmRyYWcobW91c2VUb3AsIG1vdXNlTGVmdCk7XG4gIH1cblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cbiJdLCJuYW1lcyI6WyJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiRVNDQVBFX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJCTFVSX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiTEVGVF9NT1VTRV9CVVRUT04iLCJidXR0b25zIiwiZHJhZ0VsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJnbG9iYWxUaGlzIiwib25EcmFnIiwiZHJhZ0hhbmRsZXIiLCJlbGVtZW50IiwiZXZlbnRUeXBlIiwiRFJBR19FVkVOVF9UWVBFIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZEcmFnIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uU3RvcERyYWciLCJzdG9wRHJhZ0hhbmRsZXIiLCJTVE9QX0RSQUdfRVZFTlRfVFlQRSIsIm9mZlN0b3BEcmFnIiwib25TdGFydERyYWciLCJzdGFydERyYWdIYW5kbGVyIiwiU1RBUlRfRFJBR19FVkVOVF9UWVBFIiwib2ZmU3RhcnREcmFnIiwiZW5hYmxlRHJhZyIsInByb3BlcnRpZXMiLCJ0aW1lb3V0IiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsInN0YXJ0TW91c2VUb3AiLCJzdGFydE1vdXNlTGVmdCIsIm9uTW91c2VEb3duIiwibW91c2VEb3duSGFuZGxlciIsInNldFN0YXRlIiwiZGlzYWJsZURyYWciLCJvZmZNb3VzZURvd24iLCJpc0RyYWdnaW5nIiwiZHJhZ2dpbmciLCJoYXNDbGFzcyIsInN0YXJ0V2FpdGluZ1RvRHJhZyIsIm1vdXNlVG9wIiwibW91c2VMZWZ0IiwiZ2V0VGltZW91dCIsInNldFRpbWVvdXQiLCJyZXNldFRpbWVvdXQiLCJzdGFydERyYWciLCJTVEFSVF9EUkFHR0lOR19ERUxBWSIsInVwZGF0ZVRpbWVvdXQiLCJzdG9wV2FpdGluZ1RvRHJhZyIsImNsZWFyVGltZW91dCIsImJvdW5kcyIsImdldEJvdW5kcyIsImJvdW5kc1RvcCIsImdldFRvcCIsImJvdW5kc0xlZnQiLCJnZXRMZWZ0IiwiYm91bmRzUmlnaHQiLCJnZXRSaWdodCIsImJvdW5kc0JvdHRvbSIsImdldEJvdHRvbSIsImJvdW5kc1dpZHRoIiwiYm91bmRzSGVpZ2h0IiwiTWF0aCIsImZsb29yIiwid2luZG93Iiwib25LZXlEb3duIiwia2V5RG93bkhhbmRsZXIiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJhZGRDbGFzcyIsInNldFRvcE9mZnNldCIsInNldExlZnRPZmZzZXQiLCJzZXRTdGFydE1vdXNlVG9wIiwic2V0U3RhcnRNb3VzZUxlZnQiLCJjYWxsSGFuZGxlcnMiLCJkcmFnIiwic3RvcERyYWciLCJhYm9ydGVkIiwiZHJvcEVsZW1lbnQiLCJvZmZLZXlEb3duIiwib2ZmTW91c2VNb3ZlIiwiZG9uZSIsImNhbGxIYW5kbGVyc0FzeW5jIiwicmVtb3ZlQ2xhc3MiLCJkcm9wIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJnZXRUb3BPZmZzZXQiLCJnZXRMZWZ0T2Zmc2V0IiwiZ2V0U3RhcnRNb3VzZVRvcCIsImdldFN0YXJ0TW91c2VMZWZ0IiwicmVsYXRpdmVNb3VzZVRvcCIsInJlbGF0aXZlTW91c2VMZWZ0IiwidG9wIiwibGVmdCIsImNzcyIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyRWxlbWVudCIsImNhbGwiLCJwb3AiLCJuZXh0IiwiZXZlbnQiLCJrZXlDb2RlIiwiZXNjYXBlS2V5Iiwic3RvcFByb3BhZ2F0aW9uIiwibW91c2VVcEhhbmRsZXIiLCJvZmYiLCJvZmZNb3VzZVVwIiwiYnV0dG9uIiwibW91c2VUb3BGcm9tRXZlbnQiLCJtb3VzZUxlZnRGcm9tRXZlbnQiLCJvbiIsIm9uTW91c2VVcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMlRBOzs7ZUFBQTs7O29CQXpUNEM7eUJBQ0k7eUJBRVg7cUJBQ2lCOzBCQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0UsSUFBTSxBQUFFQSxVQUFZQyxpQ0FBWkQsU0FDRixBQUFFRSxrQkFBb0JDLG9CQUFwQkQsaUJBQ0YsQUFBRUUsa0JBQW9CQyxpQkFBcEJELGlCQUNGLEFBQUVFLG9CQUFzQkMsY0FBdEJEO0FBRVIsSUFBTUUsY0FBYztBQUVwQkMsT0FBT0MsT0FBT0MsWUFBWTtJQUN4QkgsYUFBQUE7QUFDRjtBQUVBLFNBQVNJLE9BQU9DLFdBQVcsRUFBRUMsT0FBTztJQUNsQyxJQUFNQyxZQUFZQyw2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