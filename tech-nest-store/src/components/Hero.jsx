import React, { useState } from 'react';
import { Icons } from './Icons';

function Hero({ isDarkMode }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Function to scroll to products section
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Demo video URL (YouTube - replace with your video)
const demoVideoUrl = "https://www.youtube.com/embed/3Wqphkd4A8A?autoplay=1";

  return (
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
          Discover cutting-edge electronics with premium quality. Experience the future of tech today with our curated collection.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '60px' }}>
          {/* Explore Collection Button */}
          <button 
            onClick={scrollToProducts}
            style={{ 
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
          
          {/* Watch Demo Button - Opens Video Modal */}
          <button 
            onClick={() => setIsVideoOpen(true)}
            style={{ 
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

      {/* Video Modal */}
      {isVideoOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.9)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }} onClick={() => setIsVideoOpen(false)}>
          <div style={{
            position: 'relative',
            width: '80%',
            maxWidth: '900px',
            background: '#000',
            borderRadius: '20px',
            overflow: 'hidden'
          }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setIsVideoOpen(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                cursor: 'pointer',
                zIndex: 10,
                fontSize: '18px'
              }}
            >
              ✕
            </button>
            <iframe
              width="100%"
              height="500"
              src={demoVideoUrl}
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;