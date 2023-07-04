import { faGear, faExpand, faMoon } from '@fortawesome/free-solid-svg-icons';
import { setShowSetting, setTheme } from '@/redux/slices/SettingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';

import classNames from 'classnames';
import Action from './Action';

const Actions = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.SettingSlice);

  const changeTheme = () => {
    const theme = state.theme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', theme);
    dispatch(setTheme(theme));
  };

  console.log('RE-RENDER: ACTIONS');

  return (
    <div className={classNames(!state.showInterface && 'hidden', 'flex fixed top-[25px] left-[25px] z-10')}>
      <Action icon={faGear} onClick={() => dispatch(setShowSetting(true))} />
      <Action
        icon={faExpand}
        onClick={() =>
          !document.fullscreenElement ? document.documentElement.requestFullscreen() : document.exitFullscreen()
        }
      />
      <Action icon={faMoon} onClick={() => changeTheme()} />
    </div>
  );
};

export default memo(Actions);
