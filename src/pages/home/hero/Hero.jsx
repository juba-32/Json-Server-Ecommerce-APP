import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}> <span>Elevate</span> Your Style</motion.h1>
          <motion.p variants={itemVariants}>
            Discover the latest trends for the entire family. Quality fashion for Men, Women, and Kids.
          </motion.p>
          <motion.div className="cta-buttons" variants={itemVariants}>
            <NavLink to="/men" className="hero-btn secondary"> Men</NavLink>
            <NavLink to="/women" className="hero-btn secondary"> Women</NavLink>
            <NavLink to="/kids" className="hero-btn secondary"> Kids</NavLink>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }} 
        >
          <div className="hero-blob"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;