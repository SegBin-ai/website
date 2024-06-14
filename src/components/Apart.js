import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Advanced Technology",
    description: "Maximizing efficiency and precision in manufacturing operations with real-time visual aid technology.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.11 0-2 .89-2 2 0 1.1.9 2 2 2s2-.89 2-2-.9-2-2-2zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    )
  },
  {
    title: "Error Prevention",
    description: "TerraVortex helps prevent costly errors by providing visual guidance to manufacturing workers, reducing rework and waste.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.11 0-2 .89-2 2 0 1.1.9 2 2 2s2-.89 2-2-.9-2-2-2zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    )
  },
  {
    title: "Industry Revolution",
    description: "Shape the future of manufacturing with cutting-edge technology that revolutionizes traditional processes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.11 0-2 .89-2 2 0 1.1.9 2 2 2s2-.89 2-2-.9-2-2-2zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    )
  }
];

const WhatSetsUsApartSection = () => {
  return (
    <div className="py-20 bg-white px-10">
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-10">What sets us apart?</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-80 h-80"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatSetsUsApartSection;