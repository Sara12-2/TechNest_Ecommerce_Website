import React from 'react';
import { Icons } from './Icons';

function Navbar({ isDarkMode, setIsDarkMode, cartCount, setIsCartOpen }) {

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
      {/* Logo - Left Side */}
      <div style={{ fontSize: '28px', fontWeight: 800, minWidth: '120px' }}>
        <span style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TECH</span>
        <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>NEST</span>
      </div>
      
      {/* Navigation Buttons - Center */}
      <div style={{ 
        display: 'flex', 
        gap: '32px', 
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
        <button 
          onClick={() => scrollToSection('products')}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: isDarkMode ? '#c0c0d0' : '#555', 
            fontSize: '14px', 
            fontWeight: 500, 
            cursor: 'pointer',
            transition: 'color 0.2s'
          }}
          onMouseEnter={e => e.target.style.color = '#6366f1'} 
          onMouseLeave={e => e.target.style.color = isDarkMode ? '#c0c0d0' : '#555'}
        >
          Products
        </button>
        <button 
          onClick={() => scrollToSection('deals')}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: isDarkMode ? '#c0c0d0' : '#555', 
            fontSize: '14px', 
            fontWeight: 500, 
            cursor: 'pointer',
            transition: 'color 0.2s'
          }}
          onMouseEnter={e => e.target.style.color = '#6366f1'} 
          onMouseLeave={e => e.target.style.color = isDarkMode ? '#c0c0d0' : '#555'}
        >
          Deals
        </button>
        <button 
          onClick={() => scrollToSection('reviews')}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: isDarkMode ? '#c0c0d0' : '#555', 
            fontSize: '14px', 
            fontWeight: 500, 
            cursor: 'pointer',
            transition: 'color 0.2s'
          }}
          onMouseEnter={e => e.target.style.color = '#6366f1'} 
          onMouseLeave={e => e.target.style.color = isDarkMode ? '#c0c0d0' : '#555'}
        >
          Reviews
        </button>
        <button 
          onClick={() => scrollToSection('support')}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: isDarkMode ? '#c0c0d0' : '#555', 
            fontSize: '14px', 
            fontWeight: 500, 
            cursor: 'pointer',
            transition: 'color 0.2s'
          }}
          onMouseEnter={e => e.target.style.color = '#6366f1'} 
          onMouseLeave={e => e.target.style.color = isDarkMode ? '#c0c0d0' : '#555'}
        >
          Support
        </button>
      </div>
      
      {/* Right side buttons - Dark Mode + Cart */}
      <div style={{ display: 'flex', gap: '12px', minWidth: '120px', justifyContent: 'flex-end' }}>
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
          <Icons.Cart /> <span>{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;