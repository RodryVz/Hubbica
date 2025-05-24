import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Space } from '@/components/SpaceCard';
import Layout from '@/components/Layout';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { ALL_SPACES } from '@/data/spaces';

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
    // Use the imported spaces data instead of mock data
    setSpaces(ALL_SPACES);
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
