import { configureStore } from '@reduxjs/toolkit';
import driversReducer from './driversSlice';
import teamsReducer from './teamsSlice';

const store = configureStore({
  reducer: {
    drivers: driversReducer,
    teams: teamsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates']
      }
    })
});

export default store;
