
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SpaceCard, { Space } from '@/components/SpaceCard';
import { Button } from '@/components/ui/button';

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              Explora por tipo de experiencia
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {CATEGORIES.map((category) => (
                <Link 
                  key={category.id} 
                  to={`/spaces?category=${category.id}`} 
                  className="group"
                >
                  <div className="rounded-xl overflow-hidden aspect-square relative">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <h3 className="text-white font-medium p-4">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured spaces */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-display font-bold">
                Espacios destacados
              </h2>
              <Link to="/spaces">
                <Button variant="outline">Ver todos</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURED_SPACES.map((space) => (
                <SpaceCard key={space.id} space={space} />
              ))}
            </div>
          </div>
        </section>
        
        {/* How it works */}
        <section className="py-16 bg-brand-purple/5">
          <div className="container">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">
              ¿Cómo funciona?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-purple text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-display mb-2">Describe tu experiencia</h3>
                <p className="text-gray-600">
                  Cuéntanos qué tipo de evento quieres organizar y te sugeriremos los espacios ideales.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-purple text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-display mb-2">Contacta al anfitrión</h3>
                <p className="text-gray-600">
                  Reserva directamente o acuerda un modelo de monetización compartida con el anfitrión.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-purple text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-display mb-2">Vive la experiencia</h3>
                <p className="text-gray-600">
                  Disfruta del espacio y comparte fotos para ayudar a la comunidad a crecer.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/how-it-works">
                <Button variant="outline">Saber más</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Become a host */}
        <section className="py-16">
          <div className="container">
            <div className="bg-brand-deep-purple/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-display font-bold mb-4">
                  ¿Tienes un espacio único?
                </h2>
                <p className="text-lg mb-6">
                  Monetiza tu espacio por hora o comparte los ingresos de los eventos que se realicen en él.
                </p>
                <Link to="/host">
                  <Button size="lg">Conviértete en anfitrión</Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Become a host"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
