import React from 'react';
import { motion } from 'framer-motion';
import { FiBattery, FiHeart, FiMapPin, FiDroplet } from 'react-icons/fi';

function Features() {
  const features = [
    { icon: <FiBattery size={40} />, title: '24-Hour Battery', desc: 'All-day power on a single charge' },
    { icon: <FiHeart size={40} />, title: 'Heart Rate Monitor', desc: 'Track your health in real-time' },
    { icon: <FiMapPin size={40} />, title: 'GPS Tracking', desc: 'Never lose your way' },
    { icon: <FiDroplet size={40} />, title: 'Water Resistant', desc: 'IP68 certified for swimming' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-5" style={{ marginTop: '60px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: 'rgba(0,212,255,0.15)', color: '#00D4FF' }}>
            ⚡ Premium Features
          </span>
          <h2 className="display-5 fw-bold mb-3">
            Why Choose <span className="gradient-text">TechNest</span>
          </h2>
          <p className="text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
            Experience the perfect blend of innovation, style, and performance
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="col-md-6 col-lg-3">
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-4 text-center h-100"
              >
                <div className="mb-3" style={{ color: '#00D4FF' }}>
                  {feature.icon}
                </div>
                <h5 className="fw-bold mb-2">{feature.title}</h5>
                <p className="text-white-50 small mb-0">{feature.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;