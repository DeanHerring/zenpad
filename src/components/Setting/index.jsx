import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSortUp, faCheck } from '@fortawesome/free-solid-svg-icons';

import '@/styles/main.scss';
import classNames from 'classnames';
import { background } from '@/images/images';
import {
  setShowSetting,
  setBrightness,
  setBlur,
  setActiveBackground,
  setSoundName,
  setVolumeClick,
  setText,
} from '@/redux/slices/SettingSlice';
import InputSlider from '@/components/Setting/InputSlider';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { useDispatch, useSelector } from 'react-redux';
import { Utils } from '@/utils/Utils';
import SelectList from '@/components/Setting/SelectList';
import { useRef } from 'react';
import Checkbox from '@/components/Setting/Checkbox';

import 'swiper/css';
import '@/styles/theme.scss';

const utils = new Utils();

const Setting = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.SettingSlice);
  const importFilesRef = useRef(null);

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
    // Надо сейвить принудительно

    const text = localStorage.getItem('text') || state.text;

    let el = document.createElement('a');

    el.href = 'data:attachment/text,' + encodeURI(text);
    el.target = '_blank';
    el.download = `${new Date().toLocaleDateString()}.txt`;
    el.click();
  };

  // @TODO: Сделать что-то с етим непотребством
  const blurValue = utils.parseLocalStorage('blur') !== undefined ? utils.parseLocalStorage('blur') : state.blur;
  const brightnessValue =
    utils.parseLocalStorage('brightness') !== undefined ? utils.parseLocalStorage('brightness') : state.brightness;

  const activeSound = localStorage.getItem('sound_name') || state.soundName;

  const volumeClickValue =
    utils.parseLocalStorage('volume_click') !== undefined ? utils.parseLocalStorage('volume_click') : state.volumeClick;

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
    <div className={classNames(!state.showSetting && 'hidden', 'fixed w-full h-screen z-10 bg-black-2/50')}>
      <div className="setting__body w-1/3 fixed top-0 h-screen right-0 md-1000:w-1/2 sm-500:w-full overflow-y-scroll">
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
              <h3 className="font-rubik text-gray-2 ml-[5px]">({parseInt(state.textSize)}KB)</h3>
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
            {/* <SelectList
              title="Цветовая тема"
              activeValue={activeTheme}
              items={themes}
              sliceMethod={setTheme}
              storageID="theme_name"
            /> */}
          </div>

          {/* Громкость при нажатии */}
          <div className="mt-[25px] grid grid-cols-2 gap-[10px] md-1000:block">
            <InputSlider
              title="Громкость при нажатии"
              onChange={(e) => handleInputValue(e.target.value, setVolumeClick, 'volume_click')}
              value={volumeClickValue}
              min={0}
              max={100}
            />
          </div>

          {/* <div className="mt-[25px] flex items-center">
            <h3 className="font-rubik text-black-1">Показывать рамку</h3>
            <div
              id="show_border"
              className="w-[20px] h-[20px] rounded-[2px] bg-white-2 ml-[10px] cursor-pointer flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faCheck} className="text-white-1" />
            </div>
          </div> */}

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
              value={brightnessValue}
              min={0}
              max={100}
            />
            <InputSlider
              min={0}
              max={100}
              title="Blur"
              onChange={(e) => handleInputValue(e.target.value, setBlur, 'blur')}
              value={blurValue}
            />
          </div>

          {/* Показать/Скрыть рамку */}
          <Checkbox title="Показывать рамку" />
        </div>
      </div>
    </div>
  );
};

export default Setting;
