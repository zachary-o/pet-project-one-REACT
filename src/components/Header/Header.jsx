import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import WishlistIcon from "../../assets/Icons/WishlistIcon";
import CartIcon from "../../assets/Icons/CartIcon";

import "./Header.scss";

import logo from "../../assets/images/logo-black.png";

const Header = () => {
  const { cartProducts } = useSelector((store) => store.addToCart);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/">
            <img src={logo} alt="Logotype" />
          </Link>
          <div className="navbar">
            <ul>
              <li>
                <Link to="/wishlist" className="navbar__icon">
                  <WishlistIcon />
                </Link>
              </li>
              <li>
                <Link to="/cart" className="navbar__icon">
                  <CartIcon />
                  {cartProducts.length > 0 ? (
                    <span className="number">{cartProducts.length}</span>
                  ) : null}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
