# Easy Drag and Drop

Drag and drop functionality for Easy elements.

Two elements are exported, one for dragging and one for dropping. Two collections of mixins are also exported, which you can assign directly to the class prototypes of your elements if you prefer.

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). What this means is that Easy *will* now help you with the architecture of your large application. So although Easy elements will continue to work standalone, their use with Juxtapose is recommended.

### Related projects

- [Easy](https://github.com/djalbat/easy) Elements that abstract away from the DOM.
- [Easy Layout](https://github.com/djalbat/easy-layout) Layout elements that work with CSS flexbox.
- [Easy File System](https://github.com/djalbat/easy-file-system) A file system explorer and a rubbish bin.
- [Easy RichTextarea](https://github.com/djalbat/easy-richtextarea) A textarea element that handles and hands off events well.

## Installation

You can install Easy Drag and Drop with [npm](https://www.npmjs.com/):

    npm install easy-drag-and-drop

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy-drag-and-drop.git

...and then install the dependencies with npm from within the project's topmost directory:

    npm install

## Usage

The `DragElement` and `DropElement` classes can be subclassed directly in order to create your own elements. The listing for the former is given here to highlight the styles that come with it and are necessary in order for it to drag properly:

```
"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

import dragMixins from "../mixins/drag";

class DragElement extends Element {
  didMount() {
    this.enableDrag();
  }

  willUnmount() {
    this.disableDrag();
  }
}

Object.assign(DragElement.prototype, dragMixins);

export default withStyle(DragElement)`

  .dragging {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }
  
`;
```

Note the enabling and disabling of the drag functionality in the `didMount()` and `willUnmount()` methods, respectively. The `DropElement` class is similar, but needs no additional styling. If you choose to make use of the mixins rather than subclassing these classes, you must enalbe and disable the functionality in similar fashion.

In the following listing the drop mixins have been used to add drop functionality an element:

```
class DropDiv extends Element {
  dropHandler(dragElement, element) {
    dragElement.remove();
  }

  didMount() {
    this.enableDrop();

    this.onDrop(this.dropHandler, this);
  }

  willUnmount() {
    this.offDrop(this.dropHandler, this);

    this.disableDrop();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "drop"
  };
}
```

Note that the drag element that has been dropped onto the drop element is passed as the first argument to the drop handler for convenience. Note also that the usual `event` argument is missing because this is a custom event, not a standard DOM event.

Finally, note that dropping a drag element onto a drop element results in no changes to either by default and you must add the required behaviour. In the examples, for example, the drag element is simply removed when it is dropped. Be careful of re-positioning drag elements in the DOM when they are successfully dropped, by the way, as they have several event handlers. You are better off removing and re-creating them.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
