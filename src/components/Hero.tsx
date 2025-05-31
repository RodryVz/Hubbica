import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import IntentSearch from './IntentSearch';

/**
 * Componente Hero - Sección principal de la página de inicio
 * 
 * Características:
 * - Diseño responsive optimizado para todos los dispositivos
 * - Altura optimizada para mostrar todo el contenido sin scroll
 * - Imagen de fondo con overlay mejorado
 * - Integración de búsqueda por intención
 * - Botones de llamada a la acción
 * - Animación de aparición suave
 * - Espaciado dinámico optimizado para móvil
 */
const Hero = () => {
  return (
    <div className="relative overflow-hidden py-4 sm:py-8 md:py-12 lg:py-16 min-h-[75vh] sm:min-h-[85vh] flex items-center">
      {/* Imagen de fondo con mejor visibilidad */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Fondo" 
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 to-white/65 backdrop-blur-[1px]"></div>
      </div>
      
      <div className="container max-w-6xl relative z-10 w-full px-4 sm:px-6">
        <div className="text-center animate-fade-in">
          {/* Título principal optimizado */}
          <div className="mb-3 sm:mb-5 md:mb-6 lg:mb-8">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-5xl mx-auto px-2 sm:px-0">
              Espacios únicos para <span className="text-brand-purple">experiencias</span> inolvidables
            </h1>
          </div>
          
          {/* Descripción más proporcionada */}
          <div className="mb-10 sm:mb-5 md:mb-6 lg:mb-8">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto px-2 sm:px-0 leading-relaxed">
              Describe la experiencia que quieres crear y encuentra el espacio perfecto
            </p>
          </div>
          
          {/* Barra de búsqueda con ancho optimizado y mejor responsive */}
          <div className="mb-10 sm:mb-5 md:mb-6 lg:mb-8">
            <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-2 sm:px-0">
              <IntentSearch />
            </div>
          </div>
          
          {/* Botones de acción mejorados con mejor espaciado móvil */}
          <div className="pt-1 sm:pt-3 md:pt-4 flex flex-col xs:flex-row gap-2 xs:gap-3 justify-center items-center max-w-sm xs:max-w-none mx-auto">
            <Link to="/spaces" className="w-full xs:w-auto">
              <Button 
                variant="outline" 
                className="w-full xs:w-auto rounded-full text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-brand-purple/30 hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              >
                Explorar espacios
              </Button>
            </Link>
            <Link to="/how-to-host" className="w-full xs:w-auto">
              <Button 
                className="w-full xs:w-auto rounded-full text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-brand-purple to-brand-deep-purple hover:from-brand-deep-purple hover:to-brand-purple transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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