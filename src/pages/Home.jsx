import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Leaf, ShieldCheck, Truck, Globe, Box, Factory, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradients & Image */}
        <div className="absolute inset-0 bg-green-950 z-0 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595856417721-eb3b207ebed7?q=80&w=2070')] bg-cover bg-center -z-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center w-full mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-3/4"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/20 text-amber-300 font-bold text-sm mb-6 border border-amber-500/30 backdrop-blur-md">
              Premium Baltina Products
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
              {t('hero.title_1')}<span className="text-amber-400">{t('hero.title_2')}</span>{t('hero.title_3')}
            </h1>
            <p className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl font-light leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <Link to="/products" className="bg-amber-500 text-green-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition flex items-center gap-2 shadow-xl shadow-amber-500/20 hover:-translate-y-1">
                {t('hero.explore')} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 backdrop-blur-md transition hover:-translate-y-1">
                {t('hero.contact_us')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-4xl font-black text-green-950 mb-6">{t('home.about_preview.title')}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t('home.about_preview.desc')}
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-800 transition group">
                {t('home.about_preview.cta')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1636924271402-d639875aa2bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VyZWFscyUyQyUyMHNwaWNlcyUyMGluJTIwYSUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D" alt="Agriculture" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-green-900/10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Highlight */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-green-950 mb-4">{t('home.products_highlight.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('home.products_highlight.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              image="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070" 
              title={t('home.products_highlight.categories.spices')} 
              delay={0.1}
            />
            <ProductCard 
              image="https://plus.unsplash.com/premium_photo-1675237625821-c30234f71cba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2VyZWFsc3xlbnwwfHwwfHx8MA%3D%3D" 
              title={t('home.products_highlight.categories.grains')} 
              delay={0.2} 
            />
            <ProductCard 
              image="https://plus.unsplash.com/premium_photo-1695297516698-fd7a320a55e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2Nlc3NlZCUyMGZvb2RzJTIwZXRoaW9waWFufGVufDB8fDB8fHww" 
              title={t('home.products_highlight.categories.processed')} 
              delay={0.3} 
            />
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="inline-block bg-green-800 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition shadow-lg hover:-translate-y-1">
              {t('home.products_highlight.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Business Expansion */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-green-950 mb-4">{t('home.business_expansion.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('home.business_expansion.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <BusinessCard
              icon={<Globe className="w-10 h-10 text-amber-500" />}
              title={t('home.business_expansion.export_title')}
              desc={t('home.business_expansion.export_desc')}
              delay={0.1}
            />
            <BusinessCard
              icon={<Box className="w-10 h-10 text-amber-500" />}
              title={t('home.business_expansion.import_title')}
              desc={t('home.business_expansion.import_desc')}
              delay={0.2}
            />
            <BusinessCard
              icon={<Truck className="w-10 h-10 text-amber-500" />}
              title={t('home.business_expansion.logistics_title')}
              desc={t('home.business_expansion.logistics_desc')}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-24 bg-green-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 blur-3xl w-96 h-96 bg-amber-500 rounded-full" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">{t('home.production_process.title')}</h2>
            <p className="text-green-200 max-w-2xl mx-auto">{t('home.production_process.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-green-800 -translate-y-1/2 z-0" />
            
            <ProcessStep number="01" title={t('home.production_process.step1_title')} desc={t('home.production_process.step1_desc')} delay={0.1} />
            <ProcessStep number="02" title={t('home.production_process.step2_title')} desc={t('home.production_process.step2_desc')} delay={0.3} />
            <ProcessStep number="03" title={t('home.production_process.step3_title')} desc={t('home.production_process.step3_desc')} delay={0.5} />
            <ProcessStep number="04" title={t('home.production_process.step4_title')} desc={t('home.production_process.step4_desc')} delay={0.7} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-6">{t('home.cta.title')}</h2>
          <p className="text-xl text-green-900/80 mb-10 font-medium">{t('home.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-green-950 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-900 transition flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1">
              {t('home.cta.contact')} <Mail className="w-5 h-5" />
            </Link>
            <a href="tel:+251" className="bg-white text-green-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1">
              {t('home.cta.call')} <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Subcomponents

function ProductCard({ image, title, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer"
    >
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-900/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="w-12 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
}

function BusinessCard({ icon, title, desc, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300 group"
    >
      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ProcessStep({ number, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      className="relative z-10 flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 rounded-full bg-green-900 border-4 border-green-800 flex items-center justify-center text-amber-500 font-bold text-xl mb-6 shadow-xl">
        {number}
      </div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-green-200/80 text-sm">{desc}</p>
    </motion.div>
  );
}
