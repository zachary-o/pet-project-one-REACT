import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
