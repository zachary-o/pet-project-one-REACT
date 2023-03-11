import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";

import WishlistProduct from "../../components/WishlistProduct/WishlistProduct";

import "./Wishlist.scss";
;

const Wishlist = () => {

  const { state } = useContext(WishlistContext);

  return (
    <div className="container">
      <h2 className="wishlist__title">Wishlist</h2>
      {state?.wishlistProducts &&
        state?.wishlistProducts.map((product) => (
          <WishlistProduct product={product} key={product.id} />
        ))}
      <div className="list"></div>
    </div>
  );
};

export default Wishlist;
