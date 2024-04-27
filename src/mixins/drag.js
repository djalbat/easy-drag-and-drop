"use strict";

import { keyCodes } from "necessary" ;
import { window, eventTypes, mouseButtons } from "easy";

import { START_DRAGGING_DELAY } from "../constants";
import { checkDragElementIgnoresDropElement } from "../utilities/reference";
import { mouseTopFromEvent, mouseLeftFromEvent } from "../utilities/event";
import { DRAG_CUSTOM_EVENT_TYPE, STOP_DRAG_CUSTOM_EVENT_TYPE, START_DRAG_CUSTOM_EVENT_TYPE } from "../customEventTypes";

const { ESCAPE_KEY_CODE } = keyCodes,
      { BLUR_EVENT_TYPE } = eventTypes,
      { LEFT_MOUSE_BUTTON } = mouseButtons;

const dragElement = null;

Object.assign(globalThis, {
  dragElement
});

function enableDrag() {
  const timeout = null,
        topOffset = null,
        leftOffset = null,
        startMouseTop = null,
        startMouseLeft = null;

  this.onMouseDown(mouseDownHandler, this);

  this.updateState({
    timeout,
    topOffset,
    leftOffset,
    startMouseTop,
    startMouseLeft
  });
}

function disableDrag() {
  this.offMouseDown(mouseDownHandler, this);
}

function isDragging() {
  const dragging = this.hasClass("dragging");

  return dragging;
}

function startDrag(mouseTop, mouseLeft) {
  const bounds = this.getBounds(),
        boundsTop = bounds.getTop(),
        boundsLeft = bounds.getLeft(),
        boundsRight = bounds.getRight(),
        boundsBottom = bounds.getBottom(),
        boundsWidth = boundsRight - boundsLeft,
        boundsHeight = boundsBottom - boundsTop,
        topOffset = Math.floor(boundsHeight / 2),
        leftOffset = Math.floor(boundsWidth / 2),
        dragElement = this, ///
        startMouseTop = mouseTop, ///
        startMouseLeft = mouseLeft, ///
        customEventType = START_DRAG_CUSTOM_EVENT_TYPE;

  window.onKeyDown(keyDownHandler, this);

  window.onMouseMove(mouseMoveHandler, this);

  this.addClass("dragging");

  Object.assign(globalThis, {
    dragElement
  });

  this.setTopOffset(topOffset);

  this.setLeftOffset(leftOffset);

  this.setStartMouseTop(startMouseTop);

  this.setStartMouseLeft(startMouseLeft);

  this.callCustomHandlers(customEventType);

  this.drag(mouseTop, mouseLeft);
}

function stopDrag(aborted) {
  const { dropElement } = globalThis,
        customEventType = STOP_DRAG_CUSTOM_EVENT_TYPE;

  window.offKeyDown(keyDownHandler, this);

  window.offMouseMove(mouseMoveHandler, this);

  const done = () => {
    this.callCustomHandlersAsync(customEventType, dropElement, aborted, () => {
      const dragElement = null;

      Object.assign(globalThis, {
        dragElement
      });

      this.removeClass("dragging");
    });
  }

  if (dropElement !== null) {
    let dragElement = this; ///

    const dragElementIgnoresDropElement = checkDragElementIgnoresDropElement(dragElement, dropElement);

    if (dragElementIgnoresDropElement) {
      dragElement = null;
    }

    dropElement.drop(dragElement, aborted, done);
  } else {
    done();
  }
}

function drag(mouseTop, mouseLeft) {
  const scrollTop = window.getScrollTop(),
        scrollLeft = window.getScrollLeft(),
        topOffset = this.getTopOffset(),
        leftOffset = this.getLeftOffset(),
        startMouseTop = this.getStartMouseTop(),
        startMouseLeft = this.getStartMouseLeft(),
        customEventType = DRAG_CUSTOM_EVENT_TYPE,
        relativeMouseTop = mouseTop - startMouseTop,
        relativeMouseLeft = mouseLeft - startMouseLeft;

  let top = startMouseTop + relativeMouseTop - topOffset - scrollTop,
      left = startMouseLeft + relativeMouseLeft - leftOffset - scrollLeft;

  top = `${top}px`; ///
  left = `${left}px`; ///

  const css = {
    top,
    left
  };

  this.css(css);

  this.callCustomHandlers(customEventType, relativeMouseTop, relativeMouseLeft);
}

