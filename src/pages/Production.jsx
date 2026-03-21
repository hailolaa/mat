import { motion } from 'framer-motion';
import { Sprout, CheckCircle, Flame, Factory, ShieldCheck, Package, Truck } from 'lucide-react';
import { useTranslation } from 'react-i18next';



export default function Production() {
  const { t } = useTranslation();

  const PRODUCTION_STEPS = [
  { id: 1, title: t('production.steps.selection.title'), desc: t('production.steps.selection.desc'), icon: <Sprout className="w-6 h-6 text-white" />, color: 'bg-green-600' },
  { id: 2, title: t('production.steps.cleaning.title'), desc: t('production.steps.cleaning.desc'), icon: <CheckCircle className="w-6 h-6 text-white" />, color: 'bg-teal-500' },
  { id: 3, title: t('production.steps.roasting.title'), desc: t('production.steps.roasting.desc'), icon: <Flame className="w-6 h-6 text-white" />, color: 'bg-orange-500' },
  { id: 4, title: t('production.steps.grinding.title'), desc: t('production.steps.grinding.desc'), icon: <Factory className="w-6 h-6 text-white" />, color: 'bg-amber-600' },
  { id: 5, title: t('production.steps.quality.title'), desc: t('production.steps.quality.desc'), icon: <ShieldCheck className="w-6 h-6 text-white" />, color: 'bg-blue-500' },
  { id: 6, title: t('production.steps.packaging.title'), desc: t('production.steps.packaging.desc'), icon: <Package className="w-6 h-6 text-white" />, color: 'bg-indigo-500' },
  { id: 7, title: t('production.steps.distribution.title'), desc: t('production.steps.distribution.desc'), icon: <Truck className="w-6 h-6 text-white" />, color: 'bg-green-800' },
];



  return (
    <div className="w-full bg-slate-50 min-h-screen pb-32">
      {/* Header */}
      <div className="bg-green-950 text-white py-24 px-6 relative overflow-hidden text-center border-b-[6px] border-amber-500">
        <h1 className="text-4xl md:text-6xl font-black mb-4 relative z-10">
          {t('production.title_1')}
          <span className="text-amber-500">{t('production.title_2')}</span>
          {t('production.title_3')}
        </h1>
        <p className="text-green-200 text-lg max-w-2xl mx-auto font-light relative z-10">
          {t('production.subtitle')}
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-24">
        <div className="relative">
          {/* Vertical Tracking Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-600 via-amber-500 to-green-900 transform md:-translate-x-1/2 opacity-30" />
          
          
          <div className="space-y-12 md:space-y-24">
            {PRODUCTION_STEPS.map((step, index) => {
              // Alternating sides for desktop
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex items-center justify-between md:justify-normal ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Timeline Node (Icon) */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-[6px] border-slate-50 ${step.color} z-10 hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Empty Spacer used to push the card to one side on Desktop */}
                  <div className="hidden md:block w-5/12" />

                  {/* Card Content */}
                  <div className="w-full pl-24 md:pl-0 md:w-5/12">
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-amber-300 transition-all duration-300 relative group">
                      <span className="text-sm font-black text-amber-500/50 mb-1 block tracking-widest uppercase">{t('production.phase')} {step.id}</span>
                      <h3 className="text-2xl font-bold text-green-950 mb-3 group-hover:text-green-700 transition">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
