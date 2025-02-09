import React from "react";
import "./Home.css"; // Import the CSS file
import ProductList from "../Main_component/ProductList";

const Home = () => {
  return (
    <>
    <div className="video-background">
      <video autoPlay muted loop>
        <source src="home_vedio/greenery_vedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="above-heading-container">
        <div className="home-searchbar-width">
          <div className="first-section">
            <h1 className="home-heading">
              Welcome... <br />
              To Our Herbal Library...
            </h1>
            <p className="paragraph-home">
              ComeOn.. Let's explore our herbal species Library.
            </p>
          </div>

          <div className="form-input-home">
            <form action="#">
              <input
                id="input-home"
                type="text"
                placeholder="Search herbal species here..."
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    <ProductList/>
  </>
  );
};

export default Home;
