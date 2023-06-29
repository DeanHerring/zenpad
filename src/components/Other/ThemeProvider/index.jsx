import { useSelector } from 'react-redux';
import '@/styles/theme.scss';

const ThemeProvider = ({ children }) => {
  const state = useSelector((state) => state.SettingSlice.theme);

  return <div className={`theme-${state ? 'dark' : 'light'}`}>{children}</div>;
};

export default ThemeProvider;
