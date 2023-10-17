import { configureStore } from '@reduxjs/toolkit';
import driversReducer from './driversSlice';

const store = configureStore({
  reducer: {
    drivers: driversReducer
  }
});

export default store;
