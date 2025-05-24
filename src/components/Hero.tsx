import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import IntentSearch from './IntentSearch';

/**
 * Hero component - Main landing page hero section
 * 
 * Features:
 * - Responsive layout for all devices
 * - Background image with overlay
 * - Intent-based search integration
 * - Call-to-action buttons
 * - Fade-in animation
 */
const Hero = () => {
  return (
    <div className="relative overflow-hidden py-12 sm:py-20 md:py-28">
      {/* Background image with enhanced visibility */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/60 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container max-w-5xl relative z-10">
        <div className="text-center space-y-6 md:space-y-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-bold leading-tight">
            Espacios únicos para <span className="text-brand-purple">experiencias</span> inolvidables
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Describe la experiencia que quieres crear y encuentra el espacio perfecto para hacerla realidad.
          </p>
          
          <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
            <IntentSearch />
          </div>
          
          <div className="pt-4 flex flex-wrap gap-4 justify-center">
            <Link to="/spaces">
              <Button variant="outline" className="rounded-full text-sm sm:text-base px-6 py-3 border-2 border-brand-purple/30 hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 font-medium shadow-sm hover:shadow-md">
                Explorar espacios
              </Button>
            </Link>
            <Link to="/how-to-host">
              <Button className="rounded-full text-sm sm:text-base px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-deep-purple hover:from-brand-deep-purple hover:to-brand-purple transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Publica tu espacio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
