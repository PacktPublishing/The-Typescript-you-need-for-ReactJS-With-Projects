import React from "react";

interface HeaderTypes {
  searchProducts: (s: string) => void;
}

function Header({ searchProducts }: HeaderTypes) {
  return (
    <header>
      <img
        src="https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png"
        alt="logo"
      />
      <input
        onChange={e => searchProducts(e.target.value)}
        type="text"
        placeholder="Search products by description or name"
      />
    </header>
  );
}

export default Header;
