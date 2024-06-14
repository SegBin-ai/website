import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative bg-cover bg-center h-64 flex items-center justify-center text-center text-white w-full"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/manufacturing.png'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">Transform Manufacturing Today!</h2>
        <motion.button 
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 mt-3"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              onClick={() => {navigate('/contact')}}
            >
              Contact
            </motion.button>
      </div>
    </div>
  );
};

export default CallToAction;
