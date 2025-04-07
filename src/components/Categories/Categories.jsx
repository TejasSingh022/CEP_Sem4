import React from 'react';
import './Categories.css';
import painting4 from '../../assets/painting4.jpg';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: 'Paintings',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5',
      description: 'Explore our collection of unique paintings'
    },
    {
      id: 2,
      title: 'Pottery',
      image: painting4,
      description: 'Discover handcrafted pottery pieces'
    }
  ];

  return (
    <section className="categories">
      <h2>Our Collections</h2>
      <div className="categories-grid">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.title} />
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <button className="explore-button">Explore</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;