import React, { useState } from "react";
import CartOverlay from "../CartOverlay/CartOverlay";

const CartSummary: React.FC = () => {
  const [isOverlayVisible, setOverlayVisible] = useState<boolean>(false);

  const handleCartClick = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <>
      <i className="bx bx-cart fs-3" onClick={handleCartClick}></i>
      <CartOverlay isVisible={isOverlayVisible} onClose={handleCloseOverlay} />
    </>
  );
};

export default CartSummary;
