# Easy Drag and Drop

Drag and drop functionality for Easy elements.

Two elements are exported, one for dragging and one for dropping. Two collections of mixins are also exported, which you can assign directly to the class prototypes of your elements if you prefer.

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). So although you will always be able to call constructors directly if you wish, creating Easy elements by way of JSX is *highly recommended*. The contents of this readme file will stay as a reference, however a much better place to start from now on is the online documentation for Juxtapose. The section dealing directly with this project is here:

**[Juxtapose online documentation - Easy-DragAndDrop](http://juxtapose.info/#easy-draganddrop)**

From there you can easily navigate to get an overview of Juxtapose.

### Related projects

- [Easy](https://github.com/djalbat/easy) Elements that abstract away from the DOM.
- [Easy Layout](https://github.com/djalbat/easy-layout) Layout elements that work with CSS flexbox.
- [Easy File System](https://github.com/djalbat/easy-file-system) A file system explorer and a rubbish bin.
- [Easy RichTextarea](https://github.com/djalbat/easy-richrextarea) A textarea element that handles and hands off events well.

## Installation

You can install Easy-DragAndDrop with [npm](https://www.npmjs.com/):

    npm install easy-draganddrop

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy-draganddrop.git

...and then install the dependencies with npm from within the project's topmost directory:

    npm install

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
