const quill = new Quill("#editor", {
    theme: "snow",
    modules: {
        toolbar: false,
    },
})

const editor = document.querySelector('#editor');

const scrollToElement = (element, block) => {
    const offsetTop = element.offsetTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const editorDOM = editor.querySelector('.ql-editor');
    const editor_offset = editorDOM.offsetTop;

    let scrollPosition;

    block === "center"
        ? scrollPosition = offsetTop - windowHeight / 2 + element.offsetHeight + editor_offset
        : scrollPosition = offsetTop

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
};

const viewCenter = () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let currentNode = range.startContainer;

        while (currentNode.nodeType !== Node.ELEMENT_NODE) {
            currentNode = currentNode.parentNode;
        }

        scrollToElement(currentNode, 'center');
    }
};

editor.addEventListener('keyup', viewCenter)
