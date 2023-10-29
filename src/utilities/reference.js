"use strict";

export function checkDragElementIgnoresDropElement(dragElement, dropElement) {
  const reference = dropElement.getReference(),
        references = dragElement.getReferences(),
        referencesIncludesReference = references.includes(reference),
        dragElementIgnoresDropElement = !referencesIncludesReference;

  return dragElementIgnoresDropElement;
}