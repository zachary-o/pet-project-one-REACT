import "./Category.scss"

import Button from "../Button/Button";

import banner1 from "../../assets/images/banner-20.jpg";
import banner2 from "../../assets/images/banner-21.jpg";
import banner3 from "../../assets/images/banner-22.jpg";

const Category = () => {
  const btnClassName = "btn btn-dark";

  return (
    <section className="category">
      <div className="container">
        <h2 className="category__title">This Season Collection</h2>
        <div className="category__grid">
          <div className="category__item">
            <img src={banner1} alt="Glasses" />

            <div className="category__overlay">
              <Button className={btnClassName} text="Glasses" />
            </div>
          </div>

          <div className="category__item">
            <img src={banner2} alt="Sneakers" />

            <div className="category__overlay">
              <Button className={btnClassName} text="Sneakers" />
            </div>
          </div>

          <div className="category__item">
            <img src={banner3} alt="Handbags" />

            <div className="category__overlay">
              <Button className={btnClassName} text="Handbags" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
