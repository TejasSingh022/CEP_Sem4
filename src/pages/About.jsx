import React from 'react';
import '../styles/About.css';
import { Link } from 'react-router-dom';
import artist1 from '../assets/POTTERY.jpeg';

const About = () => {
  const artists = [
    { 
      name: "Emma Chen", 
      specialty: "Ceramic Potter", 
      bio: "Specializing in minimalist pottery with Japanese influences",
      image: "/api/placeholder/400/300" 
    },
    { 
      name: "Marcus Rivera", 
      specialty: "Abstract Painter", 
      bio: "Creating vibrant acrylic works inspired by natural landscapes",
      image: "/api/placeholder/400/300" 
    },
    { 
      name: "Sophia Kim", 
      specialty: "Sculptural Pottery", 
      bio: "Combining traditional techniques with contemporary designs",
      image: "/api/placeholder/400/300" 
    }
  ];

  return (
    <div className="about-container">
      <section className="about-section">
        <h1 className="page-title">About Artisan Creations</h1>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src={artist1} 
              alt="Artist working on pottery" 
              className="featured-image"
            />
          </div>
          
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p>
              Founded in 2015, Artisan Creations began as a small collective of local artists passionate about bringing handcrafted art into everyday homes. What started as a weekend market stall has grown into a curated online gallery of unique pottery and paintings.
            </p>
            <p>
              Each piece in our collection is handcrafted with care, reflecting the unique style and vision of our talented artisans. We believe in the power of art to transform spaces and inspire moments of joy and reflection in daily life.
            </p>
            
            <h2 className="section-title">Our Commitment</h2>
            <p>
              We're committed to sustainable practices in our production processes and supporting independent artists. When you purchase from Artisan Creations, you're not just buying a beautiful piece of art—you're supporting a community of creators and a more thoughtful approach to home decor.
            </p>
          </div>
        </div>
      </section>
      
      {/* Meet the Artists Section */}
      <section className="artists-section">
        <h2 className="section-title">Meet Our Artists</h2>
        
        <div className="artists-grid">
          {artists.map((artist, index) => (
            <div key={index} className="artist-card">
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="artist-image"
              />
              <div className="artist-info">
                <h3 className="artist-name">{artist.name}</h3>
                <p className="artist-specialty">{artist.specialty}</p>
                <p className="artist-bio">{artist.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;