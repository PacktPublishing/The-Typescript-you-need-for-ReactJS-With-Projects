import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { products } from "./types";
import axios from "axios";
// https://fakestoreapi.com/products

function App() {
  const [products, setProducts] = useState<products>([]);
  const [allProducts, setAllProducts] = useState<products>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (): Promise<void> => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
    setAllProducts(res.data);
  };

  const searchProducts = (s: string) => {
    let text = s.trim().toLowerCase();
    let searchedProducts = allProducts.filter(
      p =>
        p.title.toLocaleLowerCase().includes(text) ||
        p.description.toLocaleLowerCase().includes(text)
    );
    setProducts(searchedProducts); // 1
  };

  return (
    <div>
      <Header searchProducts={searchProducts} />
      <Products products={products} />
    </div>
  );
}

export default App;
