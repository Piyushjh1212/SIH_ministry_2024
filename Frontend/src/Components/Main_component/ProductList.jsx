import React from "react";
import ProductCard from "./ProductCard";
import "./Product.css";

const products = [
  {
    image: "./basil.webp",
    name: "Holy Basil",
    scientificName: "Ocimum Tenuiflorum",
    family: "Lamiaceae",
    commonNames: "Holy Basil, Tulsi",
    origin: "Native to India & widely cultivated throughout Southeast Asia",
  },
  {
    image: "./basil.webp",
    name: "Holy Basil",
    scientificName: "Ocimum Tenuiflorum",
    family: "Lamiaceae",
    commonNames: "Holy Basil, Tulsi",
    origin: "Native to India & widely cultivated throughout Southeast Asia",
  },
  {
    image: "./basil.webp",
    name: "Holy Basil",
    scientificName: "Ocimum Tenuiflorum",
    family: "Lamiaceae",
    commonNames: "Holy Basil, Tulsi",
    origin: "Native to India & widely cultivated throughout Southeast Asia",
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
