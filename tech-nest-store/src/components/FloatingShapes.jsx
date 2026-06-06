import React from 'react';

function FloatingShapes() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 0
    }}>
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '5%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.15), transparent)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite reverse'
      }} />
      
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '15%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(236,72,153,0.1), transparent)',
        borderRadius: '50%',
        animation: 'pulse 4s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '30%',
        left: '20%',
        width: '120px',
        height: '120px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08), transparent)',
        borderRadius: '50%',
        animation: 'float 10s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '15%',
        width: '180px',
        height: '180px',
        background: 'radial-gradient(circle, rgba(0,255,136,0.08), transparent)',
        borderRadius: '50%',
        animation: 'float 7s ease-in-out infinite reverse'
      }} />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(15px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}

export default FloatingShapes;