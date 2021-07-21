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
        "\n\n  ",
        "\n  \n  background-color: red;\n  \n  .dragging {\n    z-index: 1;\n    position: fixed;\n    pointer-events: none;\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DragDiv = /*#__PURE__*/ function(Element1) {
    _inherits(DragDiv, Element1);
    function DragDiv() {
        _classCallCheck(this, DragDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(DragDiv).apply(this, arguments));
    }
    _createClass(DragDiv, [
        {
            key: "didMount",
            value: function didMount() {
                this.enableDrag();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
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
}(_wrapNativeSuper(_easy.Element));
_defineProperty(DragDiv, "tagName", "div");
_defineProperty(DragDiv, "defaultProperties", {
    className: "drag"
});
Object.assign(DragDiv.prototype, _index.dragMixins);
var _default = (0, _easyWithStyle).default(DragDiv)(_templateObject(), _style.default);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9kcmFnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcmFnTWl4aW5zIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlXCI7XG5cbmNsYXNzIERyYWdEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVEcmFnKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXCJEUkFHIEVMRU1FTlRcIik7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkcmFnXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEcmFnRGl2LnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcmFnRGl2KWBcblxuICAke3N0eWxlfVxuICBcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBcbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUNILEdBQWEsQ0FBYixNQUFhO0FBRXRCLEdBQVUsQ0FBVixNQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXdCTSxNQUVoQztTQUFRLDRIQVVWOzs7Ozs7O0lBbENNLE9BQU87Y0FBUCxPQUFPO2FBQVAsT0FBTzs4QkFBUCxPQUFPO2dFQUFQLE9BQU87O2lCQUFQLE9BQU87O1lBQ1gsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxHQUFHLENBQUM7cUJBQ0wsVUFBVTtZQUNqQixDQUFDOzs7WUFFRCxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLEdBQUcsQ0FBQztxQkFDUixXQUFXO1lBQ2xCLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDO3dCQUNQLFlBQWM7WUFDeEIsQ0FBQzs7O1dBWEcsT0FBTzttQkFMVyxLQUFNO2dCQUt4QixPQUFPLEdBYUosT0FBTyxJQUFHLEdBQUs7Z0JBYmxCLE9BQU8sR0FlSixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLElBQU07O0FBSXJCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUF4QkosTUFBYTttQkFIbEIsY0FBaUIsVUE2QmQsT0FBTyxxQkF4QmQsTUFBVSJ9