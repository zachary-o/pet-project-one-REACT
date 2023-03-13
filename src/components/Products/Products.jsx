import { useEffect, useState } from "react";

import "./Products.scss";

import Product from "../Product/Product";
import Button from "../Button/Button";

const Products = () => {
  const btnClassName = "btn btn-outline-primary";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducrs = async () => {
      const response = await fetch(
        "https://640bbced94ce1239b09eeac9.mockapi.io/clothes"
      );
      const data = await response.json();
      setProducts(data);
    };
    getAllProducrs();
  }, []);

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">This Week's Highlights</h2>
        
        <div className="products__grid">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>

        <div className="products__bottom">
          <Button className={btnClassName} text="Shop Now" />
        </div>
      </div>
    </section>
  );
};

export default Products;
