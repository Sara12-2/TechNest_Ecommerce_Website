import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';

function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemove, total }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.7)',
              zIndex: 2000,
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              maxWidth: '450px',
              height: '100vh',
              background: 'rgba(5,8,22,0.95)',
              backdropFilter: 'blur(20px)',
              zIndex: 2001,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-5px 0 30px rgba(0,0,0,0.3)'
            }}
          >
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center p-4 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <h5 className="fw-bold mb-0">Your Cart ({cart.reduce((s, i) => s + i.quantity, 0)})</h5>
              <motion.button whileTap={{ scale: 0.9 }} onClick={onClose} className="btn p-0" style={{ background: 'none' }}>
                <FiX size={24} color="white" />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow-1 overflow-auto p-4">
              {cart.length === 0 ? (
                <div className="text-center py-5">
                  <p className="text-white-50">Your cart is empty</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="d-flex gap-3 mb-4 pb-3 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '12px' }} />
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1">{item.name}</h6>
                      <p className="gradient-text fw-bold mb-2">${item.price}</p>
                      <div className="d-flex align-items-center gap-2">
                        <motion.button whileTap={{ scale: 0.9 }} onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="btn p-0" style={{ background: 'rgba(255,255,255,0.05)', width: '28px', height: '28px', borderRadius: '8px' }}>
                          <FiMinus size={12} />
                        </motion.button>
                        <span className="small">{item.quantity}</span>
                        <motion.button whileTap={{ scale: 0.9 }} onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="btn p-0" style={{ background: 'rgba(255,255,255,0.05)', width: '28px', height: '28px', borderRadius: '8px' }}>
                          <FiPlus size={12} />
                        </motion.button>
                        <motion.button whileTap={{ scale: 0.9 }} onClick={() => onRemove(item.id)} className="btn p-0 ms-auto" style={{ color: '#FF3366' }}>
                          <FiTrash2 size={16} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <span className="gradient-text fw-bold">${total.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="d-flex justify-content-between mb-3 pt-2 border-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <span className="fw-bold">Total</span>
                  <span className="gradient-text fw-bold fs-5">${(total + 5).toFixed(2)}</span>
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn w-100 rounded-pill py-3 fw-bold" style={{ background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', border: 'none', color: 'white' }}>
                  Checkout →
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;