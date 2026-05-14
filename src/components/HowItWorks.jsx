import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    title: 'Discovery & Consultation',
    description: 'We start by understanding your business needs and challenges through in-depth consultations.',
    icon: '🔍'
  },
  {
    title: 'Strategy & Planning',
    description: 'Our team designs a tailored AI and automation strategy to align with your business goals.',
    icon: '📊'
  },
  {
    title: 'Development & Integration',
    description: 'We develop and integrate AI-powered solutions into your existing systems for seamless operation.',
    icon: '🛠️'
  },
  {
    title: 'Testing & Optimization',
    description: 'Rigorous testing ensures the solutions work flawlessly, followed by optimization for peak performance.',
    icon: '🧪'
  },
  {
    title: 'Deployment & Training',
    description: 'We deploy the solutions and provide training to your team for effective utilization.',
    icon: '🚀'
  },
  {
    title: 'Ongoing Support',
    description: 'Our team offers continuous support and updates to ensure long-term success.',
    icon: '🔄'
  }
];

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="how-it-works" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-deep-navy mb-4">How Our AI and Automation Agency Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a structured process to deliver intelligent automation solutions that drive business growth.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-deep-navy mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;