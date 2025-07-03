import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const prodthunk = createSlice({
  name: "pthunk",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setProduct } = prodthunk.actions;

export default prodthunk.reducer;
// This is the cart slice reducer that will be used in the store

//We use thunk in Redux to handle asynchronous logic, such as API calls, inside our action creators.

export function thunkFunction() {
  return async function getProductsThunk(dispatch, getState) {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    console.log(json, "thunk");
    dispatch(setProduct(json));
  };
}
