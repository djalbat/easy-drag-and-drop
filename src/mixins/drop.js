"use strict";

import { checkDragElementIgnoresDropElement } from "../utilities/reference";
import { DROP_CUSTOM_EVENT_TYPE, DRAG_OUT_CUSTOM_EVENT_TYPE, DRAG_OVER_CUSTOM_EVENT_TYPE } from "../customEventTypes";

function getDropElement() {
  const { dropElement } = globalThis;

  return dropElement;
}

function setDropElement(dropElement) {
  Object.assign(globalThis, {
    dropElement
  });
}

function resetDropElement() {
  const dropElement = null;

  setDropElement(dropElement);
}

Object.assign(globalThis, {
  getDropElement,
  setDropElement,
  resetDropElement
});

resetDropElement();

function drop(event, element, dragElement, aborted, done) {
  const customEventType = DROP_CUSTOM_EVENT_TYPE;

  this.callCustomHandlersAsync(customEventType, event, element, dragElement, aborted, done);
}

function dragOut(event, element, dragElement) {
  const customEventType = DRAG_OUT_CUSTOM_EVENT_TYPE;

  this.callCustomHandlers(customEventType, event, element, dragElement);
}

function dragOver(event, element, dragElement) {
  const customEventType = DRAG_OVER_CUSTOM_EVENT_TYPE;

  this.callCustomHandlers(customEventType, event, element, dragElement);
}

function enableDrop() {
  this.onMouseOut(mouseOutHandler, this);
  this.onMouseOver(mouseOverHandler, this);
}

function disableDrop() {
  this.offMouseOut(mouseOutHandler, this);
  this.offMouseOver(mouseOverHandler, this);
}

function onCustomDrop(dropCustomHandler, element) {
  const customEventType = DROP_CUSTOM_EVENT_TYPE,
        customHandler = dropCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDrop(dropCustomHandler, element) {
  const customEventType = DROP_CUSTOM_EVENT_TYPE,
        customHandler = dropCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomDragOut(dragOutCustomHandler, element) {
  const customEventType = DRAG_OUT_CUSTOM_EVENT_TYPE,
        customHandler = dragOutCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDragOut(dragOutCustomHandler, element) {
  const customEventType = DRAG_OUT_CUSTOM_EVENT_TYPE,
        customHandler = dragOutCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomDragOver(dragOverCustomHandler, element) {
  const customEventType = DRAG_OVER_CUSTOM_EVENT_TYPE,
        customHandler = dragOverCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDragOver(dragOverCustomHandler, element) {
  const customEventType = DRAG_OVER_CUSTOM_EVENT_TYPE,
        customHandler = dragOverCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

export default {
  drop,
  dragOut,
  dragOver,
  enableDrop,
  disableDrop,
  onCustomDrop,
  offCustomDrop,
  onCustomDragOut,
  offCustomDragOut,
  onCustomDragOver,
  offCustomDragOver
}

function mouseOutHandler(event, element) {
  const dragElement = getDragElement();

  if (dragElement !== null) {
    resetDropElement();

    this.dragOut(event, element, dragElement);
  }

  event.stopPropagation();
}

function mouseOverHandler(event, element) {
  const dragElement = getDragElement();

  if (dragElement !== null) {
    const dropElement = this, ///
          dragElementIgnoresDropElement = checkDragElementIgnoresDropElement(dragElement, dropElement);

    if (dragElementIgnoresDropElement) {
      return;
    }

    setDropElement(dropElement);

    this.dragOver(event, element, dragElement);
  }

  event.stopPropagation();
}
