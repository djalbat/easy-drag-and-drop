"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

import dragMixins from "../mixins/drag";

class DragElement extends Element {
  getReferences() {
    const { references = [] } = this.properties;

    return references;
  }

  didMount() {
    this.enableDrag();
  }

  willUnmount() {
    this.disableDrag();
  }

  static ignoredProperties = [
    "onDrag",
    "references",
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
