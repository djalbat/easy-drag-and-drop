"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";
import { dragMixins } from "../../index"; ///

import style from "../style";

class DragDiv extends Element {
  didMount() {
    this.enableDrag();
  }

  willUnmount() {
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
