import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSent(true);
    setFormState({ name: '', email: '', message: '' });

    // Reset form and button text after 3 seconds
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  };

  return (
    <div className="section-container bg-white py-20 px-10">
      <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8 mt-20">
        <div className="md:w-1/2">
          <motion.h2
            className="text-4xl font-bold text-blue-500 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact
          </motion.h2>
          <motion.p
            className="text-2xl font-semibold text-blue-500 mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Haven't found the answer? Contact us!
          </motion.p>
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-4 bg-gray-100 rounded-lg"
            />
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="p-4 bg-gray-100 rounded-lg"
            />
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Message"
              className="p-4 bg-gray-100 rounded-lg h-32"
            ></textarea>
            <div className="flex justify-center">
              <motion.button
                type="submit"
                className={`bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-10 rounded-lg transition duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl ${
                  isSent ? 'cursor-not-allowed bg-gray-500' : ''
                }`}
                disabled={isSent}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
              >
                {isSent ? 'Sent!' : 'Send'}
              </motion.button>
            </div>
          </motion.form>
        </div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7008985235293!2d-74.00594168459499!3d40.71277597933064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQyJzQ2LjAiTiA3NMKwMDBDJzI4LjAiVw!5e0!3m2!1sen!2sus!4v1623948454855!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;