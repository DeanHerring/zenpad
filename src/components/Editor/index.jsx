import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Utils } from '@/utils/Utils';
import { sounds } from '@/sounds/sound';

import '@/styles/main.scss';
import '@/styles/theme.scss';
import { setShowInterface } from '@/redux/slices/SettingSlice';

const utils = new Utils();

const Editor = () => {
  const dispatch = useDispatch();
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
  const initSound = (e) => {
    if (localStorage.getItem('sound_name')) {
      handleSound(e, localStorage.getItem('sound_name').replace(/\s/g, '').toLowerCase());
    }
    if (state.soundName) {
      handleSound(e, state.soundName.replace(/\s/g, '').toLowerCase());
    }
  };
  const handleSound = (e, soundName) => {
    const { backspace, key_0, key_1, key_2, key_3, key_4, key_5, key_6, key_return, spacebar } = sounds[soundName];
    const randomNumber = Math.floor(Math.random() * 7);
    const keys = [key_0, key_1, key_2, key_3, key_4, key_5, key_6];

    e.keyCode === 8 && playSound(backspace);
    e.keyCode === 32 && playSound(spacebar);
    e.keyCode === 13 && playSound(key_return);
    e.keyCode !== 8 && e.keyCode !== 32 && e.keyCode !== 13 && playSound(keys[randomNumber]);
  };
  const playSound = (sound) => {
    const audio = new Audio(sound);

    audio.volume = volumeClickValue / 100;
    audio.play();
  };

  const blurValue = utils.parseLocalStorage('blur') !== undefined ? utils.parseLocalStorage('blur') : state.blur;
  const brightnessValue =
    utils.parseLocalStorage('brightness') !== undefined ? utils.parseLocalStorage('brightness') : state.brightness;

  const volumeClickValue =
    utils.parseLocalStorage('volume_click') !== undefined ? utils.parseLocalStorage('volume_click') : state.volumeClick;
  const backgroundImageValue = localStorage.getItem('background_image') || state.activeBackground;

  // Load Text
  useEffect(() => {
    if (editorRef.editor) {
      const text = localStorage.getItem('text') || state.text;
      editorRef.editor.setText(text);
    }
  }, [editorRef, localStorage.getItem('text'), state.text]);

  // Auto Save
  useEffect(() => {
    const saveText = () => {
      if (editorRef && editorRef.editor) {
        const text = editorRef.editor.getText();

        localStorage.setItem('text', text);
      }
    };

    const intervalId = setInterval(saveText, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [editorRef]);

  console.log('RE-RENDER');

  return (
    <div className="mid w-full min-h-screen bg-cover bg-no-repeat">
      <div className="w-full min-h-screen fixed top-0 left-0">
        <div
          style={
            localStorage.getItem('background_image') && {
              backgroundImage: `url('${backgroundImageValue}')`,
              filter: `brightness(${brightnessValue}%)`,
            }
          }
          className="w-full h-screen bg-cover bg-no-repeat"
        ></div>
        <div style={{ backdropFilter: `blur(${blurValue}px)` }} className="w-full h-screen fixed top-0 left-0"></div>
      </div>
      <div className="wallpaper fixed w-full h-full top-0 left-0 bg-cover bg-no-repeat"></div>
      <div className="hidden w-full h-[1px] bg-red-600 fixed top-1/2 -translate-y-1/2"></div>
      <div className="mid-container py-[100px]">
        <ReactQuill
          theme="snow"
          modules={{ toolbar: false }}
          onChange={centered}
          onKeyDown={(e) => {
            centered();
            initSound(e);
          }}
          onKeyUp={centered}
          onFocus={() => dispatch(setShowInterface(false))}
          onBlur={() => dispatch(setShowInterface(true))}
          className="font-ysa text-white-2 text-7xl max-w-[90%] w-[1000px] mx-auto"
          ref={(el) => {
            if (el) {
              editorRef = el;
            }
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
