import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/redux/slices/SettingSlice';
import { useEffect } from 'react';

import '@/styles/theme.scss';

const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.SettingSlice.theme);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      dispatch(setTheme(currentTheme));
    }
  }, [dispatch]);

  return <div className={`theme-${state}`}>{children}</div>;
};

export default ThemeProvider;
