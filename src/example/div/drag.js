"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";
import { dragMixins } from "../../index"; ///

import style from "../style";

import { DBLCLICK } from "../constants";

class DragDiv extends Element {
  doubleClickHandler(event, element) {
    console.log("double click!")
  }

  didMount() {
    this.enableDrag();

    this.on(DBLCLICK, this.doubleClickHandler, this);
  }

  willUnmount() {
    this.off(DBLCLICK, this.doubleClickHandler, this);

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
