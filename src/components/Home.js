import React from 'react';
import About from './About';
import Landing from './Landing';
import Features from './Features';
import CallToAction from './CalltoAction';
import ProfessionalCarousel from './Carousel';
import Footer from './Footer';
import NavBar from './NavBar';

const Home = () => {
  return (
    <div>
    <NavBar />
    <Landing />
    <About />
    <CallToAction />
    <Features />
    <ProfessionalCarousel />
    <Footer />
    </div>
  );
};

export default Home;