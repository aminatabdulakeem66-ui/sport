import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

export const CategoryCard = ({ category, onSelectCategory }) => {
  return (
    <div
      onClick={() => onSelectCategory(category.id)}
      className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-black h-80 sm:h-96 border border-gray-100 hover:border-[#D2B779]/50 flex flex-col justify-end p-6 sm:p-7"
    >
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.title}
        onError={handleImageError}
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
      />

      {/* Dark Gradient Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity group-hover:via-black/50" />

      {/* Top Floating Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-[#103D35]/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold border border-[#D2B779]/30">
        <Sparkles className="w-3 h-3 text-[#D2B779]" />
        <span>{category.featuredBadge}</span>
      </div>

      {/* Item Count Badge */}
      <div className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-bold">
        {category.itemCount}
      </div>

      {/* Content */}
      <div className="relative z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-[#D2B779] text-xs font-black uppercase tracking-widest block mb-1">
          {category.tagline}
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-heading mb-2">
          {category.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed mb-4">
          {category.shortDescription}
        </p>

        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#D2B779] group-hover:text-white transition-colors">
          <span>VIEW COLLECTION</span>
          <div className="w-7 h-7 rounded-full bg-[#702B3D] text-white flex items-center justify-center group-hover:bg-[#D2B779] group-hover:text-[#103D35] transition-all">
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
