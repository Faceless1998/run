import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add your CSS for the navbar here

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <nav className={`nav-bar ${isMenuOpen ? 'toggle' : ''}`}>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/runs" className="nav-link" onClick={toggleMenu}>Runs</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/contacts" className="nav-link" onClick={toggleMenu}>Contacts</Link>
          </li>
        </ul>
      </nav>

      <div className="toggle-menu" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'line1-open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'line2-open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'line3-open' : ''}`}></div>
      </div>
    </div>
  );
};

export default Navbar;
