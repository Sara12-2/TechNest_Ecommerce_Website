import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

function Hero() {
  const stats = [
    { value: '50K+', label: 'Customers' },
    { value: '4.9', label: 'Rating' },
    { value: '99%', label: 'Satisfaction' }
  ];

  return (
    <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden" style={{ paddingTop: '80px' }}>
      {/* Animated Gradient Background */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: '20%',
            left: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, rgba(124,58,237,0) 70%)',
            filter: 'blur(60px)',
            borderRadius: '50%'
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(0,255,136,0.2) 0%, rgba(0,212,255,0) 70%)',
            filter: 'blur(60px)',
            borderRadius: '50%'
          }}
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge rounded-pill px-3 py-2 mb-4" style={{ background: 'rgba(0,212,255,0.15)', color: '#00D4FF' }}>
                🔥 Next Generation Tech
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-2 fw-bold mb-4"
              style={{ lineHeight: 1.2 }}
            >
              The Future of{' '}
              <span className="gradient-text">Smart Technology</span>
              <br />
              Starts Here
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white-50 mb-4 fs-5"
              style={{ maxWidth: '500px' }}
            >
              Experience cutting-edge innovation with our premium collection of smartwatches, earbuds, and tech accessories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="d-flex gap-3 mb-5"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn rounded-pill px-4 py-3 fw-bold"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', border: 'none', color: 'white' }}
              >
                Shop Now <FiArrowRight className="ms-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn rounded-pill px-4 py-3 fw-bold"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
              >
                <FiPlay className="me-2" /> Watch Demo
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="d-flex gap-5"
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="fw-bold mb-0 gradient-text">{stat.value}</h3>
                  <p className="text-white-50 small mb-0">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="position-relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?w=500"
                  className="img-fluid rounded-4"
                  alt="Smart Watch"
                  style={{
                    borderRadius: '40px',
                    boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                />
              </motion.div>

              {/* Floating Glass Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-card position-absolute p-3"
                style={{ bottom: '20px', left: '-20px', width: '180px' }}
              >
                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-success" style={{ width: '10px', height: '10px' }}></div>
                  <small className="text-white">In Stock</small>
                </div>
                <div className="d-flex align-items-center gap-2 mt-2">
                  <span className="gradient-text fw-bold">$299</span>
                  <span className="text-white-50 text-decoration-line-through small">$399</span>
                </div>
              </motion.div>

              {/* Rating Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="glass-card position-absolute p-3"
                style={{ top: '20px', right: '-20px', width: '120px' }}
              >
                <div className="d-flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#FFD700' }}>★</span>
                  ))}
                </div>
                <small className="text-white-50">4.9 (2.3k reviews)</small>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;