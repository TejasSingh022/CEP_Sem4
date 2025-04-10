import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/HeroImg.jpg'; 

const Hero = () => {
    const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-content">
        <img src={heroImage} alt="Hero" className="hero-image"/>
        <h1>Discover Unique Art & Pottery</h1>
        <p>Handcrafted with passion, delivered with love</p>
        <button className="cta-button" onClick={() => navigate('/paintings')}>Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;