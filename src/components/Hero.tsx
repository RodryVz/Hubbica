
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import IntentSearch from './IntentSearch';

/**
 * Componente Hero - Sección principal de la página de inicio
 * 
 * Características:
 * - Diseño responsive optimizado para todos los dispositivos
 * - Imagen de fondo con overlay mejorado
 * - Integración de búsqueda por intención
 * - Botones de llamada a la acción
 * - Animación de aparición suave
 */
const Hero = () => {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      {/* Imagen de fondo con mejor visibilidad */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Fondo" 
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 to-white/65 backdrop-blur-[1px]"></div>
      </div>
      
      <div className="container max-w-6xl relative z-10">
        <div className="text-center space-y-8 md:space-y-10 animate-fade-in">
          {/* Título principal optimizado */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight max-w-5xl mx-auto">
            Espacios únicos para <span className="text-brand-purple">experiencias</span> inolvidables
          </h1>
          
          {/* Descripción más proporcionada */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
            Describe la experiencia que quieres crear y encuentra el espacio perfecto
          </p>
          
          {/* Barra de búsqueda con ancho optimizado */}
          <div className="w-full max-w-xl mx-auto px-4 sm:px-0">
            <IntentSearch />
          </div>
          
          {/* Botones de acción mejorados */}
          <div className="pt-6 flex flex-wrap gap-4 justify-center">
            <Link to="/spaces">
              <Button 
                variant="outline" 
                className="rounded-full text-sm sm:text-base px-8 py-3.5 border-2 border-brand-purple/30 hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              >
                Explorar espacios
              </Button>
            </Link>
            <Link to="/how-to-host">
              <Button 
                className="rounded-full text-sm sm:text-base px-8 py-3.5 bg-gradient-to-r from-brand-purple to-brand-deep-purple hover:from-brand-deep-purple hover:to-brand-purple transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
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
