import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoggedIn: false,
    name: null,
    email: null,
    id: null,
    avatar: null,
  },
  reducers: {
    login: (state, { payload }) => {
      const { token, name, email, _id, avatar } = payload;
      state.token = token;
      state.isLoggedIn = true;
      state.name = name;
      state.email = email;
      state.id = _id;
      state.avatar =
        avatar || 'https://image.flaticon.com/icons/png/512/1596/1596810.png';
      localStorage.setItem('token', token);
    },
    logout: state => {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem('token');
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
