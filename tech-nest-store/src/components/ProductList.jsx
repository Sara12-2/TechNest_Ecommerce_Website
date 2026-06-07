import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products, categories } from '../data/products';
import { Icons } from './Icons';

function ProductList({ isDarkMode, addToCart, wishlist, toggleWishlist }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter by category AND search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="products" style={{ padding: '0 5% 80px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 700, color: isDarkMode ? '#fff' : '#1a1a2e' }}>Best Sellers</h2>
        
        {/* Search Bar */}
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '12px 20px',
              paddingLeft: '40px',
              borderRadius: '50px',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
              background: isDarkMode ? 'rgba(255,255,255,0.05)' : '#fff',
              color: isDarkMode ? '#fff' : '#1a1a2e',
              width: '250px',
              outline: 'none',
              fontSize: '14px'
            }}
          />
          <span style={{
            position: 'absolute',
            left: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#888'
          }}>
            🔍
          </span>
        </div>
      </div>
      
      {/* Category Filters */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
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
      
      {/* No Results Message */}
      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <p style={{ color: isDarkMode ? '#888' : '#999', fontSize: '18px' }}>
            🔍 No products found matching "{searchTerm}"
          </p>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default ProductList;