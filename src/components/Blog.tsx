import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Cómo combinar colores tierra sin parecer un árbol",
      excerpt: "Los tonos de esta temporada son increíbles, pero hay que saber mezclarlos. Aquí te damos 5 tips infalibles.",
      date: "Marzo 25, 2026",
      author: "Santi Estilo",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Oversize: ¿Cómo llevarlo sin perderte en la ropa?",
      excerpt: "La tendencia XXL sigue fuerte. Aprende a equilibrar volúmenes para que tu outfit se vea intencional y no por error.",
      date: "Marzo 20, 2026",
      author: "Valen Moda",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Accesorios que gritan 'Soy Yo'",
      excerpt: "Desde gorras hasta joyería minimalista. Los detalles son los que realmente cuentan tu historia.",
      date: "Marzo 15, 2026",
      author: "Equipo SoyEstilo",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black text-brand-brown uppercase tracking-tighter mb-6"
          >
            TU ESTILO
          </motion.h1>
          <p className="text-xl text-brand-tan font-medium max-w-2xl mx-auto">
            Tips, tendencias y consejos para que tu ropa hable por ti.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl mb-6 shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-brown">
                  Moda
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-xs text-brand-tan font-bold uppercase tracking-widest">
                  <span className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </span>
                </div>
                
                <h2 className="text-2xl font-black text-brand-brown leading-tight group-hover:text-brand-tan transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center space-x-2 text-brand-brown font-black uppercase tracking-widest text-sm group-hover:translate-x-2 transition-transform">
                  <span>Leer más</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Motivation Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 bg-brand-brown rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">¿Tienes un estilo único?</h2>
            <p className="text-brand-nude/80 mb-8 max-w-xl mx-auto">Queremos verte. Etiquétanos en tus fotos usando #SoyEstilo y podrías aparecer en nuestro blog.</p>
            <button className="bg-brand-sand px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-brand-brown transition-all">
              ¡Únete a la comunidad!
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-tan/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
