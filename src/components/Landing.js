import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative bg-cover bg-center min-h-[95vh] flex flex-col"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/home.jpg'})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <motion.div
        className="flex-grow flex flex-col items-center justify-center text-center text-white p-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-bold mb-4 mt-20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Revolutionize with TerraVortex
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Enhancing manufacturing precision with real-time visual aid technology.
        </motion.p>
        <motion.div
          className="flex space-x-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
            <motion.button
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
            onClick={() => navigate('/offer')}
          >
            Products
          </motion.button>
          <motion.button
            className="border border-white text-white font-bold py-2 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;