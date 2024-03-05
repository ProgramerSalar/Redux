import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/counter/productReducer';

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});
