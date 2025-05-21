
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import IntentSearch from './IntentSearch';

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background image with enhanced visibility */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/70 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-4">
          <div className="text-center md:text-left md:w-1/2 animate-fade-in space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Espacios únicos para <span className="text-brand-purple">experiencias</span> inolvidables
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">
              Describe la experiencia que quieres crear y encuentra el espacio perfecto para hacerla realidad.
            </p>
            
            <div className="w-full max-w-xl mx-auto md:mx-0">
              <IntentSearch />
            </div>
            
            <div className="pt-2 md:pt-4 flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
              <Link to="/spaces">
                <Button variant="outline" className="rounded-full">
                  Explorar espacios
                </Button>
              </Link>
              <Link to="/how-to-host">
                <Button className="rounded-full">
                  Publica tu espacio
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 animate-fade-in">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Espacio destacado" 
                className="w-full aspect-[3/4] object-cover animate-float"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <p className="font-display font-medium text-lg">Encuentra tu próximo espacio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
