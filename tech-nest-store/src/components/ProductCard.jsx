import React from 'react';
import { Icons } from './Icons';

function ProductCard({ product, isDarkMode, addToCart, toggleWishlist, isWishlisted }) {
  return (
    <div style={{ 
      background: isDarkMode ? 'rgba(255,255,255,0.03)' : '#fff', 
      borderRadius: '28px', 
      padding: '24px', 
      transition: 'all 0.3s', 
      border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`, 
      position: 'relative' 
    }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 25px 40px rgba(0,0,0,0.1)' }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
      
      {product.isNew && <span style={{ position: 'absolute', top: '20px', left: '20px', background: '#00ff88', color: '#1a1a2e', padding: '4px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, zIndex: 2 }}>NEW</span>}
      
      <button onClick={() => toggleWishlist(product.id)} style={{ 
        position: 'absolute', 
        top: '20px', 
        right: '20px', 
        background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', 
        border: 'none', 
        borderRadius: '50%', 
        width: '38px', 
        height: '38px', 
        cursor: 'pointer', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        zIndex: 2, 
        color: isWishlisted ? '#ff3366' : (isDarkMode ? '#888' : '#aaa') 
      }}>
        <Icons.Heart />
      </button>
      
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '20px', marginBottom: '20px' }} />
      
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: isDarkMode ? '#fff' : '#1a1a2e', margin: 0 }}>{product.name}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {[...Array(5)].map((_, i) => i < Math.floor(product.rating) ? <Icons.Star key={i} /> : <Icons.StarOutline key={i} />)}
            <span style={{ fontSize: '12px', color: '#888', marginLeft: '4px' }}>({product.reviews})</span>
          </div>
        </div>
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '20px' }}>{product.category}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <span style={{ fontSize: '32px', fontWeight: 800, color: isDarkMode ? '#fff' : '#1a1a2e' }}>${product.price}</span>
          <span style={{ fontSize: '18px', color: '#888', textDecoration: 'line-through' }}>${product.oldPrice}</span>
          <span style={{ background: '#00ff8820', color: '#00cc6a', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>-{product.discount}%</span>
        </div>
        <button onClick={() => addToCart(product)} style={{ 
          width: '100%', 
          background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
          border: 'none', 
          borderRadius: '50px', 
          padding: '14px', 
          color: 'white', 
          fontWeight: 600, 
          cursor: 'pointer', 
          transition: 'opacity 0.2s' 
        }} onMouseEnter={e => e.currentTarget.style.opacity = '0.9'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
          Add to Cart →
        </button>
      </div>
    </div>
  );
}

export default ProductCard;