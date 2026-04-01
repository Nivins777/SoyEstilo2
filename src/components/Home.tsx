import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="inicio" className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        {/* EDITABLE HERO IMAGE PATH: /images/hero.jpg */}
        {/* Using a placeholder for now as per instructions */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=2070" 
            alt="Adolescentes felices con diversos estilos - Editorial" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6"
          >
            EXPRÉSATE <br /> SIN LÍMITES
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 font-medium mb-10 max-w-2xl mx-auto"
          >
            "No vistas para encajar, viste para ser tú."
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/chica" className="bg-white text-brand-brown px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-brand-sand hover:text-white transition-all transform hover:scale-105">
              Para Chica
            </Link>
            <Link to="/chico" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-brand-brown transition-all transform hover:scale-105">
              Para Chico
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-black text-brand-brown tracking-tighter leading-tight">
              ¿QUIÉNES <br /> SOMOS?
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                En <span className="font-bold text-brand-tan">SoyEstilo</span>, creemos que la ropa es más que tela; es tu armadura, tu lienzo y tu voz. Nacimos para romper las reglas de "lo que se debe usar".
              </p>
              <p>
                Ofrecemos colecciones que celebran la <span className="font-bold text-brand-tan">diversidad</span> y la <span className="font-bold text-brand-tan">autenticidad</span>. Aquí no hay tallas para encajar, hay estilos para destacar.
              </p>
              <p className="font-semibold text-brand-brown italic">
                "Lo que nos hace diferentes es que nos importa que seas TÚ."
              </p>
            </div>
            <button className="flex items-center space-x-2 text-brand-brown font-black uppercase tracking-widest group">
              <span>Conoce más</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000" 
                alt="Moda y diversidad juvenil" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-sand/20 rounded-full -z-10 blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories Preview */}
      <section className="py-20 bg-brand-nude/20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-brand-brown tracking-tighter uppercase">Tu vibe, tu elección</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Pa’ parchar', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500' },
            { name: 'Relajadito', img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&q=80&w=500' },
            { name: 'Full actitud', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=500' },
            { name: 'Pa’ romperla', img: 'https://images.unsplash.com/photo-1529139572177-393fbf05519d?auto=format&fit=crop&q=80&w=500' }
          ].map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl h-80"
            >
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/80 to-transparent flex items-end p-6">
                <h3 className="text-white font-black text-2xl uppercase tracking-tighter">{cat.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
