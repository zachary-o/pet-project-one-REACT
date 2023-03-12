import { configureStore } from "@reduxjs/toolkit";
import addToWishlistReducer from "./addToWishlistSlice";

export default configureStore({
  reducer: {
    addToWishlist: addToWishlistReducer,
  },
});


