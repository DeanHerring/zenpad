import { configureStore } from '@reduxjs/toolkit';

// Slices
import SettingSlice from './slices/SettingSlice';

export const store = configureStore({
  reducer: {
    SettingSlice,
  },
});
