const editor = document.querySelector('#editor');

// Ещё лучше, осталось только решить проблему с внешними паддингами
// Идеально?
function scrollToElement(element, block) {
  const offsetTop = element.offsetTop;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const editor_offset = editor.offsetTop;

  let scrollPosition;

  if (block === 'center') {
    scrollPosition = offsetTop - windowHeight / 2 + element.offsetHeight + editor_offset;
  } else {
    scrollPosition = offsetTop;
  }

  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth',
  });
}

const centered = () => {
  let selection = window.getSelection();
  let range = selection.getRangeAt(0);
  let currentNode = range.startContainer;

  while (currentNode.nodeType !== Node.ELEMENT_NODE) {
    currentNode = currentNode.parentNode;
  }

  //   currentNode.scrollIntoView({
  //     block: 'center',
  //     inline: 'end',
  //     behavior: 'smooth',
  //   });
  scrollToElement(currentNode, 'center');
};

var quill = new Quill(editor, {
  theme: 'snow',
  modules: {
    toolbar: false,
  },
  placeholder: 'Write something awesome...',
});
//

editor.addEventListener('keydown', centered);
editor.addEventListener('keyup', centered);
quill.on('text-change', centered);
