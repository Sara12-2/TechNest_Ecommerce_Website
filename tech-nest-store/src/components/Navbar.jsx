import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

function Navbar({ cartCount, onCartClick, darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Features', 'Products', 'Newsletter', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-black/90 backdrop-blur-xl' : 'bg-transparent'}`}
        style={{ padding: '16px 0', transition: 'all 0.3s', zIndex: 1000 }}
      >
        <div className="container">
          <a className="navbar-brand" href="#" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
            <span className="gradient-text">Tech</span>
            <span className="gradient-text">Nest</span>
            <span style={{ fontSize: '1.2rem' }}> 🚀</span>
          </a>

          {/* Desktop Navigation */}
          <div className="d-none d-lg-flex gap-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white text-decoration-none"
                style={{ fontWeight: 500, transition: 'color 0.3s' }}
                whileHover={{ color: '#00D4FF' }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          <div className="d-flex align-items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="btn rounded-circle"
              style={{ background: 'rgba(255,255,255,0.05)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {darkMode ? <FiSun color="#00D4FF" /> : <FiMoon />}
            </motion.button>

            {/* Cart Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onCartClick}
              className="btn position-relative"
              style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '8px 16px' }}
            >
              <FiShoppingCart size={20} />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                  style={{ background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', fontSize: '10px', padding: '3px 7px' }}
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(true)}
              className="btn d-lg-none"
              style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '8px 12px' }}
            >
              <FiMenu size={20} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 20 }}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '300px',
          height: '100vh',
          background: 'rgba(5,8,22,0.95)',
          backdropFilter: 'blur(20px)',
          zIndex: 2000,
          padding: '80px 24px 24px',
          boxShadow: '-5px 0 30px rgba(0,0,0,0.3)'
        }}
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(false)}
          className="btn position-absolute"
          style={{ top: 20, right: 20, background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '8px 12px' }}
        >
          <FiX size={20} />
        </motion.button>

        <div className="d-flex flex-column gap-3">
          {navLinks.map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-decoration-none py-2"
              style={{ fontSize: '1.2rem', fontWeight: 500 }}
              whileHover={{ color: '#00D4FF', x: 10 }}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;