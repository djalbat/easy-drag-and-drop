"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";
import { dropMixins } from "../../../index"; ///

import style from "../../style";

class DropDiv extends Element {
  dropCustomHandler = (event, element, dragElement, aborted, done) => {
    if (dragElement !== null) {
      dragElement.remove();
    }

    done();
  }

  dragOutCustomHandler = (event, element) => {
    this.removeClass("drag-over");
  }

  dragOverCustomHandler = (event, element) => {
    this.addClass("drag-over");
  }

  getReference() {
    const { reference = null } = this.properties;

    return reference;
  }

  didMount() {
    this.enableDrop();

    this.onCustomDrop(this.dropCustomHandler);
    this.onCustomDragOut(this.dragOutCustomHandler);
    this.onCustomDragOver(this.dragOverCustomHandler);
  }

  willUnmount() {
    this.disableDrop();

    this.offCustomDrop(this.dropCustomHandler);
    this.offCustomDragOut(this.dragOutCustomHandler);
    this.offCustomDragOver(this.dragOverCustomHandler);
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
