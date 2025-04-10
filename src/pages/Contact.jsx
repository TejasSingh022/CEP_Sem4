import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact-container">
      <section className="contact-section">
        <h1 className="page-title">Contact Us</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Visit Us</h3>
              <p>Anandwan, Chandrapur district,</p>
              <p>Maharashtra, PIN - 442914</p>
            </div>
            
            <div className="info-item">
              <h3>Opening Hours</h3>
              <p>Monday - Friday: 10am - 6pm</p>
              <p>Saturday: 11am - 5pm</p>
              <p>Sunday: Closed</p>
            </div>
            
            <div className="info-item">
              <h3>Get In Touch</h3>
              <p>Email: hello@artisancreations.com</p>
              <p>Phone: (+91) 9999999999</p>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`submit-button ${formStatus === 'sending' ? 'sending' : ''}`}
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            
            {formStatus === 'success' && (
              <div className="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </section>
      
      <section className="map-section">
        <h2 className="section-title">Find Us</h2>
        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14971.845870559155!2d79.01414669877236!3d20.260432749253642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd33dfea587f129%3A0xa1ccdf0c057e9f99!2sAnandwan%2C%20Warora%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1743698432091!5m2!1sen!2sin" width="1200" height="450"   ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;