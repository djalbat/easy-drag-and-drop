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
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _index = require("../../index");
const _style = /*#__PURE__*/ _interop_require_default(require("../style"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DragDiv extends _index.DragElement {
    doubleClickHandler = (event, element)=>{
        console.log("double click!");
    };
    didMount() {
        this.enableDrag();
        this.onDoubleClick(this.doubleClickHandler, this);
    }
    willUnmount() {
        this.offDoubleClick(this.doubleClickHandler, this);
        this.disableDrag();
    }
    childElements() {
        return "DRAG ELEMENT";
    }
    static tagName = "div";
    static defaultProperties = {
        className: "drag"
    };
}
Object.assign(DragDiv.prototype, _index.dragMixins);
const _default = (0, _easywithstyle.default)(DragDiv)`

  ${_style.default}
  
  background-color: red;
  
  .dragging {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9kcmFnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgZHJhZ01peGlucywgRHJhZ0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVcIjtcblxuY2xhc3MgRHJhZ0RpdiBleHRlbmRzIERyYWdFbGVtZW50IHtcbiAgZG91YmxlQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkb3VibGUgY2xpY2shXCIpXG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcblxuICAgIHRoaXMub25Eb3VibGVDbGljayh0aGlzLmRvdWJsZUNsaWNrSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZkRvdWJsZUNsaWNrKHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcIkRSQUcgRUxFTUVOVFwiKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRyYWdcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKERyYWdEaXYucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdEaXYpYFxuXG4gICR7c3R5bGV9XG4gIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIFxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiRHJhZ0RpdiIsIkRyYWdFbGVtZW50IiwiZG91YmxlQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImRpZE1vdW50IiwiZW5hYmxlRHJhZyIsIm9uRG91YmxlQ2xpY2siLCJ3aWxsVW5tb3VudCIsIm9mZkRvdWJsZUNsaWNrIiwiZGlzYWJsZURyYWciLCJjaGlsZEVsZW1lbnRzIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSIsInN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQ0E7OztlQUFBOzs7c0VBcENzQjt1QkFFa0I7OERBRXRCOzs7Ozs7QUFFbEIsTUFBTUEsZ0JBQWdCQyxrQkFBVztJQUMvQkMscUJBQXFCLENBQUNDLE9BQU9DO1FBQzNCQyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFDO0lBRURDLFdBQVc7UUFDVCxJQUFJLENBQUNDLFVBQVU7UUFFZixJQUFJLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNQLGtCQUFrQixFQUFFLElBQUk7SUFDbEQ7SUFFQVEsY0FBYztRQUNaLElBQUksQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBQ1Qsa0JBQWtCLEVBQUUsSUFBSTtRQUVqRCxJQUFJLENBQUNVLFdBQVc7SUFDbEI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBUTtJQUNWO0lBRUEsT0FBT0MsVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtBQUVBQyxPQUFPQyxNQUFNLENBQUNsQixRQUFRbUIsU0FBUyxFQUFFQyxpQkFBVTtNQUUzQyxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDckIsUUFBUSxDQUFDOztFQUVoQyxFQUFFc0IsY0FBSyxDQUFDOzs7Ozs7Ozs7O0FBVVYsQ0FBQyJ9