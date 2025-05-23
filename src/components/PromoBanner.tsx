
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronRight, Sparkles, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

type PromoItem = {
  id: string;
  title: string;
  description: string;
  discount: string;
  image: string;
  venue: string;
  link: string;
}

const PROMO_ITEMS: PromoItem[] = [
  {
    id: "promo1",
    title: "Descuentos en salones premium",
    description: "20% off en salones de eventos para cumpleaños y celebraciones",
    discount: "20% OFF",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    venue: "Varios salones",
    link: "/spaces?category=parties"
  },
  {
    id: "promo2",
    title: "Espacios para workshops",
    description: "15% off en espacios para talleres y eventos formativos",
    discount: "15% OFF",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    venue: "Co-works selectos",
    link: "/spaces?category=workshops"
  },
  {
    id: "promo3",
    title: "Happy hour extendido",
    description: "Bares con happy hour extendido exclusivo para reservas por hubbica",
    discount: "2x1",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    venue: "Bares seleccionados",
    link: "/spaces?category=bars"
  }
];

const PromoBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedPromo, setExpandedPromo] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-brand-purple/10 to-brand-orange/10 py-6 mx-auto my-8 rounded-xl">
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute top-2 right-2 rounded-full z-10" 
        onClick={() => setIsOpen(false)}
      >
        <X size={16} />
      </Button>
      
      <div className="container">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={20} className="text-brand-purple" />
          <h2 className="text-lg font-display font-bold">Promociones exclusivas</h2>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {PROMO_ITEMS.map((promo) => (
              <CarouselItem key={promo.id} className="md:basis-1/2 lg:basis-1/3">
                <div
                  className={`group h-full bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md ${
                    expandedPromo === promo.id ? 'shadow-md' : ''
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={promo.image} 
                      alt={promo.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                    <div className="absolute top-3 right-3 bg-brand-purple text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {promo.discount}
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white font-medium">{promo.title}</h3>
                      <p className="text-white/80 text-sm">{promo.venue}</p>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-sm text-gray-600 line-clamp-2">{promo.description}</p>
                    <div className="mt-3 flex items-center justify-end">
                      <Link to={promo.link}>
                        <Button size="sm" variant="outline" className="rounded-full group">
                          Ver oferta
                          <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </div>
        </Carousel>
        
        <div className="flex justify-center mt-4">
          <Link to="/promos">
            <Button variant="link" size="sm" className="text-brand-purple gap-1">
              Ver todas las promociones
              <ChevronRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
