import { configureStore } from "@reduxjs/toolkit";
import addToWishlistReducer from "./wishlistSlice";
import addToCartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    addToWishlist: addToWishlistReducer,
    addToCart: addToCartReducer,
  },
});


