import React, { useState } from 'react';
import '../styles/Paintings.css';
import PaintingDetail from './PaintingDetail';
import painting1 from '../assets/painting1.jpg';
import painting2 from '../assets/painting2.jpg';
import painting3 from '../assets/painting3.jpg'; 

const Paintings = () => {
  const paintingsData = [
    {
      id: 1,
      title: "Sunset Over Mountains",
      artist: "Marcus Rivera",
      price: 249.99,
      dimensions: "24\" x 36\"",
      medium: "Acrylic on Canvas",
      image: painting1,
      description: "A vibrant landscape capturing the golden hues of sunset over a mountain range.",
      inStock: true
    },
    {
      id: 2,
      title: "Abstract Coastal Dreams",
      artist: "Sophia Kim",
      price: 199.99,
      dimensions: "18\" x 24\"",
      medium: "Oil on Canvas",
      image: painting2,
      description: "An abstract interpretation of coastal waves with blues, teals, and sandy tones.",
      inStock: true
    },
    {
      id: 3,
      title: "Forest Meditation",
      artist: "Marcus Rivera",
      price: 329.99,
      dimensions: "30\" x 40\"",
      medium: "Acrylic on Canvas",
      image: painting3,
      description: "A peaceful forest scene with sunlight filtering through ancient trees.",
      inStock: false
    }
  ];

  const [selectedPainting, setSelectedPainting] = useState(null);

  return (
    <div className="paintings-container">
      {selectedPainting ? (
        <PaintingDetail painting={selectedPainting} onBack={() => setSelectedPainting(null)} />
      ) : (
        <>
          <h1 className="page-title">Our Paintings</h1>
          <div className="paintings-grid">
            {paintingsData.map((painting) => (
              <div key={painting.id} className="painting-card">
                <img src={painting.image} alt={painting.title} className="painting-image" />
                <h3>{painting.title}</h3>
                <p>{painting.artist}</p>
                <p>${painting.price.toFixed(2)}</p>
                <button 
                  className="add-to-cart"
                  onClick={() => setSelectedPainting(painting)}
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
