import React from "react";
import "./CartOverlay.css";

interface CartOverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

const CartOverlay: React.FC<CartOverlayProps> = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="cart-overlay">
      <div className="cart-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>My Items</h2>
        <div className="cart-items">
          <div className="cart-item">
            <p>Running Short</p>
            <p>$50.00</p>
          </div>
          {/* Add more cart items as needed */}
        </div>
        <div className="cart-total">
          <p>Total: $200.00</p>
        </div>
        <button className="place-order-btn">Place Order</button>
      </div>
    </div>
  );
};

export default CartOverlay;
