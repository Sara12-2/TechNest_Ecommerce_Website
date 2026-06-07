import React, { useState, useEffect, useRef } from 'react';
import { Icons } from './Icons';

function Hero({ isDarkMode }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [counters, setCounters] = useState({ customers: 0, rating: 0, satisfaction: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Counter Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate customers (0 to 50)
          const customersInterval = setInterval(() => {
            setCounters(prev => {
              if (prev.customers < 50) {
                return { ...prev, customers: prev.customers + 1 };
              }
              clearInterval(customersInterval);
              return prev;
            });
          }, 30);

          // Animate rating (0 to 4.9)
          const ratingInterval = setInterval(() => {
            setCounters(prev => {
              if (prev.rating < 4.9) {
                return { ...prev, rating: Math.min(4.9, prev.rating + 0.1) };
              }
              clearInterval(ratingInterval);
              return prev;
            });
          }, 50);

          // Animate satisfaction (0 to 99)
          const satisfactionInterval = setInterval(() => {
            setCounters(prev => {
              if (prev.satisfaction < 99) {
                return { ...prev, satisfaction: prev.satisfaction + 1 };
              }
              clearInterval(satisfactionInterval);
              return prev;
            });
          }, 20);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const demoVideoUrl = "https://www.youtube.com/embed/3Wqphkd4A8A?autoplay=1";

  return (
    <div style={{
      position: 'relative',
      padding: '60px 5% 80px',
      textAlign: 'center',
      overflow: 'hidden',
      background: isDarkMode ? 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)' : 'linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%)'
    }}>
      {/* Animated Background Shapes */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent)', borderRadius: '50%', animation: 'float 8s ease-in-out infinite', willChange: 'transform' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(168,85,247,0.15), transparent)', borderRadius: '50%', animation: 'float 6s ease-in-out infinite reverse', willChange: 'transform' }}></div>
      <div style={{ position: 'absolute', top: '50%', left: '20%', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(236,72,153,0.1), transparent)', borderRadius: '50%', animation: 'pulse 4s ease-in-out infinite', willChange: 'transform' }}></div>
      
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Badge */}
        <span style={{ 
          background: 'linear-gradient(135deg, #6366f120, #a855f720)', 
          padding: '6px 16px', 
          borderRadius: '50px', 
          fontSize: '12px', 
          fontWeight: 600, 
          color: '#6366f1', 
          display: 'inline-block', 
          marginBottom: '16px',
          backdropFilter: 'blur(10px)'
        }}>
          <Icons.Bolt /> NEXT-GEN TECHNOLOGY
        </span>
        
        {/* Main Heading */}
        <h1 style={{ 
          fontSize: '64px', 
          fontWeight: 800, 
          lineHeight: '1.1', 
          marginBottom: '16px', 
          letterSpacing: '-2px',
          color: isDarkMode ? '#fff' : '#1a1a2e'
        }}>
          Where Innovation<br />
          <span style={{ 
            background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            Meets Excellence
          </span>
        </h1>
        
        {/* Description */}
        <p style={{ 
          fontSize: '17px', 
          lineHeight: '1.5', 
          color: isDarkMode ? '#a0a0b0' : '#666', 
          marginBottom: '24px', 
          maxWidth: '550px', 
          marginLeft: 'auto', 
          marginRight: 'auto' 
        }}>
          Discover cutting-edge electronics with premium quality. Experience the future of tech today with our curated collection.
        </p>
        
        {/* Buttons */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '50px' }}>
          <button 
            onClick={scrollToProducts}
            style={{ 
              background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
              border: 'none', 
              borderRadius: '50px', 
              padding: '12px 36px', 
              fontSize: '15px', 
              fontWeight: 600, 
              color: 'white', 
              cursor: 'pointer', 
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 20px rgba(99,102,241,0.25)'
            }} 
            onMouseEnter={e => { 
              e.currentTarget.style.transform = 'translateY(-2px)'; 
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(99,102,241,0.35)';
            }} 
            onMouseLeave={e => { 
              e.currentTarget.style.transform = 'translateY(0)'; 
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(99,102,241,0.25)';
            }}
          >
            Explore Collection <Icons.ArrowRight style={{ marginLeft: '6px', transition: 'transform 0.3s' }} />
          </button>
          
          <button 
            onClick={() => setIsVideoOpen(true)}
            style={{ 
              background: 'transparent', 
              border: `2px solid ${isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'}`, 
              borderRadius: '50px', 
              padding: '12px 36px', 
              fontSize: '15px', 
              fontWeight: 600, 
              color: isDarkMode ? '#e0e0e0' : '#333', 
              cursor: 'pointer', 
              transition: 'all 0.3s ease'
            }} 
            onMouseEnter={e => { 
              e.currentTarget.style.borderColor = '#6366f1'; 
              e.currentTarget.style.color = '#6366f1';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }} 
            onMouseLeave={e => { 
              e.currentTarget.style.borderColor = isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'; 
              e.currentTarget.style.color = isDarkMode ? '#e0e0e0' : '#333';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Watch Demo
          </button>
        </div>
        
        {/* Stats with Counter Animation */}
        <div ref={statsRef} style={{ display: 'flex', gap: '50px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ 
              fontSize: '32px', 
              fontWeight: 800, 
              background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent', 
              marginBottom: '4px' 
            }}>
              {counters.customers}K+
            </h3>
            <p style={{ fontSize: '13px', color: isDarkMode ? '#888' : '#999' }}>Happy Customers</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ 
              fontSize: '32px', 
              fontWeight: 800, 
              background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent', 
              marginBottom: '4px' 
            }}>
              {counters.rating.toFixed(1)}
            </h3>
            <p style={{ fontSize: '13px', color: isDarkMode ? '#888' : '#999' }}>Average Rating</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ 
              fontSize: '32px', 
              fontWeight: 800, 
              background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent', 
              marginBottom: '4px' 
            }}>
              {counters.satisfaction}%
            </h3>
            <p style={{ fontSize: '13px', color: isDarkMode ? '#888' : '#999' }}>Satisfaction Rate</p>
          </div>
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
          background: 'rgba(0,0,0,0.95)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          animation: 'fadeIn 0.3s ease'
        }} onClick={() => setIsVideoOpen(false)}>
          <div style={{
            position: 'relative',
            width: '80%',
            maxWidth: '900px',
            background: '#000',
            borderRadius: '20px',
            overflow: 'hidden',
            animation: 'scaleIn 0.3s ease'
          }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setIsVideoOpen(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(0,0,0,0.7)',
                backdropFilter: 'blur(10px)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#ff3366'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
            >
              <Icons.Close />
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

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;