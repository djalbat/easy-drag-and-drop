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
        var dropElement = this; ///
        Object.assign(globalThis, {
            dropElement: dropElement
        });
        this.dragOver(dragElement);
    }
    event.stopPropagation();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZHJvcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiIDtcblxuaW1wb3J0IHsgRFJPUF9FVkVOVF9UWVBFLCBEUkFHX09VVF9FVkVOVF9UWVBFLCBEUkFHX09WRVJfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5jb25zdCBkcm9wRWxlbWVudCA9IG51bGw7XG5cbk9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICBkcm9wRWxlbWVudFxufSk7XG5cbmZ1bmN0aW9uIGRyb3AoZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGRvbmUpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRFJPUF9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuY2FsbEhhbmRsZXJzQXN5bmMoZXZlbnRUeXBlLCBkcmFnRWxlbWVudCwgYWJvcnRlZCwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIGRyYWdPdXQoZHJhZ0VsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19PVVRfRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxIYW5kbGVycyhldmVudFR5cGUsIGRyYWdFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZHJhZ092ZXIoZHJhZ0VsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19PVkVSX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBkcmFnRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uRHJvcChkcm9wSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUk9QX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSBkcm9wSGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZEcm9wKGRyb3BIYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERST1BfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IGRyb3BIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uRHJhZ091dChkcmFnT3V0SGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUkFHX09VVF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gZHJhZ091dEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmRHJhZ091dChkcmFnT3V0SGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUkFHX09VVF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gZHJhZ091dEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25EcmFnT3ZlcihkcmFnT3ZlckhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19PVkVSX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSBkcmFnT3ZlckhhbmRsZXI7ICAvLy9cblxuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmRHJhZ092ZXIoZHJhZ092ZXJIYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERSQUdfT1ZFUl9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gZHJhZ092ZXJIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURyb3AoKSB7XG4gIGNvbnN0IHsgb25Ecm9wLCBvbkRyYWdPdXQsIG9uRHJhZ092ZXIgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgZHJvcEhhbmRsZXIgPSBvbkRyb3AsIC8vL1xuICAgICAgICBkcmFnT3V0SGFuZGxlciA9IG9uRHJhZ091dCwgLy8vXG4gICAgICAgIGRyYWdPdmVySGFuZGxlciA9IG9uRHJhZ092ZXI7IC8vL1xuXG4gIGRyb3BIYW5kbGVyICYmIHRoaXMub25Ecm9wKGRyb3BIYW5kbGVyKTtcbiAgZHJhZ091dEhhbmRsZXIgJiYgdGhpcy5vbkRyYWdPdXQoZHJhZ091dEhhbmRsZXIpO1xuICBkcmFnT3ZlckhhbmRsZXIgJiYgdGhpcy5vbkRyYWdPdmVyKGRyYWdPdmVySGFuZGxlcik7XG5cbiAgdGhpcy5vbk1vdXNlT3V0KG1vdXNlT3V0SGFuZGxlciwgdGhpcyk7XG4gIHRoaXMub25Nb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVEcm9wKCkge1xuICBjb25zdCB7IG9uRHJvcCwgb25EcmFnT3V0LCBvbkRyYWdPdmVyIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgIGRyb3BIYW5kbGVyID0gb25Ecm9wLCAvLy9cbiAgICAgICAgZHJhZ091dEhhbmRsZXIgPSBvbkRyYWdPdXQsIC8vL1xuICAgICAgICBkcmFnT3ZlckhhbmRsZXIgPSBvbkRyYWdPdmVyOyAvLy9cblxuICBkcm9wSGFuZGxlciAmJiB0aGlzLm9mZkRyb3AoZHJvcEhhbmRsZXIpO1xuICBkcmFnT3V0SGFuZGxlciAmJiB0aGlzLm9mZkRyYWdPdXQoZHJhZ091dEhhbmRsZXIpO1xuICBkcmFnT3ZlckhhbmRsZXIgJiYgdGhpcy5vZmZEcmFnT3ZlcihkcmFnT3ZlckhhbmRsZXIpO1xuXG4gIHRoaXMub2ZmTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCB0aGlzKTtcbiAgdGhpcy5vZmZNb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIGNhbGxIYW5kbGVycyhldmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudDogaGFuZGxlckVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsbEhhbmRsZXJzQXN5bmMoZXZlbnRUeXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgZG9uZSA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgIC8vL1xuICAgICAgICBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgZm9yRWFjaChldmVudExpc3RlbmVycywgKGV2ZW50TGlzdGVuZXIsIG5leHQpID0+IHtcbiAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQ6IGhhbmRsZXJFbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBkb25lID0gbmV4dDsgIC8vL1xuXG4gICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQsIGRvbmUpO1xuICB9LCBkb25lKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBkcm9wLFxuICBkcmFnT3V0LFxuICBkcmFnT3ZlcixcbiAgb25Ecm9wLFxuICBvZmZEcm9wLFxuICBvbkRyYWdPdXQsXG4gIG9mZkRyYWdPdXQsXG4gIG9uRHJhZ092ZXIsXG4gIG9mZkRyYWdPdmVyLFxuICBlbmFibGVEcm9wLFxuICBkaXNhYmxlRHJvcCxcbiAgY2FsbEhhbmRsZXJzLFxuICBjYWxsSGFuZGxlcnNBc3luY1xufVxuXG5mdW5jdGlvbiBtb3VzZU91dEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBkcmFnRWxlbWVudCB9ID0gZ2xvYmFsVGhpcztcblxuICBpZiAoZHJhZ0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBkcm9wRWxlbWVudCA9IG51bGw7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBkcm9wRWxlbWVudFxuICAgIH0pO1xuXG4gICAgdGhpcy5kcmFnT3V0KGRyYWdFbGVtZW50KTtcbiAgfVxuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBtb3VzZU92ZXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgZHJhZ0VsZW1lbnQgfSA9IGdsb2JhbFRoaXM7XG5cbiAgaWYgKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZHJvcEVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgZHJvcEVsZW1lbnRcbiAgICB9KTtcblxuICAgIHRoaXMuZHJhZ092ZXIoZHJhZ0VsZW1lbnQpO1xuICB9XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG4iXSwibmFtZXMiOlsiZm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRyb3BFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiZ2xvYmFsVGhpcyIsImRyb3AiLCJkcmFnRWxlbWVudCIsImFib3J0ZWQiLCJkb25lIiwiZXZlbnRUeXBlIiwiRFJPUF9FVkVOVF9UWVBFIiwiY2FsbEhhbmRsZXJzQXN5bmMiLCJkcmFnT3V0IiwiRFJBR19PVVRfRVZFTlRfVFlQRSIsImNhbGxIYW5kbGVycyIsImRyYWdPdmVyIiwiRFJBR19PVkVSX0VWRU5UX1RZUEUiLCJvbkRyb3AiLCJkcm9wSGFuZGxlciIsImVsZW1lbnQiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZkRyb3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25EcmFnT3V0IiwiZHJhZ091dEhhbmRsZXIiLCJvZmZEcmFnT3V0Iiwib25EcmFnT3ZlciIsImRyYWdPdmVySGFuZGxlciIsIm9mZkRyYWdPdmVyIiwiZW5hYmxlRHJvcCIsInByb3BlcnRpZXMiLCJvbk1vdXNlT3V0IiwibW91c2VPdXRIYW5kbGVyIiwib25Nb3VzZU92ZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwiZGlzYWJsZURyb3AiLCJvZmZNb3VzZU91dCIsIm9mZk1vdXNlT3ZlciIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZXZlbnRMaXN0ZW5lciIsImhhbmRsZXJFbGVtZW50IiwiY2FsbCIsInBvcCIsIm5leHQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOEhBOzs7ZUFBQTs7O3lCQTVIc0M7MEJBRXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRSxJQUFNLEFBQUVBLFVBQVlDLGdDQUFxQixDQUFqQ0Q7QUFFUixJQUFNRSxjQUFjLElBQUk7QUFFeEJDLE9BQU9DLE1BQU0sQ0FBQ0MsWUFBWTtJQUN4QkgsYUFBQUE7QUFDRjtBQUVBLFNBQVNJLEtBQUtDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUU7SUFDeEMsSUFBTUMsWUFBWUMsMkJBQWU7SUFFakMsSUFBSSxD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