import { useSelector, shallowEqual } from 'react-redux';
import { Utils } from '@/utils/Utils';

const Wallpaper = () => {
  const utils = new Utils();

  const state = useSelector((state) => {
    return {
      blur: state.SettingSlice.blur,
      brightness: state.SettingSlice.brightness,
      activeBackground: state.SettingSlice.activeBackground,
    };
  }, shallowEqual);

  const blur = utils.readLocalStorage('blur', state.blur);
  const brightness = utils.readLocalStorage('brightness', state.brightness);

  const backgroundImage = localStorage.getItem('background_image') ?? state.activeBackground;

  return (
    <div className="w-full min-h-screen fixed top-0 left-0">
      <div
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          filter: `brightness(${brightness}%)`,
        }}
        className="w-full h-screen bg-cover bg-no-repeat"
      ></div>
      <div style={{ backdropFilter: `blur(${blur}px)` }} className="w-full h-screen fixed top-0 left-0"></div>
    </div>
  );
};

export default Wallpaper;
