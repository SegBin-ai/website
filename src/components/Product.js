import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriver, faCogs, faWrench, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

const images = [
  `${process.env.PUBLIC_URL}/product1.jpeg`,
  `${process.env.PUBLIC_URL}/product2.jpeg`,
  `${process.env.PUBLIC_URL}/product3.jpeg`,
  `${process.env.PUBLIC_URL}/product4.jpeg`,
];

const ProductSection = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-5xl font-bold text-blue-500 mb-16 mt-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Product
        </motion.h2>
        <motion.div 
          className="bg-gray-100 rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Slider {...settings}>
            {images.map((image, index) => (
              <motion.div key={index}>
                <motion.img
                  src={image}
                  alt={`TerraVortex Product ${index + 1}`}
                  className="w-full h-80 object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </Slider>
          <div className="p-8">
            <motion.h3 
              className="text-3xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Vortex Lens
            </motion.h3>
            <motion.p 
              className="text-gray-700 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Our real-time assistant helps manufacturing workers with quality control. Equipped with a camera and a projector, it guides workers by projecting images onto the product to ensure accurate assembly.
            </motion.p>
            <motion.ul 
              className="text-center text-gray-700 mb-8 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <li className="flex justify-center items-center text-center">
                <FontAwesomeIcon icon={faScrewdriver} className="text-blue-500 mr-3" />
                Real-time visual guidance for workers
              </li>
              <li className="flex justify-center items-center">
                <FontAwesomeIcon icon={faCogs} className="text-blue-500 mr-3" />
                Reduces errors and improves efficiency
              </li>
              <li className="flex justify-center items-center">
                <FontAwesomeIcon icon={faWrench} className="text-blue-500 mr-3" />
                Guides placement of screws, welds, and more
              </li>
              <li className="flex justify-center items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 mr-3" />
                Prevents defects and reduces waste
              </li>
            </motion.ul>
            <motion.button 
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              onClick={() => {navigate('/contact')}}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductSection;