import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  Flame, 
  Trophy,
  ShieldAlert,
  Play,
  Pause
} from 'lucide-react';
import { playersData } from '../data/players';
import { handleImageError } from '../utils/imageFallback';

export const PlayerSlideshow = ({ onSelectPlayerKit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const totalSlides = playersData.length;

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  // Prev Slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-advance with hover pause
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  const currentPlayer = playersData[currentIndex];

  const handleExplorePlayer = () => {
    if (onSelectPlayerKit) {
      onSelectPlayerKit(currentPlayer.name);
    } else {
      const element = document.getElementById('products-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      className="relative bg-gradient-to-b from-[#0A2621] via-[#103D35] to-[#0A2621] text-white py-16 sm:py-24 overflow-hidden border-y border-[#D2B779]/20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#D2B779] blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#702B3D] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#D2B779]/15 border border-[#D2B779]/30 text-[#D2B779] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>ELITE GLOBAL PLAYERS SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight font-heading">
            ICONS OF THE <span className="text-[#D2B779]">BEAUTIFUL GAME</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300">
            From generational prodigies to timeless legends. Celebrate the champions who make the stadium roar.
          </p>
        </div>

        {/* Main Showcase Banner Card */}
        <div className="relative bg-[#151515] rounded-3xl overflow-hidden shadow-2xl border border-[#D2B779]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:min-h-[540px]">
            
            {/* Left Content (Text & Stats): 7 cols on lg */}
            <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-between z-10 bg-gradient-to-r from-[#151515] via-[#151515]/95 to-transparent">
              <div>
                
                {/* Badges: Player Number & Series */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 rounded-xl bg-[#D2B779] text-[#103D35] flex items-center justify-center font-black text-2xl font-heading shadow-lg">
                    #{currentPlayer.number}
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#D2B779]">
                      {currentPlayer.clubTag}
                    </span>
                    <h4 className="text-xs font-semibold text-gray-400">
                      {currentPlayer.club} • {currentPlayer.position}
                    </h4>
                  </div>
                </div>

                {/* Player Name */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-heading mt-2">
                  {currentPlayer.name}
                </h3>
                <span className="text-sm font-bold text-[#D2B779] tracking-widest uppercase block mt-1">
                  "{currentPlayer.nickname}"
                </span>

                {/* Player Quote */}
                <blockquote className="mt-4 italic text-sm text-emerald-100/90 border-l-2 border-[#D2B779] pl-3 py-1">
                  "{currentPlayer.quote}"
                </blockquote>

                {/* Detailed Description */}
                <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
                  {currentPlayer.description}
                </p>

                {/* Featured Kit Tag */}
                <div className="mt-5 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Flame className="w-5 h-5 text-[#D2B779] shrink-0" />
                  <div className="text-xs">
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Featured Club Match Kit:</span>
                    <strong className="text-white font-semibold">{currentPlayer.featuredKit}</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Slide Controls */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleExplorePlayer}
                  className="bg-[#702B3D] hover:bg-[#8C374D] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xl transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95 group"
                >
                  <span>EXPLORE {currentPlayer.nickname.toUpperCase()} KITS</span>
                  <ArrowRight className="w-4 h-4 text-[#D2B779] group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Pause status & Counter */}
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title={isPaused ? 'Resume auto-play' : 'Pause slideshow'}
                  >
                    {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                  </button>
                  <span>
                    Player <strong className="text-white">{currentIndex + 1}</strong> of <strong>{totalSlides}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Photograph Showcase: 5 cols on lg */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[500px] overflow-hidden bg-gradient-to-t from-[#151515] to-transparent lg:bg-none">
              <img
                src={currentPlayer.image}
                alt={currentPlayer.name}
                onError={handleImageError}
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-all duration-700 ease-out scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent lg:hidden" />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#151515] to-transparent hidden lg:block" />

              {/* Large Stylized Player Number Watermark */}
              <div className="absolute bottom-4 right-6 pointer-events-none select-none text-8xl md:text-9xl font-black text-white/10 font-heading">
                {currentPlayer.number}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous Player"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#702B3D] text-white border border-white/20 flex items-center justify-center transition-all duration-200 backdrop-blur-md hover:scale-110 active:scale-95 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Player"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#702B3D] text-white border border-white/20 flex items-center justify-center transition-all duration-200 backdrop-blur-md hover:scale-110 active:scale-95 shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Pagination Dots Bar: All 7 Players Listed */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {playersData.map((player, idx) => (
            <button
              key={player.id}
              onClick={() => setCurrentIndex(idx)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${
                currentIndex === idx
                  ? 'bg-[#D2B779] text-[#103D35] border-[#D2B779] shadow-lg scale-105'
                  : 'bg-white/5 hover:bg-white/15 text-gray-300 border-white/10'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${currentIndex === idx ? 'bg-[#103D35]' : 'bg-gray-400'}`} />
              <span className="hidden md:inline">{player.name}</span>
              <span className="md:hidden">{player.nickname}</span>
              <span className="text-[10px] opacity-75">#{player.number}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
