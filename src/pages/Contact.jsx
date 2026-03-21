import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

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

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Basic Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('contact.validation.required');
    if (!formData.email.trim()) {
      newErrors.email = t('contact.validation.required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.validation.invalid_email');
    }
    if (!formData.message.trim()) newErrors.message = t('contact.validation.required');
    
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

    try{
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
    }catch(error){
      console.error('Submission Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-32">
      {/* Premium Header */}
      <div className="bg-green-950 text-white py-24 px-6 relative overflow-hidden text-center border-b-[6px] border-amber-500">
        <h1 className="text-4xl md:text-6xl font-black mb-4 relative z-10">
          {t('contact.title').split(' ')[0]} <span className="text-amber-500">{t('contact.title').split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="text-green-200 text-lg max-w-2xl mx-auto font-light relative z-10">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info & WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-black text-green-950 mb-8 border-b-2 border-green-200 inline-block pb-2">
                {t('contact.details_title')}
              </h2>
              <ul className="space-y-6">
                <li className="flex items-center space-x-6">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 shrink-0"><MapPin className="w-6 h-6 text-amber-500" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{t('contact.hq_title')}</h4>
                    <p className="text-gray-600 font-medium">{t('contact.hq_address')}</p>
                  </div>
                </li>
                <li className="flex items-center space-x-6">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 shrink-0"><Phone className="w-6 h-6 text-amber-500" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{t('contact.phone_title')}</h4>
                    <p className="text-gray-600 font-medium">+251 943 336 017 <br/> +251 911 638 057</p>
                  </div>
                </li>
                <li className="flex items-center space-x-6">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 shrink-0"><Mail className="w-6 h-6 text-amber-500" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{t('contact.email_title')}</h4>
                    <p className="text-gray-600 font-medium">matinsunone@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Huge WhatsApp CTA */}
            <a 
              href="https://wa.me/251943336017" 
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-[#25D366] text-white p-8 rounded-3xl shadow-xl shadow-[#25D366]/20 flex flex-col items-center justify-center hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <div className="relative z-10 flex items-center gap-4">
                <MessageCircle className="w-12 h-12" />
                <div className="text-left">
                  <h4 className="font-black text-2xl">{t('contact.whatsapp_cta')}</h4>
                  <p className="text-green-50 font-semibold">{t('contact.whatsapp_subtitle')}</p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 shadow-green-900/5 relative overflow-hidden">
              <h2 className="text-3xl font-black text-green-950 mb-8">{t('contact.form_title')}</h2>
              
              {/* Feedback Messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">{t('contact.success_message')}</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">{t('contact.error_message')}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact.full_name')}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-slate-50'} focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition font-medium`} 
                    placeholder={t('contact.full_name_placeholder')} 
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact.email')}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-slate-50'} focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition font-medium`} 
                      placeholder={t('contact.email_placeholder')} 
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact.phone')}</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-slate-50 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition font-medium" 
                      placeholder={t('contact.phone_placeholder')} 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact.subject')}</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-slate-50 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition font-medium text-gray-600"
                  >
                    <option value="Bulk Order / Export Inquiry">{t('contact.subject_options.bulk')}</option>
                    <option value="Local Distribution Status">{t('contact.subject_options.local')}</option>
                    <option value="General Support">{t('contact.subject_options.support')}</option>
                    <option value="Careers">{t('contact.subject_options.careers')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t('contact.message')}</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5" 
                    className={`w-full px-5 py-4 rounded-xl border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-slate-50'} focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition resize-none font-medium`} 
                    placeholder={t('contact.message_placeholder')}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1 font-bold">{errors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-green-800 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-2 hover:bg-green-900 transition shadow-lg shadow-green-900/20 active:scale-[0.98] text-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      {t('contact.send_button')}
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
