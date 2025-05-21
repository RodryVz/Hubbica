
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
  onImageClick?: (index: number) => void;
}

const SpaceGallery = ({ images, title, onImageClick }: SpaceGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (images.length === 0) {
    return null;
  }

  const handleImageClick = (index: number) => {
    if (onImageClick) {
      onImageClick(index);
    }
  };

  // Si solo hay una imagen, mostrarla sin galería
  if (images.length === 1) {
    return (
      <div className="overflow-hidden rounded-lg cursor-pointer" onClick={() => handleImageClick(0)}>
        <AspectRatio ratio={16/9}>
          <img 
            src={images[0]} 
            alt={title} 
            className="w-full h-full object-cover hover:opacity-95 transition-opacity"
          />
        </AspectRatio>
      </div>
    );
  }

  // Layout para múltiples imágenes con diseño ajustado para mostrar 3 imágenes
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-display font-bold">{title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[450px]">
        {/* Imagen grande a la izquierda */}
        <div 
          className="md:col-span-2 md:row-span-2 overflow-hidden rounded-lg cursor-pointer"
          onClick={() => handleImageClick(0)}
        >
          <img 
            src={images[0]} 
            alt={`${title} - imagen principal`} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Dos imágenes a la derecha, una encima de otra */}
        <div 
          className="hidden md:block md:col-span-2 overflow-hidden rounded-lg cursor-pointer"
          onClick={() => handleImageClick(1)}
        >
          <img 
            src={images[1]} 
            alt={`${title} - imagen 2`} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div 
          className="hidden md:block md:col-span-2 overflow-hidden rounded-lg cursor-pointer"
          onClick={() => handleImageClick(2)}
        >
          <img 
            src={images[2] || images[1]} 
            alt={`${title} - imagen 3`} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      {/* Imágenes adicionales en carrusel si hay más de 3 */}
      {images.length > 3 && (
        <Carousel className="w-full">
          <CarouselContent>
            {images.slice(3).map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div 
                  className="overflow-hidden rounded-lg p-1 cursor-pointer"
                  onClick={() => handleImageClick(index + 3)}
                >
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
