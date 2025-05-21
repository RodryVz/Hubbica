
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Clock } from 'lucide-react';

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

/**
 * SpaceCard component - Displays space information in an attractive card format
 * 
 * Features:
 * - Image carousel with interactive navigation
 * - Smooth hover animations
 * - Responsive design
 * - Price, rating and capacity indicators
 * - Image indicator dots
 */
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
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-xl group hover:scale-[1.02] transform">
        <div className="relative">
          <AspectRatio ratio={4/3}>
            <img 
              src={space.images[currentImage]} 
              alt={space.name}
              className="object-cover w-full h-full rounded-t-xl group-hover:scale-105 transition-transform duration-500"
            />
          </AspectRatio>
          
          {/* Premium badge for featured spaces */}
          <div className="absolute top-3 left-3">
            <Badge variant="default" className="bg-brand-purple/90 text-white px-3 py-1 backdrop-blur-sm">
              Destacado
            </Badge>
          </div>
          
          {space.images.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.preventDefault(); prevImage(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Imagen anterior"
              >
                ‹
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); nextImage(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
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
                className={`w-1.5 h-1.5 rounded-full transition-all ${currentImage === index ? 'bg-white scale-110' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
        
        <CardContent className="p-5 space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-lg truncate pr-2 group-hover:text-brand-purple transition-colors">{space.name}</h3>
            <div className="flex items-center gap-1 text-sm bg-gray-100 px-2 py-1 rounded-full">
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              <span className="font-medium">{space.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-purple/60 mr-1"></span>
            {space.neighborhood}, {space.city}
          </p>
          
          <div className="flex justify-between items-center pt-1">
            <div>
              <p className="font-medium text-brand-purple flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1.5" />
                ${space.pricePerHour.toLocaleString()}/hora
              </p>
              {space.revenueShare > 0 && (
                <p className="text-xs text-gray-500 pl-5">
                  o {space.revenueShare}% de ingresos
                </p>
              )}
            </div>
            <div className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full flex items-center">
              <Users className="h-3.5 w-3.5 mr-1.5" />
              {space.capacity}
            </div>
          </div>
          
          {/* Tags section */}
          <div className="flex flex-wrap gap-1 pt-1">
            {space.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded-full border border-gray-100">
                {tag}
              </span>
            ))}
            {space.tags.length > 3 && (
              <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded-full border border-gray-100">
                +{space.tags.length - 3}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SpaceCard;
