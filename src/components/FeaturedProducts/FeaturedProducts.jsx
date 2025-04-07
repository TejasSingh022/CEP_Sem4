import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './FeaturedProducts.css';
import painting1 from '../../assets/painting1.jpg';
import painting2 from '../../assets/painting2.jpg';
import painting3 from '../../assets/painting3.jpg';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Abstract Canvas Art',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5',
      category: 'Painting'
    },
    {
      id: 2,
      name: 'Ceramic Vase',
      price: 89.99,
      image: painting2,
      category: 'Pottery'
    },
    {
      id: 3,
      name: 'Landscape Painting',
      price: 199.99,
      image: painting1,
      category: 'Painting'
    },
    {
      id: 4,
      name: 'Handmade Bowl Set',
      price: 129.99,
      image: painting3,
      category: 'Pottery'
    }
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