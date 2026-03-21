import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlaneTakeoff, Tractor, Box, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function BusinessAreas() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-24">
      
      {/* Header */}
      <div className="bg-green-950 text-white py-24 px-6 relative overflow-hidden text-center border-b-[6px] border-amber-500">
        <h1 className="text-4xl md:text-6xl font-black mb-4 relative z-10">
          {t('business.title_1')}
          <span className="text-amber-500">{t('business.title_2')}</span>
        </h1>
        <p className="text-green-200 text-lg max-w-2xl mx-auto font-light relative z-10">
          {t('business.subtitle')}
        </p>
      </div>

      {/* Accordion List Container */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-16 space-y-6">
        
        <AccordionItem 
          icon={<PlaneTakeoff className="w-8 h-8 text-amber-500" />}
          title={t('business.areas.export.title')}
          desc={t('business.areas.export.desc')}
        >
          <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4 mt-4 bg-amber-50 rounded-xl p-6 border border-amber-100 font-medium">
            <li>{t('business.areas.export.items.coffee')}</li>
            <li>{t('business.areas.export.items.oilseeds')}</li>
            <li>{t('business.areas.export.items.pulses')}</li>
            <li>{t('business.areas.export.items.processed')}</li>
          </ul>
        </AccordionItem>

        <AccordionItem 
          icon={<Tractor className="w-8 h-8 text-green-600" />}
          title={t('business.areas.import.title')}
          desc={t('business.areas.import.desc')}
        >
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 mt-4 bg-green-50 rounded-xl p-6 border border-green-100 font-medium">
            <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-green-600" /> {t('business.areas.import.items.machinery')}</li>
            <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-green-600" /> {t('business.areas.import.items.herbicides')}</li>
            <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-green-600" /> {t('business.areas.import.items.pesticides')}</li>
            <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-green-600" /> {t('business.areas.import.items.seeds')}</li>
            <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-green-600" /> {t('business.areas.import.items.fertilizers')}</li>
            <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-green-600" /> {t('business.areas.import.items.irrigation')}</li>
          </ul>
        </AccordionItem>

        <AccordionItem 
          icon={<Box className="w-8 h-8 text-blue-600" />}
          title={t('business.areas.logistics.title')}
          desc={t('business.areas.logistics.desc')}
        >
          <p className="text-gray-800 font-medium leading-relaxed mt-4 bg-blue-50 rounded-xl p-6 border border-blue-100">
            {t('business.areas.logistics.desc')}
          </p>
        </AccordionItem>

      </div>
    </div>
  );
}

// === Subcomponent: Reusable Animated Expanding Section ===
function AccordionItem({ icon, title, desc, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
        isOpen ? 'border-amber-300 shadow-2xl shadow-amber-900/10' : 'border-gray-200 shadow-sm hover:border-green-300 hover:shadow-md'
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 md:p-8 flex items-center justify-between focus:outline-none group"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className={`p-4 rounded-2xl transition-colors shrink-0 mx-auto md:mx-0 ${isOpen ? 'bg-slate-50' : 'bg-slate-50 group-hover:scale-110'}`}>
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-black text-green-950 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">{desc}</p>
          </div>
        </div>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          className={`hidden md:block shrink-0 p-3 rounded-full transition-colors ${isOpen ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-gray-400 group-hover:bg-green-100 group-hover:text-green-600'}`}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>

      {/* Smooth height animation when opening/closing */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-8 md:px-8 pt-0 border-t border-gray-100 mt-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
