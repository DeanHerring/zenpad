import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSetting: false,
  activeBackground: '/zenpad/src/images/background/bg-1.jpg',
  brightness: 30,
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
  },
});

export const { setShowSetting, setActiveBackground, setBrightness } = SettingSlice.actions;
export default SettingSlice.reducer;
