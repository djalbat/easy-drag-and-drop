"use strict";

import withStyle from "easy-with-style";

import { dragMixins, DragElement } from "../../../index"; ///

import style from "../../style";

class DragDiv extends DragElement {
  doubleClickHandler = (event, element) => {
    console.log("double click!")
  }

  didMount() {
    this.enableDrag();

    this.onDoubleClick(this.doubleClickHandler, this);
  }

  willUnmount() {
    this.offDoubleClick(this.doubleClickHandler, this);

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
