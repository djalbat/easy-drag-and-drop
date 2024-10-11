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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
        "\n\n  margin-bottom: 10rem;\n  background-color: green;\n  \n  .drag-over {\n    background-color: blue;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DropDiv = /*#__PURE__*/ function(Element) {
    _inherits(DropDiv, Element);
    function DropDiv() {
        _class_call_check(this, DropDiv);
        var _this;
        _this = _call_super(this, DropDiv, arguments), _define_property(_this, "dropCustomHandler", function(event, element, dragElement, aborted, done) {
            if (dragElement !== null) {
                dragElement.remove();
            }
            done();
        }), _define_property(_this, "dragOutCustomHandler", function(event, element) {
            _this.removeClass("drag-over");
        }), _define_property(_this, "dragOverCustomHandler", function(event, element) {
            _this.addClass("drag-over");
        });
        return _this;
    }
    _create_class(DropDiv, [
        {
            key: "getReference",
            value: function getReference() {
                var _this_properties = this.properties, _this_properties_reference = _this_properties.reference, reference = _this_properties_reference === void 0 ? null : _this_properties_reference;
                return reference;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.enableDrop();
                this.onCustomDrop(this.dropCustomHandler);
                this.onCustomDragOut(this.dragOutCustomHandler);
                this.onCustomDragOver(this.dragOverCustomHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDrop();
                this.offCustomDrop(this.dropCustomHandler);
                this.offCustomDragOut(this.dragOutCustomHandler);
                this.offCustomDragOver(this.dragOverCustomHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return "DROP ELEMENT";
            }
        }
    ]);
    return DropDiv;
}(_wrap_native_super(_easy.Element));
_define_property(DropDiv, "tagName", "div");
_define_property(DropDiv, "ignoredProperties", [
    "reference"
]);
_define_property(DropDiv, "defaultProperties", {
    className: "drop",
    reference: "drop-div"
});
Object.assign(DropDiv.prototype, _index.dropMixins);
var _default = (0, _easywithstyle.default)(DropDiv)(_templateObject(), _style.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2Ryb3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGRyb3BNaXhpbnMgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVcIjtcblxuY2xhc3MgRHJvcERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBkcm9wQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGRvbmUpID0+IHtcbiAgICBpZiAoZHJhZ0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGRyYWdFbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIGRyYWdPdXRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRyYWctb3ZlclwiKTtcbiAgfVxuXG4gIGRyYWdPdmVyQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJkcmFnLW92ZXJcIik7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRHJvcCh0aGlzLmRyb3BDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ091dCh0aGlzLmRyYWdPdXRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ092ZXIodGhpcy5kcmFnT3ZlckN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21Ecm9wKHRoaXMuZHJvcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ091dCh0aGlzLmRyYWdPdXRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdPdmVyKHRoaXMuZHJhZ092ZXJDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFwiRFJPUCBFTEVNRU5UXCI7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwicmVmZXJlbmNlXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRyb3BcIixcbiAgICByZWZlcmVuY2U6IFwiZHJvcC1kaXZcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKERyb3BEaXYucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyb3BEaXYpYFxuXG4gICR7c3R5bGV9XG5cbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBcbiAgLmRyYWctb3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiRHJvcERpdiIsImRyb3BDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsInJlbW92ZSIsImRyYWdPdXRDdXN0b21IYW5kbGVyIiwicmVtb3ZlQ2xhc3MiLCJkcmFnT3ZlckN1c3RvbUhhbmRsZXIiLCJhZGRDbGFzcyIsImdldFJlZmVyZW5jZSIsInByb3BlcnRpZXMiLCJyZWZlcmVuY2UiLCJkaWRNb3VudCIsImVuYWJsZURyb3AiLCJvbkN1c3RvbURyb3AiLCJvbkN1c3RvbURyYWdPdXQiLCJvbkN1c3RvbURyYWdPdmVyIiwid2lsbFVubW91bnQiLCJkaXNhYmxlRHJvcCIsIm9mZkN1c3RvbURyb3AiLCJvZmZDdXN0b21EcmFnT3V0Iiwib2ZmQ3VzdG9tRHJhZ092ZXIiLCJjaGlsZEVsZW1lbnRzIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyIsIndpdGhTdHlsZSIsInN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrRUE7OztlQUFBOzs7b0VBaEVzQjtvQkFFRTtxQkFDRzs0REFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSx3QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2tDQUFBQSxxQkFDSkMsd0JBQUFBLHFCQUFvQixTQUFDQyxPQUFPQyxTQUFTQyxhQUFhQyxTQUFTQztZQUN6RCxJQUFJRixnQkFBZ0IsTUFBTTtnQkFDeEJBLFlBQVlHLE1BQU07WUFDcEI7WUFFQUQ7UUFDRixJQUVBRSx3QkFBQUEsd0JBQXVCLFNBQUNOLE9BQU9DO1lBQzdCLE1BQUtNLFdBQVcsQ0FBQztRQUNuQixJQUVBQyx3QkFBQUEseUJBQXdCLFNBQUNSLE9BQU9DO1lBQzlCLE1BQUtRLFFBQVEsQ0FBQztRQUNoQjs7O2tCQWZJWDs7WUFpQkpZLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUE2QixtQkFBQSxJQUFJLENBQUNDLFVBQVUsK0JBQWYsaUJBQXJCQyxXQUFBQSxvREFBWTtnQkFFcEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLFVBQVU7Z0JBRWYsSUFBSSxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDaEIsaUJBQWlCO2dCQUN4QyxJQUFJLENBQUNpQixlQUFlLENBQUMsSUFBSSxDQUFDVixvQkFBb0I7Z0JBQzlDLElBQUksQ0FBQ1csZ0JBQWdCLENBQUMsSUFBSSxDQUFDVCxxQkFBcUI7WUFDbEQ7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxXQUFXO2dCQUVoQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNyQixpQkFBaUI7Z0JBQ3pDLElBQUksQ0FBQ3NCLGdCQUFnQixDQUFDLElBQUksQ0FBQ2Ysb0JBQW9CO2dCQUMvQyxJQUFJLENBQUNnQixpQkFBaUIsQ0FBQyxJQUFJLENBQUNkLHFCQUFxQjtZQUNuRDs7O1lBRUFlLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPO1lBQ1Q7OztXQXpDSXpCO3FCQUFnQjBCLGFBQU87QUEyQzNCLGlCQTNDSTFCLFNBMkNHMkIsV0FBVTtBQUVqQixpQkE3Q0kzQixTQTZDRzRCLHFCQUFvQjtJQUN6QjtDQUNEO0FBRUQsaUJBakRJNUIsU0FpREc2QixxQkFBb0I7SUFDekJDLFdBQVc7SUFDWGhCLFdBQVc7QUFDYjtBQUdGaUIsT0FBT0MsTUFBTSxDQUFDaEMsUUFBUWlDLFNBQVMsRUFBRUMsaUJBQVU7SUFFM0MsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ25DLDRCQUVyQm9DLGNBQUsifQ==