import React from 'react';
import { Icons } from './Icons';

function Features({ isDarkMode }) {
  const features = [
    { icon: <Icons.Shipping />, title: 'Free Shipping', desc: 'On orders over $199' },
    { icon: <Icons.Shield />, title: '2 Year Warranty', desc: 'Premium protection' },
    { icon: <Icons.Support />, title: '24/7 Support', desc: 'Always here to help' },
    { icon: <Icons.Headphone />, title: 'Premium Quality', desc: 'Top-tier products' }
  ];

  return (
    <div style={{ padding: '80px 5%', background: isDarkMode ? '#0a0a0f' : '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span style={{ color: '#6366f1', fontSize: '13px', fontWeight: 600, letterSpacing: '2px' }}>WHY CHOOSE US</span>
        <h2 style={{ fontSize: '32px', fontWeight: 700, marginTop: '12px', color: isDarkMode ? '#fff' : '#1a1a2e' }}>Premium Experience</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
        {features.map(f => (
          <div key={f.title} style={{ textAlign: 'center', padding: '28px', borderRadius: '20px', background: isDarkMode ? 'rgba(255,255,255,0.03)' : '#f8f9fc', transition: 'transform 0.2s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #6366f1, #a855f7)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'white' }}>{f.icon}</div>
            <h4 style={{ fontWeight: 600, marginBottom: '8px', color: isDarkMode ? '#fff' : '#1a1a2e' }}>{f.title}</h4>
            <p style={{ fontSize: '14px', color: isDarkMode ? '#888' : '#999' }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;