import React from 'react';

function Hero() {
  return (
    <section className="hero-section text-white text-center" style={{
      background: 'linear-gradient(135deg, rgba(102,126,234,0.9), rgba(118,75,162,0.9))',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h1 className="display-1 fw-bold mb-3 animate-fadeInUp" style={{
          background: 'linear-gradient(135deg, #fff, #e0e0e0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Welcome to TechNest
        </h1>
        <p className="lead mb-4 animate-fadeInUp" style={{ fontSize: '1.3rem', animationDelay: '0.2s' }}>
          Discover the latest tech gadgets at unbeatable prices
        </p>
        <button className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold btn-glow animate-fadeInUp" style={{
          animationDelay: '0.4s',
          background: 'white',
          color: '#667eea'
        }}>
          Shop Now →
        </button>
      </div>
      {/* Animated Background Bubbles */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}>
        <div className="position-absolute rounded-circle" style={{
          width: '300px',
          height: '300px',
          background: 'rgba(255,255,255,0.1)',
          top: '-100px',
          right: '-100px',
          borderRadius: '50%'
        }}></div>
        <div className="position-absolute rounded-circle" style={{
          width: '200px',
          height: '200px',
          background: 'rgba(255,255,255,0.05)',
          bottom: '-50px',
          left: '-50px',
          borderRadius: '50%'
        }}></div>
      </div>
    </section>
  );
}

export default Hero;