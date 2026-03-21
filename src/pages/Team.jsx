import { motion } from 'framer-motion';
import { UserCircle, Briefcase, Shield, TrendingUp, Truck, Megaphone, Laptop, Users, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Team() {
  const { t } = useTranslation();
  
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-32">
      {/* Premium Header */}
      <div className="bg-green-950 text-white py-24 px-6 relative overflow-hidden text-center border-b-[6px] border-amber-500">
        <h1 className="text-4xl md:text-6xl font-black mb-4 relative z-10">
          {t('team.title_1')}
          <span className="text-amber-500">{t('team.title_2')}</span>
          {t('team.title_3')}
        </h1>
        <p className="text-green-200 text-lg max-w-2xl mx-auto font-light relative z-10">
          {t('team.subtitle')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
        
        {/* Tier 1: Founder */}
        <div className="flex justify-center mb-16 relative">
          <TeamCard 
            role={t('team.roles.founder')} 
            name={t('team.roles.board')} 
            icon={<UserCircle className="w-10 h-10 text-amber-500" />}
            featured={true}
          />
          {/* Vertical Connector Line down */}
          <div className="hidden md:flex absolute w-px h-16 bg-gradient-to-b from-amber-500 to-green-200 -bottom-16 left-1/2 -translate-x-1/2 z-0 flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-amber-500 ring-4 ring-amber-500/20" />
          </div>
        </div>

        {/* Tier 2: General & Deputy Management */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16 relative">
          {/* Horizontal Connector Line connecting the two managers on Desktop */}
          <div className="hidden md:flex absolute h-px bg-green-200 top-0 left-[25%] right-[25%] z-0 items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-green-200" />
          </div>
          
          <TeamCard role={t('team.roles.general_manager')} name={t('team.roles.executive')} icon={<Briefcase className="w-8 h-8 text-green-700" />} />
          <TeamCard role={t('team.roles.deputy_manager')} name={t('team.roles.operations_hq')} icon={<Users className="w-8 h-8 text-green-700" />} />
        </div>

        {/* Tier 3: Department Heads */}
        <div className="text-center mb-12 mt-24">
          <h2 className="text-3xl font-black text-green-950 mb-4 border-b-4 border-amber-500 inline-block pb-2">{t('team.divisions_title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative">
          <TeamCard role={t('team.roles.ops_supervisors')} icon={<Shield className="w-7 h-7 text-blue-600" />} />
          <TeamCard role={t('team.roles.quality_control')} icon={<CheckCircle className="w-7 h-7 text-teal-600" />} />
          <TeamCard role={t('team.roles.sales_marketing')} icon={<TrendingUp className="w-7 h-7 text-amber-600" />} />
          <TeamCard role={t('team.roles.digital_marketing')} icon={<Laptop className="w-7 h-7 text-purple-600" />} />
          <TeamCard role={t('team.roles.logistics')} icon={<Truck className="w-7 h-7 text-orange-600" />} />
          <TeamCard role={t('team.roles.support')} icon={<Megaphone className="w-7 h-7 text-pink-600" />} />
        </div>

      </div>
    </div>
  );
}

// === Subcomponent: Reusable Team Card ===
function TeamCard({ role, name, icon, featured }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg relative z-10 hover:-translate-y-2 transition-transform duration-300 border-t-[6px] ${
        featured ? 'border-amber-400 shadow-amber-900/10 scale-105' : 'border-green-600 border-x border-b border-gray-100 hover:border-b-green-300'
      }`}
    >
      <div className={`p-4 rounded-full mb-4 shadow-inner ${featured ? 'bg-amber-50' : 'bg-green-50'}`}>
        {icon}
      </div>
      <h3 className={`font-black mb-1 ${featured ? 'text-2xl text-green-950' : 'text-xl text-gray-900'}`}>{role}</h3>
      {name && <p className="text-gray-500 font-medium">{name}</p>}
    </motion.div>
  );
}
