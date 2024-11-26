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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9kcm9wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlXCI7XG5cbmNsYXNzIERyb3BEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZHJvcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGRyYWdFbGVtZW50LCBhYm9ydGVkLCBkb25lKSA9PiB7XG4gICAgaWYgKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBkcmFnRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBkcmFnT3V0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnLW92ZXJcIik7XG4gIH1cblxuICBkcmFnT3ZlckN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZHJhZy1vdmVyXCIpO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkN1c3RvbURyb3AodGhpcy5kcm9wQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdPdXQodGhpcy5kcmFnT3V0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdPdmVyKHRoaXMuZHJhZ092ZXJDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJvcCh0aGlzLmRyb3BDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdPdXQodGhpcy5kcmFnT3V0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnT3Zlcih0aGlzLmRyYWdPdmVyQ3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBcIkRST1AgRUxFTUVOVFwiO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcInJlZmVyZW5jZVwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkcm9wXCIsXG4gICAgcmVmZXJlbmNlOiBcImRyb3AtZGl2XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEcm9wRGl2LnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcm9wRGl2KWBcblxuICAke3N0eWxlfVxuXG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgXG4gIC5kcmFnLW92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkRyb3BEaXYiLCJkcm9wQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImRvbmUiLCJyZW1vdmUiLCJkcmFnT3V0Q3VzdG9tSGFuZGxlciIsInJlbW92ZUNsYXNzIiwiZHJhZ092ZXJDdXN0b21IYW5kbGVyIiwiYWRkQ2xhc3MiLCJnZXRSZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwicmVmZXJlbmNlIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25DdXN0b21Ecm9wIiwib25DdXN0b21EcmFnT3V0Iiwib25DdXN0b21EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZDdXN0b21Ecm9wIiwib2ZmQ3VzdG9tRHJhZ091dCIsIm9mZkN1c3RvbURyYWdPdmVyIiwiY2hpbGRFbGVtZW50cyIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyb3BNaXhpbnMiLCJ3aXRoU3R5bGUiLCJzdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0VBOzs7ZUFBQTs7O29FQWhFc0I7b0JBRUU7cUJBQ0c7NERBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQUEsQUFBTUEsd0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEscUJBQ0pDLHdCQUFBQSxxQkFBb0IsU0FBQ0MsT0FBT0MsU0FBU0MsYUFBYUMsU0FBU0M7WUFDekQsSUFBSUYsZ0JBQWdCLE1BQU07Z0JBQ3hCQSxZQUFZRyxNQUFNO1lBQ3BCO1lBRUFEO1FBQ0YsSUFFQUUsd0JBQUFBLHdCQUF1QixTQUFDTixPQUFPQztZQUM3QixNQUFLTSxXQUFXLENBQUM7UUFDbkIsSUFFQUMsd0JBQUFBLHlCQUF3QixTQUFDUixPQUFPQztZQUM5QixNQUFLUSxRQUFRLENBQUM7UUFDaEI7OztrQkFmSVg7O1lBaUJKWSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBNkIsbUJBQUEsSUFBSSxDQUFDQyxVQUFVLCtCQUFmLGlCQUFyQkMsV0FBQUEsb0RBQVk7Z0JBRXBCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxVQUFVO2dCQUVmLElBQUksQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ2hCLGlCQUFpQjtnQkFDeEMsSUFBSSxDQUFDaUIsZUFBZSxDQUFDLElBQUksQ0FBQ1Ysb0JBQW9CO2dCQUM5QyxJQUFJLENBQUNXLGdCQUFnQixDQUFDLElBQUksQ0FBQ1QscUJBQXFCO1lBQ2xEOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsV0FBVztnQkFFaEIsSUFBSSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDckIsaUJBQWlCO2dCQUN6QyxJQUFJLENBQUNzQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUNmLG9CQUFvQjtnQkFDL0MsSUFBSSxDQUFDZ0IsaUJBQWlCLENBQUMsSUFBSSxDQUFDZCxxQkFBcUI7WUFDbkQ7OztZQUVBZSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTztZQUNUOzs7V0F6Q0l6QjtxQkFBZ0IwQixhQUFPO0FBMkMzQixpQkEzQ0kxQixTQTJDRzJCLFdBQVU7QUFFakIsaUJBN0NJM0IsU0E2Q0c0QixxQkFBb0I7SUFDekI7Q0FDRDtBQUVELGlCQWpESTVCLFNBaURHNkIscUJBQW9CO0lBQ3pCQyxXQUFXO0lBQ1hoQixXQUFXO0FBQ2I7QUFHRmlCLE9BQU9DLE1BQU0sQ0FBQ2hDLFFBQVFpQyxTQUFTLEVBQUVDLGlCQUFVO0lBRTNDLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNuQyw0QkFFckJvQyxjQUFLIn0=