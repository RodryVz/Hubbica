
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import SpaceCard from '@/components/SpaceCard';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { ArrowRight } from 'lucide-react';
import PromoBanner from '@/components/PromoBanner';
import WhatsAppButton from '@/components/WhatsAppButton';

// Importar datos desde archivos separados
import { FEATURED_SPACES } from '@/data/espacios/featured';
import { CATEGORIES } from '@/data/espacios/categories';

const Index = () => {
  return (
    <Layout>
      <main className="flex-grow">
        <Hero />
        
        {/* Promotional Banner */}
        <PromoBanner />
        
        {/* Featured spaces */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-display font-bold">
                Espacios destacados
              </h2>
              <Link to="/spaces">
                <Button variant="outline">Ver todos</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURED_SPACES.map((space) => (
                <SpaceCard key={space.id} space={space} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Categories - Enhanced with subtle animations and improved visuals */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">
              Explora por tipo de experiencia
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
              Descubrí espacios únicos para todo tipo de actividades y eventos, desde fiestas íntimas hasta sesiones profesionales
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {CATEGORIES.map((category) => (
                <Link 
                  key={category.id} 
                  to={`/spaces?category=${category.id}`} 
                  className="group"
                >
                  <div className="rounded-xl overflow-hidden aspect-square relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-5 w-full">
                        <h3 className="text-white font-medium text-lg mb-1">{category.name}</h3>
                        <span className="text-white/80 text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Explorar <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* How it works - Completely redesigned with better visuals */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-white -z-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-purple/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-orange/5 rounded-full -ml-10 -mb-10 blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">
                ¿Cómo funciona?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Encontrá tu espacio ideal y viví experiencias únicas en solo tres simples pasos
              </p>
            </div>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-1/2 top-24 bottom-24 w-0.5 bg-gradient-to-b from-brand-purple via-brand-purple/50 to-transparent hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-5xl mx-auto">
                <div className="relative group">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8 text-center relative overflow-hidden border border-gray-100 h-full">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full -mr-12 -mt-12"></div>
                    
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-deep-purple text-white rounded-full flex items-center justify-center mb-6 text-xl font-bold mx-auto relative z-10 group-hover:scale-110 transition-transform shadow-md">1</div>
                    
                    <h3 className="text-xl font-display mb-3 group-hover:text-brand-purple transition-colors">Describí tu experiencia</h3>
                    
                    <p className="text-gray-600">
                      Contanos qué tipo de evento querés organizar y te sugeriremos los espacios ideales.
                    </p>
                    
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-block bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full text-sm">
                        Fácil de usar
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="relative group md:mt-12">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8 text-center relative overflow-hidden border border-gray-100 h-full">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full -mr-12 -mt-12"></div>
                    
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-deep-purple text-white rounded-full flex items-center justify-center mb-6 text-xl font-bold mx-auto relative z-10 group-hover:scale-110 transition-transform shadow-md">2</div>
                    
                    <h3 className="text-xl font-display mb-3 group-hover:text-brand-purple transition-colors">Contactá al anfitrión</h3>
                    
                    <p className="text-gray-600">
                      Reservá directamente o acordá un modelo de monetización compartida con el anfitrión.
                    </p>
                    
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-block bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full text-sm">
                        Comunicación directa
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8 text-center relative overflow-hidden border border-gray-100 h-full">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full -mr-12 -mt-12"></div>
                    
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-deep-purple text-white rounded-full flex items-center justify-center mb-6 text-xl font-bold mx-auto relative z-10 group-hover:scale-110 transition-transform shadow-md">3</div>
                    
                    <h3 className="text-xl font-display mb-3 group-hover:text-brand-purple transition-colors">Viví la experiencia</h3>
                    
                    <p className="text-gray-600">
                      Disfrutá del espacio y compartí fotos para ayudar a que la comunidad crezca.
                    </p>
                    
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-block bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full text-sm">
                        Momentos únicos
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/how-to-host">
                <Button size="lg" className="rounded-full group">
                  Saber más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Become a host - Simplified and minimalist design */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-6">
                Monetizá tu espacio
              </h2>
              
              <p className="text-xl mb-8 text-gray-600">
                Transformá tu espacio en una fuente de ingresos sin inversión inicial.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Link to="/how-to-host" className="flex-1">
                  <Button 
                    size="lg" 
                    className="w-full rounded-lg bg-brand-purple hover:bg-brand-deep-purple transition-colors"
                  >
                    Publicá tu espacio
                  </Button>
                </Link>
                
                <WhatsAppButton 
                  phoneNumber="5491234567890"
                  message="Hola! Me interesa publicar mi espacio en Hubbica. ¿Podrías contarme más sobre cómo funciona?"
                  variant="outline"
                  className="px-6 py-3 rounded-lg border-gray-300 hover:bg-gray-50 transition-colors"
                  trackingSource="monetize-section"
                >
                  Consultá
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </Layout>
  );
};

export default Index;
