import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSetting: false,
  activeBackground: '/zenpad/src/images/background/bg-1.jpg',
  brightness: 30,
  blur: 30,
  soundName: 'Wood',
  themeName: 'Light Theme',
};

export const SettingSlice = createSlice({
  name: 'Setting',
  initialState,
  reducers: {
    setShowSetting(state, action) {
      state.showSetting = action.payload;
    },
    setActiveBackground(state, action) {
      state.activeBackground = action.payload;
    },
    setBrightness(state, action) {
      state.brightness = action.payload;
    },
    setBlur(state, action) {
      state.blur = action.payload;
    },
    setSoundName(state, action) {
      state.soundName = action.payload;
    },
    setTheme(state, action) {
      state.themeName = action.payload;
    },
  },
});

export const { setShowSetting, setActiveBackground, setBrightness, setBlur, setSoundName, setTheme } =
  SettingSlice.actions;
export default SettingSlice.reducer;
