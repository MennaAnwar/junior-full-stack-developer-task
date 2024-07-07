import React, { FC } from "react";
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
  return (
    <div className="card" style={{ width: "18rem" }} id={id}>
      <div className="test">
        <img src={img} className="card-img-top" alt="..." />
        {inStock === "1" ? "" : <h2 className="text">Out Of Stock</h2>}
      </div>
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p>
          {price} {currency}
        </p>
      </div>
      {inStock === "1" ? (
        <div className="cart-icon">
          <i className="bx bx-cart fs-4"></i>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
