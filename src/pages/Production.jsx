import { motion } from 'framer-motion';
import { Sprout, CheckCircle, Flame, Factory, ShieldCheck, Package, Truck, Leaf, Shield, Award, Droplets, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Production() {
  const { t } = useTranslation();

  const PRODUCTION_STEPS = [
    { id: 1, title: t('production.steps.selection.title'), desc: t('production.steps.selection.desc'), icon: <Sprout className="w-8 h-8 text-white" />, color: 'bg-green-600' },
    { id: 2, title: t('production.steps.cleaning.title'), desc: t('production.steps.cleaning.desc'), icon: <CheckCircle className="w-8 h-8 text-white" />, color: 'bg-teal-500' },
    { id: 3, title: t('production.steps.roasting.title'), desc: t('production.steps.roasting.desc'), icon: <Flame className="w-8 h-8 text-white" />, color: 'bg-orange-500' },
    { id: 4, title: t('production.steps.grinding.title'), desc: t('production.steps.grinding.desc'), icon: <Factory className="w-8 h-8 text-white" />, color: 'bg-amber-600' },
    { id: 5, title: t('production.steps.quality.title'), desc: t('production.steps.quality.desc'), icon: <ShieldCheck className="w-8 h-8 text-white" />, color: 'bg-blue-600' },
    { id: 6, title: t('production.steps.packaging.title'), desc: t('production.steps.packaging.desc'), icon: <Package className="w-8 h-8 text-white" />, color: 'bg-indigo-500' },
    { id: 7, title: t('production.steps.distribution.title'), desc: t('production.steps.distribution.desc'), icon: <Truck className="w-8 h-8 text-white" />, color: 'bg-green-800' },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen overflow-x-hidden">
      
      {/* SECTION 1: Immersive Hero */}
      <section className="relative pt-24 pb-24 md:pt-32 md:pb-32  bg-green-950 overflow-hidden min-h-[60vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0 group">
          <img 
            src="https://images.unsplash.com/photo-1595856417721-eb3b207ebed7?q=80&w=2070" 
            alt="Factory" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity transform scale-100 transition-transform duration-[20s] linear"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-900/80 to-transparent" />
        </div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-4xl">
          <span className="inline-block py-1.5 px-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm tracking-widest uppercase mb-6 border border-amber-500/30 backdrop-blur-md">
            {t('production.badge', 'Seed to Shelf')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
            {t('production.title_1')} <span className="text-amber-500">{t('production.title_2')}</span> {t('production.title_3')}
          </h1>
          <p className="text-xl md:text-2xl text-green-100/90 font-light max-w-2xl mx-auto">
            {t('production.subtitle', 'State-of-the-art facilities merging traditional Ethiopian quality with modern global standards.')}
          </p>
        </motion.div>
      </section>

      {/* SECTION 2: The Matinsun Process (Upgraded Timeline) */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-100 rounded-full blur-[150px] opacity-50 -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-green-950 mb-6">{t('production.process.title', 'Our Production Process')}</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t('production.process.subtitle', 'Every product goes through our rigorous 7-step process to ensure unparalleled flavor, safety, and shelf-life.')}</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Tracking Line */}
            <div className="absolute left-[36px] md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-amber-200 via-amber-500 to-green-900 transform md:-translate-x-1/2 rounded-full" />
            
            <div className="space-y-16 md:space-y-24">
              {PRODUCTION_STEPS.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    
                    {/* Timeline Node (Icon) */}
                    <div className="absolute left-0 md:static md:w-20 md:h-20 flex-shrink-0 z-10 flex items-center justify-center md:mx-0">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-[6px] border-white ${step.color} transform hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                    </div>

                    {/* Desktop Spacer */}
                    <div className="hidden md:block w-1/2 px-12" />

                    {/* Card Content */}
                    <div className="w-full pl-28 md:pl-0 md:px-12 md:w-1/2 pt-2 md:pt-0">
                      <div className={`bg-slate-50 p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:border-amber-300 transition-all duration-300 relative group ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        <span className="text-sm font-black text-amber-500 mb-2 block tracking-widest uppercase">{t('production.phase', 'Phase')} 0{step.id}</span>
                        <h3 className="text-3xl font-black text-green-950 mb-4 group-hover:text-amber-600 transition-colors">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg font-light">{step.desc}</p>
                        
                        {/* Interactive Desktop Side-Dot Connector */}
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-amber-400 rounded-full ${isEven ? '-left-2' : '-right-2'} opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(251,191,36,0.8)]`} />
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Quality Control & Lab Testing */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
                <Shield className="text-amber-500 w-5 h-5 shrink-0" />
                <span className="text-sm font-bold tracking-widest text-green-950 uppercase">{t('production.qc.badge', 'Zero Compromise')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-green-950 leading-tight mb-8">
                {t('production.qc.title', 'State-of-the-Art Quality Control')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-10">
                {t('production.qc.desc', 'Before any product leaves our facility, it undergoes rigorous laboratory testing. We test for moisture levels, purity, aroma potency, and strict adherence to international food safety regulations.')}
              </p>
              
              <ul className="space-y-4">
                {(t('production.qc.points', { returnObjects: true }) || []).map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                    <span className="text-gray-800 font-bold text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[400px] md:h-[600px] border-8 border-white">
                <img src="https://images.unsplash.com/photo-1574689049597-7e6dde3eb699?q=80&w=2070" className="w-full h-full object-cover" alt="Lab Testing" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/40 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 flex items-center gap-6 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <Award className="w-14 h-14 text-amber-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-black text-2xl tracking-tight mb-1">{t('production.qc.export_grade', '100% Export Grade')}</h4>
                    <p className="text-green-50 text-sm md:text-base">{t('production.qc.standards', 'Meeting Global EU & US Standards')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Sustainability & Organic Practices */}
      <section className="py-16 lg:py-24 bg-green-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[150px] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <Leaf className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">{t('production.sustain.title', 'Sustainable & Organic')}</h2>
          <p className="text-xl text-green-100/80 font-light max-w-4xl mx-auto mb-20 leading-relaxed">
            {t('production.sustain.desc', 'We believe in giving back to the earth that gives to us. Our production processes are designed to minimize waste, maximize energy efficiency, and empower local farming communities.')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors group cursor-default">
              <Droplets className="w-12 h-12 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{t('production.sustain.water.title')}</h3>
              <p className="text-green-100/60 leading-relaxed font-light">{t('production.sustain.water.desc')}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors group cursor-default">
              <Sprout className="w-12 h-12 text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{t('production.sustain.organic.title')}</h3>
              <p className="text-green-100/60 leading-relaxed font-light">{t('production.sustain.organic.desc')}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors group cursor-default">
              <Package className="w-12 h-12 text-amber-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{t('production.sustain.packaging.title')}</h3>
              <p className="text-green-100/60 leading-relaxed font-light">{t('production.sustain.packaging.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-16 lg:py-24 bg-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-green-950 tracking-tight leading-none mb-8">
            {t('production.cta.title', 'Taste the Difference')}
          </h2>
          <p className="text-xl md:text-3xl text-green-900/80 mb-12 font-medium">
            {t('production.cta.desc', 'Ready to experience our export-quality agricultural products?')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/products"
              className="w-full sm:w-auto bg-green-950 text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-green-900 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group"
            >
              {t('nav.products')} <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
