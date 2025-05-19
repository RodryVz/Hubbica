
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import IntentSearch from './IntentSearch';

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>
      
      <div className="container max-w-5xl">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Espacios únicos para <span className="text-brand-purple">experiencias</span> inolvidables
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Describe la experiencia que quieres crear y encuentra el espacio perfecto para hacerla realidad.
          </p>
          
          <div className="max-w-2xl mx-auto mt-8">
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
      
      {/* Trust indicators */}
      <div className="container mt-16">
        <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="font-display text-2xl font-bold text-brand-purple">250+</p>
              <p className="text-gray-600 text-sm">Espacios únicos</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-brand-purple">1200+</p>
              <p className="text-gray-600 text-sm">Experiencias creadas</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-brand-purple">98%</p>
              <p className="text-gray-600 text-sm">Usuarios satisfechos</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-brand-purple">5+</p>
              <p className="text-gray-600 text-sm">Ciudades disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
