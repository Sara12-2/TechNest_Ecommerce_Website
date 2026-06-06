import React from 'react';
import { Icons } from './Icons';

function Navbar({ isDarkMode, setIsDarkMode, cartCount, setIsCartOpen }) {
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
          <Icons.Cart /> <span>{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;