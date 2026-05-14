import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Vision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Vision & Mission</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Vision</h3>
            <p className="text-gray-700 text-lg">
              To be the leading AI automation agency in Brunei, transforming how businesses and governments operate by making cutting-edge automation accessible, efficient, and impactful.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Mission</h3>
            <p className="text-gray-700 text-lg">
              Our mission is to help businesses and government agencies in Brunei streamline their operations, improve engagement, and achieve their goals through tailored AI-driven solutions. We aim to deliver innovative, cost-effective, and reliable automation services that empower organizations to thrive in the digital era.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;