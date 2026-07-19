import React, { useState, useEffect, useRef } from 'react';

function Newsletter({ isDarkMode }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll animation
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email');
      return;
    }
    setError('');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <div ref={sectionRef} style={{ 
      padding: '80px 5%', 
      background: isDarkMode ? '#0a0a0f' : '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-20%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08), transparent)',
        borderRadius: '50%',
        animation: 'floatBG 15s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.08), transparent)',
        borderRadius: '50%',
        animation: 'floatBG 12s ease-in-out infinite reverse'
      }} />

      <div style={{ 
        maxWidth: '700px', 
        margin: '0 auto', 
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.6s ease'
      }}>
        {/* Icon */}
        <div style={{
          width: '70px',
          height: '70px',
          background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          animation: isVisible ? 'iconPop 0.5s ease' : 'none'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>

        <h2 style={{ 
          fontSize: '36px', 
          fontWeight: 700, 
          marginBottom: '16px', 
          background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Stay Connected
        </h2>
        
        <p style={{ 
          color: isDarkMode ? '#a0a0b0' : '#666', 
          marginBottom: '32px', 
          fontSize: '16px',
          lineHeight: '1.5'
        }}>
          Subscribe to get exclusive offers and new product alerts
        </p>

        {/* Success Message - Fixed Styling */}
        {isSubmitted && (
          <div style={{
            background: isDarkMode ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.1)',
            border: `1px solid ${isDarkMode ? 'rgba(99,102,241,0.3)' : '#6366f1'}`,
            borderRadius: '50px',
            padding: '12px 24px',
            marginBottom: '24px',
            color: '#6366f1',
            fontSize: '14px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            animation: 'slideDown 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Thanks for subscribing! Check your inbox.
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div style={{
            background: isDarkMode ? 'rgba(255,51,102,0.15)' : 'rgba(255,51,102,0.1)',
            border: `1px solid ${isDarkMode ? 'rgba(255,51,102,0.3)' : '#ff3366'}`,
            borderRadius: '50px',
            padding: '12px 24px',
            marginBottom: '24px',
            color: '#ff3366',
            fontSize: '14px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            animation: 'shake 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff3366" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <circle cx="12" cy="16" r="0.5" fill="#ff3366"/>
            </svg>
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ 
          display: 'flex', 
          justifyContent: 'center'
        }}>
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            width: '100%'
          }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ 
                padding: '14px 24px', 
                borderRadius: '60px', 
                border: `2px solid ${error ? '#ff3366' : (isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)')}`, 
                background: isDarkMode ? 'rgba(255,255,255,0.05)' : '#f8f9fc',
                color: isDarkMode ? '#fff' : '#1a1a2e',
                width: '100%',
                maxWidth: '320px',
                outline: 'none',
                fontSize: '15px',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#6366f1'}
              onBlur={(e) => e.target.style.borderColor = isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}
            />
            
            <button 
              type="submit"
              style={{ 
                background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
                border: 'none', 
                borderRadius: '60px', 
                padding: '14px 36px', 
                color: 'white', 
                fontWeight: 600, 
                cursor: 'pointer',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }} 
              onMouseEnter={e => { 
                e.currentTarget.style.transform = 'scale(1.02)'; 
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(99,102,241,0.3)';
              }} 
              onMouseLeave={e => { 
                e.currentTarget.style.transform = 'scale(1)'; 
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Subscribe →
            </button>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes iconPop {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes floatBG {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
}

export default Newsletter;