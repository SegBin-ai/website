import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const carouselItems = [
  {
    title: "Innovative Solutions",
    description: "We provide Innovative solutions for modern manufacturing challenges.",
    image: "/person.png"
  },
  {
    title: "Expert Team",
    description: "Our team consists of industry experts dedicated to ensuring excellence.",
    image: "/person2.png"
  },
  {
    title: "Quality Assurance",
    description: "We ensure the highest quality standards in our manufacturing processes.",
    image: "/person3.png"
  }
];

const ProfessionalCarousel = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-10">Our Professional Services</h2>
      <Slider {...settings} className="container mx-auto px-4">
        {carouselItems.map((item, index) => (
          <div key={index} className="p-4">
            <motion.div
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg opacity-80 hover:opacity-100 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-lg mb-4"/>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-lg text-gray-700 text-center">{item.description}</p>
              <motion.button 
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 mt-7"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                onClick={() => {navigate('/offer')}}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProfessionalCarousel;