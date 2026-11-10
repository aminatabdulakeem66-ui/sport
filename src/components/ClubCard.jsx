import React from 'react';
import { ArrowUpRight, Shield } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

export const ClubCard = ({ club, onSelectClub, isSelected }) => {
  return (
    <div
      onClick={() => onSelectClub(club.name)}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border ${
        isSelected
          ? 'border-[#D2B779] ring-2 ring-[#D2B779] shadow-xl scale-[1.02]'
          : 'border-gray-200 hover:border-[#103D35] hover:shadow-lg bg-white'
      }`}
    >
      <div className="relative h-36 sm:h-40 overflow-hidden bg-gray-100">
        <img
          src={club.image}
          alt={club.name}
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Club Country Tag */}
        <span className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">
          {club.league}
        </span>

        {/* Club Badge Monogram */}
        <div 
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-md border border-white/20"
          style={{ backgroundColor: club.primaryColor || '#103D35', color: '#FFFFFF' }}
        >
          {club.logoText || 'FC'}
        </div>

        {/* Club Details at bottom of photo */}
        <div className="absolute bottom-2.5 left-3 right-3 text-white">
          <h4 className="font-extrabold text-sm sm:text-base leading-tight truncate">
            {club.name}
          </h4>
          <span className="text-[10px] text-gray-300 truncate block">
            {club.stadium}
          </span>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-3 bg-white flex items-center justify-between text-xs">
        <span className="text-gray-500 font-medium truncate text-[11px]">
          {club.popularKits?.[0] || 'Official Kits'}
        </span>
        <span className="text-[#103D35] font-bold flex items-center gap-0.5 group-hover:text-[#702B3D] transition-colors text-[11px]">
          View Kits
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </div>
  );
};
