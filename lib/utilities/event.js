"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mouseTopFromEvent = mouseTopFromEvent;
exports.mouseLeftFromEvent = mouseLeftFromEvent;
function mouseTopFromEvent(event) {
    var pageY = event.pageY, mouseTop = pageY; ///
    return mouseTop;
}
function mouseLeftFromEvent(event) {
    var pageX = event.pageX, mouseLeft = pageX; ///
    return mouseLeft;
}
