import React from 'react';
import NavBar from './NavBar';
import ContactSection from './ContactSection';
import Footer from './Footer';
import FAQSection from './Faq'

const Contact = () => {
  return (
    <div>
      <NavBar />
        <ContactSection />
        <FAQSection />
        <Footer />
      </div>
  );
}

export default Contact;
