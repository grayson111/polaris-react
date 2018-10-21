enum EditableTarget {
  Input = 'INPUT',
  Textarea = 'TEXTAREA',
  Select = 'SELECT',
  ContentEditable = 'contenteditable',
}

function isInputFocused() {
  if (document == null) {
    return false;
  }

  const {tagName} = document.activeElement;
  return (
    tagName === EditableTarget.Input ||
    tagName === EditableTarget.Textarea ||
    tagName === EditableTarget.Select ||
    document.activeElement.hasAttribute(EditableTarget.ContentEditable)
  );
}

export default isInputFocused;
