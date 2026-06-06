
import React from 'react';
import { motion } from 'framer-motion';
import { FiTwitter, FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';

function Footer() {
  const columns = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Press']
    },
    {
      title: 'Products',
      links: ['Smart Watches', 'Earbuds', 'Speakers', 'Accessories']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Returns', 'Warranty', 'Contact']
    }
  ];

  const socialIcons = [FiTwitter, FiInstagram, FiGithub, FiLinkedin];

  return (
    <footer className="mt-5 pt-5 pb-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-4">
            <h3 className="fw-bold mb-3">
              <span className="gradient-text">Tech</span>
              <span className="gradient-text">Nest</span>
            </h3>
            <p className="text-white-50 small mb-3" style={{ maxWidth: '300px' }}>
              Your premier destination for cutting-edge technology and premium gadgets.
            </p>
            <div className="d-flex gap-3">
              {socialIcons.map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5, color: '#00D4FF' }}
                  className="text-white-50"
                  style={{ transition: 'all 0.3s' }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {columns.map((col, idx) => (
            <div key={idx} className="col-md-2 mb-4 offset-md-1">
              <h6 className="fw-bold mb-3">{col.title}</h6>
              <ul className="list-unstyled small">
                {col.links.map((link, i) => (
                  <li key={i} className="mb-2">
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: '#00D4FF' }}
                      className="text-white-50 text-decoration-none"
                      style={{ transition: 'all 0.3s' }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.05)' }} />

        <div className="text-center text-white-50 small">
          <p className="mb-0">© 2026 TechNest. Crafted with 💜 by Sara Manzoor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;