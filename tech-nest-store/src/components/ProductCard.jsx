import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4 animate-fadeInUp">
      <div className="glass-card h-100 p-3">
        <div className="position-relative overflow-hidden rounded-3" style={{ height: '250px' }}>
          <img 
            src={product.image} 
            className="w-100 h-100" 
            alt={product.name}
            style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
          <div className="position-absolute top-0 end-0 m-3">
            <span className="badge rounded-pill px-3 py-2" style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              fontSize: '0.8rem'
            }}>
              🔥 Hot
            </span>
          </div>
        </div>
        <div className="mt-3">
          <h5 className="text-white fw-bold mb-2">{product.name}</h5>
          <p className="text-white-50 small mb-3">{product.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="text-white fw-bold mb-0">${product.price}</h4>
            <button 
              onClick={() => onAddToCart(product)}
              className="btn rounded-pill px-4 btn-glow"
              style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                border: 'none',
                color: 'white'
              }}
            >
              Add to Cart 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;