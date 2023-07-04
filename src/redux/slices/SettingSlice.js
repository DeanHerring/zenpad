import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSetting: false,
  activeBackground: '',
  brightness: 30,
  blur: 30,
  opacity: 30,
  soundName: 'Wood',
  theme: 'light',
  volumeClick: 100,
  text: 'Макс делает реклас',
  textSize: 0,
  showInterface: true,
  showBorder: false,
  fontSize: 100,
  editorWidth: 70,
};

export const SettingSlice = createSlice({
  name: 'Setting',
  initialState,
  reducers: {
    setEditorWidth(state, action) {
      state.editorWidth = action.payload;
    },
    setFontSize(state, action) {
      state.fontSize = action.payload;
    },
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
      localStorage.setItem('theme', action.payload);
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
    setShowInterface(state, action) {
      state.showInterface = action.payload;
    },
    setShowBorder(state, action) {
      state.showBorder = action.payload;
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
  setShowInterface,
  setShowBorder,
  setFontSize,
  setEditorWidth,
} = SettingSlice.actions;
export default SettingSlice.reducer;
