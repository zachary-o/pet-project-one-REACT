import { removeFromWishlist } from "../../store/wishlistSlice";
import { addToCart } from "../../store/cartSlice";

import { useDispatch } from "react-redux";

import Button from "../Button/Button";
import DeleteProductIcon from "../../assets/Icons/DeleteProductIcon";

import "./WishlistProduct.scss";

const WishlistProduct = ({ product }) => {
  const { id, name, price, imageUrl } = product;

  const dispatch = useDispatch();

  const handleRemoveFromWishList = () => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="item">
      <div className="item__content">
        <button className="item__delete" onClick={handleRemoveFromWishList}>
          <DeleteProductIcon />
        </button>

        <div className="item__body">
          <img
            src={imageUrl}
            alt="Flowers cotton dress"
            className="item__image"
          />

          <div className="media-body mw-210">
            <p className="item__title">{name}</p>
            <p className="item__price">${price}</p>
          </div>
        </div>
      </div>
      <div className="item__buttons">
        <Button
          text="Add To Cart"
          className={`${"btn"} ${"btn-dark"}`}
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default WishlistProduct;
