import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const team = [
    {
      name: 'Mohammad Azri Haniz',
      role: 'CEO & Founder',
      description: 'Visionary leader with expertise in AI strategy and business transformation.',
      image: '/images/ceo.jpg'
    },
    {
      name: 'Jiku',
      role: 'CFO & Co-Founder',
      description: 'Financial expert ensuring sustainable growth and operational efficiency.',
      image: '/images/jiku.jpg'
    },
    {
      name: 'Mr. Hempas',
      role: 'CTO & Co-Founder',
      description: 'Technology innovator driving cutting-edge AI automation solutions and digital transformation for growth and efficiency.',
      image: '/images/mr_hempas.jpg'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the minds behind BruNex AI - combining expertise in AI, Finance, and technology.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {team.map((member, index) => (
    <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center"
  >
    <div className="w-32 h-32 mb-6">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full rounded-full object-cover"
        style={{ objectPosition: 'center top' }} // Adjust the image's visible part
      />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
    <p className="text-blue-600 mb-4">{member.role}</p>
    <p className="text-gray-600">{member.description}</p>
  </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Team;