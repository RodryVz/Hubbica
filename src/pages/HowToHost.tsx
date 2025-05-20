
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HowToHost = () => {
  return (
    <Layout>
      <div className="py-16 md:py-24 container">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Transformá tu espacio en una fuente de <span className="text-brand-purple">ingresos extraordinarios</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rentabilizá tus espacios sin utilizar y creá nuevas oportunidades de negocio sin inversión inicial
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="w-12 h-12 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Creá tu perfil</h3>
              <p className="text-gray-600">
                Es 100% gratis empezar. Solo subí fotos, elegí el precio y contá cómo es tu propiedad o espacio para alquilar por hora.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="w-12 h-12 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Publicá tu espacio</h3>
              <p className="text-gray-600">
                Cargá uno o varios espacios, configurá los horarios disponibles y empezá a recibir consultas de usuarios verificados.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="w-12 h-12 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Ganá plata</h3>
              <p className="text-gray-600">
                Recibí potenciales clientes para tu espacio. Desde eventos privados hasta sesiones de foto, reuniones corporativas, alquilá tu propiedad por hora o día como más te guste.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-brand-purple/5 p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              ¿Listo para empezar a generar ingresos?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a miles de anfitriones que ya están multiplicando sus ingresos compartiendo sus espacios.
            </p>
            <Link to="/host">
              <Button size="lg" className="rounded-full">
                Crear mi espacio ahora <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowToHost;
