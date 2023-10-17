import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addApp: (state, action) => {
      state.list.push(...action.payload);
    },
    removeApp: (state, action) => {
      state.app = state.app.filter((app) => app.id !== action.payload);
    },
  },
});

export const { addApp, removeApp } = appSlice.actions;

export default appSlice.reducer;
