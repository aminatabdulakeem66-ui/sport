import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle,
  MessageCircle,
} from 'lucide-react';
import { servicesData } from '../data/services';
import { CustomJerseyModal } from '../components/CustomJerseyModal';
import { OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_WHATSAPP_URL } from '../utils/whatsapp';
import { handleImageError } from '../utils/imageFallback';

export const Services = () => {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleServiceCta = (service) => {
    if (service.id === 'custom-jerseys' || service.ctaLink === 'custom-modal') {
      setIsCustomModalOpen(true);
    } else {
      navigate(service.ctaLink || '/');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F1]">
      
      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[440px] sm:min-h-[500px] flex items-center bg-[#151515] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1920&auto=format&fit=crop"
            alt="Football Kits and Services"
            onError={handleImageError}
            className="w-full h-full object-cover object-center filter brightness-40 contrast-110 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2621]/95 via-[#103D35]/85 to-black/75" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#D2B779]/20 border border-[#D2B779]/40 text-[#D2B779] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WHAT WE SHOWCASE & DELIVER</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight font-heading leading-tight drop-shadow-md">
              OUR <span className="text-[#D2B779]">SERVICES</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-emerald-100 font-medium leading-relaxed drop-shadow">
              From authentic football jerseys and high-octane training kits to custom name printing, home & away collections, club merchandise, and match accessories.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SERVICES SHOWCASE (All 6 core services) */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <div 
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column: 5 cols */}
              <div className={`lg:col-span-5 relative ${isEven ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Service Tag */}
                  <span className="absolute top-3.5 left-3.5 bg-[#103D35] text-[#D2B779] text-xs font-extrabold uppercase px-3 py-1 rounded-md border border-[#D2B779]/30 shadow">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Text Description: 7 cols */}
              <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                <div>
                  <span className="text-[#702B3D] text-xs font-black uppercase tracking-widest block mb-1">
                    {service.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#103D35] font-heading">
                    {service.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                {service.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#103D35] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Buttons: View / Customise & WhatsApp Enquiry */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleServiceCta(service)}
                    className="bg-[#103D35] hover:bg-[#702B3D] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#D2B779]" />
                  </button>

                  <a
                    href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello SPORT KIT! I would like to make an enquiry regarding your ${service.title} service.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs px-5 py-3.5 rounded-xl shadow transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Custom Jersey Studio Modal */}
      <CustomJerseyModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      />
    </div>
  );
};
