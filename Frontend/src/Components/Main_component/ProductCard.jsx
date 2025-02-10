import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import "./Product.css";

const ProductCard = ({ image, name, modelPath }) => {
  const modelRef = useRef(null);
  const model = useLoader(GLTFLoader, modelPath);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.add(model.scene);
    }
  }, [model]);

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="canvas-container">
        <Canvas>
          {/* Configure the model */}
          <primitive object={model.scene} />
        </Canvas>
      </div>
      <div className="product-details">
        <span className="product-name">{name}</span>
        <ul className="product-info">
          <li>Description of product</li>
          <li>Additional details</li>
        </ul>
        <button className="read-more">
          Read More <i className="card-icon">📖</i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
