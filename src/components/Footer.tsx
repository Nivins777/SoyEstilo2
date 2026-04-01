import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, MessageCircle, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-brand-brown text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-black tracking-tighter">SOYESTILO</h2>
          <p className="text-brand-nude/80 max-w-xs">
            No vistas para encajar, viste para ser tú. La moda es tu voz, úsala sin miedo.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold uppercase tracking-widest">Pa’ hablar</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-brand-sand" />
              <a href="mailto:hola@soyestilo.com" className="hover:text-brand-sand transition-colors">hola@soyestilo.com</a>
            </li>
            <li className="flex items-center space-x-3">
              <MessageCircle size={18} className="text-brand-sand" />
              <a href="https://wa.me/1234567890" className="bg-brand-tan px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                WhatsApp Directo
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold uppercase tracking-widest">Newsletter</h3>
          <p className="text-sm text-brand-nude/60">Recibe tips de estilo y promos exclusivas.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Tu correo..." 
              className="bg-white/10 border-none px-4 py-3 rounded-l-lg focus:ring-2 focus:ring-brand-sand outline-none w-full"
            />
            <button className="bg-brand-sand px-6 py-3 rounded-r-lg font-bold hover:bg-brand-tan transition-colors">
              OK
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-xs text-brand-nude/40 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} SoyEstilo. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
