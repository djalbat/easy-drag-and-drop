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
    this.onMouseOut(mouseOutHandler, this);
    this.onMouseOver(mouseOverHandler, this);
}
function disableDrop() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZHJvcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRFJPUCwgRFJBR19PVVQsIERSQUdfT1ZFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgZHJvcEVsZW1lbnQgPSBudWxsO1xuXG5PYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgZHJvcEVsZW1lbnRcbn0pO1xuXG5mdW5jdGlvbiBkcm9wKGRyYWdFbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERST1A7XG5cbiAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBkcmFnRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdPdXQoZHJhZ0VsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19PVVQ7XG5cbiAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBkcmFnRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdPdmVyKCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUkFHX09WRVI7XG5cbiAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBkcmFnRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uRHJvcChkcm9wSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUk9QLFxuICAgICAgICBoYW5kbGVyID0gZHJvcEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmRHJvcChkcm9wSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUk9QLFxuICAgICAgICBoYW5kbGVyID0gZHJvcEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25EcmFnT3V0KGRyYWdPdXRIYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERSQUdfT1VULFxuICAgICAgICBoYW5kbGVyID0gZHJhZ091dEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmRHJhZ091dChkcmFnT3V0SGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUkFHX09VVCxcbiAgICAgICAgaGFuZGxlciA9IGRyYWdPdXRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uRHJhZ092ZXIoZHJhZ092ZXJIYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERSQUdfT1ZFUixcbiAgICAgICAgaGFuZGxlciA9IGRyYWdPdmVySGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZEcmFnT3ZlcihkcmFnT3ZlckhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19PVkVSLFxuICAgICAgICBoYW5kbGVyID0gZHJhZ092ZXJIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURyb3AoKSB7XG4gIHRoaXMub25Nb3VzZU91dChtb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuICB0aGlzLm9uTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlRHJvcCgpIHtcbiAgdGhpcy5vZmZNb3VzZU91dChtb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuICB0aGlzLm9mZk1vdXNlT3Zlcihtb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICBldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyO1xuXG4gICAgaGFuZGxlci5jYWxsKGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRyb3AsXG4gIGRyYWdPdXQsXG4gIGRyYWdPdmVyLFxuICBvbkRyb3AsXG4gIG9mZkRyb3AsXG4gIG9uRHJhZ091dCxcbiAgb2ZmRHJhZ091dCxcbiAgb25EcmFnT3ZlcixcbiAgb2ZmRHJhZ092ZXIsXG4gIGVuYWJsZURyb3AsXG4gIGRpc2FibGVEcm9wLFxuICBjYWxsSGFuZGxlcnNcbn1cblxuZnVuY3Rpb24gbW91c2VPdXRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgZHJhZ0VsZW1lbnQgfSA9IGdsb2JhbFRoaXM7XG5cbiAgaWYgKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZHJvcEVsZW1lbnQgPSBudWxsOyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgZHJvcEVsZW1lbnRcbiAgICB9KTtcblxuICAgIHRoaXMuZHJhZ091dChkcmFnRWxlbWVudCk7XG4gIH1cblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gbW91c2VPdmVySGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICBjb25zdCB7IGRyYWdFbGVtZW50IH0gPSBnbG9iYWxUaGlzO1xuXG4gIGlmIChkcmFnRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRyb3BFbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIGRyb3BFbGVtZW50XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYWdPdmVyKGRyYWdFbGVtZW50KTtcbiAgfVxuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRThCLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvRnBELFFBQU87QUFsRlgsR0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJO0FBRXhCLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVTtJQUN0QixXQUFXLEVBQVgsV0FBVzs7U0FHSixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUIsR0FBSyxDQUFDLFNBQVMsR0FUeUIsVUFBYztTQVdqRCxZQUFZLENBQUMsU0FBUyxFQUFFLFdBQVc7QUFDMUMsQ0FBQztTQUVRLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixHQUFLLENBQUMsU0FBUyxHQWZ5QixVQUFjO1NBaUJqRCxZQUFZLENBQUMsU0FBUyxFQUFFLFdBQVc7QUFDMUMsQ0FBQztTQUVRLFFBQVEsR0FBRyxDQUFDO0lBQ25CLEdBQUssQ0FBQyxTQUFTLEdBckJ5QixVQUFjO1NBdUJqRCxZQUFZLENBQUMsU0FBUyxFQUFFLFdBQVc7QUFDMUMsQ0FBQztTQUVRLE1BQU0sQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDckMsR0FBSyxDQUFDLFNBQVMsR0EzQnlCLFVBQWMsT0E0QmhELE9BQU8sR0FBRyxXQUFXLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1NBRTVCLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTztBQUNuRCxDQUFDO1NBRVEs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