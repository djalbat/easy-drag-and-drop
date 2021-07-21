"use strict";

import { Element } from "easy";

import dropMixins from "../mixins/drop";

export default class DropElement extends Element {
  didMount() {
    this.enableDrop();
  }

  willUnmount() {
    this.disableDrop();
  }
}

Object.assign(DropElement.prototype, dropMixins);
