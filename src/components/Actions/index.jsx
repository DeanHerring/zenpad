import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faExpand, faMoon } from '@fortawesome/free-solid-svg-icons';
import { setShowSetting, setTheme } from '@/redux/slices/SettingSlice';
import { useDispatch, useSelector } from 'react-redux';

const Actions = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.SettingSlice);

  return (
    <div className="flex fixed top-[25px] left-[25px] z-10">
      <div
        onClick={() => dispatch(setShowSetting(true))}
        className="action_wrapper group w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer last:ml-[10px] duration-300"
      >
        <FontAwesomeIcon icon={faGear} className="action_icon text-[20px]" />
      </div>
      <div
        onClick={() => document.documentElement.webkitRequestFullscreen()}
        className="action_wrapper group w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer last:ml-[10px] duration-300"
      >
        <FontAwesomeIcon icon={faExpand} className="action_icon text-[20px]" />
      </div>
      <div
        onClick={() => dispatch(setTheme(state.theme === 0 ? 1 : 0))}
        className="action_wrapper group w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer last:ml-[10px] duration-300"
      >
        <FontAwesomeIcon icon={faMoon} className="action_icon text-[20px]" />
      </div>
    </div>
  );
};

export default Actions;
