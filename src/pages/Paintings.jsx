import React, { use, useState } from 'react';
import '../styles/Paintings.css';
import PaintingDetail from './PaintingDetail';
import Featured1 from '../assets/Featured1.png';
import Featured2 from '../assets/Featured2.jpg';
import Featured3 from '../assets/Featured3.jpg'; 
import { useNavigate } from 'react-router-dom';

const Paintings = () => {
const navigate = useNavigate();

  const paintingsData = [
    {
      id: 1,
      title: "String Art",
      artist: "Artist Name",
      price: 499,
      dimensions: "18\" x 18\"",
      medium: "String on Canvas",
      image: Featured1,
      description: "String art is a decorative art form that uses colored thread or yarn strung between nails to form geometric patterns or images. It's a creative blend of math and design, resulting in visually striking artwork.",
      inStock: true
    },
    {
      id: 2,
      title: "Fabric Art",
      artist: "Artist Name",
      price: 499,
      dimensions: "18\" x 24\"",
      medium: "Oil on Canvas",
      image: Featured2,
      description: "Fabric art involves creating artistic designs using textiles through techniques like embroidery, dyeing, stitching, or patchwork. It combines creativity with craftsmanship to produce decorative or functional fabric pieces.",
      inStock: true
    },
    {
      id: 3,
      title: "Wood Sculpture",
      artist: "Artist Name",
      price: 999,
      dimensions: "30\" x 40\"",
      medium: "Acrylic on Canvas",
      image: Featured3,
      description: "Wood sculpturing is the art of shaping wood into artistic forms using tools like chisels, knives, and mallets. It transforms natural wood into intricate sculptures, figures, or decorative objects.",
      inStock: false
    }
  ];

  const [selectedPainting, setSelectedPainting] = useState(null);

  return (
    <div className="paintings-container">
      {selectedPainting ? (
        <PaintingDetail painting={selectedPainting} onClose={() => setSelectedPainting(null)} />
      ) : (
        <>
          <h1 className="page-title">Our Paintings</h1>
          <div className="paintings-grid">
            {paintingsData.map((painting) => (
              <div key={painting.id} className="painting-card">
                <img src={painting.image} alt={painting.title} className="painting-image" />
                <h3>{painting.title}</h3>
                <p>{painting.artist}</p>
                <p>Rs.{painting.price.toFixed(2)}</p>
                <button 
                  className="add-to-cart"
                  onClick={() => {
                    setSelectedPainting(painting);
                    //navigate(`/painting/${painting.id}`);
                  }}
                >
                  View Details
                </button>

              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Paintings;
