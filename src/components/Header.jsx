import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Menu, 
  X, 
  Phone, 
  Sparkles,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { useShowcase } from '../context/ShowcaseContext';
import { OFFICIAL_PHONE, OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_WHATSAPP_URL } from '../utils/whatsapp';
import { productsData } from '../data/products';
import { formatCurrency } from '../utils/formatters';

export const Header = () => {
  const { setQuickViewProduct } = useShowcase();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Sticky header scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter products for quick search modal
  const searchResults = searchQuery.trim() === '' ? [] : productsData.filter((p) => {
    const query = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) ||
      p.club.toLowerCase().includes(query) ||
      p.kitType.toLowerCase().includes(query) ||
      p.categoryLabel.toLowerCase().includes(query)
    );
  }).slice(0, 5);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleSearchResultClick = (product) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setQuickViewProduct(product);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#0A2621] text-white text-xs py-2 px-4 border-b border-[#D2B779]/20 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 bg-[#D2B779] text-[#103D35] text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow-sm">
              <Sparkles className="w-3 h-3" /> OFFICIAL SHOWCASE
            </span>
            <span className="text-gray-200">
              Premium 2024/2025 Football Club Kits & Drill Collections
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href={`tel:${OFFICIAL_PHONE}`} 
              className="flex items-center gap-1.5 hover:text-[#D2B779] transition-colors"
              title="Call SPORT KIT directly"
            >
              <Phone className="w-3 h-3 text-[#D2B779]" />
              <span>Call: {OFFICIAL_PHONE}</span>
            </a>
            <span className="text-[#D2B779]/40">|</span>
            <a 
              href={OFFICIAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 font-semibold text-[#D2B779]"
              title="Enquire on WhatsApp"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              <span>WhatsApp: {OFFICIAL_PHONE}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#103D35]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#D2B779]/20' 
            : 'bg-[#103D35] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo & Tagline */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#D2B779] to-[#b99955] flex items-center justify-center shadow-lg shadow-[#D2B779]/20 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6 text-[#103D35]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 2.18l6 2.25v4.66c0 4.14-2.73 8.01-6 9.07-3.27-1.06-6-4.93-6-9.07V6.43l6-2.25zm-1 4.82v4h2v-4h-2zm0 6v2h2v-2h-2z" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-white font-heading">
                    SPORT <span className="text-[#D2B779]">KIT</span>
                  </span>
                </div>
                <p className="text-[9px] tracking-widest text-emerald-200/80 uppercase font-semibold">
                  WEAR THE GAME. LIVE THE PASSION.
                </p>
              </div>
            </Link>

            {/* Exactly Five Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wide transition-all duration-200 relative py-1 ${
                      isActive
                        ? 'text-[#D2B779] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#D2B779] after:rounded-full'
                        : 'text-gray-100 hover:text-[#D2B779]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Controls: Search, WhatsApp Enquiry, Mobile Menu Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              
              {/* Search Trigger Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-full text-white hover:text-[#D2B779] hover:bg-white/10 transition-colors relative"
                aria-label="Search football kits"
                title="Search clubs, kits, and players"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Prominent WhatsApp Enquiry Button */}
              <a
                href={OFFICIAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#702B3D] hover:bg-[#8C374D] text-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-lg shadow-[#702B3D]/30 transition-all duration-200 hover:scale-105 active:scale-95 group border border-white/10"
                aria-label="Enquire on WhatsApp"
                title="Chat with SPORT KIT team"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold tracking-wider hidden sm:inline">
                  ENQUIRE ON WHATSAPP
                </span>
                <span className="text-xs font-bold tracking-wider sm:hidden">
                  ENQUIRE
                </span>
              </a>

              {/* Mobile Menu Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-white hover:text-[#D2B779] hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0A2621] border-t border-[#D2B779]/20 px-6 py-6 transition-all duration-300">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#103D35] text-[#D2B779] border-l-4 border-[#D2B779]'
                        : 'text-gray-200 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-60" />
                </NavLink>
              ))}

              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href={OFFICIAL_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp ({OFFICIAL_PHONE})</span>
                </a>
                <a
                  href={`tel:${OFFICIAL_PHONE}`}
                  className="w-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D2B779]" /> 
                  <span>Call: {OFFICIAL_PHONE}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Interactive Search Modal Overlay */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
          onClick={() => setIsSearchOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-[#D2B779]/30 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Box */}
            <form onSubmit={handleSearchSubmit} className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3">
              <Search className="w-6 h-6 text-[#103D35]" />
              <input
                type="text"
                autoFocus
                placeholder="Search Real Madrid, Arsenal, Ronaldo, Home kits, Dri-FIT..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-lg text-gray-900 placeholder-gray-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </form>

            {/* Search Result Suggestions */}
            <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-gray-100">
              {searchQuery.trim() === '' ? (
                <div className="py-6 text-center text-sm text-gray-500">
                  <p className="font-semibold text-gray-700">Popular Searches:</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {['Real Madrid', 'Barcelona', 'Manchester United', 'Arsenal', 'Training Kits', 'Ronaldo', 'Bellingham'].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setSearchQuery(term)}
                        className="bg-gray-100 hover:bg-[#103D35] hover:text-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-2">
                    Showcase Kits ({searchResults.length})
                  </p>
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleSearchResultClick(product)}
                      className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-[#F5F5F1] cursor-pointer transition-colors group"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-14 h-14 rounded-lg object-cover bg-gray-100"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-[#103D35] uppercase">{product.club}</span>
                          <span className="text-[10px] bg-[#D2B779]/20 text-[#103D35] font-semibold px-1.5 py-0.5 rounded">
                            {product.kitType}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 truncate group-hover:text-[#702B3D] transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-xs font-bold text-[#702B3D]">
                          {formatCurrency(product.price)}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-[#103D35] group-hover:text-[#702B3D] flex items-center gap-1">
                        View Kit
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#702B3D] group-hover:translate-x-1 transition-all" />
                      </span>
                    </div>
                  ))}
                  <div className="mt-4 pt-3 text-center border-t border-gray-100">
                    <button
                      type="button"
                      onClick={handleSearchSubmit}
                      className="text-xs font-bold text-[#103D35] hover:underline"
                    >
                      View all matching kits in showcase &rarr;
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500">
                  <p className="text-base font-semibold text-gray-800">No matching kits found</p>
                  <p className="text-xs mt-1">Try searching for club name, player name, or kit type</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
