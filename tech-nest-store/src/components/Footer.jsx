import React from 'react';

function Footer() {
  return (
    <footer className="text-center py-4 mt-5" style={{
      background: 'rgba(15, 25, 35, 0.95)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div className="container">
        <p className="text-white-50 mb-0">
          © 2026 TechNest. Built with 💜 by Sara Manzoor
        </p>
      </div>
    </footer>
  );
}

export default Footer;