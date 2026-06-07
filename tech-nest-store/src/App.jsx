import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductList from './components/ProductList';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { products } from './data/products';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [wishlist, setWishlist] = useState([]);

  // Load data from localStorage on page load
  useEffect(() => {
    const savedCart = localStorage.getItem('technest-cart');
    if (savedCart) setCart(JSON.parse(savedCart));
    
    const savedWishlist = localStorage.getItem('technest-wishlist');
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    
    const savedTheme = localStorage.getItem('technest-theme');
    if (savedTheme) setIsDarkMode(savedTheme === 'dark');
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('technest-cart', JSON.stringify(cart));
  }, [cart]);

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('technest-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem('technest-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Add to Cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Update Quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Toggle Wishlist
  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(i => i !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  // Cart Calculations
  const getCartCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const cartTotal = getCartTotal();
  const shipping = cartTotal > 199 ? 0 : 15;
  const finalTotal = cartTotal + shipping;

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
        cartCount={getCartCount()} 
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
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        total={cartTotal}
        shipping={shipping}
        finalTotal={finalTotal}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;