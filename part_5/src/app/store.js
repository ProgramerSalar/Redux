import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/counter/productReducer';
import cartReducer from '../features/cart/cartReducer';

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart:cartReducer
  },
});
