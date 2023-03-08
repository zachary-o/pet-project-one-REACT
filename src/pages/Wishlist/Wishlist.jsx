import WishlistProduct from "../../components/WishlistProduct/WishlistProduct";

import "./Wishlist.scss";
;

const Wishlist = () => {
  return (
    <div className="container">
      <h2 className="wishlist__title">Wishlist</h2>
      <WishlistProduct title="Flowers cotton dress" price={29.0} />
      <WishlistProduct title="Flowers cotton dress" price={29.0} />
      <div className="list"></div>
    </div>
  );
};

export default Wishlist;
