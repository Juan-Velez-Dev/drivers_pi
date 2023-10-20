import { configureStore } from '@reduxjs/toolkit';
import driversReducer from './driversSlice';
import teamsReducer from './teamsSlice';

const store = configureStore({
  reducer: {
    drivers: driversReducer,
    teams: teamsReducer
  }
});

export default store;
