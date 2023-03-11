import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";

import "./Product.scss";

import productImg from "../../assets/images/product-01.jpg";

const Product = ({ product }) => {
  const { name, price } = product;

  const { addToWishlist } = useContext(WishlistContext);

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  return (
    <>
      <div className="product">
        <div className="products__image">
          <a href="/" className="products__image-block">
            <img src={productImg} alt="Product 01" />
          </a>

          <a className="add-to-wishlist" onClick={handleAddToWishlist}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </a>
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
