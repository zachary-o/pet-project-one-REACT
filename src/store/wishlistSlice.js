import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistProducts: [],
};

const addToWishlistSlice = createSlice({
  name: "addToWishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlistProducts.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlistProducts = state.wishlistProducts.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = addToWishlistSlice.actions;

export default addToWishlistSlice.reducer;
