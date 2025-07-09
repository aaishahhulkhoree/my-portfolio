import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>Aaishah</Link>
      </div>

      {/* Menu desktop */}
      <ul className="nav-links-desktop">
        <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
        <li><Link to="/about" onClick={closeMenu}>À propos</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projets</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>

      {/* Burger icon */}
      <div className="burger-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
      </div>

      {/* Menu mobile animé */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="nav-links-mobile"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
            <li><Link to="/about" onClick={closeMenu}>À propos</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projets</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
