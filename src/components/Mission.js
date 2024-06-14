import React from 'react';
import { motion } from 'framer-motion';
const Mission = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-20 bg-white px-10">
      <div className="md:w-1/2 px-10">
        <h2 className="text-4xl font-bold text-blue-500 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
        At TerraVortex, our mission is to transform the manufacturing industry with our cutting-edge technology. We are dedicated to providing real-time visual aid to manufacturing workers, helping them prevent errors and increase productivity. By offering state-of-the-art solutions, we enable manufacturers to achieve precision and efficiency in their operations. Our goal is to revolutionize the way manufacturing companies work, ensuring that they stay ahead of the competition and continue to thrive in a rapidly changing market. Join us in shaping the future of manufacturing with TerraVortex and experience the benefits of our innovative product firsthand. Together, we can drive the industry forward and make a lasting impact on the world of manufacturing.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center relative p-10">
      <motion.img
          src="/mission.png"
          alt="About Us"
          className="w-2/3 h-96 shadow-lg rounded absolute top-0 left-0 z-10 transform translate-x-6 translate-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        />
        <motion.img
          alt="About Us"
          className="w-2/3 h-96 shadow-lg rounded bg-blue-600"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, rotate: -2 }}
        />
      </div>
    </div>
  );
};

export default Mission;