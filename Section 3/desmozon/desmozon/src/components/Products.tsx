import React from "react";
import { products } from "../types";
import Product from "./Product";

interface ProductsType {
  products: products;
}

function Products({ products }: ProductsType) {
  return (
    <div className="products-section">
      <h1>PRODUCTS ({products.length})</h1>
      <div className="container">
        {products.map(p => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Products;
