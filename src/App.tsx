import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/path/Home';
import Delivery from './components/path/Delivery';
import Footer from './components/Footer';
import Cart from './components/path/Cart';





const App: React.FC = () => {
  return (
    <Router >
      <Navbar />
      <div>
        <img style={{ width: '100%', height: 'auto', display: 'block' }} src="img/Обложка1.jpg" alt="" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <div>
        <img style={{ width: '100%', height: 'auto', display: 'block' }} src="img/Обложка2.jpg" alt="" />
      </div>
      <Footer />
    </Router>
  );
};

export default App;