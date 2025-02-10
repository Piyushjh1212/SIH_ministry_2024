// src/Page/Page.jsx
import React from "react";
import { useGlobalContext } from "../Components/Main_component/3D model/Context/Globalcontext";
import ModelComponent from "../Components/Main_component/3D model/ModelComponent";
import Home from "../Components/Main_home/Home";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Page() {
  const { modelLoaded, modelPath } = useGlobalContext();

  return (
    <Router>
      {/* Header should always be visible */}
      <Header />

      {/* Route Handling */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Render ModelComponent only if model is loaded */}
      {modelLoaded && modelPath && <ModelComponent modelPath={modelPath} />}

      {/* Footer should always be visible */}
      <Footer />
    </Router>
  );
}
