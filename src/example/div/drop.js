"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";
import { dropMixins } from "../../index"; ///

import style from "../style";

class DropDiv extends Element {
  dropHandler(dragElement, aborted, element, done) {
    dragElement.remove();

    done();
  }

  dragOutHandler(event, element) {
    this.removeClass("drag-over");
  }

  dragOverHandler(event, element) {
    this.addClass("drag-over");
  }

  didMount() {
    this.enableDrop();

    this.onDrop(this.dropHandler, this);
    this.onDragOut(this.dragOutHandler, this);
    this.onDragOver(this.dragOverHandler, this);
  }

  willUnmount() {
    this.disableDrop();

    this.offDrop(this.dropHandler, this);
    this.offDragOut(this.dragOutHandler, this);
    this.offDragOver(this.dragOverHandler, this);
  }

  childElements() {
    return "DROP ELEMENT";
  }

  static tagName = "div";

  static defaultProperties = {
    className: "drop"
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
