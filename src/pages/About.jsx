import { motion } from 'framer-motion';
import { Target, Eye, Shield, CheckCircle2, MapPin, Building2, ArrowRight, Award, Globe, Users, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white min-h-screen overflow-x-hidden">
      
            {/* 1. Interactive, Animated Hero */}
      <section className="relative  pb-20  bg-green-950 overflow-hidden min-h-[85vh] flex items-center">
        
        {/* Animated Background Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], x: [0, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" 
        />

        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Side: Animated Text Content */}
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-xl"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                <span className="text-amber-400 font-bold text-sm tracking-widest uppercase">{t('about.badge')}</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6"
              >
                {t('about.title_1')}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 drop-shadow-lg">
                  {t('about.title_2')}
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-green-100/90 font-light leading-relaxed max-w-xl"
              >
                {t('about.subtitle')}
              </motion.p>
            </div>

            {/* Right Side: Interactive Image Collage (Hidden on very small mobile to keep it clean) */}
            <div className="w-full lg:w-1/2 relative h-[450px] md:h-[600px] hidden sm:block">
              
              {/* Image 1: Back/Right */}
              <motion.div 
                initial={{ opacity: 0, x: 100, rotate: 15 }}
                animate={{ opacity: 1, x: 0, rotate: 5 }}
                transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 100 }}
                className="absolute top-10 right-0 md:right-10 w-2/3 h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-green-900/50 z-10"
              >
                <img src="https://images.unsplash.com/photo-1595856417721-eb3b207ebed7?q=80&w=2070" className="w-full h-full object-cover" alt="Farm operations" />
                <div className="absolute inset-0 bg-green-950/20 mix-blend-overlay" />
              </motion.div>

              {/* Image 2: Front/Left */}
              <motion.div 
                initial={{ opacity: 0, y: 150, rotate: -20 }}
                animate={{ opacity: 1, y: 0, rotate: -5 }}
                transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 100 }}
                className="absolute bottom-0 left-0 w-2/3 h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-green-900/50 border-8 border-white z-20"
              >
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064" className="w-full h-full object-cover" alt="Agriculture" />
              </motion.div>

              {/* Interactive Floating Badge */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/4 md:left-[20%] -translate-y-1/2 -translate-x-1/2 z-30 bg-white/90 backdrop-blur-md p-6 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white flex items-center justify-center w-32 h-32 cursor-pointer hover:scale-110 transition-transform"
              >
                <div className="text-center">
                  <span className="block text-4xl font-black text-amber-500 tracking-tighter">10<span className="text-green-600">+</span></span>
                  <span className="block text-[10px] font-black text-green-950 uppercase tracking-[0.2em] leading-none mt-1">Years</span>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>


      {/* 2. Company Overview (Your original text, beautifully styled side-by-side) */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div className="inline-flex items-center gap-3 bg-amber-50 px-4 py-2 rounded-full border border-amber-100">
                <Building2 className="text-amber-500 w-5 h-5" />
                <span className="text-sm font-bold tracking-widest text-amber-600 uppercase">{t('about.overview.tag')}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-green-950 leading-tight">
                {t('about.overview.title')}
              </h2>
              
              <div className="prose prose-lg text-gray-600">
                <p className="leading-relaxed">
                  <strong className="text-green-900 font-bold">{t('about.overview.p1_bold')}</strong>
                  {t('about.overview.p1_rest')}
                </p>
              </div>
              
              <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border-l-4 border-amber-500">
                <MapPin className="text-amber-500 w-8 h-8 shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">
                  {t('about.overview.hub_desc_1')}
                  <strong className="text-green-900 font-bold mx-1">{t('about.overview.hub_desc_bold')}</strong>
                  {t('about.overview.hub_desc_2')}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1595856417721-eb3b207ebed7?q=80&w=2070" 
                  alt="Agriculture" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-950/40 to-transparent" />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision (Sleek Side-by-Side Cards) */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-amber-200 transition-all group"
            >
              <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform">
                <Target className="w-10 h-10 text-amber-500" />
              </div>
              <h2 className="text-3xl font-black text-green-950 mb-6">{t('about.mission.title')}</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                {t('about.mission.desc')}
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all group"
            >
              <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform">
                <Eye className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-black text-green-950 mb-6">{t('about.vision.title')}</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                {t('about.vision.desc')}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Core Values (Clean List) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Shield className="w-12 h-12 text-green-800 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-6">{t('about.values.title')}</h2>
            <p className="text-lg text-gray-500 font-light">{t('about.values.desc', 'The foundational pillars that guide our operations, our quality, and our commitment to Ethiopia and the world.')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            <ValueCard title={t('about.values.list.quality.title')} desc={t('about.values.list.quality.desc')} />
            <ValueCard title={t('about.values.list.growth.title')} desc={t('about.values.list.growth.desc')} />
            <ValueCard title={t('about.values.list.community.title')} desc={t('about.values.list.community.desc')} />
            <ValueCard title={t('about.values.list.innovation.title')} desc={t('about.values.list.innovation.desc')} />
            <ValueCard title={t('about.values.list.transparency.title')} desc={t('about.values.list.transparency.desc')} />
            <ValueCard title={t('about.values.list.trust.title')} desc={t('about.values.list.trust.desc')} />
          </div>
        </div>
      </section>

      {/* 5. Minimalist Impact & CTA */}
      <section className="bg-amber-500 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-6 tracking-tight">{t('about.cta.title', 'Partner with Excellence.')}</h2>
              <p className="text-xl text-green-900 mb-8 max-w-md">{t('about.cta.desc', 'Experience the Matinsun standard of agricultural export and manufacturing.')}</p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-green-950 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-900 transition-all shadow-xl hover:-translate-y-1 group">
                {t('contact.title', 'Contact Us Today')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-2 gap-8">
              <div className="bg-amber-400/30 p-8 rounded-3xl backdrop-blur-sm border border-amber-200 text-center">
                <Globe className="w-8 h-8 text-green-950 mx-auto mb-4" />
                <h3 className="text-4xl font-black text-green-950 mb-2">{t('about.impact.global', 'Global')}</h3>
                <p className="text-green-900 font-medium">{t('about.impact.export', 'Export Reach')}</p>
              </div>
              <div className="bg-amber-400/30 p-8 rounded-3xl backdrop-blur-sm border border-amber-200 text-center">
                <Award className="w-8 h-8 text-green-950 mx-auto mb-4" />
                <h3 className="text-4xl font-black text-green-950 mb-2">{t('about.impact.quality', '100%')}</h3>
                <p className="text-green-900 font-medium">{t('about.impact.assured', 'Quality Assured')}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

// Reusable extremely clean Value Card
function ValueCard({ title, desc }) {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      className="flex flex-col group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-slate-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-amber-300 group-hover:bg-amber-50 transition-colors">
          <CheckCircle2 className="w-6 h-6 text-amber-500" />
        </div>
        <h3 className="font-bold text-green-950 text-2xl tracking-tight">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed font-light text-lg pl-16 opacity-90">{desc}</p>
    </motion.div>
  );
}
