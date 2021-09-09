"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
var dropElement = null;
Object.assign(globalThis, {
    dropElement: dropElement
});
function drop(dragElement) {
    var eventType = _eventTypes.DROP_EVENT_TYPE;
    this.callHandlers(eventType, dragElement);
}
function dragOut(dragElement) {
    var eventType = _eventTypes.DRAG_OUT_EVENT_TYPE;
    this.callHandlers(eventType, dragElement);
}
function dragOver() {
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
    var _properties = this.properties, onDrop = _properties.onDrop, onDragOut = _properties.onDragOut, onDragOver = _properties.onDragOver, dropHandler = onDrop, dragOutHandler = onDragOut, dragOverHandler = onDragOver; ///
    dropHandler && this.onDrop(dropHandler);
    dragOutHandler && this.onDragOut(dragOutHandler);
    dragOverHandler && this.onDragOver(dragOverHandler);
    this.onMouseOut(mouseOutHandler, this);
    this.onMouseOver(mouseOverHandler, this);
}
function disableDrop() {
    var _properties = this.properties, onDrop = _properties.onDrop, onDragOut = _properties.onDragOut, onDragOver = _properties.onDragOver, dropHandler = onDrop, dragOutHandler = onDragOut, dragOverHandler = onDragOver; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZHJvcC5qcyJdLCJuYW1lcyI6WyJEUk9QX0VWRU5UX1RZUEUiLCJEUkFHX09VVF9FVkVOVF9UWVBFIiwiRFJBR19PVkVSX0VWRU5UX1RZUEUiLCJkcm9wRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsImdsb2JhbFRoaXMiLCJkcm9wIiwiZHJhZ0VsZW1lbnQiLCJldmVudFR5cGUiLCJjYWxsSGFuZGxlcnMiLCJkcmFnT3V0IiwiZHJhZ092ZXIiLCJvbkRyb3AiLCJkcm9wSGFuZGxlciIsImVsZW1lbnQiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZkRyb3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25EcmFnT3V0IiwiZHJhZ091dEhhbmRsZXIiLCJvZmZEcmFnT3V0Iiwib25EcmFnT3ZlciIsImRyYWdPdmVySGFuZGxlciIsIm9mZkRyYWdPdmVyIiwiZW5hYmxlRHJvcCIsInByb3BlcnRpZXMiLCJvbk1vdXNlT3V0IiwibW91c2VPdXRIYW5kbGVyIiwib25Nb3VzZU92ZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwiZGlzYWJsZURyb3AiLCJvZmZNb3VzZU91dCIsIm9mZk1vdXNlT3ZlciIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImV2ZW50TGlzdGVuZXIiLCJjYWxsIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRStELEdBQWUsQ0FBZixXQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzR3RGLFFBQU87QUFwR1gsR0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJO0FBRXhCLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekIsV0FBVyxFQUFYLFdBQVc7QUFDYixDQUFDO1NBRVEsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFCLEdBQUssQ0FBQyxTQUFT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