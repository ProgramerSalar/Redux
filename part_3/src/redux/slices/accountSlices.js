import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 1,
}

export const accountSlice = createSlice({
  name: 'account',       // action name 
  initialState,          // initial value of state 
  reducers: {
    increment: (state) => {   // increment is function, increment is take two things state and action 
      state.amount += 1
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer