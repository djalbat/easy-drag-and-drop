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
var _reference = require("../utilities/reference");
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
var forEach = _necessary.asynchronousUtilities.forEach;
var dropElement = null;
Object.assign(globalThis, {
    dropElement: dropElement
});
function drop(dragElement, aborted, done) {
    var eventType = _eventTypes.DROP_EVENT_TYPE;
    this.callHandlersAsync(eventType, dragElement, aborted, done);
}
function dragOut(dragElement) {
    var eventType = _eventTypes.DRAG_OUT_EVENT_TYPE;
    this.callHandlers(eventType, dragElement);
}
function dragOver(dragElement) {
    var eventType = _eventTypes.DRAG_OVER_EVENT_TYPE;
    this.callHandlers(eventType, dragElement);
}
function onDrop(dropHandler, element) {
    var eventType = _eventTypes.DROP_EVENT_TYPE, handler = dropHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offDrop(dropHandler, element) {
    var eventType = _eventTypes.DROP_EVENT_TYPE, handler = dropHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function onDragOut(dragOutHandler, element) {
    var eventType = _eventTypes.DRAG_OUT_EVENT_TYPE, handler = dragOutHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offDragOut(dragOutHandler, element) {
    var eventType = _eventTypes.DRAG_OUT_EVENT_TYPE, handler = dragOutHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function onDragOver(dragOverHandler, element) {
    var eventType = _eventTypes.DRAG_OVER_EVENT_TYPE, handler = dragOverHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offDragOver(dragOverHandler, element) {
    var eventType = _eventTypes.DRAG_OVER_EVENT_TYPE, handler = dragOverHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function enableDrop() {
    var _this_properties = this.properties, _$onDrop = _this_properties.onDrop, _$onDragOut = _this_properties.onDragOut, _$onDragOver = _this_properties.onDragOver, dropHandler = _$onDrop, dragOutHandler = _$onDragOut, dragOverHandler = _$onDragOver; ///
    dropHandler && this.onDrop(dropHandler);
    dragOutHandler && this.onDragOut(dragOutHandler);
    dragOverHandler && this.onDragOver(dragOverHandler);
    this.onMouseOut(mouseOutHandler, this);
    this.onMouseOver(mouseOverHandler, this);
}
function disableDrop() {
    var _this_properties = this.properties, _$onDrop = _this_properties.onDrop, _$onDragOut = _this_properties.onDragOut, _$onDragOver = _this_properties.onDragOver, dropHandler = _$onDrop, dragOutHandler = _$onDragOut, dragOverHandler = _$onDragOver; ///
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
        var dropElement = this, dragElementIgnoresDropElement = (0, _reference.checkDragElementIgnoresDropElement)(dragElement, dropElement);
        if (dragElementIgnoresDropElement) {
            return;
        }
        Object.assign(globalThis, {
            dropElement: dropElement
        });
        this.dragOver(dragElement);
    }
    event.stopPropagation();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZHJvcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiIDtcblxuaW1wb3J0IHsgY2hlY2tEcmFnRWxlbWVudElnbm9yZXNEcm9wRWxlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcmVmZXJlbmNlXCI7XG5pbXBvcnQgeyBEUk9QX0VWRU5UX1RZUEUsIERSQUdfT1VUX0VWRU5UX1RZUEUsIERSQUdfT1ZFUl9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmNvbnN0IGRyb3BFbGVtZW50ID0gbnVsbDtcblxuT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gIGRyb3BFbGVtZW50XG59KTtcblxuZnVuY3Rpb24gZHJvcChkcmFnRWxlbWVudCwgYWJvcnRlZCwgZG9uZSkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUk9QX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsSGFuZGxlcnNBc3luYyhldmVudFR5cGUsIGRyYWdFbGVtZW50LCBhYm9ydGVkLCBkb25lKTtcbn1cblxuZnVuY3Rpb24gZHJhZ091dChkcmFnRWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUkFHX09VVF9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZHJhZ0VsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBkcmFnT3ZlcihkcmFnRWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUkFHX09WRVJfRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxIYW5kbGVycyhldmVudFR5cGUsIGRyYWdFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25Ecm9wKGRyb3BIYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERST1BfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IGRyb3BIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkRyb3AoZHJvcEhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRFJPUF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gZHJvcEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25EcmFnT3V0KGRyYWdPdXRIYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERSQUdfT1VUX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSBkcmFnT3V0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZEcmFnT3V0KGRyYWdPdXRIYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERSQUdfT1VUX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSBkcmFnT3V0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkRyYWdPdmVyKGRyYWdPdmVySGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUkFHX09WRVJfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IGRyYWdPdmVySGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZEcmFnT3ZlcihkcmFnT3ZlckhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19PVkVSX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSBkcmFnT3ZlckhhbmRsZXI7ICAvLy9cblxuICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRHJvcCgpIHtcbiAgY29uc3QgeyBvbkRyb3AsIG9uRHJhZ091dCwgb25EcmFnT3ZlciB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICBkcm9wSGFuZGxlciA9IG9uRHJvcCwgLy8vXG4gICAgICAgIGRyYWdPdXRIYW5kbGVyID0gb25EcmFnT3V0LCAvLy9cbiAgICAgICAgZHJhZ092ZXJIYW5kbGVyID0gb25EcmFnT3ZlcjsgLy8vXG5cbiAgZHJvcEhhbmRsZXIgJiYgdGhpcy5vbkRyb3AoZHJvcEhhbmRsZXIpO1xuICBkcmFnT3V0SGFuZGxlciAmJiB0aGlzLm9uRHJhZ091dChkcmFnT3V0SGFuZGxlcik7XG4gIGRyYWdPdmVySGFuZGxlciAmJiB0aGlzLm9uRHJhZ092ZXIoZHJhZ092ZXJIYW5kbGVyKTtcblxuICB0aGlzLm9uTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCB0aGlzKTtcbiAgdGhpcy5vbk1vdXNlT3Zlcihtb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZURyb3AoKSB7XG4gIGNvbnN0IHsgb25Ecm9wLCBvbkRyYWdPdXQsIG9uRHJhZ092ZXIgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgZHJvcEhhbmRsZXIgPSBvbkRyb3AsIC8vL1xuICAgICAgICBkcmFnT3V0SGFuZGxlciA9IG9uRHJhZ091dCwgLy8vXG4gICAgICAgIGRyYWdPdmVySGFuZGxlciA9IG9uRHJhZ092ZXI7IC8vL1xuXG4gIGRyb3BIYW5kbGVyICYmIHRoaXMub2ZmRHJvcChkcm9wSGFuZGxlcik7XG4gIGRyYWdPdXRIYW5kbGVyICYmIHRoaXMub2ZmRHJhZ091dChkcmFnT3V0SGFuZGxlcik7XG4gIGRyYWdPdmVySGFuZGxlciAmJiB0aGlzLm9mZkRyYWdPdmVyKGRyYWdPdmVySGFuZGxlcik7XG5cbiAgdGhpcy5vZmZNb3VzZU91dChtb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuICB0aGlzLm9mZk1vdXNlT3Zlcihtb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICBldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50OiBoYW5kbGVyRWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBoYW5kbGVyLmNhbGwoaGFuZGxlckVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjYWxsSGFuZGxlcnNBc3luYyhldmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBkb25lID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAgLy8vXG4gICAgICAgIGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICBmb3JFYWNoKGV2ZW50TGlzdGVuZXJzLCAoZXZlbnRMaXN0ZW5lciwgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudDogaGFuZGxlckVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgZWxlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGRvbmUgPSBuZXh0OyAgLy8vXG5cbiAgICBoYW5kbGVyLmNhbGwoaGFuZGxlckVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgZWxlbWVudCwgZG9uZSk7XG4gIH0sIGRvbmUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRyb3AsXG4gIGRyYWdPdXQsXG4gIGRyYWdPdmVyLFxuICBvbkRyb3AsXG4gIG9mZkRyb3AsXG4gIG9uRHJhZ091dCxcbiAgb2ZmRHJhZ091dCxcbiAgb25EcmFnT3ZlcixcbiAgb2ZmRHJhZ092ZXIsXG4gIGVuYWJsZURyb3AsXG4gIGRpc2FibGVEcm9wLFxuICBjYWxsSGFuZGxlcnMsXG4gIGNhbGxIYW5kbGVyc0FzeW5jXG59XG5cbmZ1bmN0aW9uIG1vdXNlT3V0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICBjb25zdCB7IGRyYWdFbGVtZW50IH0gPSBnbG9iYWxUaGlzO1xuXG4gIGlmIChkcmFnRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRyb3BFbGVtZW50ID0gbnVsbDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIGRyb3BFbGVtZW50XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYWdPdXQoZHJhZ0VsZW1lbnQpO1xuICB9XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlT3ZlckhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBkcmFnRWxlbWVudCB9ID0gZ2xvYmFsVGhpcztcblxuICBpZiAoZHJhZ0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBkcm9wRWxlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGRyYWdFbGVtZW50SWdub3Jlc0Ryb3BFbGVtZW50ID0gY2hlY2tEcmFnRWxlbWVudElnbm9yZXNEcm9wRWxlbWVudChkcmFnRWxlbWVudCwgZHJvcEVsZW1lbnQpO1xuXG4gICAgaWYgKGRyYWdFbGVtZW50SWdub3Jlc0Ryb3BFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBkcm9wRWxlbWVudFxuICAgIH0pO1xuXG4gICAgdGhpcy5kcmFnT3ZlcihkcmFnRWxlbWVudCk7XG4gIH1cblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cbiJdLCJuYW1lcyI6WyJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZHJvcEVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJnbG9iYWxUaGlzIiwiZHJvcCIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImRvbmUiLCJldmVudFR5cGUiLCJEUk9QX0VWRU5UX1RZUEUiLCJjYWxsSGFuZGxlcnNBc3luYyIsImRyYWdPdXQiLCJEUkFHX09VVF9FVkVOVF9UWVBFIiwiY2FsbEhhbmRsZXJzIiwiZHJhZ092ZXIiLCJEUkFHX09WRVJfRVZFTlRfVFlQRSIsIm9uRHJvcCIsImRyb3BIYW5kbGVyIiwiZWxlbWVudCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmRHJvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkRyYWdPdXQiLCJkcmFnT3V0SGFuZGxlciIsIm9mZkRyYWdPdXQiLCJvbkRyYWdPdmVyIiwiZHJhZ092ZXJIYW5kbGVyIiwib2ZmRHJhZ092ZXIiLCJlbmFibGVEcm9wIiwicHJvcGVydGllcyIsIm9uTW91c2VPdXQiLCJtb3VzZU91dEhhbmRsZXIiLCJvbk1vdXNlT3ZlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJkaXNhYmxlRHJvcCIsIm9mZk1vdXNlT3V0Iiwib2ZmTW91c2VPdmVyIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJldmVudExpc3RlbmVyIiwiaGFuZGxlckVsZW1lbnQiLCJjYWxsIiwicG9wIiwibmV4dCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZHJhZ0VsZW1lbnRJZ25v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