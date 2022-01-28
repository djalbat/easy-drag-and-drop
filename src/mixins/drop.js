"use strict";

import { eventTypes } from "easy";
import { asynchronousUtilities } from "necessary" ;

const { forEach } = asynchronousUtilities,
      { DROP_EVENT_TYPE, DRAG_OUT_EVENT_TYPE, DRAG_OVER_EVENT_TYPE } = eventTypes;

const dropElement = null;

Object.assign(globalThis, {
  dropElement
});

function drop(dragElement, aborted, done) {
  const eventType = DROP_EVENT_TYPE;

  this.callHandlersAsync(eventType, dragElement, aborted, done);
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
    const { handler, element: handlerElement } = eventListener,
          element = this; ///

    handler.call(handlerElement, ...remainingArguments, element);
  });
}

function callHandlersAsync(eventType, ...remainingArguments) {
  const done = remainingArguments.pop(),  ///
        eventListeners = this.findEventListeners(eventType);

  forEach(eventListeners, (eventListener, next) => {
    const { handler, element: handlerElement } = eventListener,
          element = this, ///
          done = next;  ///

    handler.call(handlerElement, ...remainingArguments, element, done);
  }, done);
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
  callHandlers,
  callHandlersAsync
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
