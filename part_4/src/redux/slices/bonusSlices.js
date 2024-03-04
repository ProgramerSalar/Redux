import { createAction, createSlice } from '@reduxjs/toolkit'


const incrementByAmount = createAction('account/incrementByAmount')

const initialState = {
  points: 11,
}

export const bonusSlice = createSlice({
  name: 'bonus',       // action name 
  initialState,          // initial value of state 
  reducers: {
    increment: (state) => {   // increment is function, increment is take two things state and action 
      state.points += 1
    },
  
  },
  extraReducers:(builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      if(action.payload >= 100){
        state.points+=1
      }
      
      
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions

export default bonusSlice.reducer