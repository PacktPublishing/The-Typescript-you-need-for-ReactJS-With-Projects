import React from "react";
import { product } from "../types";
import { MdClose } from "react-icons/md";

interface PopupTypes {
  product: product;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Popup({ product, setOpen }: PopupTypes) {
  return (
    <div className="backdrop">
      <div className="popup">
        <MdClose className="close-btn" onClick={() => setOpen(false)} />
        <div className="popup-img-container">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="popup-body">
          <p className="title">{product.title}</p>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>
            Rating: {product.rating.rate} ({product.rating.count})
          </p>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
