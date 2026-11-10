import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Info,
  Sparkles
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from '../components/SocialIcons';
import { OFFICIAL_PHONE, OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_EMAIL, OFFICIAL_WHATSAPP_URL } from '../utils/whatsapp';

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'backend-info'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      errors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email format.';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone Number is required.';
    if (!formData.subject.trim()) errors.subject = 'Subject is required.';
    if (!formData.message.trim()) {
      errors.message = 'Message text is required.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters long.';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setStatus('error');
      setFeedbackMessage('Please resolve the highlighted form fields before submitting.');
      return;
    }

    setStatus('loading');

    // Simulate validation and provide immediate dispatch options
    setTimeout(() => {
      setStatus('backend-info');
      setFeedbackMessage(
        'Thank you, ' + formData.fullName + '! Your enquiry has been received. You can also forward it directly to our WhatsApp representative or email aminatabdulakeem66@gmail.com for instant response.'
      );
    }, 1000);
  };

  const handleWhatsAppForward = () => {
    const text = `*SPORT KIT ENQUIRY FORM SUBMISSION*\n` +
      `• Name: ${formData.fullName || 'Customer'}\n` +
      `• Email: ${formData.email || 'N/A'}\n` +
      `• Phone: ${formData.phone || 'N/A'}\n` +
      `• Subject: ${formData.subject || 'General Enquiry'}\n` +
      `• Message: ${formData.message || 'Hello, I have an enquiry about football sportswear.'}`;

    window.open(`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F1]">
      
      {/* ========================================================================= */}
      {/* A. CONTACT HERO */}
      {/* ========================================================================= */}
      <section className="relative min-h-[440px] sm:min-h-[500px] flex items-center bg-[#151515] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1920&auto=format&fit=crop"
            alt="Football Communication and Customer Service"
            className="w-full h-full object-cover object-center filter brightness-40 contrast-110 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2621]/95 via-[#103D35]/85 to-black/75" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#D2B779]/20 border border-[#D2B779]/40 text-[#D2B779] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <Phone className="w-3.5 h-3.5" />
              <span>DIRECT CLIENT SUPPORT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight font-heading leading-tight drop-shadow-md">
              GET IN TOUCH WITH <span className="text-[#D2B779]">SPORT KIT</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-emerald-100 font-medium leading-relaxed drop-shadow">
              Have questions about our football kit showcase, sizing, or customisation? Our team is always ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* B. CONTACT INFORMATION & C. CONTACT FORM */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* B. Contact Information Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[#702B3D] text-xs font-black uppercase tracking-widest block mb-1">
                REACH OUR TEAM
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#103D35] font-heading">
                OFFICIAL BUSINESS CHANNELS
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Connect with our kit specialists for sizing guidance, club availability, team jersey bulk showcase, and custom name printing enquiries.
              </p>
            </div>

            {/* Official Contact Cards with clickable links */}
            <div className="space-y-4">
              
              {/* Phone */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-[#103D35] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#103D35] text-[#D2B779] flex items-center justify-center shrink-0 shadow">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-gray-400 block">Official Telephone</span>
                  <a 
                    href={`tel:${OFFICIAL_PHONE}`}
                    className="text-lg font-black text-gray-900 hover:text-[#702B3D] transition-colors block mt-0.5"
                  >
                    {OFFICIAL_PHONE}
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Click to dial directly from your device</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-[#25D366] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-gray-400 block">WhatsApp Line</span>
                  <a 
                    href={OFFICIAL_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-black text-[#103D35] hover:text-[#25D366] transition-colors block mt-0.5"
                  >
                    {OFFICIAL_PHONE}
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Chat directly with our representative</p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-[#702B3D] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#702B3D] text-white flex items-center justify-center shrink-0 shadow">
                  <Mail className="w-6 h-6 text-[#D2B779]" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-gray-400 block">Official Email</span>
                  <a 
                    href={`mailto:${OFFICIAL_EMAIL}`} 
                    className="text-sm sm:text-base font-bold text-gray-900 hover:text-[#702B3D] transition-colors block mt-0.5 break-all"
                  >
                    {OFFICIAL_EMAIL}
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Click to compose an email</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-[#103D35] text-white p-5 rounded-2xl border border-[#D2B779]/20 shadow flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#D2B779] shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase font-bold text-emerald-200 block">Support Hours</span>
                  <p className="text-sm font-semibold mt-0.5">Monday - Saturday: 8:00 AM – 8:00 PM</p>
                  <p className="text-xs text-emerald-100/70">Sunday: WhatsApp Matchday Support</p>
                </div>
              </div>
            </div>

            {/* D. Dedicated WhatsApp Button */}
            <div className="pt-2">
              <a
                href={OFFICIAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm uppercase tracking-wider py-4 px-6 rounded-2xl shadow-xl transition-all duration-200 flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>START CONVERSATION ON WHATSAPP</span>
              </a>
            </div>

            {/* E. Social Media Links */}
            <div className="pt-4 border-t border-gray-200">
              <span className="text-xs uppercase font-bold text-gray-500 block mb-3">
                Connect Across Social Platforms
              </span>
              <div className="flex items-center gap-3">
                {[
                  { icon: InstagramIcon, name: 'Instagram', url: 'https://instagram.com' },
                  { icon: FacebookIcon, name: 'Facebook', url: 'https://facebook.com' },
                  { icon: TwitterIcon, name: 'Twitter/X', url: 'https://x.com' },
                  { icon: YoutubeIcon, name: 'YouTube', url: 'https://youtube.com' },
                ].map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-white hover:bg-[#103D35] flex items-center justify-center shadow-sm transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* C. Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl">
              <div className="mb-6">
                <span className="text-[#702B3D] text-xs font-black uppercase tracking-widest block mb-1">
                  MESSAGE DISPATCH
                </span>
                <h3 className="text-2xl font-black uppercase text-[#103D35] font-heading">
                  SEND US AN ENQUIRY
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Fill in the details below and our sportswear team will respond promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Adebayo Emmanuel"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                      formErrors.fullName 
                        ? 'border-red-400 bg-red-50 focus:ring-red-300' 
                        : 'border-gray-200 bg-[#F5F5F1] focus:ring-[#103D35]'
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. yourname@gmail.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        formErrors.email 
                          ? 'border-red-400 bg-red-50 focus:ring-red-300' 
                          : 'border-gray-200 bg-[#F5F5F1] focus:ring-[#103D35]'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 08012345678"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        formErrors.phone 
                          ? 'border-red-400 bg-red-50 focus:ring-red-300' 
                          : 'border-gray-200 bg-[#F5F5F1] focus:ring-[#103D35]'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Size Enquiry / Custom Jersey / Club Availability"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                      formErrors.subject 
                        ? 'border-red-400 bg-red-50 focus:ring-red-300' 
                        : 'border-gray-200 bg-[#F5F5F1] focus:ring-[#103D35]'
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about the club kit, sizes, or questions you have..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                      formErrors.message 
                        ? 'border-red-400 bg-red-50 focus:ring-red-300' 
                        : 'border-gray-200 bg-[#F5F5F1] focus:ring-[#103D35]'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#103D35] hover:bg-[#702B3D] disabled:opacity-60 text-white font-extrabold text-sm uppercase tracking-wider py-4 px-6 rounded-xl shadow-xl transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95"
                >
                  {status === 'loading' ? (
                    <span className="inline-block animate-spin">⚪ Validating...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#D2B779]" />
                      <span>SUBMIT ENQUIRY</span>
                    </>
                  )}
                </button>
              </form>

              {/* Feedback and WhatsApp forward options */}
              {status === 'backend-info' && (
                <div className="mt-6 p-5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Enquiry Ready for Instant Dispatch</p>
                      <p className="mt-1 text-xs leading-relaxed text-amber-800">
                        {feedbackMessage}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-amber-200 flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppForward}
                      className="bg-[#25D366] text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow hover:bg-[#20ba59] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward this Enquiry to WhatsApp Now</span>
                    </button>
                    <a
                      href={`mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
                      className="bg-white text-gray-800 border border-gray-300 font-bold text-xs px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow hover:bg-gray-50 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Native Email</span>
                    </a>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-4 p-3 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{feedbackMessage}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
