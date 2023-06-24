const editor = document.querySelector('#editor');

const centered = () => {
  let selection = window.getSelection();
  let range = selection.getRangeAt(0);
  let currentNode = range.startContainer;

  while (currentNode.nodeType !== Node.ELEMENT_NODE) {
    currentNode = currentNode.parentNode;
  }

  currentNode.scrollIntoView({
    block: 'center',
    inline: 'end',
    behavior: 'smooth',
  });
};

var quill = new Quill(editor, {
  theme: 'snow',
  modules: {
    toolbar: false,
  },
  placeholder: 'Hello, world',
});
//

editor.addEventListener('keydown', centered);
editor.addEventListener('keyup', centered);
quill.on('text-change', centered);
