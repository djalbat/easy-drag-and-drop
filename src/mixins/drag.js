"use strict";

import { keyCodes } from "necessary" ;
import { window, mouseButtons } from "easy";

import { START_DRAGGING_DELAY } from "../constants";
import { checkDragElementIgnoresDropElement } from "../utilities/reference";
import { mouseTopFromEvent, mouseLeftFromEvent } from "../utilities/event";
import { DRAG_CUSTOM_EVENT_TYPE, STOP_DRAG_CUSTOM_EVENT_TYPE, START_DRAG_CUSTOM_EVENT_TYPE } from "../customEventTypes";

const { ESCAPE_KEY_CODE } = keyCodes,
      { LEFT_MOUSE_BUTTON } = mouseButtons;

function getDragElement() {
  const { dragElement } = globalThis;

  return dragElement;
}

function setDragElement(dragElement) {
  Object.assign(globalThis, {
    dragElement
  });
}

function resetDragElement() {
  const dragElement = null;

  setDragElement(dragElement);
}

Object.assign(globalThis, {
  getDragElement,
  setDragElement,
  resetDragElement
});

resetDragElement();

function enableDrag() {
  const timeout = null,
        topOffset = null,
        leftOffset = null,
        dragEnabled = true,
        startMouseTop = null,
        startMouseLeft = null;

  this.onMouseDown(mouseDownHandler, this);

  this.updateState({
    timeout,
    topOffset,
    leftOffset,
    dragEnabled,
    startMouseTop,
    startMouseLeft
  });
}

function disableDrag() {
  const dragEnabled = false;

  this.updateState({
    dragEnabled
  });

  this.offMouseDown(mouseDownHandler, this);
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

function isDragEnabled() {
  const { dragEnabled = false } = this.getState();

  return dragEnabled;
}

function isDragging() {
  const dragging = this.hasClass("dragging");

  return dragging;
}

function startDrag(event, element, mouseTop, mouseLeft) {
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

  setDragElement(dragElement);

  this.setTopOffset(topOffset);

  this.setLeftOffset(leftOffset);

  this.setStartMouseTop(startMouseTop);

  this.setStartMouseLeft(startMouseLeft);

  this.callCustomHandlers(customEventType, event, element);

  this.drag(event, element, mouseTop, mouseLeft);
}

function stopDrag(event, element, aborted) {
  const dropElement = getDropElement(),
        customEventType = STOP_DRAG_CUSTOM_EVENT_TYPE;

  this.removeClass("dragging");

  window.offKeyDown(keyDownHandler, this);

  window.offMouseMove(mouseMoveHandler, this);

  const done = () => {
    this.callCustomHandlersAsync(customEventType, event, element, dropElement, aborted, () => {
      resetDragElement();
    });
  }

  if (dropElement !== null) {
    let dragElement = this; ///

    const dragElementIgnoresDropElement = checkDragElementIgnoresDropElement(dragElement, dropElement);

    if (dragElementIgnoresDropElement) {
      dragElement = null;
    }

    dropElement.drop(event, element, dragElement, aborted, done);
  } else {
    done();
  }
}

function drag(event, element, mouseTop, mouseLeft) {
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

  this.callCustomHandlers(customEventType, event, element, relativeMouseTop, relativeMouseLeft);
}

function startWaitingToDrag(event, element, mouseTop, mouseLeft) {
  let timeout = this.getTimeout();

  if (timeout === null) {
    timeout = setTimeout(() => {
      this.resetTimeout();

      this.startDrag(event, element, mouseTop, mouseLeft);
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
  onCustomDrag,
  offCustomDrag,
  onCustomStopDrag,
  offCustomStopDrag,
  onCustomStartDrag,
  offCustomStartDrag,
  isDragEnabled,
  isDragging,
  startDrag,
  stopDrag,
  drag,
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
    this.stopDrag(event, element, aborted);

    event.stopPropagation();
  }
}

function mouseUpHandler(event, element) {
  const dragging = this.isDragging(),
        aborted = false;

  dragging ?
    this.stopDrag(event, element, aborted) :
      this.stopWaitingToDrag();

  event.stopPropagation();

  window.offBlur(mouseUpHandler, this);  ///

  window.offMouseUp(mouseUpHandler, this);
}

function mouseDownHandler(event, element) {
  const { button } = event;

  if (button === LEFT_MOUSE_BUTTON) {
    const dragging = this.isDragging();

    if (!dragging) {
      const mouseTop = mouseTopFromEvent(event),
            mouseLeft = mouseLeftFromEvent(event);

      this.startWaitingToDrag(event, element, mouseTop, mouseLeft);
    }
  }

  event.stopPropagation();

  window.onBlur(mouseUpHandler, this); ///

  window.onMouseUp(mouseUpHandler, this);
}

function mouseMoveHandler(event, element) {
  const dragging = this.isDragging();

  if (dragging) {
    const mouseTop = mouseTopFromEvent(event),
          mouseLeft = mouseLeftFromEvent(event);

    this.drag(event, element, mouseTop, mouseLeft);
  }

  event.stopPropagation();
}
