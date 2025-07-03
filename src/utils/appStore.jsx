import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./prodSlice";
import prodthunk from "./prodthunk";

const appStore = configureStore({
  reducer: {
    // App reducers
    cart: cartReducer,
    prod: productReducer, // this is each slice reducer
    pthunk: prodthunk,
  },
});

export default appStore;
