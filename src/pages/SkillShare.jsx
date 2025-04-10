import React, { useState } from 'react';
import '../styles/skillshare.css';

const SkillShare = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'painting', name: 'Painting' },
    { id: 'fabric', name: 'Fabric Crafts' },
    { id: 'wood', name: 'Wood Crafts' },
    { id: 'plantWaste', name: 'Plant Waste Art' }
  ];
  
  const skillVideos = [
    {
      id: 1,
      title: 'Traditional Warli Painting Technique',
      category: 'painting',
      description: 'Learn the ancient Warli painting technique, a tribal art form from Maharashtra. Our artisans demonstrate how to create symbolic patterns using natural pigments.',
      videoUrl: 'https://example.com/warli-painting-video',
      thumbnailUrl: 'https://miro.medium.com/max/1400/1*uxVoDRfV506S-19jGiyUbg.jpeg',
      instructor: 'Rajesh Madavi',
      duration: '18:45'
    },
    {
      id: 2,
      title: 'Creating Decorative Items from Plant Waste',
      category: 'plantWaste',
      description: 'Watch how our craftspeople transform dried leaves, seeds, and other plant waste into beautiful decorative items for your home.',
      videoUrl: 'https://example.com/plant-waste-crafts',
      thumbnailUrl: 'https://www.sortra.com/wp-content/uploads/2016/12/flower-art012.jpg',
      instructor: 'Sunita Patil',
      duration: '24:10'
    },
    {
      id: 3,
      title: 'Handloom Weaving Basics',
      category: 'fabric',
      description: 'Learn the fundamentals of handloom weaving and how our artisans create beautiful fabric patterns using traditional techniques.',
      videoUrl: 'https://example.com/handloom-basics',
      thumbnailUrl: 'https://www.caleidoscope.in/wp-content/uploads/2021/07/Handlooms-of-India-1.jpg',
      instructor: 'Priya Sharma',
      duration: '32:15'
    },
    {
      id: 4,
      title: 'Woodcarving: From Tree to Art',
      category: 'wood',
      description: 'Discover the entire process of woodcarving - from selecting the right wood to creating intricate designs that tell stories.',
      videoUrl: 'https://example.com/woodcarving',
      thumbnailUrl: 'https://th.bing.com/th/id/OIP.esAYayXh4PVPD16VmT61HgHaHa?rs=1&pid=ImgDetMain',
      instructor: 'Mahesh Gawande',
      duration: '45:30'
    }
  ];
  
  const featuredArtisans = [
    {
      id: 1,
      name: 'Lata Bhoyar',
      specialty: 'Plant Waste Art',
      bio: 'Creating art from dried flowers, leaves and seeds for over 15 years at Anandwan.',
      imageUrl: 'https://th.bing.com/th/id/OIP.i9slRbIrj_KvIwXWIAPcjgHaE6?rs=1&pid=ImgDetMain',
      quote: '"Nature provides everything we need for beauty. My hands just arrange it."'
    },
    {
      id: 2,
      name: 'Vijay Kamble',
      specialty: 'Wood Crafts',
      bio: 'Specializes in creating functional wooden items with traditional tribal motifs.',
      imageUrl: 'https://th.bing.com/th/id/OIP.C8Vi5OTdSGGknlJfigtgMgHaL4?pid=ImgDet&w=184&h=296&c=7&dpr=1.3',
      quote: '"Each piece of wood has a story; I help it speak."'
    },
    {
      id: 3,
      name: 'Meena Pawar',
      specialty: 'Fabric Crafts',
      bio: 'Teaches traditional embroidery techniques to new community members.',
      imageUrl: 'https://files.globalgiving.org/pfil/36135/pict_featured_large.jpg?t=1540231613000',
      quote: '"In every stitch, there is healing and hope."'
    }
  ];
  
  const filteredVideos = selectedCategory === 'all' 
    ? skillVideos 
    : skillVideos.filter(video => video.category === selectedCategory);
  
  return (
    <>
      <div className="skill-sharing-container">
        <div className="page-banner">
          <h1>Skill Sharing</h1>
          <p>Learn traditional crafts from the skilled artisans of Anandwan</p>
        </div>
        
        <section className="intro-section">
          <div className="intro-content">
            <h2>A Community of Skilled Creators</h2>
            <p>
              Anandwan is more than a leprosy treatment center - it's a vibrant community where 
              healing happens through creativity and purpose. Here, patients recover not just physically 
              but also discover and develop their artistic talents, transforming natural materials into 
              beautiful works of art.
            </p>
            <p>
              Each craft tells a story of resilience, showcasing the incredible skills of our community members. 
              Learn directly from our artisans through these skill-sharing videos and guides.
            </p>
          </div>
          <div className="intro-image">
            <img src="https://th.bing.com/th/id/OIP.RRc9HG-H-IlccZWKZLLgmQHaE7?w=288&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Artisans working at Anandwan" />
          </div>
        </section>
        
        <section className="category-filter">
          <h2>Explore Skills by Category</h2>
          <div className="category-buttons">
            {categories.map(category => (
              <button 
                key={category.id}
                className={selectedCategory === category.id ? 'category-button active' : 'category-button'}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>
        
        <section className="skill-videos">
          <h2>Learn From Our Artisans</h2>
          <div className="video-grid">
            {filteredVideos.map(video => (
              <div className="video-card" key={video.id}>
                <div className="video-thumbnail">
                  <img src={video.thumbnailUrl} alt={video.title} />
                  <div className="video-duration">{video.duration}</div>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p className="video-instructor">With {video.instructor}</p>
                  <p className="video-description">{video.description}</p>
                  <button className="watch-button">Watch Tutorial</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="featured-artisans">
          <h2>Meet Our Master Artisans</h2>
          <div className="artisans-grid">
            {featuredArtisans.map(artisan => (
              <div className="artisan-card" key={artisan.id}>
                <div className="artisan-image">
                  <img src={artisan.imageUrl} alt={artisan.name} />
                </div>
                <div className="artisan-info">
                  <h3>{artisan.name}</h3>
                  <p className="artisan-specialty">{artisan.specialty}</p>
                  <p className="artisan-bio">{artisan.bio}</p>
                  <p className="artisan-quote">{artisan.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="community-impact">
          <h2>The Impact of Crafts at Anandwan</h2>
          <div className="impact-content">
            <div className="impact-text">
              <p>
                At Anandwan, craft-making is more than an occupation – it's a path to dignity, 
                self-reliance, and healing. When community members create and share their skills, 
                they rebuild their confidence while preserving traditional art forms.
              </p>
              <p>
                Every purchase of crafts from Anandwan supports not just an individual artisan, 
                but helps sustain the entire community's sustainable development initiatives.
              </p>
              <button className="impact-button">Learn About Our Community</button>
            </div>
            <div className="impact-video">
              <video controls poster="https://img1.rapidleaks.com/2018/01/Baba-Amte-at-Anandwan.jpeg">
                <source src="https://youtu.be/VphPNjO9kGM" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
        
        <section className="process-showcase">
          <h2>From Raw Materials to Masterpieces</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Material Collection</h3>
                <p>Our artisans sustainably gather natural materials including plant waste, fallen wood, and locally sourced fabric.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Preparation</h3>
                <p>Materials are carefully processed and prepared using traditional techniques passed down through generations.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Crafting</h3>
                <p>Skilled hands transform the prepared materials into beautiful, functional artwork with cultural significance.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Finishing</h3>
                <p>Each piece is carefully finished and quality checked to ensure it meets our high standards of craftsmanship.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="participate">
          <h2>Share Your Own Skills</h2>
          <p>Are you an artisan from Anandwan? We invite you to share your techniques and stories with our global community.</p>
          <button className="cta-button">Submit Your Skill Video</button>
        </section>
      </div>
    </>
  );
};

export default SkillShare;