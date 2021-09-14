"use strict";

import withStyle from "easy-with-style";

import { dragMixins, DragElement } from "../../index"; ///

import style from "../style";

import { DBLCLICK_EVENT_TYPE } from "../eventTypes";

class DragDiv extends DragElement {
  doubleClickHandler(event, element) {
    console.log("double click!")
  }

  didMount() {
    this.enableDrag();

    this.on(DBLCLICK_EVENT_TYPE, this.doubleClickHandler, this);
  }

  willUnmount() {
    this.off(DBLCLICK_EVENT_TYPE, this.doubleClickHandler, this);

    this.disableDrag();
  }

  childElements() {
    return ("DRAG ELEMENT");
  }

  static tagName = "div";

  static defaultProperties = {
    className: "drag"
  };
}

Object.assign(DragDiv.prototype, dragMixins);

export default withStyle(DragDiv)`

  ${style}
  
  background-color: red;
  
  .dragging {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }

`;
