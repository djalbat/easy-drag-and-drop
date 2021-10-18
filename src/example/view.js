"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import DragDiv from "./div/drag";
import DropDiv from "./div/drop";

class View extends Element {
  childElements() {
    return ([

      <DropDiv/>,
      <DragDiv onDrag={dragHandler} onStopDrag={stopDragHandler} onStartDrag={startDragHandler} />

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 10rem;
      
`;

function dragHandler(element) {
  console.log("drag")
}

function stopDragHandler(dropElement, aborted, element, done) {
  console.log(`...stop drag ${aborted}`)

  done();
}

function startDragHandler(element) {
  console.log("start drag...")
}
