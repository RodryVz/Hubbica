
import { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface SpaceGalleryProps {
  images: string[];
  title: string;
}

const SpaceGallery = ({ images, title }: SpaceGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (images.length === 0) {
    return null;
  }

  // Si solo hay una imagen, mostrarla sin galería
  if (images.length === 1) {
    return (
      <div className="overflow-hidden rounded-lg">
        <AspectRatio ratio={16/9}>
          <img 
            src={images[0]} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </div>
    );
  }

  // Layout para múltiples imágenes similar a la imagen de referencia
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-display font-bold">{title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Imagen grande a la izquierda */}
        <div className="md:col-span-2 overflow-hidden rounded-lg">
          <AspectRatio ratio={4/3}>
            <img 
              src={images[0]} 
              alt={`${title} - imagen principal`} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </AspectRatio>
        </div>
        
        {/* Columna de imágenes a la derecha */}
        <div className="grid grid-cols-1 gap-2">
          {images.slice(1, 3).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <AspectRatio ratio={1}>
                <img 
                  src={image} 
                  alt={`${title} - imagen ${index + 2}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
      
      {/* Imágenes adicionales en carrusel si hay más de 3 */}
      {images.length > 3 && (
        <Carousel className="w-full">
          <CarouselContent>
            {images.slice(3).map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="overflow-hidden rounded-lg p-1">
                  <AspectRatio ratio={1}>
                    <img 
                      src={image} 
                      alt={`${title} - imagen adicional ${index + 4}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      )}
    </div>
  );
};

export default SpaceGallery;
