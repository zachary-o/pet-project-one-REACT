import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";

import "./HomePage.scss"

const Home = () => {
  return (
    <div className="homepage">
      <Header />
      <Banner />
      <Category />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
