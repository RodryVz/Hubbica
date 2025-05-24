import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Space } from '@/components/SpaceCard';
import Layout from '@/components/Layout';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"

interface Category {
  id: string;
  name: string;
}

// Mock data for space categories
const CATEGORIES: Category[] = [
  {
    id: 'parties',
    name: 'Fiestas',
  },
  {
    id: 'workshops',
    name: 'Talleres',
  },
  {
    id: 'photoshoots',
    name: 'Fotografía',
  },
  {
    id: 'meetings',
    name: 'Reuniones',
  },
];

interface SpacesFilter {
  category?: string;
  city?: string;
  priceRange?: [number, number];
  capacity?: number;
  hasFeatures?: boolean;
}

const Spaces = () => {
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [capacity, setCapacity] = useState(1);
  const [hasFeaturesFilter, setHasFeaturesFilter] = useState(false);

  useEffect(() => {
    // Mock data for spaces
    const mockSpaces: Space[] = [
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
    ];

    setSpaces(mockSpaces);
  }, []);

  const handleFeatureFilterChange = (checked: boolean) => {
    setHasFeaturesFilter(checked);
  };

  const filterSpaces = (space: Space, filters: SpacesFilter): boolean => {
    if (filters.category && !space.tags.includes(filters.category)) {
      return false;
    }
    if (filters.city && space.city !== filters.city) {
      return false;
    }
    if (filters.priceRange && (space.pricePerHour < filters.priceRange[0] || space.pricePerHour > filters.priceRange[1])) {
      return false;
    }
     if (filters.capacity && space.capacity < filters.capacity) {
       return false;
     }
    if (filters.hasFeatures && space.tags.length === 0) {
      return false;
    }
    return true;
  };

  const filteredSpaces = spaces.filter(space =>
    filterSpaces(space, {
      category: selectedCategory,
      city: searchQuery,
      priceRange: priceRange,
      capacity: capacity,
      hasFeatures: hasFeaturesFilter,
    })
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Search Section */}
        <div className="bg-white py-6 shadow-md">
          <div className="container">
            <div className="flex items-center justify-between">
              <Input
                type="text"
                placeholder="Buscar por ciudad..."
                className="w-full md:w-auto"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button>Buscar</Button>
            </div>
          </div>
        </div>
        
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
                {/* Categories Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Categorías</h3>
                  {CATEGORIES.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={category.id}
                        checked={selectedCategory === category.id}
                        onCheckedChange={(checked) =>
                          setSelectedCategory(checked ? category.id : null)
                        }
                      />
                      <label htmlFor={category.id} className="text-sm">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
                
                {/* Price Range Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Precio por hora</h3>
                  <Slider
                    defaultValue={priceRange}
                    max={1000}
                    step={10}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                {/* Capacity Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Capacidad mínima</h3>
                  <Slider
                    defaultValue={[capacity]}
                    max={100}
                    step={1}
                    onValueChange={(value) => setCapacity(value[0])}
                  />
                  <div className="text-sm text-gray-500">
                    <span>{capacity} personas</span>
                  </div>
                </div>
                
                {/* Features Filter - Fixed TypeScript error */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Características</h3>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="features"
                      checked={hasFeaturesFilter}
                      onCheckedChange={handleFeatureFilterChange}
                    />
                    <label htmlFor="features" className="text-sm">
                      Espacios con características especiales
                    </label>
                  </div>
                </div>
                
                {/* Clear Filters Button */}
                <Button variant="outline" onClick={() => {
                  setSelectedCategory(null);
                  setPriceRange([0, 500]);
                  setCapacity(1);
                  setHasFeaturesFilter(false);
                  setSearchQuery('');
                }}>
                  Limpiar filtros
                </Button>
              </div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-4">
                {filteredSpaces.length} Espacios encontrados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSpaces.map((space) => (
                  <div key={space.id}>
                    {space.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Spaces;
