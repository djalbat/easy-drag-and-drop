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
const _index = require("../../../index");
const _style = /*#__PURE__*/ _interop_require_default(require("../../style"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBkcmFnTWl4aW5zLCBEcmFnRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZVwiO1xuXG5jbGFzcyBEcmFnRGl2IGV4dGVuZHMgRHJhZ0VsZW1lbnQge1xuICBkb3VibGVDbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRvdWJsZSBjbGljayFcIilcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlRHJhZygpO1xuXG4gICAgdGhpcy5vbkRvdWJsZUNsaWNrKHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmRG91YmxlQ2xpY2sodGhpcy5kb3VibGVDbGlja0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFwiRFJBRyBFTEVNRU5UXCIpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZHJhZ1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRHJhZ0Rpdi5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0RpdilgXG5cbiAgJHtzdHlsZX1cbiAgXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6WyJEcmFnRGl2IiwiRHJhZ0VsZW1lbnQiLCJkb3VibGVDbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZGlkTW91bnQiLCJlbmFibGVEcmFnIiwib25Eb3VibGVDbGljayIsIndpbGxVbm1vdW50Iiwib2ZmRG91YmxlQ2xpY2siLCJkaXNhYmxlRHJhZyIsImNoaWxkRWxlbWVudHMiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcmFnTWl4aW5zIiwid2l0aFN0eWxlIiwic3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNDQTs7O2VBQUE7OztzRUFwQ3NCO3VCQUVrQjs4REFFdEI7Ozs7OztBQUVsQixNQUFNQSxnQkFBZ0JDLGtCQUFXO0lBQy9CQyxxQkFBcUIsQ0FBQ0MsT0FBT0M7UUFDM0JDLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUM7SUFFREMsV0FBVztRQUNULElBQUksQ0FBQ0MsVUFBVTtRQUVmLElBQUksQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQ1Asa0JBQWtCLEVBQUUsSUFBSTtJQUNsRDtJQUVBUSxjQUFjO1FBQ1osSUFBSSxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFDVCxrQkFBa0IsRUFBRSxJQUFJO1FBRWpELElBQUksQ0FBQ1UsV0FBVztJQUNsQjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFRO0lBQ1Y7SUFFQSxPQUFPQyxVQUFVLE1BQU07SUFFdkIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO0FBRUFDLE9BQU9DLE1BQU0sQ0FBQ2xCLFFBQVFtQixTQUFTLEVBQUVDLGlCQUFVO01BRTNDLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNyQixRQUFRLENBQUM7O0VBRWhDLEVBQUVzQixjQUFLLENBQUM7Ozs7Ozs7Ozs7QUFVVixDQUFDIn0=