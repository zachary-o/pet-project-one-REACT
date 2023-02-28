import React from "react";
import Button from "../Button/Button";

import "./Banner.scss";

import banner from "../../assets/images/image-home-07.jpg";

const Banner = () => {
  const btnClassName = "btn btn-dark";
  
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__wrapper">
          <img src={banner} alt="" />
          <div className="banner__overlay">
            <div>
              <h1 className="banner__title">Waffle Hooded Coat</h1>
              <Button className={btnClassName} text="Shop Now" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
