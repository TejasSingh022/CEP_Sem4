import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p className="price">Rs. {product.price}</p>
        <button className="add-to-cart" onClick={()=>{<PaintingDetail/>}}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;