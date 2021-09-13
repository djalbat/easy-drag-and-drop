"use strict";
require("./example/preamble");
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _view = _interopRequireDefault(require("./example/view"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easyWithStyle.default.renderStyles;
var body = new _easy.Body(), view = /*#__PURE__*/ React.createElement(_view.default, null);
renderStyles();
body.mount(view);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkJvZHkiLCJWaWV3IiwicmVuZGVyU3R5bGVzIiwiYm9keSIsInZpZXciLCJtb3VudCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7QUFJVSxHQUFpQixDQUFqQixjQUFpQjtBQUVsQixHQUFNLENBQU4sS0FBTTtBQUVWLEdBQWdCLENBQWhCLEtBQWdCOzs7Ozs7QUFFakMsR0FBSyxDQUFHLFlBQVksR0FORSxjQUFpQixTQU0vQixZQUFZO0FBRXBCLEdBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQU5LLEtBQU0sU0FPckIsSUFBSSxxQ0FMTyxLQUFnQjtBQVdqQyxZQUFZO0FBRVosSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4vZXhhbXBsZS9wcmVhbWJsZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3XCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgdmlldyA9XG5cbiAgICAgICAgPFZpZXcvPlxuXG4gICAgICA7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5ib2R5Lm1vdW50KHZpZXcpO1xuIl19