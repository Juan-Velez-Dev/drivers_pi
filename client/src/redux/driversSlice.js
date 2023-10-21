import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  driverData: [],
  allDrivers: [],
  filterDrivers: [],
  filterDriverTeams: [],
  driversPerPage: 9,
  currentPage: 1
};
export const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    //* get all drivers
    getAllDrivers: (state, action) => {
      state.allDrivers = action.payload;
      state.filterDrivers = action.payload;
    },
    //* create drivers
    createDrivers: (state, action) => {
      const { data } = action.payload;
      state.allDrivers = [...state.allDrivers, data];
    },

    //* --------- FILTERS ---------- *//

    //* get drivers by name
    filterByName: (state, action) => {
      const filter = state.allDrivers
        .filter(driver => driver.name.surname.toLowerCase()
          .includes(action.payload.toLowerCase()));
      if (!filter.length) alert('drivers not found');
      else state.filterDrivers = filter;
    },
    //* get drivers by team
    filterByTeam: (state, action) => {
      const filter = state.filterDrivers.filter(driver => driver.hasOwnProperty('teams')); // eslint-disable-line
      const response = filter.filter(driver => driver.teams.split(', ').includes(action.payload));
      if (!response.length) alert('driver not found');
      else state.filterDriverTeams = response;
    },
    //* order drivers
    filterInOrder: (state, action) => {
      if (action.payload === 'A') {
        if (state.filterDriverTeams.length) state.filterDriverTeams = state.filterDriverTeams.sort((a, b) => a.id - b.id);
        else state.filterDrivers = state.filterDrivers.sort((a, b) => a.id - b.id);
      } else if (action.payload === 'B') {
        if (state.filterDriverTeams) state.filterDriverTeams = state.filterDriverTeams.sort((a, b) => b.id - a.id);
        else state.filterDrivers = state.filterDrivers.sort((a, b) => b.id - a.id);
      }
    },
    //* rest all filters
    removeFilters: (state, action) => {
      state.filterDrivers = state.allDrivers;
      state.filterDriverTeams = [];
    },

    //* --------- PAGINATION ---------- *//

    setNextHandler: (state, action) => {
      state.currentPage = state.currentPage + 1;
    },
    setPrevHandler: (state, action) => {
      state.currentPage = state.currentPage - 1;
    },
    onSpecificPage: (state, action) => {
      state.currentPage = action.payload;
    }
    //! EN CONSTRUCCION
    // getDriversById: (state, action) => {
    //   state.driverData = action.payload;
    // },

  }
});

export const {
  getAllDrivers,
  filterByName,
  createDrivers,
  filterInOrder,
  filterByTeam,
  removeFilters,
  setPrevHandler,
  setNextHandler,
  onSpecificPage
} = driversSlice.actions;

export default driversSlice.reducer;
