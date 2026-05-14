import React from 'react';

const platforms = [
  { name: 'Airtable', logo: '/images/airtable logo.png' },
  { name: 'Calendly', logo: '/images/calendly logo.png' },
  { name: 'Voiceflow', logo: '/images/Voiceflow.png' },
  { name: 'OpenAI', logo: '/images/openai logo.png' },
  { name: 'BlandAI', logo: '/images/bland ai logo.png' },
  { name: 'DrippiAI', logo: '/images/drippi ai logo.png' },
  { name: 'AutoIGDM', logo: '/images/autoigdm logo.png' },
  // Add more platforms as needed
];

const MovingPlatforms = () => {
  return (
    <section className="py-12 bg-light-gray overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-deep-navy text-center mb-8">
          Trusted by businesses big and small, everywhere
        </h2>
        <div className="relative w-full h-24 overflow-hidden">
          {/* First row of logos */}
          <div className="absolute top-0 left-0 flex space-x-8 animate-marquee whitespace-nowrap">
            {platforms.map((platform, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-12 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          {/* Second row of logos (duplicate for seamless looping) */}
          <div className="absolute top-0 left-full flex space-x-8 animate-marquee whitespace-nowrap">
            {platforms.map((platform, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-12 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingPlatforms;