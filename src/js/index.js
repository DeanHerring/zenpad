const quill = new Quill("#editor", {
    theme: "snow",
    modules: {
        toolbar: false,
    },
    placeholder: "Farting..."
})

const editor = document.querySelector('#editor');

const scrollToElement = (element, block) => {
    const editorContent = editor.querySelector('.ql-editor'); // Знайти внутрішній контейнер редактора
    const offsetTop = element.offsetTop;
    const editorHeight = editor.clientHeight;

    let scrollPosition;

    if (block === 'center') {
        scrollPosition = offsetTop - editorHeight / 2 + element.offsetHeight / 2;
    } else {
        scrollPosition = offsetTop;
    }

    // Прокрутка внутрішнього контейнера редактора
    editorContent.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
    });
};

const viewCenter = () => {
    let selection = window.getSelection();

    if (selection.rangeCount > 0) {
        let range = selection.getRangeAt(0);
        let currentNode = range.startContainer;

        while (currentNode.nodeType !== Node.ELEMENT_NODE) {
            currentNode = currentNode.parentNode;
        }

        scrollToElement(currentNode, 'center');
    }
};

editor.addEventListener('keyup', viewCenter);
