
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

export type Space = {
  id: string;
  name: string;
  description: string;
  images: string[];
  city: string;
  neighborhood: string;
  pricePerHour: number;
  revenueShare: number;
  capacity: number;
  tags: string[];
  rating: number;
};

type SpaceCardProps = {
  space: Space;
};

const SpaceCard = ({ space }: SpaceCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % space.images.length);
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? space.images.length - 1 : prev - 1));
  };

  return (
    <Link to={`/spaces/${space.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 rounded-xl">
        <div className="relative">
          <AspectRatio ratio={4/3}>
            <img 
              src={space.images[currentImage]} 
              alt={space.name}
              className="object-cover w-full h-full rounded-t-xl"
            />
          </AspectRatio>
          
          {space.images.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.preventDefault(); prevImage(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
                aria-label="Imagen anterior"
              >
                ‹
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); nextImage(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            </>
          )}
          
          <div className="absolute bottom-2 right-2 flex gap-1">
            {space.images.map((_, index) => (
              <div 
                key={index}
                className={`w-1.5 h-1.5 rounded-full ${currentImage === index ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
        
        <CardContent className="p-4 space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-lg truncate pr-2">{space.name}</h3>
            <div className="flex items-center gap-1 text-sm bg-gray-100 px-2 py-1 rounded-full">
              <span>★</span>
              <span className="font-medium">{space.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            {space.neighborhood}, {space.city}
          </p>
          
          <div className="flex justify-between items-center pt-2">
            <div>
              <p className="font-medium text-brand-purple">
                ${space.pricePerHour.toLocaleString()}/hora
              </p>
              {space.revenueShare > 0 && (
                <p className="text-xs text-gray-500">
                  o {space.revenueShare}% de ingresos
                </p>
              )}
            </div>
            <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
              Hasta {space.capacity} personas
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SpaceCard;
