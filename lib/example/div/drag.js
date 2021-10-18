"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _index = require("../../index");
var _style = _interopRequireDefault(require("../style"));
var _eventTypes = require("../eventTypes");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  ",
        "\n  \n  background-color: red;\n  \n  .dragging {\n    z-index: 1;\n    position: fixed;\n    pointer-events: none;\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DragDiv = /*#__PURE__*/ function(DragElement) {
    _inherits(DragDiv, DragElement);
    function DragDiv() {
        _classCallCheck(this, DragDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(DragDiv).apply(this, arguments));
    }
    _createClass(DragDiv, [
        {
            key: "doubleClickHandler",
            value: function doubleClickHandler(event, element) {
                console.log("double click!");
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.enableDrag();
                this.on(_eventTypes.DBLCLICK_EVENT_TYPE, this.doubleClickHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.off(_eventTypes.DBLCLICK_EVENT_TYPE, this.doubleClickHandler, this);
                this.disableDrag();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return "DRAG ELEMENT";
            }
        }
    ]);
    return DragDiv;
}(_index.DragElement);
_defineProperty(DragDiv, "tagName", "div");
_defineProperty(DragDiv, "defaultProperties", {
    className: "drag"
});
Object.assign(DragDiv.prototype, _index.dragMixins);
var _default = (0, _easyWithStyle).default(DragDiv)(_templateObject(), _style.default);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9kcmFnLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsImRyYWdNaXhpbnMiLCJEcmFnRWxlbWVudCIsInN0eWxlIiwiREJMQ0xJQ0tfRVZFTlRfVFlQRSIsIkRyYWdEaXYiLCJkb3VibGVDbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZGlkTW91bnQiLCJlbmFibGVEcmFnIiwib24iLCJ3aWxsVW5tb3VudCIsIm9mZiIsImRpc2FibGVEcmFnIiwiY2hpbGRFbGVtZW50cyIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVDLEdBQWEsQ0FBYixNQUFhO0FBRW5DLEdBQVUsQ0FBVixNQUFVO0FBRVEsR0FBZSxDQUFmLFdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFnQ2pCLENBRWhDO1FBQVEsQ0FVVjs7Ozs7OztJQTFDTSxPQUFPLGlCQUFiLFFBQVE7Y0FBRixPQUFPO2FBQVAsT0FBTzs4QkFBUCxPQUFPO2dFQUFQLE9BQU87O2lCQUFQLE9BQU87O1lBQ1gsR0FBa0IsRUFBbEIsQ0FBa0I7bUJBQWxCLFFBQVEsQ0FBUixrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBZTtZQUM3QixDQUFDOzs7WUFFRCxHQUFRLEVBQVIsQ0FBUTttQkFBUixRQUFRLENBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLFVBQVU7Z0JBRWYsSUFBSSxDQUFDLEVBQUUsQ0FWeUIsV0FBZSxzQkFVbEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUk7WUFDNUQsQ0FBQzs7O1lBRUQsR0FBVyxFQUFYLENBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsR0FBRyxDQUFDO2dCQUNiLElBQUksQ0FBQyxHQUFHLENBZHdCLFdBQWUsc0JBY2pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJO2dCQUUzRCxJQUFJLENBQUMsV0FBVztZQUNsQixDQUFDOzs7WUFFRCxHQUFhLEVBQWIsQ0FBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsTUFBTSxDQUFFLENBQWM7WUFDeEIsQ0FBQzs7O1dBbkJHLE9BQU87RUFOMkIsTUFBYTtnQkFNL0MsT0FBTyxFQXFCSixDQUFPLFVBQUcsQ0FBSztnQkFyQmxCLE9BQU8sRUF1QkosQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixTQUFTLEVBQUUsQ0FBTTtBQUNuQixDQUFDO0FBR0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQWxDUyxNQUFhO21CQUYvQixjQUFpQixVQXNDZCxPQUFPLHFCQWxDZCxNQUFVIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBkcmFnTWl4aW5zLCBEcmFnRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZVwiO1xuXG5pbXBvcnQgeyBEQkxDTElDS19FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuY2xhc3MgRHJhZ0RpdiBleHRlbmRzIERyYWdFbGVtZW50IHtcbiAgZG91YmxlQ2xpY2tIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJkb3VibGUgY2xpY2shXCIpXG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcblxuICAgIHRoaXMub24oREJMQ0xJQ0tfRVZFTlRfVFlQRSwgdGhpcy5kb3VibGVDbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmYoREJMQ0xJQ0tfRVZFTlRfVFlQRSwgdGhpcy5kb3VibGVDbGlja0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFwiRFJBRyBFTEVNRU5UXCIpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZHJhZ1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRHJhZ0Rpdi5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0RpdilgXG5cbiAgJHtzdHlsZX1cbiAgXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuYDtcbiJdfQ==