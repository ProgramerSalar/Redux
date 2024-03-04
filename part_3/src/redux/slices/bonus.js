import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  points: 1,
}

export const bonusSlice = createSlice({
  name: 'bonus',       // action name 
  initialState,          // initial value of state 
  reducers: {
    increment: (state) => {   // increment is function, increment is take two things state and action 
      state.points += 1
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions

export default bonusSlice.reducer