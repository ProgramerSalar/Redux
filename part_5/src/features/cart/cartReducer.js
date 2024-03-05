import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems, AddItems, updateItems, deleteItems } from "./cartAPI";

const initialState = {
  items: [], // array of cart
  status: "idle",
};

export const fetchAsync = createAsyncThunk("cart/fetchItems", async (item) => {
  const response = await fetchItems(item);
  return response.data;
});
export const AddAsync = createAsyncThunk("cart/Addproduct", async (item) => {
  const { id, title, brand, thumbnail, price } = item;
  const response = await AddItems({
    id,
    title,
    brand,
    thumbnail,
    price,
    quantity: 1,
  });
  return response.data;
});
export const deleteAsync = createAsyncThunk("cart/deleteItem", async (id) => {
  // const {id, title, brand,thumbnail, price} = item;
  await deleteItems(id);
  return id;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  // why use the extraReducer because this async function, means GET, PUT, POT, DELETE used to extrareducer
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(AddAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload); // payload add in items array
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        );
        state.items.splice(index, 1); // index, and no of item
      });
  },
});

// export const {  } = productSlice.actions;

export default cartSlice.reducer;
