import React, { useEffect, useRef, useState } from 'react';
import { Icons } from './Icons';

function Features({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: <Icons.Shipping />, title: 'Free Shipping', desc: 'On orders over $199', delay: 0 },
    { icon: <Icons.Shield />, title: '2 Year Warranty', desc: 'Premium protection', delay: 0.1 },
    { icon: <Icons.Support />, title: '24/7 Support', desc: 'Always here to help', delay: 0.2 },
    { icon: <Icons.Headphone />, title: 'Premium Quality', desc: 'Top-tier products', delay: 0.3 }
  ];

  return (
    <div ref={sectionRef} style={{ 
      padding: '80px 5%', 
      background: isDarkMode ? '#0a0a0f' : '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Element */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-20%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08), transparent)',
        borderRadius: '50%',
        animation: 'floatBG 20s ease-in-out infinite'
      }} />

      {/* Section Header */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '60px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.6s ease'
      }}>
        <span style={{ 
          color: '#6366f1', 
          fontSize: '12px', 
          fontWeight: 600, 
          letterSpacing: '3px',
          textTransform: 'uppercase',
          display: 'inline-block',
          marginBottom: '16px',
          position: 'relative'
        }}>
          WHY CHOOSE US
        </span>
        <h2 style={{ 
          fontSize: '36px', 
          fontWeight: 700, 
          margin: '0',
          color: isDarkMode ? '#fff' : '#1a1a2e'
        }}>
          Premium Experience
        </h2>
        <div style={{
          width: '60px',
          height: '3px',
          background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          margin: '20px auto 0',
          borderRadius: '3px',
          transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 0.8s ease 0.3s',
          transformOrigin: 'center'
        }} />
      </div>

      {/* Features Grid */}
      <div className="features-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {features.map((f, index) => (
          <div 
            key={f.title} 
            style={{ 
              textAlign: 'center', 
              padding: '40px 24px', 
              borderRadius: '28px', 
              background: isDarkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
              boxShadow: isDarkMode ? 'none' : '0 10px 30px rgba(0,0,0,0.05)',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
              transition: 'all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
              transitionDelay: `${f.delay}s`,
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }} 
            onMouseEnter={e => { 
              e.currentTarget.style.transform = 'translateY(-10px)'; 
              e.currentTarget.style.boxShadow = '0 25px 45px rgba(99,102,241,0.2)';
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
            }} 
            onMouseLeave={e => { 
              e.currentTarget.style.transform = 'translateY(0)'; 
              e.currentTarget.style.boxShadow = isDarkMode ? 'none' : '0 10px 30px rgba(0,0,0,0.05)';
              e.currentTarget.style.borderColor = isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
            }}
          >
            {/* Gradient Border Animation */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899, #a855f7, #6366f1)',
              backgroundSize: '200% 100%',
              animation: 'gradientMove 3s ease infinite',
              opacity: 0,
              transition: 'opacity 0.3s'
            }} className="top-border" />

            {/* Icon Container with Pulse Animation */}
            <div style={{ 
              width: '80px', 
              height: '80px', 
              background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 24px', 
              color: 'white',
              transition: 'all 0.3s ease',
              animation: isVisible ? `iconPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${f.delay}s forwards` : 'none',
              transform: 'scale(0)',
              position: 'relative',
              zIndex: 2
            }} 
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.15)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(99,102,241,0.6)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              {f.icon}
            </div>

            {/* Title */}
            <h4 style={{ 
              fontWeight: 700, 
              marginBottom: '12px', 
              fontSize: '20px',
              color: isDarkMode ? '#fff' : '#1a1a2e',
              transition: 'color 0.3s',
              position: 'relative',
              zIndex: 2
            }}>
              {f.title}
            </h4>

            {/* Description */}
            <p style={{ 
              fontSize: '14px', 
              color: isDarkMode ? '#a0a0b0' : '#666',
              lineHeight: '1.6',
              position: 'relative',
              zIndex: 2
            }}>
              {f.desc}
            </p>

            {/* Animated Bottom Line */}
            <div style={{
              width: '0',
              height: '2px',
              background: 'linear-gradient(90deg, #6366f1, #a855f7)',
              margin: '20px auto 0',
              transition: 'width 0.4s ease 0.1s',
              borderRadius: '2px'
            }} className="bottom-line" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes iconPop {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatBG {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }

        div:hover .top-border {
          opacity: 1;
        }

        div:hover .bottom-line {
          width: 50px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Features;