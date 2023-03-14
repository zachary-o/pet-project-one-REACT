import { addToWishlist } from "../../store/wishlistSlice";
import { addToCart } from "../../store/cartSlice";

import { useDispatch } from "react-redux";

import Button from "../Button/Button";
import AddToFavoritesIcon from "../../assets/Icons/AddToFavoritesIcon";

import "./Product.scss";

const Product = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="product">
        <div className="products__image">
          <a href="/" className="products__image-block">
            <img src={imageUrl} alt="Product 01" />
          </a>

          <button className="add-to-wishlist" onClick={handleAddToWishlist}>
            <AddToFavoritesIcon />
          </button>
        </div>
        <div className="product__body">
          <div className="product__item__info">
            <h3>{name}</h3>
            <p>${price}</p>
          </div>
          <Button
            text="Add To Cart"
            className={`${"btn"} ${"btn-dark"}`}
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </>
  );
};

export default Product;
