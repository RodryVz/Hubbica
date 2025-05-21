
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HowToHost = () => {
  return (
    <Layout>
      <div className="py-8 md:py-12 lg:py-16 container">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold mb-3 md:mb-5 leading-tight px-4 md:px-0">
              Transformá tu espacio en una fuente de <span className="text-brand-purple">ingresos extraordinarios</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 md:px-0">
              Rentabilizá tus espacios sin utilizar y creá nuevas oportunidades de negocio sin inversión inicial
            </p>
          </div>

          {/* Steps - Improved responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 px-4 md:px-0">
            <div className="bg-white p-5 md:p-6 lg:p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="w-10 h-10 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center font-bold text-lg mb-3 md:mb-4">
                1
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-display font-bold mb-2 md:mb-3">Creá tu perfil</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">
                Es 100% gratis empezar. Solo subí fotos, elegí el precio y contá cómo es tu propiedad o espacio para alquilar por hora.
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 lg:p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="w-10 h-10 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center font-bold text-lg mb-3 md:mb-4">
                2
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-display font-bold mb-2 md:mb-3">Publicá tu espacio</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">
                Cargá uno o varios espacios, configurá los horarios disponibles y empezá a recibir consultas de usuarios verificados.
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 lg:p-8 rounded-xl shadow-sm border border-gray-100 relative sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center font-bold text-lg mb-3 md:mb-4">
                3
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-display font-bold mb-2 md:mb-3">Ganá plata</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">
                Recibí potenciales clientes para tu espacio. Desde eventos privados hasta sesiones de foto, reuniones corporativas, alquilá tu propiedad por hora o día como más te guste.
              </p>
            </div>
          </div>

          {/* CTA Section - Fixed responsive padding */}
          <div className="bg-brand-purple/5 p-5 md:p-8 lg:p-10 rounded-2xl text-center mx-4 md:mx-0">
            <h2 className="text-lg md:text-xl lg:text-2xl font-display font-bold mb-2 md:mb-3">
              ¿Listo para empezar a generar ingresos?
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 lg:mb-8 max-w-2xl mx-auto">
              Únete a miles de anfitriones que ya están multiplicando sus ingresos compartiendo sus espacios.
            </p>
            <Link to="/host">
              <Button size="lg" className="rounded-full text-sm md:text-base">
                Crear mi espacio ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowToHost;
