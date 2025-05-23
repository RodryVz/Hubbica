import { useState, useEffect } from 'react';
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
import Layout from '@/components/Layout';

/**
 * CONFIGURABLE SECTION: Spaces Data
 * 
 * TO MODIFY: Replace this mock data with your actual API integration
 * This should connect to your database or CMS to load real space data
 */
export const ALL_SPACES: Space[] = [
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

/**
 * OPTIMIZED FILTER SYSTEM
 * 
 * Enhanced filter component with improved user experience and functionality
 */
const SpaceFilters = ({
  onFilterChange,
  totalResults
}: {
  onFilterChange: (filters: any) => void;
  totalResults: number;
}) => {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCity, setSelectedCity] = useState("all");
  const [capacity, setCapacity] = useState("any");
  const [withRevenueShare, setWithRevenueShare] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Apply filters automatically when values change
  useEffect(() => {
    handleApplyFilters();
  }, [priceRange, selectedCity, capacity, withRevenueShare]);

  const handleApplyFilters = () => {
    const filters = {
      priceRange,
      city: selectedCity === "all" ? "" : selectedCity,
      capacity: capacity === "any" ? null : parseInt(capacity),
      withRevenueShare,
    };
    onFilterChange(filters);
  };

  const clearAllFilters = () => {
    setPriceRange([0, 200]);
    setSelectedCity("all");
    setCapacity("any");
    setWithRevenueShare(false);
  };

  const hasActiveFilters = selectedCity !== "all" || capacity !== "any" || withRevenueShare || 
                          priceRange[0] !== 0 || priceRange[1] !== 200;

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-lg">Filtros</h3>
        <span className="text-sm text-gray-500">{totalResults} espacios</span>
      </div>
      
      {hasActiveFilters && (
        <div className="mb-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearAllFilters}
            className="w-full"
          >
            Limpiar filtros
          </Button>
        </div>
      )}
      
      <div className="space-y-6">
        {/* Price Range Filter */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">Precio por hora (EUR)</p>
          <div className="space-y-3">
            <Slider 
              value={priceRange}
              min={0}
              max={200}
              step={10}
              onValueChange={setPriceRange}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>€{priceRange[0]}</span>
              <span>€{priceRange[1]}+</span>
            </div>
          </div>
        </div>
        
        {/* City Filter */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Ciudad</p>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Todas las ciudades" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las ciudades</SelectItem>
              <SelectItem value="Barcelona">Barcelona</SelectItem>
              <SelectItem value="Madrid">Madrid</SelectItem>
              <SelectItem value="Valencia">Valencia</SelectItem>
              <SelectItem value="Sevilla">Sevilla</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Capacity Filter */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Capacidad</p>
          <Select value={capacity} onValueChange={setCapacity}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Cualquier capacidad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Cualquier capacidad</SelectItem>
              <SelectItem value="10">Hasta 10 personas</SelectItem>
              <SelectItem value="30">Hasta 30 personas</SelectItem>
              <SelectItem value="50">Hasta 50 personas</SelectItem>
              <SelectItem value="100">Hasta 100 personas</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Revenue Share Filter */}
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="revenue-share" 
            checked={withRevenueShare}
            onCheckedChange={setWithRevenueShare}
          />
          <Label htmlFor="revenue-share" className="text-sm cursor-pointer">
            Con opción de revenue share
          </Label>
        </div>
      </div>
    </div>
  );
};

/**
 * Main Spaces Component
 * 
 * INTEGRATION POINTS:
 * - Replace ALL_SPACES with API call to load real data
 * - Add pagination for large datasets
 * - Integrate with analytics for user behavior tracking
 */
