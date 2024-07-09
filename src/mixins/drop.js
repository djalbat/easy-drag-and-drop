"use strict";

import { checkDragElementIgnoresDropElement } from "../utilities/reference";
import { DROP_CUSTOM_EVENT_TYPE, DRAG_OUT_CUSTOM_EVENT_TYPE, DRAG_OVER_CUSTOM_EVENT_TYPE } from "../customEventTypes";

const dropElement = null;

Object.assign(globalThis, {
  dropElement
});

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
  const { dragElement } = globalThis;

  if (dragElement !== null) {
    const dropElement = null; ///

    console.log("Setting the drop element to null...")

    Object.assign(globalThis, {
      dropElement
    });

    this.dragOut(event, element, dragElement);
  }

  event.stopPropagation();
}

function mouseOverHandler(event, element) {
  const { dragElement } = globalThis;

  if (dragElement !== null) {
    const dropElement = this, ///
          dragElementIgnoresDropElement = checkDragElementIgnoresDropElement(dragElement, dropElement);

    if (dragElementIgnoresDropElement) {
      return;
    }

    Object.assign(globalThis, {
      dropElement
    });

    this.dragOver(event, element, dragElement);
  }

  event.stopPropagation();
}
