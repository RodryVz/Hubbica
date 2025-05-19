
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Space } from '@/components/SpaceCard';
import { Calendar } from 'lucide-react';

// Mock data for a specific space
const MOCK_SPACE: Space = {
  id: '1',
  name: 'Terraza con Vista Panorámica',
  description: 'Terraza con vista panorámica al centro histórico, perfecta para eventos sociales y afterworks. Este espacio cuenta con un área de bar totalmente equipada, sistema de sonido, iluminación ambiental ajustable y una zona cubierta en caso de lluvias. La terraza ofrece vistas espectaculares del skyline de la ciudad, creando un ambiente perfecto para eventos sociales, celebraciones o simplemente disfrutar de la puesta de sol con amigos.',
  images: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1580541631971-c7f8f8a1f407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    'https://images.unsplash.com/photo-1527440692932-f6e987d25b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    'https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  ],
  city: 'Barcelona',
  neighborhood: 'Gracia',
  pricePerHour: 120,
  revenueShare: 15,
  capacity: 50,
  tags: ['Terraza', 'Vistas', 'Exterior', 'Bar', 'Música', 'Eventos', 'Social'],
  rating: 4.8,
};

// Mock reviews
const MOCK_REVIEWS = [
  {
    id: '1',
    user: 'María G.',
    rating: 5,
    date: '15/04/2025',
    text: 'Increíble espacio para nuestro evento corporativo. Las vistas son espectaculares y el anfitrión fue muy atento a todas nuestras necesidades.',
    images: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    ],
  },
  {
    id: '2',
    user: 'Carlos R.',
    rating: 4,
    date: '02/03/2025',
    text: 'Celebramos un cumpleaños y salió genial. El único detalle negativo fue que el aire acondicionado no era suficiente para el calor de ese día.',
    images: [],
  },
  {
    id: '3',
    user: 'Laura M.',
    rating: 5,
    date: '18/02/2025',
    text: 'La terraza es perfecta para sesiones fotográficas. La luz natural es maravillosa y las vistas añaden un valor increíble a las fotos.',
    images: [
      'https://images.unsplash.com/photo-1517457437444-b37a959dcd98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    ],
  },
];

// Mock host data
const MOCK_HOST = {
  id: '1',
  name: 'Alex',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  rating: 4.9,
  responseRate: 98,
  responseTime: '1 hora',
  memberSince: 'enero 2024',
};

