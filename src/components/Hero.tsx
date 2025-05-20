
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import IntentSearch from './IntentSearch';

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-24 md:py-36">
      {/* Background image with blur effect */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm"></div>
      </div>
      
      <div className="container max-w-5xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Espacios únicos para <span className="text-brand-purple">experiencias</span> inolvidables
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Describe la experiencia que quieres crear y encuentra el espacio perfecto para hacerla realidad.
          </p>
          
          <div className="w-full max-w-2xl mx-auto">
            <IntentSearch />
          </div>
          
          <div className="pt-4 flex flex-wrap gap-4 justify-center">
            <Link to="/spaces">
              <Button variant="outline" className="rounded-full">
                Explorar espacios
              </Button>
            </Link>
            <Link to="/host">
              <Button className="rounded-full">
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
