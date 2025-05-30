import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface Space {
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
  rating?: number;
  whatsappNumber: string; // Número de WhatsApp del propietario
}

interface SpaceCardProps {
  space: Space;
  featured?: boolean;
}

/**
 * SpaceCard Component
 * 
 * Displays a card with space information including:
 * - Image gallery with navigation
 * - Space name and location
 * - Price per hour in ARS (converted from EUR)
 * - Capacity information
 * - Like button functionality
 * 
 * @param space - Space data to display
 * @param featured - Whether this is a featured space card (optional styling)
 */
const SpaceCard = ({ space, featured = false }: SpaceCardProps) => {
  const [liked, setLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Convert EUR to ARS
  const convertToARS = (eurAmount: number) => {
    const exchangeRate = 1200; // Approximate EUR to ARS exchange rate
    return Math.round(eurAmount * exchangeRate);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
  };
  
  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === space.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? space.images.length - 1 : prev - 1
    );
  };
  
  return (
    <Link 
      to={`/spaces/${space.id}`} 
      className={cn(
        "group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all relative flex flex-col",
        featured && "transform hover:-translate-y-1 shadow-md hover:shadow-lg"
      )}
    >
      {/* Image container with controls */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img 
          src={space.images[currentImageIndex]} 
          alt={space.name} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
        />
        
        {/* Navigation arrows - only show if more than one image */}
        {space.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        
        {/* Navigation dots */}
        {space.images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {space.images.map((_, index) => (
              <div 
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentImageIndex 
                    ? 'bg-white' 
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Like button */}
        <button 
          onClick={handleLike}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm z-10 transition-transform hover:scale-110"
        >
          <Heart 
            className={cn(
              "w-4 h-4 transition-colors", 
              liked ? "fill-red-500 text-red-500" : "text-gray-500"
            )} 
          />
        </button>
        
        {/* Price Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-md text-sm font-medium shadow-sm">
          ARS {convertToARS(space.pricePerHour).toLocaleString()}/h
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-medium line-clamp-1">{space.name}</h3>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
          <span className="truncate">{space.neighborhood}, {space.city}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
          {space.description}
        </p>
        
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-3.5 h-3.5 mr-1" />
            <span>Hasta {space.capacity}</span>
          </div>
          
          {/* Only show the first tag */}
          {space.tags.length > 0 && (
            <Badge variant="secondary" className="text-xs">
              {space.tags[0]}
            </Badge>
          )}
        </div>
      </div>
    </Link>
  );
};

export default SpaceCard;