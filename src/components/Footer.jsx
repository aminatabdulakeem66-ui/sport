import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Sparkles
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from './SocialIcons';
import { OFFICIAL_PHONE, OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_EMAIL, OFFICIAL_WHATSAPP_URL } from '../utils/whatsapp';

export const Footer = () => {
  return (
    <footer className="bg-[#0A2621] text-gray-300 border-t border-[#D2B779]/20 font-sans">
      {/* Value Badges Banner */}
      <div className="border-b border-white/10 bg-[#103D35]/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#D2B779]/15 flex items-center justify-center text-[#D2B779]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="text-white font-bold text-sm uppercase">100% Authentic Quality</h5>
              <p className="text-xs text-gray-400 mt-0.5">Player & stadium edition fabrics</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#D2B779]/15 flex items-center justify-center text-[#D2B779]">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="text-white font-bold text-sm uppercase">Nationwide Enquiries</h5>
              <p className="text-xs text-gray-400 mt-0.5">Prompt logistics & dispatch coordination</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#D2B779]/15 flex items-center justify-center text-[#D2B779]">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h5 className="text-white font-bold text-sm uppercase">WhatsApp Enquiries</h5>
              <p className="text-xs text-gray-400 mt-0.5">Direct chat confirmation & sizing help</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#D2B779]/15 flex items-center justify-center text-[#D2B779]">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h5 className="text-white font-bold text-sm uppercase">Sizing Guidance</h5>
              <p className="text-xs text-gray-400 mt-0.5">Expert player-cut & fan-fit advice</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D2B779] to-[#b99955] flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-[#103D35]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 2.18l6 2.25v4.66c0 4.14-2.73 8.01-6 9.07-3.27-1.06-6-4.93-6-9.07V6.43l6-2.25zm-1 4.82v4h2v-4h-2zm0 6v2h2v-2h-2z" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-wider font-heading">
                  SPORT <span className="text-[#D2B779]">KIT</span>
                </span>
                <p className="text-[10px] tracking-widest text-[#D2B779] uppercase font-bold">
                  WEAR THE GAME. LIVE THE PASSION.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              SPORT KIT is Nigeria's premium football sportswear showcase destination featuring match jerseys, pro training kits, club collections, and football accessories for devoted fans and athletes.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block mb-3">
                Follow The Passion
              </span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#702B3D] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#702B3D] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter/X"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#702B3D] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#702B3D] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation: Exactly 5 working pages */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#D2B779] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D2B779] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D2B779] transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#D2B779] transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D2B779] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Categories Showcase Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Club Collections
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/?category=jerseys" className="hover:text-[#D2B779] transition-colors">Football Jerseys</Link>
              </li>
              <li>
                <Link to="/?category=training" className="hover:text-[#D2B779] transition-colors">Pro Training Kits</Link>
              </li>
              <li>
                <Link to="/?category=home-kits" className="hover:text-[#D2B779] transition-colors">Home Kits</Link>
              </li>
              <li>
                <Link to="/?category=away-kits" className="hover:text-[#D2B779] transition-colors">Away Kits</Link>
              </li>
              <li>
                <Link to="/?category=third-kits" className="hover:text-[#D2B779] transition-colors">Third Kits</Link>
              </li>
              <li>
                <Link to="/?category=accessories" className="hover:text-[#D2B779] transition-colors">Football Accessories</Link>
              </li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Official Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D2B779] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-gray-400 block">Direct Telephone</span>
                  <a href={`tel:${OFFICIAL_PHONE}`} className="text-white font-semibold hover:text-[#D2B779] transition-colors">
                    {OFFICIAL_PHONE}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#D2B779] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-gray-400 block">WhatsApp Enquiries</span>
                  <a 
                    href={OFFICIAL_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D2B779] font-bold hover:underline"
                  >
                    {OFFICIAL_PHONE}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D2B779] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-gray-400 block">Official Email</span>
                  <a 
                    href={`mailto:${OFFICIAL_EMAIL}`} 
                    className="text-white text-xs font-medium hover:text-[#D2B779] transition-colors break-all"
                  >
                    {OFFICIAL_EMAIL}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} SPORT KIT. All rights reserved. Plain Professional Football Sportswear Showcase.</p>
          <div className="flex items-center gap-4 text-gray-400">
            <span>Official Showcase</span>
            <span>•</span>
            <span>Personalisation Studio</span>
            <span>•</span>
            <a 
              href={OFFICIAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D2B779] font-medium hover:underline flex items-center gap-1"
            >
              WhatsApp Concierge: {OFFICIAL_PHONE}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
