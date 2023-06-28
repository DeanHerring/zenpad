import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faExpand } from '@fortawesome/free-solid-svg-icons';
import { setShowSetting } from '@/redux/slices/SettingSlice';
import { useDispatch } from 'react-redux';

const Actions = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex fixed top-[25px] left-[25px] z-10">
      <div
        onClick={() => dispatch(setShowSetting(true))}
        className="group w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer last:ml-[10px] duration-300 hover:bg-white-2"
      >
        <FontAwesomeIcon icon={faGear} className="text-white-1 text-[20px] duration-300 group-hover:text-black-1" />
      </div>
      <div className="group w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer last:ml-[10px] duration-300 hover:bg-white-2">
        <FontAwesomeIcon icon={faExpand} className="text-white-1 text-[20px] duration-300 group-hover:text-black-1" />
      </div>
    </div>
  );
};

export default Actions;
