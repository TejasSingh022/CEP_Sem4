import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './FeaturedProducts.css';
import Featured1 from '../../assets/Featured1.png';
import Featured2 from '../../assets/Featured2.jpg';
import Featured3 from '../../assets/Featured3.jpg';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'String Art',
      price: 499,
      image: Featured1,
      category: 'Painting'
    },
    {
      id: 2,
      name: 'Fabric Art',
      price: 499,
      image: Featured2,
      category: 'Pottery'
    },
    {
      id: 3,
      name: 'Wooden Sculpturing',
      price: 999,
      image: Featured3,
      category: 'Painting'
    },
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;