function onCustomDrag(dragCustomHandler, element) {
  const customEventType = DRAG_CUSTOM_EVENT_TYPE,
        customHandler = dragCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDrag(dragCustomHandler, element) {
  const customEventType = DRAG_CUSTOM_EVENT_TYPE,
        customHandler = dragCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomStopDrag(stopDragCustomHandler, element) {
  const customEventType = STOP_DRAG_CUSTOM_EVENT_TYPE,
        customHandler = stopDragCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomStopDrag(stopDragCustomHandler, element) {
  const customEventType = STOP_DRAG_CUSTOM_EVENT_TYPE,
        customHandler = stopDragCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomStartDrag(startDragCustomHandler, element) {
  const customEventType = START_DRAG_CUSTOM_EVENT_TYPE,
        customHandler = startDragCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomStartDrag(startDragCustomHandler, element) {
  const customEventType = START_DRAG_CUSTOM_EVENT_TYPE,
        customHandler = startDragCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function startWaitingToDrag(mouseTop, mouseLeft) {
  let timeout = this.getTimeout();

  if (timeout === null) {
    timeout = setTimeout(() => {
      this.resetTimeout();

      this.startDrag(mouseTop, mouseLeft);
    }, START_DRAGGING_DELAY);

    this.updateTimeout(timeout);
  }
}

function stopWaitingToDrag() {
  const timeout = this.getTimeout();

  if (timeout !== null) {
    clearTimeout(timeout);

    this.resetTimeout();
  }
}

function getTimeout() {
  const { timeout } = this.getState();

  return timeout;
}

function resetTimeout() {
  const timeout = null;

  this.updateTimeout(timeout);
}

function updateTimeout(timeout) {
  this.updateState({
    timeout
  });
}

function getTopOffset() {
  const { topOffset } = this.getState();

  return topOffset;
}

function getLeftOffset() {
  const { leftOffset } = this.getState();

  return leftOffset;
}

function getStartMouseTop() {
  const { startMouseTop } = this.getState();

  return startMouseTop;
}

function getStartMouseLeft() {
  const { startMouseLeft } = this.getState();

  return startMouseLeft;
}

function setTopOffset(topOffset) {
  this.updateState({
    topOffset
  });
}

function setLeftOffset(leftOffset) {
  this.updateState({
    leftOffset
  });
}

function setStartMouseTop(startMouseTop) {
  this.updateState({
    startMouseTop
  });
}

function setStartMouseLeft(startMouseLeft) {
  this.updateState({
    startMouseLeft
  });
}

export default {
  enableDrag,
  disableDrag,
  isDragging,
  startDrag,
  stopDrag,
  drag,
  onCustomDrag,
  offCustomDrag,
  onCustomStopDrag,
  offCustomStopDrag,
  onCustomStartDrag,
  offCustomStartDrag,
  startWaitingToDrag,
  stopWaitingToDrag,
  getTimeout,
  resetTimeout,
  updateTimeout,
  getTopOffset,
  getLeftOffset,
  getStartMouseTop,
  getStartMouseLeft,
  setTopOffset,
  setLeftOffset,
  setStartMouseTop,
  setStartMouseLeft
};

function keyDownHandler(event, element) {
  const { keyCode } = event,
        escapeKey = (keyCode === ESCAPE_KEY_CODE),
        aborted = true;

  if (escapeKey) {
    this.stopDrag(aborted);

    event.stopPropagation();
  }
}

function mouseUpHandler(event, element) {
  const dragging = this.isDragging(),
        aborted = false;

  dragging ?
    this.stopDrag(aborted) :
      this.stopWaitingToDrag();

  event.stopPropagation();

  window.offEvent(BLUR_EVENT_TYPE, mouseUpHandler, this);  ///

  window.offMouseUp(mouseUpHandler, this);
}

function mouseDownHandler(event, element) {
  const { button } = event;

  if (button === LEFT_MOUSE_BUTTON) {
    const dragging = this.isDragging();

    if (!dragging) {
      const mouseTop = mouseTopFromEvent(event),
            mouseLeft = mouseLeftFromEvent(event);

      this.startWaitingToDrag(mouseTop, mouseLeft);
    }
  }

  event.stopPropagation();

  window.onEvent(BLUR_EVENT_TYPE, mouseUpHandler, this); ///

  window.onMouseUp(mouseUpHandler, this);
}

function mouseMoveHandler(event, element) {
  const dragging = this.isDragging();

  if (dragging) {
    const mouseTop = mouseTopFromEvent(event),
          mouseLeft = mouseLeftFromEvent(event);

    this.drag(mouseTop, mouseLeft);
  }

  event.stopPropagation();
}
