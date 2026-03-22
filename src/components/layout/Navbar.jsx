import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, Sun, Moon } from 'lucide-react';


export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
  };

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
    { name: t('nav.business_areas'), path: '/business-areas' },
    { name: t('nav.production'), path: '/production' },
    { name: t('nav.team'), path: '/team' },
    { name: t('nav.contact'), path: '/contact' },
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
          <div className="hidden lg:flex relative items-center space-x-4" ref={dropdownRef}>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shadow-sm focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="group flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-full transition-all duration-300 border border-slate-200"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full overflow-hidden shadow-sm">
                {i18n.language.startsWith('am') ? '🇪🇹' : '🇺🇸'}
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-green-900 group-hover:text-green-700">
                {i18n.language.startsWith('am') ? 'AMH' : 'ENG'}
              </span>
            </button>
            {/* Dropdown Menu */}
            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 bg-white rounded-xl py-2 shadow-xl border border-gray-100"
                >
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`w-full text-left px-4 py-2 text-sm font-semibold hover:bg-slate-50 transition flex items-center gap-3 ${i18n.language.startsWith('en') ? 'text-amber-500 bg-amber-50/50' : 'text-gray-700'}`}
                  >
                    <span className="text-lg">🇺🇸</span> English
                  </button>
                  <button
                    onClick={() => changeLanguage('amh')}
                    className={`w-full text-left px-4 py-2 text-sm font-semibold hover:bg-slate-50 transition flex items-center gap-3 ${i18n.language.startsWith('am') ? 'text-amber-500 bg-amber-50/50' : 'text-gray-700'}`}
                  >
                    <span className="text-lg">🇪🇹</span> አማርኛ
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            <Link
              to="/contact"
              className="bg-green-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-900 transition shadow-lg shadow-green-900/30 hover:shadow-green-900/50 hover:-translate-y-0.5"
            >
              {t('nav.contact')}
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
          
          <button
            onClick={() => { setIsDarkMode(!isDarkMode); setMobileMenuOpen(false); }}
            className="flex items-center space-x-3 text-gray-800 font-bold text-lg text-left"
          >
            {isDarkMode ? <Sun size={20} className="text-amber-500" /> : <Moon size={20} className="text-green-800" />}
            <span>{isDarkMode ? t('nav.light_mode') : t('nav.dark_mode')}</span>
          </button>

          <button 
            onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }} 
            className="flex items-center space-x-3 text-gray-800 font-bold text-lg text-left"
          >
            <span className="text-xl leading-none">{i18n.language.startsWith('en') ? '🇪🇹' : '🇺🇸'}</span>
            <span>{i18n.language.startsWith('en') ? t('nav.switch_to_amh') : t('nav.switch_to_en')}</span>
          </button>
        </div>
      )}
    </motion.nav>
  );
}
