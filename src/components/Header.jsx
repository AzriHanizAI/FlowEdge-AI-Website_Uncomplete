import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Text */}
          <div className="flex items-center space-x-4">
            <img
  src="/images/cropped_logo.png"
  alt="FlowEdge Logo"
  className="h-16 w-auto object-contain"
/>

            <span className="text-4xl font-bold">
              <span style={{ color: '#001F54' }}>Flow</span>
              <span style={{ color: '#FF6600' }}>Edge</span>{' '}
              <span style={{ color: '#001F54' }}>A</span>
              <span style={{ color: '#FF6600' }}>I</span>
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="services"
              smooth={true}
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="team"
              smooth={true}
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Our Team
            </Link>
            <Link
              to="contact"
              smooth={true}
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
