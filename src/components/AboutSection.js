import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  return (
    <div className="py-20 bg-white px-10">
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-4">About us</h2>
      <p className="text-lg text-center text-gray-700 mb-10">
        VisualWorks is a technology company transforming manufacturing with real-time visual aid to increase productivity and precision. Join us in shaping the future of manufacturing.
      </p>
      <div className="relative flex flex-col items-center md:flex-row md:justify-center md:space-x-8">
        <motion.img
          src="/home.jpg"
          alt="About Us 1"
          className="w-60 md:w-72 h-80 md:h-96 shadow-lg rounded-lg transform -translate-x-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="/home.jpg"
          alt="About Us 2"
          className="w-60 md:w-72 h-80 md:h-96 shadow-lg rounded-lg z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="/home.jpg"
          alt="About Us 3"
          className="w-60 md:w-72 h-80 md:h-96 shadow-lg rounded-lg transform translate-x-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default AboutUsSection;