import { addToWishlist } from "../../store/wishlistSlice";
import { useDispatch } from "react-redux";

import addToFavoritesIcon from "../../assets/Icons/addToFavoritesIcon";

import "./Product.scss";

const Product = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };

  return (
    <>
      <div className="product">
        <div className="products__image">
          <a href="/" className="products__image-block">
            <img src={imageUrl} alt="Product 01" />
          </a>

          <button className="add-to-wishlist" onClick={handleAddToWishlist}>
            
          </button>
          <addToFavoritesIcon />
        </div>
        <div className="product__body">
          <h3>{name}</h3>
          <p>${price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
