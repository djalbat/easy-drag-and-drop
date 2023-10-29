"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";
import { dropMixins } from "../../index"; ///

import style from "../style";

class DropDiv extends Element {
  dropHandler = (dragElement, aborted, element, done) => {
    if (dragElement !== null) {
      dragElement.remove();
    }

    done();
  }

  dragOutHandler = (event, element) => {
    this.removeClass("drag-over");
  }

  dragOverHandler = (event, element) => {
    this.addClass("drag-over");
  }

  getReference() {
    const { reference = null } = this.properties;

    return reference;
  }

  didMount() {
    this.enableDrop();

    this.onDrop(this.dropHandler);
    this.onDragOut(this.dragOutHandler);
    this.onDragOver(this.dragOverHandler);
  }

  willUnmount() {
    this.disableDrop();

    this.offDrop(this.dropHandler);
    this.offDragOut(this.dragOutHandler);
    this.offDragOver(this.dragOverHandler);
  }

  childElements() {
    return "DROP ELEMENT";
  }

  static tagName = "div";

  static ignoredProperties = [
    "reference"
  ];

  static defaultProperties = {
    className: "drop",
    reference: "drop-div"
  };
}

Object.assign(DropDiv.prototype, dropMixins);

export default withStyle(DropDiv)`

  ${style}

  margin-bottom: 10rem;
  background-color: green;
  
  .drag-over {
    background-color: blue;
  }
  
`;
