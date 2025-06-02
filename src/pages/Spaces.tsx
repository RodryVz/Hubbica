
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Space } from '@/components/SpaceCard';
import SpaceCard from '@/components/SpaceCard';
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
            

            {/* Results Section */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-6">
                {filteredSpaces.length} Espacios encontrados
              </h2>
              
              {filteredSpaces.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No se encontraron espacios con los filtros aplicados.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSelectedCategory(null);
                      setPriceRange([0, 500]);
                      setCapacity(1);
                      setHasFeaturesFilter(false);
                      setSearchQuery('');
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredSpaces.map((space) => (
                    <SpaceCard 
                      key={space.id} 
                      space={space}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Spaces;
