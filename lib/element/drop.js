"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DropElement;
    }
});
const _easy = require("easy");
const _drop = /*#__PURE__*/ _interop_require_default(require("../mixins/drop"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DropElement extends _easy.Element {
    getReference() {
        const { reference = null } = this.properties;
        return reference;
    }
    didMount() {
        this.enableDrop();
    }
    willUnmount() {
        this.disableDrop();
    }
    static ignoredProperties = [
        "reference"
    ];
}
Object.assign(DropElement.prototype, _drop.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Ryb3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgZHJvcE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2Ryb3BcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwicmVmZXJlbmNlXCJcbiAgXTtcbn1cblxuT2JqZWN0LmFzc2lnbihEcm9wRWxlbWVudC5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuIl0sIm5hbWVzIjpbIkRyb3BFbGVtZW50IiwiRWxlbWVudCIsImdldFJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInByb3BlcnRpZXMiLCJkaWRNb3VudCIsImVuYWJsZURyb3AiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwiaWdub3JlZFByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O3NCQUpHOzZEQUVEOzs7Ozs7QUFFUixNQUFNQSxvQkFBb0JDLGFBQU87SUFDOUNDLGVBQWU7UUFDYixNQUFNLEVBQUVDLFlBQVksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDQyxVQUFVO1FBRTVDLE9BQU9EO0lBQ1Q7SUFFQUUsV0FBVztRQUNULElBQUksQ0FBQ0MsVUFBVTtJQUNqQjtJQUVBQyxjQUFjO1FBQ1osSUFBSSxDQUFDQyxXQUFXO0lBQ2xCO0lBRUEsT0FBT0Msb0JBQW9CO1FBQ3pCO0tBQ0QsQ0FBQztBQUNKO0FBRUFDLE9BQU9DLE1BQU0sQ0FBQ1gsWUFBWVksU0FBUyxFQUFFQyxhQUFVIn0=