import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Eye, 
  MessageCircle, 
  Headphones, 
  ShieldCheck
} from 'lucide-react';
import { OFFICIAL_PHONE, OFFICIAL_EMAIL } from '../utils/whatsapp';

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Premium Sportswear Collections",
      description: "Engineered from professional-grade breathable micro-mesh, featuring authentic badges, sponsor heat-transfers, and precision stitching."
    },
    {
      icon: Layers,
      title: "Multiple Football Club Options",
      description: "From Real Madrid and Barcelona to Manchester United, Arsenal, Bayern Munich, and PSG, we showcase elite clubs from the world's top leagues."
    },
    {
      icon: Eye,
      title: "Comprehensive Kit Showcase",
      description: "Explore detailed player and stadium jersey photography, colorway variations, collar cuts, and authentic technical fabric details."
    },
    {
      icon: MessageCircle,
      title: "Direct WhatsApp Enquiries",
      description: "Need custom advice? Chat one-on-one with our football kit specialists on WhatsApp (07012952924) for immediate availability and guidance."
    },
    {
      icon: Headphones,
      title: "Dedicated Customer Support",
      description: `Our team is available on phone (${OFFICIAL_PHONE}) and email (${OFFICIAL_EMAIL}) to assist with player sizes, squad printing, and delivery.`
    },
    {
      icon: ShieldCheck,
      title: "Authentic Matchday Quality",
      description: "Every featured jersey honors professional matchday standards with durable thermal heat-applied crests and athletic ergonomic tailoring."
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#702B3D] text-xs font-black uppercase tracking-widest block mb-2">
            THE SPORT KIT STANDARD
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#103D35] font-heading">
            WHY FOOTBALL LOVERS <span className="text-[#D2B779]">CHOOSE SPORT KIT</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            We live and breathe football culture. Here is why thousands of fans and athletes trust SPORT KIT for authentic club sportswear and training kits.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-[#F5F5F1] hover:bg-white border border-gray-100 hover:border-[#D2B779]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#103D35] text-[#D2B779] group-hover:bg-[#702B3D] group-hover:text-white flex items-center justify-center shadow-lg transition-colors duration-300 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-3 font-heading">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center text-xs font-bold text-[#103D35] group-hover:text-[#702B3D] transition-colors">
                  <span>Guaranteed Excellence</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
