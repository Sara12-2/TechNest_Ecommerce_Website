import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';

function ProductList({ addToCart }) {
  return (
    <section className="container my-5 py-4">
      <div className="text-center mb-5">
        <h2 className="display-4 fw-bold text-white mb-3">Featured Products</h2>
        <p className="text-white-50">Handpicked just for you</p>
        <div style={{ width: '80px', height: '4px', background: 'linear-gradient(135deg, #667eea, #764ba2)', margin: '0 auto', borderRadius: '2px' }}></div>
      </div>
      <div className="row g-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;