import { configureStore } from "@reduxjs/toolkit";
import cartReducers from './createSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducers,
  }
})