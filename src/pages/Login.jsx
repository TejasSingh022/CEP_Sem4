// LoginSignupPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom'; // Import for navigation

const LoginSignupPage = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess('');
    setFormData({
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    });
  };

  const validateForm = () => {
    if (isLogin) {
      if (!formData.username || !formData.password) {
        setError('Username and password are required');
        return false;
      }
    } else {
      if (!formData.email || !formData.password || !formData.confirmPassword) {
        setError('All fields are required');
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError('Please enter a valid email address');
        return false;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        return false;
      }
    }
    // Fixed console log to use formData properties
    console.log({
      username: formData.username,
      email: formData.email,
      password: formData.password
    });

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      if (isLogin) {
        // Login request
        const response = await axios.post('/api/auth/login', {
          username: formData.username,
          password: formData.password
        });
        setSuccess('Login successful!');
        console.log('Login successful:', response.data);
        
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Redirect to homepage after successful login
        navigate('/home');
      } else {
        // Signup request
        const response = await axios.post('/api/auth/signup', {
          email: formData.email,
          username: formData.username,
          password: formData.password
        });
        setSuccess('Account created successfully! You can now log in.');
        console.log('Signup successful:', response.data);
        // You might want to automatically switch to login form after successful signup
        setTimeout(() => {
          setIsLogin(true);
          setFormData({
            ...formData,
            password: '',
            confirmPassword: ''
          });
        }, 1000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
      console.error('Auth error:', err);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="form-title">
          {isLogin ? 'Login to Your Account' : 'Create a New Account'}
        </h2>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {success && (
          <div className="success-message">
            {success}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          )}
          
          <div className="form-group">
            <button className="submit-button" type="submit">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
          
          <div className="toggle-form">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                className="toggle-button"
                onClick={toggleForm}
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignupPage;