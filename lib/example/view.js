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
    function View() {
        _classCallCheck(this, View);
        return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiRWxlbWVudCIsIkRyYWdEaXYiLCJEcm9wRGl2IiwiVmlldyIsImNoaWxkRWxlbWVudHMiLCJvbkRyYWciLCJkcmFnSGFuZGxlciIsIm9uU3RvcERyYWciLCJzdG9wRHJhZ0hhbmRsZXIiLCJvblN0YXJ0RHJhZyIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImRyb3BFbGVtZW50IiwiYWJvcnRlZCIsImRvbmUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUVWLEdBQVksQ0FBWixLQUFZO0FBQ1osR0FBWSxDQUFaLEtBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBbUJELENBSS9COzs7Ozs7O0lBckJNLElBQUksaUJBQVYsUUFBUTtjQUFGLElBQUk7YUFBSixJQUFJOzhCQUFKLElBQUk7Z0VBQUosSUFBSTs7aUJBQUosSUFBSTs7WUFDUixHQUFhLEVBQWIsQ0FBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsTUFBTSxDQUFFLENBQUM7c0RBSk8sS0FBWTtzREFEWixLQUFZO3dCQVFqQixNQUFNLEVBQUUsV0FBVzt3QkFBRSxVQUFVLEVBQUUsZUFBZTt3QkFBRSxXQUFXLEVBQUUsZ0JBQWdCOztnQkFFMUYsQ0FBQztZQUNILENBQUM7OztXQVJHLElBQUk7bUJBTGMsS0FBTTtnQkFLeEIsSUFBSSxFQVVELENBQU8sVUFBRyxDQUFLO2dCQVZsQixJQUFJLEVBWUQsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixTQUFTLEVBQUUsQ0FBTTtBQUNuQixDQUFDO21CQXJCbUIsY0FBaUIsVUF3QmQsSUFBSTs7U0FNcEIsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBTTtBQUNwQixDQUFDO1NBRVEsZUFBZSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUUsQ0FBYSxlQUFVLE1BQUEsQ0FBUixPQUFPO0lBRW5DLElBQUk7QUFDTixDQUFDO1NBRVEsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFlO0FBQzdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBEcmFnRGl2IGZyb20gXCIuL2Rpdi9kcmFnXCI7XG5pbXBvcnQgRHJvcERpdiBmcm9tIFwiLi9kaXYvZHJvcFwiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxEcm9wRGl2Lz4sXG4gICAgICA8RHJhZ0RpdiBvbkRyYWc9e2RyYWdIYW5kbGVyfSBvblN0b3BEcmFnPXtzdG9wRHJhZ0hhbmRsZXJ9IG9uU3RhcnREcmFnPXtzdGFydERyYWdIYW5kbGVyfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDEwcmVtO1xuICAgICAgXG5gO1xuXG5mdW5jdGlvbiBkcmFnSGFuZGxlcihlbGVtZW50KSB7XG4gIGNvbnNvbGUubG9nKFwiZHJhZ1wiKVxufVxuXG5mdW5jdGlvbiBzdG9wRHJhZ0hhbmRsZXIoZHJvcEVsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpIHtcbiAgY29uc29sZS5sb2coYC4uLnN0b3AgZHJhZyAke2Fib3J0ZWR9YClcblxuICBkb25lKCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0RHJhZ0hhbmRsZXIoZWxlbWVudCkge1xuICBjb25zb2xlLmxvZyhcInN0YXJ0IGRyYWcuLi5cIilcbn1cbiJdfQ==