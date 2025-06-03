
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Wallet, Calendar } from 'lucide-react';

const HowToHost = () => {
  return (
    <Layout>
      <div className="py-12 md:py-16 lg:py-24 container">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-display font-bold mb-4 md:mb-6 leading-tight">
              Transformá tu espacio en una fuente de <span className="text-brand-purple">ingresos extraordinarios</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto px-4 sm:px-0 leading-relaxed">
              Rentabilizá tus espacios sin utilizar y creá nuevas oportunidades de negocio sin inversión inicial
            </p>
          </div>

          {/* Steps - Enhanced with much better UI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16 px-4 md:px-0 relative">
            {/* Connecting line for visual flow */}
            <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-brand-purple via-brand-purple/30 to-transparent -translate-x-1/2 hidden md:block"></div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 relative group z-10">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-deep-purple text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform md:w-14 md:h-14 md:text-xl">
                1
              </div>
              
              <div className="mt-6 text-center mb-4">
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-brand-purple transition-colors">Creá tu perfil</h3>
                <div className="h-1 w-10 bg-brand-purple/30 mx-auto rounded-full"></div>
              </div>
              
              <p className="text-gray-600 text-center">
                Es 100% gratis empezar. Solo subí fotos, elegí el precio y contá cómo es tu propiedad o espacio para alquilar por hora.
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-4 w-4 text-brand-purple" />
                  <span className="text-sm">Sin comisiones iniciales</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 relative group z-10 md:mt-8">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-deep-purple text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform md:w-14 md:h-14 md:text-xl">
                2
              </div>
              
              <div className="mt-6 text-center mb-4">
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-brand-purple transition-colors">Publicá tu espacio</h3>
                <div className="h-1 w-10 bg-brand-purple/30 mx-auto rounded-full"></div>
              </div>
              
              <p className="text-gray-600 text-center">
                Cargá uno o varios espacios, configurá los horarios disponibles y empezá a recibir consultas de usuarios verificados.
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-4 w-4 text-brand-purple" />
                  <span className="text-sm">Control total de tu agenda</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 relative group z-10">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-deep-purple text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform md:w-14 md:h-14 md:text-xl">
                3
              </div>
              
              <div className="mt-6 text-center mb-4">
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-brand-purple transition-colors">Ganá plata</h3>
                <div className="h-1 w-10 bg-brand-purple/30 mx-auto rounded-full"></div>
              </div>
              
              <p className="text-gray-600 text-center">
                Recibí potenciales clientes para tu espacio. Desde eventos privados hasta sesiones de foto, reuniones corporativas y más.
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-700">
                  <Wallet className="h-4 w-4 text-brand-purple" />
                  <span className="text-sm">Ingresos recurrentes</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - Enhanced with better visual appeal */}
          <div className="bg-gradient-to-r from-brand-purple/25 to-white p-8 lg:p-12 rounded-2xl text-center mx-4 md:mx-0 shadow-sm border border-brand-purple/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/15 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/15 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
                ¿Listo para empezar a generar ingresos?
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Unite a miles de anfitriones que ya están multiplicando sus ingresos compartiendo sus espacios.
              </p>
              <Link to="https://tally.so/r/wzo8MZ" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full group">
                  Crear mi espacio ahora 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowToHost;
