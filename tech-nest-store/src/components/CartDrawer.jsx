import React, { useState } from 'react';
import { Icons } from './Icons';

function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemove, total, shipping, finalTotal, isDarkMode, onCheckout }) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && address) {
      onCheckout();
      setShowSuccess(true);
      setShowForm(false);
      setName('');
      setEmail('');
      setAddress('');
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <div className="cart-drawer" style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '420px',
      maxWidth: '100vw',
      height: '100vh',
      background: isDarkMode ? '#0a0a0f' : '#fff',
      boxShadow: '-10px 0 30px rgba(0,0,0,0.3)',
      zIndex: 1000,
      padding: '28px',
      overflowY: 'auto',
      animation: 'slideIn 0.3s ease'
    }}>
      {/* Success Toast */}
      {showSuccess && (
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
          color: '#1a1a2e',
          padding: '12px 16px',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: 500,
          textAlign: 'center',
          animation: 'slideDown 0.3s ease',
          zIndex: 10
        }}>
          ✓ Order placed successfully!
        </div>
      )}

      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '28px',
        paddingBottom: '16px',
        borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`
      }}>
        <div>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: 700, 
            color: isDarkMode ? '#fff' : '#1a1a2e',
            margin: 0
          }}>
            {showForm ? 'Checkout' : 'Shopping Cart'}
          </h3>
          {!showForm && cart.length > 0 && (
            <p style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>
              {cart.reduce((sum, item) => sum + item.quantity, 0)} items
            </p>
          )}
        </div>
        <button 
          onClick={() => {
            setShowForm(false);
            onClose();
          }} 
          style={{ 
            background: isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)', 
            border: 'none', 
            borderRadius: '50%', 
            width: '36px', 
            height: '36px', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '18px',
            color: isDarkMode ? '#fff' : '#666',
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.background = isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'}
          onMouseLeave={e => e.currentTarget.style.background = isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'}
        >
          ✕
        </button>
      </div>

      {!showForm ? (
        <>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 20px',
                background: isDarkMode ? 'rgba(255,255,255,0.05)' : '#f5f5f7',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? '#888' : '#999'} strokeWidth="1.5">
                  <circle cx="9" cy="20" r="1.5"/>
                  <circle cx="18" cy="20" r="1.5"/>
                  <path d="M2 2h2l2.5 10H18l2.5-8H6"/>
                </svg>
              </div>
              <p style={{ color: isDarkMode ? '#888' : '#999', fontSize: '16px', marginBottom: '16px' }}>Your cart is empty</p>
              <button 
                onClick={onClose}
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '12px 28px',
                  color: 'white',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div style={{ flex: 1 }}>
                {cart.map((item) => (
                  <div key={item.id} style={{ 
                    display: 'flex', 
                    gap: '14px', 
                    marginBottom: '20px', 
                    paddingBottom: '16px', 
                    borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`
                  }}>
                    <img src={item.image} alt={item.name} style={{ 
                      width: '70px', 
                      height: '70px', 
                      borderRadius: '12px', 
                      objectFit: 'cover',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 600, color: isDarkMode ? '#fff' : '#1a1a2e', marginBottom: '4px' }}>{item.name}</h4>
                        <p style={{ color: '#6366f1', fontWeight: 700, fontSize: '16px' }}>${item.price}</p>
                      </div>
                      <p style={{ fontSize: '11px', color: '#888', marginBottom: '10px', textTransform: 'uppercase' }}>{item.category}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '8px',
                              background: isDarkMode ? 'rgba(255,255,255,0.08)' : '#f0f0f0',
                              border: 'none',
                              cursor: 'pointer',
                              fontSize: '16px',
                              fontWeight: 600,
                              color: isDarkMode ? '#fff' : '#333'
                            }}
                          >-</button>
                          <span style={{ fontSize: '14px', fontWeight: 600, color: isDarkMode ? '#fff' : '#333' }}>{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '8px',
                              background: isDarkMode ? 'rgba(255,255,255,0.08)' : '#f0f0f0',
                              border: 'none',
                              cursor: 'pointer',
                              fontSize: '16px',
                              fontWeight: 600,
                              color: isDarkMode ? '#fff' : '#333'
                            }}
                          >+</button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.id)} 
                          style={{ 
                            background: 'none', 
                            border: 'none', 
                            color: '#ff3366', 
                            cursor: 'pointer', 
                            fontSize: '12px'
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Order Summary */}
              <div style={{ 
                marginTop: '20px', 
                paddingTop: '20px', 
                borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`
              }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: isDarkMode ? '#aaa' : '#666' }}>Subtotal</span>
                    <span style={{ fontWeight: 600, color: isDarkMode ? '#fff' : '#333' }}>${total}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: isDarkMode ? '#aaa' : '#666' }}>Shipping</span>
                    <span style={{ fontWeight: 600, color: isDarkMode ? '#fff' : '#333' }}>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginTop: '12px', 
                    paddingTop: '12px', 
                    borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`
                  }}>
                    <span style={{ fontSize: '18px', fontWeight: 700, color: isDarkMode ? '#fff' : '#1a1a2e' }}>Total</span>
                    <span style={{ fontSize: '24px', fontWeight: 800, color: '#6366f1' }}>${finalTotal}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setShowForm(true)}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                    border: 'none',
                    borderRadius: '40px',
                    padding: '14px',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 15px rgba(99,102,241,0.3)'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(99,102,241,0.4)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(99,102,241,0.3)';
                  }}
                >
                  Proceed to Checkout →
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        /* Checkout Form */
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <input 
              type="text" 
              placeholder="Full Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              style={{ 
                width: '100%', 
                padding: '14px 16px', 
                borderRadius: '12px', 
                border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : '#e0e0e0'}`, 
                background: isDarkMode ? 'rgba(255,255,255,0.05)' : '#fff', 
                color: isDarkMode ? '#fff' : '#333',
                fontSize: '14px',
                outline: 'none',
                transition: 'border 0.2s'
              }}
              onFocus={e => e.target.style.borderColor = '#6366f1'}
              onBlur={e => e.target.style.borderColor = isDarkMode ? 'rgba(255,255,255,0.2)' : '#e0e0e0'}
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={{ 
                width: '100%', 
                padding: '14px 16px', 
                borderRadius: '12px', 
                border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : '#e0e0e0'}`, 
                background: isDarkMode ? 'rgba(255,255,255,0.05)' : '#fff', 
                color: isDarkMode ? '#fff' : '#333',
                fontSize: '14px',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = '#6366f1'}
              onBlur={e => e.target.style.borderColor = isDarkMode ? 'rgba(255,255,255,0.2)' : '#e0e0e0'}
            />
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <input 
              type="text" 
              placeholder="Delivery Address" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              required 
              style={{ 
                width: '100%', 
                padding: '14px 16px', 
                borderRadius: '12px', 
                border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : '#e0e0e0'}`, 
                background: isDarkMode ? 'rgba(255,255,255,0.05)' : '#fff', 
                color: isDarkMode ? '#fff' : '#333',
                fontSize: '14px',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = '#6366f1'}
              onBlur={e => e.target.style.borderColor = isDarkMode ? 'rgba(255,255,255,0.2)' : '#e0e0e0'}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              type="button" 
              onClick={() => setShowForm(false)} 
              style={{ 
                flex: 1, 
                padding: '14px', 
                borderRadius: '40px', 
                border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.3)' : '#ddd'}`, 
                background: 'transparent', 
                color: isDarkMode ? '#fff' : '#333', 
                cursor: 'pointer',
                fontWeight: 500,
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#6366f1'}
              onMouseLeave={e => e.currentTarget.style.borderColor = isDarkMode ? 'rgba(255,255,255,0.3)' : '#ddd'}
            >
              Back
            </button>
            <button 
              type="submit" 
              style={{ 
                flex: 1, 
                padding: '14px', 
                borderRadius: '40px', 
                border: 'none', 
                background: 'linear-gradient(135deg, #00ff88, #00D4FF)', 
                color: '#1a1a2e', 
                fontWeight: 700, 
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 15px rgba(0,255,136,0.3)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,255,136,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,255,136,0.3)';
              }}
            >
              Place Order →
            </button>
          </div>
        </form>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .cart-drawer { padding: 20px !important; }
        }
      `}</style>
    </div>
  );
}

export default CartDrawer;