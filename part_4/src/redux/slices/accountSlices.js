import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 1,
};

export const getUserAccount = createAsyncThunk(
  "account/getUser", // action name
  async (userId, thunkAPI) => {
    
    const { data } = await axios.get(`http://localhost:8080/account/${userId}`);
    return data.amount; // get the data amount
  }
);

export const accountSlice = createSlice({
  name: "account", // action name
  initialState, // initial value of state
  reducers: {
    increment: (state) => {
      // increment is function, increment is take two things state and action
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getUserAccount.fulfilled, // fulfilled is function to attach the upper function
        (state, action) => {
          state.amount = action.payload;
          state.pending = false;
        }
      )
      .addCase(
        getUserAccount.pending, // fulfilled is function to attach the upper function
        (state) => {
          state.pending = true;
        }
      );
      
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;
