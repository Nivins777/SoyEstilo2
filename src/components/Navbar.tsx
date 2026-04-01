import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pa’ conocernos', path: '/#inicio' },
    { name: 'Para chica', path: '/chica' },
    { name: 'Para chico', path: '/chico' },
    { name: 'Tu estilo', path: '/blog' },
    { name: 'Pa’ hablar', path: '/#contacto' },
  ];

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className={`text-2xl font-extrabold tracking-tighter transition-colors ${
            scrolled ? 'text-brand-brown' : 'text-white'
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          SOYESTILO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleLinkClick(link.path)}
              className={`text-sm font-semibold uppercase tracking-widest transition-colors hover:text-brand-tan ${
                scrolled ? 'text-brand-brown' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className={`hidden md:flex items-center space-x-5 ${scrolled ? 'text-brand-brown' : 'text-white'}`}>
          <button className="hover:text-brand-tan transition-colors"><ShoppingBag size={20} /></button>
          <button className="hover:text-brand-tan transition-colors"><User size={20} /></button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden transition-colors ${scrolled ? 'text-brand-brown' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleLinkClick(link.path)}
                className="text-brand-brown text-lg font-bold uppercase tracking-widest hover:text-brand-tan transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
