import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>ArtCraft Gallery</h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/paintings">Paintings</Link></li>
          <li><Link to="/skill-share">Skill Share</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
        </ul>
      </nav>
      {/* <div className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">0</span>
      </div> */}
    </header>
  );
};

export default Header;