"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _index = require("../../index");
var _style = _interopRequireDefault(require("../style"));
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
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
var DBLCLICK_EVENT_TYPE = _easy.eventTypes.DBLCLICK_EVENT_TYPE;
var DragDiv = /*#__PURE__*/ function(DragElement) {
    _inherits(DragDiv, DragElement);
    var _super = _createSuper(DragDiv);
    function DragDiv() {
        _classCallCheck(this, DragDiv);
        return _super.apply(this, arguments);
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
                this.on(DBLCLICK_EVENT_TYPE, this.doubleClickHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.off(DBLCLICK_EVENT_TYPE, this.doubleClickHandler, this);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9kcmFnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcmFnTWl4aW5zLCBEcmFnRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZVwiO1xuXG5jb25zdCB7IERCTENMSUNLX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XG5cbmNsYXNzIERyYWdEaXYgZXh0ZW5kcyBEcmFnRWxlbWVudCB7XG4gIGRvdWJsZUNsaWNrSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiZG91YmxlIGNsaWNrIVwiKVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVEcmFnKCk7XG5cbiAgICB0aGlzLm9uKERCTENMSUNLX0VWRU5UX1RZUEUsIHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmKERCTENMSUNLX0VWRU5UX1RZUEUsIHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcIkRSQUcgRUxFTUVOVFwiKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRyYWdcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKERyYWdEaXYucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdEaXYpYFxuXG4gICR7c3R5bGV9XG4gIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIFxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiREJMQ0xJQ0tfRVZFTlRfVFlQRSIsImV2ZW50VHlwZXMiLCJEcmFnRGl2IiwiZG91YmxlQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImRpZE1vdW50IiwiZW5hYmxlRHJhZyIsIm9uIiwid2lsbFVubW91bnQiLCJvZmYiLCJkaXNhYmxlRHJhZyIsImNoaWxkRWxlbWVudHMiLCJEcmFnRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyYWdNaXhpbnMiLCJ3aXRoU3R5bGUiLCJzdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRVosSUFBQSxLQUFNLFdBQU4sTUFBTSxDQUFBO0FBQ08sSUFBQSxNQUFhLFdBQWIsYUFBYSxDQUFBO0FBRW5DLElBQUEsTUFBVSxrQ0FBVixVQUFVLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTSxBQUFFQSxtQkFBbUIsR0FBS0MsS0FBVSxXQUFBLENBQWxDRCxtQkFBbUIsQUFBZSxBQUFDO0FBRTNDLElBQUEsQUFBTUUsT0FBTyxpQkE0QlYsQUE1Qkg7OzthQUFNQSxPQUFPOzs7Ozs7WUFDWEMsR0FBa0IsRUFBbEJBLG9CQUFrQjttQkFBbEJBLFNBQUFBLGtCQUFrQixDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtnQkFDakNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQzthQUM3Qjs7O1lBRURDLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULElBQUksQ0FBQ0MsVUFBVSxFQUFFLENBQUM7Z0JBRWxCLElBQUksQ0FBQ0MsRUFBRSxDQUFDVixtQkFBbUIsRUFBRSxJQUFJLENBQUNHLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzdEOzs7WUFFRFEsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osSUFBSSxDQUFDQyxHQUFHLENBQUNaLG1CQUFtQixFQUFFLElBQUksQ0FBQ0csa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRTdELElBQUksQ0FBQ1UsV0FBVyxFQUFFLENBQUM7YUFDcEI7OztZQUVEQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxPQUFRLGNBQWMsQ0FBRTthQUN6Qjs7OztDQU9GLENBMUJxQkMsTUFBVyxZQUFBLENBMEJoQztBQUxDLGdCQXJCSWIsT0FBTyxFQXFCSmMsU0FBTyxFQUFHLEtBQUssQ0FBQztBQUV2QixnQkF2QklkLE9BQU8sRUF1QkplLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsTUFBTTtDQUNsQixDQUFDO0FBR0pDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDbEIsT0FBTyxDQUFDbUIsU0FBUyxFQUFFQyxNQUFVLFdBQUEsQ0FBQyxDQUFDO2VBRTlCQyxDQUFBQSxHQUFBQSxjQUFTLEFBQVMsQ0FBQSxRQUFULENBQUNyQixPQUFPLENBQUMsb0JBRTdCc0IsTUFBSyxRQUFBIn0=