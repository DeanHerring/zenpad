import { faGear, faExpand, faMoon } from '@fortawesome/free-solid-svg-icons';
import { setShowSetting, setTheme } from '@/redux/slices/SettingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Action from './Action';

const fadeAnimation = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};
const transition = { duration: 0.3 };

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
    <AnimatePresence>
      {state.showInterface && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={fadeAnimation}
          transition={transition}
          className="flex fixed top-[25px] left-[25px] z-10"
        >
          <Action icon={faGear} onClick={() => dispatch(setShowSetting(true))} />
          <Action
            icon={faExpand}
            onClick={() =>
              !document.fullscreenElement ? document.documentElement.requestFullscreen() : document.exitFullscreen()
            }
          />
          <Action icon={faMoon} onClick={() => changeTheme()} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(Actions);
