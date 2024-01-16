"use strict";

import withStyle from "easy-with-style";

import { eventTypes } from "easy";
import { dragMixins, DragElement } from "../../index"; ///

import style from "../style";

const { DBLCLICK_EVENT_TYPE } = eventTypes;

class DragDiv extends DragElement {
  doubleClickHandler = (event, element) => {
    console.log("double click!")
  }

  didMount() {
    this.enableDrag();

    this.onEvent(DBLCLICK_EVENT_TYPE, this.doubleClickHandler, this);
  }

  willUnmount() {
    this.offEvent(DBLCLICK_EVENT_TYPE, this.doubleClickHandler, this);

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
