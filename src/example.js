"use strict";

import "./preamble";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";

import View from "./example/view";

const { renderStyles } = withStyle;

const body = new Body(),
      view =

        <View/>

      ;

renderStyles();

body.mount(view);
