import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Aaditya Voruganti",
    position: "Co-Founder",
    image: "/aaditya.png"
  },
  {
    name: "Pranav Penmatcha",
    position: "Co-Founder",
    image: "/pranav.jpeg"
  },
  {
    name: "Ethan Massey",
    position: "Head Structural Engineer",
    image: "/ethan.png"
  },
  {
    name: "Liam Nelson",
    position: "Head Electrical Engineer",
    image: "/liam.png"
  }
];

const TeamSection = () => {
  return (
    <div className="py-20 bg-white px-10">
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-10 mt-20">Team</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-64 h-80 object-cover rounded-lg shadow-lg mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="bg-gray-200 w-full text-center py-2 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;