import React, { useState } from 'react';
import { Eye, Heart, MessageCircle, Star, ArrowRight } from 'lucide-react';
import { useShowcase } from '../context/ShowcaseContext';
import { formatCurrency } from '../utils/formatters';
import { generateProductWhatsAppUrl } from '../utils/whatsapp';
import { handleImageError } from '../utils/imageFallback';

export const ProductCard = ({ product }) => {
  const { setQuickViewProduct, toggleWishlist, isInWishlist } = useShowcase();
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'M');
  const [isHovered, setIsHovered] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleOpenQuickView = (e) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const handleWhatsAppEnquiry = (e) => {
    e.stopPropagation();
    const url = generateProductWhatsAppUrl(product, selectedSize);
    window.open(url, '_blank');
  };

  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#D2B779]/40 transition-all duration-300 flex flex-col h-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Container */}
      <div 
        className="relative aspect-square overflow-hidden bg-gray-50 cursor-pointer"
        onClick={handleOpenQuickView}
      >
        <img
          src={product.image}
          alt={product.name}
          onError={handleImageError}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <span className="bg-[#103D35] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-md tracking-wider">
              {product.badge}
            </span>
          )}
          <span className="bg-[#D2B779] text-[#151515] text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
            {product.kitType}
          </span>
        </div>

        {/* Floating Favorite Heart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 ${
            isFavorited 
              ? 'bg-[#702B3D] text-white shadow-lg' 
              : 'bg-white/80 hover:bg-white text-gray-700 hover:text-[#702B3D] shadow'
          }`}
          aria-label="Save to favorites"
          title={isFavorited ? 'Remove from favorites' : 'Save kit to favorites'}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 p-4">
          <button
            onClick={handleOpenQuickView}
            className="bg-white hover:bg-[#D2B779] text-[#103D35] font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-lg flex items-center gap-1.5 transition-transform duration-200 hover:scale-105"
          >
            <Eye className="w-4 h-4" /> View Details
          </button>
          
          <button
            onClick={handleWhatsAppEnquiry}
            className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-lg flex items-center gap-1.5 transition-transform duration-200 hover:scale-105"
            title="Enquire on WhatsApp about this kit"
          >
            <MessageCircle className="w-4 h-4" /> Enquire
          </button>
        </div>
      </div>

      {/* Product Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Club & Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-bold text-[#103D35] uppercase tracking-wider text-[11px]">
              {product.club}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-semibold text-[11px]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{product.rating || '4.9'}</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={handleOpenQuickView}
            className="font-bold text-sm sm:text-base text-gray-900 line-clamp-2 hover:text-[#702B3D] cursor-pointer transition-colors leading-snug"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Guide / Reference Price */}
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-lg font-black text-[#702B3D] font-heading">
              {formatCurrency(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
            <span className="text-[10px] text-gray-400 font-medium ml-auto">
              Guide Price
            </span>
          </div>

          {/* Available Sizes Showcase */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-3">
              <div className="flex items-center justify-between mb-1.5 text-[11px]">
                <span className="text-gray-500 font-medium">Available Sizes:</span>
                <span className="font-bold text-[#103D35]">{selectedSize}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSize(size);
                    }}
                    className={`text-[10px] font-bold px-2 py-1 rounded-md border transition-all ${
                      selectedSize === size
                        ? 'border-[#103D35] bg-[#103D35] text-white shadow-sm'
                        : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons: Required Showcase Buttons (Enquire on WhatsApp & View Collection / Explore Kits) */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <button
            onClick={handleWhatsAppEnquiry}
            className="flex-1 bg-[#103D35] hover:bg-[#702B3D] text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg active:scale-95 group/btn"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover/btn:scale-110 transition-transform" />
            <span>Enquire on WhatsApp</span>
          </button>
          
          <button
            onClick={handleOpenQuickView}
            className="px-3 py-2.5 rounded-xl border border-gray-200 hover:border-[#D2B779] hover:bg-gray-50 text-gray-700 hover:text-[#103D35] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            title="Explore kit details"
          >
            <span>Explore Kits</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D2B779]" />
          </button>
        </div>
      </div>
    </div>
  );
};
