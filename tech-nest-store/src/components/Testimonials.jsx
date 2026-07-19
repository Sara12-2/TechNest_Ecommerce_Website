import React from 'react';
import { Icons } from './Icons';

function Testimonials({ isDarkMode }) {
  const testimonials = [
    { name: 'Sarah Johnson', role: 'Tech Enthusiast', text: 'Absolutely love my new AirPods! The sound quality is incredible and battery life is amazing. Best purchase ever!' },
    { name: 'Michael Chen', role: 'Professional Gamer', text: 'The Quantum Headset X is a game-changer. Comfortable for hours and the audio is crystal clear. Highly recommend!' },
    { name: 'Emily Rodriguez', role: 'Fitness Coach', text: 'Galaxy Watch Ultra helps me track my workouts perfectly. The health insights are invaluable. Best watch I\'ve owned.' }
  ];

  return (
    <div style={{ padding: '80px 5%', background: isDarkMode ? 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)' : 'linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%)' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span style={{ color: '#6366f1', fontSize: '13px', fontWeight: 600, letterSpacing: '2px' }}>TESTIMONIALS</span>
        <h2 style={{ fontSize: '32px', fontWeight: 700, marginTop: '12px', color: isDarkMode ? '#fff' : '#1a1a2e' }}>What Our Customers Say</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
        {testimonials.map(t => (
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
  );
}

export default Testimonials;