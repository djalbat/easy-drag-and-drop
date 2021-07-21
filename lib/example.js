"use strict";
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _view = _interopRequireDefault(require("./example/view"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_easy.window.assign({
    React: _easy.React
});
var renderStyles = _easyWithStyle.default.renderStyles;
var body = new _easy.Body(), view = /*#__PURE__*/ _easy.React.createElement(_view.default, null);
renderStyles();
body.mount(view);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5LCBSZWFjdCwgd2luZG93IH0gZnJvbSBcImVhc3lcIjtcblxud2luZG93LmFzc2lnbih7XG4gIFJlYWN0XG59KTtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3XCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgdmlldyA9XG5cbiAgICAgICAgPFZpZXcvPlxuXG4gICAgICA7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5ib2R5Lm1vdW50KHZpZXcpO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVILEdBQU0sQ0FBTixLQUFNO0FBTXpCLEdBQWdCLENBQWhCLEtBQWdCOzs7Ozs7QUFORyxLQUFNLFFBRW5DLE1BQU07SUFDWCxLQUFLLEVBSDZCLEtBQU07O0FBUTFDLEdBQUssQ0FBRyxZQUFZLEdBVkUsY0FBaUIsU0FVL0IsWUFBWTtBQUVwQixHQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FWb0IsS0FBTSxTQVdwQyxJQUFJLGlCQVgwQixLQUFNLHFCQU16QixLQUFnQjtBQVdqQyxZQUFZO0FBRVosSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJIn0=