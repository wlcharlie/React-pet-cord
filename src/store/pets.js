import { createSlice } from '@reduxjs/toolkit';

const petsSlice = createSlice({
  name: 'pets',
  initialState: [],
  reducers: {
    update: (state, { payload }) => {
      console.log(payload);
      return [...state, ...payload];
    },
  },
});

export const petsActions = petsSlice.actions;
export default petsSlice;
