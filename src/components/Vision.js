import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0 md:pr-10 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
        <div>
        <img
          src="/vision.png"
          alt="About Us"
          className="w-2/3 h-96 shadow-lg rounded absolute top-0 left-0 z-10 transform translate-x-6 translate-y-6"
        />
        <div
          className="w-2/3 h-96 shadow-lg rounded bg-blue-500"
        />
      </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-blue-500 mb-6">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our vision at TerraVortex is to transform the manufacturing industry through cutting-edge technology and innovation. We aim to revolutionize the way manufacturing processes are carried out by providing real-time visual aid to workers, ultimately reducing errors and increasing productivity.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            With our state-of-the-art technology, we strive to enable manufacturers to achieve precision and efficiency in their operations, leading to improved overall performance and profitability. By leveraging the power of visual communication, we are committed to shaping the future of manufacturing and setting new industry standards.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Join us on this exciting journey as we work towards creating a more advanced and efficient manufacturing environment with TerraVortex.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;