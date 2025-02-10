import React from "react";
import ProductCard from "./ProductCard";
import "./Product.css";

const products = [
  {
    image: "./basil.webp",
    name: "Holy Basil",
    modelPath: "/3D_MOdel/Dragon.glb",
  },
  {
    image: "./basil.webp",
    name: "Holy Basil",
    modelPath: "/3D_MOdel/Dragon.glb",
  },
  {
    image: "./basil.webp",
    name: "Holy Basil",
    modelPath: "/3D_MOdel/Dragon.glb",
  }
];

const ProductList = () => {
  return (
    <div className="product-container">
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
