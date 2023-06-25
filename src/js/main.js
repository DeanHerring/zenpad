const editor = document.querySelector('#editor');

// function scrollToElement(element) {
//   // Получаем позицию элемента относительно верхней границы документа
//   var offsetTop = element.offsetTop;

//   // Прокручиваем документ до позиции элемента
//   window.scrollTo({
//     top: offsetTop,
//     behavior: 'smooth', // Используем плавную прокрутку, если поддерживается
//   });
// }

// Ещё лучше, осталось только решить проблему с внешними паддингами
function scrollToElement(element, block) {
  var offsetTop = element.offsetTop;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  var scrollPosition;
  if (block === 'center') {
    scrollPosition = offsetTop - windowHeight / 2 + element.offsetHeight;
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
  placeholder: 'Hello, world',
});
//

editor.addEventListener('keydown', centered);
editor.addEventListener('keyup', centered);
quill.on('text-change', centered);
