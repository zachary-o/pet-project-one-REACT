import { useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import CartProduct from "../../components/CartProduct/CartProduct";

import "./Cart.scss";

const Cart = () => {
  const { cartProducts } = useSelector((store) => store.addToCart);

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="cart__title">Your order</h2>
        {cartProducts &&
          cartProducts.map((product) => (
            <CartProduct product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default Cart;
