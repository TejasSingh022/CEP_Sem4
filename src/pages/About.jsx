import React from 'react';
import '../styles/About.css';
import { Link } from 'react-router-dom';
import artist1 from '../assets/POTTERY.jpeg';

const About = () => {
  const artists = [
    {
      name: 'Lata Bhoyar',
      specialty: 'Plant Waste Art',
      bio: 'Creating art from dried flowers, leaves and seeds for over 15 years at Anandwan.',
      image: 'https://th.bing.com/th/id/OIP.i9slRbIrj_KvIwXWIAPcjgHaE6?rs=1&pid=ImgDetMain',
    },
    {
      name: 'Vijay Kamble',
      specialty: 'Wood Crafts',
      bio: 'Specializes in creating functional wooden items with traditional tribal motifs.',
      image: 'https://th.bing.com/th/id/OIP.C8Vi5OTdSGGknlJfigtgMgHaL4?pid=ImgDet&w=184&h=296&c=7&dpr=1.3',
    },
    {
      name: 'Meena Pawar',
      specialty: 'Fabric Crafts',
      bio: 'Teaches traditional embroidery techniques to new community members.',
      image: 'https://files.globalgiving.org/pfil/36135/pict_featured_large.jpg?t=1540231613000',
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
              Founded in 2025, ArtCraft Gallery is a heartfelt initiative dedicated to showcasing the artistry and spirit of Anandwan. What began as a mission to empower the talented artisans of this inspiring community has evolved into an online platform that shares their handcrafted products and timeless skills with the world.
            </p>

            <h2 className="section-title">Our Commitment</h2>
            <p>
              At ArtCraft Gallery, we are committed to uplifting the Anandwan community by providing a platform for their talent and encouraging sustainable, handmade artistry. Every purchase directly supports their livelihood and celebrates the legacy of skill and purpose-driven creativity.
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