import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Contact() {
  const { t } = useTranslation();
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Bulk Order / Export Inquiry',
    message: ''
  });

  // UI State
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});
  const [activeInput, setActiveInput] = useState(null); // Used for cool focus effects!

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Basic Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('contact.validation.required', 'Required');
    if (!formData.email.trim()) {
      newErrors.email = t('contact.validation.required', 'Required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.validation.invalid_email', 'Invalid Email');
    }
    if (!formData.message.trim()) newErrors.message = t('contact.validation.required', 'Required');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Matinsun Team'
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Bulk Order / Export Inquiry',
        message: ''
      });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  // Safe split for title coloring when translated
  const titleText = t('contact.title', 'Contact Us');
  const titleWords = titleText.split(' ');
  const titleFirst = titleWords[0] || 'Contact';
  const titleRest = titleWords.slice(1).join(' ') || '';

  return (
    <div className="w-full bg-slate-50 min-h-screen overflow-x-hidden">
      
      {/* SECTION 1: Immersive Hero */}
      <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 bg-green-950 overflow-hidden min-h-[50vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500 rounded-full blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/2" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        </div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-4xl">
          <span className="inline-block py-1.5 px-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm tracking-widest uppercase mb-6 border border-amber-500/30 backdrop-blur-md">
            {t('nav.contact', 'Contact')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
            {titleFirst} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 drop-shadow-lg">{titleRest}</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100/90 font-light max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* SECTION 2: Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Info & WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl font-black text-green-950 mb-8 flex flex-col">
                {t('contact.details_title')}
                <span className="w-20 h-1.5 bg-amber-500 rounded-full mt-4" />
              </h2>
              
              <ul className="space-y-6">
                <motion.li whileHover={{ x: 10 }} className="flex items-center space-x-6 p-6 bg-white rounded-[2rem] shadow-sm border border-gray-100 transition-transform">
                  <div className="p-5 bg-amber-50 rounded-2xl shrink-0"><MapPin className="w-8 h-8 text-amber-500" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1">{t('contact.hq_title')}</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">{t('contact.hq_address')}</p>
                  </div>
                </motion.li>
                
                <motion.li whileHover={{ x: 10 }} className="flex items-center space-x-6 p-6 bg-white rounded-[2rem] shadow-sm border border-gray-100 transition-transform">
                  <div className="p-5 bg-amber-50 rounded-2xl shrink-0"><Phone className="w-8 h-8 text-amber-500" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1">{t('contact.phone_title')}</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">+251 943 336 017 <br/> +251 911 638 057</p>
                  </div>
                </motion.li>
                
                <motion.li whileHover={{ x: 10 }} className="flex items-center space-x-6 p-6 bg-white rounded-[2rem] shadow-sm border border-gray-100 transition-transform">
                  <div className="p-5 bg-amber-50 rounded-2xl shrink-0"><Mail className="w-8 h-8 text-amber-500" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1">{t('contact.email_title')}</h4>
                    <a href="mailto:matinsunone@gmail.com" className="text-gray-500 font-medium hover:text-amber-600 transition-colors">matinsunone@gmail.com</a>
                  </div>
                </motion.li>
              </ul>
            </div>

            {/* Huge WhatsApp CTA */}
            <a 
              href="https://wa.me/251943336017" 
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-[#25D366] text-white p-10 rounded-[2.5rem] shadow-xl shadow-[#25D366]/20 flex flex-col items-center justify-center hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="bg-white/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="font-black text-3xl mb-1">{t('contact.whatsapp_cta')}</h4>
                  <p className="text-green-50 font-medium text-lg">{t('contact.whatsapp_subtitle')}</p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Form Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-green-500/20 rounded-[3rem] blur-2xl transform translate-y-4" />
            
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-14 rounded-[3rem] shadow-2xl shadow-green-950/5 relative z-10 border border-white">
              <h2 className="text-4xl font-black text-green-950 mb-8">{t('contact.form_title')}</h2>
              
              {/* Feedback Messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }} 
                    animate={{ opacity: 1, height: 'auto', marginBottom: 24 }} 
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-green-50 border border-green-200 text-green-800 rounded-2xl flex items-center gap-4 shadow-sm">
                      <div className="bg-green-100 p-2 rounded-full"><CheckCircle className="w-6 h-6 text-green-600" /></div>
                      <span className="font-bold text-lg">{t('contact.success_message', 'Message sent successfully!')}</span>
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }} 
                    animate={{ opacity: 1, height: 'auto', marginBottom: 24 }} 
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-red-50 border border-red-200 text-red-800 rounded-2xl flex items-center gap-4 shadow-sm">
                      <div className="bg-red-100 p-2 rounded-full"><AlertCircle className="w-6 h-6 text-red-600" /></div>
                      <span className="font-bold text-lg">{t('contact.error_message', 'Failed to send message.')}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-bold mb-2 transition-colors ${activeInput === 'name' ? 'text-amber-600' : 'text-gray-700'}`}>{t('contact.full_name')}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setActiveInput('name')}
                    onBlur={() => setActiveInput(null)}
                    className={`w-full px-6 py-4 rounded-2xl border-2 ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-100 bg-slate-50'} focus:border-amber-500 focus:bg-white outline-none transition-all duration-300 font-medium text-gray-800`} 
                    placeholder={t('contact.full_name_placeholder', 'John Doe')} 
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-2 font-bold flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.name}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-bold mb-2 transition-colors ${activeInput === 'email' ? 'text-amber-600' : 'text-gray-700'}`}>{t('contact.email')}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveInput('email')}
                      onBlur={() => setActiveInput(null)}
                      className={`w-full px-6 py-4 rounded-2xl border-2 ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-100 bg-slate-50'} focus:border-amber-500 focus:bg-white outline-none transition-all duration-300 font-medium text-gray-800`} 
                      placeholder={t('contact.email_placeholder', 'john@example.com')} 
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2 font-bold flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.email}</p>}
                  </div>
                  <div>
                    <label className={`block text-sm font-bold mb-2 transition-colors ${activeInput === 'phone' ? 'text-amber-600' : 'text-gray-700'}`}>{t('contact.phone')}</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setActiveInput('phone')}
                      onBlur={() => setActiveInput(null)}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 bg-slate-50 focus:border-amber-500 focus:bg-white outline-none transition-all duration-300 font-medium text-gray-800" 
                      placeholder={t('contact.phone_placeholder', '+1 234 567 890')} 
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-bold mb-2 transition-colors ${activeInput === 'subject' ? 'text-amber-600' : 'text-gray-700'}`}>{t('contact.subject')}</label>
                  <div className="relative">
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setActiveInput('subject')}
                      onBlur={() => setActiveInput(null)}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 bg-slate-50 focus:border-amber-500 focus:bg-white outline-none transition-all duration-300 font-bold text-green-950 appearance-none cursor-pointer"
                    >
                      <option value="Bulk Order / Export Inquiry">{t('contact.subject_options.bulk', 'Bulk Order / Export Inquiry')}</option>
                      <option value="Local Distribution Status">{t('contact.subject_options.local', 'Local Distribution Status')}</option>
                      <option value="General Support">{t('contact.subject_options.support', 'General Support')}</option>
                      <option value="Careers">{t('contact.subject_options.careers', 'Careers')}</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <div className="w-3 h-3 border-b-2 border-r-2 border-amber-500 transform rotate-45" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-bold mb-2 transition-colors ${activeInput === 'message' ? 'text-amber-600' : 'text-gray-700'}`}>{t('contact.message')}</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveInput('message')}
                    onBlur={() => setActiveInput(null)}
                    rows="5" 
                    className={`w-full px-6 py-4 rounded-2xl border-2 ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-100 bg-slate-50'} focus:border-amber-500 focus:bg-white outline-none transition-all duration-300 resize-none font-medium text-gray-800`} 
                    placeholder={t('contact.message_placeholder', 'How can we help you?')}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-2 font-bold flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-green-950 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-green-900 transition-all duration-300 shadow-xl shadow-green-950/20 active:scale-[0.98] text-lg mt-8 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      {t('contact.sending', 'Sending...')}
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      {t('contact.send_button', 'Send Message')}
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
