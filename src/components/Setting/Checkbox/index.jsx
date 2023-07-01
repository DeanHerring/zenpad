import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { setShowBorder } from '@/redux/slices/SettingSlice';

const Checkbox = ({ title }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.SettingSlice);

  const handleCheckbox = () => {
    dispatch(setShowBorder(!state.showBorder));
    localStorage.setItem('show_border', !state.showBorder);
  };

  const showBorder = JSON.parse(localStorage.getItem('show_border')) || state.showBorder;

  return (
    <div className="flex items-center">
      <h3 className="setting_title font-rubik text-black-1">{title}</h3>
      <div
        onClick={handleCheckbox}
        className={classNames(
          showBorder ? 'bg-yellow-1' : 'bg-gray-3',
          'w-[20px] h-[20px] rounded-[2px] ml-[10px] flex items-center justify-center cursor-pointer',
        )}
      >
        <FontAwesomeIcon icon={faCheck} className={showBorder ? 'text-white-1' : 'text-black-2'} />
      </div>
    </div>
  );
};

export default Checkbox;
