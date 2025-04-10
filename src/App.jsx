import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Paintings from './pages/Paintings';
import SkillShare from './pages/SkillShare';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Cart from './pages/Cart';  
import { CartProvider } from './components/Cart/CartContext';

function Layout() {
  const location = useLocation();
  const showHeader = location.pathname !== '/';
  const showFooter = location.pathname !== '/';

  return (
    <>
      <CartProvider>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<div className="app"> <Login /></div>} />
        <Route path="/home" element={<div className="app"> <Home /></div>} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/skill-share" element={<SkillShare />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showFooter&&<Footer />}
      </CartProvider>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
