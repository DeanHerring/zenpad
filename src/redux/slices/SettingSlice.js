import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSetting: false,
  activeBackground: '/zenpad/src/images/background/bg-1.jpg',
  brightness: 30,
  blur: 30,
  soundName: 'Wood',
  themeName: 'Light Theme',
  volumeClick: 30,
  text: 'Макс делает реклас',
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
    setVolumeClick(state, action) {
      state.volumeClick = action.payload;
    },
    setText(state, action) {
      state.text = action.payload;
    },
  },
});

export const {
  setShowSetting,
  setActiveBackground,
  setBrightness,
  setBlur,
  setSoundName,
  setTheme,
  setVolumeClick,
  setText,
} = SettingSlice.actions;
export default SettingSlice.reducer;
