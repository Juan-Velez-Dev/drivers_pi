import { createSlice } from '@reduxjs/toolkit';
let initialState = {
  drivers: [],
  allDrivers: []
};
export const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    getAllDrivers: (state, action) => {
      state.allDrivers = action.payload;
    },
    getDriversByName: (state, action) => {
      state.drivers = action.payload;
    },
    getDriversById: (state, action) => {
      state.drivers = action.payload;
    },
    createDriver: (state, action) => {
      state.allDrivers = [...state, action.payload];
    }
  }
});

export const { getAllDrivers, getDriversByName } = driversSlice.actions;
export default driversSlice.reducer;
