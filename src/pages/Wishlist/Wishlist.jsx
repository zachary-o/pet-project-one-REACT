import { useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import WishlistProduct from "../../components/WishlistProduct/WishlistProduct";

import "./Wishlist.scss";
const Wishlist = () => {
  const { wishlistProducts } = useSelector((store) => store.addToWishlist);

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="wishlist__title">Wishlist</h2>
        {wishlistProducts &&
          wishlistProducts.map((product) => (
            <WishlistProduct product={product} key={product.id} />
          ))}
        <div className="list"></div>
      </div>
    </div>
  );
};

export default Wishlist;
