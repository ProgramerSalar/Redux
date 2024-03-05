import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchproducts } from "./productAPI";

const initialState = {
  products: [], // array of product
  status: "idle",
};

export const fetchAsync = createAsyncThunk(
  "products/fetchproduct",
  async () => {
    const response = await fetchproducts();

    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,

  // why use the extraReducer because this async function, means GET, PUT, POT, DELETE used to extrareducer
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

// export const {  } = productSlice.actions;

export default productSlice.reducer;
