import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import SpaceCard, { Space } from '@/components/SpaceCard';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { ArrowRight } from 'lucide-react';
import PromoBanner from '@/components/PromoBanner';
import WhatsAppButton from '@/components/WhatsAppButton';

// Mock data for featured spaces
const FEATURED_SPACES: Space[] = [
  {
    id: '1',
    name: 'Terraza con Vista Panorámica',
    description: 'Terraza con vista panorámica al centro histórico, perfecta para eventos sociales y afterworks.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1580541631971-c7f8f8a1f407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    ],
    city: 'Barcelona',
    neighborhood: 'Gracia',
    pricePerHour: 120,
    revenueShare: 15,
    capacity: 50,
    tags: ['Terraza', 'Vistas', 'Exterior', 'Bar'],
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Estudio Industrial para Talleres',
    description: 'Espacioso estudio de estilo industrial ideal para workshops, sesiones fotográficas o presentaciones.',
    images: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ],
    city: 'Madrid',
    neighborhood: 'Malasaña',
    pricePerHour: 80,
    revenueShare: 0,
    capacity: 30,
    tags: ['Industrial', 'Taller', 'Creativo'],
    rating: 4.6,
  },
  {
    id: '3',
    name: 'Loft con Cocina para Events',
    description: 'Acogedor loft con cocina profesional integrada, perfecto para eventos gastronómicos y cenas privadas.',
    images: [
      'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ],
    city: 'Valencia',
    neighborhood: 'Ruzafa',
    pricePerHour: 100,
    revenueShare: 10,
    capacity: 20,
    tags: ['Cocina', 'Loft', 'Cenas'],
    rating: 4.9,
  },
  {
    id: '4',
    name: 'Sala de Yoga con Jardín',
    description: 'Tranquilo espacio para prácticas de yoga, meditación o actividades de bienestar con acceso a jardín.',
    images: [
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
    ],
    city: 'Sevilla',
    neighborhood: 'Triana',
    pricePerHour: 45,
    revenueShare: 0,
    capacity: 15,
    tags: ['Yoga', 'Jardín', 'Wellness'],
    rating: 4.7,
  },
];

// Mock data for space categories
const CATEGORIES = [
  {
    id: 'parties',
    name: 'Fiestas',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'workshops',
    name: 'Talleres',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'photoshoots',
    name: 'Fotografía',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'meetings',
    name: 'Reuniones',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
];

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
            <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Publica tu espacio"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden flex items-end">
                    <h2 className="text-2xl font-display font-bold text-white p-6">
                      Monetizá tu espacio
                    </h2>
                  </div>
                </div>
                
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h2 className="hidden md:block text-3xl font-display font-bold mb-4 text-gray-900">
                    Monetizá tu espacio
                  </h2>
                  
                  <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                    Transformá tu espacio en una fuente de ingresos. Generá ganancias alquilando por horas o días.
                  </p>
                  
                  <ul className="mb-8 space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-gray-700">Sin inversión inicial</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-gray-700">Flexibilidad total</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                      <span className="text-gray-700">Ingresos recurrentes</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </div>
        </section>
        
      </main>
    </Layout>
  );
};

export default Index;
