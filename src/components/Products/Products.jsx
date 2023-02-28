import "./Products.scss";

import Product from "../Product/Product";
import Button from "../Button/Button";

const Products = () => {
const btnClassName = "btn btn-outline-primary"

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">This Week's Highlights</h2>

        <div className="products__grid">
          <Product title="Hoodie with pocket" price={79.0} />
          <Product title="Flowers cotton dress" price={79.0} />
          <Product title="Leather ugly slippers" price={79.0} />
          <Product title="Denim jacket" price={79.0} />
          <Product title="Hoodie with pocket" price={79.0} />
          <Product title="Flowers cotton dress" price={79.0} />
          <Product title="Leather ugly slippers" price={79.0} />
          <Product title="Denim jacket" price={79.0} />
        </div>

        <div className="products__bottom">
          <Button className={btnClassName} text="Shop Now" />
        </div>
      </div>
    </section>
  );
};

export default Products;
