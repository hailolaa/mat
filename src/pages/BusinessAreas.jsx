import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Globe2, 
  Truck, 
  Settings, 
  Sprout, 
  TreePine, 
  Lightbulb, 
  CheckCircle2,
  ArrowRight,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { useRef, useState } from 'react';


// A highly premium, image-based alternating section
const ServiceSection = ({ title, desc, points, icon: Icon, image, reverse, delay }) => {
  const { t } = useTranslation();
  // State to track if the extra points are visible
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Logic to determine which points to show
  const hasMorePoints = points.length > 4;
  const visiblePoints = isExpanded ? points : points.slice(0, 4);
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-0 py-12 lg:py-24 relative`}>
      
      {/* Visual / Image Side */}
      <motion.div 
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: delay }}
        className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group bg-gradient-to-br from-green-900 to-green-950"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60 mix-blend-overlay"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-900/20 to-transparent" />
        
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500 z-20">
          <Icon className="w-12 h-12 text-amber-400" />
        </div>
      </motion.div>
      {/* Content Side with Negative Margin Overlapping */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: delay + 0.3 }}
        className={`w-full lg:w-1/2 z-10 flex flex-col justify-center ${reverse ? 'lg:-mr-16 lg:pr-16' : 'lg:-ml-16 lg:pl-16'}`}
      >
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100/50 backdrop-blur-sm relative pointer-events-auto">
          <h2 className="text-3xl md:text-5xl font-black text-green-950 tracking-tight leading-tight mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
            {desc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence initial={false}>
              {visiblePoints.map((point, idx) => (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  key={point} // Use the point text as the key for smoother animation
                  className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-gray-100 hover:border-amber-200 hover:bg-amber-50 transition-colors overflow-hidden"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-sm leading-snug">{point}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Dropdown Toggle Button */}
          {hasMorePoints && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors mx-auto md:mx-0 group"
            >
            {isExpanded ? t('business.show_less', 'Show Less') : t('business.show_more', { count: points.length - 4 })}
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            ) : (
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            )}
          </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};


export default function BusinessAreas() {
  const { t } = useTranslation();
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Data mapping with stunning Unsplash imagery
  const services = [
    {
      id: 'export',
      title: t('business.areas.export.title'),
      desc: t('business.areas.export.desc'),
      icon: Globe2,
      image: "https://images.unsplash.com/photo-1495908333432-0edec01f5011?q=80&w=2070", // Coffee beans / export
      points: t('business.areas.export.points', { returnObjects: true }) || []
    },
    {
      id: 'import',
      title: t('business.areas.import.title'),
      desc: t('business.areas.import.desc'),
      icon: Truck,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070", // Tractors / modern farming
      points: t('business.areas.import.points', { returnObjects: true }) || []
    },
    {
      id: 'manufacturing',
      title: t('business.areas.manufacturing.title'),
      desc: t('business.areas.manufacturing.desc'),
      icon: Settings,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070", // Tech / Factory
      points: t('business.areas.manufacturing.points', { returnObjects: true }) || []
    },
    {
      id: 'logistics',
      title: t('business.areas.logistics.title'),
      desc: t('business.areas.logistics.desc'),
      icon: Sprout,
      image: "https://images.unsplash.com/photo-1586528116311-ad8ed716d40a?q=80&w=2070", // Warehousing / Trucks
      points: t('business.areas.logistics.points', { returnObjects: true }) || []
    },
    {
      id: 'landscaping',
      title: t('business.landscaping.title'),
      desc: t('business.landscaping.desc'),
      icon: TreePine,
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2074", // Beautiful landscaping
      points: t('business.landscaping.points', { returnObjects: true }) || []
    },
    {
      id: 'consulting',
      title: t('business.consulting.title'),
      desc: t('business.consulting.desc'),
      icon: Lightbulb,
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070", // Agricultural consulting
      points: t('business.consulting.points', { returnObjects: true }) || []
    }
  ];



  return (
    <div className="flex flex-col w-full bg-white overflow-x-hidden">
      {/* Parallax Premium Header */}
      <section ref={headerRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-green-950">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[100px] opacity-20 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green-500 rounded-full blur-[120px] opacity-20" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold text-sm tracking-widest uppercase mb-6 backdrop-blur-sm">
              {t('business.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6">
              {t('business.title_1')}<span className="text-amber-500 block sm:inline">{t('business.title_2')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100/90 font-light leading-relaxed">
              {t('business.subtitle')}
            </p>
          </motion.div>
        </div>
        
        {/* Bottom Curve */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,121.32,201.2,118.4,242.6,116.71,283.69,104.91,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Main Dynamic Services Area */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {services.map((service, index) => (
            <ServiceSection 
              key={service.id}
              title={service.title}
              desc={service.desc}
              points={service.points}
              icon={service.icon}
              reverse={index % 2 !== 0} // Alternates left and right!
              delay={0.1}
            />
          ))}
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-16 lg:py-24 bg-amber-500 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-6 tracking-tight">{t('business.consult_cta.title')}</h2>
           <p className="text-xl text-green-900/80 mb-10 font-medium">{t('business.consult_cta.desc')}</p>
           <Link to="/contact" className="inline-flex items-center gap-3 bg-green-950 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-900 transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-950/20 group">
             {t('business.consult_cta.button')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </Link>
         </div>
      </section>
    </div>
  );
}
