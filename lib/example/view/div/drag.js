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
var _index = require("../../../index");
var _style = /*#__PURE__*/ _interop_require_default(require("../../style"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
var DragDiv = /*#__PURE__*/ function(DragElement) {
    _inherits(DragDiv, DragElement);
    function DragDiv() {
        _class_call_check(this, DragDiv);
        var _this;
        _this = _call_super(this, DragDiv, arguments), _define_property(_this, "doubleClickHandler", function(event, element) {
            console.log("double click!");
        });
        return _this;
    }
    _create_class(DragDiv, [
        {
            key: "didMount",
            value: function didMount() {
                this.enableDrag();
                this.onDoubleClick(this.doubleClickHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offDoubleClick(this.doubleClickHandler, this);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBkcmFnTWl4aW5zLCBEcmFnRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZVwiO1xuXG5jbGFzcyBEcmFnRGl2IGV4dGVuZHMgRHJhZ0VsZW1lbnQge1xuICBkb3VibGVDbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRvdWJsZSBjbGljayFcIilcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlRHJhZygpO1xuXG4gICAgdGhpcy5vbkRvdWJsZUNsaWNrKHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmRG91YmxlQ2xpY2sodGhpcy5kb3VibGVDbGlja0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFwiRFJBRyBFTEVNRU5UXCIpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZHJhZ1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRHJhZ0Rpdi5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0RpdilgXG5cbiAgJHtzdHlsZX1cbiAgXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6WyJEcmFnRGl2IiwiZG91YmxlQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImRpZE1vdW50IiwiZW5hYmxlRHJhZyIsIm9uRG91YmxlQ2xpY2siLCJ3aWxsVW5tb3VudCIsIm9mZkRvdWJsZUNsaWNrIiwiZGlzYWJsZURyYWciLCJjaGlsZEVsZW1lbnRzIiwiRHJhZ0VsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcmFnTWl4aW5zIiwid2l0aFN0eWxlIiwic3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNDQTs7O2VBQUE7OztvRUFwQ3NCO3FCQUVrQjs0REFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSx3QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxxQkFDSkMsd0JBQUFBLHNCQUFxQixTQUFDQyxPQUFPQztZQUMzQkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7OztrQkFISUw7O1lBS0pNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLFVBQVU7Z0JBRWYsSUFBSSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDUCxrQkFBa0IsRUFBRSxJQUFJO1lBQ2xEOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBQ1Qsa0JBQWtCLEVBQUUsSUFBSTtnQkFFakQsSUFBSSxDQUFDVSxXQUFXO1lBQ2xCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7WUFDVjs7O1dBbkJJWjtFQUFnQmEsa0JBQVc7QUFxQi9CLGlCQXJCSWIsU0FxQkdjLFdBQVU7QUFFakIsaUJBdkJJZCxTQXVCR2UscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7QUFHRkMsT0FBT0MsTUFBTSxDQUFDbEIsUUFBUW1CLFNBQVMsRUFBRUMsaUJBQVU7SUFFM0MsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3JCLDRCQUVyQnNCLGNBQUsifQ==