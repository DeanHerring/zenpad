import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSetting: false,
  activeBackground: '',
  brightness: 30,
  blur: 30,
  opacity: 30,
  soundName: 'Wood',
  theme: 0,
  volumeClick: 30,
  text: 'Макс делает реклас',
  textSize: 0,
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
      state.theme = action.payload;
    },
    setVolumeClick(state, action) {
      state.volumeClick = action.payload;
    },
    setText(state, action) {
      state.text = action.payload;
    },
    setTextSize(state, action) {
      state.textSize = action.payload;
    },
    setOpacity(state, action) {
      state.opacity = action.payload;
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
  setTextSize,
  setOpacity,
} = SettingSlice.actions;
export default SettingSlice.reducer;
