import React from 'react';

function Newsletter({ isDarkMode }) {
  return (
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
  );
}

export default Newsletter;