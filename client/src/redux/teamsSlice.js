import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  teams: []
};

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    getAllTeams: (state, action) => {
      state.teams = action.payload;
    }
  }
});

export const { getAllTeams } = teamsSlice.actions;
export default teamsSlice.reducer;
