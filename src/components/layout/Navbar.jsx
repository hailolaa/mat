import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle Language Handler
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'amh' : 'en');
  };

  // Detect scroll for that premium glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.business_areas', 'Business Areas'), path: '/business-areas' },
    { name: t('nav.production', 'Production'), path: '/production' },
    { name: t('nav.team', 'Team'), path: '/team' },
    { name: t('nav.contact', 'Contact'), path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-black text-green-900 tracking-tighter">
          MATINSUN<span className="text-amber-500">.</span>
        </Link>

        {/* Desktop Center Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition-colors hover:text-green-600 ${
                location.pathname === link.path ? 'text-green-700' : 'text-gray-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side CTA & Language */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-gray-500 hover:text-green-700 transition"
          >
            <Globe className="w-5 h-5" />
            <span className="text-sm font-bold uppercase">{i18n.language}</span>
          </button>
          <Link
            to="/contact"
            className="bg-green-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-900 transition shadow-lg shadow-green-900/30 hover:shadow-green-900/50 hover:-translate-y-0.5"
          >
            {t('hero.contact_us')}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-green-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Basic Mobile Menu Base */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 font-bold text-lg"
            >
              {link.name}
            </Link>
          ))}
          <button onClick={toggleLanguage} className="flex items-center space-x-2 text-green-800 pt-4 border-t border-gray-100">
            <Globe className="w-5 h-5" />
            <span className="font-bold">Language ({i18n.language === 'en' ? 'English' : 'Amharic'})</span>
          </button>
        </div>
      )}
    </motion.nav>
  );
}
