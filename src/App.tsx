import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/path/Home';
import About from './components/path/About';
import Delivery from './components/path/Delivery';
import Footer from './components/Footer';





const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;