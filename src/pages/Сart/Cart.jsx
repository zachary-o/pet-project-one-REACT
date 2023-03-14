import { useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import CartProduct from "../../components/CartProduct/CartProduct";

import "./Cart.scss";

const Cart = () => {
  const { cartProducts, totalPrice } = useSelector((store) => store.addToCart);

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        {cartProducts.length > 0 ? (
          <h2 className="cart__title">Your order:</h2>
        ) : (
          <h2 className="cart__title">Your Cart is Empty</h2>
        )}

        {cartProducts &&
          cartProducts.map((product) => (
            <CartProduct product={product} key={product.id} />
          ))}

        {cartProducts.length > 0 ? (
          <div className="summary">
            <h4 className="summary__title">Summary</h4>

            <div className="summary__body">
              <div className="summary__line">
                <div>Total</div>
                <div>${totalPrice}</div>
              </div>
            </div>

            <Button
              type="submit"
              text="Check Out"
              className={`${"btn"} ${"btn-dark"} ${"btn-full-width"}`}
            />
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
