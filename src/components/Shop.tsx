import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
}

interface ShopProps {
  gender: 'chica' | 'chico';
}

const Shop: React.FC<ShopProps> = ({ gender }) => {
  const categories = ['Pa’ parchar', 'Relajadito', 'Full actitud', 'Pa’ romperla'];
  
  const products: Product[] = [
    { id: 1, name: 'Hoodie Oversize', price: '$85.000', category: 'Pa’ parchar', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=500' },
    { id: 2, name: 'Jean Baggy', price: '$120.000', category: 'Full actitud', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=500' },
    { id: 3, name: 'Camiseta Graphic', price: '$45.000', category: 'Relajadito', image: 'https://images.unsplash.com/photo-1576566582402-285c69762e17?auto=format&fit=crop&q=80&w=500' },
    { id: 4, name: 'Chaqueta Denim', price: '$150.000', category: 'Pa’ romperla', image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&q=80&w=500' },
    { id: 5, name: 'Joggers Tech', price: '$95.000', category: 'Relajadito', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=500' },
    { id: 6, name: 'Vestido Flow', price: '$110.000', category: 'Pa’ romperla', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500' },
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-brand-brown uppercase tracking-tighter mb-4"
          >
            Para {gender}
          </motion.h1>
          <p className="text-brand-tan font-bold uppercase tracking-widest">Colección 2026 • SoyEstilo</p>
        </header>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {categories.map((cat, i) => (
            <button 
              key={i}
              className="bg-brand-nude/30 hover:bg-brand-brown hover:text-white transition-all py-6 rounded-2xl font-black uppercase tracking-widest text-sm md:text-base border-2 border-transparent hover:border-brand-tan"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-brand-nude/10 mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-3 bg-white rounded-full shadow-lg hover:bg-brand-sand hover:text-white transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="p-3 bg-white rounded-full shadow-lg hover:bg-brand-brown hover:text-white transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-brown">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-brand-brown uppercase tracking-tight">{product.name}</h3>
                  <p className="text-brand-tan font-black">{product.price}</p>
                </div>
                <button className="bg-brand-brown text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest hover:bg-brand-tan transition-colors">
                  Ver más
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
