

import React, { useState } from 'react';
import { Icons } from './Icons';

function ProductCard({ product, isDarkMode, addToCart, toggleWishlist, isWishlisted }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      style={{ 
        background: isDarkMode ? 'rgba(255,255,255,0.03)' : '#fff', 
        borderRadius: '20px', 
        padding: '14px', 
        transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)', 
        border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`, 
        position: 'relative',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 20px 35px rgba(0,0,0,0.12)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Top Border on Hover */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899, #a855f7, #6366f1)',
        backgroundSize: '200% 100%',
        animation: isHovered ? 'gradientMove 1.5s ease infinite' : 'none',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s',
        borderRadius: '20px 20px 0 0'
      }} />
      
      {/* NEW Badge */}
      {product.isNew && (
        <span style={{ 
          position: 'absolute', 
          top: '10px', 
          left: '10px', 
          background: 'linear-gradient(135deg, #00ff88, #00cc6a)', 
          color: '#1a1a2e', 
          padding: '3px 10px', 
          borderRadius: '20px', 
          fontSize: '10px', 
          fontWeight: 700, 
          zIndex: 2,
          boxShadow: '0 2px 8px rgba(0,255,136,0.2)'
        }}>NEW</span>
      )}
      
      {/* Discount Badge */}
      {product.discount >= 30 && (
        <span style={{ 
          position: 'absolute', 
          top: '10px', 
          left: product.isNew ? '65px' : '10px', 
          background: 'linear-gradient(135deg, #ff3366, #ff6b6b)', 
          color: 'white', 
          padding: '3px 10px', 
          borderRadius: '20px', 
          fontSize: '10px', 
          fontWeight: 700, 
          zIndex: 2,
          boxShadow: '0 2px 8px rgba(255,51,102,0.2)'
        }}>-{product.discount}%</span>
      )}
      
      {/* Wishlist Heart Button */}
      <button 
        onClick={() => toggleWishlist(product.id)} 
        style={{ 
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          background: isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)', 
          backdropFilter: 'blur(4px)',
          border: 'none', 
          borderRadius: '50%', 
          width: '32px', 
          height: '32px', 
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          zIndex: 2, 
          color: isWishlisted ? '#ff3366' : (isDarkMode ? '#aaa' : '#999'),
          transition: 'all 0.2s',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
        onMouseEnter={e => e.currentTarget.style.background = isDarkMode ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.1)'}
        onMouseLeave={e => e.currentTarget.style.background = isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)'}
      >
        <Icons.Heart />
      </button>
      
      {/* Product Image */}
      <div style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        borderRadius: '14px', 
        marginBottom: '12px',
        height: '150px'
      }}>
        {!imageLoaded && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isDarkMode ? 'rgba(255,255,255,0.05)' : '#f0f0f0',
            borderRadius: '14px',
            animation: 'pulse 1.5s ease-in-out infinite'
          }} />
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          onLoad={() => setImageLoaded(true)}
          style={{ 
            width: '100%', 
            height: '150px', 
            objectFit: 'cover', 
            borderRadius: '14px', 
            transition: 'transform 0.4s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }} 
        />
      </div>
      
      {/* Product Info */}
      <div>
        {/* Rating Stars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
          <div style={{ display: 'flex', gap: '2px' }}>
            {[...Array(5)].map((_, i) => (
              i < Math.floor(product.rating) 
                ? <Icons.Star key={i} />
                : <Icons.StarOutline key={i} />
            ))}
          </div>
          <span style={{ fontSize: '10px', color: '#888' }}>({product.reviews})</span>
        </div>
        
        {/* Product Name */}
        <h3 style={{ 
          fontSize: '15px', 
          fontWeight: 700, 
          marginBottom: '4px', 
          color: isDarkMode ? '#fff' : '#1a1a2e',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {product.name}
        </h3>
        
        {/* Category */}
        <p style={{ 
          fontSize: '11px', 
          color: '#888', 
          marginBottom: '8px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {product.category}
        </p>
        
        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '12px' }}>
          <span style={{ 
            fontSize: '20px', 
            fontWeight: 800, 
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ${product.price}
          </span>
          <span style={{ 
            fontSize: '12px', 
            color: '#888', 
            textDecoration: 'line-through' 
          }}>
            ${product.oldPrice}
          </span>
        </div>
        
        {/* Add to Cart Button */}
        <button 
          onClick={() => addToCart(product)} 
          style={{ 
            width: '100%', 
            background: isHovered 
              ? 'linear-gradient(135deg, #a855f7, #ec4899)' 
              : 'linear-gradient(135deg, #6366f1, #a855f7)', 
            border: 'none', 
            borderRadius: '50px', 
            padding: '9px', 
            color: 'white', 
            fontWeight: 600, 
            fontSize: '12px',
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }} 
          onMouseEnter={e => e.currentTarget.style.opacity = '0.95'} 
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <Icons.Cart />
          Add to Cart
        </button>
      </div>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}

export default ProductCard;