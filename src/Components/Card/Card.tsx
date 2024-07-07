import React, { FC, useState } from "react";
import "./Card.css";

interface Product {
  id: string;
  name: string;
  inStock: string;
  img: string;
  price: number;
  currency: string;
}

const Card: FC<Product> = ({ name, img, price, id, inStock, currency }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="card mx-2 my-2"
      style={{ width: "18rem" }}
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="test">
        <img src={img} className="card-img-top" alt="..." />
        {inStock === "0" && <h2 className="text">Out Of Stock</h2>}
      </div>
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p>
          {price} {currency}
        </p>
      </div>
      {inStock === "1" && isHovered && (
        <div className="cart-icon">
          <i className="bx bx-cart fs-4"></i>
        </div>
      )}
    </div>
  );
};

export default Card;
