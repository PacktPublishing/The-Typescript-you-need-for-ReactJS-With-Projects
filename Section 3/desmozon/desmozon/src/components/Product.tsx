import React, { useState } from "react";
import { product } from "../types";
import Popup from "./Popup";

type ProductType = {
  product: product;
};

function Product({ product }: ProductType) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="card">
      <div onClick={() => setOpen(true)} className="img-container">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card-body">
        <p className="title">{product.title}</p>
        <p>{product.description.slice(0, 50)}...</p>
        <button onClick={() => setOpen(true)}>Buy - ${product.price}</button>
      </div>
      {open && <Popup setOpen={setOpen} product={product} />}
    </div>
  );
}

export default Product;
