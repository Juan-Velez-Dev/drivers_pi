import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  drivers: []
}

export const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    getDrivers: (state = initialState, action) => {
      state.drivers = action.payload
      return state
    }
  }
})

export const { getDrivers } = driversSlice.actions
export default driversSlice.reducer
