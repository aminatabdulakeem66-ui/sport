import React, { useState, useEffect } from 'react';
import { 
  X, 
  Heart, 
  ShieldCheck, 
  Truck, 
  MessageCircle, 
  Mail,
  Phone,
  Star,
  Check,
  Sparkles
} from 'lucide-react';
import { useShowcase } from '../context/ShowcaseContext';
import { formatCurrency } from '../utils/formatters';
import { 
  generateProductWhatsAppUrl, 
  OFFICIAL_EMAIL, 
  OFFICIAL_PHONE 
} from '../utils/whatsapp';
import { handleImageError } from '../utils/imageFallback';

export const ProductDetailsModal = () => {
  const { quickViewProduct, setQuickViewProduct, toggleWishlist, isInWishlist } = useShowcase();
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedSize(quickViewProduct.sizes?.[0] || 'M');
      setActiveImage(quickViewProduct.image);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const isFavorited = isInWishlist(quickViewProduct.id);

  const handleWhatsAppEnquiry = () => {
    const url = generateProductWhatsAppUrl(quickViewProduct, selectedSize);
    window.open(url, '_blank');
  };

  const handleEmailEnquiry = () => {
    const subject = encodeURIComponent(`Kit Enquiry: ${quickViewProduct.name} (${quickViewProduct.club})`);
    const body = encodeURIComponent(
      `Hello SPORT KIT,\n\nI am interested in enquiring about the ${quickViewProduct.name} (${quickViewProduct.club}) in size ${selectedSize}.\n\nPlease let me know about availability and delivery options.\n\nThank you!`
    );
    window.location.href = `mailto:${OFFICIAL_EMAIL}?subject=${subject}&body=${body}`;
  };

  const galleryImages = quickViewProduct.gallery && quickViewProduct.gallery.length > 0 
    ? quickViewProduct.gallery 
    : [quickViewProduct.image];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={() => setQuickViewProduct(null)}
    >
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#D2B779]/30 my-8 animate-in fade-in zoom-in-95 duration-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-black shadow-md transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image Gallery */}
          <div className="bg-[#F5F5F1] p-6 flex flex-col justify-between">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-inner mb-4 relative">
              <img
                src={activeImage || quickViewProduct.image}
                alt={quickViewProduct.name}
                onError={handleImageError}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              <span className="absolute top-3 left-3 bg-[#103D35] text-white text-xs font-bold px-3 py-1 rounded-md shadow">
                {quickViewProduct.kitType}
              </span>
            </div>

            {/* Thumbnail selector */}
            {galleryImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      activeImage === img ? 'border-[#103D35] ring-2 ring-[#D2B779]' : 'border-gray-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`view ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Trust Badges */}
            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-3 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#103D35]" />
                <span>Original Match Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#103D35]" />
                <span>Nationwide Enquiries</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Showcase Details & Inquiries */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Category & Club */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#103D35]">
                  {quickViewProduct.club}
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{quickViewProduct.rating || '4.9'}</span>
                  <span className="text-gray-400">({quickViewProduct.reviewsCount || 85} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">
                {quickViewProduct.name}
              </h2>

              {/* Pricing */}
              <div className="flex items-baseline gap-3 my-4">
                <span className="text-2xl sm:text-3xl font-black text-[#702B3D] font-heading">
                  {formatCurrency(quickViewProduct.price)}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatCurrency(quickViewProduct.originalPrice)}
                  </span>
                )}
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Official Showcase Item
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Tech details */}
              {quickViewProduct.details && (
                <div className="mt-4 space-y-1.5">
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Specifications & Features:</h4>
                  {quickViewProduct.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Size Selector for Enquiry */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-800">
                    Select Size for Enquiry:
                  </span>
                  <span className="text-xs text-[#103D35] font-semibold">
                    Chosen: <strong className="text-base">{selectedSize}</strong>
                  </span>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((sz) => {
                    const available = quickViewProduct.sizes?.includes(sz);
                    return (
                      <button
                        key={sz}
                        type="button"
                        disabled={!available}
                        onClick={() => setSelectedSize(sz)}
                        className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                          selectedSize === sz
                            ? 'bg-[#103D35] text-white border-[#103D35] shadow-md ring-2 ring-[#D2B779]'
                            : available
                            ? 'bg-white text-gray-800 border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                            : 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed line-through'
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Action Buttons: Direct WhatsApp Enquiry & Email */}
            <div className="mt-8 pt-4 border-t border-gray-200 space-y-3">
              <button
                type="button"
                onClick={handleWhatsAppEnquiry}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm hover:scale-[1.01] active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enquire on WhatsApp (Size {selectedSize})</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleEmailEnquiry}
                  className="flex-1 bg-[#103D35] hover:bg-[#702B3D] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <Mail className="w-4 h-4 text-[#D2B779]" />
                  <span>Email Enquiry</span>
                </button>

                <a
                  href={`tel:${OFFICIAL_PHONE}`}
                  className="px-4 py-3 rounded-xl border border-gray-300 hover:border-[#103D35] text-gray-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  title="Call SPORT KIT directly"
                >
                  <Phone className="w-4 h-4 text-[#103D35]" />
                  <span>Call {OFFICIAL_PHONE}</span>
                </a>

                <button
                  type="button"
                  onClick={() => toggleWishlist(quickViewProduct)}
                  className={`p-3 rounded-xl border transition-colors ${
                    isFavorited 
                      ? 'border-[#702B3D] bg-[#702B3D] text-white' 
                      : 'border-gray-300 text-gray-600 hover:text-[#702B3D] hover:bg-gray-50'
                  }`}
                  aria-label="Save to favorites"
                  title={isFavorited ? 'Remove from favorites' : 'Save kit to favorites'}
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
