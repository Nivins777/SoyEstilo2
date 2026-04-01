import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import Blog from './components/Blog';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col smooth-scroll">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chica" element={<Shop gender="chica" />} />
            <Route path="/chico" element={<Shop gender="chico" />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
