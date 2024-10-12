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
      <DragDiv onCustopmDrag={dragCustomHandler} onCustomStopDrag={stopDragCustomHandler} onCustomStartDrag={startDragCustomHandler} references={references} />

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

function dragCustomHandler(event, element) {
  console.log("drag")
}

function stopDragCustomHandler(event, element, dropElement, aborted, done) {
  console.log(`...stop drag ${aborted}`)

  done();
}

function startDragCustomHandler(event, element) {
  console.log("start drag...")
}
