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
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        return _call_super(this, View, arguments);
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
                        onCustopmDrag: dragCustomHandler,
                        onCustomStopDrag: stopDragCustomHandler,
                        onCustomStartDrag: startDragCustomHandler,
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
function dragCustomHandler(event, element) {
    console.log("drag");
}
function stopDragCustomHandler(event, element, dropElement, aborted, done) {
    console.log("...stop drag ".concat(aborted));
    done();
}
function startDragCustomHandler(event, element) {
    console.log("start drag...");
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRHJhZ0RpdiBmcm9tIFwiLi9kaXYvZHJhZ1wiO1xuaW1wb3J0IERyb3BEaXYgZnJvbSBcIi4vZGl2L2Ryb3BcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBbXG4gICAgICBcImRyb3AtZGl2XCJcbiAgICBdO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxEcm9wRGl2Lz4sXG4gICAgICA8RHJhZ0RpdiBvbkN1c3RvcG1EcmFnPXtkcmFnQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21TdG9wRHJhZz17c3RvcERyYWdDdXN0b21IYW5kbGVyfSBvbkN1c3RvbVN0YXJ0RHJhZz17c3RhcnREcmFnQ3VzdG9tSGFuZGxlcn0gcmVmZXJlbmNlcz17cmVmZXJlbmNlc30gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmZ1bmN0aW9uIGRyYWdDdXN0b21IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnNvbGUubG9nKFwiZHJhZ1wiKVxufVxuXG5mdW5jdGlvbiBzdG9wRHJhZ0N1c3RvbUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGRyb3BFbGVtZW50LCBhYm9ydGVkLCBkb25lKSB7XG4gIGNvbnNvbGUubG9nKGAuLi5zdG9wIGRyYWcgJHthYm9ydGVkfWApXG5cbiAgZG9uZSgpO1xufVxuXG5mdW5jdGlvbiBzdGFydERyYWdDdXN0b21IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnNvbGUubG9nKFwic3RhcnQgZHJhZy4uLlwiKVxufVxuIl0sIm5hbWVzIjpbIlZpZXciLCJjaGlsZEVsZW1lbnRzIiwicmVmZXJlbmNlcyIsIkRyb3BEaXYiLCJEcmFnRGl2Iiwib25DdXN0b3BtRHJhZyIsImRyYWdDdXN0b21IYW5kbGVyIiwib25DdXN0b21TdG9wRHJhZyIsInN0b3BEcmFnQ3VzdG9tSGFuZGxlciIsIm9uQ3VzdG9tU3RhcnREcmFnIiwic3RhcnREcmFnQ3VzdG9tSGFuZGxlciIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJldmVudCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7b0JBTEc7MkRBRUo7MkRBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhO29CQUNqQjtpQkFDRDtnQkFFRCxPQUFRO2tDQUVOLG9CQUFDQyxhQUFPO2tDQUNSLG9CQUFDQyxhQUFPO3dCQUFDQyxlQUFlQzt3QkFBbUJDLGtCQUFrQkM7d0JBQXVCQyxtQkFBbUJDO3dCQUF3QlIsWUFBWUE7O2lCQUU1STtZQUNIOzs7V0FabUJGO3FCQUFhVyxhQUFPO0FBY3ZDLGlCQWRtQlgsTUFjWlksV0FBVTtBQUVqQixpQkFoQm1CWixNQWdCWmEscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7QUFHRixTQUFTUixrQkFBa0JTLEtBQUssRUFBRUMsT0FBTztJQUN2Q0MsUUFBUUMsR0FBRyxDQUFDO0FBQ2Q7QUFFQSxTQUFTVixzQkFBc0JPLEtBQUssRUFBRUMsT0FBTyxFQUFFRyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsSUFBSTtJQUN2RUosUUFBUUMsR0FBRyxDQUFDLEFBQUMsZ0JBQXVCLE9BQVJFO0lBRTVCQztBQUNGO0FBRUEsU0FBU1gsdUJBQXVCSyxLQUFLLEVBQUVDLE9BQU87SUFDNUNDLFFBQVFDLEdBQUcsQ0FBQztBQUNkIn0=