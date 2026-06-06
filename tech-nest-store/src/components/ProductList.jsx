import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import ProductCard from './ProductCard';
import productsData from '../data/products';

function ProductList({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Smart Watches', 'Earbuds', 'Speakers', 'Accessories'];

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="products" className="py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: 'rgba(0,212,255,0.15)', color: '#00D4FF' }}>
            📦 Our Collection
          </span>
          <h2 className="display-5 fw-bold mb-3">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-white-50 mx-auto mb-4" style={{ maxWidth: '500px' }}>
            Handpicked premium gadgets for tech enthusiasts
          </p>

          {/* Search Bar */}
          <div className="position-relative mx-auto mb-4" style={{ maxWidth: '400px' }}>
            <FiSearch className="position-absolute top-50 start-0 translate-middle-y ms-3" color="#94A3B8" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control rounded-pill py-2 ps-5"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
            />
          </div>

          {/* Category Filters */}
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map(cat => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`btn rounded-pill px-3 py-2 ${activeCategory === cat ? 'btn-primary' : ''}`}
                style={{
                  background: activeCategory === cat ? 'linear-gradient(135deg, #00D4FF, #7C3AED)' : 'rgba(255,255,255,0.05)',
                  border: 'none',
                  color: 'white',
                  fontSize: '13px'
                }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="row g-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-5">
            <p className="text-white-50">No products found. Try a different search.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductList;