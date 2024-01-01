"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return View;
    }
});
var _easy = require("easy");
var _drag = /*#__PURE__*/ _interop_require_default(require("./div/drag"));
var _drop = /*#__PURE__*/ _interop_require_default(require("./div/drop"));
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
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        return _super.apply(this, arguments);
    }
    _create_class(View, [
        {
            key: "childElements",
            value: function childElements() {
                var references = [
                    "drop-div"
                ];
                return [
                    /*#__PURE__*/ React.createElement(_drop.default, null),
                    /*#__PURE__*/ React.createElement(_drag.default, {
                        onDrag: dragHandler,
                        onStopDrag: stopDragHandler,
                        onStartDrag: startDragHandler,
                        references: references
                    })
                ];
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
function dragHandler(element) {
    console.log("drag");
}
function stopDragHandler(dropElement, aborted, element, done) {
    console.log("...stop drag ".concat(aborted));
    done();
}
function startDragHandler(element) {
    console.log("start drag...");
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRHJhZ0RpdiBmcm9tIFwiLi9kaXYvZHJhZ1wiO1xuaW1wb3J0IERyb3BEaXYgZnJvbSBcIi4vZGl2L2Ryb3BcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBbXG4gICAgICBcImRyb3AtZGl2XCJcbiAgICBdO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxEcm9wRGl2Lz4sXG4gICAgICA8RHJhZ0RpdiBvbkRyYWc9e2RyYWdIYW5kbGVyfSBvblN0b3BEcmFnPXtzdG9wRHJhZ0hhbmRsZXJ9IG9uU3RhcnREcmFnPXtzdGFydERyYWdIYW5kbGVyfSByZWZlcmVuY2VzPXtyZWZlcmVuY2VzfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZnVuY3Rpb24gZHJhZ0hhbmRsZXIoZWxlbWVudCkge1xuICBjb25zb2xlLmxvZyhcImRyYWdcIilcbn1cblxuZnVuY3Rpb24gc3RvcERyYWdIYW5kbGVyKGRyb3BFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSB7XG4gIGNvbnNvbGUubG9nKGAuLi5zdG9wIGRyYWcgJHthYm9ydGVkfWApXG5cbiAgZG9uZSgpO1xufVxuXG5mdW5jdGlvbiBzdGFydERyYWdIYW5kbGVyKGVsZW1lbnQpIHtcbiAgY29uc29sZS5sb2coXCJzdGFydCBkcmFnLi4uXCIpXG59XG4iXSwibmFtZXMiOlsiVmlldyIsImNoaWxkRWxlbWVudHMiLCJyZWZlcmVuY2VzIiwiRHJvcERpdiIsIkRyYWdEaXYiLCJvbkRyYWciLCJkcmFnSGFuZGxlciIsIm9uU3RvcERyYWciLCJzdG9wRHJhZ0hhbmRsZXIiLCJvblN0YXJ0RHJhZyIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJkcm9wRWxlbWVudCIsImFib3J0ZWQiLCJkb25lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztvQkFMRzsyREFFSjsyREFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSxxQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYTtvQkFDakI7aUJBQ0Q7Z0JBRUQsT0FBUTtrQ0FFTixvQkFBQ0MsYUFBTztrQ0FDUixvQkFBQ0MsYUFBTzt3QkFBQ0MsUUFBUUM7d0JBQWFDLFlBQVlDO3dCQUFpQkMsYUFBYUM7d0JBQWtCUixZQUFZQTs7aUJBRXZHO1lBQ0g7OztXQVptQkY7cUJBQWFXLGFBQU87QUFjdkMsaUJBZG1CWCxNQWNaWSxXQUFVO0FBRWpCLGlCQWhCbUJaLE1BZ0JaYSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtBQUdGLFNBQVNSLFlBQVlTLE9BQU87SUFDMUJDLFFBQVFDLEdBQUcsQ0FBQztBQUNkO0FBRUEsU0FBU1QsZ0JBQWdCVSxXQUFXLEVBQUVDLE9BQU8sRUFBRUosT0FBTyxFQUFFSyxJQUFJO0lBQzFESixRQUFRQyxHQUFHLENBQUMsQUFBQyxnQkFBdUIsT0FBUkU7SUFFNUJDO0FBQ0Y7QUFFQSxTQUFTVixpQkFBaUJLLE9BQU87SUFDL0JDLFFBQVFDLEdBQUcsQ0FBQztBQUNkIn0=