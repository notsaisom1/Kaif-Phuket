import React, { useState, useRef, useEffect } from 'react';
import { promotions as fallbackPromotions, getCurrentDayIndex } from '../data/promotions';
import { useCms } from '../context/CmsContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PromotionsSlider: React.FC = () => {
  const { promotions: cmsPromotions } = useCms();
  const promotions = cmsPromotions?.length ? cmsPromotions : fallbackPromotions;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentDay = getCurrentDayIndex();

  // Auto-scroll to today's promotion on mount
  useEffect(() => {
    const todayIndex = promotions.findIndex(p => p.dayIndex === currentDay);
    if (todayIndex !== -1) {
      setCurrentIndex(todayIndex);
      // For mobile, scroll to today's promotion
      if (window.innerWidth < 1024 && scrollRef.current) {
        setTimeout(() => {
          const scrollAmount = todayIndex * (window.innerWidth * 0.85);
          scrollRef.current?.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [currentDay, promotions]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < promotions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(promotions.length - 1, prev + 1));
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Weekly Promotions
          </h2>
          <p className="text-lg text-gray-600">
            Special offers every day of the week
          </p>
        </div>

        {/* Desktop View - Show All */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                promo.dayIndex === currentDay ? 'ring-4 ring-opacity-50' : ''
              }`}
              style={{
                aspectRatio: '9/16',
                ...(promo.dayIndex === currentDay ? { '--tw-ring-color': '#90B3A7' } as React.CSSProperties : {})
              }}
            >
              {/* Promotion Image */}
              <img
                src={promo.image}
                alt={promo.dayOfWeek}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ display: 'block' }}
              />
              {/* Today Indicator - Only show badge for today */}
              {promo.dayIndex === currentDay && (
                <div className="absolute top-4 right-4 px-3 py-1 text-white rounded-full text-xs font-bold animate-pulse shadow-lg z-10" style={{ backgroundColor: '#90B3A7' }}>
                  TODAY
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile View - Slider */}
        <div className="lg:hidden">
          {/* Slider Container with Navigation */}
          <div className="relative px-12">
            <div
              ref={scrollRef}
              className="overflow-hidden relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {promotions.map((promo) => (
                  <div
                    key={promo.id}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div
                      className={`relative overflow-hidden rounded-xl shadow-xl ${
                        promo.dayIndex === currentDay ? 'ring-4 ring-opacity-50' : ''
                      }`}
                      style={{
                        aspectRatio: '9/16',
                        ...(promo.dayIndex === currentDay ? { '--tw-ring-color': '#90B3A7' } as React.CSSProperties : {})
                      }}
                    >
                      {/* Promotion Image */}
                      <img
                        src={promo.image}
                        alt={promo.dayOfWeek}
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                        style={{ display: 'block' }}
                        draggable={false}
                      />
                      {/* Today Indicator - Only show badge for today */}
                      {promo.dayIndex === currentDay && (
                        <div className="absolute top-4 right-4 px-3 py-1 text-white rounded-full text-sm font-bold animate-pulse shadow-lg z-10 pointer-events-none" style={{ backgroundColor: '#90B3A7' }}>
                          TODAY
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 pointer-events-none">
              <button
                onClick={goToPrevious}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/90 rounded-full shadow-lg transition-opacity pointer-events-auto ${
                  currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                }`}
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={goToNext}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/90 rounded-full shadow-lg transition-opacity pointer-events-auto ${
                  currentIndex === promotions.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                }`}
                disabled={currentIndex === promotions.length - 1}
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                style={index === currentIndex ? { backgroundColor: '#90B3A7' } : {}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSlider;