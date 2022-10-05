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
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var forEach = _necessary.asynchronousUtilities.forEach, DROP_EVENT_TYPE = _easy.eventTypes.DROP_EVENT_TYPE, DRAG_OUT_EVENT_TYPE = _easy.eventTypes.DRAG_OUT_EVENT_TYPE, DRAG_OVER_EVENT_TYPE = _easy.eventTypes.DRAG_OVER_EVENT_TYPE;
var dropElement = null;
Object.assign(globalThis, {
    dropElement: dropElement
});
function drop(dragElement, aborted, done) {
    var eventType = DROP_EVENT_TYPE;
    this.callHandlersAsync(eventType, dragElement, aborted, done);
}
function dragOut(dragElement) {
    var eventType = DRAG_OUT_EVENT_TYPE;
    this.callHandlers(eventType, dragElement);
}
function dragOver(dragElement) {
    var eventType = DRAG_OVER_EVENT_TYPE;
    this.callHandlers(eventType, dragElement);
}
function onDrop(dropHandler, element) {
    var eventType = DROP_EVENT_TYPE, handler = dropHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offDrop(dropHandler, element) {
    var eventType = DROP_EVENT_TYPE, handler = dropHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function onDragOut(dragOutHandler, element) {
    var eventType = DRAG_OUT_EVENT_TYPE, handler = dragOutHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offDragOut(dragOutHandler, element) {
    var eventType = DRAG_OUT_EVENT_TYPE, handler = dragOutHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function onDragOver(dragOverHandler, element) {
    var eventType = DRAG_OVER_EVENT_TYPE, handler = dragOverHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offDragOver(dragOverHandler, element) {
    var eventType = DRAG_OVER_EVENT_TYPE, handler = dragOverHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function enableDrop() {
    var _properties = this.properties, _$onDrop = _properties.onDrop, _$onDragOut = _properties.onDragOut, _$onDragOver = _properties.onDragOver, dropHandler = _$onDrop, dragOutHandler = _$onDragOut, dragOverHandler = _$onDragOver; ///
    dropHandler && this.onDrop(dropHandler);
    dragOutHandler && this.onDragOut(dragOutHandler);
    dragOverHandler && this.onDragOver(dragOverHandler);
    this.onMouseOut(mouseOutHandler, this);
    this.onMouseOver(mouseOverHandler, this);
}
function disableDrop() {
    var _properties = this.properties, _$onDrop = _properties.onDrop, _$onDragOut = _properties.onDragOut, _$onDragOver = _properties.onDragOver, dropHandler = _$onDrop, dragOutHandler = _$onDragOut, dragOverHandler = _$onDragOver; ///
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
    var _this = this;
    var eventListeners = this.findEventListeners(eventType);
    eventListeners.forEach(function(eventListener) {
        var _handler;
        var handler = eventListener.handler, handlerElement = eventListener.element, element = _this; ///
        (_handler = handler).call.apply(_handler, [
            handlerElement
        ].concat(_toConsumableArray(remainingArguments), [
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
        ].concat(_toConsumableArray(remainingArguments), [
            element,
            done
        ]));
    }, done);
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
    callHandlers: callHandlers,
    callHandlersAsync: callHandlersAsync
};
function mouseOutHandler(event, element) {
    var dragElement = globalThis.dragElement;
    if (dragElement !== null) {
        var dropElement = null; ///
        Object.assign(globalThis, {
            dropElement: dropElement
        });
        this.dragOut(dragElement);
    }
    event.stopPropagation();
}
function mouseOverHandler(event, element) {
    var dragElement = globalThis.dragElement;
    if (dragElement !== null) {
        var dropElement = this; ///
        Object.assign(globalThis, {
            dropElement: dropElement
        });
        this.dragOver(dragElement);
    }
    event.stopPropagation();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZHJvcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCIgO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgRFJPUF9FVkVOVF9UWVBFLCBEUkFHX09VVF9FVkVOVF9UWVBFLCBEUkFHX09WRVJfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcblxuY29uc3QgZHJvcEVsZW1lbnQgPSBudWxsO1xuXG5PYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgZHJvcEVsZW1lbnRcbn0pO1xuXG5mdW5jdGlvbiBkcm9wKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBkb25lKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERST1BfRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxIYW5kbGVyc0FzeW5jKGV2ZW50VHlwZSwgZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGRvbmUpO1xufVxuXG5mdW5jdGlvbiBkcmFnT3V0KGRyYWdFbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERSQUdfT1VUX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBkcmFnRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdPdmVyKGRyYWdFbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERSQUdfT1ZFUl9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZHJhZ0VsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkRyb3AoZHJvcEhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRFJPUF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gZHJvcEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmRHJvcChkcm9wSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUk9QX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSBkcm9wSGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkRyYWdPdXQoZHJhZ091dEhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19PVVRfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IGRyYWdPdXRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkRyYWdPdXQoZHJhZ091dEhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19PVVRfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IGRyYWdPdXRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uRHJhZ092ZXIoZHJhZ092ZXJIYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERSQUdfT1ZFUl9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gZHJhZ092ZXJIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkRyYWdPdmVyKGRyYWdPdmVySGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUkFHX09WRVJfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IGRyYWdPdmVySGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBlbmFibGVEcm9wKCkge1xuICBjb25zdCB7IG9uRHJvcCwgb25EcmFnT3V0LCBvbkRyYWdPdmVyIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgIGRyb3BIYW5kbGVyID0gb25Ecm9wLCAvLy9cbiAgICAgICAgZHJhZ091dEhhbmRsZXIgPSBvbkRyYWdPdXQsIC8vL1xuICAgICAgICBkcmFnT3ZlckhhbmRsZXIgPSBvbkRyYWdPdmVyOyAvLy9cblxuICBkcm9wSGFuZGxlciAmJiB0aGlzLm9uRHJvcChkcm9wSGFuZGxlcik7XG4gIGRyYWdPdXRIYW5kbGVyICYmIHRoaXMub25EcmFnT3V0KGRyYWdPdXRIYW5kbGVyKTtcbiAgZHJhZ092ZXJIYW5kbGVyICYmIHRoaXMub25EcmFnT3ZlcihkcmFnT3ZlckhhbmRsZXIpO1xuXG4gIHRoaXMub25Nb3VzZU91dChtb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuICB0aGlzLm9uTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlRHJvcCgpIHtcbiAgY29uc3QgeyBvbkRyb3AsIG9uRHJhZ091dCwgb25EcmFnT3ZlciB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICBkcm9wSGFuZGxlciA9IG9uRHJvcCwgLy8vXG4gICAgICAgIGRyYWdPdXRIYW5kbGVyID0gb25EcmFnT3V0LCAvLy9cbiAgICAgICAgZHJhZ092ZXJIYW5kbGVyID0gb25EcmFnT3ZlcjsgLy8vXG5cbiAgZHJvcEhhbmRsZXIgJiYgdGhpcy5vZmZEcm9wKGRyb3BIYW5kbGVyKTtcbiAgZHJhZ091dEhhbmRsZXIgJiYgdGhpcy5vZmZEcmFnT3V0KGRyYWdPdXRIYW5kbGVyKTtcbiAgZHJhZ092ZXJIYW5kbGVyICYmIHRoaXMub2ZmRHJhZ092ZXIoZHJhZ092ZXJIYW5kbGVyKTtcblxuICB0aGlzLm9mZk1vdXNlT3V0KG1vdXNlT3V0SGFuZGxlciwgdGhpcyk7XG4gIHRoaXMub2ZmTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xufVxuXG5mdW5jdGlvbiBjYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQ6IGhhbmRsZXJFbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxIYW5kbGVyc0FzeW5jKGV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGRvbmUgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksICAvLy9cbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gIGZvckVhY2goZXZlbnRMaXN0ZW5lcnMsIChldmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50OiBoYW5kbGVyRWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICBlbGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBlbGVtZW50LCBkb25lKTtcbiAgfSwgZG9uZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZHJvcCxcbiAgZHJhZ091dCxcbiAgZHJhZ092ZXIsXG4gIG9uRHJvcCxcbiAgb2ZmRHJvcCxcbiAgb25EcmFnT3V0LFxuICBvZmZEcmFnT3V0LFxuICBvbkRyYWdPdmVyLFxuICBvZmZEcmFnT3ZlcixcbiAgZW5hYmxlRHJvcCxcbiAgZGlzYWJsZURyb3AsXG4gIGNhbGxIYW5kbGVycyxcbiAgY2FsbEhhbmRsZXJzQXN5bmNcbn1cblxuZnVuY3Rpb24gbW91c2VPdXRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgZHJhZ0VsZW1lbnQgfSA9IGdsb2JhbFRoaXM7XG5cbiAgaWYgKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZHJvcEVsZW1lbnQgPSBudWxsOyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgZHJvcEVsZW1lbnRcbiAgICB9KTtcblxuICAgIHRoaXMuZHJhZ091dChkcmFnRWxlbWVudCk7XG4gIH1cblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gbW91c2VPdmVySGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICBjb25zdCB7IGRyYWdFbGVtZW50IH0gPSBnbG9iYWxUaGlzO1xuXG4gIGlmIChkcmFnRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRyb3BFbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIGRyb3BFbGVtZW50XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYWdPdmVyKGRyYWdFbGVtZW50KTtcbiAgfVxuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuIl0sIm5hbWVzIjpbImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJEUk9QX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiRFJBR19PVVRfRVZFTlRfVFlQRSIsIkRSQUdfT1ZFUl9FVkVOVF9UWVBFIiwiZHJvcEVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJnbG9iYWxUaGlzIiwiZHJvcCIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImRvbmUiLCJldmVudFR5cGUiLCJjYWxsSGFuZGxlcnNBc3luYyIsImRyYWdPdXQiLCJjYWxsSGFuZGxlcnMiLCJkcmFnT3ZlciIsIm9uRHJvcCIsImRyb3BIYW5kbGVyIiwiZWxlbWVudCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmRHJvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkRyYWdPdXQiLCJkcmFnT3V0SGFuZGxlciIsIm9mZkRyYWdPdXQiLCJvbkRyYWdPdmVyIiwiZHJhZ092ZXJIYW5kbGVyIiwib2ZmRHJhZ092ZXIiLCJlbmFibGVEcm9wIiwicHJvcGVydGllcyIsIm9uTW91c2VPdXQiLCJtb3VzZU91dEhhbmRsZXIiLCJvbk1vdXNlT3ZlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJkaXNhYmxlRHJvcCIsIm9mZk1vdXNlT3V0Iiwib2ZmTW91c2VPdmVyIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJldmVudExpc3RlbmVyIiwiaGFuZGxlckVsZW1lbnQiLCJjYWxsIiwicG9wIiwibmV4dCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4SEE7OztlQUFBOzs7b0JBNUgyQjt5QkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTSxBQUFFQSxVQUFZQyxnQ0FBcUIsQ0FBakNELFNBQ0FFLGtCQUErREMsZ0JBQVUsQ0FBekVELGlCQUFpQkUsc0JBQThDRCxnQkFBVSxDQUF4REMscUJBQXFCQyx1QkFBeUJGLGdCQUFVLENBQW5DRTtBQUU5QyxJQUFNQyxjQUFjLElBQUk7QUFFeEJDLE9B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