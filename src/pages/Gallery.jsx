import React, { useState } from 'react';
import { 
  Maximize2, 
  Sparkles, 
  Filter, 
  Camera, 
  ArrowRight,
  Eye,
  Trophy
} from 'lucide-react';
import { galleryItems, galleryCategories } from '../data/gallery';
import { ImageLightbox } from '../components/ImageLightbox';
import { handleImageError } from '../utils/imageFallback';

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  // Filter gallery items
  const filteredItems = selectedCategory === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F5F5F1]">
      
      {/* ========================================================================= */}
      {/* GALLERY HERO */}
      {/* ========================================================================= */}
      <section className="relative min-h-[440px] sm:min-h-[500px] flex items-center bg-[#151515] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1920&auto=format&fit=crop"
            alt="Football Matchday Lights and Atmosphere"
            onError={handleImageError}
            className="w-full h-full object-cover object-center filter brightness-40 contrast-110 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2621]/95 via-[#103D35]/85 to-black/75" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#D2B779]/20 border border-[#D2B779]/40 text-[#D2B779] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>VISUAL SHOWCASE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight font-heading leading-tight drop-shadow-md">
              MATCHDAY <span className="text-[#D2B779]">GALLERY</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-emerald-100 font-medium leading-relaxed drop-shadow">
              Immerse yourself in football culture: iconic jerseys, training sessions, world-class stadiums, and authentic match moments.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FILTER BUTTONS & GRID */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 border ${
                selectedCategory === category
                  ? 'bg-[#103D35] text-[#D2B779] border-[#103D35] shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-black shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 aspect-[4/3] flex flex-col justify-end p-6"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                onError={handleImageError}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                loading="lazy"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:via-black/40 transition-opacity" />

              {/* Floating Category Pill */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-[#103D35]/90 backdrop-blur-md text-[#D2B779] px-3 py-1 rounded-full text-[10px] font-bold border border-[#D2B779]/30">
                <Sparkles className="w-3 h-3" />
                <span>{item.category}</span>
              </div>

              {/* Enlarge Hint Icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption & Title */}
              <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-semibold text-gray-300 block mb-1">
                  {item.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer Action */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Want to see your club's matchday jersey featured here?
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#103D35] hover:text-[#702B3D] transition-colors"
          >
            <span>Tag @SPORTKIT on Instagram to be featured</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(newItem) => setActiveLightboxItem(newItem)}
      />
    </div>
  );
};
