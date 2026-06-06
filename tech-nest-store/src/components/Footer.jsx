import React from 'react';

function Footer() {
  return (
    <footer className="mt-5 pt-5 pb-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold mb-3"><span className="gradient-text">Tech</span><span className="gradient-primary">Nest</span></h4>
            <p className="text-white-50 small">Your premier destination for cutting-edge technology and premium gadgets.</p>
          </div>
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Contact</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">FAQs</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Contact</h6>
            <ul className="list-unstyled small">
              <li className="mb-2 text-white-50">📧 hello@technest.com</li>
              <li className="mb-2 text-white-50">📞 +1 234 567 890</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50 text-decoration-none">🐦</a>
              <a href="#" className="text-white-50 text-decoration-none">📷</a>
              <a href="#" className="text-white-50 text-decoration-none">💼</a>
            </div>
          </div>
        </div>
        <hr className="my-3" style={{ borderColor: 'rgba(255,255,255,0.05)' }} />
        <div className="text-center text-white-50 small">
          © 2026 TechNest. Crafted with 💜 by Sara Manzoor
        </div>
      </div>
    </footer>
  );
}

export default Footer;