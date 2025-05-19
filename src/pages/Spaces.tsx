
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpaceCard, { Space } from '@/components/SpaceCard';
import IntentSearch from '@/components/IntentSearch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

// Mock data for spaces
const ALL_SPACES: Space[] = [
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
  {
    id: '5',
    name: 'Galería de Arte para Eventos',
    description: 'Moderna galería de arte disponible para exposiciones, cócteles o presentaciones en un entorno cultural único.',
    images: [
      'https://images.unsplash.com/photo-1577083552792-a0d461cb1998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1577083552761-cb92edcdf5c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ],
    city: 'Madrid',
    neighborhood: 'Chamberí',
    pricePerHour: 150,
    revenueShare: 20,
    capacity: 60,
    tags: ['Galería', 'Arte', 'Eventos'],
    rating: 4.5,
  },
  {
    id: '6',
    name: 'Sala Acústica para Música',
    description: 'Sala especialmente acondicionada para ensayos, grabaciones o pequeños conciertos con excelente acústica.',
    images: [
      'https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1124&q=80',
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ],
    city: 'Barcelona',
    neighborhood: 'Poblenou',
    pricePerHour: 60,
    revenueShare: 15,
    capacity: 25,
    tags: ['Música', 'Acústica', 'Estudio'],
    rating: 4.9,
  },
];

// Filter component for spaces
const SpaceFilters = ({
  onFilterChange
}: {
  onFilterChange: (filters: any) => void;
}) => {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCity, setSelectedCity] = useState("");
  const [capacity, setCapacity] = useState("");
  const [withRevenueShare, setWithRevenueShare] = useState(false);
  
  const handleApplyFilters = () => {
    onFilterChange({
      priceRange,
      city: selectedCity,
      capacity: capacity ? parseInt(capacity) : null,
      withRevenueShare,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 space-y-6">
      <h3 className="font-medium">Filtros</h3>
      
      <div>
        <p className="text-sm text-gray-500 mb-2">Precio por hora</p>
        <div className="space-y-3">
          <Slider 
            defaultValue={priceRange}
            min={0}
            max={200}
            step={10}
            onValueChange={setPriceRange}
          />
          <div className="flex justify-between text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}+</span>
          </div>
        </div>
      </div>
      
      <div>
        <p className="text-sm text-gray-500 mb-2">Ciudad</p>
        <Select value={selectedCity} onValueChange={setSelectedCity}>
          <SelectTrigger>
            <SelectValue placeholder="Todas las ciudades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Todas las ciudades</SelectItem>
            <SelectItem value="Barcelona">Barcelona</SelectItem>
            <SelectItem value="Madrid">Madrid</SelectItem>
            <SelectItem value="Valencia">Valencia</SelectItem>
            <SelectItem value="Sevilla">Sevilla</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <p className="text-sm text-gray-500 mb-2">Capacidad</p>
        <Select value={capacity} onValueChange={setCapacity}>
          <SelectTrigger>
            <SelectValue placeholder="Cualquier capacidad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Cualquier capacidad</SelectItem>
            <SelectItem value="10">Hasta 10 personas</SelectItem>
            <SelectItem value="30">Hasta 30 personas</SelectItem>
            <SelectItem value="50">Hasta 50 personas</SelectItem>
            <SelectItem value="100">Hasta 100 personas</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="revenue-share" 
          checked={withRevenueShare}
          onCheckedChange={() => setWithRevenueShare(!withRevenueShare)}
        />
        <Label htmlFor="revenue-share" className="text-sm">
          Con opción de revenue share
        </Label>
      </div>
      
      <Button onClick={handleApplyFilters} className="w-full">
        Aplicar filtros
      </Button>
    </div>
  );
};

const Spaces = () => {
  const [searchParams] = useSearchParams();
  const intentQuery = searchParams.get('intent');
  const categoryQuery = searchParams.get('category');
  
  const [spaces, setSpaces] = useState<Space[]>(ALL_SPACES);
  const [filteredSpaces, setFilteredSpaces] = useState<Space[]>(ALL_SPACES);
  
  const handleFilterChange = (filters: any) => {
    // In a real implementation, this would call an API with the filters
    // For now, we'll filter the mock data
    const filtered = ALL_SPACES.filter(space => {
      // Price filter
      if (space.pricePerHour < filters.priceRange[0] || space.pricePerHour > filters.priceRange[1]) {
        return false;
      }
      
      // City filter
      if (filters.city && space.city !== filters.city) {
        return false;
      }
      
      // Capacity filter
      if (filters.capacity && space.capacity > filters.capacity) {
        return false;
      }
      
      // Revenue share filter
      if (filters.withRevenueShare && space.revenueShare === 0) {
        return false;
      }
      
      return true;
    });
    
    setFilteredSpaces(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold mb-4">
              {intentQuery 
                ? `Espacios para "${intentQuery}"` 
                : categoryQuery 
                ? `Espacios para ${categoryQuery}` 
                : "Explorar espacios"}
            </h1>
            
            <div className="max-w-2xl">
              <IntentSearch />
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-6">
            {/* Sidebar filters */}
            <div className="col-span-12 md:col-span-3">
              <SpaceFilters onFilterChange={handleFilterChange} />
            </div>
            
            {/* Main content */}
            <div className="col-span-12 md:col-span-9">
              {filteredSpaces.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="font-medium mb-2">No se encontraron espacios</h3>
                  <p className="text-gray-500">Intenta cambiar los filtros o la búsqueda</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSpaces.map((space) => (
                    <SpaceCard key={space.id} space={space} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Spaces;
