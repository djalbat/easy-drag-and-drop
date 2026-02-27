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
const _index = require("../../index");
const _style = /*#__PURE__*/ _interop_require_default(require("../style"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DropDiv extends _easy.Element {
    dropCustomHandler = (event, element, dragElement, aborted, done)=>{
        if (dragElement !== null) {
            dragElement.remove();
        }
        done();
    };
    dragOutCustomHandler = (event, element)=>{
        this.removeClass("drag-over");
    };
    dragOverCustomHandler = (event, element)=>{
        this.addClass("drag-over");
    };
    getReference() {
        const { reference = null } = this.properties;
        return reference;
    }
    didMount() {
        this.enableDrop();
        this.onCustomDrop(this.dropCustomHandler);
        this.onCustomDragOut(this.dragOutCustomHandler);
        this.onCustomDragOver(this.dragOverCustomHandler);
    }
    willUnmount() {
        this.disableDrop();
        this.offCustomDrop(this.dropCustomHandler);
        this.offCustomDragOut(this.dragOutCustomHandler);
        this.offCustomDragOver(this.dragOverCustomHandler);
    }
    childElements() {
        return "DROP ELEMENT";
    }
    static tagName = "div";
    static ignoredProperties = [
        "reference"
    ];
    static defaultProperties = {
        className: "drop",
        reference: "drop-div"
    };
}
Object.assign(DropDiv.prototype, _index.dropMixins);
const _default = (0, _easywithstyle.default)(DropDiv)`

  ${_style.default}

  margin-bottom: 10rem;
  background-color: green;
  
  .drag-over {
    background-color: blue;
  }
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9kcm9wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlXCI7XG5cbmNsYXNzIERyb3BEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZHJvcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGRyYWdFbGVtZW50LCBhYm9ydGVkLCBkb25lKSA9PiB7XG4gICAgaWYgKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBkcmFnRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBkcmFnT3V0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnLW92ZXJcIik7XG4gIH1cblxuICBkcmFnT3ZlckN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZHJhZy1vdmVyXCIpO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkN1c3RvbURyb3AodGhpcy5kcm9wQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdPdXQodGhpcy5kcmFnT3V0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdPdmVyKHRoaXMuZHJhZ092ZXJDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJvcCh0aGlzLmRyb3BDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdPdXQodGhpcy5kcmFnT3V0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnT3Zlcih0aGlzLmRyYWdPdmVyQ3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBcIkRST1AgRUxFTUVOVFwiO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcInJlZmVyZW5jZVwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkcm9wXCIsXG4gICAgcmVmZXJlbmNlOiBcImRyb3AtZGl2XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEcm9wRGl2LnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcm9wRGl2KWBcblxuICAke3N0eWxlfVxuXG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgXG4gIC5kcmFnLW92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkRyb3BEaXYiLCJFbGVtZW50IiwiZHJvcEN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkcmFnRWxlbWVudCIsImFib3J0ZWQiLCJkb25lIiwicmVtb3ZlIiwiZHJhZ091dEN1c3RvbUhhbmRsZXIiLCJyZW1vdmVDbGFzcyIsImRyYWdPdmVyQ3VzdG9tSGFuZGxlciIsImFkZENsYXNzIiwiZ2V0UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicHJvcGVydGllcyIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uQ3VzdG9tRHJvcCIsIm9uQ3VzdG9tRHJhZ091dCIsIm9uQ3VzdG9tRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmQ3VzdG9tRHJvcCIsIm9mZkN1c3RvbURyYWdPdXQiLCJvZmZDdXN0b21EcmFnT3ZlciIsImNoaWxkRWxlbWVudHMiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyb3BNaXhpbnMiLCJ3aXRoU3R5bGUiLCJzdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0VBOzs7ZUFBQTs7O3NFQWhFc0I7c0JBRUU7dUJBQ0c7OERBRVQ7Ozs7OztBQUVsQixNQUFNQSxnQkFBZ0JDLGFBQU87SUFDM0JDLG9CQUFvQixDQUFDQyxPQUFPQyxTQUFTQyxhQUFhQyxTQUFTQztRQUN6RCxJQUFJRixnQkFBZ0IsTUFBTTtZQUN4QkEsWUFBWUcsTUFBTTtRQUNwQjtRQUVBRDtJQUNGLEVBQUM7SUFFREUsdUJBQXVCLENBQUNOLE9BQU9DO1FBQzdCLElBQUksQ0FBQ00sV0FBVyxDQUFDO0lBQ25CLEVBQUM7SUFFREMsd0JBQXdCLENBQUNSLE9BQU9DO1FBQzlCLElBQUksQ0FBQ1EsUUFBUSxDQUFDO0lBQ2hCLEVBQUM7SUFFREMsZUFBZTtRQUNiLE1BQU0sRUFBRUMsWUFBWSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUNDLFVBQVU7UUFFNUMsT0FBT0Q7SUFDVDtJQUVBRSxXQUFXO1FBQ1QsSUFBSSxDQUFDQyxVQUFVO1FBRWYsSUFBSSxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDaEIsaUJBQWlCO1FBQ3hDLElBQUksQ0FBQ2lCLGVBQWUsQ0FBQyxJQUFJLENBQUNWLG9CQUFvQjtRQUM5QyxJQUFJLENBQUNXLGdCQUFnQixDQUFDLElBQUksQ0FBQ1QscUJBQXFCO0lBQ2xEO0lBRUFVLGNBQWM7UUFDWixJQUFJLENBQUNDLFdBQVc7UUFFaEIsSUFBSSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDckIsaUJBQWlCO1FBQ3pDLElBQUksQ0FBQ3NCLGdCQUFnQixDQUFDLElBQUksQ0FBQ2Ysb0JBQW9CO1FBQy9DLElBQUksQ0FBQ2dCLGlCQUFpQixDQUFDLElBQUksQ0FBQ2QscUJBQXFCO0lBQ25EO0lBRUFlLGdCQUFnQjtRQUNkLE9BQU87SUFDVDtJQUVBLE9BQU9DLFVBQVUsTUFBTTtJQUV2QixPQUFPQyxvQkFBb0I7UUFDekI7S0FDRCxDQUFDO0lBRUYsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hoQixXQUFXO0lBQ2IsRUFBRTtBQUNKO0FBRUFpQixPQUFPQyxNQUFNLENBQUNoQyxRQUFRaUMsU0FBUyxFQUFFQyxpQkFBVTtNQUUzQyxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDbkMsUUFBUSxDQUFDOztFQUVoQyxFQUFFb0MsY0FBSyxDQUFDOzs7Ozs7Ozs7QUFTVixDQUFDIn0=