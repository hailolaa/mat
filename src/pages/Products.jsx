import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Eye, ShoppingBag } from 'lucide-react';
import berbereImg500g from '../assets/berbere-500g.jpg';
import berbereImg1kg from '../assets/berbere-1kg.jpg';
import berbereImg250g from '../assets/berbere-250g.jpg';
import shiroImg500g from '../assets/shiro-500.jpg';
import shiroImg1kg from '../assets/shiro-1kg.jpg';
import shiroImg250g from '../assets/shero-250g.jpg';
import { useTranslation } from 'react-i18next';


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

const CATEGORIES = [t('products.categories.all'), t('products.categories.spices'), t('products.categories.flours'), t('products.categories.traditional')];




  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter Logic
  const filteredProducts = PRODUCTS_DATA.filter(prod => {
    const matchCat = activeCategory === "All" || prod.category === activeCategory;
    const matchSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-24">
      
      {/* Page Header */}
      <div className="bg-green-950 text-white py-20 px-6 mt-0 border-b-4 border-amber-500 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4">{t('products.title_1')} <span className="text-amber-500">{t('products.title_2')}</span></h1>
        <p className="text-green-200 text-lg max-w-2xl mx-auto font-light">
          {t('products.subtitle')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        {/* Search & Categories Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                  ? 'bg-green-800 text-white shadow-md' 
                  : 'bg-transparent text-gray-500 hover:bg-green-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder={t('products.search_placeholder')}
              className="w-full pl-12 pr-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition bg-slate-50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Product Grid */}
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
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 font-medium">{t('products.no_results')}</p>
          </div>  
        )}
      </div>

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

// === Subcomponent: Product Card ===
function ProductCard({ product, onQuickView }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300 group flex flex-col h-full"
    >
      <div className="relative h-60 overflow-hidden bg-white px-8 py-4 flex items-center justify-center border-b border-gray-50">
        <img 
          src={product.images ? product.images.default : product.img} 
          alt={product.name} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        {/* Glassmorphism Hover Overlay */}
        <div className="absolute inset-0 bg-green-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button 
            onClick={onQuickView}
            className="bg-white text-green-900 font-bold px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 shadow-xl hover:bg-amber-400"
          >
            <Eye className="w-5 h-5"/> Quick View
          </button>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-bold text-amber-500 mb-2 uppercase tracking-wider">{product.category}</div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">{product.name}</h3>
        
        {/* Available Sizes Tag display */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {product.sizes.map(size => (
            <span key={size} className="bg-slate-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-md">
              {size}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// === Subcomponent: Quick View Modal ===
function QuickViewModal({ product, onClose }) {
  // Track the currently clicked size (default to the middle size if available, otherwise the first)
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);

  // Determine the image to show. If it has the `images` object, show the image for the selected size!
  const currentImg = product.images 
    ? (product.images[selectedSize] || product.images.default) 
    : product.img;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-green-950/60 backdrop-blur-sm cursor-pointer"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 30 }}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-20 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition text-gray-800">
          <X className="w-6 h-6" />
        </button>

        {/* Dynamic Image displayed here */}
        <div className="md:w-1/2 bg-slate-50 p-12 flex items-center justify-center border-r border-gray-100">
          {/* We added a Framer Motion key so the image gracefully fades when the size changes! */}
          <motion.img 
            key={currentImg}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={currentImg} 
            alt={`${product.name} - ${selectedSize}`} 
            className="w-full max-w-sm object-contain drop-shadow-2xl" 
          />
        </div>

        <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
          <div className="text-sm font-bold text-amber-500 mb-3 uppercase tracking-wider">{product.category}</div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">{product.name}</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">{product.desc}</p>
          
          <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-gray-100">
            <h4 className="font-bold text-green-950 mb-4 tracking-wide uppercase text-sm">Select Packaging Size</h4>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map(size => (
                <button 
                  key={size} 
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2.5 rounded-xl border-2 transition-all font-bold shadow-sm ${
                    selectedSize === size 
                    ? 'border-amber-500 bg-amber-50 text-amber-700 scale-105' 
                    : 'border-transparent bg-white text-gray-600 hover:border-amber-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/*<button className="w-full bg-green-800 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-900 transition shadow-lg shadow-green-900/20 active:scale-95">
            <ShoppingBag className="w-5 h-5" />
            Inquire Bulk Order
          </button>*/}
        </div>
      </motion.div>
    </div>
  );
}