// Features component
const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-medium mb-4">Características del espacio</h3>
        <ul className="space-y-2">
          {[
            'Área total de 120m²',
            'Capacidad para 50 personas',
            'Sistema de sonido integrado',
            'Iluminación ambiental',
            'Barra de bar equipada',
            'Área cubierta para lluvia',
            'Baños',
            'Wifi de alta velocidad',
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 bg-brand-purple rounded-full" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-medium mb-4">El espacio incluye</h3>
        <ul className="space-y-2">
          {[
            'Personal básico de apoyo',
            'Limpieza antes y después',
            'Mesa de DJ',
            'Sillas y mesas',
            'Cargadores para dispositivos',
            'Nevera',
            'Seguridad básica',
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 bg-brand-purple rounded-full" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Review component
const Review = ({ review }: { review: typeof MOCK_REVIEWS[0] }) => {
  return (
    <div className="border-b border-gray-100 pb-6 mb-6 last:border-0">
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
          <span className="font-medium">{review.user}</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">{review.date}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{review.text}</p>
      
      {review.images.length > 0 && (
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {review.images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-24 h-24">
              <img 
                src={image} 
                alt={`Review by ${review.user}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SpaceDetail = () => {
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showImageGallery, setShowImageGallery] = useState(false);
  
  // In a real app, we'd fetch the space data based on the ID
  const space = MOCK_SPACE;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container">
          {/* Space name and basic info */}
          <div className="mb-6">
            <h1 className="text-3xl font-display font-bold mb-2">{space.name}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <span>★</span>
                <span>{space.rating}</span>
                <span>({MOCK_REVIEWS.length} reseñas)</span>
              </div>
              <span>•</span>
              <span>{space.neighborhood}, {space.city}</span>
              <span>•</span>
              <span>Hasta {space.capacity} personas</span>
            </div>
          </div>
          
          {/* Image gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
            <div className="aspect-video overflow-hidden rounded-tl-xl rounded-bl-xl">
              <img 
                src={space.images[0]} 
                alt={space.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="overflow-hidden">
                <img 
                  src={space.images[1]} 
                  alt={space.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-tr-xl">
                <img 
                  src={space.images[2]} 
                  alt={space.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src={space.images[3]} 
                  alt={space.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-br-xl relative">
                <img 
                  src={space.images[0]} 
                  alt={space.name}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
                  onClick={() => setShowImageGallery(true)}
                >
                  <span className="text-white font-medium">Ver todas</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column: Space details */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-display font-medium mb-1">
                    Espacio anfitrionado por {MOCK_HOST.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {space.tags.map(tag => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src={MOCK_HOST.image} 
                    alt={MOCK_HOST.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
              </div>
              
              <div className="prose max-w-none mb-8">
                <p>{space.description}</p>
              </div>
              
              {/* Monetization options */}
              <div className="bg-brand-purple/5 p-6 rounded-xl mb-8">
                <h3 className="font-display text-lg font-medium mb-4">Opciones de monetización</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <div className="font-medium mb-2">Precio por hora</div>
                    <div className="text-2xl font-display text-brand-purple mb-2">
                      ${space.pricePerHour}/h
                    </div>
                    <p className="text-sm text-gray-500">Ideal para eventos de corta duración o con presupuesto definido.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <div className="font-medium mb-2">Revenue share</div>
                    <div className="text-2xl font-display text-brand-purple mb-2">
                      {space.revenueShare}% de ingresos
                    </div>
                    <p className="text-sm text-gray-500">Perfecto para eventos con venta de entradas o consumibles.</p>
                  </div>
                </div>
              </div>
              
              {/* Tabs for more info */}
              <Tabs defaultValue="features" className="mb-8">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="features">Características</TabsTrigger>
                  <TabsTrigger value="reviews">Reseñas</TabsTrigger>
                  <TabsTrigger value="location">Ubicación</TabsTrigger>
                </TabsList>
                
                <TabsContent value="features" className="py-6">
                  <Features />
                </TabsContent>
                
                <TabsContent value="reviews" className="py-6">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="flex items-center gap-1 mr-4">
                        <span className="text-xl">★</span>
                        <span className="font-display text-xl">{space.rating}</span>
                      </div>
                      <span className="text-gray-500">{MOCK_REVIEWS.length} reseñas</span>
                    </div>
                    
                    <div>
                      {MOCK_REVIEWS.map(review => (
                        <Review key={review.id} review={review} />
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="location" className="py-6">
                  <div>
                    <h3 className="font-medium mb-4">Ubicación</h3>
                    <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden mb-4">
                      {/* Placeholder for map */}
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-500">Mapa no disponible en el MVP</span>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      {space.neighborhood}, {space.city}. La dirección exacta se compartirá después de la reserva.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Right column: Booking */}
            <div>
              <div className="sticky top-24">
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                  <h3 className="font-display text-lg font-medium mb-4">Reserva este espacio</h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Precio por hora</span>
                      <span className="font-medium">${space.pricePerHour}</span>
                    </div>
                    {space.revenueShare > 0 && (
                      <div className="flex justify-between text-sm text-brand-purple">
                        <span>O comparte ingresos</span>
                        <span>{space.revenueShare}%</span>
                      </div>
                    )}
                  </div>
                  
                  <Button className="w-full mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Ver disponibilidad</span>
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">Contactar al anfitrión</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Contactar a {MOCK_HOST.name}</DialogTitle>
                        <DialogDescription>
                          Envía un mensaje para conocer más detalles o acordar un modelo de monetización específico.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <p>En el MVP completo, aquí habría un formulario de contacto.</p>
                        <Button className="w-full">Enviar mensaje</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="font-medium mb-2">Acerca del anfitrión</h4>
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src={MOCK_HOST.image} 
                        alt={MOCK_HOST.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{MOCK_HOST.name}</p>
                        <p className="text-sm text-gray-500">Miembro desde {MOCK_HOST.memberSince}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Calificación</span>
                        <span>★ {MOCK_HOST.rating}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tasa de respuesta</span>
                        <span>{MOCK_HOST.responseRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tiempo de respuesta</span>
                        <span>{MOCK_HOST.responseTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Image gallery modal */}
      <Dialog open={showImageGallery} onOpenChange={setShowImageGallery}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
          <div className="h-full flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <span className="font-medium">Galería de fotos</span>
              <span>{selectedImageIndex + 1} / {space.images.length}</span>
            </div>
            <div className="flex-grow flex items-center justify-center bg-black p-4">
              <img 
                src={space.images[selectedImageIndex]} 
                alt={`${space.name} - Imagen ${selectedImageIndex + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4 flex justify-center gap-2">
              {space.images.map((_, index) => (
                <button 
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === selectedImageIndex ? 'bg-brand-purple' : 'bg-gray-300'}`}
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default SpaceDetail;
