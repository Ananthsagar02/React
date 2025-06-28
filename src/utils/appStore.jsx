import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // App reducers
    cart: cartReducer, // this is each slice reducer
  },
});

export default appStore;
