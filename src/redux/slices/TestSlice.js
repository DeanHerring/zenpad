import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showA: true,
};

export const TestSlice = createSlice({
  name: 'Test',
  initialState,
  reducers: {
    setShowA(state, action) {
      state.showA = action.payload;
    },
  },
});

export const { setShowA } = TestSlice.actions;
export default TestSlice.reducer;
