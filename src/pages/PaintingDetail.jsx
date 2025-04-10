import React, { useState } from 'react';
import '../styles/PaintingDetail.css';

const PaintingDetail = ({ painting, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="painting-detail-container">
      <button className="close-button" onClick={onClose}>Close</button>
      <div className="painting-detail">
        <div className="painting-detail-image">
          <img src={painting.image} alt={painting.title} />
          <div className="additional-images">
            {painting.additionalImages?.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`${painting.title} - view ${index + 1}`} 
                className="thumbnail"
              />
            ))}
          </div>
        </div>
        
        <div className="painting-detail-info">
          <h1 className="painting-detail-title">{painting.title}</h1>
          <p className="painting-detail-artist">by {painting.artist}</p>
          <p className="painting-detail-price">Rs. {painting.price.toFixed(2)}</p>
          
          <div className="painting-detail-specs">
            <div className="spec-item">
              <span className="spec-label">Medium:</span>
              <span className="spec-value">{painting.medium}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Dimensions:</span>
              <span className="spec-value">{painting.dimensions}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Year:</span>
              <span className="spec-value">{painting.year}</span>
            </div>
          </div>
          
          <p className="painting-detail-description">{painting.description}</p>
          
          <div className="purchase-options">
            <div className="stock-status">
              <span className={painting.inStock ? 'in-stock' : 'out-of-stock'}>
                {painting.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            
            {painting.inStock && (
              <>
                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantity:</label>
                  <select 
                    id="quantity" 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                <button 
                  className={`add-to-cart-button ${addedToCart ? 'added' : ''}`}
                  onClick={handleAddToCart}
                >
                  {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
                </button>
              </>
            )}
          </div>
          
          <div className="shipping-info">
            <h3>Shipping & Returns</h3>
            <p>Free shipping on orders over Rs. 200. Paintings are carefully packaged to ensure safe delivery.</p>
            <p>Returns accepted within 14 days of delivery. Please contact us for return instructions.</p>
          </div>
        </div>
      </div>
      
      <section className="artist-info-section">
        <h2>About the Artist</h2>
        <p>{painting.artistBio}</p>
        <a href="#" className="view-more-link">View more works by {painting.artist}</a>
      </section>
    </div>
  );
};

export default PaintingDetail;
