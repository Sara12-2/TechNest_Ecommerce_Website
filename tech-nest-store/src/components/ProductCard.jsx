import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { toast } from 'react-toastify';

function ProductCard({ product, addToCart }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="col-lg-4 col-md-6 mb-4"
    >
      <div className="glass-card p-3 h-100 position-relative overflow-hidden">
        {/* Sale Badge */}
        <div className="position-absolute top-0 start-0 m-3 z-1">
          <span className="badge rounded-pill px-2 py-1" style={{ background: 'linear-gradient(135deg, #00FF88, #00D4FF)', fontSize: '11px' }}>
            🔥 Sale
          </span>
        </div>

        {/* Wishlist Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="btn position-absolute top-0 end-0 m-3 z-1 rounded-circle p-2"
          style={{ background: 'rgba(255,255,255,0.1)', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <FiHeart size={16} color={isWishlisted ? '#FF3366' : 'white'} fill={isWishlisted ? '#FF3366' : 'none'} />
        </motion.button>

        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="image-container overflow-hidden rounded-3 mb-3"
          style={{ height: '240px' }}
        >
          <img src={product.image} className="w-100 h-100" alt={product.name} style={{ objectFit: 'cover' }} />
        </motion.div>

        {/* Content */}
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="fw-bold mb-0">{product.name}</h5>
          <span className="text-white-50 small">{product.category}</span>
        </div>

        {/* Rating */}
        <div className="d-flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: i < Math.floor(product.rating) ? '#FFD700' : 'rgba(255,255,255,0.2)', fontSize: '12px' }}>★</span>
          ))}
          <span className="text-white-50 small ms-1">({product.rating})</span>
        </div>

        <p className="text-white-50 small mb-3">{product.description}</p>

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className="fw-bold fs-4 gradient-text">${product.price}</span>
            <span className="text-white-50 text-decoration-line-through small ms-2">${Math.round(product.price * 1.2)}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="btn rounded-pill px-3 py-2 d-flex align-items-center gap-2"
            style={{ background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', border: 'none', color: 'white' }}
          >
            <FiShoppingCart size={14} /> Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;