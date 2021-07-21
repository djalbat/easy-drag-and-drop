"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import DragDiv from "./div/drag";
import DropDiv from "./div/drop";

class View extends Element {
  childElements() {
    return ([

      <DropDiv/>,
      <DragDiv/>

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
