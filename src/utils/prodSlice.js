import { createSlice } from "@reduxjs/toolkit";

const prodSlice = createSlice({
  name: "prod",
  initialState: {
    product: [],
  },
  reducers: {
    add(state, action) {
      state.product.push(action.payload);
    },
    remove(state, action) {
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { add, remove } = prodSlice.actions;

export default prodSlice.reducer;
// This is the cart slice reducer that will be used in the store
