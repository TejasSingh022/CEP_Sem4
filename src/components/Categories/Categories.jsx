import React from 'react';
import './Categories.css';
import Collection1 from '../../assets/Collection1.png'; 
import Collection2 from '../../assets/Collection2.jpeg';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: 'Paintings',
      image: Collection1,
      description: 'Explore our collection of unique paintings'
    },
    {
      id: 2,
      title: 'Pottery',
      image: Collection2,
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
            <button
              className="explore-button"
              onClick={() => navigate('/skill-share')}
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
