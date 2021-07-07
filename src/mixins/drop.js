"use strict";

import { DROP, DRAG_OUT, DRAG_OVER } from "../constants";

const dropElement = null;

Object.assign(globalThis, {
  dropElement
});

function drop(dragElement) {
  const eventType = DROP;

  this.callHandlers(eventType, dragElement);
}

function dragOut(dragElement) {
  const eventType = DRAG_OUT;

  this.callHandlers(eventType, dragElement);
}

function dragOver() {
  const eventType = DRAG_OVER;

  this.callHandlers(eventType, dragElement);
}

function onDrop(dropHandler, element) {
  const eventType = DROP,
        handler = dropHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offDrop(dropHandler, element) {
  const eventType = DROP,
        handler = dropHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function onDragOut(dragOutHandler, element) {
  const eventType = DRAG_OUT,
        handler = dragOutHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offDragOut(dragOutHandler, element) {
  const eventType = DRAG_OUT,
        handler = dragOutHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function onDragOver(dragOverHandler, element) {
  const eventType = DRAG_OVER,
        handler = dragOverHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offDragOver(dragOverHandler, element) {
  const eventType = DRAG_OVER,
        handler = dragOverHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function enableDrop() {
  this.onMouseOut(mouseOutHandler, this);
  this.onMouseOver(mouseOverHandler, this);
}

function disableDrop() {
  this.offMouseOut(mouseOutHandler, this);
  this.offMouseOver(mouseOverHandler, this);
}

function callHandlers(eventType, dragElement) {
  const eventListeners = this.findEventListeners(eventType);

  eventListeners.forEach((eventListener) => {
    const { handler, element } = eventListener;

    handler.call(element, dragElement, element);
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
