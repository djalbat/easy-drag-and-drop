"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return View;
    }
});
const _easy = require("easy");
const _drag = /*#__PURE__*/ _interop_require_default(require("./div/drag"));
const _drop = /*#__PURE__*/ _interop_require_default(require("./div/drop"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class View extends _easy.Element {
    childElements() {
        const references = [
            "drop-div"
        ];
        return [
            /*#__PURE__*/ React.createElement(_drop.default, null),
            /*#__PURE__*/ React.createElement(_drag.default, {
                onCustopmDrag: dragCustomHandler,
                onCustomStopDrag: stopDragCustomHandler,
                onCustomStartDrag: startDragCustomHandler,
                references: references
            })
        ];
    }
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}
function dragCustomHandler(event, element) {
    console.log("drag");
}
function stopDragCustomHandler(event, element, dropElement, aborted, done) {
    console.log(`...stop drag ${aborted}`);
    done();
}
function startDragCustomHandler(event, element) {
    console.log("start drag...");
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRHJhZ0RpdiBmcm9tIFwiLi9kaXYvZHJhZ1wiO1xuaW1wb3J0IERyb3BEaXYgZnJvbSBcIi4vZGl2L2Ryb3BcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBbXG4gICAgICBcImRyb3AtZGl2XCJcbiAgICBdO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxEcm9wRGl2Lz4sXG4gICAgICA8RHJhZ0RpdiBvbkN1c3RvcG1EcmFnPXtkcmFnQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21TdG9wRHJhZz17c3RvcERyYWdDdXN0b21IYW5kbGVyfSBvbkN1c3RvbVN0YXJ0RHJhZz17c3RhcnREcmFnQ3VzdG9tSGFuZGxlcn0gcmVmZXJlbmNlcz17cmVmZXJlbmNlc30gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmZ1bmN0aW9uIGRyYWdDdXN0b21IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnNvbGUubG9nKFwiZHJhZ1wiKVxufVxuXG5mdW5jdGlvbiBzdG9wRHJhZ0N1c3RvbUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGRyb3BFbGVtZW50LCBhYm9ydGVkLCBkb25lKSB7XG4gIGNvbnNvbGUubG9nKGAuLi5zdG9wIGRyYWcgJHthYm9ydGVkfWApXG5cbiAgZG9uZSgpO1xufVxuXG5mdW5jdGlvbiBzdGFydERyYWdDdXN0b21IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnNvbGUubG9nKFwic3RhcnQgZHJhZy4uLlwiKVxufVxuIl0sIm5hbWVzIjpbIlZpZXciLCJFbGVtZW50IiwiY2hpbGRFbGVtZW50cyIsInJlZmVyZW5jZXMiLCJEcm9wRGl2IiwiRHJhZ0RpdiIsIm9uQ3VzdG9wbURyYWciLCJkcmFnQ3VzdG9tSGFuZGxlciIsIm9uQ3VzdG9tU3RvcERyYWciLCJzdG9wRHJhZ0N1c3RvbUhhbmRsZXIiLCJvbkN1c3RvbVN0YXJ0RHJhZyIsInN0YXJ0RHJhZ0N1c3RvbUhhbmRsZXIiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJldmVudCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztzQkFMRzs2REFFSjs2REFDQTs7Ozs7O0FBRUwsTUFBTUEsYUFBYUMsYUFBTztJQUN2Q0MsZ0JBQWdCO1FBQ2QsTUFBTUMsYUFBYTtZQUNqQjtTQUNEO1FBRUQsT0FBUTswQkFFTixvQkFBQ0MsYUFBTzswQkFDUixvQkFBQ0MsYUFBTztnQkFBQ0MsZUFBZUM7Z0JBQW1CQyxrQkFBa0JDO2dCQUF1QkMsbUJBQW1CQztnQkFBd0JSLFlBQVlBOztTQUU1STtJQUNIO0lBRUEsT0FBT1MsVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtBQUVBLFNBQVNQLGtCQUFrQlEsS0FBSyxFQUFFQyxPQUFPO0lBQ3ZDQyxRQUFRQyxHQUFHLENBQUM7QUFDZDtBQUVBLFNBQVNULHNCQUFzQk0sS0FBSyxFQUFFQyxPQUFPLEVBQUVHLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxJQUFJO0lBQ3ZFSixRQUFRQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUVFLFNBQVM7SUFFckNDO0FBQ0Y7QUFFQSxTQUFTVix1QkFBdUJJLEtBQUssRUFBRUMsT0FBTztJQUM1Q0MsUUFBUUMsR0FBRyxDQUFDO0FBQ2QifQ==