"use strict";

import { Element } from "easy";

import dropMixins from "../mixins/drop";

export default class DropElement extends Element {
  getReference() {
    const { reference = null } = this.properties;

    return reference;
  }

  didMount() {
    this.enableDrop();
  }

  willUnmount() {
    this.disableDrop();
  }

  static ignoredProperties = [
    "reference"
  ];
}

Object.assign(DropElement.prototype, dropMixins);
