import React, { useState } from 'react'; 
import { motion } from 'framer-motion';

const Hero = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Brunei's Businesses with Smart Automation
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We help businesses and government agencies in Brunei streamline their operations, improve engagement, and achieve their goals through tailored AI-driven solutions.
        </motion.p>

        {/* Get Started Button */}
        <motion.button
          className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={() => setIsModalOpen(true)} // Open modal on click
        >
          Get Started
        </motion.button>
      </div>

      {/* Modal for Airtable Form */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 text-lg font-bold hover:text-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            {/* Airtable Embed */}
            <iframe
              className="airtable-embed airtable-dynamic-height"
              src="https://airtable.com/embed/app5UUP3GqZl5tXSo/shrvOQ2AINlcMb3aY"
              frameBorder="0"
              width="100%"
              height="500"
              style={{
                background: 'transparent',
                border: '1px solid #ccc',
              }}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
