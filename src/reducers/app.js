import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addPhotos: (state, action) => {
      state.photos.push(action.payload);
    },
    removePhotos: (state, action) => {
      state.photos = state.photos.filter(
        (photo) => photo.id !== action.payload
      );
    },
  },
});

export const { addPhoto, removePhoto } = appSlice.actions;

export default appSlice.reducer;
