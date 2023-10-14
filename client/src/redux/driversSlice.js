import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    getDrivers: (state = initialState, action) => {
      state = [...action.payload]
      return state
    },
    getDriversByName: (state, action) => {
      state = [...action.payload]
      return state
    }
  }
})

export const { getDrivers } = driversSlice.actions
export default driversSlice.reducer