const Spaces = () => {
  const [searchParams] = useSearchParams();
  const intentQuery = searchParams.get('intent');
  const categoryQuery = searchParams.get('category');
  const tagsQuery = searchParams.get('tags');
  
  const [spaces, setSpaces] = useState<Space[]>(ALL_SPACES);
  const [filteredSpaces, setFilteredSpaces] = useState<Space[]>(ALL_SPACES);
  
  // Filter by URL parameters on page load
  useEffect(() => {
    if (tagsQuery) {
      const targetTags = tagsQuery.split(',');
      const filtered = ALL_SPACES.filter(space => 
        space.tags.some(tag => 
          targetTags.some(targetTag => 
            tag.toLowerCase().includes(targetTag.toLowerCase()) ||
            targetTag.toLowerCase().includes(tag.toLowerCase())
          )
        )
      );
      setFilteredSpaces(filtered);
    } else if (categoryQuery) {
      // Filter by specific category
      const categoryTagMap: { [key: string]: string[] } = {
        'talleres': ['Industrial', 'Taller', 'Creativo'],
        'eventos': ['Terraza', 'Vistas', 'Bar', 'Eventos', 'Galería', 'Arte'],
        'gastronomia': ['Cocina', 'Loft', 'Cenas'],
        'bienestar': ['Yoga', 'Jardín', 'Wellness'],
        'musica': ['Música', 'Acústica', 'Estudio']
      };
      
      const categoryTags = categoryTagMap[categoryQuery] || [];
      if (categoryTags.length > 0) {
        const filtered = ALL_SPACES.filter(space => 
          space.tags.some(tag => 
            categoryTags.some(categoryTag => 
              tag.toLowerCase().includes(categoryTag.toLowerCase()) ||
              categoryTag.toLowerCase().includes(tag.toLowerCase())
            )
          )
        );
        setFilteredSpaces(filtered);
      }
    } else {
      setFilteredSpaces(ALL_SPACES);
    }
  }, [tagsQuery, categoryQuery]);
  
  /**
   * OPTIMIZED FILTER HANDLER
   * Enhanced filtering with proper validation and performance
   */
  const handleFilterChange = (filters: any) => {
    let filtered = [...ALL_SPACES];
    
    // Apply URL-based filters first
    if (tagsQuery) {
      const targetTags = tagsQuery.split(',');
      filtered = filtered.filter(space => 
        space.tags.some(tag => 
          targetTags.some(targetTag => 
            tag.toLowerCase().includes(targetTag.toLowerCase()) ||
            targetTag.toLowerCase().includes(tag.toLowerCase())
          )
        )
      );
    } else if (categoryQuery) {
      const categoryTagMap: { [key: string]: string[] } = {
        'talleres': ['Industrial', 'Taller', 'Creativo'],
        'eventos': ['Terraza', 'Vistas', 'Bar', 'Eventos', 'Galería', 'Arte'],
        'gastronomia': ['Cocina', 'Loft', 'Cenas'],
        'bienestar': ['Yoga', 'Jardín', 'Wellness'],
        'musica': ['Música', 'Acústica', 'Estudio']
      };
      
      const categoryTags = categoryTagMap[categoryQuery] || [];
      if (categoryTags.length > 0) {
        filtered = filtered.filter(space => 
          space.tags.some(tag => 
            categoryTags.some(categoryTag => 
              tag.toLowerCase().includes(categoryTag.toLowerCase()) ||
              categoryTag.toLowerCase().includes(tag.toLowerCase())
            )
          )
        );
      }
    }
    
    // Apply additional filters
    filtered = filtered.filter(space => {
      // Price filter (with proper validation)
      if (filters.priceRange && Array.isArray(filters.priceRange)) {
        if (space.pricePerHour < filters.priceRange[0] || space.pricePerHour > filters.priceRange[1]) {
          return false;
        }
      }
      
      // City filter
      if (filters.city && space.city !== filters.city) {
        return false;
      }
      
      // Capacity filter (greater than or equal to required capacity)
      if (filters.capacity && space.capacity < filters.capacity) {
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
    <Layout>
      <main className="flex-grow py-4 md:py-8">
        <div className="container">
          {/* Header Section */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-display font-bold mb-4">
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
          
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Filters - Responsive */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <SpaceFilters 
                  onFilterChange={handleFilterChange} 
                  totalResults={filteredSpaces.length}
                />
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {filteredSpaces.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg border border-gray-100">
                  <div className="max-w-md mx-auto">
                    <h3 className="text-lg font-medium mb-2">No se encontraron espacios</h3>
                    <p className="text-gray-500 mb-4">
                      Intenta cambiar los filtros o realizar una nueva búsqueda
                    </p>
                    <Button variant="outline" onClick={() => window.location.href = '/spaces'}>
                      Ver todos los espacios
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Results Summary */}
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-sm text-gray-600">
                      {filteredSpaces.length} espacios encontrados
                    </p>
                  </div>
                  
                  {/* Spaces Grid - Responsive */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                    {filteredSpaces.map((space) => (
                      <SpaceCard key={space.id} space={space} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Spaces;
