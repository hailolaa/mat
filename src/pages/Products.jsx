import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Eye, ShoppingBag, ShieldCheck, Globe, Factory, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Image Imports
import berbereImg500g from '/assets/berbere-500g.jpg';
import berbereImg1kg from '/assets/berbere-1kg.jpg';
import berbereImg250g from '/assets/berbere-250g.jpg';
import shiroImg500g from '/assets/shiro-500.jpg';
import shiroImg1kg from '/assets/shiro-1kg.jpg';
import shiroImg250g from '/assets/shero-250g.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Products() {
  const { t } = useTranslation();

  const PRODUCTS_DATA = [
    { 
      id: 1, 
      name: t('products.items.berbere.name'), 
      category: t('products.categories.spices'), 
      desc: t('products.items.berbere.desc'), 
      sizes: ["1/4 kg", "1/2 kg", "1 kg"], 
      images: {
        "1/4 kg": berbereImg250g,
        "1/2 kg": berbereImg500g,
        "1 kg": berbereImg1kg,
        "default": berbereImg500g
      }
    },
    { 
      id: 2, 
      name: t('products.items.shiro.name'), 
      category: t('products.categories.flours'), 
      desc: t('products.items.shiro.desc'), 
      sizes: ["1/4 kg", "1/2 kg", "1 kg"], 
      images: {
        "1/4 kg": shiroImg250g,
        "1/2 kg": shiroImg500g,
        "1 kg": shiroImg1kg,
        "default": shiroImg500g
      }
    },
    { id: 3, name: t('products.items.bula.name'), category: t('products.categories.traditional'), desc: t('products.items.bula.desc'), sizes: ["1/4 kg", "1/2 kg", "1 kg"], img: "https://media.istockphoto.com/id/1135483735/photo/wooden-bowl-of-flour.webp?a=1&b=1&s=612x612&w=0&k=20&c=OBjjJapN2idIGQWwWN-ZsYZ3bIEnhVMJmmR3maoB6ag=" },
    { id: 4, name: t('products.items.beso.name'), category: t('products.categories.flours'), desc: t('products.items.beso.desc'), sizes: ["1/4 kg", "1/2 kg", "1 kg"], img: "https://media.istockphoto.com/id/166608983/photo/oat-flour.webp?a=1&b=1&s=612x612&w=0&k=20&c=I1qJ9TWm9KazA6gbVgKnS6ivwDxXMEJ2OlUrz8oICd0=" },
    { id: 5, name: t('products.items.mitmita.name'), category: t('products.categories.spices'), desc: t('products.items.mitmita.desc'), sizes: ["1/4 kg", "1/2 kg", "1 kg"], img: "https://media.istockphoto.com/id/1433058826/photo/paprika.webp?a=1&b=1&s=612x612&w=0&k=20&c=UuQIVgV7pbvSenEcN_K_UL4wUTsrg44T_uh3TJf0ELk=" },
    { id: 6, name: t('products.items.atmit.name'), category: t('products.categories.traditional'), desc: t('products.items.atmit.desc'), sizes: ["1/4 kg", "1/2 kg", "1 kg"], img: "https://media.istockphoto.com/id/1865291055/photo/close-up-of-ground-dried-marshmallow-root.webp?a=1&b=1&s=612x612&w=0&k=20&c=subGr5vuF9GkcIUAy16jBRaYZpuyCtHlnwpPo3Be5sk=" },
    { id: 7, name: t('products.items.abish.name'), category: t('products.categories.flours'), desc: t('products.items.abish.desc'), sizes: ["1/4 kg", "1/2 kg", "1 kg"], img: "https://images.unsplash.com/photo-1595414902678-862fe51c9f27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmVudWdyZWVrfGVufDB8fDB8fHww" },
  ];

  // Derive categories so translation works instantly on Language Toggle
  const CATEGORIES = [
    t('products.categories.all'), 
    t('products.categories.spices'), 
    t('products.categories.flours'), 
    t('products.categories.traditional')
  ];

  // Safe fallback to first item (All) if translation causes re-render
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  
  // Ensure we default to "All" when language switches
  useEffect(() => setActiveCategory(CATEGORIES[0]), [t]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter Logic
  const filteredProducts = PRODUCTS_DATA.filter(prod => {
    const matchCat = activeCategory === CATEGORIES[0] || prod.category === activeCategory;
    const matchSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen overflow-x-hidden">
      
      {/* SECTION 1: Premium Interactive Hero with Integrated Search */}
      <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 bg-green-950 overflow-hidden min-h-[50vh] flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=2070')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-900/80 to-transparent" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-4xl w-full">
          <span className="inline-block py-1.5 px-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm tracking-widest uppercase mb-6 border border-amber-500/30 backdrop-blur-md">
            {t('products.badge', 'Premium Quality')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6">
            {t('products.title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 drop-shadow-lg">{t('products.title_2')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100/90 font-light max-w-2xl mx-auto mb-12">
            {t('products.subtitle')}
          </p>
          
          {/* Giant Search Bar */}
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-0 bg-amber-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/30 rounded-full p-2 shadow-2xl">
              <Search className="text-amber-400 w-6 h-6 ml-4 shrink-0" />
              <input 
                type="text" 
                placeholder={t('products.search_placeholder')}
                className="w-full bg-transparent text-white placeholder-green-100/60 text-lg px-4 py-3 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="p-3 text-white/50 hover:text-white transition-colors bg-white/10 rounded-full mr-1">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: Sticky Category Filter Tabs */}
      <section className="bg-white/80 backdrop-blur-md border-b border-gray-100 py-6 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-3 justify-start md:justify-center min-w-max">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-black tracking-wide uppercase transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-amber-500 text-green-950 shadow-lg shadow-amber-500/30 -translate-y-1' 
                  : 'bg-slate-50 border border-gray-100 text-gray-500 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: The Product Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8 min-h-[40vh]">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={() => setSelectedProduct(product)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-2xl text-green-950 font-black mb-2">{t('products.no_results', 'No Products Found')}</p>
            <p className="text-gray-500 font-light mb-6">{t('products.no_results_desc', 'Try adjusting your search or category filter.')}</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveCategory(CATEGORIES[0]);}}
              className="px-8 py-3 bg-slate-100 text-gray-600 font-bold rounded-full hover:bg-slate-200 transition-colors"
            >
              {t('products.clear_filters')}
            </button>
          </motion.div>  
        )}
      </section>

      {/* SECTION 4: The Matinsun Quality Standard */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-green-950 mb-4">{t('products.quality.title', 'The Matinsun Standard')}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{t('products.quality.desc', 'Every product that leaves our facility goes through rigorous testing to ensure it meets global export standards.')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: t('products.quality.p1.title', '100% Authentic'), desc: t('products.quality.p1.desc', 'Sourced directly from local Ethiopian farmers ensuring pure, unadulterated quality.') },
              { icon: Factory, title: t('products.quality.p2.title', 'Hygienic Processing'), desc: t('products.quality.p2.desc', 'Processed in our state-of-the-art facilities with strict adherence to food safety protocols.') },
              { icon: Globe, title: t('products.quality.p3.title', 'Export Ready'), desc: t('products.quality.p3.desc', 'Packaged to preserve freshness and aroma, fully compliant with international shipping standards.') }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 p-10 rounded-3xl border border-gray-100 text-center hover:border-amber-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-110 group-hover:bg-amber-50 group-hover:border-amber-200 transition-all">
                  <feature.icon className="w-10 h-10 text-amber-500" />
                </div>
                <h3 className="text-2xl font-black text-green-950 mb-4">{feature.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Bulk Order CTA */}
      <section className="py-16 lg:py-24 bg-green-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            {t('products.cta.title', 'Looking for Bulk Export?')}
          </h2>
          <p className="text-xl md:text-2xl text-green-200 font-light mb-12">
            {t('products.cta.desc', 'We supply premium Ethiopian agricultural products to businesses worldwide. Contact our team for wholesale pricing and logistics.')}
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-amber-500 text-green-950 font-black px-10 py-5 rounded-full text-lg hover:bg-amber-400 transition-all shadow-xl hover:-translate-y-1 shadow-amber-500/20 group"
          >
            {t('products.cta.button', 'Request a Quote')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Quick View Modal Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <QuickViewModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// === Subcomponent: Product Card === //
function ProductCard({ product, onQuickView }) {
  const { t } = useTranslation();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-green-900/10 hover:border-amber-200 transition-all duration-300 group flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden bg-white p-6 flex items-center justify-center border-b border-gray-50">
        <img 
          src={product.images ? product.images.default : product.img} 
          alt={product.name} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        <div className="absolute inset-0 bg-green-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button 
            onClick={onQuickView}
            className="bg-white text-green-900 font-black px-8 py-3 rounded-full transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 shadow-xl hover:bg-amber-400 hover:text-green-950"
          >
            <Eye className="w-5 h-5"/> {t('products.quick_view')}
          </button>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="text-xs font-black text-amber-500 mb-2 uppercase tracking-widest">{product.category}</div>
        <h3 className="text-xl font-black text-gray-900 mb-2 line-clamp-2 leading-tight">{product.name}</h3>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-6">
          {product.sizes.map(size => (
            <span key={size} className="bg-slate-50 border border-gray-100 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-lg">
              {size}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// === Subcomponent: Quick View Modal === //
function QuickViewModal({ product, onClose }) {
  const { t } = useTranslation();
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);
  const currentImg = product.images 
    ? (product.images[selectedSize] || product.images.default) 
    : product.img;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-green-950/80 backdrop-blur-md cursor-pointer"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 30 }}
        className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]"
      >
        <button onClick={onClose} className="absolute top-6 right-6 z-20 bg-gray-100/80 backdrop-blur-md p-3 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors text-gray-800 shadow-sm">
          <X className="w-6 h-6" />
        </button>

        <div className="md:w-1/2 bg-slate-50 p-12 flex items-center justify-center border-r border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
          <motion.img 
            key={currentImg}
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
            src={currentImg} 
            alt={`${product.name} - ${selectedSize}`} 
            className="relative z-10 w-full max-w-sm object-contain drop-shadow-2xl" 
          />
        </div>

        <div className="md:w-1/2 p-10 md:p-14 overflow-y-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 mb-6">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-black text-amber-600 uppercase tracking-widest">{product.category}</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-green-950 mb-6 leading-tight">{product.name}</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">{product.desc}</p>
          
          <div className="mb-8 p-8 bg-slate-50 rounded-3xl border border-gray-100">
            <h4 className="font-bold text-green-950 mb-4 tracking-widest uppercase text-sm">{t('products.select_size')}</h4>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map(size => (
                <button 
                  key={size} 
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 rounded-xl border-2 transition-all font-black text-sm shadow-sm ${
                    selectedSize === size 
                    ? 'border-amber-500 bg-amber-50 text-amber-700 scale-105 shadow-amber-500/10' 
                    : 'border-transparent bg-white text-gray-500 hover:border-amber-200 hover:text-amber-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
}
