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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _index = require("../../index");
var _style = /*#__PURE__*/ _interop_require_default(require("../style"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
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
    var _super = _create_super(DragDiv);
    function DragDiv() {
        _class_call_check(this, DragDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "doubleClickHandler", function(event, element) {
            console.log("double click!");
        });
        return _this;
    }
    _create_class(DragDiv, [
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
_define_property(DragDiv, "tagName", "div");
_define_property(DragDiv, "defaultProperties", {
    className: "drag"
});
Object.assign(DragDiv.prototype, _index.dragMixins);
var _default = (0, _easywithstyle.default)(DragDiv)(_templateObject(), _style.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9kcmFnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcmFnTWl4aW5zLCBEcmFnRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZVwiO1xuXG5jb25zdCB7IERCTENMSUNLX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XG5cbmNsYXNzIERyYWdEaXYgZXh0ZW5kcyBEcmFnRWxlbWVudCB7XG4gIGRvdWJsZUNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZG91YmxlIGNsaWNrIVwiKVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVEcmFnKCk7XG5cbiAgICB0aGlzLm9uKERCTENMSUNLX0VWRU5UX1RZUEUsIHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmKERCTENMSUNLX0VWRU5UX1RZUEUsIHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcIkRSQUcgRUxFTUVOVFwiKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRyYWdcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKERyYWdEaXYucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdEaXYpYFxuXG4gICR7c3R5bGV9XG4gIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIFxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiREJMQ0xJQ0tfRVZFTlRfVFlQRSIsImV2ZW50VHlwZXMiLCJEcmFnRGl2IiwiZG91YmxlQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImRpZE1vdW50IiwiZW5hYmxlRHJhZyIsIm9uIiwid2lsbFVubW91bnQiLCJvZmYiLCJkaXNhYmxlRHJhZyIsImNoaWxkRWxlbWVudHMiLCJEcmFnRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyYWdNaXhpbnMiLCJ3aXRoU3R5bGUiLCJzdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUNBOzs7ZUFBQTs7O29FQXZDc0I7b0JBRUs7cUJBQ2E7NERBRXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQU0sQUFBRUEsc0JBQXdCQyxnQkFBVSxDQUFsQ0Q7QUFFUixJQUFBLEFBQU1FLHdCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSxzQkFBcUIsU0FBQ0MsT0FBT0M7WUFDM0JDLFFBQVFDLEdBQUcsQ0FBQztRQUNkOzs7a0JBSElMOztZQUtKTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxVQUFVO2dCQUVmLElBQUksQ0FBQ0MsRUFBRSxDQUFDVixxQkFBcUIsSUFBSSxDQUFDRyxrQkFBa0IsRUFBRSxJQUFJO1lBQzVEOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDWixxQkFBcUIsSUFBSSxDQUFDRyxrQkFBa0IsRUFBRSxJQUFJO2dCQUUzRCxJQUFJLENBQUNVLFdBQVc7WUFDbEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBUTtZQUNWOzs7V0FuQklaO0VBQWdCYSxrQkFBVztBQXFCL0IsaUJBckJJYixTQXFCR2MsV0FBVTtBQUVqQixpQkF2QklkLFNBdUJHZSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtBQUdGQyxPQUFPQyxNQUFNLENBQUNsQixRQUFRbUIsU0FBUyxFQUFFQyxpQkFBVTtJQUUzQyxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDckIsNEJBRXJCc0IsY0FBSyJ9