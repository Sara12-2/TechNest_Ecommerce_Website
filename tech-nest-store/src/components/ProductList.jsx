import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products, categories } from '../data/products';

function ProductList({ isDarkMode, addToCart, wishlist, toggleWishlist }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div style={{ padding: '0 5% 80px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 700, color: isDarkMode ? '#fff' : '#1a1a2e' }}>Best Sellers</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{ 
              background: activeCategory === cat ? 'linear-gradient(135deg, #6366f1, #a855f7)' : 'transparent', 
              border: `1px solid ${activeCategory === cat ? 'transparent' : (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)')}`, 
              borderRadius: '50px', 
              padding: '8px 24px', 
              fontSize: '14px', 
              fontWeight: activeCategory === cat ? 600 : 500, 
              color: activeCategory === cat ? 'white' : (isDarkMode ? '#c0c0d0' : '#555'), 
              cursor: 'pointer', 
              transition: 'all 0.2s' 
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '30px' }}>
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            isDarkMode={isDarkMode} 
            addToCart={addToCart} 
            toggleWishlist={toggleWishlist} 
            isWishlisted={wishlist.includes(product.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;