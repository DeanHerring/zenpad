import classNames from 'classnames';
import InputSlider from '@/components/Setting/InputSlider';
import SelectList from '@/components/Setting/SelectList';
import Checkbox from '@/components/Setting/Checkbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { background } from '@/images/images';
import {
  setShowSetting,
  setBrightness,
  setBlur,
  setActiveBackground,
  setSoundName,
  setVolumeClick,
  setText,
  setEditorWidth,
  setFontSize,
} from '@/redux/slices/SettingSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { Utils } from '@/utils/Utils';
import { useContext, useRef } from 'react';
import { AppContext } from '@/App';
import { motion, AnimatePresence } from 'framer-motion';

import 'swiper/css';
import '@/styles/main.scss';
import '@/styles/theme.scss';

const fadeAnimation = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};
const fadeLeftAnimation = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' },
};
const transition = {
  duration: 0.3,
};

const Setting = () => {
  const utils = new Utils();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.SettingSlice);
  const importFilesRef = useRef(null);
  const context = useContext(AppContext);

  const handleInputValue = (value, sliceMethod, storageID) => {
    dispatch(sliceMethod(value));
    localStorage.setItem(storageID, value);
  };

  // Импорт файлов
  const importFile = (e) => {
    const file = e.target.files[0];
    if (file.name.endsWith('.txt')) {
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const text = e.target.result;

        if (text.length) {
          dispatch(setText(text));
          localStorage.setItem('text', text);
        } else {
          console.log('Произошла ошибка во время чтения файла');
        }
      });
      reader.readAsText(file);
    } else {
      console.log('Выбранный файл не является текстовым файлом (.txt)');
    }
  };

  // Экспорт файлов
  const exportFile = () => {
    const text = context.getEditorText();

    let el = document.createElement('a');

    el.href = 'data:attachment/text,' + encodeURI(text);
    el.target = '_blank';
    el.download = `${new Date().toLocaleDateString()}.txt`;
    el.click();
  };

  // @TODO: Сделать что-то с етим непотребством
  const blur = utils.readLocalStorage('blur', state.blur);
  const brightness = utils.readLocalStorage('brightness', state.brightness);
  const volumeClick = utils.readLocalStorage('volume_click', state.volumeClick);
  const fontSize = utils.readLocalStorage('font_size', state.fontSize);
  const editorWidth = utils.readLocalStorage('editor_width', state.editorWidth);

  const activeSound = localStorage.getItem('sound_name') || state.soundName;

  const sounds = [
    'Wood',
    '8 bit',
    'Blaster',
    'Case',
    'Frogs',
    'HF',
    'Icicles',
    'Leaves',
    'Paws',
    'Scope',
    'Springs',
    'Toy Piano',
  ];

  const changeBackground = (url) => {
    if (url === state.activeBackground) {
      dispatch(setActiveBackground(''));
      localStorage.removeItem('background_image');
    } else {
      dispatch(setActiveBackground(url));
      localStorage.setItem('background_image', url);
    }
  };

  const customBackground = () => {
    const url = prompt('Вставьте ссылку на изображение');

    if (url) {
      const image = new Image();

      image.addEventListener('load', () => {
        localStorage.setItem('background_image', url);
        dispatch(setActiveBackground(url));
      });
      image.addEventListener('error', () => alert('Ты блять дурак?'));

      image.src = url;
    }
  };

  return (
    <AnimatePresence>
      {state.showSetting && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={fadeAnimation}
          transition={transition}
          className="fixed w-full h-screen z-10 bg-black-2/50"
        >
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={fadeLeftAnimation}
            transition={transition}
            className="setting__body w-1/3 fixed top-0 h-screen right-0 md-1000:w-1/2 sm-500:w-full overflow-y-scroll"
          >
            <div onClick={() => dispatch(setShowSetting(false))} className="m-[25px]">
              <FontAwesomeIcon icon={faXmark} className="setting_close text-[30px] cursor-pointer" />
            </div>
            <div className="m-[25px]">
              <header>
                <h1 className="setting_title font-rubik font-medium text-[32px]">Настройки</h1>
              </header>

              {/* Импорт и экспорт */}
              <div className="mt-[25px] grid grid-cols-2 gap-[10px] md-750:block">
                <input type="file" ref={importFilesRef} className="hidden" onChange={(e) => importFile(e)} />
                <button
                  onClick={() => importFilesRef.current.click()}
                  className="setting_button rounded-[5px] py-[7.5px] px-[15px] font-rubik duration-300 md-750:w-full"
                >
                  Import
                </button>
                <button
                  onClick={exportFile}
                  className="setting_button rounded-[5px] py-[7.5px] px-[15px] font-rubik duration-300 flex items-center justify-center md-750:w-full md-750:mt-[10px]"
                >
                  Export
                </button>
              </div>

              {/* Звуки клавиш и цветовая тема */}
              <div className="mt-[25px] grid grid-cols-2 gap-[10px] md-1100:block ">
                <SelectList
                  title="Звуки клавиш"
                  activeValue={activeSound}
                  items={sounds}
                  sliceMethod={setSoundName}
                  storageID="sound_name"
                />
              </div>

              {/* Громкость при нажатии */}
              <div className="mt-[25px] grid grid-cols-2 gap-[10px] md-1000:block">
                <InputSlider
                  title="Громкость при нажатии"
                  onChange={(e) => handleInputValue(e.target.value, setVolumeClick, 'volume_click')}
                  value={volumeClick}
                  min={0}
                  max={100}
                />
              </div>

              {/* Задний фон */}
              <div className="mt-[25px]">
                <h3 className="background_title font-rubik text-black-1">Задний фон</h3>

                <Swiper spaceBetween={10} slidesPerView="auto" className="mt-[10px]">
                  {background.map((url, index) => {
                    return (
                      <SwiperSlide key={index} onClick={() => changeBackground(url)} className="w-[300px] h-[200px]">
                        <div className="slider_background relative">
                          <div
                            style={{ backgroundImage: `url(${url})` }}
                            className="bg-1 w-[300px] h-[200px] bg-cover rounded-[10px] cursor-pointer"
                          ></div>
                          <div
                            className={classNames(
                              localStorage.getItem('background_image') !== url && 'hidden',
                              'slider_background-overlay absolute top-0 left-0 w-full h-full z-10 bg-black-2/50 rounded-[10px] flex justify-center items-center cursor-pointer',
                            )}
                          >
                            <div className="w-[100px] h-[100px] rounded-full bg-white-1 flex justify-center items-center border-[5px] border-white-1">
                              <FontAwesomeIcon icon={faCheck} className="text-black-1 text-[50px]" />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>

              {/* Кастомный беграунд */}
              <div className="mt-[25px] grid grid-cols-2 gap-[10px] md-750:block">
                <button
                  onClick={() => customBackground()}
                  className="setting_button rounded-[5px] py-[7.5px] px-[15px] font-rubik duration-300 md-750:w-full"
                >
                  Custom Background
                </button>
              </div>

              {/* Затемнение и размытие заднего фона */}
              <div className="mt-[25px] grid grid-cols-2 gap-[10px] md-1000:block">
                <InputSlider
                  title="Brightness"
                  onChange={(e) => handleInputValue(e.target.value, setBrightness, 'brightness')}
                  value={brightness}
                  min={0}
                  max={100}
                />
                <InputSlider
                  min={0}
                  max={100}
                  title="Blur"
                  onChange={(e) => handleInputValue(e.target.value, setBlur, 'blur')}
                  value={blur}
                />
              </div>

              {/* Регулировка размера текста */}
              <div className="mt-[25px] grid grid-cols-2 gap-[10px] md-1000:block">
                <InputSlider
                  title="Font Size"
                  onChange={(e) => handleInputValue(e.target.value, setFontSize, 'font_size')}
                  value={fontSize}
                  min={80}
                  max={200}
                />
                <InputSlider
                  title="Editor Width"
                  onChange={(e) => handleInputValue(e.target.value, setEditorWidth, 'editor_width')}
                  value={editorWidth}
                  min={10}
                  max={100}
                />
              </div>

              {/* Показать/Скрыть рамку */}
              <Checkbox title="Показывать рамку" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Setting;
