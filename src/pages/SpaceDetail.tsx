import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Users, Euro, Clock, BadgeCheck } from 'lucide-react';
import { Whatsapp } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ALL_SPACES } from '@/pages/Spaces';
import { Space } from '@/components/SpaceCard';
import SpaceGallery from '@/components/SpaceGallery';

const SpaceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [space, setSpace] = useState<Space | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // En un entorno real, esto sería una llamada a la API
    const foundSpace = ALL_SPACES.find(s => s.id === id);
    setSpace(foundSpace || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container py-8 animate-pulse">
          <div className="h-8 w-1/3 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
              <div className="h-24 bg-gray-200 rounded mb-4"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!space) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Espacio no encontrado</h1>
          <p className="mb-8">El espacio que buscas no existe o ha sido eliminado.</p>
          <Button asChild>
            <a href="/spaces">Ver todos los espacios</a>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        {/* Navegación */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="px-0 -ml-3">
            <a href="/spaces">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a espacios
            </a>
          </Button>
        </div>
        
        {/* Galería de imágenes */}
        <SpaceGallery images={space.images} title={space.name} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Información principal */}
          <div className="md:col-span-2">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {space.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>
            
            <h2 className="text-xl font-medium mb-2">Acerca de este espacio</h2>
            <p className="text-gray-700 mb-8">{space.description}</p>
            
            <Separator className="my-8" />
            
            <h2 className="text-xl font-medium mb-4">Ubicación</h2>
            <p className="mb-1">{space.neighborhood}</p>
            <p className="text-gray-700">{space.city}, España</p>
          </div>
          
          {/* Sidebar con información de reserva */}
          <div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <p className="text-2xl font-bold">{space.pricePerHour}€ <span className="text-sm font-normal">/hora</span></p>
                <span className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  Mín. 2 horas
                </span>
              </div>
              
              {space.revenueShare > 0 && (
                <div className="bg-green-50 p-3 rounded-md flex items-center mb-6 text-green-800">
                  <BadgeCheck className="h-5 w-5 mr-2" />
                  <span className="text-sm">Opción de revenue share: {space.revenueShare}%</span>
                </div>
              )}
              
              <div className="mb-6">
                <div className="flex items-center mb-2 text-gray-700">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Hasta {space.capacity} personas</span>
                </div>
              </div>
              
              <Button className="w-full mb-3">Reservar</Button>
              <Button variant="outline" className="w-full">
                <Whatsapp className="h-4 w-4 mr-2" />
                Contactar al anfitrión
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SpaceDetail;
