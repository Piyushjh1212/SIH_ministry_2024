import React, { useState } from "react";
import Modal from "./Modal";
import ThreeDModel from "./3D model/3DMOdel";
import "./ProductCard.css";

const ProductCard = ({ image, modelPath, name, scientificName, family, commonNames, origin }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="product-card">
      {/* Clicking the image opens the modal */}
      <img src={image} alt={name} className="product-image" onClick={() => setIsModalOpen(true)} />

      <span className="product-name">{name}</span>
      <div className="product-details">
        <ul className="product-info">
          <li><b>Scientific Name:</b> {scientificName}</li>
          <li><b>Family:</b> {family}</li>
          <li><b>Common Names:</b> {commonNames}</li>
          <li><b>Origin:</b> {origin}</li>
        </ul>
        <h3 className="description-title">Description...</h3>
      </div>
      <div className="read-more">
        <i className="fas fa-arrow-right card-icon">Read More</i>
      </div>

      {/* Modal to show 3D Model */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ThreeDModel modelPath={modelPath} />
      </Modal>
    </div>
  );
};

export default ProductCard;
