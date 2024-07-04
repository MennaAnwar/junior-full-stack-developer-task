import React from "react";
import tshirt from "../../images/tshirt.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="test">
        <img src={tshirt} className="card-img-top" alt="..." />
        <h2 className="text">Out Of Stock</h2>
      </div>
      <div className="card-body">
        <p className="card-text">Product Name</p>
        <p>10$</p>
      </div>
    </div>
  );
};

export default Card;
