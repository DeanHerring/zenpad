import Setting from '@/components/Setting';
import Actions from '@/components/Actions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '@/styles/main.scss';

const Main = () => {
  const state = useSelector((state) => state.SettingSlice);

  let editorRef = useRef(null);

  const scrollToElement = (element, block) => {
    const offsetTop = element.offsetTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const editorDOM = editorRef.editor.root.closest('.quill');
    const editor_offset = editorDOM.offsetTop;

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
  };

  const centered = () => {
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

  const brightnessValue =
    parseInt(localStorage.getItem('brightness')) !== undefined
      ? parseInt(localStorage.getItem('brightness'))
      : state.brightness;

  const blur =
    parseInt(localStorage.getItem('blur')) !== undefined ? parseInt(localStorage.getItem('blur')) : state.blur;

  return (
    <>
      <Actions />
      <Setting />

      <div className="mid w-full min-h-screen bg-white-1 bg-cover bg-no-repeat">
        <div className="w-full min-h-screen fixed top-0 left-0">
          <div
            style={{
              backgroundImage: `url(${state.activeBackground})`,
              filter: `brightness(${brightnessValue}%)`,
            }}
            className="w-full h-screen bg-cover bg-no-repeat"
          ></div>
          <div style={{ backdropFilter: `blur(${blur}px)` }} className="w-full h-screen fixed top-0 left-0"></div>
        </div>
        <div className="wallpaper fixed w-full h-full top-0 left-0 bg-cover bg-no-repeat"></div>
        <div className="hidden w-full h-[1px] bg-red-600 fixed top-1/2 -translate-y-1/2"></div>
        <div className="mid-container py-[100px]">
          <ReactQuill
            theme="snow"
            modules={{ toolbar: false }}
            value="Writer something beatiful..."
            onChange={centered}
            onKeyDown={centered}
            onKeyUp={centered}
            className="font-ysa text-white-2 text-7xl max-w-[90%] w-[1300px] mx-auto"
            ref={(el) => {
              editorRef = el;
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
