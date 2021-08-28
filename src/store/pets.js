import { createSlice } from '@reduxjs/toolkit';

const petsSlice = createSlice({
  name: 'pets',
  initialState: [],
  reducers: {
    update: (state, { payload }) => {
      return [...state, ...payload];
    },
    clear: state => {
      return [];
    },
    deleted: (state, action) => {
      return state.filter(e => e._id !== action.payload.id);
    },
  },
});

export const petsActions = petsSlice.actions;
export default petsSlice;
