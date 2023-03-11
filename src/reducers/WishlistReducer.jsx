

export const wishlistReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_WISHLIST":
      return { wishlistProducts: [...state.wishlistProducts, payload] };
    case "REMOVE_FROM_WISHLIST":
      const filteredProducts = state.wishlistProducts.filter(
        (product) => product.id !== payload
      );
      return {
        wishlistProducts: filteredProducts,
      };
    default:
      return state;
  }
};

export const initialState = {
  wishlistProducts: [],
};