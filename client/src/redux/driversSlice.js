import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  driverData: [],
  allDrivers: [],
  filterDrivers: [],
  filterDriverTeams: [],
  driversPerPage: 9,
  currentDrivers: []
};
export const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    getAllDrivers: (state, action) => {
      state.allDrivers = action.payload;
      state.filterDrivers = action.payload;
    },
    getDriversById: (state, action) => {
      state.driverData = action.payload;
    },
    createDrivers: (state, action) => {
      const { data } = action.payload;
      state.allDrivers = [...state.allDrivers, data];
    },
    filterByName: (state, action) => {
      const filter = state.allDrivers
        .filter(driver => driver.name.surname.toLowerCase()
          .includes(action.payload.toLowerCase()));
      if (!filter.length) alert('drivers not found');
      else state.filterDrivers = filter;
    },
    filterInOrder: (state, action) => {
      if (action.payload === 'A') {
        state.filterDrivers = state.filterDrivers.sort((a, b) => a.id - b.id);
      } else if (action.payload === 'B') {
        state.filterDrivers = state.filterDrivers.sort((a, b) => b.id - a.id);
      }
    },
    filterByTeam: (state, action) => {
      const filter = state.filterDrivers.filter(driver => driver.hasOwnProperty('teams')); // eslint-disable-line
      const response = filter.filter(driver => driver.teams.split(', ').includes(action.payload));
      if (!response.length) alert('driver not found');
      else state.filterDriverTeams = response;
    },
    removeFilters: (state, action) => {
      state.filterDrivers = state.allDrivers;
      state.filterDriverTeams = [];
    }
  }
});

export const {
  getAllDrivers,
  filterByName,
  createDrivers,
  filterInOrder,
  filterByTeam,
  removeFilters
} = driversSlice.actions;

export default driversSlice.reducer;
