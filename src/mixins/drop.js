"use strict";

import { DROP_EVENT_TYPE, DRAG_OUT_EVENT_TYPE, DRAG_OVER_EVENT_TYPE } from "../eventTypes";

const dropElement = null;

Object.assign(globalThis, {
  dropElement
});

function drop(dragElement) {
  const eventType = DROP_EVENT_TYPE;

  this.callHandlers(eventType, dragElement);
}

function dragOut(dragElement) {
  const eventType = DRAG_OUT_EVENT_TYPE;

  this.callHandlers(eventType, dragElement);
}

function dragOver() {
  const eventType = DRAG_OVER_EVENT_TYPE;

  this.callHandlers(eventType, dragElement);
}

function onDrop(dropHandler, element) {
  const eventType = DROP_EVENT_TYPE,
        handler = dropHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offDrop(dropHandler, element) {
  const eventType = DROP_EVENT_TYPE,
        handler = dropHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function onDragOut(dragOutHandler, element) {
  const eventType = DRAG_OUT_EVENT_TYPE,
        handler = dragOutHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offDragOut(dragOutHandler, element) {
  const eventType = DRAG_OUT_EVENT_TYPE,
        handler = dragOutHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function onDragOver(dragOverHandler, element) {
  const eventType = DRAG_OVER_EVENT_TYPE,
        handler = dragOverHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offDragOver(dragOverHandler, element) {
  const eventType = DRAG_OVER_EVENT_TYPE,
        handler = dragOverHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function enableDrop() {
  const { onDrop, onDragOut, onDragOver } = this.properties,
        dropHandler = onDrop, ///
        dragOutHandler = onDragOut, ///
        dragOverHandler = onDragOver; ///

  dropHandler && this.onDrop(dropHandler);
  dragOutHandler && this.onDragOut(dragOutHandler);
  dragOverHandler && this.onDragOver(dragOverHandler);

  this.onMouseOut(mouseOutHandler, this);
  this.onMouseOver(mouseOverHandler, this);
}

function disableDrop() {
  const { onDrop, onDragOut, onDragOver } = this.properties,
        dropHandler = onDrop, ///
        dragOutHandler = onDragOut, ///
        dragOverHandler = onDragOver; ///

  dropHandler && this.offDrop(dropHandler);
  dragOutHandler && this.offDragOut(dragOutHandler);
  dragOverHandler && this.offDragOver(dragOverHandler);

  this.offMouseOut(mouseOutHandler, this);
  this.offMouseOver(mouseOverHandler, this);
}

function callHandlers(eventType, ...remainingArguments) {
  const eventListeners = this.findEventListeners(eventType);

  eventListeners.forEach((eventListener) => {
    const { handler, element } = eventListener;

    handler.call(element, ...remainingArguments, element);
  });
}

export default {
  drop,
  dragOut,
  dragOver,
  onDrop,
  offDrop,
  onDragOut,
  offDragOut,
  onDragOver,
  offDragOver,
  enableDrop,
  disableDrop,
  callHandlers
}

function mouseOutHandler(event, element) {
  const { dragElement } = globalThis;

  if (dragElement !== null) {
    const dropElement = null; ///

    Object.assign(globalThis, {
      dropElement
    });

    this.dragOut(dragElement);
  }

  event.stopPropagation();
}

function mouseOverHandler(event, element) {
  const { dragElement } = globalThis;

  if (dragElement !== null) {
    const dropElement = this; ///

    Object.assign(globalThis, {
      dropElement
    });

    this.dragOver(dragElement);
  }

  event.stopPropagation();
}
