import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Lead Capture & CRM Integration',
    description: 'Conversational chatbots integrated with CRMs using Voiceflow and Airtable. Automated lead scoring and routing for sales teams.',
    icon: '🎯'
  },
  {
    title: 'Customer Support Management',
    description: 'AI-powered knowledge base chatbots for SMEs and government offices using Bland.ai and Voiceflow for ticket routing and FAQ resolution.',
    icon: '🤝'
  },
  {
    title: 'Appointment Setting',
    description: 'Automated scheduling solutions using Cal.com or Calendly for healthcare, tourism, and public services.',
    icon: '📅'
  },
  {
    title: 'Email Outreach Automation',
    description: 'Personalized email campaigns using web scraping, Google Sheets, and OpenAI for effective lead nurturing.',
    icon: '📧'
  },
  {
    title: 'Social Media Outreach Automation',
    description: 'Automated DMs for Instagram and X (Twitter) to boost lead generation and engagement for local brands.',
    icon: '💬'
  },
  {
    title: 'AI Web Development',
    description: 'Get fully coded website (Fullstack).',
    icon: '🌐💻'
  },
  {
    title: 'AI Receptionist (Voice Agent)',
    description: 'Answers calls, books appointments.',
    icon: '📞'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide cutting-edge AI solutions to help your business thrive in the digital age.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;