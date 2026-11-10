import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Target, 
  Eye, 
  Award, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Users, 
  CheckCircle2,
  Globe2,
  Phone,
  MessageCircle
} from 'lucide-react';
import { OFFICIAL_PHONE, OFFICIAL_WHATSAPP_URL } from '../utils/whatsapp';
import { handleImageError } from '../utils/imageFallback';

export const About = () => {
  const values = [
    {
      title: "Quality",
      description: "We showcase authentic micro-mesh, durable thermal heat-pressed crests, and ergonomic stitching built to endure 90 minutes of athletic intensity.",
      icon: Award,
    },
    {
      title: "Passion",
      description: "Football is more than 22 players chasing a ball; it is community, pride, tears, and euphoria. Every kit we showcase honors this rich tradition.",
      icon: Heart,
    },
    {
      title: "Customer Satisfaction",
      description: "From hassle-free sizing advice to personal WhatsApp consultations and prompt replies, our customers sit at the very heart of SPORT KIT.",
      icon: Users,
    },
    {
      title: "Style",
      description: "Merging authentic pitch apparel with modern streetwear aesthetics. Wear your club crest to the stadium, the gym, or the city streets with pride.",
      icon: Sparkles,
    },
    {
      title: "Reliability",
      description: "What you see is what you receive. Precise descriptions, accurate kit photography, verified size charts, and trustworthy communication.",
      icon: ShieldCheck,
    },
    {
      title: "Commitment",
      description: "Dedicated to continuous expansion of club options, retro archives, African football collections, and world-class player editions.",
      icon: Target,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F1]">
      
      {/* ========================================================================= */}
      {/* A. ABOUT US HERO */}
      {/* ========================================================================= */}
      <section className="relative min-h-[460px] sm:min-h-[520px] flex items-center bg-[#151515] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1920&auto=format&fit=crop"
            alt="Football Sportswear and Players"
            onError={handleImageError}
            className="w-full h-full object-cover object-center filter brightness-40 contrast-115 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2621]/95 via-[#103D35]/85 to-black/75" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#D2B779]/20 border border-[#D2B779]/40 text-[#D2B779] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>THE BRAND HERITAGE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight font-heading leading-tight drop-shadow-md">
              ABOUT <span className="text-[#D2B779]">SPORT KIT</span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-emerald-100 font-semibold tracking-wide drop-shadow">
              Driven by football. Inspired by passion. Designed for the game.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* B. WHO WE ARE & C. BRAND STORY */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Who We Are */}
            <div>
              <span className="text-[#702B3D] text-xs font-black uppercase tracking-widest block mb-2">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#103D35] font-heading">
                A PREMIER FOOTBALL DESTINATION <br className="hidden sm:inline" />
                <span className="text-[#D2B779]">FOR FANS & ATHLETES</span>
              </h2>
              <p className="mt-4 text-base text-gray-700 leading-relaxed">
                SPORT KIT is Nigeria's premier football sportswear showcase destination featuring official match jerseys, high-performance training kits, club collections, and football accessories for football lovers and sports enthusiasts across the continent.
              </p>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                We believe that slipping on a football shirt is a sacred ritual. It represents allegiance, identity, unforgettable European nights, weekend derby bragging rights, and athletic aspirations. We bridge the gap between world football hubs and passionate supporters in Nigeria.
              </p>
            </div>

            {/* Brand Story */}
            <div className="pt-6 border-t border-gray-200">
              <span className="text-[#702B3D] text-xs font-black uppercase tracking-widest block mb-2">
                BRAND STORY
              </span>
              <h3 className="text-2xl font-black uppercase text-[#103D35] font-heading">
                BORN FROM PURE FOOTBALL PASSION
              </h3>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                SPORT KIT started with a simple yet frustrating realization: authentic, high-grade football jerseys and training tracksuits were often elusive, misrepresented, or delivered with sub-par quality. Football supporters deserve the exact same premium standards that players wear when they walk out of the tunnel at the Santiago Bernabéu, San Siro, or Old Trafford.
              </p>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                We established direct relationships with certified sports manufacturers, invested in industrial name-and-number printing technology, and built a dedicated concierge showcase experience with instant WhatsApp enquiries and reliable nationwide support.
              </p>
            </div>
          </div>

          {/* Right Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black">
              <img
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop"
                alt="Football Jersey Craftsmanship"
                onError={handleImageError}
                className="w-full h-[480px] object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#103D35]/90 via-transparent to-transparent" />
              
              {/* Floating Quote Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-[#D2B779]/30">
                <p className="text-xs italic text-gray-800 font-medium">
                  "Every jersey holds a memory of a last-minute winner, an audacious chip, or a legendary title celebration."
                </p>
                <span className="block mt-2 text-[10px] font-black uppercase tracking-widest text-[#103D35]">
                  — SPORT KIT Philosophy
                </span>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-[#702B3D] text-[#D2B779] shadow-xl flex flex-col items-center justify-center p-2 text-center border-2 border-white rotate-6">
              <Globe2 className="w-6 h-6 mb-0.5" />
              <span className="text-[9px] font-black uppercase tracking-wider leading-none">Global Kits</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* D. MISSION & E. VISION */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#103D35] text-white relative overflow-hidden border-y border-[#D2B779]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Our Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-[#D2B779]/40 transition-colors">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#D2B779] text-[#103D35] flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#D2B779] block mb-2">
                  PURPOSE & DRIVE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-heading">
                  OUR MISSION
                </h3>
                <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed font-medium">
                  "Our mission is to make football-inspired sportswear and club collections accessible to football lovers."
                </p>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  We empower fans of all ages to represent their football clubs proudly with premium quality fabrics, transparent guide pricing, and responsive support.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#D2B779] font-bold">
                <CheckCircle2 className="w-4 h-4" /> Accessible to Every Fan
              </div>
            </div>

            {/* Our Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-[#D2B779]/40 transition-colors">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#702B3D] text-white flex items-center justify-center mb-6 shadow-lg border border-[#D2B779]/30">
                  <Eye className="w-7 h-7 text-[#D2B779]" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#D2B779] block mb-2">
                  FUTURE HORIZON
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-heading">
                  OUR VISION
                </h3>
                <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed font-medium">
                  "Our vision is to become a trusted destination for football sportswear and merchandise."
                </p>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  To be the first name that comes to mind when a football fan seeks their club's new home shirt, pre-season training drill kit, or personalized collector jersey.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#D2B779] font-bold">
                <CheckCircle2 className="w-4 h-4" /> Trusted Nationwide & Beyond
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* F. OUR VALUES */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#702B3D] text-xs font-black uppercase tracking-widest block mb-2">
            CORE PRINCIPLES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#103D35] font-heading">
            THE VALUES THAT <span className="text-[#D2B779]">DEFINE US</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Every kit showcased, customer inquiry answered, and jersey personalised is guided by six foundational pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:border-[#D2B779]/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#103D35]/10 text-[#103D35] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#103D35]" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-3 font-heading">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* G. WHY CHOOSE US & CTA */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#103D35] to-[#0A2621] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-[#D2B779]/30">
            <div className="relative z-10 max-w-2xl">
              <span className="text-[#D2B779] text-xs font-black uppercase tracking-widest block mb-2">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight font-heading leading-tight">
                EXPERIENCE THE SPORT KIT <span className="text-[#D2B779]">DIFFERENCE</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-200 leading-relaxed">
                Join thousands of football fans who wear their passion with pride. Explore our curated collections or customise your official name and number.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/"
                  className="bg-[#702B3D] hover:bg-[#8C374D] text-white font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl transition-all flex items-center gap-2 hover:scale-105"
                >
                  <span>EXPLORE FOOTBALL KITS</span>
                  <ArrowRight className="w-4 h-4 text-[#D2B779]" />
                </Link>

                <a
                  href={OFFICIAL_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ENQUIRE ON WHATSAPP</span>
                </a>

                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-xl border border-white/20 transition-all"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
