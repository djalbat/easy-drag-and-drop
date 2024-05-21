# Easy Drag and Drop

Drag and drop functionality for Easy elements.

Two elements are exported, one for dragging and one for dropping. Two collections of mixins are also exported, which you can assign directly to the class prototypes of your elements if you prefer.

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). What this means is that Easy *will* now help you with the architecture of your large application. So although Easy elements will continue to work standalone, their use with Juxtapose is recommended.

### Easy projects

- [Easy](https://github.com/djalbat/easy) Elements that abstract away from the DOM.
- [Easy Layout](https://github.com/djalbat/easy-layout) Layout elements that work with CSS flexbox.
- [Easy Mobile](https://github.com/djalbat/easy-mobile) Touch gestures for mobile web applications.
- [Easy Navigation](https://github.com/djalbat/easy-navigation) A responsive accordion and associated navigation.
- [Easy File System](https://github.com/djalbat/easy-file-system) A file system explorer and a rubbish bin.
- [Easy RichTextarea](https://github.com/djalbat/easy-richTextarea) A textarea element that handles and hands off events well.
- [Easy Drag and Drop](https://github.com/djalbat/easy-drag-and-drop) Drag and drop functionality for Easy elements.

## Installation

You can install Easy Drag and Drop with [npm](https://www.npmjs.com/):

    npm install easy-drag-and-drop

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy-drag-and-drop.git

...and then install the dependencies with npm from within the project's topmost directory:

    npm install

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding`src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

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

Note that, as well as calling the requisite enable and disable methods, the `DragElement` and `DropElement` classes also have static `ignoredProperties` fields for the corresponding JSX attributes such as `onDrag` and the like. In fact you can also make use of these attributes in classes that do not extend these classes but nonetheless invoke the enable and disbale methods, because the functionality is implemented in these methods, however you will need to ignore the corresponding JSX attributes explicitly.

In the following listing the drop mixins have been used to add drop functionality an element:

```
class DropDiv extends Element {
  dropHandler(dragElement, aborted, element, done) {
    dragElement.remove();
    
    done();
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

Note that the `dropHandler()` method is asynchronous, taking a last `done` callback argument that must be invoked.

Also note that the drag element that has been dropped onto the drop element is passed as the first argument to the drop handler for convenience. Note also that the usual `event` argument is missing because this is a custom event, not a standard DOM event.

Finally, note that dropping a drag element onto a drop element results in no changes to either by default and you must add the required behaviour. In the examples, for example, the drag element is simply removed when it is dropped. Be careful of re-positioning drag elements in the DOM when they are successfully dropped, by the way, as they have several event handlers. You are better off removing and re-creating them.

## Styles

Styles are by way of [Easy with Style](https://github.com/djalbat/easy-with-style). A small amount of styling must be applied to draggable elements in order to make them work. For example:

```
class DragDiv extends Element {
  ...
}

Object.assign(DragDiv.prototype, dragMixins);

export default withStyle(DragDiv)`

  ... 

  .dragging {
    z-index: 1;
    position: fixed;
    pointer-events: none;
  }

`;
```

The `z-index` and `position` styles really must be set. The `pointer-events` style is optional but recommended. It results in the text in draggable elements being un-selectable, but this is usually the preferred behaviour.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
