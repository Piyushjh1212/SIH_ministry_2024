import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Components/Main_home/Home";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function Page() {
  return (
    <Router>
      {/* Header should always be visible */}
      <Header />

      {/* Route Handling */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Footer should always be visible */}
      <Footer />
    </Router>
  );
}
