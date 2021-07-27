"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

import dragMixins from "../mixins/drag";

class DragElement extends Element {
  didMount() {
    this.enableDrag();
  }

  willUnmount() {
    this.disableDrag();
  }

  static ignoredProperties = [
    "onDrag",
    "onStartDrag",
    "offStartDrag"
  ];
}

Object.assign(DragElement.prototype, dragMixins);

export default withStyle(DragElement)`

  .dragging {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }
  
`;
