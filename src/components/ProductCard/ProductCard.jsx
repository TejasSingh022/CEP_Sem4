import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p className="price">Rs. {product.price}</p>
        <button className="add-to-cart" onClick={()=>navigate('/paintings')}>View</button>
      </div>
    </div>
  );
};

export default ProductCard;