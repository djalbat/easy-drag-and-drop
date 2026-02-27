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
const _index = require("../../../index");
const _style = /*#__PURE__*/ _interop_require_default(require("../../style"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2Ryb3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGRyb3BNaXhpbnMgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVcIjtcblxuY2xhc3MgRHJvcERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBkcm9wQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGRvbmUpID0+IHtcbiAgICBpZiAoZHJhZ0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGRyYWdFbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIGRyYWdPdXRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRyYWctb3ZlclwiKTtcbiAgfVxuXG4gIGRyYWdPdmVyQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJkcmFnLW92ZXJcIik7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRHJvcCh0aGlzLmRyb3BDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ091dCh0aGlzLmRyYWdPdXRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ092ZXIodGhpcy5kcmFnT3ZlckN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21Ecm9wKHRoaXMuZHJvcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ091dCh0aGlzLmRyYWdPdXRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdPdmVyKHRoaXMuZHJhZ092ZXJDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFwiRFJPUCBFTEVNRU5UXCI7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwicmVmZXJlbmNlXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRyb3BcIixcbiAgICByZWZlcmVuY2U6IFwiZHJvcC1kaXZcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKERyb3BEaXYucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyb3BEaXYpYFxuXG4gICR7c3R5bGV9XG5cbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBcbiAgLmRyYWctb3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiRHJvcERpdiIsIkVsZW1lbnQiLCJkcm9wQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImRvbmUiLCJyZW1vdmUiLCJkcmFnT3V0Q3VzdG9tSGFuZGxlciIsInJlbW92ZUNsYXNzIiwiZHJhZ092ZXJDdXN0b21IYW5kbGVyIiwiYWRkQ2xhc3MiLCJnZXRSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25DdXN0b21Ecm9wIiwib25DdXN0b21EcmFnT3V0Iiwib25DdXN0b21EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZDdXN0b21Ecm9wIiwib2ZmQ3VzdG9tRHJhZ091dCIsIm9mZkN1c3RvbURyYWdPdmVyIiwiY2hpbGRFbGVtZW50cyIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyIsIndpdGhTdHlsZSIsInN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrRUE7OztlQUFBOzs7c0VBaEVzQjtzQkFFRTt1QkFDRzs4REFFVDs7Ozs7O0FBRWxCLE1BQU1BLGdCQUFnQkMsYUFBTztJQUMzQkMsb0JBQW9CLENBQUNDLE9BQU9DLFNBQVNDLGFBQWFDLFNBQVNDO1FBQ3pELElBQUlGLGdCQUFnQixNQUFNO1lBQ3hCQSxZQUFZRyxNQUFNO1FBQ3BCO1FBRUFEO0lBQ0YsRUFBQztJQUVERSx1QkFBdUIsQ0FBQ04sT0FBT0M7UUFDN0IsSUFBSSxDQUFDTSxXQUFXLENBQUM7SUFDbkIsRUFBQztJQUVEQyx3QkFBd0IsQ0FBQ1IsT0FBT0M7UUFDOUIsSUFBSSxDQUFDUSxRQUFRLENBQUM7SUFDaEIsRUFBQztJQUVEQyxlQUFlO1FBQ2IsTUFBTSxFQUFFQyxZQUFZLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQ0MsVUFBVTtRQUU1QyxPQUFPRDtJQUNUO0lBRUFFLFdBQVc7UUFDVCxJQUFJLENBQUNDLFVBQVU7UUFFZixJQUFJLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUNoQixpQkFBaUI7UUFDeEMsSUFBSSxDQUFDaUIsZUFBZSxDQUFDLElBQUksQ0FBQ1Ysb0JBQW9CO1FBQzlDLElBQUksQ0FBQ1csZ0JBQWdCLENBQUMsSUFBSSxDQUFDVCxxQkFBcUI7SUFDbEQ7SUFFQVUsY0FBYztRQUNaLElBQUksQ0FBQ0MsV0FBVztRQUVoQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNyQixpQkFBaUI7UUFDekMsSUFBSSxDQUFDc0IsZ0JBQWdCLENBQUMsSUFBSSxDQUFDZixvQkFBb0I7UUFDL0MsSUFBSSxDQUFDZ0IsaUJBQWlCLENBQUMsSUFBSSxDQUFDZCxxQkFBcUI7SUFDbkQ7SUFFQWUsZ0JBQWdCO1FBQ2QsT0FBTztJQUNUO0lBRUEsT0FBT0MsVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QjtLQUNELENBQUM7SUFFRixPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7UUFDWGhCLFdBQVc7SUFDYixFQUFFO0FBQ0o7QUFFQWlCLE9BQU9DLE1BQU0sQ0FBQ2hDLFFBQVFpQyxTQUFTLEVBQUVDLGlCQUFVO01BRTNDLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNuQyxRQUFRLENBQUM7O0VBRWhDLEVBQUVvQyxjQUFLLENBQUM7Ozs7Ozs7OztBQVNWLENBQUMifQ==