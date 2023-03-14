import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

import { Link } from "react-router-dom";

import Button from "../Button/Button";
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
            <button className="item__delete-btn" onClick={handleRemoveFromCart}>
              <DeleteFromCartIcon />

              <i className="fal fa-times"></i>
            </button>

            <img
              src={imageUrl}
              className="item__image"
              alt="Partridge Bar Stool"
            />

            <div>
              <p className="item__category">Dress</p>
              <Link className="item__name">{name}</Link>
            </div>
          </div>

          <p>${price}</p>
        </div>
      </div>

      <div className="summary">
        <h4 className="summary__title">Summary</h4>

        <div className="summary__body">
          <div className="summary__line">
            <div>Total</div>
            <div>$2020.00</div>
          </div>
        </div>

        <Button
          type="submit"
          text="Check Out"
          className={`${"btn"} ${"btn-dark"} ${"btn-full-width"}`}
        />
      </div>
    </div>
  );
};

export default CartProduct;
