import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import MovingPlatforms from './components/MovingPlatforms';
import WorkflowExamples from './components/WorkflowExamples';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Vision />
      <Services />
      <HowItWorks />
      <MovingPlatforms />
      <WorkflowExamples />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;