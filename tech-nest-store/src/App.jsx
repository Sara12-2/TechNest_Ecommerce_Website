import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Icons Components
const Icons = {
  Cart: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 2h2l2.5 10H18l2.5-8H6"/></svg>,
  Heart: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 8.5c0 6-8 11-8 11s-8-5-8-11c0-3 2.5-5.5 5-5.5 1.5 0 2.5 1 3.5 2.5.8-1.3 2-2.5 3.5-2.5 2.5 0 5 2.5 5 5.5z"/></svg>,
  Star: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffb800"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  StarOutline: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  Trash: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>,
  Close: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  Sun: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
  Moon: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  ArrowRight: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  Shipping: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  Shield: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Headphone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
  Support: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
  Quote: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5"><path d="M10 11h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"/><path d="M18 11h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"/><path d="M8 16v3"/><path d="M16 16v3"/><path d="M4 20h16"/></svg>,
  Facebook: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  Twitter: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>,
  Instagram: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="18.5" cy="5.5" r="1.5"/></svg>,
  LinkedIn: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
};

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  const products = [
    { id: 1, name: "Galaxy Watch Ultra", price: 349, oldPrice: 499, category: "Watches", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400", rating: 4.9, reviews: 234, isNew: true, discount: 30 },
    { id: 2, name: "AirPods Max Pro", price: 249, oldPrice: 399, category: "Audio", image: "https://images.unsplash.com/photo-1606225457115-9b0de873c5db?w=400", rating: 4.8, reviews: 189, isNew: false, discount: 38 },
    { id: 3, name: "Quantum Headset X", price: 179, oldPrice: 259, category: "Gaming", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400", rating: 4.7, reviews: 456, isNew: true, discount: 31 },
    { id: 4, name: "Neo Mouse Pro", price: 59, oldPrice: 89, category: "Accessories", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400", rating: 4.6, reviews: 567, isNew: false, discount: 34 },
    { id: 5, name: "Aero Laptop Stand", price: 99, oldPrice: 149, category: "Accessories", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400", rating: 4.8, reviews: 123, isNew: true, discount: 34 },
    { id: 6, name: "4K Drone X", price: 599, oldPrice: 899, category: "Gadgets", image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=400", rating: 4.9, reviews: 89, isNew: true, discount: 33 },
  ];

  const categories = ['All', 'Watches', 'Audio', 'Gaming', 'Accessories', 'Gadgets'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

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
      
      {/* ========== NAVBAR ========== */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(20px)',
        background: isDarkMode ? 'rgba(10,10,15,0.85)' : 'rgba(245,245,247,0.85)',
        borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
        padding: '16px 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
          <div style={{ fontSize: '28px', fontWeight: 800 }}>
            <span style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TECH</span>
            <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>NEST</span>
          </div>
          <div style={{ display: 'flex', gap: '28px' }}>
            {['Products', 'Deals', 'Reviews', 'Support'].map(item => (
              <a key={item} href="#" style={{ color: isDarkMode ? '#c0c0d0' : '#555', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#6366f1'} onMouseLeave={e => e.target.style.color = isDarkMode ? '#c0c0d0' : '#555'}>{item}</a>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={() => setIsDarkMode(!isDarkMode)} style={{ 
            background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', 
            border: 'none', 
            borderRadius: '50%', 
            width: '40px', 
            height: '40px', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: isDarkMode ? '#ffd700' : '#1a1a2e',
            transition: 'all 0.2s'
          }}>
            {isDarkMode ? <Icons.Sun /> : <Icons.Moon />}
          </button>
          <button onClick={() => setIsCartOpen(true)} style={{ 
            background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
            border: 'none', 
            borderRadius: '40px', 
            padding: '10px 24px', 
            color: 'white', 
            fontWeight: 600, 
            cursor: 'pointer', 
            display: 'flex', 
            gap: '8px', 
            alignItems: 'center' 
          }}>
            <Icons.Cart /> <span>{cart.length}</span>
          </button>
        </div>
      </nav>

      {/* ========== HERO SECTION - Text moved up ========== */}
      <div style={{
        position: 'relative',
        padding: '40px 5% 80px',
        textAlign: 'center',
        overflow: 'hidden',
        background: isDarkMode ? 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)' : 'linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%)'
      }}>
        {/* Animated Background Shapes */}
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent)', borderRadius: '50%', animation: 'float 8s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(168,85,247,0.15), transparent)', borderRadius: '50%', animation: 'float 6s ease-in-out infinite reverse' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '20%', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(236,72,153,0.1), transparent)', borderRadius: '50%', animation: 'pulse 4s ease-in-out infinite' }}></div>
        
        <div style={{ position: 'relative', zIndex: 2 }}>
          <span style={{ background: 'linear-gradient(135deg, #6366f120, #a855f720)', padding: '8px 20px', borderRadius: '50px', fontSize: '13px', fontWeight: 600, color: '#6366f1', display: 'inline-block', marginBottom: '24px' }}>
            ⚡ NEXT-GEN TECHNOLOGY
          </span>
          
          <h1 style={{ 
            fontSize: '70px', 
            fontWeight: 800, 
            lineHeight: '1.1', 
            marginBottom: '24px', 
            letterSpacing: '-3px',
            color: isDarkMode ? '#fff' : '#1a1a2e'
          }}>
            Where Innovation<br />
            <span style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Meets Excellence</span>
          </h1>
          
          <p style={{ 
            fontSize: '18px', 
            lineHeight: '1.6', 
            color: isDarkMode ? '#a0a0b0' : '#666', 
            marginBottom: '32px', 
            maxWidth: '600px', 
            marginLeft: 'auto', 
            marginRight: 'auto' 
          }}>
            Discover cutting-edge electronics with premium quality. 
            Experience the future of tech today with our curated collection.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '60px' }}>
            <button style={{ 
              background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
              border: 'none', 
              borderRadius: '50px', 
              padding: '14px 42px', 
              fontSize: '16px', 
              fontWeight: 600, 
              color: 'white', 
              cursor: 'pointer', 
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 10px 25px rgba(99,102,241,0.25)'
            }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 20px 35px rgba(99,102,241,0.35)' }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(99,102,241,0.25)' }}>
              Explore Collection <Icons.ArrowRight style={{ marginLeft: '8px' }} />
            </button>
            <button style={{ 
              background: 'transparent', 
              border: `2px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'}`, 
              borderRadius: '50px', 
              padding: '14px 42px', 
              fontSize: '16px', 
              fontWeight: 600, 
              color: isDarkMode ? '#e0e0e0' : '#333', 
              cursor: 'pointer', 
              transition: 'all 0.2s'
            }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.color = '#6366f1' }} onMouseLeave={e => { e.currentTarget.style.borderColor = isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'; e.currentTarget.style.color = isDarkMode ? '#e0e0e0' : '#333' }}>
              Watch Demo
            </button>
          </div>
          
          <div style={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
            {[{ value: '50K+', label: 'Happy Customers' }, { value: '4.9', label: 'Average Rating' }, { value: '99%', label: 'Satisfaction Rate' }].map(stat => (
              <div key={stat.label}>
                <h3 style={{ fontSize: '32px', fontWeight: 800, background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '4px' }}>{stat.value}</h3>
                <p style={{ fontSize: '14px', color: isDarkMode ? '#888' : '#999' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== FEATURES SECTION ========== */}
      <div style={{ padding: '80px 5%', background: isDarkMode ? '#0a0a0f' : '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ color: '#6366f1', fontSize: '13px', fontWeight: 600, letterSpacing: '2px' }}>WHY CHOOSE US</span>
          <h2 style={{ fontSize: '32px', fontWeight: 700, marginTop: '12px', color: isDarkMode ? '#fff' : '#1a1a2e' }}>Premium Experience</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          {[{ icon: <Icons.Shipping />, title: 'Free Shipping', desc: 'On orders over $199' }, { icon: <Icons.Shield />, title: '2 Year Warranty', desc: 'Premium protection' }, { icon: <Icons.Support />, title: '24/7 Support', desc: 'Always here to help' }, { icon: <Icons.Headphone />, title: 'Premium Quality', desc: 'Top-tier products' }].map(f => (
            <div key={f.title} style={{ textAlign: 'center', padding: '28px', borderRadius: '20px', background: isDarkMode ? 'rgba(255,255,255,0.03)' : '#f8f9fc', transition: 'transform 0.2s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #6366f1, #a855f7)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'white' }}>{f.icon}</div>
              <h4 style={{ fontWeight: 600, marginBottom: '8px', color: isDarkMode ? '#fff' : '#1a1a2e' }}>{f.title}</h4>
              <p style={{ fontSize: '14px', color: isDarkMode ? '#888' : '#999' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========== PRODUCTS SECTION ========== */}
      <div style={{ padding: '0 5% 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: isDarkMode ? '#fff' : '#1a1a2e' }}>Best Sellers</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{ 
                background: activeCategory === cat ? 'linear-gradient(135deg, #6366f1, #a855f7)' : 'transparent', 
                border: `1px solid ${activeCategory === cat ? 'transparent' : (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)')}`, 
                borderRadius: '50px', 
                padding: '8px 24px', 
                fontSize: '14px', 
                fontWeight: activeCategory === cat ? 600 : 500, 
                color: activeCategory === cat ? 'white' : (isDarkMode ? '#c0c0d0' : '#555'), 
                cursor: 'pointer', 
                transition: 'all 0.2s' 
              }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '30px' }}>
          {filteredProducts.map(product => (
            <div key={product.id} style={{ 
              background: isDarkMode ? 'rgba(255,255,255,0.03)' : '#fff', 
              borderRadius: '28px', 
              padding: '24px', 
              transition: 'all 0.3s', 
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`, 
              position: 'relative' 
            }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 25px 40px rgba(0,0,0,0.1)' }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              
              {product.isNew && <span style={{ position: 'absolute', top: '20px', left: '20px', background: '#00ff88', color: '#1a1a2e', padding: '4px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, zIndex: 2 }}>NEW</span>}
              
              <button onClick={() => toggleWishlist(product.id)} style={{ 
                position: 'absolute', 
                top: '20px', 
                right: '20px', 
                background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', 
                border: 'none', 
                borderRadius: '50%', 
                width: '38px', 
                height: '38px', 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                zIndex: 2, 
                color: wishlist.includes(product.id) ? '#ff3366' : (isDarkMode ? '#888' : '#aaa') 
              }}>
                <Icons.Heart />
              </button>
              
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '20px', marginBottom: '20px' }} />
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: isDarkMode ? '#fff' : '#1a1a2e', margin: 0 }}>{product.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {[...Array(5)].map((_, i) => i < Math.floor(product.rating) ? <Icons.Star key={i} /> : <Icons.StarOutline key={i} />)}
                    <span style={{ fontSize: '12px', color: '#888', marginLeft: '4px' }}>({product.reviews})</span>
                  </div>
                </div>
                <p style={{ color: '#888', fontSize: '14px', marginBottom: '20px' }}>{product.category}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '32px', fontWeight: 800, color: isDarkMode ? '#fff' : '#1a1a2e' }}>${product.price}</span>
                  <span style={{ fontSize: '18px', color: '#888', textDecoration: 'line-through' }}>${product.oldPrice}</span>
                  <span style={{ background: '#00ff8820', color: '#00cc6a', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>-{product.discount}%</span>
                </div>
                <button onClick={() => addToCart(product)} style={{ 
                  width: '100%', 
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
                  border: 'none', 
                  borderRadius: '50px', 
                  padding: '14px', 
                  color: 'white', 
                  fontWeight: 600, 
                  cursor: 'pointer', 
                  transition: 'opacity 0.2s' 
                }} onMouseEnter={e => e.currentTarget.style.opacity = '0.9'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                  Add to Cart →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <div style={{ padding: '80px 5%', background: isDarkMode ? 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)' : 'linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%)' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ color: '#6366f1', fontSize: '13px', fontWeight: 600, letterSpacing: '2px' }}>TESTIMONIALS</span>
          <h2 style={{ fontSize: '32px', fontWeight: 700, marginTop: '12px', color: isDarkMode ? '#fff' : '#1a1a2e' }}>What Our Customers Say</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
          {[
            { name: 'Sarah Johnson', role: 'Tech Enthusiast', text: 'Absolutely love my new AirPods! The sound quality is incredible and battery life is amazing. Best purchase ever!', rating: 5 },
            { name: 'Michael Chen', role: 'Professional Gamer', text: 'The Quantum Headset X is a game-changer. Comfortable for hours and the audio is crystal clear. Highly recommend!', rating: 5 },
            { name: 'Emily Rodriguez', role: 'Fitness Coach', text: 'Galaxy Watch Ultra helps me track my workouts perfectly. The health insights are invaluable. Best watch I\'ve owned.', rating: 5 }
          ].map(t => (
            <div key={t.name} style={{ background: isDarkMode ? 'rgba(255,255,255,0.03)' : '#fff', borderRadius: '24px', padding: '32px', textAlign: 'center', transition: 'transform 0.2s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}><Icons.Quote /></div>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: isDarkMode ? '#c0c0d0' : '#555', marginBottom: '24px' }}>"{t.text}"</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '16px' }}>{[...Array(5)].map((_, i) => <Icons.Star key={i} />)}</div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: isDarkMode ? '#fff' : '#1a1a2e' }}>{t.name}</h4>
              <p style={{ fontSize: '13px', color: '#888' }}>{t.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========== NEWSLETTER SECTION ========== */}
      <div style={{ padding: '80px 5%', background: isDarkMode ? '#0a0a0f' : '#fff' }}>
        <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px', background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Stay Connected</h2>
          <p style={{ color: isDarkMode ? '#888' : '#666', marginBottom: '32px', fontSize: '16px' }}>Subscribe to get exclusive offers and new product alerts</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              style={{ 
                padding: '16px 24px', 
                borderRadius: '50px', 
                border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, 
                background: isDarkMode ? 'rgba(255,255,255,0.03)' : '#f8f9fc', 
                color: isDarkMode ? '#fff' : '#1a1a2e', 
                width: '320px', 
                outline: 'none',
                fontSize: '15px'
              }} 
            />
            <button style={{ 
              background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
              border: 'none', 
              borderRadius: '50px', 
              padding: '16px 36px', 
              color: 'white', 
              fontWeight: 600, 
              cursor: 'pointer',
              fontSize: '15px',
              transition: 'transform 0.2s'
            }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              Subscribe →
            </button>
          </div>
        </div>
      </div>

      {/* ========== FOOTER - Premium Styling ========== */}
      <footer style={{ 
        borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`, 
        padding: '60px 5% 40px', 
        background: isDarkMode ? '#0a0a0f' : '#fff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '50px',
            marginBottom: '50px'
          }}>
            {/* Brand Section */}
            <div>
              <div style={{ fontSize: '28px', fontWeight: 800, marginBottom: '20px' }}>
                <span style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TECH</span>
                <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>NEST</span>
              </div>
              <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>Premium electronics for the modern lifestyle. Quality products, exceptional service.</p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#" style={{ color: '#888', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#6366f1'} onMouseLeave={e => e.target.style.color = '#888'}><Icons.Facebook /></a>
                <a href="#" style={{ color: '#888', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#6366f1'} onMouseLeave={e => e.target.style.color = '#888'}><Icons.Twitter /></a>
                <a href="#" style={{ color: '#888', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#6366f1'} onMouseLeave={e => e.target.style.color = '#888'}><Icons.Instagram /></a>
                <a href="#" style={{ color: '#888', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#6366f1'} onMouseLeave={e => e.target.style.color = '#888'}><Icons.LinkedIn /></a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 style={{ color: isDarkMode ? '#fff' : '#1a1a2e', fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['About Us', 'Our Products', 'Best Sellers', 'New Arrivals'].map(link => (
                  <li key={link} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#6366f1'} onMouseLeave={e => e.target.style.color = '#888'}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 style={{ color: isDarkMode ? '#fff' : '#1a1a2e', fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Help Center', 'Returns Policy', 'Track Order', 'Contact Us'].map(link => (
                  <li key={link} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#6366f1'} onMouseLeave={e => e.target.style.color = '#888'}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 style={{ color: isDarkMode ? '#fff' : '#1a1a2e', fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>Contact Us</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', color: '#888', fontSize: '14px' }}>📧 hello@technest.com</li>
                <li style={{ marginBottom: '12px', color: '#888', fontSize: '14px' }}>📞 +1 234 567 890</li>
                <li style={{ marginBottom: '12px', color: '#888', fontSize: '14px' }}>📍 123 Tech Street, NY 10001</li>
              </ul>
            </div>
          </div>
          
          <div style={{ 
            textAlign: 'center', 
            paddingTop: '30px', 
            borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` 
          }}>
            <p style={{ color: '#888', fontSize: '13px' }}>© 2026 TECHNEST. All rights reserved. Crafted with 💜 by Sara Manzoor</p>
          </div>
        </div>
      </footer>

      {/* ========== CART DRAWER ========== */}
      {isCartOpen && (
        <div style={{ position: 'fixed', top: 0, right: 0, width: '450px', height: '100vh', background: isDarkMode ? '#0a0a0f' : '#fff', boxShadow: '-5px 0 30px rgba(0,0,0,0.2)', zIndex: 200, padding: '28px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <h3 style={{ fontSize: '26px', fontWeight: 700, color: isDarkMode ? '#fff' : '#1a1a2e' }}>Your Cart</h3>
            <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}><Icons.Close /></button>
          </div>
          
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ color: '#888', fontSize: '16px' }}>Your cart is empty</p>
            </div>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '16px', marginBottom: '24px', paddingBottom: '24px', borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
                  <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', borderRadius: '16px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '6px', color: isDarkMode ? '#fff' : '#1a1a2e' }}>{item.name}</h4>
                    <p style={{ color: '#6366f1', fontWeight: 600, fontSize: '18px', marginBottom: '10px' }}>${item.price}</p>
                    <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#ff3366', cursor: 'pointer', fontSize: '13px', padding: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Icons.Trash /> Remove
                    </button>
                  </div>
                </div>
              ))}
              
              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '16px', color: isDarkMode ? '#c0c0d0' : '#666' }}>Subtotal</span>
                  <span style={{ fontSize: '16px', fontWeight: 600, color: isDarkMode ? '#fff' : '#1a1a2e' }}>${total}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '16px', color: isDarkMode ? '#c0c0d0' : '#666' }}>Shipping</span>
                  <span style={{ fontSize: '16px', color: isDarkMode ? '#fff' : '#1a1a2e' }}>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px', paddingTop: '16px', borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
                  <span style={{ fontSize: '20px', fontWeight: 700, color: isDarkMode ? '#fff' : '#1a1a2e' }}>Total</span>
                  <span style={{ fontSize: '28px', fontWeight: 800, color: '#6366f1' }}>${finalTotal}</span>
                </div>
                <button style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '16px',
                  color: 'white',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '16px',
                  transition: 'opacity 0.2s'
                }} onMouseEnter={e => e.currentTarget.style.opacity = '0.9'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                  Proceed to Checkout →
                </button>
              </div>
            </>
          )}
        </div>
      )}

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