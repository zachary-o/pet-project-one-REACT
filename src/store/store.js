import { configureStore } from "@reduxjs/toolkit";
import addToWishlistReducer from "./wishlistSlice";

export default configureStore({
  reducer: {
    addToWishlist: addToWishlistReducer,
  },
});


