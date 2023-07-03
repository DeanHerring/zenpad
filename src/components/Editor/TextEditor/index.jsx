import classNames from 'classnames';
import ReactQuill from 'react-quill';

import { setShowInterface } from '@/redux/slices/SettingSlice';
import { sounds } from '@/sounds/sound';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Utils } from '@/utils/Utils';
import { useRef, useEffect } from 'react';

import 'react-quill/dist/quill.snow.css';
import '@/styles/main.scss';
import '@/styles/theme.scss';

const TextEditor = () => {
  const utils = new Utils();

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      soundName: state.SettingSlice.soundName,
      showBorder: state.SettingSlice.showBorder,
      volumeClick: state.SettingSlice.volumeClick,
    };
  }, shallowEqual);

  const showBorder = JSON.parse(localStorage.getItem('show_border')) ?? state.showBorder;
  const volumeClick = utils.readLocalStorage('volume_click', state.volumeClick);

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
    audio.play();
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
    if (editorRef && editorRef.editor) {
      const text = editorRef.editor.getText();
      localStorage.setItem('text', text);
    }
  };

  // Load text
  useEffect(() => {
    if (editorRef.editor) {
      const text = localStorage.getItem('text') || state.text;
      editorRef.editor.setText(text);
    }
  }, [editorRef, localStorage.getItem('text'), state.text]);

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
            editorRef = el;
          }
        }}
      />
    </div>
  );
};

export default TextEditor;
