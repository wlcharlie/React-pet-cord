import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null, isLoggedIn: false },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      console.log(action);
    },
    logout: () => {},
  },
});

export const authActions = authSlice.actions;
export default authSlice;
