"use strict";

import { Element } from "easy";

import DragDiv from "./div/drag";
import DropDiv from "./div/drop";

export default class View extends Element {
  childElements() {
    const references = [
      "drop-div"
    ];

    return ([

      <DropDiv/>,
      <DragDiv onDrag={dragHandler} onStopDrag={stopDragHandler} onStartDrag={startDragHandler} references={references} />

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

function dragHandler(event, element) {
  console.log("drag")
}

function stopDragHandler(event, element, dropElement, aborted, done) {
  console.log(`...stop drag ${aborted}`)

  done();
}

function startDragHandler(event, element) {
  console.log("start drag...")
}
