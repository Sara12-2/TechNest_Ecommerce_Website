import React from 'react';

function Navbar({ cartCount = 0 }) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ 
      background: 'rgba(15, 25, 35, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#" style={{ fontSize: '1.8rem' }}>
          TechNest 🚀
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white mx-2" href="#" style={{ fontWeight: 500 }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white mx-2" href="#" style={{ fontWeight: 500 }}>Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link position-relative text-white mx-2" href="#" style={{ fontWeight: 500 }}>
                Cart 🛒
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  fontSize: '0.7rem',
                  padding: '5px 8px'
                }}>
                  {cartCount}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;