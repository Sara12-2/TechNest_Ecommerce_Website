import React from 'react';
import { Icons } from './Icons';

function CartDrawer({ isOpen, onClose, cart, onRemove, total, shipping, finalTotal, isDarkMode }) {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, width: '450px', height: '100vh', background: isDarkMode ? '#0a0a0f' : '#fff', boxShadow: '-5px 0 30px rgba(0,0,0,0.2)', zIndex: 200, padding: '28px', overflowY: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
        <h3 style={{ fontSize: '26px', fontWeight: 700, color: isDarkMode ? '#fff' : '#1a1a2e' }}>Your Cart</h3>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}><Icons.Close /></button>
      </div>
      
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <p style={{ color: '#888', fontSize: '16px' }}>Your cart is empty</p>
        </div>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={{ display: 'flex', gap: '16px', marginBottom: '24px', paddingBottom: '24px', borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
              <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', borderRadius: '16px', objectFit: 'cover' }} />
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '6px', color: isDarkMode ? '#fff' : '#1a1a2e' }}>{item.name}</h4>
                <p style={{ color: '#6366f1', fontWeight: 600, fontSize: '18px', marginBottom: '10px' }}>${item.price}</p>
                <button onClick={() => onRemove(item.id)} style={{ background: 'none', border: 'none', color: '#ff3366', cursor: 'pointer', fontSize: '13px', padding: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Icons.Trash /> Remove
                </button>
              </div>
            </div>
          ))}
          
          <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '16px', color: isDarkMode ? '#c0c0d0' : '#666' }}>Subtotal</span>
              <span style={{ fontSize: '16px', fontWeight: 600, color: isDarkMode ? '#fff' : '#1a1a2e' }}>${total}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '16px', color: isDarkMode ? '#c0c0d0' : '#666' }}>Shipping</span>
              <span style={{ fontSize: '16px', color: isDarkMode ? '#fff' : '#1a1a2e' }}>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px', paddingTop: '16px', borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
              <span style={{ fontSize: '20px', fontWeight: 700, color: isDarkMode ? '#fff' : '#1a1a2e' }}>Total</span>
              <span style={{ fontSize: '28px', fontWeight: 800, color: '#6366f1' }}>${finalTotal}</span>
            </div>
            <button style={{
              width: '100%',
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              border: 'none',
              borderRadius: '50px',
              padding: '16px',
              color: 'white',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'opacity 0.2s'
            }} onMouseEnter={e => e.currentTarget.style.opacity = '0.9'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              Proceed to Checkout →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartDrawer;