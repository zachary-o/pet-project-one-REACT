import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

import { Link } from "react-router-dom";

import DeleteFromCartIcon from "../../assets/Icons/DeleteFromCartIcon";

import "./CartProduct.scss";

const CartProduct = ({ product }) => {
  const { id, name, price, imageUrl } = product;

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
      <div className="cart__grid">
        <div className="cart__list">
          <div className="item">
            <div className="item__content">
              <button
                className="item__delete-btn"
                onClick={handleRemoveFromCart}
              >
                <DeleteFromCartIcon />

                <i className="fal fa-times"></i>
              </button>

              <img
                src={imageUrl}
                className="item__image"
                alt="Partridge Bar Stool"
              />

              <div>
                <Link className="item__name">{name}</Link>
              </div>
            </div>

            <p>${price}</p>
          </div>
        </div>
      </div>
  );
};

export default CartProduct;
