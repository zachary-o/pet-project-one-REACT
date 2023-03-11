import { useReducer, createContext } from "react";
import { wishlistReducer, initialState } from "../reducers/WishlistReducer";

export const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  const removeFromWishlist = (productId) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
  };

  const value = {
    addToWishlist,
    removeFromWishlist,
    state: state,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
