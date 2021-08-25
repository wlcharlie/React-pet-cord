import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth';
import petsSlice from './pets';

const store = configureStore({
  reducer: { auth: authSlice.reducer, pets: petsSlice.reducer },
});

export default store;
