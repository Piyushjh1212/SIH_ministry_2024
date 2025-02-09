import React, { useState } from "react";
import "./Header.css"; // Assuming your CSS is in the Header.css file

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="first_container">
          <a href="#" className="logo">
            <img
              src="./Ayushminisrtry.jpg"
              alt="logo"
              width="120px"
              height="40px"
            />
          </a>

          <ul className="menu-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Visit Herbal Garden</a></li>
          </ul>

          <button
            className="first-button"
            id="first-btn"
            onClick={toggleSidebar}
          >
            Explore
          </button>

          {isSidebarOpen && (
            <div className={`sidebar ${isSidebarOpen ? "active" : ""}`} id="sidebar">
              <ul className="menu-list0">
                <li><a href="#">Ayurveda</a></li>
                <li><a href="#">Yoga</a></li>
                <li><a href="#">Unani</a></li>
                <li><a href="#">Siddha</a></li>
                <li><a href="#">Homeopathy</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
