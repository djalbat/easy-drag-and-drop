"use strict";

import withStyle from "easy-with-style";  ///

import { Body, React, window } from "easy";

window.assign({
  React
});

import View from "./example/view";

const { renderStyles } = withStyle;

const body = new Body(),
      view =

        <View/>

      ;

renderStyles();

body.mount(view);
