import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline'; // Ensure you have heroicons installed
import { motion } from 'framer-motion';

const features = [
  {
    title: "Real-time visual aid",
    description: "TerraVortex provides real-time visual aid to manufacturing workers, preventing errors and increasing productivity.",
  },
  {
    title: "Precision and efficiency",
    description: "Our state-of-the-art technology ensures precision and efficiency in manufacturing operations, giving us a competitive edge.",
  },
  {
    title: "Cutting-edge technology",
    description: "TerraVortex is dedicated to revolutionizing the manufacturing industry with innovative technology, setting us apart.",
  },
  {
    title: "Shaping the Future",
    description: "Be part of shaping the future of manufacturing with our innovative products and solutions.",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-20 bg-white px-10">
    <div className="md:w-1/2 flex justify-center relative p-10">
        <img
          src="/workers.png"
          alt="About Us"
          className="w-2/3 h-96 shadow-lg rounded absolute top-0 left-0 z-10 transform translate-x-6 translate-y-6"
        />
        <img
          alt="About Us"
          className="w-2/3 h-96 shadow-lg rounded bg-blue-500"
        />
      </div>
      <div className="md:w-1/2 px-10">
        {features.map((feature, index) => (
          <div key={index} className="mb-8 flex">
            <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-lg text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;