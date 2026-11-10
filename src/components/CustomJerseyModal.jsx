import React, { useState } from 'react';
import { X, Sparkles, MessageCircle, Mail, Phone } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { 
  generateCustomJerseyWhatsAppUrl, 
  OFFICIAL_EMAIL, 
  OFFICIAL_PHONE 
} from '../utils/whatsapp';

export const CustomJerseyModal = ({ isOpen, onClose }) => {
  const [customName, setCustomName] = useState('PLAYER');
  const [customNumber, setCustomNumber] = useState('10');
  const [jerseyColor, setJerseyColor] = useState('green'); // green, white, red, black
  const [selectedSize, setSelectedSize] = useState('L');
  const [patchOption, setPatchOption] = useState('ucl'); // 'ucl' | 'pl' | 'none'

  if (!isOpen) return null;

  const colorThemes = {
    green: {
      name: "SPORT KIT Heritage Forest Green",
      bg: "#103D35",
      textColor: "#D2B779",
      accent: "#702B3D",
    },
    white: {
      name: "Galáctico Blanco Pure White",
      bg: "#FFFFFF",
      textColor: "#151515",
      accent: "#D2B779",
      border: "border border-gray-200",
    },
    red: {
      name: "Theatre Crimson Red",
      bg: "#702B3D",
      textColor: "#FFFFFF",
      accent: "#D2B779",
    },
    black: {
      name: "Midnight Stealth Carbon",
      bg: "#151515",
      textColor: "#D2B779",
      accent: "#702B3D",
    },
  };

  const currentTheme = colorThemes[jerseyColor];
  const customJerseyPrice = 52000;

  const handleOrderWhatsApp = () => {
    const url = generateCustomJerseyWhatsAppUrl({
      customName,
      customNumber,
      colorway: currentTheme.name,
      size: selectedSize,
      patchOption,
      price: customJerseyPrice,
    });
    window.open(url, '_blank');
  };

  const handleEmailEnquiry = () => {
    const subject = encodeURIComponent(`Custom Jersey Enquiry: ${customName.toUpperCase()} #${customNumber}`);
    const body = encodeURIComponent(
      `Hello SPORT KIT,\n\nI would like to enquire about getting a custom personalised football jersey created with the following details:\n\n• Name on Back: ${customName.toUpperCase()}\n• Number: ${customNumber}\n• Colorway: ${currentTheme.name}\n• Size: ${selectedSize}\n• Sleeve Badge: ${patchOption.toUpperCase()}\n• Guide Price: ${formatCurrency(customJerseyPrice)}\n\nPlease advise on production time and delivery.\n\nThank you!`
    );
    window.location.href = `mailto:${OFFICIAL_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#D2B779]/40 my-6 animate-in zoom-in-95 duration-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#103D35] p-5 text-white flex items-center justify-between border-b border-[#D2B779]/30">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#D2B779] text-[#103D35] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black uppercase tracking-wider font-heading">
                CUSTOM JERSEY PERSONALISATION STUDIO
              </h3>
              <p className="text-xs text-emerald-200">
                Craft your bespoke name, number, and club colorway
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-8 gap-8">
          
          {/* Left: Live Interactive Jersey Back Preview (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              Live Back-of-Jersey Preview
            </span>

            {/* Simulated Athletic Jersey Silhouette */}
            <div 
              className={`w-64 h-84 sm:w-72 sm:h-96 rounded-3xl shadow-2xl p-6 flex flex-col justify-between items-center relative overflow-hidden transition-all duration-300 ${currentTheme.border || ''}`}
              style={{ backgroundColor: currentTheme.bg }}
            >
              {/* Collar detail */}
              <div 
                className="w-24 h-6 rounded-b-full mx-auto border-b-2"
                style={{ borderColor: currentTheme.accent, backgroundColor: 'rgba(0,0,0,0.1)' }}
              />

              {/* Custom Name */}
              <div className="text-center w-full px-2 mt-4">
                <span 
                  className="font-black text-2xl sm:text-3xl tracking-widest uppercase block drop-shadow-md break-words"
                  style={{ color: currentTheme.textColor, fontFamily: 'Montserrat, sans-serif' }}
                >
                  {customName.trim() || 'YOUR NAME'}
                </span>
              </div>

              {/* Custom Number */}
              <div className="text-center my-auto">
                <span 
                  className="font-black text-7xl sm:text-8xl tracking-tight block drop-shadow-lg leading-none select-none"
                  style={{ color: currentTheme.textColor, fontFamily: "'Bebas Neue', 'Montserrat', sans-serif" }}
                >
                  {customNumber || '10'}
                </span>
              </div>

              {/* Lower Hem Crest */}
              <div className="flex items-center justify-between w-full pt-4 border-t border-white/10 text-[9px] font-bold uppercase tracking-widest opacity-80"
                style={{ color: currentTheme.textColor }}
              >
                <span>SPORT KIT OFFICIAL</span>
                <span>AUTHENTIC PRINT</span>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 mt-4 text-center">
              *Precision industrial thermal heat-transfer vinyl letters. Official font styles.
            </p>
          </div>

          {/* Right: Customization Controls (7 cols) */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-5">
            <div>
              {/* Name Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Custom Name on Back (Max 14 chars):
                </label>
                <input
                  type="text"
                  maxLength={14}
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value.toUpperCase())}
                  placeholder="e.g. RONALDO or YOUR SURNAME"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#103D35] uppercase font-bold text-gray-900"
                />
              </div>

              {/* Number Input */}
              <div className="mt-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Squad Number (1 - 99):
                </label>
                <input
                  type="number"
                  min={1}
                  max={99}
                  value={customNumber}
                  onChange={(e) => setCustomNumber(e.target.value.slice(0, 2))}
                  className="w-32 px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#103D35] font-black text-gray-900"
                />
              </div>

              {/* Jersey Color Scheme */}
              <div className="mt-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Select Colorway:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {Object.entries(colorThemes).map(([key, theme]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setJerseyColor(key)}
                      className={`p-2.5 rounded-xl text-left border flex items-center gap-2.5 transition-all text-xs font-semibold ${
                        jerseyColor === key 
                          ? 'border-[#103D35] ring-2 ring-[#D2B779] bg-[#F5F5F1]' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span 
                        className="w-5 h-5 rounded-full border border-gray-300 shrink-0 shadow-sm"
                        style={{ backgroundColor: theme.bg }}
                      />
                      <span className="truncate">{theme.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Select Size:
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                        selectedSize === sz
                          ? 'bg-[#103D35] text-white border-[#103D35] shadow'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sleeve Badge option */}
              <div className="mt-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Sleeve Badge:
                </label>
                <div className="flex flex-wrap gap-3 text-xs">
                  {[
                    { id: 'ucl', label: 'UEFA Champions League Starball' },
                    { id: 'pl', label: 'Premier League Lion Sleeve' },
                    { id: 'none', label: 'Plain (No Badge)' }
                  ].map((p) => (
                    <label key={p.id} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="patchOption"
                        checked={patchOption === p.id}
                        onChange={() => setPatchOption(p.id)}
                        className="text-[#103D35] focus:ring-[#103D35]"
                      />
                      <span className="text-gray-700 font-medium">{p.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Actions: Direct WhatsApp and Email Enquiries */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase font-bold text-gray-500">Custom Kit Reference Price:</span>
                <span className="text-2xl font-black text-[#702B3D] font-heading">
                  {formatCurrency(customJerseyPrice)}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleOrderWhatsApp}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider hover:scale-[1.01] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailEnquiry}
                  className="bg-[#103D35] hover:bg-[#702B3D] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                >
                  <Mail className="w-4 h-4 text-[#D2B779]" />
                  <span>Email Enquiry</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
