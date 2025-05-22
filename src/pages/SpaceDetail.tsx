
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Users, Clock, BadgeCheck, MessageSquare, X } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ALL_SPACES } from '@/pages/Spaces';
import { Space } from '@/components/SpaceCard';
import SpaceGallery from '@/components/SpaceGallery';
import { useEffect as useEmblaEffect } from "embla-carousel-react";

const SpaceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [space, setSpace] = useState<Space | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);

  useEffect(() => {
    // En un entorno real, esto sería una llamada a la API
    const foundSpace = ALL_SPACES.find(s => s.id === id);
    setSpace(foundSpace || null);
    setLoading(false);
  }, [id]);

  // Efecto para controlar la imagen seleccionada en el carrusel
  useEffect(() => {
    if (carouselApi && imageModalOpen) {
      carouselApi.scrollTo(selectedImageIndex);
    }
  }, [carouselApi, selectedImageIndex, imageModalOpen]);

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setImageModalOpen(true);
  };

  // Handler para SpaceGallery
  const handleImageClick = (index: number) => {
    openImageModal(index);
  };

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

  // Función para convertir Euro a Peso Argentino (tipo de cambio aproximado)
  const eurToArs = (eurAmount: number) => {
    const exchangeRate = 1200; // Tipo de cambio aproximado EUR a ARS
    return Math.round(eurAmount * exchangeRate);
  };

  const priceInArs = eurToArs(space.pricePerHour);

  return (
    <Layout>
      <div className="container py-4 md:py-8">
        {/* Navegación */}
        <div className="mb-4 md:mb-6">
          <Button variant="ghost" asChild className="px-0 -ml-3">
            <a href="/spaces">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a espacios
            </a>
          </Button>
        </div>
        
        {/* Galería de imágenes con click para abrir modal */}
        <div onClick={() => handleImageClick(0)}>
          <SpaceGallery images={space.images} title={space.name} onImageClick={handleImageClick} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-8">
          {/* Información principal */}
          <div className="md:col-span-2">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {space.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>
            
            <Card className="mb-6">
              <CardContent className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-medium mb-4">Acerca de este espacio</h2>
                <p className="text-gray-700">{space.description}</p>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-medium mb-4">Ubicación</h2>
                <p className="mb-1 font-medium">{space.neighborhood}</p>
                <p className="text-gray-700">{space.city}, Argentina</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar con información de reserva */}
          <div>
            <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-100 shadow-sm sticky top-24">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <p className="text-xl md:text-2xl font-bold">ARS {priceInArs.toLocaleString()} <span className="text-sm font-normal">/hora</span></p>
                <span className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  Mín. 2 horas
                </span>
              </div>
              
              {space.revenueShare > 0 && (
                <div className="bg-green-50 p-3 rounded-md flex items-center mb-4 md:mb-6 text-green-800">
                  <BadgeCheck className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Opción de revenue share: {space.revenueShare}%</span>
                </div>
              )}
              
              <div className="mb-4 md:mb-6">
                <div className="flex items-center mb-2 text-gray-700">
                  <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>Hasta {space.capacity} personas</span>
                </div>
              </div>
              
              <Button className="w-full mb-3">Reservar</Button>
              <Button variant="outline" className="w-full">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contactar al anfitrión
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para galería de imágenes */}
      <Dialog open={imageModalOpen} onOpenChange={setImageModalOpen}>
        <DialogContent className="sm:max-w-5xl p-0 bg-black/95 border-none max-h-screen overflow-hidden" onClick={(e) => e.stopPropagation()}>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-4 z-50 text-white bg-black/50 hover:bg-black/70 rounded-full"
            onClick={() => setImageModalOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>

          <Carousel className="w-full px-4 py-6" setApi={setCarouselApi}>
            <CarouselContent>
              {space.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="flex items-center justify-center h-[80vh]">
                    <img 
                      src={image} 
                      alt={`${space.name} - imagen ${index + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-6 text-white bg-black/50 hover:bg-black/70" />
            <CarouselNext className="right-6 text-white bg-black/50 hover:bg-black/70" />
          </Carousel>

          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center">
            <div className="bg-black/70 px-4 py-2 rounded-full text-white text-sm">
              {selectedImageIndex + 1} / {space.images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default SpaceDetail;
