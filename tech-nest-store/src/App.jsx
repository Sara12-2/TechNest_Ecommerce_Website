import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductList from './components/ProductList';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(i => i !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const shipping = total > 199 ? 0 : 15;
  const finalTotal = total + shipping;

  return (
    <div style={{ 
      background: isDarkMode ? '#0a0a0f' : '#f5f5f7', 
      minHeight: '100vh',
      fontFamily: "'Inter', -apple-system, sans-serif",
      transition: 'background 0.3s ease'
    }}>
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        cartCount={cart.length} 
        setIsCartOpen={setIsCartOpen} 
      />
      
      <Hero isDarkMode={isDarkMode} />
      <Features isDarkMode={isDarkMode} />
      <ProductList 
        isDarkMode={isDarkMode} 
        addToCart={addToCart} 
        wishlist={wishlist} 
        toggleWishlist={toggleWishlist} 
      />
      <Testimonials isDarkMode={isDarkMode} />
      <Newsletter isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={removeFromCart}
        total={total}
        shipping={shipping}
        finalTotal={finalTotal}
        isDarkMode={isDarkMode}
      />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}

export default App;