import { motion } from 'framer-motion';
import { UserCircle, Briefcase, Shield, TrendingUp, Truck, Megaphone, Laptop, Users, CheckCircle, ArrowRight, Award, Globe, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Team() {
  const { t } = useTranslation();
  
  return (
    <div className="w-full bg-slate-50 min-h-screen overflow-x-hidden">
      
      {/* SECTION 1: Immersive Hero */}
      <section className="relative pt-32 pb-32 bg-green-950 overflow-hidden min-h-[55vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" 
            alt="Our Team" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-900/80 to-transparent" />
        </div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-4xl">
          <span className="inline-block py-1.5 px-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm tracking-widest uppercase mb-6 border border-amber-500/30 backdrop-blur-md">
            {t('team.badge', 'Our People')}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
            {t('team.title_1')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 drop-shadow-lg mx-3">
              {t('team.title_2')}
            </span>
            {t('team.title_3')}
          </h1>
          <p className="text-xl md:text-2xl text-green-100/90 font-light max-w-2xl mx-auto">
            {t('team.subtitle', 'A dedicated group of agricultural experts, logistics masters, and visionaries driving Ethiopian excellence.')}
          </p>
        </motion.div>
      </section>

      {/* SECTION 2: Executive Leadership */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-4">{t('team.leadership_title', 'Executive Leadership')}</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
          </div>

          {/* Tier 1: Founder */}
          <div className="flex justify-center mb-12 md:mb-20 relative">
            <TeamCard 
              role={t('team.roles.founder')} 
              name={t('team.roles.board')} 
              icon={<Award className="w-12 h-12 text-amber-500" />}
              featured={true}
              delay={0.1}
            />
            {/* Vertical Connector Line down */}
            <div className="hidden md:flex absolute w-px h-20 bg-gradient-to-b from-amber-500 to-green-200 -bottom-20 left-1/2 -translate-x-1/2 z-0 flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-amber-500 ring-4 ring-amber-500/20" />
            </div>
          </div>

          {/* Tier 2: General & Deputy Management */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto relative">
            {/* Horizontal Connector Line connecting the two managers on Desktop */}
            <div className="hidden md:flex absolute h-px bg-green-200 top-0 left-[25%] right-[25%] z-0 items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-green-200" />
            </div>
            
            <TeamCard 
              role={t('team.roles.general_manager')} 
              name={t('team.roles.executive')} 
              icon={<Briefcase className="w-8 h-8 text-green-700" />} 
              delay={0.2} 
            />
            <TeamCard 
              role={t('team.roles.deputy_manager')} 
              name={t('team.roles.operations_hq')} 
              icon={<Users className="w-8 h-8 text-green-700" />} 
              delay={0.3} 
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: Department Heads */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-black text-green-950 mb-4">{t('team.divisions_title')}</h2>
              <p className="text-lg text-gray-500 font-light">{t('team.divisions_subtitle', 'The specialized experts ensuring quality at every phase.')}</p>
            </div>
            <div className="hidden md:block w-32 h-1 bg-amber-500 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <DeptCard role={t('team.roles.ops_supervisors')} icon={<Shield className="w-7 h-7 text-blue-600" />} color="bg-blue-50" border="hover:border-blue-200" delay={0.1} />
            <DeptCard role={t('team.roles.quality_control')} icon={<CheckCircle className="w-7 h-7 text-teal-600" />} color="bg-teal-50" border="hover:border-teal-200" delay={0.2} />
            <DeptCard role={t('team.roles.sales_marketing')} icon={<TrendingUp className="w-7 h-7 text-amber-600" />} color="bg-amber-50" border="hover:border-amber-200" delay={0.3} />
            <DeptCard role={t('team.roles.digital_marketing')} icon={<Laptop className="w-7 h-7 text-purple-600" />} color="bg-purple-50" border="hover:border-purple-200" delay={0.4} />
            <DeptCard role={t('team.roles.logistics')} icon={<Truck className="w-7 h-7 text-orange-600" />} color="bg-orange-50" border="hover:border-orange-200" delay={0.5} />
            <DeptCard role={t('team.roles.support')} icon={<Megaphone className="w-7 h-7 text-pink-600" />} color="bg-pink-50" border="hover:border-pink-200" delay={0.6} />
          </div>
        </div>
      </section>

      {/* SECTION 4: Our Culture */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative rounded-[3rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px]"
            >
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070" className="w-full h-full object-cover" alt="Team Culture" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 to-transparent" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 text-center md:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-6 leading-tight">
                {t('team.culture.title', 'Driven by Passion. United by Excellence.')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-10">
                {t('team.culture.desc', 'At Matinsun, we believe that the quality of our products is a direct reflection of the people behind them. Our culture is built on continuous learning, unwavering integrity, and a shared mission to represent Ethiopia on the world stage.')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-950 text-lg">{t('team.culture.points.global')}</h4>
                    <p className="text-gray-500 text-sm">{t('team.culture.points.global_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-950 text-lg">{t('team.culture.points.community')}</h4>
                    <p className="text-gray-500 text-sm">{t('team.culture.points.community_desc')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-16 lg:py-24 bg-green-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-500 rounded-full blur-[150px] opacity-20 -translate-y-1/2 -translate-x-1/3" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            {t('team.cta.title', 'Work With the Best')}
          </h2>
          <p className="text-xl md:text-2xl text-green-200 font-light mb-12">
            {t('team.cta.desc', 'Get in touch with our team of experts to discuss bulk orders, consulting, or partnerships.')}
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-amber-500 text-green-950 font-black px-10 py-5 rounded-full text-lg hover:bg-amber-400 transition-all shadow-xl hover:-translate-y-1 shadow-amber-500/20 group"
          >
            {t('nav.contact')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}

// === Subcomponent: Reusable Executive Team Card ===
function TeamCard({ role, name, icon, featured, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      className={`bg-white rounded-[2rem] p-10 flex flex-col items-center text-center relative z-10 transition-all duration-300 border-t-[8px] ${
        featured ? 'border-amber-400 shadow-2xl shadow-green-900/10 scale-105 md:w-[450px]' : 'border-green-600 shadow-xl shadow-gray-200 border-x border-b border-gray-100/50 hover:-translate-y-2'
      }`}
    >
      <div className={`p-6 rounded-3xl mb-6 shadow-sm ${featured ? 'bg-gradient-to-br from-amber-50 to-amber-100' : 'bg-gradient-to-br from-green-50 to-green-100'}`}>
        {icon}
      </div>
      <h3 className={`font-black mb-2 ${featured ? 'text-3xl text-green-950' : 'text-2xl text-gray-900'}`}>{role}</h3>
      {name && <p className={`font-medium ${featured ? 'text-amber-600 text-lg' : 'text-gray-500'}`}>{name}</p>}
    </motion.div>
  );
}

// === Subcomponent: Reusable Department Card ===
function DeptCard({ role, icon, color, border, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className={`bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${border} group`}
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${color}`}>
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 text-lg leading-tight">{role}</h3>
    </motion.div>
  );
}
