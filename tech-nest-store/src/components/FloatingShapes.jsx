import React from 'react';
import { motion } from 'framer-motion';

function FloatingShapes() {
  const shapes = [
    { size: 300, top: '10%', left: '-5%', duration: 20, delay: 0 },
    { size: 200, bottom: '5%', right: '-5%', duration: 25, delay: 2 },
    { size: 150, top: '50%', left: '80%', duration: 18, delay: 4 },
    { size: 100, bottom: '30%', left: '10%', duration: 22, delay: 1 },
    { size: 250, top: '70%', right: '20%', duration: 30, delay: 3 },
  ];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay
          }}
          style={{
            position: 'absolute',
            top: shape.top,
            left: shape.left,
            bottom: shape.bottom,
            right: shape.right,
            width: shape.size,
            height: shape.size,
            background: `radial-gradient(circle, rgba(0,212,255,0.1) 0%, rgba(124,58,237,0) 70%)`,
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
      ))}
    </div>
  );
}

export default FloatingShapes;