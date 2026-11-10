import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Flame, 
  Trophy, 
  ShieldCheck, 
  SlidersHorizontal, 
  Search, 
  X,
  CheckCircle,
  Shirt,
  MessageCircle
} from 'lucide-react';
import { productsData } from '../data/products';
import { categoriesData } from '../data/categories';
import { clubsData, clubCountries } from '../data/clubs';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { ClubCard } from '../components/ClubCard';
import { PlayerSlideshow } from '../components/PlayerSlideshow';
import { BenefitsSection } from '../components/BenefitsSection';
import { NewsletterSection } from '../components/NewsletterSection';
import { CustomJerseyModal } from '../components/CustomJerseyModal';
import { OFFICIAL_WHATSAPP_URL } from '../utils/whatsapp';
import { handleImageError } from '../utils/imageFallback';

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedClub, setSelectedClub] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('ALL');
  const [selectedSize, setSelectedSize] = useState('all');
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'newest' | 'price-low' | 'price-high'
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  // Sync with search URL parameters if provided
  useEffect(() => {
    const urlCategory = searchParams.get('category');
    const urlClub = searchParams.get('club');
    const urlSearch = searchParams.get('search');

    if (urlCategory) {
      setSelectedCategory(urlCategory);
      scrollToProducts();
    }
    if (urlClub) {
      setSelectedClub(urlClub);
      scrollToProducts();
    }
    if (urlSearch) {
      setSearchKeyword(urlSearch);
      scrollToProducts();
    }
  }, [searchParams]);

  const scrollToProducts = () => {
    const el = document.getElementById('products-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCategories = () => {
    const el = document.getElementById('categories-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter clubs by selected country
  const filteredClubs = selectedCountry === 'ALL'
    ? clubsData
    : clubsData.filter((c) => c.country.toUpperCase() === selectedCountry);

  // Filter and sort products
  const filteredProducts = productsData.filter((product) => {
    // Category match
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    // Club match
    if (selectedClub !== 'all' && product.club.toLowerCase() !== selectedClub.toLowerCase()) {
      return false;
    }
    // Size match
    if (selectedSize !== 'all' && !product.sizes.includes(selectedSize)) {
      return false;
    }
    // Keyword match
    if (searchKeyword.trim() !== '') {
      const q = searchKeyword.toLowerCase();
      const match = (
        product.name.toLowerCase().includes(q) ||
        product.club.toLowerCase().includes(q) ||
        product.kitType.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q)
      );
      if (!match) return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
  });

  // Separate sections for New Arrivals & Top Showcase Picks
  const newArrivals = productsData.filter((p) => p.isNewArrival).slice(0, 4);
  const featuredKits = productsData.filter((p) => p.isFeatured).slice(0, 4);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedClub('all');
    setSelectedSize('all');
    setSearchKeyword('');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#F5F5F1]">
      
      {/* ========================================================================= */}
      {/* SECTION A: HERO BANNER */}
      {/* ========================================================================= */}
      <section className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[800px] flex items-center bg-[#151515] overflow-hidden">
        {/* Hero Background Photograph with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1920&auto=format&fit=crop"
            alt="Football Stadium Atmosphere & Sportswear Campaign"
            onError={handleImageError}
            className="w-full h-full object-cover object-center filter brightness-40 contrast-110 scale-105"
          />
          {/* Brand Color Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2621]/95 via-[#103D35]/80 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-[#D2B779]/20 border border-[#D2B779]/40 text-[#D2B779] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#D2B779]" />
              <span>THE OFFICIAL FOOTBALL SPORTSWEAR SHOWCASE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.08] font-heading drop-shadow-lg">
              WEAR THE GAME. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2B779] via-[#f1e0be] to-[#D2B779]">
                LIVE THE PASSION.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl font-normal drop-shadow">
              Discover premium football jerseys, training kits and collections from your favourite football clubs around the world. Engineered for peak athletic performance and authentic matchday pride.
            </p>

            {/* CTA Buttons: Showcase Actions */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToProducts}
                className="bg-[#702B3D] hover:bg-[#8C374D] text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-2xl transition-all duration-200 flex items-center gap-3 hover:scale-105 active:scale-95 border border-white/10"
              >
                <span>EXPLORE KITS</span>
                <ArrowRight className="w-4 h-4 text-[#D2B779]" />
              </button>

              <button
                onClick={scrollToCategories}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-xl transition-all duration-200 hover:border-[#D2B779] flex items-center gap-2"
              >
                <span>VIEW COLLECTION</span>
              </button>

              <button
                onClick={() => setIsCustomModalOpen(true)}
                className="bg-[#D2B779] hover:bg-[#e2cca0] text-[#103D35] font-black text-sm uppercase tracking-wider px-6 py-4 rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <Shirt className="w-4 h-4" />
                <span>CUSTOMISE YOUR JERSEY</span>
              </button>
            </div>

            {/* Highlights Bar */}
            <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 text-white">
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-[#D2B779] font-heading">50+</span>
                <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold">Club Kits</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-[#D2B779] font-heading">100%</span>
                <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold">Match Quality</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-[#D2B779] font-heading">24/7</span>
                <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold">WhatsApp Enquiries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION B: SHOP BY CATEGORY (Showcase Collections) */}
      {/* ========================================================================= */}
      <section id="categories-section" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[#702B3D] text-xs font-black uppercase tracking-widest block mb-1">
              CURATED SELECTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#103D35] font-heading">
              SHOP BY <span className="text-[#D2B779]">CATEGORY</span>
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-xl">
              Explore authentic stadium shirts, aerodynamic drill tops, fan apparel, and pitch-ready accessories.
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedCategory('all');
              scrollToProducts();
            }}
            className="text-xs font-bold text-[#103D35] hover:text-[#702B3D] flex items-center gap-1.5 transition-colors uppercase tracking-wider shrink-0"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categoriesData.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelectCategory={(catId) => {
                setSelectedCategory(catId);
                scrollToProducts();
              }}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION C: CLUB COLLECTIONS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[#702B3D] text-xs font-black uppercase tracking-widest block mb-1">
                EUROPEAN & WORLD ELITE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#103D35] font-heading">
                CLUB <span className="text-[#D2B779]">COLLECTIONS</span>
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                Show your unwavering support. Browse the official home, away, and European third collections from Real Madrid, Barcelona, Manchester United, Arsenal, Man City, Chelsea, Liverpool, PSG, Bayern Munich, and more.
              </p>
            </div>

            {selectedClub !== 'all' && (
              <button
                onClick={() => setSelectedClub('all')}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 self-start"
              >
                <span>Filter Active: {selectedClub}</span>
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Country League Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {clubCountries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition-all ${
                  selectedCountry === country
                    ? 'bg-[#103D35] text-[#D2B779] shadow-md scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {country}
              </button>
            ))}
          </div>

          {/* Club Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {filteredClubs.map((club) => (
              <ClubCard
                key={club.id}
                club={club}
                isSelected={selectedClub.toLowerCase() === club.name.toLowerCase()}
                onSelectClub={(clubName) => {
                  setSelectedClub(clubName);
                  scrollToProducts();
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION E: SEVEN-PLAYER SLIDESHOW */}
      {/* Includes all 7 players: Ronaldo, Messi, Mbappé, Vinícius, Haaland, Yamal, Bellingham */}
      {/* ========================================================================= */}
      <PlayerSlideshow
        onSelectPlayerKit={(playerName) => {
          setSearchKeyword(playerName);
          scrollToProducts();
        }}
      />

      {/* ========================================================================= */}
      {/* SECTION D: FEATURED FOOTBALL JERSEYS & TRAINING KITS */}
      {/* ========================================================================= */}
      <section id="products-section" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Products Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#103D35]/10 text-[#103D35] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5 text-[#D2B779]" />
              <span>MATCH DAY SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#103D35] font-heading">
              FEATURED FOOTBALL <span className="text-[#702B3D]">JERSEYS & TRAINING KITS</span>
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-xl">
              Authentic player-issue and stadium fan versions with official club badging, breathable technology, and guide pricing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCustomModalOpen(true)}
              className="bg-[#D2B779] hover:bg-[#e2cca0] text-[#103D35] text-xs font-black uppercase px-4 py-2.5 rounded-xl shadow transition-all flex items-center gap-1.5"
            >
              <Shirt className="w-4 h-4" />
              <span>Personalise Jersey</span>
            </button>
            <span className="text-xs font-bold text-gray-500">
              Showing {filteredProducts.length} kits
            </span>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-200 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input (5 cols) */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search kit, player, club (e.g. Real Madrid, Ronaldo, Away)..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#103D35]"
              />
              {searchKeyword && (
                <button
                  onClick={() => setSearchKeyword('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Dropdown (3 cols) */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#103D35]"
              >
                <option value="all">All Kit Categories</option>
                <option value="jerseys">Football Jerseys</option>
                <option value="training">Training Kits</option>
                <option value="home-kits">Home Kits</option>
                <option value="away-kits">Away Kits</option>
                <option value="third-kits">Third Kits</option>
                <option value="accessories">Football Accessories</option>
              </select>
            </div>

            {/* Size Filter Dropdown (2 cols) */}
            <div className="md:col-span-2">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#103D35]"
              >
                <option value="all">All Sizes</option>
                <option value="XS">Size XS</option>
                <option value="S">Size S</option>
                <option value="M">Size M</option>
                <option value="L">Size L</option>
                <option value="XL">Size XL</option>
                <option value="XXL">Size XXL</option>
              </select>
            </div>

            {/* Sort Dropdown (2 cols) */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#103D35]"
              >
                <option value="featured">Sort: Featured</option>
                <option value="newest">Sort: New Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Active Filter Tags Bar */}
          {(selectedCategory !== 'all' || selectedClub !== 'all' || selectedSize !== 'all' || searchKeyword) && (
            <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-gray-500 font-medium">Active Filters:</span>
              
              {selectedCategory !== 'all' && (
                <span className="bg-[#103D35] text-white px-2.5 py-1 rounded-md flex items-center gap-1 font-semibold">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory('all')}><X className="w-3 h-3" /></button>
                </span>
              )}

              {selectedClub !== 'all' && (
                <span className="bg-[#702B3D] text-white px-2.5 py-1 rounded-md flex items-center gap-1 font-semibold">
                  Club: {selectedClub}
                  <button onClick={() => setSelectedClub('all')}><X className="w-3 h-3" /></button>
                </span>
              )}

              {selectedSize !== 'all' && (
                <span className="bg-[#D2B779] text-[#103D35] px-2.5 py-1 rounded-md flex items-center gap-1 font-semibold">
                  Size: {selectedSize}
                  <button onClick={() => setSelectedSize('all')}><X className="w-3 h-3" /></button>
                </span>
              )}

              {searchKeyword && (
                <span className="bg-gray-800 text-white px-2.5 py-1 rounded-md flex items-center gap-1 font-semibold">
                  "{searchKeyword}"
                  <button onClick={() => setSearchKeyword('')}><X className="w-3 h-3" /></button>
                </span>
              )}

              <button
                onClick={resetFilters}
                className="text-[#702B3D] hover:underline font-bold ml-auto text-xs"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>

        {/* Product Cards Grid: View Collection, Enquire on WhatsApp, Explore Kits */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200">
            <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto flex items-center justify-center text-gray-400 mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">No kits match your current filters</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-sm mx-auto">
              Try adjusting your category, club, or search keywords to view available football kits.
            </p>
            <button
              onClick={resetFilters}
              className="mt-5 bg-[#103D35] text-[#D2B779] font-bold text-xs uppercase px-5 py-2.5 rounded-xl shadow"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* SECTION F: NEW ARRIVALS SHOWCASE */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#702B3D]/10 text-[#702B3D] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Flame className="w-3.5 h-3.5 text-[#702B3D]" />
                <span>FRESH OFF THE PRODUCTION LINE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#103D35] font-heading">
                NEW <span className="text-[#702B3D]">ARRIVALS SHOWCASE</span>
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                The latest 2024/2025 matchday releases and European drill drops.
              </p>
            </div>

            <button
              onClick={() => {
                setSortBy('newest');
                scrollToProducts();
              }}
              className="text-xs font-bold text-[#702B3D] hover:underline flex items-center gap-1"
            >
              <span>View All New Releases</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION G: WHY CHOOSE SPORT KIT? */}
      {/* ========================================================================= */}
      <BenefitsSection />

      {/* ========================================================================= */}
      {/* SECTION H: NEWSLETTER */}
      {/* ========================================================================= */}
      <NewsletterSection />

      {/* Custom Jersey Modal */}
      <CustomJerseyModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      />
    </div>
  );
};
