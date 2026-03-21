import { motion } from 'framer-motion';
import { Target, Eye, Shield, CheckCircle2, MapPin, Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      
      {/* Premium Dark Header */}
      <div className="bg-green-950 text-white py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 opacity-10 blur-3xl w-96 h-96 bg-amber-500 rounded-full mix-blend-screen" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            {t('about.title_1')}
            <span className="text-amber-500">{t('about.title_2')}</span>
          </motion.h1 >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-green-200 max-w-2xl font-light leading-relaxed"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        
        {/* Company Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 md:p-14 shadow-xl shadow-green-900/5 border border-slate-100 mb-24 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl z-0 -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-amber-500 w-6 h-6" />
              <h2 className="text-sm font-bold tracking-widest text-amber-500 uppercase">{t('about.overview.tag')}</h2>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-green-950 mb-6 leading-tight">
              {t('about.overview.title')}
            </h3>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong className="text-green-900">{t('about.overview.p1_bold')}</strong>
                {t('about.overview.p1_rest')}
              </p>
              
              <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <MapPin className="text-green-700 w-6 h-6 shrink-0 mt-1" />
                <p className="text-gray-600">
                  {t('about.overview.hub_desc_1')}
                  <strong className="text-green-900">{t('about.overview.hub_desc_bold')}</strong>
                  {t('about.overview.hub_desc_2')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 1. Mission / Vision Split View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-100 flex flex-col border border-gray-50 top-to-bottom border-t-[6px] border-t-amber-500 relative"
          >
            <Target className="w-12 h-12 text-amber-500 mb-6" />
            <h2 className="text-3xl font-bold text-green-950 mb-4">{t('about.mission.title')}</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t('about.mission.desc')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-100 flex flex-col border border-gray-50 border-t-[6px] border-t-green-600 relative"
          >
            <Eye className="w-12 h-12 text-green-600 mb-6" />
            <h2 className="text-3xl font-bold text-green-950 mb-4">{t('about.vision.title')}</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t('about.vision.desc')}
            </p>
          </motion.div>
        </div>

        {/* 2. Core Values Grid */}
        <div>
          <div className="text-center mb-16">
            <Shield className="w-12 h-12 text-green-800 mx-auto mb-4" />
            <h2 className="text-4xl font-black text-green-950">{t('about.values.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard title={t('about.values.list.quality.title')} desc={t('about.values.list.quality.desc')} />
            <ValueCard title={t('about.values.list.growth.title')} desc={t('about.values.list.growth.desc')} />
            <ValueCard title={t('about.values.list.community.title')} desc={t('about.values.list.community.desc')} />
            <ValueCard title={t('about.values.list.innovation.title')} desc={t('about.values.list.innovation.desc')} />
            <ValueCard title={t('about.values.list.transparency.title')} desc={t('about.values.list.transparency.desc')} />
            <ValueCard title={t('about.values.list.trust.title')} desc={t('about.values.list.trust.desc')} />
          </div>
        </div>

      </div>
    </div>
  );
}

// Reusable card for core values
function ValueCard({ title, desc }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
    >
      <div className="flex items-start space-x-4">
        <CheckCircle2 className="w-7 h-7 text-amber-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
        <div>
          <h3 className="font-bold text-green-950 text-xl mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
