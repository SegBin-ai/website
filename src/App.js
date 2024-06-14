import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Offer from './components/Offer';
import Contact from './components/Contact';
import Info from './components/Info';
import ScrollToTop from './components/Scroll';

function App() {
  return (
    <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element= <Home />/>
          <Route path="/about" element= <Info /> />
          <Route path="/offer" element= <Offer /> />
          <Route path="/contact" element=<Contact /> />
        </Routes>
    </Router>
  );
}

export default App;