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
  setTheme,
} from '@/redux/slices/SettingSlice';
import InputSlider from '@/components/Setting/InputSlider';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { Utils } from '@/utils/Utils';
import SelectList from '@/components/Setting/SelectList';

const utils = new Utils();

const Setting = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.SettingSlice);

  const handleInputValue = (value, sliceMethod, storageID) => {
    dispatch(sliceMethod(value));
    localStorage.setItem(storageID, value);
  };

  const blurValue = utils.parseLocalStorage('blur') !== undefined ? utils.parseLocalStorage('blur') : state.blur;
  const brightnessValue =
    utils.parseLocalStorage('brightness') !== undefined ? utils.parseLocalStorage('brightness') : state.brightness;
  const activeSound = localStorage.getItem('sound_name') || state.soundName;
  const activeTheme = localStorage.getItem('theme_name') || state.themeName;

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
  const themes = ['Light Theme', 'Dark Theme'];

  return (
    <div className={classNames(!state.showSetting && 'hidden', 'fixed w-full h-screen z-10 bg-black-2/50')}>
      <div className="setting__body w-1/3 fixed top-0 h-screen bg-white-1 right-0 md-1000:w-1/2 sm-500:w-full overflow-y-scroll">
        <div onClick={() => dispatch(setShowSetting(false))} className="m-[25px]">
          <FontAwesomeIcon icon={faXmark} className="text-black-1 text-[30px] cursor-pointer" />
        </div>
        <div className="m-[25px]">
          <header>
            <h1 className="font-rubik font-medium text-[32px] text-black-1">Настройки</h1>
          </header>
          <div className="mt-[25px] grid grid-cols-2 gap-[10px] md-1100:block ">
            <SelectList
              title="Звуки клавиш"
              activeValue={activeSound}
              items={sounds}
              sliceMethod={setSoundName}
              storageID="sound_name"
            />
            <SelectList
              title="Цветовая тема"
              activeValue={activeTheme}
              items={themes}
              sliceMethod={setTheme}
              storageID="theme_name"
            />
          </div>
          {/* <div className="mt-[25px] grid grid-cols-2 gap-[10px] md-750:block">
            <button className="bg-white-2 rounded-[5px] text-black-1 py-[7.5px] px-[15px] font-rubik duration-300 hover:text-black-1 hover:bg-gray-3 md-750:w-full">
              Import
            </button>
            <button className="bg-white-2 rounded-[5px] text-black-1 py-[7.5px] px-[15px] font-rubik duration-300 hover:text-black-1 hover:bg-gray-3 flex items-center justify-center md-750:w-full md-750:mt-[10px]">
              Export
              <h3 className="font-rubik text-gray-2 ml-[5px]">(14kb)</h3>
            </button>
          </div>
          <div className="mt-[25px] grid grid-cols-2 gap-[10px] md-1100:block">
            <div>
              <h3 className="font-rubik text-black-1">Цветовая тема</h3>
              <div id="theme" className="ol__select relative mt-[10px]">
                <div className="ol__select-top bg-white-2 flex items-center justify-between py-[7.5px] px-[15px] rounded-[5px] cursor-pointer">
                  <h3 className="ol__select-active font-rubik">Light Theme</h3>
                  <FontAwesomeIcon icon={faSortUp} className="text-black-1" />
                </div>
                <div className="ol__select-list absolute z-10 w-full hidden overflow-y-scroll">
                  <ul className="max-h-[300px]">
                    <li
                      data-item="Light Theme"
                      className="ol__select-item font-rubik bg-white-2 py-[7.5px] px-[15px] last:rounded-b-[4px] cursor-pointer duration-300 hover:bg-gray-3"
                    >
                      Light Theme
                    </li>
                    <li
                      data-item="Dark Theme"
                      className="ol__select-item font-rubik bg-white-2 py-[7.5px] px-[15px] last:rounded-b-[4px] cursor-pointer duration-300 hover:bg-gray-3"
                    >
                      Dark Theme
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md-1100:mt-[25px]">
              <h3 className="font-rubik text-black-1">Звуки клавиш</h3>
              <div id="sound" className="ol__select relative mt-[10px]">
                <div className="ol__select-top bg-white-2 flex items-center justify-between py-[7.5px] px-[15px] rounded-[5px] cursor-pointer">
                  <h3 className="ol__select-active font-rubik">Wood</h3>
                  <FontAwesomeIcon icon={faSortUp} className="text-black-1" />
                </div>
                <div className="ol__select-list absolute z-10 w-full hidden overflow-y-scroll">
                  <ul className="max-h-[300px]">
                    {[...new Array(10)].map((_, index) => {
                      return (
                        <li
                          key={index}
                          data-item={index}
                          className="ol__select-item font-rubik bg-white-2 py-[7.5px] px-[15px] last:rounded-b-[4px] cursor-pointer duration-300 hover:bg-gray-3"
                        >
                          Wood {index}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[25px] grid grid-cols-2 gap-[10px] md-1000:block">
            <div>
              <h3 className="font-rubik text-black-1">
                Ширина листа <span className="paper_width text-gray-3">(90%)</span>
              </h3>
              <div className="mt-[10px]">
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="90"
                  className="slider slider__paper-width"
                  id="mySlider"
                />
              </div>
            </div>
            <div>
              <h3 className="font-rubik text-black-1">
                Размер шрифта <span className="font_size text-gray-3">(16px)</span>
              </h3>
              <div className="mt-[10px]">
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="16"
                  className="slider slider__font-size"
                  id="mySlider"
                />
              </div>
            </div>
            <div className="volume_click">
              <h3 className="font-rubik text-black-1">
                Громкость при нажатии <span className="volume_click text-gray-3">(30%)</span>
              </h3>
              <div className="mt-[10px]">
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="30"
                  className="slider slider__volume-click"
                  id="mySlider"
                />
              </div>
            </div>
          </div>
          <div className="mt-[25px] flex items-center">
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
            <h3 className="font-rubik text-black-1">Задний фон</h3>
            <Swiper spaceBetween={50} className="mt-[10px]">
              {background.map((url, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    onClick={() => handleInputValue(url, setActiveBackground, 'background_image')}
                  >
                    <div className="slider_background relative">
                      <div
                        style={{ backgroundImage: `url(${url})` }}
                        className="bg-1 w-full h-[350px] bg-cover rounded-[10px] cursor-pointer"
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
        </div>
      </div>
    </div>
  );
};

export default Setting;
