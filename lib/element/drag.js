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
const _easy = require("easy");
const _drag = /*#__PURE__*/ _interop_require_default(require("../mixins/drag"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DragElement extends _easy.Element {
    getReferences() {
        const { references = [] } = this.properties;
        return references;
    }
    didMount() {
        this.enableDrag();
    }
    willUnmount() {
        this.disableDrag();
    }
    static ignoredProperties = [
        "references"
    ];
}
Object.assign(DragElement.prototype, _drag.default);
const _default = (0, _easywithstyle.default)(DragElement)`

  .dragging {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGRyYWdNaXhpbnMgZnJvbSBcIi4uL21peGlucy9kcmFnXCI7XG5cbmNsYXNzIERyYWdFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVEcmFnKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJyZWZlcmVuY2VzXCJcbiAgXTtcbn1cblxuT2JqZWN0LmFzc2lnbihEcmFnRWxlbWVudC5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0VsZW1lbnQpYFxuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkRyYWdFbGVtZW50IiwiRWxlbWVudCIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwicHJvcGVydGllcyIsImRpZE1vdW50IiwiZW5hYmxlRHJhZyIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyYWciLCJpZ25vcmVkUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyYWdNaXhpbnMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThCQTs7O2VBQUE7OztzRUE1QnNCO3NCQUVFOzZEQUVEOzs7Ozs7QUFFdkIsTUFBTUEsb0JBQW9CQyxhQUFPO0lBQy9CQyxnQkFBZ0I7UUFDZCxNQUFNLEVBQUVDLGFBQWEsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDQyxVQUFVO1FBRTNDLE9BQU9EO0lBQ1Q7SUFFQUUsV0FBVztRQUNULElBQUksQ0FBQ0MsVUFBVTtJQUNqQjtJQUVBQyxjQUFjO1FBQ1osSUFBSSxDQUFDQyxXQUFXO0lBQ2xCO0lBRUEsT0FBT0Msb0JBQW9CO1FBQ3pCO0tBQ0QsQ0FBQztBQUNKO0FBRUFDLE9BQU9DLE1BQU0sQ0FBQ1gsWUFBWVksU0FBUyxFQUFFQyxhQUFVO01BRS9DLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNkLFlBQVksQ0FBQzs7Ozs7Ozs7QUFRdEMsQ0FBQyJ9