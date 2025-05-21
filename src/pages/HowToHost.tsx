
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HowToHost = () => {
  return (
    <Layout>
      <div className="py-12 md:py-16 lg:py-24 container">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 leading-tight">
              Transformá tu espacio en una fuente de <span className="text-brand-purple">ingresos extraordinarios</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 md:px-0">
              Rentabilizá tus espacios sin utilizar y creá nuevas oportunidades de negocio sin inversión inicial
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 px-4 md:px-0">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-4 md:mb-6">
                1
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold mb-3 md:mb-4">Creá tu perfil</h3>
              <p className="text-sm md:text-base text-gray-600">
                Es 100% gratis empezar. Solo subí fotos, elegí el precio y contá cómo es tu propiedad o espacio para alquilar por hora.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-4 md:mb-6">
                2
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold mb-3 md:mb-4">Publicá tu espacio</h3>
              <p className="text-sm md:text-base text-gray-600">
                Cargá uno o varios espacios, configurá los horarios disponibles y empezá a recibir consultas de usuarios verificados.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-4 md:mb-6">
                3
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold mb-3 md:mb-4">Ganá plata</h3>
              <p className="text-sm md:text-base text-gray-600">
                Recibí potenciales clientes para tu espacio. Desde eventos privados hasta sesiones de foto, reuniones corporativas, alquilá tu propiedad por hora o día como más te guste.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-brand-purple/5 p-6 md:p-8 lg:p-12 rounded-2xl text-center mx-4 md:mx-0">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-4">
              ¿Listo para empezar a generar ingresos?
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              Únete a miles de anfitriones que ya están multiplicando sus ingresos compartiendo sus espacios.
            </p>
            <Link to="/host">
              <Button size="lg" className="rounded-full">
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
