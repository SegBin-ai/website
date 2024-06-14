import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-20 bg-white px-10">
      <div className="md:w-1/2 px-10 mb-10 md:mb-0">
        <motion.h2
          className="text-4xl font-bold text-blue-500 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to TerraVortex! We are a team of creative individuals dedicated
          to revolutionizing the manufacturing industry. Our innovative product
          offers real-time visual aid to workers, helping to minimize errors and
          improve efficiency on the factory floor. With years of experience in both
          technology and manufacturing, we understand the challenges faced by
          workers and are committed to providing solutions that make their jobs
          easier. Our goal is to empower manufacturers with the tools they need to
          succeed in today's fast-paced and competitive market. Join us on this
          exciting journey as we continue to push the boundaries of what is possible
          in the world of manufacturing technology.
        </motion.p>
      </div>
      <div className="md:w-1/2 flex justify-center relative p-10">
        <motion.img
          src="/about.png"
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

export default About;