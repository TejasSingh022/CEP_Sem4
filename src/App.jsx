import React from 'react';
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Paintings from './pages/Paintings';
import SkillShare from './pages/SkillShare';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <Router>
        <Header />
      <>
        <Routes>
          <Route path="/" element={<div className="app"> <Home /></div>} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/skill-share" element={<SkillShare />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
    
  );
}

export default App;