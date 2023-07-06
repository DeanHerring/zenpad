import classNames from 'classnames';
import ReactQuill from 'react-quill';

import { setShowInterface } from '@/redux/slices/SettingSlice';
import { sounds } from '@/sounds/sound';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Utils } from '@/utils/Utils';
import { useRef, useEffect, useContext } from 'react';
import { AppContext } from '@/App';

import 'react-quill/dist/quill.snow.css';
import '@/styles/main.scss';
import '@/styles/theme.scss';

const TextEditor = () => {
  const utils = new Utils();

  let refElement = useRef(null);

  const context = useContext(AppContext);

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      soundName: state.SettingSlice.soundName,
      showBorder: state.SettingSlice.showBorder,
      volumeClick: state.SettingSlice.volumeClick,
      fontSize: state.SettingSlice.fontSize,
      editorWidth: state.SettingSlice.editorWidth,
      text: state.SettingSlice.text,
      getText: state.SettingSlice.getText,
    };
  }, shallowEqual);

  const showBorder = JSON.parse(localStorage.getItem('show_border')) ?? state.showBorder;
  const volumeClick = utils.readLocalStorage('volume_click', state.volumeClick);
  const fontSize = utils.readLocalStorage('font_size', state.fontSize);
  const editorWidth = utils.readLocalStorage('editor_width', state.editorWidth);

  const scrollToElement = (element, block) => {
    const offsetTop = element.offsetTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const editorDOM = refElement.editor.root.closest('.quill');
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

  const getSoundName = () => {
    const condition = localStorage.getItem('sound_name') || state.soundName;
    return condition.replace(/\s/g, '').toLowerCase();
  };

  const playSound = (sound) => {
    const audio = new Audio(sound);

    audio.volume = volumeClick / 100;
    void audio.play();
  };

  const initSound = (e) => {
    const soundName = getSoundName();
    const sound = sounds[soundName];

    if (sound) {
      const randomNumber = utils.getRandomIntInRange(0, 7);
      const keys = [sound.key_0, sound.key_1, sound.key_2, sound.key_3, sound.key_4, sound.key_5, sound.key_6];

      switch (e.keyCode) {
        case 8:
          playSound(sound.backspace);
          break;
        case 13:
          playSound(sound.spacebar);
          break;
        case 32:
          playSound(sound.key_return);
          break;
        default:
          playSound(keys[randomNumber]);
      }
    }
  };

  const onKeyDown = (e) => {
    viewCenter();
    initSound(e);
  };

  const saveText = () => {
    if (refElement && refElement.editor) {
      const text = refElement.editor.getText();
      localStorage.setItem('text', text);
    }
  };

  const getEditorText = () => {
    if (refElement && refElement.editor) {
      return refElement.editor.getText();
    }
  };
  context.getEditorText = getEditorText;

  // Load text
  useEffect(() => {
    if (refElement && refElement.editor) {
      const text = localStorage.getItem('text') || state.text;

      refElement.editor.setText(text);
    }
  }, [refElement, state.text]);

  // Save before exit
  useEffect(() => {
    const saveBeforeExit = (e) => {
      e.preventDefault();
      saveText();
    };

    window.addEventListener('beforeunload', saveBeforeExit);

    return () => {
      window.removeEventListener('beforeunload', saveBeforeExit);
    };
  }, []);

  // Update font size and editor width
  useEffect(() => {
    const applyFontSize = () => {
      const defaultFontSize = 24;
      const editor = refElement.editor.root;
      const pArr = editor.children;

      for (const p of pArr) {
        p.style.fontSize = `${(fontSize / 100) * defaultFontSize}px`;
      }
    };

    if (refElement && refElement.editor) {
      applyFontSize();

      const editor = refElement.editor.root;
      const root = editor.closest('.quill');

      root.style.width = `${editorWidth}%`;
    }
  }, [fontSize, editorWidth]);

  return (
    <div className="mid-container py-[100px]">
      <ReactQuill
        theme="snow"
        modules={{ toolbar: false }}
        onKeyDown={onKeyDown}
        onKeyUp={viewCenter}
        onFocus={() => dispatch(setShowInterface(false))}
        onBlur={() => dispatch(setShowInterface(true))}
        className={classNames(
          showBorder && 'show_border',
          'font-ysa text-white-2 text-7xl max-w-[90%] w-[1300px] mx-auto',
        )}
        ref={(el) => {
          if (el) {
            refElement = el;
          }
        }}
      />
    </div>
  );
};

export default TextEditor;
