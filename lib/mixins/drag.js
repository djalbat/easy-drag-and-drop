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
var _necessary = require("necessary");
var _easy = require("easy");
var _constants = require("../constants");
var _reference = require("../utilities/reference");
var _event = require("../utilities/event");
var _customEventTypes = require("../customEventTypes");
var ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, BLUR_EVENT_TYPE = _easy.eventTypes.BLUR_EVENT_TYPE, LEFT_MOUSE_BUTTON = _easy.mouseButtons.LEFT_MOUSE_BUTTON;
var dragElement = null;
Object.assign(globalThis, {
    dragElement: dragElement
});
function enableDrag() {
    var timeout = null, topOffset = null, leftOffset = null, startMouseTop = null, startMouseLeft = null;
    this.onMouseDown(mouseDownHandler, this);
    this.updateState({
        timeout: timeout,
        topOffset: topOffset,
        leftOffset: leftOffset,
        startMouseTop: startMouseTop,
        startMouseLeft: startMouseLeft
    });
}
function disableDrag() {
    this.offMouseDown(mouseDownHandler, this);
}
function onCustomDrag(dragCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_CUSTOM_EVENT_TYPE, customHandler = dragCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDrag(dragCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_CUSTOM_EVENT_TYPE, customHandler = dragCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomStopDrag(stopDragCustomHandler, element) {
    var customEventType = _customEventTypes.STOP_DRAG_CUSTOM_EVENT_TYPE, customHandler = stopDragCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomStopDrag(stopDragCustomHandler, element) {
    var customEventType = _customEventTypes.STOP_DRAG_CUSTOM_EVENT_TYPE, customHandler = stopDragCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomStartDrag(startDragCustomHandler, element) {
    var customEventType = _customEventTypes.START_DRAG_CUSTOM_EVENT_TYPE, customHandler = startDragCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomStartDrag(startDragCustomHandler, element) {
    var customEventType = _customEventTypes.START_DRAG_CUSTOM_EVENT_TYPE, customHandler = startDragCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function isDragging() {
    var dragging = this.hasClass("dragging");
    return dragging;
}
function startDrag(event, element, mouseTop, mouseLeft) {
    var bounds = this.getBounds(), boundsTop = bounds.getTop(), boundsLeft = bounds.getLeft(), boundsRight = bounds.getRight(), boundsBottom = bounds.getBottom(), boundsWidth = boundsRight - boundsLeft, boundsHeight = boundsBottom - boundsTop, topOffset = Math.floor(boundsHeight / 2), leftOffset = Math.floor(boundsWidth / 2), dragElement = this, startMouseTop = mouseTop, startMouseLeft = mouseLeft, customEventType = _customEventTypes.START_DRAG_CUSTOM_EVENT_TYPE;
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
    this.callCustomHandlers(customEventType, event, element);
    this.drag(event, element, mouseTop, mouseLeft);
}
function stopDrag(event, element, aborted) {
    var _this = this;
    var dropElement = globalThis.dropElement, customEventType = _customEventTypes.STOP_DRAG_CUSTOM_EVENT_TYPE;
    _easy.window.offKeyDown(keyDownHandler, this);
    _easy.window.offMouseMove(mouseMoveHandler, this);
    var done = function() {
        _this.callCustomHandlersAsync(customEventType, event, element, dropElement, aborted, function() {
            var dragElement = null;
            Object.assign(globalThis, {
                dragElement: dragElement
            });
            _this.removeClass("dragging");
        });
    };
    if (dropElement !== null) {
        var dragElement = this; ///
        var dragElementIgnoresDropElement = (0, _reference.checkDragElementIgnoresDropElement)(dragElement, dropElement);
        if (dragElementIgnoresDropElement) {
            dragElement = null;
        }
        dropElement.drop(event, element, dragElement, aborted, done);
    } else {
        done();
    }
}
function drag(event, element, mouseTop, mouseLeft) {
    var scrollTop = _easy.window.getScrollTop(), scrollLeft = _easy.window.getScrollLeft(), topOffset = this.getTopOffset(), leftOffset = this.getLeftOffset(), startMouseTop = this.getStartMouseTop(), startMouseLeft = this.getStartMouseLeft(), customEventType = _customEventTypes.DRAG_CUSTOM_EVENT_TYPE, relativeMouseTop = mouseTop - startMouseTop, relativeMouseLeft = mouseLeft - startMouseLeft;
    var top = startMouseTop + relativeMouseTop - topOffset - scrollTop, left = startMouseLeft + relativeMouseLeft - leftOffset - scrollLeft;
    top = "".concat(top, "px"); ///
    left = "".concat(left, "px"); ///
    var css = {
        top: top,
        left: left
    };
    this.css(css);
    this.callCustomHandlers(customEventType, event, element, relativeMouseTop, relativeMouseLeft);
}
function startWaitingToDrag(event, element, mouseTop, mouseLeft) {
    var _this = this;
    var timeout = this.getTimeout();
    if (timeout === null) {
        timeout = setTimeout(function() {
            _this.resetTimeout();
            _this.startDrag(event, element, mouseTop, mouseLeft);
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
var _default = {
    enableDrag: enableDrag,
    disableDrag: disableDrag,
    onCustomDrag: onCustomDrag,
    offCustomDrag: offCustomDrag,
    onCustomStopDrag: onCustomStopDrag,
    offCustomStopDrag: offCustomStopDrag,
    onCustomStartDrag: onCustomStartDrag,
    offCustomStartDrag: offCustomStartDrag,
    isDragging: isDragging,
    startDrag: startDrag,
    stopDrag: stopDrag,
    drag: drag,
    startWaitingToDrag: startWaitingToDrag,
    stopWaitingToDrag: stopWaitingToDrag,
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
function keyDownHandler(event, element) {
    var keyCode = event.keyCode, escapeKey = keyCode === ESCAPE_KEY_CODE, aborted = true;
    if (escapeKey) {
        this.stopDrag(event, element, aborted);
        event.stopPropagation();
    }
}
function mouseUpHandler(event, element) {
    var dragging = this.isDragging(), aborted = false;
    dragging ? this.stopDrag(event, element, aborted) : this.stopWaitingToDrag();
    event.stopPropagation();
    _easy.window.offEvent(BLUR_EVENT_TYPE, mouseUpHandler, this); ///
    _easy.window.offMouseUp(mouseUpHandler, this);
}
function mouseDownHandler(event, element) {
    var button = event.button;
    if (button === LEFT_MOUSE_BUTTON) {
        var dragging = this.isDragging();
        if (!dragging) {
            var mouseTop = (0, _event.mouseTopFromEvent)(event), mouseLeft = (0, _event.mouseLeftFromEvent)(event);
            this.startWaitingToDrag(event, element, mouseTop, mouseLeft);
        }
    }
    event.stopPropagation();
    _easy.window.onEvent(BLUR_EVENT_TYPE, mouseUpHandler, this); ///
    _easy.window.onMouseUp(mouseUpHandler, this);
}
function mouseMoveHandler(event, element) {
    var dragging = this.isDragging();
    if (dragging) {
        var mouseTop = (0, _event.mouseTopFromEvent)(event), mouseLeft = (0, _event.mouseLeftFromEvent)(event);
        this.drag(event, element, mouseTop, mouseLeft);
    }
    event.stopPropagation();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZHJhZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCIgO1xuaW1wb3J0IHsgd2luZG93LCBldmVudFR5cGVzLCBtb3VzZUJ1dHRvbnMgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBTVEFSVF9EUkFHR0lOR19ERUxBWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNoZWNrRHJhZ0VsZW1lbnRJZ25vcmVzRHJvcEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlZmVyZW5jZVwiO1xuaW1wb3J0IHsgbW91c2VUb3BGcm9tRXZlbnQsIG1vdXNlTGVmdEZyb21FdmVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZXZlbnRcIjtcbmltcG9ydCB7IERSQUdfQ1VTVE9NX0VWRU5UX1RZUEUsIFNUT1BfRFJBR19DVVNUT01fRVZFTlRfVFlQRSwgU1RBUlRfRFJBR19DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9DT0RFIH0gPSBrZXlDb2RlcyxcbiAgICAgIHsgQkxVUl9FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzLFxuICAgICAgeyBMRUZUX01PVVNFX0JVVFRPTiB9ID0gbW91c2VCdXR0b25zO1xuXG5jb25zdCBkcmFnRWxlbWVudCA9IG51bGw7XG5cbk9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICBkcmFnRWxlbWVudFxufSk7XG5cbmZ1bmN0aW9uIGVuYWJsZURyYWcoKSB7XG4gIGNvbnN0IHRpbWVvdXQgPSBudWxsLFxuICAgICAgICB0b3BPZmZzZXQgPSBudWxsLFxuICAgICAgICBsZWZ0T2Zmc2V0ID0gbnVsbCxcbiAgICAgICAgc3RhcnRNb3VzZVRvcCA9IG51bGwsXG4gICAgICAgIHN0YXJ0TW91c2VMZWZ0ID0gbnVsbDtcblxuICB0aGlzLm9uTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHRpbWVvdXQsXG4gICAgdG9wT2Zmc2V0LFxuICAgIGxlZnRPZmZzZXQsXG4gICAgc3RhcnRNb3VzZVRvcCxcbiAgICBzdGFydE1vdXNlTGVmdFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZURyYWcoKSB7XG4gIHRoaXMub2ZmTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWcoZHJhZ0N1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdDdXN0b21IYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWcoZHJhZ0N1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdDdXN0b21IYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN0b3BEcmFnKHN0b3BEcmFnQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTVE9QX0RSQUdfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzdG9wRHJhZ0N1c3RvbUhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3RvcERyYWcoc3RvcERyYWdDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNUT1BfRFJBR19DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN0b3BEcmFnQ3VzdG9tSGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21TdGFydERyYWcoc3RhcnREcmFnQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTVEFSVF9EUkFHX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3RhcnREcmFnQ3VzdG9tSGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21TdGFydERyYWcoc3RhcnREcmFnQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTVEFSVF9EUkFHX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3RhcnREcmFnQ3VzdG9tSGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gaXNEcmFnZ2luZygpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgcmV0dXJuIGRyYWdnaW5nO1xufVxuXG5mdW5jdGlvbiBzdGFydERyYWcoZXZlbnQsIGVsZW1lbnQsIG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgY29uc3QgYm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKSxcbiAgICAgICAgYm91bmRzVG9wID0gYm91bmRzLmdldFRvcCgpLFxuICAgICAgICBib3VuZHNMZWZ0ID0gYm91bmRzLmdldExlZnQoKSxcbiAgICAgICAgYm91bmRzUmlnaHQgPSBib3VuZHMuZ2V0UmlnaHQoKSxcbiAgICAgICAgYm91bmRzQm90dG9tID0gYm91bmRzLmdldEJvdHRvbSgpLFxuICAgICAgICBib3VuZHNXaWR0aCA9IGJvdW5kc1JpZ2h0IC0gYm91bmRzTGVmdCxcbiAgICAgICAgYm91bmRzSGVpZ2h0ID0gYm91bmRzQm90dG9tIC0gYm91bmRzVG9wLFxuICAgICAgICB0b3BPZmZzZXQgPSBNYXRoLmZsb29yKGJvdW5kc0hlaWdodCAvIDIpLFxuICAgICAgICBsZWZ0T2Zmc2V0ID0gTWF0aC5mbG9vcihib3VuZHNXaWR0aCAvIDIpLFxuICAgICAgICBkcmFnRWxlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICBzdGFydE1vdXNlVG9wID0gbW91c2VUb3AsIC8vL1xuICAgICAgICBzdGFydE1vdXNlTGVmdCA9IG1vdXNlTGVmdCwgLy8vXG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNUQVJUX0RSQUdfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgd2luZG93Lm9uS2V5RG93bihrZXlEb3duSGFuZGxlciwgdGhpcyk7XG5cbiAgd2luZG93Lm9uTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMuYWRkQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICBkcmFnRWxlbWVudFxuICB9KTtcblxuICB0aGlzLnNldFRvcE9mZnNldCh0b3BPZmZzZXQpO1xuXG4gIHRoaXMuc2V0TGVmdE9mZnNldChsZWZ0T2Zmc2V0KTtcblxuICB0aGlzLnNldFN0YXJ0TW91c2VUb3Aoc3RhcnRNb3VzZVRvcCk7XG5cbiAgdGhpcy5zZXRTdGFydE1vdXNlTGVmdChzdGFydE1vdXNlTGVmdCk7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG5cbiAgdGhpcy5kcmFnKGV2ZW50LCBlbGVtZW50LCBtb3VzZVRvcCwgbW91c2VMZWZ0KTtcbn1cblxuZnVuY3Rpb24gc3RvcERyYWcoZXZlbnQsIGVsZW1lbnQsIGFib3J0ZWQpIHtcbiAgY29uc3QgeyBkcm9wRWxlbWVudCB9ID0gZ2xvYmFsVGhpcyxcbiAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gU1RPUF9EUkFHX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gIHdpbmRvdy5vZmZLZXlEb3duKGtleURvd25IYW5kbGVyLCB0aGlzKTtcblxuICB3aW5kb3cub2ZmTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuXG4gIGNvbnN0IGRvbmUgPSAoKSA9PiB7XG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBkcm9wRWxlbWVudCwgYWJvcnRlZCwgKCkgPT4ge1xuICAgICAgY29uc3QgZHJhZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgICAgZHJhZ0VsZW1lbnRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZHJhZ2dpbmdcIik7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZHJvcEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICBsZXQgZHJhZ0VsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGNvbnN0IGRyYWdFbGVtZW50SWdub3Jlc0Ryb3BFbGVtZW50ID0gY2hlY2tEcmFnRWxlbWVudElnbm9yZXNEcm9wRWxlbWVudChkcmFnRWxlbWVudCwgZHJvcEVsZW1lbnQpO1xuXG4gICAgaWYgKGRyYWdFbGVtZW50SWdub3Jlc0Ryb3BFbGVtZW50KSB7XG4gICAgICBkcmFnRWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgZHJvcEVsZW1lbnQuZHJvcChldmVudCwgZWxlbWVudCwgZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGRvbmUpO1xuICB9IGVsc2Uge1xuICAgIGRvbmUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmFnKGV2ZW50LCBlbGVtZW50LCBtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5nZXRTY3JvbGxMZWZ0KCksXG4gICAgICAgIHRvcE9mZnNldCA9IHRoaXMuZ2V0VG9wT2Zmc2V0KCksXG4gICAgICAgIGxlZnRPZmZzZXQgPSB0aGlzLmdldExlZnRPZmZzZXQoKSxcbiAgICAgICAgc3RhcnRNb3VzZVRvcCA9IHRoaXMuZ2V0U3RhcnRNb3VzZVRvcCgpLFxuICAgICAgICBzdGFydE1vdXNlTGVmdCA9IHRoaXMuZ2V0U3RhcnRNb3VzZUxlZnQoKSxcbiAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgcmVsYXRpdmVNb3VzZVRvcCA9IG1vdXNlVG9wIC0gc3RhcnRNb3VzZVRvcCxcbiAgICAgICAgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSBzdGFydE1vdXNlTGVmdDtcblxuICBsZXQgdG9wID0gc3RhcnRNb3VzZVRvcCArIHJlbGF0aXZlTW91c2VUb3AgLSB0b3BPZmZzZXQgLSBzY3JvbGxUb3AsXG4gICAgICBsZWZ0ID0gc3RhcnRNb3VzZUxlZnQgKyByZWxhdGl2ZU1vdXNlTGVmdCAtIGxlZnRPZmZzZXQgLSBzY3JvbGxMZWZ0O1xuXG4gIHRvcCA9IGAke3RvcH1weGA7IC8vL1xuICBsZWZ0ID0gYCR7bGVmdH1weGA7IC8vL1xuXG4gIGNvbnN0IGNzcyA9IHtcbiAgICB0b3AsXG4gICAgbGVmdFxuICB9O1xuXG4gIHRoaXMuY3NzKGNzcyk7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgcmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpO1xufVxuXG5mdW5jdGlvbiBzdGFydFdhaXRpbmdUb0RyYWcoZXZlbnQsIGVsZW1lbnQsIG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgbGV0IHRpbWVvdXQgPSB0aGlzLmdldFRpbWVvdXQoKTtcblxuICBpZiAodGltZW91dCA9PT0gbnVsbCkge1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVzZXRUaW1lb3V0KCk7XG5cbiAgICAgIHRoaXMuc3RhcnREcmFnKGV2ZW50LCBlbGVtZW50LCBtb3VzZVRvcCwgbW91c2VMZWZ0KTtcbiAgICB9LCBTVEFSVF9EUkFHR0lOR19ERUxBWSk7XG5cbiAgICB0aGlzLnVwZGF0ZVRpbWVvdXQodGltZW91dCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcFdhaXRpbmdUb0RyYWcoKSB7XG4gIGNvbnN0IHRpbWVvdXQgPSB0aGlzLmdldFRpbWVvdXQoKTtcblxuICBpZiAodGltZW91dCAhPT0gbnVsbCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgIHRoaXMucmVzZXRUaW1lb3V0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGltZW91dCgpIHtcbiAgY29uc3QgeyB0aW1lb3V0IH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHRpbWVvdXQ7XG59XG5cbmZ1bmN0aW9uIHJlc2V0VGltZW91dCgpIHtcbiAgY29uc3QgdGltZW91dCA9IG51bGw7XG5cbiAgdGhpcy51cGRhdGVUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUaW1lb3V0KHRpbWVvdXQpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGltZW91dFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9wT2Zmc2V0KCkge1xuICBjb25zdCB7IHRvcE9mZnNldCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiB0b3BPZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGdldExlZnRPZmZzZXQoKSB7XG4gIGNvbnN0IHsgbGVmdE9mZnNldCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBsZWZ0T2Zmc2V0O1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydE1vdXNlVG9wKCkge1xuICBjb25zdCB7IHN0YXJ0TW91c2VUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gc3RhcnRNb3VzZVRvcDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnRNb3VzZUxlZnQoKSB7XG4gIGNvbnN0IHsgc3RhcnRNb3VzZUxlZnQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gc3RhcnRNb3VzZUxlZnQ7XG59XG5cbmZ1bmN0aW9uIHNldFRvcE9mZnNldCh0b3BPZmZzZXQpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdG9wT2Zmc2V0XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRMZWZ0T2Zmc2V0KGxlZnRPZmZzZXQpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgbGVmdE9mZnNldFxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRNb3VzZVRvcChzdGFydE1vdXNlVG9wKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHN0YXJ0TW91c2VUb3BcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXJ0TW91c2VMZWZ0KHN0YXJ0TW91c2VMZWZ0KSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHN0YXJ0TW91c2VMZWZ0XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGVuYWJsZURyYWcsXG4gIGRpc2FibGVEcmFnLFxuICBvbkN1c3RvbURyYWcsXG4gIG9mZkN1c3RvbURyYWcsXG4gIG9uQ3VzdG9tU3RvcERyYWcsXG4gIG9mZkN1c3RvbVN0b3BEcmFnLFxuICBvbkN1c3RvbVN0YXJ0RHJhZyxcbiAgb2ZmQ3VzdG9tU3RhcnREcmFnLFxuICBpc0RyYWdnaW5nLFxuICBzdGFydERyYWcsXG4gIHN0b3BEcmFnLFxuICBkcmFnLFxuICBzdGFydFdhaXRpbmdUb0RyYWcsXG4gIHN0b3BXYWl0aW5nVG9EcmFnLFxuICBnZXRUaW1lb3V0LFxuICByZXNldFRpbWVvdXQsXG4gIHVwZGF0ZVRpbWVvdXQsXG4gIGdldFRvcE9mZnNldCxcbiAgZ2V0TGVmdE9mZnNldCxcbiAgZ2V0U3RhcnRNb3VzZVRvcCxcbiAgZ2V0U3RhcnRNb3VzZUxlZnQsXG4gIHNldFRvcE9mZnNldCxcbiAgc2V0TGVmdE9mZnNldCxcbiAgc2V0U3RhcnRNb3VzZVRvcCxcbiAgc2V0U3RhcnRNb3VzZUxlZnRcbn07XG5cbmZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQsXG4gICAgICAgIGVzY2FwZUtleSA9IChrZXlDb2RlID09PSBFU0NBUEVfS0VZX0NPREUpLFxuICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcblxuICBpZiAoZXNjYXBlS2V5KSB7XG4gICAgdGhpcy5zdG9wRHJhZyhldmVudCwgZWxlbWVudCwgYWJvcnRlZCk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpLFxuICAgICAgICBhYm9ydGVkID0gZmFsc2U7XG5cbiAgZHJhZ2dpbmcgP1xuICAgIHRoaXMuc3RvcERyYWcoZXZlbnQsIGVsZW1lbnQsIGFib3J0ZWQpIDpcbiAgICAgIHRoaXMuc3RvcFdhaXRpbmdUb0RyYWcoKTtcblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICB3aW5kb3cub2ZmRXZlbnQoQkxVUl9FVkVOVF9UWVBFLCBtb3VzZVVwSGFuZGxlciwgdGhpcyk7ICAvLy9cblxuICB3aW5kb3cub2ZmTW91c2VVcChtb3VzZVVwSGFuZGxlciwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBidXR0b24gfSA9IGV2ZW50O1xuXG4gIGlmIChidXR0b24gPT09IExFRlRfTU9VU0VfQlVUVE9OKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgIGNvbnN0IG1vdXNlVG9wID0gbW91c2VUb3BGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICAgICAgbW91c2VMZWZ0ID0gbW91c2VMZWZ0RnJvbUV2ZW50KGV2ZW50KTtcblxuICAgICAgdGhpcy5zdGFydFdhaXRpbmdUb0RyYWcoZXZlbnQsIGVsZW1lbnQsIG1vdXNlVG9wLCBtb3VzZUxlZnQpO1xuICAgIH1cbiAgfVxuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIHdpbmRvdy5vbkV2ZW50KEJMVVJfRVZFTlRfVFlQRSwgbW91c2VVcEhhbmRsZXIsIHRoaXMpOyAvLy9cblxuICB3aW5kb3cub25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gIGlmIChkcmFnZ2luZykge1xuICAgIGNvbnN0IG1vdXNlVG9wID0gbW91c2VUb3BGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICAgIG1vdXNlTGVmdCA9IG1vdXNlTGVmdEZyb21FdmVudChldmVudCk7XG5cbiAgICB0aGlzLmRyYWcoZXZlbnQsIGVsZW1lbnQsIG1vdXNlVG9wLCBtb3VzZUxlZnQpO1xuICB9XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG4iXSwibmFtZXMiOlsiRVNDQVBFX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJCTFVSX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiTEVGVF9NT1VTRV9CVVRUT04iLCJtb3VzZUJ1dHRvbnMiLCJkcmFnRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsImdsb2JhbFRoaXMiLCJlbmFibGVEcmFnIiwidGltZW91dCIsInRvcE9mZnNldCIsImxlZnRPZmZzZXQiLCJzdGFydE1vdXNlVG9wIiwic3RhcnRNb3VzZUxlZnQiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJ1cGRhdGVTdGF0ZSIsImRpc2FibGVEcmFnIiwib2ZmTW91c2VEb3duIiwib25DdXN0b21EcmFnIiwiZHJhZ0N1c3RvbUhhbmRsZXIiLCJlbGVtZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiRFJBR19DVVNUT01fRVZFTlRfVFlQRSIsImN1c3RvbUhhbmRsZXIiLCJvbkN1c3RvbUV2ZW50Iiwib2ZmQ3VzdG9tRHJhZyIsIm9mZkN1c3RvbUV2ZW50Iiwib25DdXN0b21TdG9wRHJhZyIsInN0b3BEcmFnQ3VzdG9tSGFuZGxlciIsIlNUT1BfRFJBR19DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN0b3BEcmFnIiwib25DdXN0b21TdGFydERyYWciLCJzdGFydERyYWdDdXN0b21IYW5kbGVyIiwiU1RBUlRfRFJBR19DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN0YXJ0RHJhZyIsImlzRHJhZ2dpbmciLCJkcmFnZ2luZyIsImhhc0NsYXNzIiwic3RhcnREcmFnIiwiZXZlbnQiLCJtb3VzZVRvcCIsIm1vdXNlTGVmdCIsImJvdW5kcyIsImdldEJvdW5kcyIsImJvdW5kc1RvcCIsImdldFRvcCIsImJvdW5kc0xlZnQiLCJnZXRMZWZ0IiwiYm91bmRzUmlnaHQiLCJnZXRSaWdodCIsImJvdW5kc0JvdHRvbSIsImdldEJvdHRvbSIsImJvdW5kc1dpZHRoIiwiYm91bmRzSGVpZ2h0IiwiTWF0aCIsImZsb29yIiwid2luZG93Iiwib25LZXlEb3duIiwia2V5RG93bkhhbmRsZXIiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJhZGRDbGFzcyIsInNldFRvcE9mZnNldCIsInNldExlZnRPZmZzZXQiLCJzZXRTdGFydE1vdXNlVG9wIiwic2V0U3RhcnRNb3VzZUxlZnQiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJkcmFnIiwic3RvcERyYWciLCJhYm9ydGVkIiwiZHJvcEVsZW1lbnQiLCJvZmZLZXlEb3duIiwib2ZmTW91c2VNb3ZlIiwiZG9uZSIsImNhbGxDdXN0b21IYW5kbGVyc0FzeW5jIiwicmVtb3ZlQ2xhc3MiLCJkcmFnRWxlbWVudElnbm9yZXNEcm9wRWxlbWVudCIsImNoZWNrRHJhZ0VsZW1lbnRJZ25vcmVzRHJvcEVsZW1lbnQiLCJkcm9wIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJnZXRUb3BPZmZzZXQiLCJnZXRMZWZ0T2Zmc2V0IiwiZ2V0U3RhcnRNb3VzZVRvcCIsImdldFN0YXJ0TW91c2VMZWZ0IiwicmVsYXRpdmVNb3VzZVRvcCIsInJlbGF0aXZlTW91c2VMZWZ0IiwidG9wIiwibGVmdCIsImNzcyIsInN0YXJ0V2FpdGluZ1RvRHJhZyIsImdldFRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVzZXRUaW1lb3V0IiwiU1RBUlRfRFJBR0dJTkdfREVMQVkiLCJ1cGRhdGVUaW1lb3V0Iiwic3RvcFdhaXRpbmdUb0RyYWciLCJjbGVhclRpbWVvdXQiLCJnZXRTdGF0ZSIsImtleUNvZGUiLCJlc2NhcGVLZXkiLCJzdG9wUHJvcGFnYXRpb24iLCJtb3VzZVVwSGFuZGxlciIsIm9mZkV2ZW50Iiwib2ZmTW91c2VVcCIsImJ1dHRvbiIsIm1vdXNlVG9wRnJvbUV2ZW50IiwibW91c2VMZWZ0RnJvbUV2ZW50Iiwib25FdmVudCIsIm9uTW91c2VVcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd1JBOzs7ZUFBQTs7O3lCQXRSeUI7b0JBQ3dCO3lCQUVaO3lCQUNjO3FCQUNHO2dDQUM0QztBQUVsRyxJQUFNLEFBQUVBLGtC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