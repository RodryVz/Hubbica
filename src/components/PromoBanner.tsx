
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

/**
 * CONFIGURABLE SECTION: Promotional Items
 * 
 * This is where you define the promotional banners that will be displayed.
 * To add or modify promotions, edit this array.
 * 
 * Each promotion should have:
 * - id: Unique identifier
 * - title: Main promotional heading
 * - description: Short description text
 * - discount: Highlight text (e.g. "20% OFF")
 * - image: Background image URL
 * - venue: Type of venue or location
 * - link: Where clicking the promo should navigate to
 */
type PromoItem = {
  id: string;
  title: string;
  description: string;
  discount: string;
  image: string;
  venue: string;
  link: string;
}

const PROMO_ITEMS: PromoItem[] = [
  {
    id: "promo1",
    title: "Descuentos exclusivos en salones premium",
    description: "20% off en salones de eventos para cumpleaños y celebraciones. Solo disponible reservando a través de hubbica.",
    discount: "20% OFF",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    venue: "Salones Premium",
    link: "/promos"
  },
  {
    id: "promo2",
    title: "Espacios para workshops con precios especiales",
    description: "15% off en espacios para talleres y eventos formativos. Oferta exclusiva para usuarios de hubbica.",
    discount: "15% OFF",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    venue: "Co-works selectos",
    link: "/promos"
  },
  {
    id: "promo3",
    title: "Happy hour extendido exclusivo",
    description: "Bares con happy hour extendido solo para reservas por hubbica. ¡No te lo pierdas!",
    discount: "2x1",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    venue: "Bares seleccionados",
    link: "/promos"
  }
];

/**
 * PromoBanner component - Promotional carousel banner
 * 
 * This component displays a carousel of promotional items with navigation controls.
 * 
 * TO MODIFY:
 * - To change promotions: Edit the PROMO_ITEMS array above
 * - To change the layout/design: Update the JSX structure below
 * - To change behavior: Modify the state and navigation functions
 */
const PromoBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const currentPromo = PROMO_ITEMS[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % PROMO_ITEMS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + PROMO_ITEMS.length) % PROMO_ITEMS.length);
  };

  return (
    <div className="relative overflow-hidden mx-auto my-8 max-w-6xl px-4">
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full" 
        onClick={() => setIsOpen(false)}
        aria-label="Cerrar promoción"
      >
        <X size={16} />
      </Button>
      
      <Link to={currentPromo.link} className="block group">
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${currentPromo.image})` }}
            aria-hidden="true"
          />
          
          {/* Gradient Overlay - Enhanced for mobile */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/60 to-black/20 md:to-transparent" aria-hidden="true" />
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-end md:items-center">
            <div className="container max-w-5xl">
              <div className="max-w-2xl px-4 pb-6 md:pb-0">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={20} className="text-brand-orange" aria-hidden="true" />
                  <span className="text-white/90 font-medium text-sm md:text-base">Promociones exclusivas hubbica</span>
                </div>
                
                <div className="mb-3">
                  <span className="inline-block bg-brand-purple text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-base md:text-lg font-bold shadow-lg">
                    {currentPromo.discount}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-4xl font-display font-bold text-white mb-3 md:mb-4 leading-tight">
                  {currentPromo.title}
                </h2>
                
                <p className="text-white/90 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed line-clamp-2 md:line-clamp-none">
                  {currentPromo.description}
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
                  
                  
                  <span className="text-white/70 text-xs md:text-sm">
                    {currentPromo.venue}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          {PROMO_ITEMS.length > 1 && (
            <>
              <button
                onClick={(e) => { e.preventDefault(); prevSlide(); }}
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 md:p-3 transition-all duration-300"
                aria-label="Promoción anterior"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-white" aria-hidden="true" />
              </button>
              
              <button
                onClick={(e) => { e.preventDefault(); nextSlide(); }}
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 md:p-3 transition-all duration-300"
                aria-label="Promoción siguiente"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-white" aria-hidden="true" />
              </button>
            </>
          )}
          
          {/* Dots Indicator */}
          {PROMO_ITEMS.length > 1 && (
            <div className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {PROMO_ITEMS.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.preventDefault(); setCurrentIndex(index); }}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white scale-110' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Ver promoción ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default PromoBanner;
