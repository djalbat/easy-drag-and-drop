"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _drag = _interopRequireDefault(require("./div/drag"));
var _drop = _interopRequireDefault(require("./div/drop"));
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
        "\n\n  padding: 10rem;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        return _super.apply(this, arguments);
    }
    _createClass(View, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_drop.default, null),
                    /*#__PURE__*/ React.createElement(_drag.default, {
                        onDrag: dragHandler,
                        onStopDrag: stopDragHandler,
                        onStartDrag: startDragHandler
                    })
                ];
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRHJhZ0RpdiBmcm9tIFwiLi9kaXYvZHJhZ1wiO1xuaW1wb3J0IERyb3BEaXYgZnJvbSBcIi4vZGl2L2Ryb3BcIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8RHJvcERpdi8+LFxuICAgICAgPERyYWdEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0gb25TdG9wRHJhZz17c3RvcERyYWdIYW5kbGVyfSBvblN0YXJ0RHJhZz17c3RhcnREcmFnSGFuZGxlcn0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxMHJlbTtcbiAgICAgIFxuYDtcblxuZnVuY3Rpb24gZHJhZ0hhbmRsZXIoZWxlbWVudCkge1xuICBjb25zb2xlLmxvZyhcImRyYWdcIilcbn1cblxuZnVuY3Rpb24gc3RvcERyYWdIYW5kbGVyKGRyb3BFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSB7XG4gIGNvbnNvbGUubG9nKGAuLi5zdG9wIGRyYWcgJHthYm9ydGVkfWApXG5cbiAgZG9uZSgpO1xufVxuXG5mdW5jdGlvbiBzdGFydERyYWdIYW5kbGVyKGVsZW1lbnQpIHtcbiAgY29uc29sZS5sb2coXCJzdGFydCBkcmFnLi4uXCIpXG59XG4iXSwibmFtZXMiOlsiVmlldyIsImNoaWxkRWxlbWVudHMiLCJvbkRyYWciLCJkcmFnSGFuZGxlciIsIm9uU3RvcERyYWciLCJzdG9wRHJhZ0hhbmRsZXIiLCJvblN0YXJ0RHJhZyIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImRyb3BFbGVtZW50IiwiYWJvcnRlZCIsImRvbmUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUVWLEdBQVksQ0FBWixLQUFZO0FBQ1osR0FBWSxDQUFaLEtBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW1CRCxDQUkvQjs7Ozs7OztJQXJCTUEsSUFBSSxpQkFBVixRQUFRO2NBQUZBLElBQUk7OEJBQUpBLElBQUk7YUFBSkEsSUFBSTs4QkFBSkEsSUFBSTs7O2lCQUFKQSxJQUFJOztZQUNSQyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsTUFBTSxDQUFFLENBQUM7c0RBSk8sS0FBWTtzREFEWixLQUFZO3dCQVFqQkMsTUFBTSxFQUFFQyxXQUFXO3dCQUFFQyxVQUFVLEVBQUVDLGVBQWU7d0JBQUVDLFdBQVcsRUFBRUMsZ0JBQWdCOztnQkFFMUYsQ0FBQztZQUNILENBQUM7OztXQVJHUCxJQUFJO21CQUxjLEtBQU07Z0JBS3hCQSxJQUFJLEVBVURRLENBQU8sVUFBRyxDQUFLO2dCQVZsQlIsSUFBSSxFQVlEUyxDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBTTtBQUNuQixDQUFDO21CQXJCbUIsY0FBaUIsVUF3QmRWLElBQUk7O1NBTXBCRyxXQUFXLENBQUNRLE9BQU8sRUFBRSxDQUFDO0lBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFNO0FBQ3BCLENBQUM7U0FFUVIsZUFBZSxDQUFDUyxXQUFXLEVBQUVDLE9BQU8sRUFBRUosT0FBTyxFQUFFSyxJQUFJLEVBQUUsQ0FBQztJQUM3REosT0FBTyxDQUFDQyxHQUFHLENBQUUsQ0FBYSxlQUFVLE1BQUEsQ0FBUkUsT0FBTztJQUVuQ0MsSUFBSTtBQUNOLENBQUM7U0FFUVQsZ0JBQWdCLENBQUNJLE9BQU8sRUFBRSxDQUFDO0lBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFlO0FBQzdCLENBQUMifQ==