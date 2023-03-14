import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  cartProducts: [],
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts.push(action.payload);
      state.totalPrice = state.cartProducts.reduce(
        (sum, object) => object.price + sum,
        0
      );
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
      // state.totalPrice = state.totalPrice - action.payload.price;
      // console.log(action.payload.price);
    },
  },
});

export const { addToCart, removeFromCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
