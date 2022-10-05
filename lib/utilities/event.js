"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    mouseTopFromEvent: function() {
        return mouseTopFromEvent;
    },
    mouseLeftFromEvent: function() {
        return mouseLeftFromEvent;
    }
});
function mouseTopFromEvent(event) {
    var pageY = event.pageY, mouseTop = pageY; ///
    return mouseTop;
}
function mouseLeftFromEvent(event) {
    var pageX = event.pageX, mouseLeft = pageX; ///
    return mouseLeft;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3VzZVRvcEZyb21FdmVudChldmVudCkge1xuICBjb25zdCB7IHBhZ2VZIH0gPSBldmVudCxcbiAgICAgICAgbW91c2VUb3AgPSBwYWdlWTsgLy8vXG5cbiAgcmV0dXJuIG1vdXNlVG9wO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW91c2VMZWZ0RnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgcGFnZVggfSA9IGV2ZW50LFxuICAgICAgICBtb3VzZUxlZnQgPSBwYWdlWDsgIC8vL1xuXG4gIHJldHVybiBtb3VzZUxlZnQ7XG59XG4iXSwibmFtZXMiOlsibW91c2VUb3BGcm9tRXZlbnQiLCJtb3VzZUxlZnRGcm9tRXZlbnQiLCJldmVudCIsInBhZ2VZIiwibW91c2VUb3AiLCJwYWdlWCIsIm1vdXNlTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSxpQkFBaUI7ZUFBakJBOztJQU9BQyxrQkFBa0I7ZUFBbEJBOzs7QUFQVCxTQUFTRCxrQkFBa0JFLEtBQUssRUFBRTtJQUN2QyxJQUFNLEFBQUVDLFFBQVVELE1BQVZDLE9BQ0ZDLFdBQVdELE9BQU8sR0FBRztJQUUzQixPQUFPQztBQUNUO0FBRU8sU0FBU0gsbUJBQW1CQyxLQUFLLEVBQUU7SUFDeEMsSUFBTSxBQUFFRyxRQUFVSCxNQUFWRyxPQUNGQyxZQUFZRCxPQUFRLEdBQUc7SUFFN0IsT0FBT0M7QUFDVCJ9