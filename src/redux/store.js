import { configureStore } from '@reduxjs/toolkit';

// Slices
import SettingSlice from './slices/SettingSlice';
import TestSlice from './slices/TestSlice';

export const store = configureStore({
  reducer: {
    SettingSlice,
    TestSlice,
  },
});
