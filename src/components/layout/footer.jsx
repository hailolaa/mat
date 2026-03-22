import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-green-950 text-white pt-16 pb-8 border-t-[6px] border-amber-500 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Intro */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-black text-white tracking-tighter mb-4 block">
              MATINSUN<span className="text-amber-500">.</span>
            </Link>
            <p className="text-green-200 text-sm leading-relaxed mb-6">
              {t('footer.intro')}
            </p>
            <div className="flex space-x-4 text-green-400">
              <a href="#" className="hover:text-amber-400 transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-amber-400 transition"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-amber-400 transition"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-amber-500 mb-4">{t('footer.links_title')}</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-green-300 hover:text-white transition text-sm">{t('nav.about')}</Link></li>
              <li><Link to="/products" className="text-green-300 hover:text-white transition text-sm">{t('nav.products')}</Link></li>
              <li><Link to="/business-areas" className="text-green-300 hover:text-white transition text-sm">{t('nav.business_areas', 'Business Areas')}</Link></li>
              <li><Link to="/team" className="text-green-300 hover:text-white transition text-sm">{t('nav.team')}</Link></li>
            </ul>
          </div>

          {/* Business Areas */}
          <div>
            <h3 className="text-lg font-bold text-amber-500 mb-4">{t('footer.business_title')}</h3>
            <ul className="space-y-3">
              <li><Link to="/business-areas" className="text-green-300 text-sm hover:text-white transition block">{t('footer.areas.export')}</Link></li>
              <li><Link to="/business-areas" className="text-green-300 text-sm hover:text-white transition block">{t('footer.areas.import')}</Link></li>
              <li><Link to="/business-areas" className="text-green-300 text-sm hover:text-white transition block">{t('footer.areas.logistics')}</Link></li>
              <li><Link to="/business-areas" className="text-green-300 text-sm hover:text-white transition block">{t('footer.areas.manufacturing')}</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-amber-500 mb-4">{t('footer.contact_title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-green-300 text-sm">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center space-x-3 text-green-300 text-sm">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>+251 943 336 017 <br/> +251 911 638 057</span>
              </li>
              <li className="flex items-center space-x-3 text-green-300 text-sm">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span>matinsunone@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-green-900 border-opacity-50 text-center flex flex-col items-center">
          <p className="text-green-400 text-sm">
            © {new Date().getFullYear()} Matinsun (Baltina PLC). {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
